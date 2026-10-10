import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as ve}from"./index-ClcD9ViR.js";import{p as r}from"./DiagramConnector-DY1AhLDR.js";import"./index-Brl4xq4Y.js";import je from"./pencil-b3GEJP5P.js";import ge from"./trash-2-CtCsxZDL.js";const Ee={title:"Components/Cell",component:r,parameters:{layout:"padded"}},n={width:"12.5rem",border:"1px solid var(--border-subtle)",borderTop:"1px solid var(--border-subtle)"},s={render:()=>e.jsx("div",{style:n,children:e.jsx(r,{type:"text",children:"Acme Corp"})})},a={render:()=>e.jsx("div",{style:n,children:e.jsx(r,{type:"numeric",children:"1,204"})})},l={render:()=>e.jsx("div",{style:n,children:e.jsx(r,{type:"emphasis",children:"Acme Corp"})})},o={render:()=>e.jsx("div",{style:n,children:e.jsx(r,{type:"double",secondary:"Owner",children:"Maya Chen"})})},t={name:"Null (empty value)",render:()=>e.jsx("div",{style:n,children:e.jsx(r,{type:"null"})})},c={render:()=>e.jsx("div",{style:n,children:e.jsx(r,{type:"loading"})})},d={name:"Slot (arbitrary content)",render:()=>e.jsx("div",{style:n,children:e.jsx(r,{type:"slot",children:e.jsxs("span",{style:{display:"flex",gap:"0.25rem"},children:[e.jsx("span",{style:{width:8,height:8,borderRadius:999,background:"var(--background-positive-base)"}}),e.jsx("span",{style:{width:8,height:8,borderRadius:999,background:"var(--background-notice-base)"}})]})})})},i={render:()=>e.jsx("div",{style:{...n,width:"14rem"},children:e.jsx(r,{type:"progress",value:49})})},p={render:()=>e.jsx("div",{style:n,children:e.jsx(r,{type:"label",children:"Draft"})})},m={name:"Button",render:()=>e.jsx("div",{style:n,children:e.jsx(r,{type:"button",onClick:()=>{},children:"View"})})},u={name:"Avatar",render:()=>e.jsx("div",{style:{...n,width:"14rem"},children:e.jsx(r,{type:"avatar",name:"Maya Chen",sublabel:"Design",children:"Maya Chen"})})};function Pe(){const[j,g]=ve.useState(!1);return e.jsx("div",{style:{...n,width:"5rem"},children:e.jsx(r,{type:"checkbox",checked:j,onCheckedChange:g,"aria-label":"Select row"})})}const C={name:"Checkbox",render:()=>e.jsx(Pe,{})},y={name:"Icon",render:()=>e.jsx("div",{style:{...n,width:"8rem"},children:e.jsx(r,{type:"icon",count:2,actions:[{icon:e.jsx(je,{size:16}),label:"Edit"},{icon:e.jsx(ge,{size:16}),label:"Delete"}]})})},h={name:"Column Head",render:()=>e.jsx("div",{style:n,children:e.jsx(r,{type:"columnHead",children:"Company"})})},x={render:()=>e.jsx("div",{style:n,children:e.jsx(r,{type:"sorted",direction:"desc",children:"Company"})})};function Le(){const[j,g]=ve.useState(!1);return e.jsx("div",{style:{...n,width:"5rem"},children:e.jsx(r,{type:"checkboxColumnHead",checked:j,onCheckedChange:g,"aria-label":"Select all rows"})})}const b={name:"Checkbox Column Head",render:()=>e.jsx(Le,{})},v={name:"All types",render:()=>e.jsxs("div",{style:{width:"16rem",display:"flex",flexDirection:"column",border:"1px solid var(--border-subtle)"},children:[e.jsx(r,{type:"columnHead",children:"Column"}),e.jsx(r,{type:"text",children:"Acme Corp"}),e.jsx(r,{type:"numeric",children:"1,204"}),e.jsx(r,{type:"emphasis",children:"Acme Corp"}),e.jsx(r,{type:"double",secondary:"Owner",children:"Maya Chen"}),e.jsx(r,{type:"null"}),e.jsx(r,{type:"loading"}),e.jsx(r,{type:"progress",value:49}),e.jsx(r,{type:"label",children:"Draft"}),e.jsx(r,{type:"button",onClick:()=>{},children:"View"}),e.jsx(r,{type:"avatar",name:"Maya Chen",sublabel:"Design",children:"Maya Chen"}),e.jsx(r,{type:"checkbox","aria-label":"Select row"}),e.jsx(r,{type:"icon",actions:[{icon:e.jsx(je,{size:16}),label:"Edit"},{icon:e.jsx(ge,{size:16}),label:"Delete"}]})]})};var E,P,L;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={CELL_WRAPPER}>
      <Cell type="text">Acme Corp</Cell>
    </div>
}`,...(L=(P=s.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var R,k,S;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={CELL_WRAPPER}>
      <Cell type="numeric">1,204</Cell>
    </div>
}`,...(S=(k=a.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var A,w,f;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={CELL_WRAPPER}>
      <Cell type="emphasis">Acme Corp</Cell>
    </div>
}`,...(f=(w=l.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var D,_,H;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={CELL_WRAPPER}>
      <Cell type="double" secondary="Owner">
        Maya Chen
      </Cell>
    </div>
}`,...(H=(_=o.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var W,M,z;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "Null (empty value)",
  render: () => <div style={CELL_WRAPPER}>
      <Cell type="null" />
    </div>
}`,...(z=(M=t.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var T,N,O;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={CELL_WRAPPER}>
      <Cell type="loading" />
    </div>
}`,...(O=(N=c.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var B,I,V;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(V=(I=d.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var G,q,F;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div style={{
    ...CELL_WRAPPER,
    width: "14rem"
  }}>
      <Cell type="progress" value={49} />
    </div>
}`,...(F=(q=i.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var J,K,Q;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div style={CELL_WRAPPER}>
      <Cell type="label">Draft</Cell>
    </div>
}`,...(Q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "Button",
  render: () => <div style={CELL_WRAPPER}>
      <Cell type="button" onClick={() => {}}>
        View
      </Cell>
    </div>
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "Avatar",
  render: () => <div style={{
    ...CELL_WRAPPER,
    width: "14rem"
  }}>
      <Cell type="avatar" name="Maya Chen" sublabel="Design">
        Maya Chen
      </Cell>
    </div>
}`,...(ee=($=u.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ne,se;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: "Checkbox",
  render: () => <CheckboxCellDemo />
}`,...(se=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ae,le,oe;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(oe=(le=y.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var te,ce,de;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: "Column Head",
  render: () => <div style={CELL_WRAPPER}>
      <Cell type="columnHead">Company</Cell>
    </div>
}`,...(de=(ce=h.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ie,pe,me;x.parameters={...x.parameters,docs:{...(ie=x.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <div style={CELL_WRAPPER}>
      <Cell type="sorted" direction="desc">
        Company
      </Cell>
    </div>
}`,...(me=(pe=x.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ue,Ce,ye;b.parameters={...b.parameters,docs:{...(ue=b.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: "Checkbox Column Head",
  render: () => <CheckboxColumnHeadDemo />
}`,...(ye=(Ce=b.parameters)==null?void 0:Ce.docs)==null?void 0:ye.source}}};var he,xe,be;v.parameters={...v.parameters,docs:{...(he=v.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(be=(xe=v.parameters)==null?void 0:xe.docs)==null?void 0:be.source}}};const Re=["Text","Numeric","Emphasis","Double","Null","Loading","Slot","Progress","Label","ButtonCell","AvatarCell","CheckboxCell","IconCell","ColumnHead","Sorted","CheckboxColumnHead","Gallery"],_e=Object.freeze(Object.defineProperty({__proto__:null,AvatarCell:u,ButtonCell:m,CheckboxCell:C,CheckboxColumnHead:b,ColumnHead:h,Double:o,Emphasis:l,Gallery:v,IconCell:y,Label:p,Loading:c,Null:t,Numeric:a,Progress:i,Slot:d,Sorted:x,Text:s,__namedExportsOrder:Re,default:Ee},Symbol.toStringTag,{value:"Module"}));export{u as A,m as B,_e as C,o as D,l as E,v as G,y as I,p as L,t as N,i as P,d as S,s as T,C as a,b,h as c,c as d,a as e,x as f};
