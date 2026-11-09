import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as L}from"./index-ClcD9ViR.js";import{q as r,t as A}from"./DiagramCell-BoDqalDD.js";import"./index-Brl4xq4Y.js";import _e from"./pencil-b3GEJP5P.js";import He from"./trash-2-CtCsxZDL.js";const Me={title:"Components/Cell",component:r,parameters:{layout:"padded"}},s={width:"12.5rem",border:"1px solid var(--border-subtle)",borderTop:"1px solid var(--border-subtle)"},d={render:()=>e.jsx("div",{style:s,children:e.jsx(r,{type:"text",children:"Acme Corp"})})},c={render:()=>e.jsx("div",{style:s,children:e.jsx(r,{type:"numeric",children:"1,204"})})},i={render:()=>e.jsx("div",{style:s,children:e.jsx(r,{type:"emphasis",children:"Acme Corp"})})},p={render:()=>e.jsx("div",{style:s,children:e.jsx(r,{type:"double",secondary:"Owner",children:"Maya Chen"})})},m={name:"Null (empty value)",render:()=>e.jsx("div",{style:s,children:e.jsx(r,{type:"null"})})},u={render:()=>e.jsx("div",{style:s,children:e.jsx(r,{type:"loading"})})},y={name:"Slot (arbitrary content)",render:()=>e.jsx("div",{style:s,children:e.jsx(r,{type:"slot",children:e.jsxs("span",{style:{display:"flex",gap:"0.25rem"},children:[e.jsx("span",{style:{width:8,height:8,borderRadius:999,background:"var(--background-positive-base)"}}),e.jsx("span",{style:{width:8,height:8,borderRadius:999,background:"var(--background-notice-base)"}})]})})})},D=[{id:"aws",name:"AWS",rows:[["6150 – Cloud Infrastructure",512300],["6100 – Software & Subscriptions",186300]]},{id:"anthropic",name:"Anthropic",rows:[["6100 – Software & Subscriptions",94e4],["6200 – Professional Services",321359]]},{id:"confluent",name:"Confluent Inc.",rows:[["6150 – Cloud Infrastructure",223784]]}],Te=l=>l.toLocaleString("en-US",{style:"currency",currency:"USD"});function ze(){const[l,o]=L.useState(new Set(["aws"]));function We(n,a,t){if(t){o(a?new Set(D.map(f=>f.id)):new Set);return}o(f=>{const w=new Set(f);return a?w.add(n):w.delete(n),w})}const R=D.flatMap(n=>[{key:n.id,group:n,label:n.name,amount:n.rows.reduce((a,[,t])=>a+t,0)},...l.has(n.id)?n.rows.map(([a,t])=>({key:`${n.id}-${a}`,group:null,label:a,amount:t})):[]]);return e.jsxs("div",{style:{display:"flex",width:"32rem",maxWidth:"100%",border:"1px solid var(--border-subtle)"},children:[e.jsx(A,{header:e.jsx(r,{type:"columnHead",children:"Vendor"}),children:R.map(n=>n.group?e.jsx(r,{type:"group",expanded:l.has(n.group.id),onExpandedChange:(a,{all:t})=>We(n.group.id,a,t),secondary:`(${n.group.rows.length})`,children:n.label},n.key):e.jsx(r,{nested:!0,children:n.label},n.key))}),e.jsx(A,{header:e.jsx(r,{type:"columnHead",children:"Accrual"}),align:"end",width:160,children:R.map(n=>e.jsx(r,{type:"numeric",children:Te(n.amount)},n.key))})]})}const C={render:()=>e.jsx(ze,{})},h={render:()=>e.jsx("div",{style:{...s,width:"14rem"},children:e.jsx(r,{type:"progress",value:49})})},x={render:()=>e.jsx("div",{style:s,children:e.jsx(r,{type:"label",children:"Draft"})})},b={name:"Button",render:()=>e.jsx("div",{style:s,children:e.jsx(r,{type:"button",onClick:()=>{},children:"View"})})},v={name:"Avatar",render:()=>e.jsx("div",{style:{...s,width:"14rem"},children:e.jsx(r,{type:"avatar",name:"Maya Chen",sublabel:"Design",children:"Maya Chen"})})};function Oe(){const[l,o]=L.useState(!1);return e.jsx("div",{style:{...s,width:"5rem"},children:e.jsx(r,{type:"checkbox",checked:l,onCheckedChange:o,"aria-label":"Select row"})})}const j={name:"Checkbox",render:()=>e.jsx(Oe,{})},g={name:"Icon",render:()=>e.jsx("div",{style:{...s,width:"8rem"},children:e.jsx(r,{type:"icon",count:2,actions:[{icon:e.jsx(_e,{size:16}),label:"Edit"},{icon:e.jsx(He,{size:16}),label:"Delete"}]})})},S={name:"Column Head",render:()=>e.jsx("div",{style:s,children:e.jsx(r,{type:"columnHead",children:"Company"})})},E={render:()=>e.jsx("div",{style:s,children:e.jsx(r,{type:"sorted",direction:"desc",children:"Company"})})};function Ge(){const[l,o]=L.useState(!1);return e.jsx("div",{style:{...s,width:"5rem"},children:e.jsx(r,{type:"checkboxColumnHead",checked:l,onCheckedChange:o,"aria-label":"Select all rows"})})}const k={name:"Checkbox Column Head",render:()=>e.jsx(Ge,{})},P={name:"All types",render:()=>e.jsxs("div",{style:{width:"16rem",display:"flex",flexDirection:"column",border:"1px solid var(--border-subtle)"},children:[e.jsx(r,{type:"columnHead",children:"Column"}),e.jsx(r,{type:"text",children:"Acme Corp"}),e.jsx(r,{type:"numeric",children:"1,204"}),e.jsx(r,{type:"emphasis",children:"Acme Corp"}),e.jsx(r,{type:"double",secondary:"Owner",children:"Maya Chen"}),e.jsx(r,{type:"null"}),e.jsx(r,{type:"loading"}),e.jsx(r,{type:"progress",value:49}),e.jsx(r,{type:"label",children:"Draft"}),e.jsx(r,{type:"button",onClick:()=>{},children:"View"}),e.jsx(r,{type:"avatar",name:"Maya Chen",sublabel:"Design",children:"Maya Chen"}),e.jsx(r,{type:"checkbox","aria-label":"Select row"}),e.jsx(r,{type:"icon",actions:[{icon:e.jsx(_e,{size:16}),label:"Edit"},{icon:e.jsx(He,{size:16}),label:"Delete"}]})]})};var _,H,W;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={CELL_WRAPPER}>
      <Cell type="text">Acme Corp</Cell>
    </div>
}`,...(W=(H=d.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var M,T,z;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={CELL_WRAPPER}>
      <Cell type="numeric">1,204</Cell>
    </div>
}`,...(z=(T=c.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var O,G,I;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={CELL_WRAPPER}>
      <Cell type="emphasis">Acme Corp</Cell>
    </div>
}`,...(I=(G=i.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var N,B,V;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={CELL_WRAPPER}>
      <Cell type="double" secondary="Owner">
        Maya Chen
      </Cell>
    </div>
}`,...(V=(B=p.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var U,$,q;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "Null (empty value)",
  render: () => <div style={CELL_WRAPPER}>
      <Cell type="null" />
    </div>
}`,...(q=($=m.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var F,J,K;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={CELL_WRAPPER}>
      <Cell type="loading" />
    </div>
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "Slot (arbitrary content)",
  render: () => <div style={CELL_WRAPPER}>
      <Cell type="slot">
        <span style={{
        display: "flex",
        gap: "0.25rem"
      }}>
          <span style={{
          width: 8,
          height: 8,
          borderRadius: 999,
          background: "var(--background-positive-base)"
        }} />
          <span style={{
          width: 8,
          height: 8,
          borderRadius: 999,
          background: "var(--background-notice-base)"
        }} />
        </span>
      </Cell>
    </div>
}`,...(Y=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <GroupedTable />
}`,...(re=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ne,se,ae;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <div style={{
    ...CELL_WRAPPER,
    width: "14rem"
  }}>
      <Cell type="progress" value={49} />
    </div>
}`,...(ae=(se=h.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var le,te,oe;x.parameters={...x.parameters,docs:{...(le=x.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <div style={CELL_WRAPPER}>
      <Cell type="label">Draft</Cell>
    </div>
}`,...(oe=(te=x.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var de,ce,ie;b.parameters={...b.parameters,docs:{...(de=b.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: "Button",
  render: () => <div style={CELL_WRAPPER}>
      <Cell type="button" onClick={() => {}}>
        View
      </Cell>
    </div>
}`,...(ie=(ce=b.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var pe,me,ue;v.parameters={...v.parameters,docs:{...(pe=v.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: "Avatar",
  render: () => <div style={{
    ...CELL_WRAPPER,
    width: "14rem"
  }}>
      <Cell type="avatar" name="Maya Chen" sublabel="Design">
        Maya Chen
      </Cell>
    </div>
}`,...(ue=(me=v.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var ye,Ce,he;j.parameters={...j.parameters,docs:{...(ye=j.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: "Checkbox",
  render: () => <CheckboxCellDemo />
}`,...(he=(Ce=j.parameters)==null?void 0:Ce.docs)==null?void 0:he.source}}};var xe,be,ve;g.parameters={...g.parameters,docs:{...(xe=g.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  name: "Icon",
  render: () => <div style={{
    ...CELL_WRAPPER,
    width: "8rem"
  }}>
      <Cell type="icon" count={2} actions={[{
      icon: <Pencil size={16} />,
      label: "Edit"
    }, {
      icon: <Trash2 size={16} />,
      label: "Delete"
    }]} />
    </div>
}`,...(ve=(be=g.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var je,ge,Se;S.parameters={...S.parameters,docs:{...(je=S.parameters)==null?void 0:je.docs,source:{originalSource:`{
  name: "Column Head",
  render: () => <div style={CELL_WRAPPER}>
      <Cell type="columnHead">Company</Cell>
    </div>
}`,...(Se=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:Se.source}}};var Ee,ke,Pe;E.parameters={...E.parameters,docs:{...(Ee=E.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => <div style={CELL_WRAPPER}>
      <Cell type="sorted" direction="desc">
        Company
      </Cell>
    </div>
}`,...(Pe=(ke=E.parameters)==null?void 0:ke.docs)==null?void 0:Pe.source}}};var fe,we,Le;k.parameters={...k.parameters,docs:{...(fe=k.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: "Checkbox Column Head",
  render: () => <CheckboxColumnHeadDemo />
}`,...(Le=(we=k.parameters)==null?void 0:we.docs)==null?void 0:Le.source}}};var Re,Ae,De;P.parameters={...P.parameters,docs:{...(Re=P.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  name: "All types",
  render: () => <div style={{
    width: "16rem",
    display: "flex",
    flexDirection: "column",
    border: "1px solid var(--border-subtle)"
  }}>
      <Cell type="columnHead">Column</Cell>
      <Cell type="text">Acme Corp</Cell>
      <Cell type="numeric">1,204</Cell>
      <Cell type="emphasis">Acme Corp</Cell>
      <Cell type="double" secondary="Owner">
        Maya Chen
      </Cell>
      <Cell type="null" />
      <Cell type="loading" />
      <Cell type="progress" value={49} />
      <Cell type="label">Draft</Cell>
      <Cell type="button" onClick={() => {}}>
        View
      </Cell>
      <Cell type="avatar" name="Maya Chen" sublabel="Design">
        Maya Chen
      </Cell>
      <Cell type="checkbox" aria-label="Select row" />
      <Cell type="icon" actions={[{
      icon: <Pencil size={16} />,
      label: "Edit"
    }, {
      icon: <Trash2 size={16} />,
      label: "Delete"
    }]} />
    </div>
}`,...(De=(Ae=P.parameters)==null?void 0:Ae.docs)==null?void 0:De.source}}};const Ie=["Text","Numeric","Emphasis","Double","Null","Loading","Slot","Group","Progress","Label","ButtonCell","AvatarCell","CheckboxCell","IconCell","ColumnHead","Sorted","CheckboxColumnHead","Gallery"],Fe=Object.freeze(Object.defineProperty({__proto__:null,AvatarCell:v,ButtonCell:b,CheckboxCell:j,CheckboxColumnHead:k,ColumnHead:S,Double:p,Emphasis:i,Gallery:P,Group:C,IconCell:g,Label:x,Loading:u,Null:m,Numeric:c,Progress:h,Slot:y,Sorted:E,Text:d,__namedExportsOrder:Ie,default:Me},Symbol.toStringTag,{value:"Module"}));export{v as A,b as B,Fe as C,p as D,i as E,P as G,g as I,x as L,m as N,h as P,y as S,d as T,j as a,k as b,S as c,C as d,u as e,c as f,E as g};
