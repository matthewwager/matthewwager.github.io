import{j as e}from"./jsx-runtime-BYYWji4R.js";import{aA as i,ai as O,am as I,t as c,q as t,aj as R,au as _,ar as U,aq as s,W as o,k as u,r as h,ak as L,al as x}from"./DiagramCell-D01BibyM.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";import N from"./circle-plus-BIyj2I_j.js";import P from"./search-Cpengdub.js";import G from"./funnel-DlR6VGzI.js";import W from"./settings-2-x8J_n0Zq.js";import $ from"./table-DpGfGRcu.js";import q from"./layout-grid-LHnh2PTj.js";const B={title:"Components/Toolbar",component:i},k=[{value:"2026-01",label:"Jan 2026"},{value:"2025-12",label:"Dec 2025"},{value:"2025-11",label:"Nov 2025"}],d=[{name:"Gmail",items:10,total:"$110,408"},{name:"Stripe",items:8,total:"$89,636"},{name:"Ramp",items:8,total:"$92,826"}];function z(){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-2)"},children:[e.jsx(h,{label:"Failed syncs only"}),e.jsx(h,{label:"Has unmatched documents"})]})}function m(){return e.jsxs(L,{defaultValue:"table",children:[e.jsx(x,{value:"table",leadingIcon:e.jsx($,{size:16}),"aria-label":"Table view"}),e.jsx(x,{value:"grid",leadingIcon:e.jsx(q,{size:16}),"aria-label":"Grid view"})]})}const p=e.jsxs(e.Fragment,{children:[e.jsx(u,{variant:"secondary",children:"Upload"}),e.jsx(u,{variant:"primary",children:"Add Source"})]}),D=e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"ghost",icon:e.jsx(P,{size:20}),"aria-label":"Search"}),e.jsx(o,{variant:"ghost",icon:e.jsx(G,{size:20}),"aria-label":"Filter"}),e.jsx(o,{variant:"ghost",icon:e.jsx(W,{size:20}),"aria-label":"View settings"})]}),E=e.jsx(o,{variant:"primary",icon:e.jsx(N,{size:20}),"aria-label":"Add Source"}),r={name:"Select",parameters:{layout:"padded",noThemeSplit:!0},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-4)",width:"100%"},children:[e.jsx(i,{"aria-label":"Sources",selector:e.jsx(I,{options:k,defaultValue:"2026-01","aria-label":"Month"}),controls:e.jsxs(e.Fragment,{children:[e.jsx(O,{filters:e.jsx(z,{})}),e.jsx(m,{})]}),actions:p,compactControls:D,compactActions:E}),e.jsxs("div",{style:{display:"flex"},children:[e.jsx(c,{header:e.jsx(t,{type:"columnHead",children:"Source"}),children:d.map(a=>e.jsx(t,{type:"avatar",avatarType:"entity",name:a.name,children:a.name},a.name))}),e.jsx(c,{header:e.jsx(t,{type:"columnHead",children:"Items"}),width:80,children:d.map(a=>e.jsx(t,{type:"numeric",children:a.items},a.name))}),e.jsx(c,{header:e.jsx(t,{type:"columnHead",children:"Total Amount"}),width:140,children:d.map(a=>e.jsx(t,{type:"numeric",children:a.total},a.name))})]})]})},l={name:"Tabs",parameters:{layout:"padded",noThemeSplit:!0},render:()=>e.jsx(i,{"aria-label":"Invoices",selector:e.jsx(_,{defaultValue:"all",children:e.jsxs(U,{children:[e.jsx(s,{value:"all",children:"All"}),e.jsx(s,{value:"due",children:"Due"}),e.jsx(s,{value:"scheduled",children:"Scheduled"}),e.jsx(s,{value:"paid",children:"Paid"})]})}),controls:e.jsxs(e.Fragment,{children:[e.jsx(R,{placeholder:"Search invoices","aria-label":"Search invoices"}),e.jsx(m,{})]}),actions:p})},n={render:()=>e.jsx("div",{style:{width:"22.5rem",maxWidth:"100%"},children:e.jsx(i,{"aria-label":"Sources",selector:e.jsx(I,{options:k,defaultValue:"2026-01","aria-label":"Month"}),controls:e.jsxs(e.Fragment,{children:[e.jsx(O,{filters:e.jsx(z,{})}),e.jsx(m,{})]}),actions:p,compactControls:D,compactActions:E})})};var S,b,j,y,v;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Select",
  // Full canvas width: each light/dark half is narrower than the 40rem the toolbar needs before it goes compact.
  parameters: {
    layout: "padded",
    noThemeSplit: true
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-4)",
    width: "100%"
  }}>
      <Toolbar aria-label="Sources" selector={<Select options={MONTHS} defaultValue="2026-01" aria-label="Month" />} controls={<>
            <SearchFilter filters={<SourceFilters />} />
            <ViewSwitch />
          </>} actions={actions} compactControls={compactControls} compactActions={compactActions} />
      <div style={{
      display: "flex"
    }}>
        <Column header={<Cell type="columnHead">Source</Cell>}>
          {SOURCES.map(source => <Cell key={source.name} type="avatar" avatarType="entity" name={source.name}>
              {source.name}
            </Cell>)}
        </Column>
        <Column header={<Cell type="columnHead">Items</Cell>} width={80}>
          {SOURCES.map(source => <Cell key={source.name} type="numeric">
              {source.items}
            </Cell>)}
        </Column>
        <Column header={<Cell type="columnHead">Total Amount</Cell>} width={140}>
          {SOURCES.map(source => <Cell key={source.name} type="numeric">
              {source.total}
            </Cell>)}
        </Column>
      </div>
    </div>
}`,...(j=(b=r.parameters)==null?void 0:b.docs)==null?void 0:j.source},description:{story:`Figma's "Select" type: a Select picks what's shown; controls and actions on the right.`,...(v=(y=r.parameters)==null?void 0:y.docs)==null?void 0:v.description}}};var T,f,C,g,w;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Tabs",
  parameters: {
    layout: "padded",
    noThemeSplit: true
  },
  render: () => <Toolbar aria-label="Invoices" selector={<Tabs defaultValue="all">
          <TabList>
            <Tab value="all">All</Tab>
            <Tab value="due">Due</Tab>
            <Tab value="scheduled">Scheduled</Tab>
            <Tab value="paid">Paid</Tab>
          </TabList>
        </Tabs>} controls={<>
          <SearchInput placeholder="Search invoices" aria-label="Search invoices" />
          <ViewSwitch />
        </>} actions={actions} />
}`,...(C=(f=l.parameters)==null?void 0:f.docs)==null?void 0:C.source},description:{story:`Figma's "Tabs" type: tabs pick what's shown instead of a Select. Here the search is plain — a SearchInput, no filter panel.`,...(w=(g=l.parameters)==null?void 0:g.docs)==null?void 0:w.description}}};var F,A,M,V,H;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "22.5rem",
    maxWidth: "100%"
  }}>
      <Toolbar aria-label="Sources" selector={<Select options={MONTHS} defaultValue="2026-01" aria-label="Month" />} controls={<>
            <SearchFilter filters={<SourceFilters />} />
            <ViewSwitch />
          </>} actions={actions} compactControls={compactControls} compactActions={compactActions} />
    </div>
}`,...(M=(A=n.parameters)==null?void 0:A.docs)==null?void 0:M.source},description:{story:`Figma's "Mobile" type: the same toolbar in a narrow container.`,...(H=(V=n.parameters)==null?void 0:V.docs)==null?void 0:H.description}}};const J=["SelectType","TabsType","Mobile"],ne=Object.freeze(Object.defineProperty({__proto__:null,Mobile:n,SelectType:r,TabsType:l,__namedExportsOrder:J,default:B},Symbol.toStringTag,{value:"Module"}));export{n as M,r as S,l as T,ne as a};
