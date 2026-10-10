import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as j}from"./index-ClcD9ViR.js";import{ae as t,ad as a}from"./DiagramConnector-DY1AhLDR.js";import"./index-Brl4xq4Y.js";const g={title:"Components/Radio",component:t},r={render:()=>{function s(){const[u,d]=j.useState("weekly");return e.jsxs(t,{label:"Email frequency",value:u,onValueChange:d,children:[e.jsx(a,{value:"daily",label:"Daily"}),e.jsx(a,{value:"weekly",label:"Weekly"}),e.jsx(a,{value:"monthly",label:"Monthly"})]})}return e.jsx(s,{})}},l={name:"Binary choice (inline)",render:()=>{function s(){const[u,d]=j.useState("true");return e.jsxs(t,{label:"Is this a recurring charge?",orientation:"horizontal",value:u,onValueChange:d,children:[e.jsx(a,{value:"true",label:"Yes"}),e.jsx(a,{value:"false",label:"No"})]})}return e.jsx(s,{})}},o={name:"Error",render:()=>e.jsxs(t,{label:"Choose a plan",defaultValue:"",error:!0,helpText:"Select a plan to continue",children:[e.jsx(a,{value:"starter",label:"Starter",error:!0}),e.jsx(a,{value:"pro",label:"Pro",error:!0})]})},n={render:()=>e.jsxs(t,{label:"Shipping speed",defaultValue:"standard",children:[e.jsx(a,{value:"standard",label:"Standard (5-7 days)"}),e.jsx(a,{value:"express",label:"Express (2 days)",disabled:!0})]})};var i,c,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    function Controlled() {
      const [value, setValue] = useState("weekly");
      return <RadioGroup label="Email frequency" value={value} onValueChange={setValue}>
          <Radio value="daily" label="Daily" />
          <Radio value="weekly" label="Weekly" />
          <Radio value="monthly" label="Monthly" />
        </RadioGroup>;
    }
    return <Controlled />;
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,b,v;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Binary choice (inline)",
  render: () => {
    function Controlled() {
      const [value, setValue] = useState("true");
      return <RadioGroup label="Is this a recurring charge?" orientation="horizontal" value={value} onValueChange={setValue}>
          <Radio value="true" label="Yes" />
          <Radio value="false" label="No" />
        </RadioGroup>;
    }
    return <Controlled />;
  }
}`,...(v=(b=l.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var h,x,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Error",
  render: () => <RadioGroup label="Choose a plan" defaultValue="" error helpText="Select a plan to continue">
      <Radio value="starter" label="Starter" error />
      <Radio value="pro" label="Pro" error />
    </RadioGroup>
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var R,S,f;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <RadioGroup label="Shipping speed" defaultValue="standard">
      <Radio value="standard" label="Standard (5-7 days)" />
      <Radio value="express" label="Express (2 days)" disabled />
    </RadioGroup>
}`,...(f=(S=n.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const V=["Default","Binary","ErrorState","Disabled"],k=Object.freeze(Object.defineProperty({__proto__:null,Binary:l,Default:r,Disabled:n,ErrorState:o,__namedExportsOrder:V,default:g},Symbol.toStringTag,{value:"Module"}));export{l as B,r as D,o as E,k as R,n as a};
