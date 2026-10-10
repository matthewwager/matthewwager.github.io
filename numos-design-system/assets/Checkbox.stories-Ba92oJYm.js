import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as M}from"./index-ClcD9ViR.js";import{q as c,r as O}from"./DiagramConnector-DY1AhLDR.js";import"./index-Brl4xq4Y.js";const P={title:"Components/Checkbox",component:c,argTypes:{label:{control:"text"},helpText:{control:"text"},error:{control:"boolean"},disabled:{control:"boolean"},indeterminate:{control:"boolean"}},args:{label:"Send me product updates"}},r={render:E=>{function G(){const[_,I]=M.useState(!1);return e.jsx(c,{...E,checked:_,onChange:v=>I(v.target.checked)})}return e.jsx(G,{})}},a={args:{label:"Select all",indeterminate:!0}},t={args:{label:"I agree to the terms",error:!0,helpText:"You must agree to continue"}},o={args:{label:"Unavailable option",disabled:!0}},s={name:"Disabled + checked",args:{label:"Locked in",disabled:!0,checked:!0}},n={render:()=>e.jsxs(O,{label:"Notify me about",helpText:"Pick as many as you'd like",children:[e.jsx(c,{label:"Comments",defaultChecked:!0}),e.jsx(c,{label:"Mentions",defaultChecked:!0}),e.jsx(c,{label:"Weekly digest"})]})};var l,d,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    function Controlled() {
      const [checked, setChecked] = useState(false);
      return <Checkbox {...args} checked={checked} onChange={e => setChecked(e.target.checked)} />;
    }
    return <Controlled />;
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var i,m,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "Select all",
    indeterminate: true
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var b,h,k;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "I agree to the terms",
    error: true,
    helpText: "You must agree to continue"
  }
}`,...(k=(h=t.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var g,x,C;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Unavailable option",
    disabled: true
  }
}`,...(C=(x=o.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var f,S,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Disabled + checked",
  args: {
    label: "Locked in",
    disabled: true,
    checked: true
  }
}`,...(y=(S=s.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var j,D,T;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <CheckboxGroup label="Notify me about" helpText="Pick as many as you'd like">
      <Checkbox label="Comments" defaultChecked />
      <Checkbox label="Mentions" defaultChecked />
      <Checkbox label="Weekly digest" />
    </CheckboxGroup>
}`,...(T=(D=n.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};const L=["Default","Indeterminate","Error","Disabled","DisabledChecked","Group"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Disabled:o,DisabledChecked:s,Error:t,Group:n,Indeterminate:a,__namedExportsOrder:L,default:P},Symbol.toStringTag,{value:"Module"}));export{q as C,r as D,t as E,n as G,a as I,o as a,s as b};
