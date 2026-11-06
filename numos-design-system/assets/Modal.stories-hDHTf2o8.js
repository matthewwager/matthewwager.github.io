import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as y}from"./index-ClcD9ViR.js";import{k as t,a2 as b,V as w,a3 as ee,a4 as C,l as k,r as D,az as ne,f as se,d as te,ay as le,ax as oe,am as ie}from"./DiagramCell-CHJIAByx.js";import"./index-Brl4xq4Y.js";import ce from"./paperclip-C3vj8D1_.js";function de({variant:c,side:s,closeOnOverlayClick:r}){const[j,l]=y.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>l(!0),children:"Delete project…"}),e.jsxs(b,{open:j,onOpenChange:l,variant:c,side:s,closeOnOverlayClick:r,children:[e.jsx(w,{variant:"modal",title:"Delete project",onClose:()=>l(!1)}),e.jsx(ee,{children:e.jsx("p",{style:{margin:0,font:"var(--type-paragraph-m-regular)",color:"var(--content-base)"},children:`This can't be undone. Are you sure you want to delete "Q3 roadmap"?`})}),e.jsx(C,{children:e.jsxs(k,{children:[e.jsx(t,{variant:"secondary",onClick:()=>l(!1),children:"Cancel"}),e.jsx(t,{variant:"destructive",onClick:()=>l(!1),children:"Delete"})]})})]})]})}const pe={title:"Components/Modal",component:de,parameters:{layout:"padded"},argTypes:{variant:{control:"select",options:["default","drawer","fullscreen"]},side:{control:"select",options:["top","right","bottom","left"],if:{arg:"variant",eq:"drawer"}},closeOnOverlayClick:{control:"boolean"}},args:{variant:"default",side:"right",closeOnOverlayClick:!0}},d={},p={args:{variant:"drawer",side:"right"}},u={name:'side="left"',args:{variant:"drawer",side:"left"}},m={name:'side="top"',args:{variant:"drawer",side:"top"}},g={name:'side="bottom"',args:{variant:"drawer",side:"bottom"}},h={name:"closeOnOverlayClick={false}",args:{closeOnOverlayClick:!1}},f={args:{variant:"fullscreen"}},x={name:"With form fields",render:()=>{function c(){const[s,r]=y.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>r(!0),children:"New project…"}),e.jsxs(b,{open:s,onOpenChange:r,variant:"default",children:[e.jsx(w,{variant:"modal",title:"New project",onClose:()=>r(!1)}),e.jsxs(ee,{children:[e.jsx(oe,{label:"Name",size:"md",placeholder:"Q3 roadmap"}),e.jsx(ie,{label:"Team",size:"md",placeholder:"Select a team",options:[{value:"design",label:"Design"},{value:"engineering",label:"Engineering"}]})]}),e.jsx(C,{children:e.jsxs(k,{children:[e.jsx(t,{variant:"secondary",onClick:()=>r(!1),children:"Cancel"}),e.jsx(t,{variant:"primary",onClick:()=>r(!1),children:"Create"})]})})]})]})}return e.jsx(c,{})}},o=[{id:"1",title:"Notify Acme Corp — contract renewal",subtitle:"Contract #4471",description:"Acme's annual contract renews in 14 days — a renewal notice is queued to send.",person:"Jordan Lee",message:"Can we hold this until legal signs off?",reply:`Hi Jordan,

Holding for now — I'll send once legal confirms.

Thanks,`,attachment:"Contract-4471.pdf"},{id:"2",title:"Notify Brightside LLC — contract renewal",subtitle:"Contract #4502",description:"Brightside's annual contract renews in 9 days — a renewal notice is queued to send.",person:"Priya Patel",message:"Approved, please proceed.",reply:`Hi Priya,

Thanks — sending the notice now.

Best,`},{id:"3",title:"Notify Delacroix Studio — contract renewal",subtitle:"Contract #4519",description:"Delacroix's annual contract renews in 21 days — a renewal notice is queued to send.",person:"Sam Rivera",message:"",reply:""}];function ue(){const[c,s]=y.useState(!1),[r,j]=y.useState(o.map(a=>a.id)),[l,ae]=y.useState(o[0].id),n=o.find(a=>a.id===l);function S(a){j(i=>i.includes(a)?i.filter(re=>re!==a):[...i,a])}return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>s(!0),children:"Send 3 contract renewal notices…"}),e.jsxs(b,{open:c,onOpenChange:s,variant:"fullscreen",children:[e.jsx(w,{variant:"modal",title:`Send ${r.length} contract renewal notices`,onClose:()=>s(!1)}),e.jsxs("div",{style:{display:"flex",flex:1,minHeight:0},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"20rem",flexShrink:0,borderRight:"1px solid var(--border-subtle)",background:"var(--background-secondary)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-2)",padding:"var(--space-4)",borderBottom:"1px solid var(--border-subtle)",flexShrink:0},children:[e.jsx(D,{checked:r.length===o.length,indeterminate:r.length>0&&r.length<o.length,onChange:a=>j(a.target.checked?o.map(i=>i.id):[]),"aria-label":"Select all"}),e.jsxs("span",{style:{font:"var(--type-paragraph-s-medium)",color:"var(--content-subtle)"},children:[r.length," of ",o.length," selected"]})]}),e.jsx("div",{style:{flex:1,minHeight:0,overflowY:"auto"},children:o.map(a=>e.jsxs("button",{type:"button",onClick:()=>ae(a.id),style:{display:"flex",alignItems:"flex-start",gap:"var(--space-2)",width:"100%",padding:"var(--space-3) var(--space-4)",border:"none",borderBottom:"1px solid var(--border-subtle)",background:a.id===l?"var(--background-selected)":"var(--background-default)",textAlign:"left",cursor:"pointer"},children:[e.jsx("span",{onClick:i=>i.stopPropagation(),children:e.jsx(D,{checked:r.includes(a.id),onChange:()=>S(a.id),"aria-label":`Select ${a.title}`})}),e.jsxs("span",{style:{display:"flex",flexDirection:"column",gap:"0.125rem",minWidth:0},children:[e.jsx("span",{style:{font:"var(--type-paragraph-s-medium)",color:"var(--content-emphasis)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:a.title}),e.jsx("span",{style:{font:"var(--type-paragraph-xs-regular)",color:"var(--content-subtle)"},children:a.subtitle})]})]},a.id))})]}),e.jsxs("div",{style:{flex:1,minWidth:0,display:"flex",flexDirection:"column",overflow:"hidden"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"var(--space-3)",padding:"var(--space-4)",borderBottom:"1px solid var(--border-disabled)",flexShrink:0},children:[e.jsxs("div",{children:[e.jsx("p",{style:{margin:0,font:"var(--type-heading-m)",color:"var(--content-emphasis)"},children:n.title}),e.jsx("p",{style:{margin:0,font:"var(--type-paragraph-s-regular)",color:"var(--content-subtle)"},children:n.subtitle})]}),e.jsx(ne,{label:"Include",labelPlacement:"left",size:"md",checked:r.includes(n.id),onChange:()=>S(n.id)})]}),e.jsxs("div",{style:{flex:1,minHeight:0,overflowY:"auto",padding:"var(--space-4)",display:"flex",flexDirection:"column",gap:"var(--space-4)"},children:[e.jsx(se,{status:"info",title:"AI Summary",description:n.description}),n.message&&e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-2)"},children:[e.jsx(te,{name:n.person,size:"sm"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("span",{style:{font:"var(--type-paragraph-s-medium)",color:"var(--content-emphasis)"},children:n.person}),e.jsx("span",{style:{font:"var(--type-paragraph-xs-regular)",color:"var(--content-subtle)"},children:n.message})]})]}),e.jsx(le,{value:n.reply,readOnly:!0,rows:6,"aria-label":"Reply"}),n.attachment&&e.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"var(--space-2)"},children:[e.jsx(ce,{size:16,style:{color:"var(--content-link-default)"},"aria-hidden":!0}),e.jsx("span",{style:{font:"var(--type-paragraph-s-regular)",color:"var(--content-link-default)"},children:n.attachment})]})]})]})]}),e.jsx(C,{children:e.jsxs(k,{children:[e.jsx(t,{variant:"secondary",onClick:()=>s(!1),children:"Cancel"}),e.jsxs(t,{variant:"primary",onClick:()=>s(!1),children:["Send ",r.length," notices"]})]})})]})]})}const v={name:"Fullscreen — List & Detail review",render:()=>e.jsx(ue,{})};var O,B,F;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:"{}",...(F=(B=d.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var M,I,T;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: "drawer",
    side: "right"
  }
}`,...(T=(I=p.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var L,z,N;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'side="left"',
  args: {
    variant: "drawer",
    side: "left"
  }
}`,...(N=(z=u.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var E,H,P;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'side="top"',
  args: {
    variant: "drawer",
    side: "top"
  }
}`,...(P=(H=m.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var W,A,_;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'side="bottom"',
  args: {
    variant: "drawer",
    side: "bottom"
  }
}`,...(_=(A=g.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var R,q,G;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "closeOnOverlayClick={false}",
  args: {
    closeOnOverlayClick: false
  }
}`,...(G=(q=h.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var Q,J,V;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    variant: "fullscreen"
  }
}`,...(V=(J=f.parameters)==null?void 0:J.docs)==null?void 0:V.source}}};var Y,$,K;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "With form fields",
  render: () => {
    function Demo() {
      const [open, setOpen] = useState(false);
      return <>
          <Button onClick={() => setOpen(true)}>New project…</Button>
          <Modal open={open} onOpenChange={setOpen} variant="default">
            <Header variant="modal" title="New project" onClose={() => setOpen(false)} />
            <ModalBody>
              <TextInput label="Name" size="md" placeholder="Q3 roadmap" />
              <Select label="Team" size="md" placeholder="Select a team" options={[{
              value: "design",
              label: "Design"
            }, {
              value: "engineering",
              label: "Engineering"
            }]} />
            </ModalBody>
            <ModalFooter>
              <ButtonGroup>
                <Button variant="secondary" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={() => setOpen(false)}>
                  Create
                </Button>
              </ButtonGroup>
            </ModalFooter>
          </Modal>
        </>;
    }
    return <Demo />;
  }
}`,...(K=($=x.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var U,X,Z;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "Fullscreen — List & Detail review",
  render: () => <FullscreenListDetailDemo />
}`,...(Z=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const me=["Default","Drawer","DrawerLeft","DrawerTop","DrawerBottom","ManualClose","Fullscreen","WithFormFields","FullscreenListDetail"],ye=Object.freeze(Object.defineProperty({__proto__:null,Default:d,Drawer:p,DrawerBottom:g,DrawerLeft:u,DrawerTop:m,Fullscreen:f,FullscreenListDetail:v,ManualClose:h,WithFormFields:x,__namedExportsOrder:me,default:pe},Symbol.toStringTag,{value:"Module"}));export{d as D,f as F,h as M,x as W,p as a,g as b,u as c,m as d,v as e,ye as f};
