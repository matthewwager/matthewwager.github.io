import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as h}from"./index-ClcD9ViR.js";import{m as d,o as l,p as ge,u as B,r as o,d as x,k as z,n as xe}from"./DiagramCell-BVBcLmyd.js";import"./index-Brl4xq4Y.js";import ye from"./pencil-b3GEJP5P.js";import je from"./trash-2-CtCsxZDL.js";import ve from"./ellipsis-vertical-Bt6GK3lC.js";import Ce from"./minimize-2-bzaecEGE.js";import fe from"./maximize-2-B86vZ2tx.js";const D={margin:"0 0 0.75rem",font:"var(--type-paragraph-s-regular)",color:"var(--content-subtle)"},W={margin:0,font:"var(--type-paragraph-s-regular)",letterSpacing:"var(--type-paragraph-s-regular-tracking)",color:"var(--content-base)"},be={title:"Components/Card",component:d,parameters:{layout:"padded"}};function k({selected:r=!1,expand:i,minWidth:a,maxWidth:n,minHeight:s,maxHeight:t}){return e.jsxs(d,{selected:r,expand:i,minWidth:a,maxWidth:n,minHeight:s,maxHeight:t,onClick:()=>{},children:[e.jsx(l,{lead:e.jsx(x,{size:"xs",name:"Maya Chen"}),title:"Maya Chen",subtitle:"Product Designer",actions:[{icon:e.jsx(ye,{size:16,"aria-hidden":!0}),label:"Edit"},{icon:e.jsx(je,{size:16,"aria-hidden":!0}),label:"Delete"},{icon:e.jsx(ve,{size:16,"aria-hidden":!0}),label:"More"}]}),e.jsx("p",{style:{margin:0,font:"var(--type-paragraph-s-regular)",letterSpacing:"var(--type-paragraph-s-regular-tracking)",color:"var(--content-base)"},children:"Explore the latest updates and features designed to enhance your workflow and boost productivity effortlessly."}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-1)",width:"100%"},children:[e.jsx(z,{variant:"link",size:"sm",style:{marginRight:"auto"},children:"Don't show this again"}),e.jsx(z,{variant:"secondary",size:"sm",children:"Cancel"}),e.jsx(z,{variant:"primary",size:"sm",children:"Save"})]})]})}const g={render:()=>e.jsx(k,{})},p={name:"Static, with a table filling it",render:()=>e.jsxs(d,{expand:"x",maxWidth:"28rem",padding:"none",children:[e.jsx(ge,{children:e.jsx(l,{title:"Paid last week",subtitle:"Nov 2 to Nov 6"})}),e.jsxs("div",{style:{display:"flex",width:"100%"},children:[e.jsxs(B,{header:e.jsx(o,{type:"columnHead",children:"Vendor"}),children:[e.jsx(o,{type:"text",children:"Alston & Bird"}),e.jsx(o,{type:"text",children:"Connor Group"}),e.jsx(o,{type:"emphasis",children:"Total"})]}),e.jsxs(B,{header:e.jsx(o,{type:"columnHead",children:"Paid"}),width:120,align:"end",children:[e.jsx(o,{type:"numeric",children:"$511,366"}),e.jsx(o,{type:"numeric",children:"$350,777"}),e.jsx(o,{type:"emphasis",children:"$862,143"})]})]})]})},m={render:()=>e.jsxs(d,{href:"#",expand:"x",maxWidth:"25rem",children:[e.jsx(l,{title:"Storybook"}),e.jsx("p",{style:{margin:0,font:"var(--type-paragraph-s-regular)",color:"var(--content-subtle)"},children:"Every component and its variants, with usage docs."})]})},y={render:()=>e.jsx(k,{selected:!0})},j={name:'expand="x" (fills its container)',render:()=>e.jsx("div",{style:{width:"44rem",maxWidth:"100%"},children:e.jsx(k,{expand:"x"})})},v={name:'expand="x" with min/max (clamped)',render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsxs("div",{children:[e.jsxs("p",{style:{margin:"0 0 0.5rem",font:"var(--type-paragraph-s-regular)",color:"var(--content-subtle)"},children:["A 14rem container — the card still won't shrink below its 18rem ",e.jsx("code",{children:"minWidth"}),"."]}),e.jsx("div",{style:{width:"14rem",overflow:"visible"},children:e.jsx(k,{expand:"x",minWidth:"18rem",maxWidth:"32rem"})})]}),e.jsxs("div",{children:[e.jsxs("p",{style:{margin:"0 0 0.5rem",font:"var(--type-paragraph-s-regular)",color:"var(--content-subtle)"},children:["A 48rem container — the card won't grow past its 32rem ",e.jsx("code",{children:"maxWidth"}),"."]}),e.jsx("div",{style:{width:"48rem",maxWidth:"100%"},children:e.jsx(k,{expand:"x",minWidth:"18rem",maxWidth:"32rem"})})]})]})};function Se(){const[r,i]=h.useState(!1);return e.jsxs("div",{style:{width:"44rem",maxWidth:"100%"},children:[e.jsx("p",{style:D,children:"Click anywhere on the card to toggle it between its default width and a wider layout."}),e.jsxs(d,{expand:r?"x":void 0,maxWidth:r?"40rem":void 0,onClick:()=>i(a=>!a),children:[e.jsx(l,{lead:e.jsx(x,{size:"xs",name:"Maya Chen"}),title:"Maya Chen",subtitle:"Product Designer"}),e.jsx("p",{style:W,children:r?"Expanded, up to a 40rem cap — click anywhere on the card again to collapse it.":"Collapsed at its default width — click anywhere on the card to expand it."})]})]})}const C={name:"Expandable — click the card",render:()=>e.jsx(Se,{})};function we(){const[r,i]=h.useState(!1),[a,n]=h.useState(!1);return e.jsxs("div",{style:{width:"44rem",maxWidth:"100%"},children:[e.jsx("p",{style:D,children:"The card's own click (selection) and the header's expand icon are independent — the icon button stops its click from also reaching the card, so toggling one never triggers the other."}),e.jsxs(d,{selected:r,expand:a?"x":void 0,maxWidth:a?"40rem":void 0,onClick:()=>i(s=>!s),children:[e.jsx(l,{lead:e.jsx(x,{size:"xs",name:"Maya Chen"}),title:"Maya Chen",subtitle:"Product Designer",actions:[{icon:a?e.jsx(Ce,{size:16,"aria-hidden":!0}):e.jsx(fe,{size:16,"aria-hidden":!0}),label:a?"Collapse":"Expand",onClick:()=>n(s=>!s)}]}),e.jsxs("p",{style:W,children:[r?"Selected":"Not selected"," — click the card body to toggle selection, or the ",a?"collapse":"expand"," icon above to ",a?"collapse":"expand"," the card."]})]})]})}const f={name:"Expandable — icon button (independent of selection)",render:()=>e.jsx(we,{})},E=[{id:"maya",name:"Maya Chen",role:"Product Designer"},{id:"sam",name:"Sam Ortiz",role:"Engineering Manager"},{id:"priya",name:"Priya Nair",role:"Data Analyst"}];function ke(){return e.jsxs("div",{children:[e.jsxs("p",{style:D,children:[e.jsx("code",{children:'type="single"'}),' (the default) — selecting one card deselects any other, the same "radio" behavior ',e.jsx("code",{children:"<RadioGroup>"})," gives ",e.jsx("code",{children:"<Radio>"}),"."]}),e.jsx(xe,{defaultValue:"maya",children:E.map(r=>e.jsxs(d,{value:r.id,children:[e.jsx(l,{lead:e.jsx(x,{size:"xs",name:r.name}),title:r.name,subtitle:r.role}),e.jsx("p",{style:W,children:"Click a card to select it — hover any other to see the border-only hover chrome, distinct from the selected ring."})]},r.id))})]})}const b={name:"CardGroup — single select",render:()=>e.jsx(ke,{})};function De(){const[r,i]=h.useState(["maya"]);function a(n){i(s=>s.includes(n)?s.filter(t=>t!==n):[...s,n])}return e.jsxs("div",{children:[e.jsxs("p",{style:D,children:[e.jsx("code",{children:'type="multiple"'})," — no shared value to coordinate, same as ",e.jsx("code",{children:"<CheckboxGroup>"}),"; each card's own ",e.jsx("code",{children:"selected"}),"/",e.jsx("code",{children:"onClick"})," stays in your own hands."]}),e.jsx(xe,{type:"multiple",children:E.map(n=>e.jsxs(d,{selected:r.includes(n.id),onClick:()=>a(n.id),children:[e.jsx(l,{lead:e.jsx(x,{size:"xs",name:n.name}),title:n.name,subtitle:n.role}),e.jsx("p",{style:W,children:"Click any number of cards to select them."})]},n.id))})]})}const S={name:"CardGroup — multi select",render:()=>e.jsx(De,{})};function Ee(){const[r,i]=h.useState(E.map(t=>t.id)),[a,n]=h.useState(null);function s(t){!a||a===t||i(u=>{const c=u.filter(ue=>ue!==a);return c.splice(c.indexOf(t),0,a),c})}return e.jsxs("div",{children:[e.jsx("p",{style:D,children:"Drag a card by its body to reorder the list — native HTML5 drag-and-drop, same as reordering rows in a real app."}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-3)",width:"22rem"},children:r.map(t=>{const u=E.find(c=>c.id===t);return e.jsx("div",{onDragOver:c=>c.preventDefault(),onDrop:()=>s(t),children:e.jsx(d,{expand:"x",draggable:!0,onDragStart:()=>n(t),onDragEnd:()=>n(null),children:e.jsx(l,{lead:e.jsx(x,{size:"xs",name:u.name}),title:u.name,subtitle:u.role})})},t)})})]})}const w={name:"Drag and drop (reorder)",render:()=>e.jsx(Ee,{})};var M,P,G;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <ComposedCard />
}`,...(G=(P=g.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};var T,A,O,I,H;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Static, with a table filling it",
  render: () => <Card expand="x" maxWidth="28rem" padding="none">
      <CardSection>
        <CardHeader title="Paid last week" subtitle="Nov 2 to Nov 6" />
      </CardSection>
      <div style={{
      display: "flex",
      width: "100%"
    }}>
        <Column header={<Cell type="columnHead">Vendor</Cell>}>
          <Cell type="text">Alston &amp; Bird</Cell>
          <Cell type="text">Connor Group</Cell>
          <Cell type="emphasis">Total</Cell>
        </Column>
        <Column header={<Cell type="columnHead">Paid</Cell>} width={120} align="end">
          <Cell type="numeric">$511,366</Cell>
          <Cell type="numeric">$350,777</Cell>
          <Cell type="emphasis">$862,143</Cell>
        </Column>
      </div>
    </Card>
}`,...(O=(A=p.parameters)==null?void 0:A.docs)==null?void 0:O.source},description:{story:'Nothing to click, follow, drag or pick: a static card — the same surface,\nno hover border, no focus stop. `padding="none"` lets a table fill it;\n`<CardSection>` keeps the header\'s inset.',...(H=(I=p.parameters)==null?void 0:I.docs)==null?void 0:H.description}}};var N,_,L,$,R;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Card href="#" expand="x" maxWidth="25rem">
      <CardHeader title="Storybook" />
      <p style={{
      margin: 0,
      font: "var(--type-paragraph-s-regular)",
      color: "var(--content-subtle)"
    }}>Every component and its variants, with usage docs.</p>
    </Card>
}`,...(L=(_=m.parameters)==null?void 0:_.docs)==null?void 0:L.source},description:{story:"A card that navigates: `href` renders it as a real link.",...(R=($=m.parameters)==null?void 0:$.docs)==null?void 0:R.description}}};var V,Y,F;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <ComposedCard selected />
}`,...(F=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:F.source}}};var q,J,K;j.parameters={...j.parameters,docs:{...(q=j.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "expand=\\"x\\" (fills its container)",
  render: () => <div style={{
    width: "44rem",
    maxWidth: "100%"
  }}>
      <ComposedCard expand="x" />
    </div>
}`,...(K=(J=j.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "expand=\\"x\\" with min/max (clamped)",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-6)"
  }}>
      <div>
        <p style={{
        margin: "0 0 0.5rem",
        font: "var(--type-paragraph-s-regular)",
        color: "var(--content-subtle)"
      }}>
          A 14rem container — the card still won&apos;t shrink below its 18rem <code>minWidth</code>.
        </p>
        <div style={{
        width: "14rem",
        overflow: "visible"
      }}>
          <ComposedCard expand="x" minWidth="18rem" maxWidth="32rem" />
        </div>
      </div>
      <div>
        <p style={{
        margin: "0 0 0.5rem",
        font: "var(--type-paragraph-s-regular)",
        color: "var(--content-subtle)"
      }}>
          A 48rem container — the card won&apos;t grow past its 32rem <code>maxWidth</code>.
        </p>
        <div style={{
        width: "48rem",
        maxWidth: "100%"
      }}>
          <ComposedCard expand="x" minWidth="18rem" maxWidth="32rem" />
        </div>
      </div>
    </div>
}`,...(X=(U=v.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Z,ee,re;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "Expandable — click the card",
  render: () => <ExpandableByCardClickDemo />
}`,...(re=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,ne,te;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: "Expandable — icon button (independent of selection)",
  render: () => <ExpandableByIconButtonDemo />
}`,...(te=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var se,ie,de;b.parameters={...b.parameters,docs:{...(se=b.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: "CardGroup — single select",
  render: () => <SingleSelectGroupDemo />
}`,...(de=(ie=b.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var oe,le,ce;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: "CardGroup — multi select",
  render: () => <MultiSelectGroupDemo />
}`,...(ce=(le=S.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var pe,me,he;w.parameters={...w.parameters,docs:{...(pe=w.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: "Drag and drop (reorder)",
  render: () => <DraggableDemo />
}`,...(he=(me=w.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};const We=["Default","StaticWithTable","Link","Selected","ExpandToFill","ExpandWithinBounds","ExpandableByCardClick","ExpandableByIconButton","SingleSelect","MultiSelect","Draggable"],He=Object.freeze(Object.defineProperty({__proto__:null,Default:g,Draggable:w,ExpandToFill:j,ExpandWithinBounds:v,ExpandableByCardClick:C,ExpandableByIconButton:f,Link:m,MultiSelect:S,Selected:y,SingleSelect:b,StaticWithTable:p,__namedExportsOrder:We,default:be},Symbol.toStringTag,{value:"Module"}));export{He as C,g as D,j as E,m as L,S as M,y as S,w as a,v as b,C as c,f as d,b as e,p as f};
