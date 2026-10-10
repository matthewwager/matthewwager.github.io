import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as D}from"./index-ClcD9ViR.js";import{U as w,b as N,j as S,as as O,aq as T,ap as i}from"./DiagramConnector-DY1AhLDR.js";import"./index-Brl4xq4Y.js";import H from"./rotate-ccw-clock-DPzdVPsj.js";function C(){return e.jsx(O,{defaultValue:"overview",children:e.jsxs(T,{children:[e.jsx(i,{value:"overview",children:"Overview"}),e.jsx(i,{value:"entries",children:"Entries"}),e.jsx(i,{value:"attachments",children:"Attachments"}),e.jsx(i,{value:"history",children:"History"})]})})}function E(){return e.jsx("button",{type:"button","aria-label":"View history",style:{display:"flex",border:"none",background:"none",borderRadius:"var(--radius-full)",padding:"var(--space-2)",color:"var(--content-subtle)",cursor:"pointer"},children:e.jsx(H,{size:16})})}function R({variant:a,title:l,subNav:c,actions:s}){return e.jsx(w,{variant:a,icon:a==="app"?e.jsx(N,{app:"accruals"}):void 0,title:l,onClose:()=>{},subNav:c?e.jsx(C,{}):void 0,actions:s?e.jsx(E,{}):void 0})}const _={title:"Components/Header",component:R,parameters:{layout:"padded"},argTypes:{variant:{control:"select",options:["app","modal"]},title:{control:"text"},subNav:{control:"boolean"},actions:{control:"boolean"}},args:{variant:"app",title:"Accruals",subNav:!0,actions:!0}},r={},t={args:{variant:"modal",title:"Edit accrual"}},n={name:"Title only (no sub-nav)",args:{title:"Reports",subNav:!1,actions:!1}},o={name:"Closing the drawer",render:a=>{function l(){const[c,s]=D.useState(!0);return c?e.jsx(w,{variant:"modal",title:a.title,onClose:()=>s(!1),subNav:a.subNav?e.jsx(C,{}):void 0,actions:a.actions?e.jsx(E,{}):void 0}):e.jsx(S,{variant:"secondary",onClick:()=>s(!0),children:"Reopen drawer"})}return e.jsx(l,{})},args:{variant:"modal",title:"Edit accrual"}};var u,d,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,v,b;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "modal",
    title: "Edit accrual"
  }
}`,...(b=(v=t.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var x,f,j;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Title only (no sub-nav)",
  args: {
    title: "Reports",
    subNav: false,
    actions: false
  }
}`,...(j=(f=n.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var g,y,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(y=o.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const A=["Default","Drawer","TitleOnly","InteractiveClose"],V=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Drawer:t,InteractiveClose:o,TitleOnly:n,__namedExportsOrder:A,default:_},Symbol.toStringTag,{value:"Module"}));export{t as D,V as H,o as I,n as T};
