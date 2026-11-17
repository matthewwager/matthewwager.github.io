import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as u}from"./index-ClcD9ViR.js";import{m as o,o as l,p as T,u as B,r as i,d as g,k as z,P as O,g as ze,n as Be}from"./DiagramCell-BqpPf5to.js";import"./index-Brl4xq4Y.js";import Fe from"./pencil-b3GEJP5P.js";import Te from"./trash-2-CtCsxZDL.js";import Oe from"./ellipsis-vertical-Bt6GK3lC.js";import Ge from"./minimize-2-bzaecEGE.js";import Ne from"./maximize-2-B86vZ2tx.js";const W={margin:"0 0 0.75rem",font:"var(--type-paragraph-s-regular)",color:"var(--content-subtle)"},P={margin:0,font:"var(--type-paragraph-s-regular)",letterSpacing:"var(--type-paragraph-s-regular-tracking)",color:"var(--content-base)"},Ae={title:"Components/Card",component:o,parameters:{layout:"padded"}};function E({selected:a=!1,expand:r,minWidth:n,maxWidth:t,minHeight:d,maxHeight:s}){return e.jsxs(o,{selected:a,expand:r,minWidth:n,maxWidth:t,minHeight:d,maxHeight:s,onClick:()=>{},children:[e.jsx(l,{lead:e.jsx(g,{size:"xs",name:"Maya Chen"}),title:"Maya Chen",subtitle:"Product Designer",actions:[{icon:e.jsx(Fe,{size:16,"aria-hidden":!0}),label:"Edit"},{icon:e.jsx(Te,{size:16,"aria-hidden":!0}),label:"Delete"},{icon:e.jsx(Oe,{size:16,"aria-hidden":!0}),label:"More"}]}),e.jsx("p",{style:{margin:0,font:"var(--type-paragraph-s-regular)",letterSpacing:"var(--type-paragraph-s-regular-tracking)",color:"var(--content-base)"},children:"Explore the latest updates and features designed to enhance your workflow and boost productivity effortlessly."}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-1)",width:"100%"},children:[e.jsx(z,{variant:"link",size:"sm",style:{marginRight:"auto"},children:"Don't show this again"}),e.jsx(z,{variant:"secondary",size:"sm",children:"Cancel"}),e.jsx(z,{variant:"primary",size:"sm",children:"Save"})]})]})}const j={render:()=>e.jsx(E,{})},p={name:"Static, with a table filling it",render:()=>e.jsxs(o,{expand:"x",maxWidth:"28rem",padding:"none",children:[e.jsx(T,{children:e.jsx(l,{title:"Paid last week",subtitle:"Nov 2 to Nov 6"})}),e.jsxs("div",{style:{display:"flex",width:"100%"},children:[e.jsxs(B,{header:e.jsx(i,{type:"columnHead",children:"Vendor"}),children:[e.jsx(i,{type:"text",children:"Alston & Bird"}),e.jsx(i,{type:"text",children:"Connor Group"}),e.jsx(i,{type:"emphasis",children:"Total"})]}),e.jsxs(B,{header:e.jsx(i,{type:"columnHead",children:"Paid"}),width:120,align:"end",children:[e.jsx(i,{type:"numeric",children:"$511,366"}),e.jsx(i,{type:"numeric",children:"$350,777"}),e.jsx(i,{type:"emphasis",children:"$862,143"})]})]})]})},m={render:()=>e.jsxs(o,{href:"#",expand:"x",maxWidth:"25rem",children:[e.jsx(l,{title:"Storybook"}),e.jsx("p",{style:{margin:0,font:"var(--type-paragraph-s-regular)",color:"var(--content-subtle)"},children:"Every component and its variants, with usage docs."})]})},v={render:()=>e.jsx(E,{selected:!0})},b={name:'expand="x" (fills its container)',render:()=>e.jsx("div",{style:{width:"44rem",maxWidth:"100%"},children:e.jsx(E,{expand:"x"})})},C={name:'expand="x" with min/max (clamped)',render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsxs("div",{children:[e.jsxs("p",{style:{margin:"0 0 0.5rem",font:"var(--type-paragraph-s-regular)",color:"var(--content-subtle)"},children:["A 14rem container — the card still won't shrink below its 18rem ",e.jsx("code",{children:"minWidth"}),"."]}),e.jsx("div",{style:{width:"14rem",overflow:"visible"},children:e.jsx(E,{expand:"x",minWidth:"18rem",maxWidth:"32rem"})})]}),e.jsxs("div",{children:[e.jsxs("p",{style:{margin:"0 0 0.5rem",font:"var(--type-paragraph-s-regular)",color:"var(--content-subtle)"},children:["A 48rem container — the card won't grow past its 32rem ",e.jsx("code",{children:"maxWidth"}),"."]}),e.jsx("div",{style:{width:"48rem",maxWidth:"100%"},children:e.jsx(E,{expand:"x",minWidth:"18rem",maxWidth:"32rem"})})]})]})};function He(){const[a,r]=u.useState(!1);return e.jsxs("div",{style:{width:"44rem",maxWidth:"100%"},children:[e.jsx("p",{style:W,children:"Click anywhere on the card to toggle it between its default width and a wider layout."}),e.jsxs(o,{expand:a?"x":void 0,maxWidth:a?"40rem":void 0,onClick:()=>r(n=>!n),children:[e.jsx(l,{lead:e.jsx(g,{size:"xs",name:"Maya Chen"}),title:"Maya Chen",subtitle:"Product Designer"}),e.jsx("p",{style:P,children:a?"Expanded, up to a 40rem cap — click anywhere on the card again to collapse it.":"Collapsed at its default width — click anywhere on the card to expand it."})]})]})}const f={name:"Expandable — click the card",render:()=>e.jsx(He,{})};function Ie(){const[a,r]=u.useState(!1),[n,t]=u.useState(!1);return e.jsxs("div",{style:{width:"44rem",maxWidth:"100%"},children:[e.jsx("p",{style:W,children:"The card's own click (selection) and the header's expand icon are independent — the icon button stops its click from also reaching the card, so toggling one never triggers the other."}),e.jsxs(o,{selected:a,expand:n?"x":void 0,maxWidth:n?"40rem":void 0,onClick:()=>r(d=>!d),children:[e.jsx(l,{lead:e.jsx(g,{size:"xs",name:"Maya Chen"}),title:"Maya Chen",subtitle:"Product Designer",actions:[{icon:n?e.jsx(Ge,{size:16,"aria-hidden":!0}):e.jsx(Ne,{size:16,"aria-hidden":!0}),label:n?"Collapse":"Expand",onClick:()=>t(d=>!d)}]}),e.jsxs("p",{style:P,children:[a?"Selected":"Not selected"," — click the card body to toggle selection, or the ",n?"collapse":"expand"," icon above to ",n?"collapse":"expand"," the card."]})]})]})}const S={name:"Expandable — icon button (independent of selection)",render:()=>e.jsx(Ie,{})},M=[{id:"maya",name:"Maya Chen",role:"Product Designer"},{id:"sam",name:"Sam Ortiz",role:"Engineering Manager"},{id:"priya",name:"Priya Nair",role:"Data Analyst"}];function Le(){return e.jsxs("div",{children:[e.jsxs("p",{style:W,children:[e.jsx("code",{children:'type="single"'}),' (the default) — selecting one card deselects any other, the same "radio" behavior ',e.jsx("code",{children:"<RadioGroup>"})," gives ",e.jsx("code",{children:"<Radio>"}),"."]}),e.jsx(Be,{defaultValue:"maya",children:M.map(a=>e.jsxs(o,{value:a.id,children:[e.jsx(l,{lead:e.jsx(g,{size:"xs",name:a.name}),title:a.name,subtitle:a.role}),e.jsx("p",{style:P,children:"Click a card to select it — hover any other to see the border-only hover chrome, distinct from the selected ring."})]},a.id))})]})}const w={name:"CardGroup — single select",render:()=>e.jsx(Le,{})};function $e(){const[a,r]=u.useState(["maya"]);function n(t){r(d=>d.includes(t)?d.filter(s=>s!==t):[...d,t])}return e.jsxs("div",{children:[e.jsxs("p",{style:W,children:[e.jsx("code",{children:'type="multiple"'})," — no shared value to coordinate, same as ",e.jsx("code",{children:"<CheckboxGroup>"}),"; each card's own ",e.jsx("code",{children:"selected"}),"/",e.jsx("code",{children:"onClick"})," stays in your own hands."]}),e.jsx(Be,{type:"multiple",children:M.map(t=>e.jsxs(o,{selected:a.includes(t.id),onClick:()=>n(t.id),children:[e.jsx(l,{lead:e.jsx(g,{size:"xs",name:t.name}),title:t.name,subtitle:t.role}),e.jsx("p",{style:P,children:"Click any number of cards to select them."})]},t.id))})]})}const k={name:"CardGroup — multi select",render:()=>e.jsx($e,{})};function _e(){const[a,r]=u.useState(M.map(s=>s.id)),[n,t]=u.useState(null);function d(s){!n||n===s||r(y=>{const c=y.filter(Pe=>Pe!==n);return c.splice(c.indexOf(s),0,n),c})}return e.jsxs("div",{children:[e.jsx("p",{style:W,children:"Drag a card by its body to reorder the list — native HTML5 drag-and-drop, same as reordering rows in a real app."}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-3)",width:"22rem"},children:a.map(s=>{const y=M.find(c=>c.id===s);return e.jsx("div",{onDragOver:c=>c.preventDefault(),onDrop:()=>d(s),children:e.jsx(o,{expand:"x",draggable:!0,onDragStart:()=>t(s),onDragEnd:()=>t(null),children:e.jsx(l,{lead:e.jsx(g,{size:"xs",name:y.name}),title:y.name,subtitle:y.role})})},s)})})]})}const D={name:"Drag and drop (reorder)",render:()=>e.jsx(_e,{})},F=[{label:"Jul",value:182e3},{label:"Aug",value:214500},{label:"Sep",value:197250},{label:"Oct",value:238900},{label:"Nov",value:221400}];function Me({defaultFlipped:a=!1}){return e.jsx(o,{padding:"none",defaultFlipped:a,back:e.jsxs(e.Fragment,{children:[e.jsx(T,{children:e.jsx(l,{title:"Payments by month",subtitle:"Paid, Jul to Nov. USD",controls:e.jsx(O,{label:"Show as chart"})})}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",alignSelf:"stretch"},children:[e.jsx(B,{header:e.jsx(i,{type:"columnHead",children:"Month"}),children:F.map(r=>e.jsx(i,{type:"text",children:r.label},r.label))}),e.jsx(B,{header:e.jsx(i,{type:"columnHead",children:"Paid"}),align:"end",children:F.map(r=>e.jsxs(i,{type:"numeric",children:["$",r.value.toLocaleString("en-US")]},r.label))})]})]}),children:e.jsxs(T,{children:[e.jsx(l,{title:"Payments by month",subtitle:"Paid, Jul to Nov. USD",controls:e.jsx(O,{label:"Show as table"})}),e.jsx(ze,{data:F,formatValue:r=>`$${Math.round(r/1e3)}K`,gridLineCount:4,height:240})]})})}const h={name:"Flip (chart and table)",render:()=>e.jsx(Me,{})},x={name:"Flip, starting on its back",render:()=>e.jsx(Me,{defaultFlipped:!0})};var G,N,A;j.parameters={...j.parameters,docs:{...(G=j.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <ComposedCard />
}`,...(A=(N=j.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var H,I,L,$,_;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(L=(I=p.parameters)==null?void 0:I.docs)==null?void 0:L.source},description:{story:'Nothing to click, follow, drag or pick: a static card — the same surface,\nno hover border, no focus stop. `padding="none"` lets a table fill it;\n`<CardSection>` keeps the header\'s inset.',...(_=($=p.parameters)==null?void 0:$.docs)==null?void 0:_.description}}};var V,R,J,U,Y;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Card href="#" expand="x" maxWidth="25rem">
      <CardHeader title="Storybook" />
      <p style={{
      margin: 0,
      font: "var(--type-paragraph-s-regular)",
      color: "var(--content-subtle)"
    }}>Every component and its variants, with usage docs.</p>
    </Card>
}`,...(J=(R=m.parameters)==null?void 0:R.docs)==null?void 0:J.source},description:{story:"A card that navigates: `href` renders it as a real link.",...(Y=(U=m.parameters)==null?void 0:U.docs)==null?void 0:Y.description}}};var K,q,Q;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <ComposedCard selected />
}`,...(Q=(q=v.parameters)==null?void 0:q.docs)==null?void 0:Q.source}}};var X,Z,ee;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "expand=\\"x\\" (fills its container)",
  render: () => <div style={{
    width: "44rem",
    maxWidth: "100%"
  }}>
      <ComposedCard expand="x" />
    </div>
}`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,re,ne;C.parameters={...C.parameters,docs:{...(ae=C.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ne=(re=C.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var te,se,ie;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: "Expandable — click the card",
  render: () => <ExpandableByCardClickDemo />
}`,...(ie=(se=f.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var de,le,oe;S.parameters={...S.parameters,docs:{...(de=S.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: "Expandable — icon button (independent of selection)",
  render: () => <ExpandableByIconButtonDemo />
}`,...(oe=(le=S.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var ce,pe,me;w.parameters={...w.parameters,docs:{...(ce=w.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: "CardGroup — single select",
  render: () => <SingleSelectGroupDemo />
}`,...(me=(pe=w.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var he,xe,ue;k.parameters={...k.parameters,docs:{...(he=k.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: "CardGroup — multi select",
  render: () => <MultiSelectGroupDemo />
}`,...(ue=(xe=k.parameters)==null?void 0:xe.docs)==null?void 0:ue.source}}};var ge,ye,je;D.parameters={...D.parameters,docs:{...(ge=D.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: "Drag and drop (reorder)",
  render: () => <DraggableDemo />
}`,...(je=(ye=D.parameters)==null?void 0:ye.docs)==null?void 0:je.source}}};var ve,be,Ce,fe,Se;h.parameters={...h.parameters,docs:{...(ve=h.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  name: "Flip (chart and table)",
  render: () => <FlipDemo />
}`,...(Ce=(be=h.parameters)==null?void 0:be.docs)==null?void 0:Ce.source},description:{story:"Turns over between a chart and its data as a table.",...(Se=(fe=h.parameters)==null?void 0:fe.docs)==null?void 0:Se.description}}};var we,ke,De,Ee,We;x.parameters={...x.parameters,docs:{...(we=x.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: "Flip, starting on its back",
  render: () => <FlipDemo defaultFlipped />
}`,...(De=(ke=x.parameters)==null?void 0:ke.docs)==null?void 0:De.source},description:{story:"Starting on its back.",...(We=(Ee=x.parameters)==null?void 0:Ee.docs)==null?void 0:We.description}}};const Ve=["Default","StaticWithTable","Link","Selected","ExpandToFill","ExpandWithinBounds","ExpandableByCardClick","ExpandableByIconButton","SingleSelect","MultiSelect","Draggable","Flip","FlipStartingOnBack"],ea=Object.freeze(Object.defineProperty({__proto__:null,Default:j,Draggable:D,ExpandToFill:b,ExpandWithinBounds:C,ExpandableByCardClick:f,ExpandableByIconButton:S,Flip:h,FlipStartingOnBack:x,Link:m,MultiSelect:k,Selected:v,SingleSelect:w,StaticWithTable:p,__namedExportsOrder:Ve,default:Ae},Symbol.toStringTag,{value:"Module"}));export{ea as C,j as D,b as E,h as F,m as L,k as M,v as S,D as a,C as b,f as c,S as d,x as e,w as f,p as g};
