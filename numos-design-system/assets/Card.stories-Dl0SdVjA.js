import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as p}from"./index-ClcD9ViR.js";import{m as d,o as l,d as m,k,n as ie}from"./DiagramCell-D01BibyM.js";import"./index-Brl4xq4Y.js";import oe from"./pencil-b3GEJP5P.js";import le from"./trash-2-CtCsxZDL.js";import ce from"./ellipsis-vertical-Bt6GK3lC.js";import pe from"./minimize-2-bzaecEGE.js";import me from"./maximize-2-B86vZ2tx.js";const w={margin:"0 0 0.75rem",font:"var(--type-paragraph-s-regular)",color:"var(--content-subtle)"},E={margin:0,font:"var(--type-paragraph-s-regular)",letterSpacing:"var(--type-paragraph-s-regular-tracking)",color:"var(--content-base)"},xe={title:"Components/Card",component:d,parameters:{layout:"padded"}};function S({selected:r=!1,expand:i,minWidth:a,maxWidth:n,minHeight:s,maxHeight:t}){return e.jsxs(d,{selected:r,expand:i,minWidth:a,maxWidth:n,minHeight:s,maxHeight:t,children:[e.jsx(l,{lead:e.jsx(m,{size:"xs",name:"Maya Chen"}),title:"Maya Chen",subtitle:"Product Designer",actions:[{icon:e.jsx(oe,{size:16,"aria-hidden":!0}),label:"Edit"},{icon:e.jsx(le,{size:16,"aria-hidden":!0}),label:"Delete"},{icon:e.jsx(ce,{size:16,"aria-hidden":!0}),label:"More"}]}),e.jsx("p",{style:{margin:0,font:"var(--type-paragraph-s-regular)",letterSpacing:"var(--type-paragraph-s-regular-tracking)",color:"var(--content-base)"},children:"Explore the latest updates and features designed to enhance your workflow and boost productivity effortlessly."}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-1)",width:"100%"},children:[e.jsx(k,{variant:"link",size:"sm",style:{marginRight:"auto"},children:"Don't show this again"}),e.jsx(k,{variant:"secondary",size:"sm",children:"Cancel"}),e.jsx(k,{variant:"primary",size:"sm",children:"Save"})]})]})}const h={render:()=>e.jsx(S,{})},c={render:()=>e.jsxs(d,{href:"#",expand:"x",maxWidth:"25rem",children:[e.jsx(l,{title:"Storybook"}),e.jsx("p",{style:{margin:0,font:"var(--type-paragraph-s-regular)",color:"var(--content-subtle)"},children:"Every component and its variants, with usage docs."})]})},u={render:()=>e.jsx(S,{selected:!0})},g={name:'expand="x" (fills its container)',render:()=>e.jsx("div",{style:{width:"44rem",maxWidth:"100%"},children:e.jsx(S,{expand:"x"})})},y={name:'expand="x" with min/max (clamped)',render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsxs("div",{children:[e.jsxs("p",{style:{margin:"0 0 0.5rem",font:"var(--type-paragraph-s-regular)",color:"var(--content-subtle)"},children:["A 14rem container — the card still won't shrink below its 18rem ",e.jsx("code",{children:"minWidth"}),"."]}),e.jsx("div",{style:{width:"14rem",overflow:"visible"},children:e.jsx(S,{expand:"x",minWidth:"18rem",maxWidth:"32rem"})})]}),e.jsxs("div",{children:[e.jsxs("p",{style:{margin:"0 0 0.5rem",font:"var(--type-paragraph-s-regular)",color:"var(--content-subtle)"},children:["A 48rem container — the card won't grow past its 32rem ",e.jsx("code",{children:"maxWidth"}),"."]}),e.jsx("div",{style:{width:"48rem",maxWidth:"100%"},children:e.jsx(S,{expand:"x",minWidth:"18rem",maxWidth:"32rem"})})]})]})};function he(){const[r,i]=p.useState(!1);return e.jsxs("div",{style:{width:"44rem",maxWidth:"100%"},children:[e.jsx("p",{style:w,children:"Click anywhere on the card to toggle it between its default width and a wider layout."}),e.jsxs(d,{expand:r?"x":void 0,maxWidth:r?"40rem":void 0,onClick:()=>i(a=>!a),children:[e.jsx(l,{lead:e.jsx(m,{size:"xs",name:"Maya Chen"}),title:"Maya Chen",subtitle:"Product Designer"}),e.jsx("p",{style:E,children:r?"Expanded, up to a 40rem cap — click anywhere on the card again to collapse it.":"Collapsed at its default width — click anywhere on the card to expand it."})]})]})}const j={name:"Expandable — click the card",render:()=>e.jsx(he,{})};function ue(){const[r,i]=p.useState(!1),[a,n]=p.useState(!1);return e.jsxs("div",{style:{width:"44rem",maxWidth:"100%"},children:[e.jsx("p",{style:w,children:"The card's own click (selection) and the header's expand icon are independent — the icon button stops its click from also reaching the card, so toggling one never triggers the other."}),e.jsxs(d,{selected:r,expand:a?"x":void 0,maxWidth:a?"40rem":void 0,onClick:()=>i(s=>!s),children:[e.jsx(l,{lead:e.jsx(m,{size:"xs",name:"Maya Chen"}),title:"Maya Chen",subtitle:"Product Designer",actions:[{icon:a?e.jsx(pe,{size:16,"aria-hidden":!0}):e.jsx(me,{size:16,"aria-hidden":!0}),label:a?"Collapse":"Expand",onClick:()=>n(s=>!s)}]}),e.jsxs("p",{style:E,children:[r?"Selected":"Not selected"," — click the card body to toggle selection, or the ",a?"collapse":"expand"," icon above to ",a?"collapse":"expand"," the card."]})]})]})}const v={name:"Expandable — icon button (independent of selection)",render:()=>e.jsx(ue,{})},D=[{id:"maya",name:"Maya Chen",role:"Product Designer"},{id:"sam",name:"Sam Ortiz",role:"Engineering Manager"},{id:"priya",name:"Priya Nair",role:"Data Analyst"}];function ge(){return e.jsxs("div",{children:[e.jsxs("p",{style:w,children:[e.jsx("code",{children:'type="single"'}),' (the default) — selecting one card deselects any other, the same "radio" behavior ',e.jsx("code",{children:"<RadioGroup>"})," gives ",e.jsx("code",{children:"<Radio>"}),"."]}),e.jsx(ie,{defaultValue:"maya",children:D.map(r=>e.jsxs(d,{value:r.id,children:[e.jsx(l,{lead:e.jsx(m,{size:"xs",name:r.name}),title:r.name,subtitle:r.role}),e.jsx("p",{style:E,children:"Click a card to select it — hover any other to see the border-only hover chrome, distinct from the selected ring."})]},r.id))})]})}const f={name:"CardGroup — single select",render:()=>e.jsx(ge,{})};function ye(){const[r,i]=p.useState(["maya"]);function a(n){i(s=>s.includes(n)?s.filter(t=>t!==n):[...s,n])}return e.jsxs("div",{children:[e.jsxs("p",{style:w,children:[e.jsx("code",{children:'type="multiple"'})," — no shared value to coordinate, same as ",e.jsx("code",{children:"<CheckboxGroup>"}),"; each card's own ",e.jsx("code",{children:"selected"}),"/",e.jsx("code",{children:"onClick"})," stays in your own hands."]}),e.jsx(ie,{type:"multiple",children:D.map(n=>e.jsxs(d,{selected:r.includes(n.id),onClick:()=>a(n.id),children:[e.jsx(l,{lead:e.jsx(m,{size:"xs",name:n.name}),title:n.name,subtitle:n.role}),e.jsx("p",{style:E,children:"Click any number of cards to select them."})]},n.id))})]})}const b={name:"CardGroup — multi select",render:()=>e.jsx(ye,{})};function je(){const[r,i]=p.useState(D.map(t=>t.id)),[a,n]=p.useState(null);function s(t){!a||a===t||i(x=>{const o=x.filter(de=>de!==a);return o.splice(o.indexOf(t),0,a),o})}return e.jsxs("div",{children:[e.jsx("p",{style:w,children:"Drag a card by its body to reorder the list — native HTML5 drag-and-drop, same as reordering rows in a real app."}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-3)",width:"22rem"},children:r.map(t=>{const x=D.find(o=>o.id===t);return e.jsx("div",{onDragOver:o=>o.preventDefault(),onDrop:()=>s(t),children:e.jsx(d,{expand:"x",draggable:!0,onDragStart:()=>n(t),onDragEnd:()=>n(null),children:e.jsx(l,{lead:e.jsx(m,{size:"xs",name:x.name}),title:x.name,subtitle:x.role})})},t)})})]})}const C={name:"Drag and drop (reorder)",render:()=>e.jsx(je,{})};var W,z,M;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <ComposedCard />
}`,...(M=(z=h.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var B,G,O,P,I;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Card href="#" expand="x" maxWidth="25rem">
      <CardHeader title="Storybook" />
      <p style={{
      margin: 0,
      font: "var(--type-paragraph-s-regular)",
      color: "var(--content-subtle)"
    }}>Every component and its variants, with usage docs.</p>
    </Card>
}`,...(O=(G=c.parameters)==null?void 0:G.docs)==null?void 0:O.source},description:{story:"A card that navigates: `href` renders it as a real link.",...(I=(P=c.parameters)==null?void 0:P.docs)==null?void 0:I.description}}};var T,A,_;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <ComposedCard selected />
}`,...(_=(A=u.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var L,R,H;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "expand=\\"x\\" (fills its container)",
  render: () => <div style={{
    width: "44rem",
    maxWidth: "100%"
  }}>
      <ComposedCard expand="x" />
    </div>
}`,...(H=(R=g.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var N,Y,F;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(F=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:F.source}}};var V,q,J;j.parameters={...j.parameters,docs:{...(V=j.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "Expandable — click the card",
  render: () => <ExpandableByCardClickDemo />
}`,...(J=(q=j.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,U;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "Expandable — icon button (independent of selection)",
  render: () => <ExpandableByIconButtonDemo />
}`,...(U=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Z,$;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "CardGroup — single select",
  render: () => <SingleSelectGroupDemo />
}`,...($=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ae;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: "CardGroup — multi select",
  render: () => <MultiSelectGroupDemo />
}`,...(ae=(re=b.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var ne,te,se;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: "Drag and drop (reorder)",
  render: () => <DraggableDemo />
}`,...(se=(te=C.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};const ve=["Default","Link","Selected","ExpandToFill","ExpandWithinBounds","ExpandableByCardClick","ExpandableByIconButton","SingleSelect","MultiSelect","Draggable"],ze=Object.freeze(Object.defineProperty({__proto__:null,Default:h,Draggable:C,ExpandToFill:g,ExpandWithinBounds:y,ExpandableByCardClick:j,ExpandableByIconButton:v,Link:c,MultiSelect:b,Selected:u,SingleSelect:f,__namedExportsOrder:ve,default:xe},Symbol.toStringTag,{value:"Module"}));export{ze as C,h as D,g as E,c as L,b as M,u as S,C as a,y as b,j as c,v as d,f as e};
