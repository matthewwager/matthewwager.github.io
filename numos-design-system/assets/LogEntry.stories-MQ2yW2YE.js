import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as P}from"./index-ClcD9ViR.js";import{_ as t}from"./DiagramConnector-DY1AhLDR.js";import"./index-Brl4xq4Y.js";const c={width:"32rem"},C={title:"Components/LogEntry",component:t,argTypes:{subject:{control:"text"},description:{control:"text"},actor:{control:"text"},timestamp:{control:"text"}},args:{subject:"Mary Jane’s",description:"employment status changed from full-time to part-time",actor:"John Doe",timestamp:"Sep 15, 2026 at 3:45p PST"}},s={render:r=>e.jsx("div",{style:c,children:e.jsx(t,{...r})})},a={name:"Without a subject",args:{subject:void 0,description:"Monthly report was generated",actor:"System"},render:r=>e.jsx("div",{style:c,children:e.jsx(t,{...r})})},n={render:()=>e.jsxs("div",{style:c,children:[e.jsx(t,{subject:"Mary Jane’s",description:"employment status changed from full-time to part-time",actor:"John Doe",timestamp:"Sep 15, 2026 at 3:45p PST"}),e.jsx(t,{subject:"Alex Kim",description:"was added to Engineering",actor:"Mary Jane",timestamp:"Sep 12, 2026 at 9:00a PST"}),e.jsx(t,{subject:"Invoice #4021’s",description:"status changed from Pending to Paid",actor:"System",timestamp:"Sep 10, 2026 at 6:00a PST"})]})};function k(){const[r,d]=P.useState("—");return e.jsxs("div",{style:c,children:[e.jsxs("p",{style:{margin:"0 0 var(--space-3)",font:"var(--type-paragraph-s-regular)",color:"var(--content-subtle)"},children:["Last clicked: ",r]}),e.jsx(t,{subject:"Mary Jane’s",description:"employment status changed from full-time to part-time",actor:"John Doe",timestamp:"Sep 15, 2026 at 3:45p PST",onSubjectClick:()=>d("Mary Jane (subject)"),onActorClick:()=>d("John Doe (actor)")})]})}const o={name:"Subject and actor as links",render:()=>e.jsx(k,{})},i={name:"A long description (wraps)",args:{subject:"Acme Manufacturing Co.’s",description:"billing address changed from 100 Old Warehouse Rd, Suite 4B, Springfield, IL to 4400 Commerce Park Drive, Building C, Springfield, IL"},render:r=>e.jsx("div",{style:c,children:e.jsx(t,{...r})})};var m,p,l;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <div style={PREVIEW_STYLE}>
      <LogEntry {...args} />
    </div>
}`,...(l=(p=s.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,g,S;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Without a subject",
  args: {
    subject: undefined,
    description: "Monthly report was generated",
    actor: "System"
  },
  render: args => <div style={PREVIEW_STYLE}>
      <LogEntry {...args} />
    </div>
}`,...(S=(g=a.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var y,j,b;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={PREVIEW_STYLE}>
      <LogEntry subject="Mary Jane’s" description="employment status changed from full-time to part-time" actor="John Doe" timestamp="Sep 15, 2026 at 3:45p PST" />
      <LogEntry subject="Alex Kim" description="was added to Engineering" actor="Mary Jane" timestamp="Sep 12, 2026 at 9:00a PST" />
      <LogEntry subject="Invoice #4021’s" description="status changed from Pending to Paid" actor="System" timestamp="Sep 10, 2026 at 6:00a PST" />
    </div>
}`,...(b=(j=n.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var f,h,E;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Subject and actor as links",
  render: () => <ClickableDemo />
}`,...(E=(h=o.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var x,L,v;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "A long description (wraps)",
  args: {
    subject: "Acme Manufacturing Co.’s",
    description: "billing address changed from 100 Old Warehouse Rd, Suite 4B, Springfield, IL to 4400 Commerce Park Drive, Building C, Springfield, IL"
  },
  render: args => <div style={PREVIEW_STYLE}>
      <LogEntry {...args} />
    </div>
}`,...(v=(L=i.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};const T=["Default","WithoutASubject","Stacked","Clickable","LongDescription"],_=Object.freeze(Object.defineProperty({__proto__:null,Clickable:o,Default:s,LongDescription:i,Stacked:n,WithoutASubject:a,__namedExportsOrder:T,default:C},Symbol.toStringTag,{value:"Module"}));export{o as C,s as D,_ as L,n as S,a as W,i as a};
