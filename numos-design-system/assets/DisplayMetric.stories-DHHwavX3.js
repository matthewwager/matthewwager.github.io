import{j as e}from"./jsx-runtime-BYYWji4R.js";import{x as r}from"./DiagramConnector-DY1AhLDR.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";const n={width:"20rem"},$={title:"Components/DisplayMetric",component:r,argTypes:{color:{control:"select",options:["brand","green","magenta","yellow"]},value:{control:"text"},label:{control:"text"},animate:{control:"boolean"}},args:{value:"$24.2K",label:"Label",color:"green"}},s={render:a=>e.jsx("div",{style:n,children:e.jsx(r,{...a})})},l={args:{color:"brand",label:"Active users"},render:a=>e.jsx("div",{style:n,children:e.jsx(r,{...a})})},o={args:{color:"magenta",value:"-$3.1K",label:"Refunds"},render:a=>e.jsx("div",{style:n,children:e.jsx(r,{...a})})},t={args:{color:"yellow",value:"12",label:"Open tickets"},render:a=>e.jsx("div",{style:n,children:e.jsx(r,{...a})})},i={name:"Animated (counts up/down from 0 on mount)",args:{animate:!0},render:a=>e.jsx("div",{style:n,children:e.jsx(r,{...a})})},d={name:"Animated, counting down (negative value)",args:{animate:!0,value:"-$3.1K",label:"Refunds",color:"magenta"},render:a=>e.jsx("div",{style:n,children:e.jsx(r,{...a})})},c={name:"All 4 colors",render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--space-4)"},children:[e.jsx("div",{style:n,children:e.jsx(r,{value:"$24.2K",label:"Revenue",color:"green"})}),e.jsx("div",{style:n,children:e.jsx(r,{value:"1,204",label:"Active users",color:"brand"})}),e.jsx("div",{style:n,children:e.jsx(r,{value:"-$3.1K",label:"Refunds",color:"magenta"})}),e.jsx("div",{style:n,children:e.jsx(r,{value:"12",label:"Open tickets",color:"yellow"})})]})},p={name:"Laid out in a responsive grid",render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--space-4)"},children:[e.jsx("div",{style:{flex:"1 1 14rem"},children:e.jsx(r,{value:"$24.2K",label:"Revenue",color:"green"})}),e.jsx("div",{style:{flex:"1 1 14rem"},children:e.jsx(r,{value:"1,204",label:"Active users",color:"brand"})}),e.jsx("div",{style:{flex:"1 1 14rem"},children:e.jsx(r,{value:"-$3.1K",label:"Refunds",color:"magenta"})})]})};var v,u,m;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <div style={PREVIEW_STYLE}>
      <DisplayMetric {...args} />
    </div>
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,y,x;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    color: "brand",
    label: "Active users"
  },
  render: args => <div style={PREVIEW_STYLE}>
      <DisplayMetric {...args} />
    </div>
}`,...(x=(y=l.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var b,E,j;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    color: "magenta",
    value: "-$3.1K",
    label: "Refunds"
  },
  render: args => <div style={PREVIEW_STYLE}>
      <DisplayMetric {...args} />
    </div>
}`,...(j=(E=o.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var f,R,S;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    color: "yellow",
    value: "12",
    label: "Open tickets"
  },
  render: args => <div style={PREVIEW_STYLE}>
      <DisplayMetric {...args} />
    </div>
}`,...(S=(R=t.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var A,M,D;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Animated (counts up/down from 0 on mount)",
  args: {
    animate: true
  },
  render: args => <div style={PREVIEW_STYLE}>
      <DisplayMetric {...args} />
    </div>
}`,...(D=(M=i.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var _,h,w;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(w=(h=d.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var W,I,L;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(L=(I=c.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var Y,K,T;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(T=(K=p.parameters)==null?void 0:K.docs)==null?void 0:T.source}}};const P=["Default","Brand","Magenta","Yellow","AnimatedCountUp","AnimatedNegative","AllColors","InAGrid"],B=Object.freeze(Object.defineProperty({__proto__:null,AllColors:c,AnimatedCountUp:i,AnimatedNegative:d,Brand:l,Default:s,InAGrid:p,Magenta:o,Yellow:t,__namedExportsOrder:P,default:$},Symbol.toStringTag,{value:"Module"}));export{c as A,l as B,s as D,p as I,o as M,t as Y,i as a,d as b,B as c};
