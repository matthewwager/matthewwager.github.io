import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as T}from"./index-ClcD9ViR.js";import{V as d,b as H,k as I,au as k,ar as R,aq as l}from"./DiagramCell-4gPCrU5w.js";import"./index-Brl4xq4Y.js";import _ from"./rotate-ccw-clock-DPzdVPsj.js";function N(){return e.jsx(k,{defaultValue:"overview",children:e.jsxs(R,{children:[e.jsx(l,{value:"overview",children:"Overview"}),e.jsx(l,{value:"entries",children:"Entries"}),e.jsx(l,{value:"attachments",children:"Attachments"}),e.jsx(l,{value:"history",children:"History"})]})})}function O(){return e.jsx("button",{type:"button","aria-label":"View history",style:{display:"flex",border:"none",background:"none",borderRadius:"var(--radius-full)",padding:"var(--space-2)",color:"var(--content-subtle)",cursor:"pointer"},children:e.jsx(_,{size:16})})}function A({variant:a,title:c,subNav:u,actions:i}){return e.jsx(d,{variant:a,icon:a==="app"?e.jsx(H,{app:"accruals"}):void 0,title:c,onClose:()=>{},subNav:u?e.jsx(N,{}):void 0,actions:i?e.jsx(O,{}):void 0})}const W={title:"Components/Header",component:A,parameters:{layout:"padded"},argTypes:{variant:{control:"select",options:["app","modal"]},title:{control:"text"},subNav:{control:"boolean"},actions:{control:"boolean"}},args:{variant:"app",title:"Accruals",subNav:!0,actions:!0}},t={},r={args:{variant:"modal",title:"Edit accrual"}},n={name:"Title only (no sub-nav)",args:{title:"Reports",subNav:!1,actions:!1}},s={name:"Closing the drawer",render:a=>{function c(){const[u,i]=T.useState(!0);return u?e.jsx(d,{variant:"modal",title:a.title,onClose:()=>i(!1),subNav:a.subNav?e.jsx(N,{}):void 0,actions:a.actions?e.jsx(O,{}):void 0}):e.jsx(I,{variant:"secondary",onClick:()=>i(!0),children:"Reopen drawer"})}return e.jsx(c,{})},args:{variant:"modal",title:"Edit accrual"}},o={name:"With subtitle",render:()=>e.jsx(d,{variant:"modal",title:"Intake & Capture",subtitle:"12 Invoices total",onClose:()=>{}})};var p,m,v;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(v=(m=t.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var b,x,f;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: "modal",
    title: "Edit accrual"
  }
}`,...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var g,j,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Title only (no sub-nav)",
  args: {
    title: "Reports",
    subNav: false,
    actions: false
  }
}`,...(h=(j=n.parameters)==null?void 0:j.docs)==null?void 0:h.source}}};var y,C,w;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(w=(C=s.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var S,E,D;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "With subtitle",
  render: () => <Header variant="modal" title="Intake & Capture" subtitle="12 Invoices total" onClose={() => {}} />
}`,...(D=(E=o.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};const B=["Default","Drawer","TitleOnly","InteractiveClose","WithSubtitle"],M=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Drawer:r,InteractiveClose:s,TitleOnly:n,WithSubtitle:o,__namedExportsOrder:B,default:W},Symbol.toStringTag,{value:"Module"}));export{r as D,M as H,s as I,n as T,o as W};
