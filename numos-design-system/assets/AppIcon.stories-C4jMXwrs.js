import{j as e}from"./jsx-runtime-BYYWji4R.js";import{b as p}from"./DiagramConnector-DY1AhLDR.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";const u=["collect","pay","accruals","reconcile","close","analyze","forecast","communicate","team","notifications","settings","assistant"],f={title:"Components/AppIcon",component:p,argTypes:{app:{control:"select",options:u},size:{control:"select",options:["sm","md","lg"]}},args:{app:"collect",size:"md"}},a={},n={render:t=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gap:"var(--space-3)"},children:u.map(s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--space-1)"},children:[e.jsx(p,{app:s,size:t.size}),e.jsx("span",{style:{fontSize:"var(--text-xs)",color:"var(--content-subtle)"},children:s})]},s))})},r={render:t=>e.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"var(--space-5)"},children:["sm","md","lg"].map(s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--space-1)"},children:[e.jsx(p,{app:t.app,size:s}),e.jsx("span",{style:{fontSize:"var(--text-xs)",color:"var(--content-subtle)"},children:s})]},s))})};var o,l,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var i,d,m;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gap: "var(--space-3)"
  }}>
      {APPS.map(app => <div key={app} style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--space-1)"
    }}>
          <AppIcon app={app} size={args.size} />
          <span style={{
        fontSize: "var(--text-xs)",
        color: "var(--content-subtle)"
      }}>{app}</span>
        </div>)}
    </div>
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var g,x,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    alignItems: "flex-end",
    gap: "var(--space-5)"
  }}>
      {(["sm", "md", "lg"] as const).map(size => <div key={size} style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--space-1)"
    }}>
          <AppIcon app={args.app} size={size} />
          <span style={{
        fontSize: "var(--text-xs)",
        color: "var(--content-subtle)"
      }}>{size}</span>
        </div>)}
    </div>
}`,...(v=(x=r.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const y=["Default","AllApps","Sizes"],I=Object.freeze(Object.defineProperty({__proto__:null,AllApps:n,Default:a,Sizes:r,__namedExportsOrder:y,default:f},Symbol.toStringTag,{value:"Module"}));export{n as A,r as S,I as a};
