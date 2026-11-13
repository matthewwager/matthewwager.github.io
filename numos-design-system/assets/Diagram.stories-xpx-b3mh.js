import{j as e}from"./jsx-runtime-BYYWji4R.js";import{y as s,x as r,d as G,b as R}from"./DiagramCell-BVBcLmyd.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";import v from"./git-branch-Dxa2M4T0.js";import I from"./hammer-BjT4ZBEm.js";import N from"./shield-check-B2HjqpXN.js";import _ from"./rocket-SBTibwt-.js";import m from"./inbox-CZnJlf16.js";const E={title:"Components/Diagram",component:s,parameters:{layout:"padded"}},a={name:"An assembled flow",render:()=>e.jsxs(s,{columns:7,dots:!0,children:[e.jsx(r,{row:1,column:1,type:"node","aria-label":"Repo",children:e.jsx(v,{})}),e.jsx(r,{row:1,column:2,type:"badge",rotate:90}),e.jsx(r,{row:1,column:3,type:"node","aria-label":"Build",children:e.jsx(I,{})}),e.jsx(r,{row:1,column:4,type:"corner",rotate:90}),e.jsx(r,{row:2,column:4,type:"node","aria-label":"Tests",children:e.jsx(N,{})}),e.jsx(r,{row:2,column:5,type:"dotted",rotate:90}),e.jsx(r,{row:2,column:6,type:"arrow",rotate:270}),e.jsx(r,{row:2,column:7,type:"node","aria-label":"Deploy",children:e.jsx(_,{})})]})},L=[{label:"line",props:{type:"line"}},{label:"dotted",props:{type:"dotted"}},{label:"arrow",props:{type:"arrow"}},{label:"corner",props:{type:"corner"}},{label:"cross",props:{type:"cross"}},{label:"branch",props:{type:"branch"}},{label:"badge",props:{type:"badge"}},{label:"badge, error",props:{type:"badge",badge:{status:"error"}}},{label:"badge, label",props:{type:"badge",badge:{status:"positive",label:"100"}}},{label:"node",props:{type:"node","aria-label":"Inbox"},content:e.jsx(m,{})},{label:"space",props:{type:"space"}}],Y=[{label:"line, rotate 90",props:{type:"line",rotate:90}},{label:"arrow, rotate 270 (→)",props:{type:"arrow",rotate:270}},{label:"arrow, rotate 90 (←)",props:{type:"arrow",rotate:90}},{label:"arrow, flipY (↑)",props:{type:"arrow",flipY:!0}},{label:"corner, rotate 90",props:{type:"corner",rotate:90}},{label:"corner, rotate 180",props:{type:"corner",rotate:180}},{label:"corner, rotate 270",props:{type:"corner",rotate:270}},{label:"corner, flipX",props:{type:"corner",flipX:!0}},{label:"branch, flipX",props:{type:"branch",flipX:!0}},{label:"branch, rotate 90",props:{type:"branch",rotate:90}},{label:"branch, rotate 270",props:{type:"branch",rotate:270}},{label:"badge, rotate 90",props:{type:"badge",rotate:90,badge:{status:"negative",label:"3"}}}];function T({items:S}){return e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(8rem, 1fr))",gap:"var(--space-4)",width:"100%"},children:S.map(p=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--space-2)"},children:[e.jsx(s,{columns:1,children:e.jsx(r,{row:1,column:1,...p.props,children:p.content})}),e.jsx("span",{style:{font:"var(--type-paragraph-xs-regular)",color:"var(--content-subtle)",textAlign:"center"},children:p.label})]},p.label))})}const o={render:()=>e.jsx(T,{items:L})},t={render:()=>e.jsx(T,{items:Y})},l={name:"Node slot",render:()=>e.jsxs(s,{columns:5,dots:!0,children:[e.jsx(r,{row:1,column:1,type:"node","aria-label":"Inbox",children:e.jsx(m,{})}),e.jsx(r,{row:1,column:2,type:"arrow",rotate:270}),e.jsx(r,{row:1,column:3,type:"node",children:e.jsx(G,{name:"Acme Corp",type:"entity",size:"sm"})}),e.jsx(r,{row:1,column:4,type:"arrow",rotate:270}),e.jsx(r,{row:1,column:5,type:"node","aria-label":"Pay",children:e.jsx(R,{app:"pay",size:"sm"})})]})},n={name:"Node without a tile",render:()=>e.jsxs(s,{columns:3,children:[e.jsx(r,{row:1,column:1,type:"node",tile:!1,children:e.jsx(G,{name:"Acme Corp",type:"entity",size:"sm"})}),e.jsx(r,{row:1,column:2,type:"arrow",rotate:270}),e.jsx(r,{row:1,column:3,type:"node","aria-label":"Inbox",children:e.jsx(m,{})})]})};var i,c,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "An assembled flow",
  render: () => <DiagramGrid columns={7} dots>
      <DiagramCell row={1} column={1} type="node" aria-label="Repo">
        <GitBranch />
      </DiagramCell>
      <DiagramCell row={1} column={2} type="badge" rotate={90} />
      <DiagramCell row={1} column={3} type="node" aria-label="Build">
        <Hammer />
      </DiagramCell>
      <DiagramCell row={1} column={4} type="corner" rotate={90} />
      <DiagramCell row={2} column={4} type="node" aria-label="Tests">
        <ShieldCheck />
      </DiagramCell>
      <DiagramCell row={2} column={5} type="dotted" rotate={90} />
      <DiagramCell row={2} column={6} type="arrow" rotate={270} />
      <DiagramCell row={2} column={7} type="node" aria-label="Deploy">
        <Rocket />
      </DiagramCell>
    </DiagramGrid>
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,y,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Gallery items={TYPE_GALLERY} />
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var g,w,x;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Gallery items={TRANSFORM_GALLERY} />
}`,...(x=(w=t.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var D,j,h;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Node slot",
  render: () => <DiagramGrid columns={5} dots>
      <DiagramCell row={1} column={1} type="node" aria-label="Inbox">
        <Inbox />
      </DiagramCell>
      <DiagramCell row={1} column={2} type="arrow" rotate={270} />
      <DiagramCell row={1} column={3} type="node">
        <Avatar name="Acme Corp" type="entity" size="sm" />
      </DiagramCell>
      <DiagramCell row={1} column={4} type="arrow" rotate={270} />
      <DiagramCell row={1} column={5} type="node" aria-label="Pay">
        <AppIcon app="pay" size="sm" />
      </DiagramCell>
    </DiagramGrid>
}`,...(h=(j=l.parameters)==null?void 0:j.docs)==null?void 0:h.source}}};var C,f,A;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Node without a tile",
  render: () => <DiagramGrid columns={3}>
      <DiagramCell row={1} column={1} type="node" tile={false}>
        <Avatar name="Acme Corp" type="entity" size="sm" />
      </DiagramCell>
      <DiagramCell row={1} column={2} type="arrow" rotate={270} />
      <DiagramCell row={1} column={3} type="node" aria-label="Inbox">
        <Inbox />
      </DiagramCell>
    </DiagramGrid>
}`,...(A=(f=n.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};const z=["Default","Types","Transforms","NodeSlot","NodeWithoutTile"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:a,NodeSlot:l,NodeWithoutTile:n,Transforms:t,Types:o,__namedExportsOrder:z,default:E},Symbol.toStringTag,{value:"Module"}));export{a as D,l as N,t as T,q as a,n as b,o as c};
