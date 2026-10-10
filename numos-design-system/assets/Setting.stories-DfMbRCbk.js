import{j as e}from"./jsx-runtime-BYYWji4R.js";import{am as c}from"./DiagramConnector-DY1AhLDR.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";const Y={title:"Components/Setting",component:c,parameters:{layout:"padded"}},L=[{value:"member",label:"Member"},{value:"admin",label:"Admin"},{value:"owner",label:"Owner"}],B=[{value:"digest",label:"Weekly digest"},{value:"mentions",label:"Mentions"},{value:"comments",label:"Comments"}],W={width:"28rem"};function a(m){return e.jsxs("div",{style:{...W,display:"flex",flexDirection:"column",gap:"1.5rem"},children:[e.jsx(c,{...m,edit:!1}),e.jsx(c,{...m,edit:!0})]})}const t={render:()=>e.jsx(a,{label:"Full name",type:"text",value:"Maya Chen"})},r={render:()=>e.jsx(a,{label:"Bio",type:"textarea",value:"Product designer focused on data-heavy tools."})},o={render:()=>e.jsx(a,{label:"Role",type:"select",value:"admin",options:L})},s={render:()=>e.jsx(a,{label:"Role",type:"radio",value:"admin",options:L})},l={render:()=>e.jsx(a,{label:"Notifications",type:"checkbox",values:["digest","mentions"],options:B})},n={render:()=>e.jsx(a,{label:"Storage used",type:"slider",value:"75"})},d={render:()=>e.jsx(a,{label:"Two-factor authentication",type:"toggle",checked:!0})},i={name:"segmentedControl",render:()=>e.jsx(a,{label:"Employment type",type:"segmentedControl",value:"fulltime",options:[{value:"fulltime",label:"Full-time"},{value:"parttime",label:"Part-time"},{value:"contract",label:"Contract"}]})};var u,p,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <ReadEditPair label="Full name" type="text" value="Maya Chen" />
}`,...(b=(p=t.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var g,y,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <ReadEditPair label="Bio" type="textarea" value="Product designer focused on data-heavy tools." />
}`,...(v=(y=r.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var x,S,R;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <ReadEditPair label="Role" type="select" value="admin" options={ROLE_OPTIONS} />
}`,...(R=(S=o.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var P,T,f;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <ReadEditPair label="Role" type="radio" value="admin" options={ROLE_OPTIONS} />
}`,...(f=(T=s.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var E,O,j;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <ReadEditPair label="Notifications" type="checkbox" values={["digest", "mentions"]} options={NOTIFY_OPTIONS} />
}`,...(j=(O=l.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var C,h,_;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <ReadEditPair label="Storage used" type="slider" value="75" />
}`,...(_=(h=n.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var N,I,k;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <ReadEditPair label="Two-factor authentication" type="toggle" checked={true} />
}`,...(k=(I=d.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var F,w,M;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "segmentedControl",
  render: () => <ReadEditPair label="Employment type" type="segmentedControl" value="fulltime" options={[{
    value: "fulltime",
    label: "Full-time"
  }, {
    value: "parttime",
    label: "Part-time"
  }, {
    value: "contract",
    label: "Contract"
  }]} />
}`,...(M=(w=i.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};const z=["Text","Textarea","Select","Radio","Checkbox","Slider","Toggle","SegmentedControlType"],G=Object.freeze(Object.defineProperty({__proto__:null,Checkbox:l,Radio:s,SegmentedControlType:i,Select:o,Slider:n,Text:t,Textarea:r,Toggle:d,__namedExportsOrder:z,default:Y},Symbol.toStringTag,{value:"Module"}));export{l as C,s as R,i as S,t as T,o as a,G as b,n as c,r as d,d as e};
