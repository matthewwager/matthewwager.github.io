import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as j}from"./index-ClcD9ViR.js";import{aj as l,ak as n}from"./DiagramConnector-DY1AhLDR.js";import"./index-Brl4xq4Y.js";import y from"./list-DQczBewf.js";import k from"./layout-grid-LHnh2PTj.js";const D={title:"Components/SegmentedControl",component:l},t={render:()=>{function s(){const[O,f]=j.useState("week");return e.jsxs(l,{value:O,onValueChange:f,children:[e.jsx(n,{value:"day",children:"Day"}),e.jsx(n,{value:"week",children:"Week"}),e.jsx(n,{value:"month",children:"Month"})]})}return e.jsx(s,{})}},o={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-4)",alignItems:"flex-start"},children:["lg","md","sm"].map(s=>e.jsxs(l,{size:s,defaultValue:"week",children:[e.jsx(n,{value:"day",children:"Day"}),e.jsx(n,{value:"week",children:"Week"}),e.jsx(n,{value:"month",children:"Month"})]},s))})},r={name:"With icons",render:()=>e.jsxs(l,{defaultValue:"list",children:[e.jsx(n,{value:"list",leadingIcon:e.jsx(y,{size:16}),children:"List"}),e.jsx(n,{value:"grid",leadingIcon:e.jsx(k,{size:16}),children:"Grid"})]})},a={name:"Disabled option",render:()=>e.jsxs(l,{defaultValue:"day",children:[e.jsx(n,{value:"day",children:"Day"}),e.jsx(n,{value:"week",children:"Week"}),e.jsx(n,{value:"month",disabled:!0,children:"Month"})]})};var d,i,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var u,c,p;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var g,S,C;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "With icons",
  render: () => <SegmentedControl defaultValue="list">
      <SegmentedControlOption value="list" leadingIcon={<List size={16} />}>
        List
      </SegmentedControlOption>
      <SegmentedControlOption value="grid" leadingIcon={<LayoutGrid size={16} />}>
        Grid
      </SegmentedControlOption>
    </SegmentedControl>
}`,...(C=(S=r.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var h,v,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Disabled option",
  render: () => <SegmentedControl defaultValue="day">
      <SegmentedControlOption value="day">Day</SegmentedControlOption>
      <SegmentedControlOption value="week">Week</SegmentedControlOption>
      <SegmentedControlOption value="month" disabled>
        Month
      </SegmentedControlOption>
    </SegmentedControl>
}`,...(x=(v=a.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const V=["Default","Sizes","WithIcons","DisabledOption"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:t,DisabledOption:a,Sizes:o,WithIcons:r,__namedExportsOrder:V,default:D},Symbol.toStringTag,{value:"Module"}));export{t as D,L as S,r as W,a,o as b};
