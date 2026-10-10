import{j as r}from"./jsx-runtime-BYYWji4R.js";import{v as l,w as a,u as e,d as v}from"./DiagramConnector-DY1AhLDR.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";import w from"./git-branch-Dxa2M4T0.js";import j from"./hammer-BjT4ZBEm.js";import D from"./shield-check-B2HjqpXN.js";import h from"./rocket-SBTibwt-.js";import f from"./inbox-CZnJlf16.js";const y={title:"Components/Diagram",component:l,parameters:{layout:"padded"}},n={name:"An assembled flow",render:()=>r.jsxs(l,{columns:6,children:[r.jsx(a,{row:1,column:1,"aria-label":"Repo",children:r.jsx(w,{size:16})}),r.jsx(e,{row:1,column:2,variant:"line",rotation:90,badge:{status:"complete"}}),r.jsx(a,{row:1,column:3,"aria-label":"Build",children:r.jsx(j,{size:16})}),r.jsx(e,{row:1,column:4,variant:"corner",rotation:270}),r.jsx(a,{row:2,column:4,"aria-label":"Tests",children:r.jsx(D,{size:16})}),r.jsx(e,{row:2,column:5,variant:"line",rotation:90,dashed:!0,arrow:!0}),r.jsx(a,{row:2,column:6,"aria-label":"Deploy",children:r.jsx(h,{size:16})})]})},o={name:"A node holding an <Avatar>",render:()=>r.jsxs(l,{columns:3,children:[r.jsx(a,{row:1,column:1,tile:!1,"aria-label":"Acme Corp",children:r.jsx(v,{name:"Acme Corp",type:"entity",size:"sm"})}),r.jsx(e,{row:1,column:2,variant:"line",rotation:90,arrow:!0}),r.jsx(a,{row:1,column:3,"aria-label":"Inbox",children:r.jsx(f,{size:16})})]})},A=[{label:"line (vertical)",render:()=>r.jsx(e,{row:1,column:1,variant:"line"})},{label:"line (horizontal)",render:()=>r.jsx(e,{row:1,column:1,variant:"line",rotation:90})},{label:"line, dashed",render:()=>r.jsx(e,{row:1,column:1,variant:"line",dashed:!0})},{label:"line, arrow",render:()=>r.jsx(e,{row:1,column:1,variant:"line",arrow:!0})},{label:"corner",render:()=>r.jsx(e,{row:1,column:1,variant:"corner"})},{label:"corner, rotate 90",render:()=>r.jsx(e,{row:1,column:1,variant:"corner",rotation:90})},{label:"corner, rotate 180",render:()=>r.jsx(e,{row:1,column:1,variant:"corner",rotation:180})},{label:"corner, rotate 270",render:()=>r.jsx(e,{row:1,column:1,variant:"corner",rotation:270})},{label:"branch",render:()=>r.jsx(e,{row:1,column:1,variant:"branch"})},{label:"branch, rotate 180",render:()=>r.jsx(e,{row:1,column:1,variant:"branch",rotation:180})},{label:"dot",render:()=>r.jsx(e,{row:1,column:1,variant:"dot"})},{label:"badge: complete",render:()=>r.jsx(e,{row:1,column:1,variant:"line",badge:{status:"complete"}})},{label:"badge: error",render:()=>r.jsx(e,{row:1,column:1,variant:"line",badge:{status:"error"}})}],t={name:"Connector variants",render:()=>r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(6rem, 1fr))",gap:"var(--space-4)"},children:A.map(i=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--space-2)"},children:[r.jsx(l,{columns:1,children:i.render()}),r.jsx("span",{style:{font:"var(--type-paragraph-xs-regular)",color:"var(--content-subtle)",textAlign:"center"},children:i.label})]},i.label))})};var s,m,c;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "An assembled flow",
  render: () => <DiagramGrid columns={6}>
      <DiagramNode row={1} column={1} aria-label="Repo">
        <GitBranch size={16} />
      </DiagramNode>
      <DiagramConnector row={1} column={2} variant="line" rotation={90} badge={{
      status: "complete"
    }} />
      <DiagramNode row={1} column={3} aria-label="Build">
        <Hammer size={16} />
      </DiagramNode>
      <DiagramConnector row={1} column={4} variant="corner" rotation={270} />
      <DiagramNode row={2} column={4} aria-label="Tests">
        <ShieldCheck size={16} />
      </DiagramNode>
      <DiagramConnector row={2} column={5} variant="line" rotation={90} dashed arrow />
      <DiagramNode row={2} column={6} aria-label="Deploy">
        <Rocket size={16} />
      </DiagramNode>
    </DiagramGrid>
}`,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,u,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "A node holding an <Avatar>",
  render: () => <DiagramGrid columns={3}>
      <DiagramNode row={1} column={1} tile={false} aria-label="Acme Corp">
        <Avatar name="Acme Corp" type="entity" size="sm" />
      </DiagramNode>
      <DiagramConnector row={1} column={2} variant="line" rotation={90} arrow />
      <DiagramNode row={1} column={3} aria-label="Inbox">
        <Inbox size={16} />
      </DiagramNode>
    </DiagramGrid>
}`,...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,x,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Connector variants",
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(6rem, 1fr))",
    gap: "var(--space-4)"
  }}>
      {VARIANT_GALLERY.map(item => <div key={item.label} style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--space-2)"
    }}>
          <DiagramGrid columns={1}>{item.render()}</DiagramGrid>
          <span style={{
        font: "var(--type-paragraph-xs-regular)",
        color: "var(--content-subtle)",
        textAlign: "center"
      }}>{item.label}</span>
        </div>)}
    </div>
}`,...(b=(x=t.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const C=["Default","WithAnEntityNode","ConnectorVariants"],k=Object.freeze(Object.defineProperty({__proto__:null,ConnectorVariants:t,Default:n,WithAnEntityNode:o,__namedExportsOrder:C,default:y},Symbol.toStringTag,{value:"Module"}));export{t as C,n as D,o as W,k as a};
