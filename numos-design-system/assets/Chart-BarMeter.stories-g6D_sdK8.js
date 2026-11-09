import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as F}from"./index-ClcD9ViR.js";import{h as o,a2 as J,V as E,a3 as Z,a4 as w,l as V,k as g}from"./DiagramCell-BoDqalDD.js";import"./index-Brl4xq4Y.js";const G={title:"Components/Chart-BarMeter",component:o},m=[...Array.from({length:15},(r,a)=>({status:"positive",label:`INV-${1001+a}`,description:"Paid"})),...Array.from({length:9},(r,a)=>({status:"notice",label:`INV-${1016+a}`,description:`Due in ${a+2} days`})),{status:"negative",label:"INV-1025",description:"Overdue 12 days"}],u=[{upTo:47,status:"positive",label:"Lo"},{upTo:74,status:"notice"},{upTo:100,status:"negative",label:"Hi"}],t={args:{items:m,"aria-label":"Invoices"}},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-4)"},children:[e.jsx(o,{value:100,zones:u,"aria-label":"Load"}),e.jsx(o,{value:80,zones:u,"aria-label":"Load"}),e.jsx(o,{value:35,zones:u,"aria-label":"Load"})]})},l={name:"Proportional, default zones",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-4)"},children:[e.jsx(o,{value:72,"aria-label":"Health score"}),e.jsx(o,{value:72,mode:"positive-to-negative","aria-label":"Error budget used"}),e.jsx(o,{value:40,bars:30,mode:"positive-to-negative","aria-label":"Storage used"})]})},i={name:"Without labels",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-4)"},children:[e.jsx(o,{items:m,showLabels:!1,"aria-label":"Invoices"}),e.jsx(o,{value:80,zones:u,showLabels:!1,"aria-label":"Load"})]})},c={name:"Click to open a modal",render:()=>{function r(){var v,b;const[a,n]=F.useState(null);return e.jsxs(e.Fragment,{children:[e.jsx(o,{items:m,"aria-label":"Invoices",onBarClick:n}),e.jsxs(J,{open:a!==null,onOpenChange:N=>!N&&n(null),children:[e.jsx(E,{variant:"modal",title:((v=a==null?void 0:a.item)==null?void 0:v.label)??"",onClose:()=>n(null)}),e.jsx(Z,{children:e.jsx("p",{style:{margin:0,font:"var(--type-paragraph-m-regular)",color:"var(--content-base)"},children:(b=a==null?void 0:a.item)==null?void 0:b.description})}),e.jsx(w,{children:e.jsxs(V,{children:[e.jsx(g,{variant:"secondary",onClick:()=>n(null),children:"Close"}),e.jsx(g,{onClick:()=>n(null),children:"Open invoice"})]})})]})]})}return e.jsx(r,{})}},d={name:"Click to open a popover",render:()=>e.jsx(o,{items:m,"aria-label":"Invoices",renderPopover:r=>{var a,n;return e.jsxs("span",{children:[e.jsx("strong",{children:(a=r.item)==null?void 0:a.label}),": ",(n=r.item)==null?void 0:n.description]})}})},p={name:"Custom tooltip",render:()=>e.jsx(o,{value:60,bars:12,mode:"positive-to-negative","aria-label":"Monthly budget used",formatTooltip:r=>({title:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][r.index]??"",body:r.filled?"Spent":"Not yet"})})};var x,M,h;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    items: invoices,
    "aria-label": "Invoices"
  }
}`,...(h=(M=t.parameters)==null?void 0:M.docs)==null?void 0:h.source}}};var y,f,j;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-4)"
  }}>
      <BarMeter value={100} zones={loHiZones} aria-label="Load" />
      <BarMeter value={80} zones={loHiZones} aria-label="Load" />
      <BarMeter value={35} zones={loHiZones} aria-label="Load" />
    </div>
}`,...(j=(f=s.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var B,C,S;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Proportional, default zones",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-4)"
  }}>
      <BarMeter value={72} aria-label="Health score" />
      <BarMeter value={72} mode="positive-to-negative" aria-label="Error budget used" />
      <BarMeter value={40} bars={30} mode="positive-to-negative" aria-label="Storage used" />
    </div>
}`,...(S=(C=l.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var k,L,O;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "Without labels",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-4)"
  }}>
      <BarMeter items={invoices} showLabels={false} aria-label="Invoices" />
      <BarMeter value={80} zones={loHiZones} showLabels={false} aria-label="Load" />
    </div>
}`,...(O=(L=i.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var P,T,z;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Click to open a modal",
  render: () => {
    function WithModal() {
      const [selected, setSelected] = useState<BarMeterBar | null>(null);
      return <>
          <BarMeter items={invoices} aria-label="Invoices" onBarClick={setSelected} />
          <Modal open={selected !== null} onOpenChange={open => !open && setSelected(null)}>
            <Header variant="modal" title={selected?.item?.label ?? ""} onClose={() => setSelected(null)} />
            <ModalBody>
              <p style={{
              margin: 0,
              font: "var(--type-paragraph-m-regular)",
              color: "var(--content-base)"
            }}>{selected?.item?.description}</p>
            </ModalBody>
            <ModalFooter>
              <ButtonGroup>
                <Button variant="secondary" onClick={() => setSelected(null)}>
                  Close
                </Button>
                <Button onClick={() => setSelected(null)}>Open invoice</Button>
              </ButtonGroup>
            </ModalFooter>
          </Modal>
        </>;
    }
    return <WithModal />;
  }
}`,...(z=(T=c.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var I,H,A;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Click to open a popover",
  render: () => <BarMeter items={invoices} aria-label="Invoices" renderPopover={bar => <span>
          <strong>{bar.item?.label}</strong>: {bar.item?.description}
        </span>} />
}`,...(A=(H=d.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var D,W,_;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Custom tooltip",
  render: () => <BarMeter value={60} bars={12} mode="positive-to-negative" aria-label="Monthly budget used" formatTooltip={bar => ({
    title: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][bar.index] ?? "",
    body: bar.filled ? "Spent" : "Not yet"
  })} />
}`,...(_=(W=p.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};const $=["Absolute","Proportional","ProportionalModes","WithoutLabels","ClickToOpenModal","ClickToOpenPopover","CustomTooltip"],U=Object.freeze(Object.defineProperty({__proto__:null,Absolute:t,ClickToOpenModal:c,ClickToOpenPopover:d,CustomTooltip:p,Proportional:s,ProportionalModes:l,WithoutLabels:i,__namedExportsOrder:$,default:G},Symbol.toStringTag,{value:"Module"}));export{t as A,U as C,s as P,i as W,c as a,d as b,p as c,l as d};
