import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as H}from"./index-ClcD9ViR.js";import{k as M,V as m,b as W,au as P,ar as V,aq as u}from"./DiagramCell-CHJIAByx.js";import"./index-Brl4xq4Y.js";import q from"./rotate-ccw-clock-DPzdVPsj.js";function R(){return e.jsx(P,{defaultValue:"overview",children:e.jsxs(V,{children:[e.jsx(u,{value:"overview",children:"Overview"}),e.jsx(u,{value:"entries",children:"Entries"}),e.jsx(u,{value:"attachments",children:"Attachments"}),e.jsx(u,{value:"history",children:"History"})]})})}function _(){return e.jsx("button",{type:"button","aria-label":"View history",style:{display:"flex",border:"none",background:"none",borderRadius:"var(--radius-full)",padding:"var(--space-2)",color:"var(--content-subtle)",cursor:"pointer"},children:e.jsx(q,{size:16})})}function A({variant:a,title:r,subNav:s,actions:t,minimized:B}){return e.jsx(m,{variant:a,icon:a==="app"?e.jsx(W,{app:"accruals"}):void 0,title:r,onClose:()=>{},subNav:s?e.jsx(R,{}):void 0,actions:t?e.jsx(_,{}):void 0,minimized:B})}const L={title:"Components/Header",component:A,parameters:{layout:"padded"},argTypes:{variant:{control:"select",options:["app","modal"]},title:{control:"text"},subNav:{control:"boolean"},actions:{control:"boolean"},minimized:{control:"boolean"}},args:{variant:"app",title:"Accruals",subNav:!0,actions:!0,minimized:!1}},o={},i={args:{variant:"modal",title:"Edit accrual"}},l={name:"Title only (no sub-nav)",args:{title:"Reports",subNav:!1,actions:!1}},c={name:"Closing the drawer",render:a=>{function r(){const[s,t]=H.useState(!0);return s?e.jsx(m,{variant:"modal",title:a.title,onClose:()=>t(!1),subNav:a.subNav?e.jsx(R,{}):void 0,actions:a.actions?e.jsx(_,{}):void 0}):e.jsx(M,{variant:"secondary",onClick:()=>t(!0),children:"Reopen drawer"})}return e.jsx(r,{})},args:{variant:"modal",title:"Edit accrual"}},d={name:"With subtitle",render:()=>e.jsx(m,{variant:"modal",title:"Intake & Capture",subtitle:"12 Invoices total",onClose:()=>{}})},n={render:a=>{const[r,s]=H.useState(!0);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-4)",alignItems:"flex-start"},children:[e.jsx(M,{variant:"secondary",size:"sm",onClick:()=>s(t=>!t),children:r?"Show full header":"Minimize"}),e.jsx(A,{...a,minimized:r})]})}};var p,v,x;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var b,f,g;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: "modal",
    title: "Edit accrual"
  }
}`,...(g=(f=i.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var j,y,h;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Title only (no sub-nav)",
  args: {
    title: "Reports",
    subNav: false,
    actions: false
  }
}`,...(h=(y=l.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var z,S,w;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Closing the drawer",
  render: args => {
    function DrawerDemo() {
      const [open, setOpen] = useState(true);
      if (!open) {
        return <Button variant="secondary" onClick={() => setOpen(true)}>Reopen drawer</Button>;
      }
      return <Header variant="modal" title={args.title} onClose={() => setOpen(false)} subNav={args.subNav ? <ExampleSubNav /> : undefined} actions={args.actions ? <ExampleAction /> : undefined} />;
    }
    return <DrawerDemo />;
  },
  args: {
    variant: "modal",
    title: "Edit accrual"
  }
}`,...(w=(S=c.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var C,D,E;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "With subtitle",
  render: () => <Header variant="modal" title="Intake & Capture" subtitle="12 Invoices total" onClose={() => {}} />
}`,...(E=(D=d.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var N,T,k,I,O;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => {
    const [minimized, setMinimized] = useState(true);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      alignItems: "flex-start"
    }}>
        <Button variant="secondary" size="sm" onClick={() => setMinimized(value => !value)}>
          {minimized ? "Show full header" : "Minimize"}
        </Button>
        <HeaderPlayground {...args} minimized={minimized} />
      </div>;
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source},description:{story:"Toggles `minimized`, as scrolling a page down and back up would.",...(O=(I=n.parameters)==null?void 0:I.docs)==null?void 0:O.description}}};const F=["Default","Drawer","TitleOnly","InteractiveClose","WithSubtitle","Minimized"],X=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Drawer:i,InteractiveClose:c,Minimized:n,TitleOnly:l,WithSubtitle:d,__namedExportsOrder:F,default:L},Symbol.toStringTag,{value:"Module"}));export{i as D,X as H,c as I,n as M,l as T,d as W};
