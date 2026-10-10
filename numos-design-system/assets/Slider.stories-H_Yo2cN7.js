import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as L}from"./index-ClcD9ViR.js";import{ao as a,j as W}from"./DiagramConnector-DY1AhLDR.js";import"./index-Brl4xq4Y.js";function f({range:r,defaultValue:u,defaultMin:c,defaultMax:m,...p}){return e.jsx(a,{...p,defaultValue:r?[c,m]:u})}const Y={title:"Components/Slider",component:f,parameters:{layout:"padded"},argTypes:{size:{control:"select",options:["sm","md"]},range:{control:"boolean"},defaultValue:{control:{type:"range",min:0,max:100,step:1},if:{arg:"range",truthy:!1}},defaultMin:{control:{type:"range",min:0,max:100,step:1},if:{arg:"range"}},defaultMax:{control:{type:"range",min:0,max:100,step:1},if:{arg:"range"}},min:{control:"number"},max:{control:"number"},step:{control:"number"},disabled:{control:"boolean"},showValue:{control:"boolean"},label:{control:"text"}},args:{label:"Volume",size:"md",min:0,max:100,step:1,disabled:!1,showValue:!0,range:!1,defaultValue:40,defaultMin:25,defaultMax:75}},l={width:"20rem"},s={render:r=>e.jsx("div",{style:l,children:e.jsx(f,{...r})})},n={args:{range:!0,label:"Price range"},render:r=>e.jsx("div",{style:l,children:e.jsx(f,{...r})})},t={render:()=>e.jsxs("div",{style:{...l,display:"flex",flexDirection:"column",gap:"1.5rem"},children:[e.jsx(a,{label:"Size sm",size:"sm",defaultValue:40}),e.jsx(a,{label:"Size md",size:"md",defaultValue:40})]})},o={render:()=>e.jsxs("div",{style:{...l,display:"flex",flexDirection:"column",gap:"1.5rem"},children:[e.jsx(a,{label:"Volume",defaultValue:40,disabled:!0}),e.jsx(a,{label:"Price range",defaultValue:[25,75],disabled:!0})]})},d={name:"formatValue",render:()=>e.jsx("div",{style:l,children:e.jsx(a,{label:"Budget",min:0,max:500,step:10,defaultValue:[100,350],formatValue:r=>`$${r}`})})};function M(){const[r,u]=L.useState(null);function c(m){m.preventDefault();const p=new FormData(m.currentTarget);u(JSON.stringify(Object.fromEntries(p),null,2))}return e.jsxs("form",{onSubmit:c,style:{...l,display:"flex",flexDirection:"column",gap:"1.5rem"},children:[e.jsx(a,{name:"volume",label:"Volume",defaultValue:40}),e.jsx(a,{name:"price",label:"Price range",defaultValue:[25,75]}),e.jsx(W,{type:"submit",children:"Submit"}),r&&e.jsx("pre",{style:{padding:"1rem",background:"var(--background-element)",borderRadius:"var(--radius-md)",fontSize:"0.75rem"},children:r})]})}const i={name:"Inside a <form>",render:()=>e.jsx(M,{})};var g,x,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <div style={PREVIEW_STYLE}>
      <SliderPlayground {...args} />
    </div>
}`,...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var S,V,y;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    range: true,
    label: "Price range"
  },
  render: args => <div style={PREVIEW_STYLE}>
      <SliderPlayground {...args} />
    </div>
}`,...(y=(V=n.parameters)==null?void 0:V.docs)==null?void 0:y.source}}};var j,E,v;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    ...PREVIEW_STYLE,
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  }}>
      <Slider label="Size sm" size="sm" defaultValue={40} />
      <Slider label="Size md" size="md" defaultValue={40} />
    </div>
}`,...(v=(E=t.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var P,z,h;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    ...PREVIEW_STYLE,
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  }}>
      <Slider label="Volume" defaultValue={40} disabled />
      <Slider label="Price range" defaultValue={[25, 75]} disabled />
    </div>
}`,...(h=(z=o.parameters)==null?void 0:z.docs)==null?void 0:h.source}}};var I,D,R;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "formatValue",
  render: () => <div style={PREVIEW_STYLE}>
      <Slider label="Budget" min={0} max={500} step={10} defaultValue={[100, 350]} formatValue={v => \`$\${v}\`} />
    </div>
}`,...(R=(D=d.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var _,T,F;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Inside a <form>",
  render: () => <InFormExample />
}`,...(F=(T=i.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};const O=["Default","Range","Sizes","Disabled","CustomFormat","InForm"],k=Object.freeze(Object.defineProperty({__proto__:null,CustomFormat:d,Default:s,Disabled:o,InForm:i,Range:n,Sizes:t,__namedExportsOrder:O,default:Y},Symbol.toStringTag,{value:"Module"}));export{d as C,s as D,i as I,n as R,t as S,o as a,k as b};
