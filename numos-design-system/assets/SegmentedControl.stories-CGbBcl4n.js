import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as F}from"./index-ClcD9ViR.js";import{ak as t,al as n}from"./DiagramCell-4gPCrU5w.js";import"./index-Brl4xq4Y.js";import H from"./list-DQczBewf.js";import J from"./layout-grid-LHnh2PTj.js";const N={title:"Components/SegmentedControl",component:t},a={render:()=>{function o(){const[r,v]=F.useState("week");return e.jsxs(t,{value:r,onValueChange:v,children:[e.jsx(n,{value:"day",children:"Day"}),e.jsx(n,{value:"week",children:"Week"}),e.jsx(n,{value:"month",children:"Month"})]})}return e.jsx(o,{})}},l={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-4)",alignItems:"flex-start"},children:["lg","md","sm"].map(o=>e.jsxs(t,{size:o,defaultValue:"week",children:[e.jsx(n,{value:"day",children:"Day"}),e.jsx(n,{value:"week",children:"Week"}),e.jsx(n,{value:"month",children:"Month"})]},o))})},s={name:"With icons",render:()=>e.jsxs(t,{defaultValue:"list",children:[e.jsx(n,{value:"list",leadingIcon:e.jsx(H,{size:16}),children:"List"}),e.jsx(n,{value:"grid",leadingIcon:e.jsx(J,{size:16}),children:"Grid"})]})},d={name:"Icon only",render:()=>e.jsxs(t,{size:"md",defaultValue:"list",children:[e.jsx(n,{value:"list",leadingIcon:e.jsx(H,{size:16}),"aria-label":"List view"}),e.jsx(n,{value:"grid",leadingIcon:e.jsx(J,{size:16}),"aria-label":"Grid view"})]})},i={name:"Disabled option",render:()=>e.jsxs(t,{defaultValue:"day",children:[e.jsx(n,{value:"day",children:"Day"}),e.jsx(n,{value:"week",children:"Week"}),e.jsx(n,{value:"month",disabled:!0,children:"Month"})]})},K=[{value:"inputs",label:"Inputs",count:12},{value:"review",label:"Review",count:4},{value:"approved",label:"Approved",count:3},{value:"scheduled",label:"Scheduled",count:6},{value:"paid",label:"Paid",count:21}],u={render:()=>{function o(){const[r,v]=F.useState("inputs");return e.jsx(t,{variant:"progress",value:r,onValueChange:v,children:K.map(g=>e.jsx(n,{value:g.value,badge:g.count,children:g.label},g.value))})}return e.jsx(o,{})}},m={name:"Progress sizes",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-4)"},children:["lg","md","sm"].map(o=>e.jsx(t,{variant:"progress",size:o,defaultValue:"review",children:K.slice(0,4).map(r=>e.jsx(n,{value:r.value,badge:r.count,children:r.label},r.value))},o))})},c={name:"Progress without badges",render:()=>e.jsxs(t,{variant:"progress",defaultValue:"draft",children:[e.jsx(n,{value:"draft",children:"Draft"}),e.jsx(n,{value:"submitted",children:"Submitted"}),e.jsx(n,{value:"approved",children:"Approved"})]})},p={name:"Default with badges",render:()=>e.jsxs(t,{defaultValue:"open",children:[e.jsx(n,{value:"open",badge:8,children:"Open"}),e.jsx(n,{value:"snoozed",badge:2,children:"Snoozed"}),e.jsx(n,{value:"done",badge:34,children:"Done"})]})};var S,C,h;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    function Controlled() {
      const [value, setValue] = useState("week");
      return <SegmentedControl value={value} onValueChange={setValue}>
          <SegmentedControlOption value="day">Day</SegmentedControlOption>
          <SegmentedControlOption value="week">Week</SegmentedControlOption>
          <SegmentedControlOption value="month">Month</SegmentedControlOption>
        </SegmentedControl>;
    }
    return <Controlled />;
  }
}`,...(h=(C=a.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var x,O,f;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-4)",
    alignItems: "flex-start"
  }}>
      {(["lg", "md", "sm"] as const).map(size => <SegmentedControl key={size} size={size} defaultValue="week">
          <SegmentedControlOption value="day">Day</SegmentedControlOption>
          <SegmentedControlOption value="week">Week</SegmentedControlOption>
          <SegmentedControlOption value="month">Month</SegmentedControlOption>
        </SegmentedControl>)}
    </div>
}`,...(f=(O=l.parameters)==null?void 0:O.docs)==null?void 0:f.source}}};var j,b,y;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "With icons",
  render: () => <SegmentedControl defaultValue="list">
      <SegmentedControlOption value="list" leadingIcon={<List size={16} />}>
        List
      </SegmentedControlOption>
      <SegmentedControlOption value="grid" leadingIcon={<LayoutGrid size={16} />}>
        Grid
      </SegmentedControlOption>
    </SegmentedControl>
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var z,D,V;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Icon only",
  render: () => <SegmentedControl size="md" defaultValue="list">
      <SegmentedControlOption value="list" leadingIcon={<List size={16} />} aria-label="List view" />
      <SegmentedControlOption value="grid" leadingIcon={<LayoutGrid size={16} />} aria-label="Grid view" />
    </SegmentedControl>
}`,...(V=(D=d.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var w,k,I;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Disabled option",
  render: () => <SegmentedControl defaultValue="day">
      <SegmentedControlOption value="day">Day</SegmentedControlOption>
      <SegmentedControlOption value="week">Week</SegmentedControlOption>
      <SegmentedControlOption value="month" disabled>
        Month
      </SegmentedControlOption>
    </SegmentedControl>
}`,...(I=(k=i.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var W,P,L;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    function Controlled() {
      const [value, setValue] = useState("inputs");
      return <SegmentedControl variant="progress" value={value} onValueChange={setValue}>
          {stages.map(stage => <SegmentedControlOption key={stage.value} value={stage.value} badge={stage.count}>
              {stage.label}
            </SegmentedControlOption>)}
        </SegmentedControl>;
    }
    return <Controlled />;
  }
}`,...(L=(P=u.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var G,M,_;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "Progress sizes",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-4)"
  }}>
      {(["lg", "md", "sm"] as const).map(size => <SegmentedControl key={size} variant="progress" size={size} defaultValue="review">
          {stages.slice(0, 4).map(stage => <SegmentedControlOption key={stage.value} value={stage.value} badge={stage.count}>
              {stage.label}
            </SegmentedControlOption>)}
        </SegmentedControl>)}
    </div>
}`,...(_=(M=m.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var B,A,E;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Progress without badges",
  render: () => <SegmentedControl variant="progress" defaultValue="draft">
      <SegmentedControlOption value="draft">Draft</SegmentedControlOption>
      <SegmentedControlOption value="submitted">Submitted</SegmentedControlOption>
      <SegmentedControlOption value="approved">Approved</SegmentedControlOption>
    </SegmentedControl>
}`,...(E=(A=c.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var R,T,q;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Default with badges",
  render: () => <SegmentedControl defaultValue="open">
      <SegmentedControlOption value="open" badge={8}>
        Open
      </SegmentedControlOption>
      <SegmentedControlOption value="snoozed" badge={2}>
        Snoozed
      </SegmentedControlOption>
      <SegmentedControlOption value="done" badge={34}>
        Done
      </SegmentedControlOption>
    </SegmentedControl>
}`,...(q=(T=p.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};const Q=["Default","Sizes","WithIcons","IconOnly","DisabledOption","Progress","ProgressSizes","ProgressWithoutBadges","DefaultWithBadges"],ne=Object.freeze(Object.defineProperty({__proto__:null,Default:a,DefaultWithBadges:p,DisabledOption:i,IconOnly:d,Progress:u,ProgressSizes:m,ProgressWithoutBadges:c,Sizes:l,WithIcons:s,__namedExportsOrder:Q,default:N},Symbol.toStringTag,{value:"Module"}));export{a as D,d as I,u as P,ne as S,s as W,p as a,i as b,m as c,c as d,l as e};
