import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as j}from"./index-ClcD9ViR.js";import{aB as l}from"./DiagramCell-BVBcLmyd.js";import"./index-Brl4xq4Y.js";const D={title:"Components/Toggle",component:l,argTypes:{size:{control:"select",options:["sm","md","lg"]},labelPlacement:{control:"select",options:["right","left","above"]},label:{control:"text"},disabled:{control:"boolean"}},args:{size:"lg",label:"Enable notifications"}},s={render:a=>{function t(){const[k,C]=j.useState(!0);return e.jsx(l,{...a,checked:k,onChange:y=>C(y.target.checked)})}return e.jsx(t,{})}},r={render:a=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-4)",alignItems:"flex-start"},children:["xs","sm","md","lg"].map(t=>e.jsx(l,{...a,size:t,label:`Size: ${t}`,defaultChecked:!0},t))})},n={name:"Label placement",render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-4)",alignItems:"flex-start"},children:[e.jsx(l,{...a,labelPlacement:"right",label:"Right (default)",defaultChecked:!0}),e.jsx(l,{...a,labelPlacement:"left",label:"Left",defaultChecked:!0}),e.jsx(l,{...a,labelPlacement:"above",label:"Above",defaultChecked:!0})]})},o={render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-4)",alignItems:"flex-start"},children:[e.jsx(l,{...a,label:"Disabled, off",disabled:!0}),e.jsx(l,{...a,label:"Disabled, on",disabled:!0,defaultChecked:!0})]})};var c,d,i;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    function Controlled() {
      const [checked, setChecked] = useState(true);
      return <Toggle {...args} checked={checked} onChange={e => setChecked(e.target.checked)} />;
    }
    return <Controlled />;
  }
}`,...(i=(d=s.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var m,g,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-4)",
    alignItems: "flex-start"
  }}>
      {(["xs", "sm", "md", "lg"] as const).map(size => <Toggle key={size} {...args} size={size} label={\`Size: \${size}\`} defaultChecked />)}
    </div>
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var p,f,b;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Label placement",
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-4)",
    alignItems: "flex-start"
  }}>
      <Toggle {...args} labelPlacement="right" label="Right (default)" defaultChecked />
      <Toggle {...args} labelPlacement="left" label="Left" defaultChecked />
      <Toggle {...args} labelPlacement="above" label="Above" defaultChecked />
    </div>
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,h,v;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-4)",
    alignItems: "flex-start"
  }}>
      <Toggle {...args} label="Disabled, off" disabled />
      <Toggle {...args} label="Disabled, on" disabled defaultChecked />
    </div>
}`,...(v=(h=o.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const S=["Default","Sizes","LabelPlacement","Disabled"],I=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Disabled:o,LabelPlacement:n,Sizes:r,__namedExportsOrder:S,default:D},Symbol.toStringTag,{value:"Module"}));export{s as D,n as L,r as S,I as T,o as a};
