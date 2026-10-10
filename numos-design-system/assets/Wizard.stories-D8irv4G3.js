import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as T}from"./index-ClcD9ViR.js";import{az as s,av as u,al as D,ae as W,ad as o,aj as C,ak as d,r as R,q as p,ax as _}from"./DiagramConnector-DY1AhLDR.js";import"./index-Brl4xq4Y.js";const k={title:"Components/Wizard",component:s,parameters:{layout:"padded"}},l={height:"42rem",display:"flex"},i=[{id:"details",label:"Details",heading:"Employee details",description:"Basic information used across the rest of the flow.",content:e.jsxs(e.Fragment,{children:[e.jsx(u,{name:"fullName",label:"Full name",size:"md",placeholder:"Jordan Lee",required:!0}),e.jsx(u,{name:"email",label:"Email",type:"email",size:"md",placeholder:"jordan@company.com",required:!0})]})},{id:"role",label:"Role",heading:"Role & department",description:"Determines default permissions and where they show up in reports.",content:e.jsxs(e.Fragment,{children:[e.jsx(D,{name:"department",label:"Department",size:"md",placeholder:"Select a department",options:[{value:"design",label:"Design"},{value:"engineering",label:"Engineering"},{value:"sales",label:"Sales"}]}),e.jsxs(W,{name:"role",label:"Role",defaultValue:"member",children:[e.jsx(o,{value:"member",label:"Member"}),e.jsx(o,{value:"admin",label:"Admin"}),e.jsx(o,{value:"owner",label:"Owner"})]}),e.jsxs(C,{name:"employmentType",defaultValue:"fulltime",children:[e.jsx(d,{value:"fulltime",children:"Full-time"}),e.jsx(d,{value:"parttime",children:"Part-time"}),e.jsx(d,{value:"contract",children:"Contract"})]})]})},{id:"access",label:"Access",heading:"Notifications & access",content:e.jsxs(e.Fragment,{children:[e.jsxs(R,{label:"Notifications",children:[e.jsx(p,{name:"notify",value:"digest",label:"Weekly digest",defaultChecked:!0}),e.jsx(p,{name:"notify",value:"mentions",label:"Mentions",defaultChecked:!0})]}),e.jsx(_,{name:"twoFactor",label:"Require two-factor authentication"})]})}];function O(){const[m,c]=T.useState(null);function P(z){const L=new FormData(z.currentTarget);c(JSON.stringify(Object.fromEntries(L),null,2))}return m?e.jsx("div",{style:{...l,flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"1rem"},children:e.jsx("pre",{style:{padding:"1rem",background:"var(--background-element)",borderRadius:"var(--radius-md)",fontSize:"0.75rem"},children:m})}):e.jsx("div",{style:l,children:e.jsx(s,{title:"Add employee",steps:i,onSaveExit:()=>c("Exited without finishing."),onFinish:P})})}const t={render:()=>e.jsx(O,{})},a={name:"defaultStepPanelExpanded={true}",render:()=>e.jsx("div",{style:l,children:e.jsx(s,{title:"Add employee",steps:i,defaultStepPanelExpanded:!0,onFinish:()=>{}})})},n={name:"nextLabel / finishLabel",render:()=>e.jsx("div",{style:l,children:e.jsx(s,{title:"Invite teammate",steps:i,nextLabel:"Next step",finishLabel:"Send invite",onFinish:()=>{}})})},r={name:"Full viewport (open in new tab)",parameters:{layout:"fullscreen",noThemeSplit:!0},render:()=>e.jsx("div",{style:{height:"100vh"},children:e.jsx(s,{title:"Add employee",steps:i,onFinish:()=>{}})})};var h,x,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <WizardDemo />
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var b,j,g;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "defaultStepPanelExpanded={true}",
  render: () => <div style={PREVIEW_STYLE}>
      <Wizard title="Add employee" steps={STEPS} defaultStepPanelExpanded={true} onFinish={() => {}} />
    </div>
}`,...(g=(j=a.parameters)==null?void 0:j.docs)==null?void 0:g.source}}};var v,S,y;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "nextLabel / finishLabel",
  render: () => <div style={PREVIEW_STYLE}>
      <Wizard title="Invite teammate" steps={STEPS} nextLabel="Next step" finishLabel="Send invite" onFinish={() => {}} />
    </div>
}`,...(y=(S=n.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var E,F,w;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Full viewport (open in new tab)",
  parameters: {
    layout: "fullscreen",
    noThemeSplit: true
  },
  render: () => <div style={{
    height: "100vh"
  }}>
      <Wizard title="Add employee" steps={STEPS} onFinish={() => {}} />
    </div>
}`,...(w=(F=r.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};const A=["Default","PanelExpandedByDefault","CustomLabels","FullViewport"],B=Object.freeze(Object.defineProperty({__proto__:null,CustomLabels:n,Default:t,FullViewport:r,PanelExpandedByDefault:a,__namedExportsOrder:A,default:k},Symbol.toStringTag,{value:"Module"}));export{n as C,t as D,B as W};
