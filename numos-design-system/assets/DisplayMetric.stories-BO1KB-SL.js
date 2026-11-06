import{j as e}from"./jsx-runtime-BYYWji4R.js";import{y as r}from"./DiagramCell-D0CGHh4Q.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";const s={width:"20rem"},C={title:"Components/DisplayMetric",component:r,argTypes:{color:{control:"select",options:["brand","green","magenta","yellow"]},value:{control:"text"},label:{control:"text"},animate:{control:"boolean"}},args:{value:"$24.2K",label:"Label",color:"green"}},n={render:a=>e.jsx("div",{style:s,children:e.jsx(r,{...a})})},l={args:{color:"brand",label:"Active users"},render:a=>e.jsx("div",{style:s,children:e.jsx(r,{...a})})},o={name:"With description",args:{value:"$24.2K",color:"magenta",label:"Overdue",description:"3 vendors past due"},render:a=>e.jsx("div",{style:s,children:e.jsx(r,{...a})})},t={args:{color:"magenta",value:"-$3.1K",label:"Refunds"},render:a=>e.jsx("div",{style:s,children:e.jsx(r,{...a})})},i={args:{color:"yellow",value:"12",label:"Open tickets"},render:a=>e.jsx("div",{style:s,children:e.jsx(r,{...a})})},d={name:"Animated (counts up/down from 0 on mount)",args:{animate:!0},render:a=>e.jsx("div",{style:s,children:e.jsx(r,{...a})})},c={name:"Animated, counting down (negative value)",args:{animate:!0,value:"-$3.1K",label:"Refunds",color:"magenta"},render:a=>e.jsx("div",{style:s,children:e.jsx(r,{...a})})},p={name:"All 4 colors",render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--space-4)"},children:[e.jsx("div",{style:s,children:e.jsx(r,{value:"$24.2K",label:"Revenue",color:"green"})}),e.jsx("div",{style:s,children:e.jsx(r,{value:"1,204",label:"Active users",color:"brand"})}),e.jsx("div",{style:s,children:e.jsx(r,{value:"-$3.1K",label:"Refunds",color:"magenta"})}),e.jsx("div",{style:s,children:e.jsx(r,{value:"12",label:"Open tickets",color:"yellow"})})]})},v={name:"Laid out in a responsive grid",render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--space-4)"},children:[e.jsx("div",{style:{flex:"1 1 14rem"},children:e.jsx(r,{value:"$24.2K",label:"Revenue",color:"green"})}),e.jsx("div",{style:{flex:"1 1 14rem"},children:e.jsx(r,{value:"1,204",label:"Active users",color:"brand"})}),e.jsx("div",{style:{flex:"1 1 14rem"},children:e.jsx(r,{value:"-$3.1K",label:"Refunds",color:"magenta"})})]})};var u,m,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <div style={PREVIEW_STYLE}>
      <DisplayMetric {...args} />
    </div>
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var y,x,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    color: "brand",
    label: "Active users"
  },
  render: args => <div style={PREVIEW_STYLE}>
      <DisplayMetric {...args} />
    </div>
}`,...(b=(x=l.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var E,j,f;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "With description",
  args: {
    value: "$24.2K",
    color: "magenta",
    label: "Overdue",
    description: "3 vendors past due"
  },
  render: args => <div style={PREVIEW_STYLE}>
      <DisplayMetric {...args} />
    </div>
}`,...(f=(j=o.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var R,S,D;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    color: "magenta",
    value: "-$3.1K",
    label: "Refunds"
  },
  render: args => <div style={PREVIEW_STYLE}>
      <DisplayMetric {...args} />
    </div>
}`,...(D=(S=t.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var h,A,M;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    color: "yellow",
    value: "12",
    label: "Open tickets"
  },
  render: args => <div style={PREVIEW_STYLE}>
      <DisplayMetric {...args} />
    </div>
}`,...(M=(A=i.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var W,_,w;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "Animated (counts up/down from 0 on mount)",
  args: {
    animate: true
  },
  render: args => <div style={PREVIEW_STYLE}>
      <DisplayMetric {...args} />
    </div>
}`,...(w=(_=d.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var I,K,L;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Animated, counting down (negative value)",
  args: {
    animate: true,
    value: "-$3.1K",
    label: "Refunds",
    color: "magenta"
  },
  render: args => <div style={PREVIEW_STYLE}>
      <DisplayMetric {...args} />
    </div>
}`,...(L=(K=c.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var Y,$,T;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "All 4 colors",
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "var(--space-4)"
  }}>
      <div style={PREVIEW_STYLE}>
        <DisplayMetric value="$24.2K" label="Revenue" color="green" />
      </div>
      <div style={PREVIEW_STYLE}>
        <DisplayMetric value="1,204" label="Active users" color="brand" />
      </div>
      <div style={PREVIEW_STYLE}>
        <DisplayMetric value="-$3.1K" label="Refunds" color="magenta" />
      </div>
      <div style={PREVIEW_STYLE}>
        <DisplayMetric value="12" label="Open tickets" color="yellow" />
      </div>
    </div>
}`,...(T=($=p.parameters)==null?void 0:$.docs)==null?void 0:T.source}}};var P,V,O;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Laid out in a responsive grid",
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "var(--space-4)"
  }}>
      <div style={{
      flex: "1 1 14rem"
    }}>
        <DisplayMetric value="$24.2K" label="Revenue" color="green" />
      </div>
      <div style={{
      flex: "1 1 14rem"
    }}>
        <DisplayMetric value="1,204" label="Active users" color="brand" />
      </div>
      <div style={{
      flex: "1 1 14rem"
    }}>
        <DisplayMetric value="-$3.1K" label="Refunds" color="magenta" />
      </div>
    </div>
}`,...(O=(V=v.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};const k=["Default","Brand","WithDescription","Magenta","Yellow","AnimatedCountUp","AnimatedNegative","AllColors","InAGrid"],z=Object.freeze(Object.defineProperty({__proto__:null,AllColors:p,AnimatedCountUp:d,AnimatedNegative:c,Brand:l,Default:n,InAGrid:v,Magenta:t,WithDescription:o,Yellow:i,__namedExportsOrder:k,default:C},Symbol.toStringTag,{value:"Module"}));export{p as A,l as B,n as D,v as I,t as M,o as W,i as Y,d as a,c as b,z as c};
