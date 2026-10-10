import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as l}from"./index-ClcD9ViR.js";import{l as o,n as c,d as m,j as E,m as ee}from"./DiagramConnector-DY1AhLDR.js";import"./index-Brl4xq4Y.js";import ae from"./pencil-b3GEJP5P.js";import ne from"./trash-2-CtCsxZDL.js";import te from"./ellipsis-vertical-Bt6GK3lC.js";import se from"./minimize-2-bzaecEGE.js";import ie from"./maximize-2-B86vZ2tx.js";const S={margin:"0 0 0.75rem",font:"var(--type-paragraph-s-regular)",color:"var(--content-subtle)"},w={margin:0,font:"var(--type-paragraph-s-regular)",letterSpacing:"var(--type-paragraph-s-regular-tracking)",color:"var(--content-base)"},de={title:"Components/Card",component:o,parameters:{layout:"padded"}};function C({selected:r=!1,expand:i,minWidth:a,maxWidth:n,minHeight:s,maxHeight:t}){return e.jsxs(o,{selected:r,expand:i,minWidth:a,maxWidth:n,minHeight:s,maxHeight:t,children:[e.jsx(c,{lead:e.jsx(m,{size:"xs",name:"Maya Chen"}),title:"Maya Chen",subtitle:"Product Designer",actions:[{icon:e.jsx(ae,{size:16,"aria-hidden":!0}),label:"Edit"},{icon:e.jsx(ne,{size:16,"aria-hidden":!0}),label:"Delete"},{icon:e.jsx(te,{size:16,"aria-hidden":!0}),label:"More"}]}),e.jsx("p",{style:{margin:0,font:"var(--type-paragraph-s-regular)",letterSpacing:"var(--type-paragraph-s-regular-tracking)",color:"var(--content-base)"},children:"Explore the latest updates and features designed to enhance your workflow and boost productivity effortlessly."}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-1)",width:"100%"},children:[e.jsx(E,{variant:"link",size:"sm",style:{marginRight:"auto"},children:"Don't show this again"}),e.jsx(E,{variant:"secondary",size:"sm",children:"Cancel"}),e.jsx(E,{variant:"primary",size:"sm",children:"Save"})]})]})}const x={render:()=>e.jsx(C,{})},h={render:()=>e.jsx(C,{selected:!0})},u={name:'expand="x" (fills its container)',render:()=>e.jsx("div",{style:{width:"44rem",maxWidth:"100%"},children:e.jsx(C,{expand:"x"})})},g={name:'expand="x" with min/max (clamped)',render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsxs("div",{children:[e.jsxs("p",{style:{margin:"0 0 0.5rem",font:"var(--type-paragraph-s-regular)",color:"var(--content-subtle)"},children:["A 14rem container — the card still won't shrink below its 18rem ",e.jsx("code",{children:"minWidth"}),"."]}),e.jsx("div",{style:{width:"14rem",overflow:"visible"},children:e.jsx(C,{expand:"x",minWidth:"18rem",maxWidth:"32rem"})})]}),e.jsxs("div",{children:[e.jsxs("p",{style:{margin:"0 0 0.5rem",font:"var(--type-paragraph-s-regular)",color:"var(--content-subtle)"},children:["A 48rem container — the card won't grow past its 32rem ",e.jsx("code",{children:"maxWidth"}),"."]}),e.jsx("div",{style:{width:"48rem",maxWidth:"100%"},children:e.jsx(C,{expand:"x",minWidth:"18rem",maxWidth:"32rem"})})]})]})};function oe(){const[r,i]=l.useState(!1);return e.jsxs("div",{style:{width:"44rem",maxWidth:"100%"},children:[e.jsx("p",{style:S,children:"Click anywhere on the card to toggle it between its default width and a wider layout."}),e.jsxs(o,{expand:r?"x":void 0,maxWidth:r?"40rem":void 0,onClick:()=>i(a=>!a),children:[e.jsx(c,{lead:e.jsx(m,{size:"xs",name:"Maya Chen"}),title:"Maya Chen",subtitle:"Product Designer"}),e.jsx("p",{style:w,children:r?"Expanded, up to a 40rem cap — click anywhere on the card again to collapse it.":"Collapsed at its default width — click anywhere on the card to expand it."})]})]})}const y={name:"Expandable — click the card",render:()=>e.jsx(oe,{})};function le(){const[r,i]=l.useState(!1),[a,n]=l.useState(!1);return e.jsxs("div",{style:{width:"44rem",maxWidth:"100%"},children:[e.jsx("p",{style:S,children:"The card's own click (selection) and the header's expand icon are independent — the icon button stops its click from also reaching the card, so toggling one never triggers the other."}),e.jsxs(o,{selected:r,expand:a?"x":void 0,maxWidth:a?"40rem":void 0,onClick:()=>i(s=>!s),children:[e.jsx(c,{lead:e.jsx(m,{size:"xs",name:"Maya Chen"}),title:"Maya Chen",subtitle:"Product Designer",actions:[{icon:a?e.jsx(se,{size:16,"aria-hidden":!0}):e.jsx(ie,{size:16,"aria-hidden":!0}),label:a?"Collapse":"Expand",onClick:()=>n(s=>!s)}]}),e.jsxs("p",{style:w,children:[r?"Selected":"Not selected"," — click the card body to toggle selection, or the ",a?"collapse":"expand"," icon above to ",a?"collapse":"expand"," the card."]})]})]})}const j={name:"Expandable — icon button (independent of selection)",render:()=>e.jsx(le,{})},D=[{id:"maya",name:"Maya Chen",role:"Product Designer"},{id:"sam",name:"Sam Ortiz",role:"Engineering Manager"},{id:"priya",name:"Priya Nair",role:"Data Analyst"}];function ce(){return e.jsxs("div",{children:[e.jsxs("p",{style:S,children:[e.jsx("code",{children:'type="single"'}),' (the default) — selecting one card deselects any other, the same "radio" behavior ',e.jsx("code",{children:"<RadioGroup>"})," gives ",e.jsx("code",{children:"<Radio>"}),"."]}),e.jsx(ee,{defaultValue:"maya",children:D.map(r=>e.jsxs(o,{value:r.id,children:[e.jsx(c,{lead:e.jsx(m,{size:"xs",name:r.name}),title:r.name,subtitle:r.role}),e.jsx("p",{style:w,children:"Click a card to select it — hover any other to see the border-only hover chrome, distinct from the selected ring."})]},r.id))})]})}const v={name:"CardGroup — single select",render:()=>e.jsx(ce,{})};function me(){const[r,i]=l.useState(["maya"]);function a(n){i(s=>s.includes(n)?s.filter(t=>t!==n):[...s,n])}return e.jsxs("div",{children:[e.jsxs("p",{style:S,children:[e.jsx("code",{children:'type="multiple"'})," — no shared value to coordinate, same as ",e.jsx("code",{children:"<CheckboxGroup>"}),"; each card's own ",e.jsx("code",{children:"selected"}),"/",e.jsx("code",{children:"onClick"})," stays in your own hands."]}),e.jsx(ee,{type:"multiple",children:D.map(n=>e.jsxs(o,{selected:r.includes(n.id),onClick:()=>a(n.id),children:[e.jsx(c,{lead:e.jsx(m,{size:"xs",name:n.name}),title:n.name,subtitle:n.role}),e.jsx("p",{style:w,children:"Click any number of cards to select them."})]},n.id))})]})}const f={name:"CardGroup — multi select",render:()=>e.jsx(me,{})};function pe(){const[r,i]=l.useState(D.map(t=>t.id)),[a,n]=l.useState(null);function s(t){!a||a===t||i(p=>{const d=p.filter(re=>re!==a);return d.splice(d.indexOf(t),0,a),d})}return e.jsxs("div",{children:[e.jsx("p",{style:S,children:"Drag a card by its body to reorder the list — native HTML5 drag-and-drop, same as reordering rows in a real app."}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-3)",width:"22rem"},children:r.map(t=>{const p=D.find(d=>d.id===t);return e.jsx("div",{onDragOver:d=>d.preventDefault(),onDrop:()=>s(t),children:e.jsx(o,{expand:"x",draggable:!0,onDragStart:()=>n(t),onDragEnd:()=>n(null),children:e.jsx(c,{lead:e.jsx(m,{size:"xs",name:p.name}),title:p.name,subtitle:p.role})})},t)})})]})}const b={name:"Drag and drop (reorder)",render:()=>e.jsx(pe,{})};var k,W,z;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <ComposedCard />
}`,...(z=(W=x.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var M,B,G;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <ComposedCard selected />
}`,...(G=(B=h.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var O,P,I;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "expand=\\"x\\" (fills its container)",
  render: () => <div style={{
    width: "44rem",
    maxWidth: "100%"
  }}>
      <ComposedCard expand="x" />
    </div>
}`,...(I=(P=u.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var T,_,A;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(A=(_=g.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var L,R,N;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "Expandable — click the card",
  render: () => <ExpandableByCardClickDemo />
}`,...(N=(R=y.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var Y,F,H;j.parameters={...j.parameters,docs:{...(Y=j.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "Expandable — icon button (independent of selection)",
  render: () => <ExpandableByIconButtonDemo />
}`,...(H=(F=j.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var V,q,J;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "CardGroup — single select",
  render: () => <SingleSelectGroupDemo />
}`,...(J=(q=v.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,U;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "CardGroup — multi select",
  render: () => <MultiSelectGroupDemo />
}`,...(U=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Z,$;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "Drag and drop (reorder)",
  render: () => <DraggableDemo />
}`,...($=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};const xe=["Default","Selected","ExpandToFill","ExpandWithinBounds","ExpandableByCardClick","ExpandableByIconButton","SingleSelect","MultiSelect","Draggable"],Se=Object.freeze(Object.defineProperty({__proto__:null,Default:x,Draggable:b,ExpandToFill:u,ExpandWithinBounds:g,ExpandableByCardClick:y,ExpandableByIconButton:j,MultiSelect:f,Selected:h,SingleSelect:v,__namedExportsOrder:xe,default:de},Symbol.toStringTag,{value:"Module"}));export{Se as C,x as D,u as E,f as M,h as S,b as a,g as b,y as c,j as d,v as e};
