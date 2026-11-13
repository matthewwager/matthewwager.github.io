import{j as r}from"./jsx-runtime-BYYWji4R.js";import{E as s}from"./DiagramCell-BVBcLmyd.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";const D=[{label:"First",value:38},{label:"Second",value:27},{label:"Third",value:18},{label:"Fourth",value:11},{label:"Fifth",value:6}],j={title:"Components/Chart-Donut",component:s,argTypes:{data:{control:!1},thickness:{control:"select",options:["xs","s","m","l","xl"]}},args:{data:D,centerLabel:"Total",showLegend:!0,showCenterLabel:!0}},k=["xs","s","m","l","xl"],E={margin:"0 0 var(--space-2)",font:"var(--type-paragraph-xs-regular)",color:"var(--content-subtle)"},n={render:e=>r.jsx(s,{...e})},t={name:"Center label hidden",args:{showCenterLabel:!1},render:e=>r.jsx(s,{...e})},o={name:"Legend hidden",args:{showLegend:!1},render:e=>r.jsx(s,{...e})},l={name:"Custom center value",args:{centerValue:"$142k",centerLabel:"Revenue"},render:e=>r.jsx(s,{...e})},a={render:()=>r.jsx("div",{style:{display:"flex",gap:"var(--space-5)",flexWrap:"wrap"},children:k.map(e=>r.jsxs("div",{children:[r.jsxs("p",{style:E,children:['thickness="',e,'"']}),r.jsx(s,{data:D,size:140,thickness:e,showLegend:!1,centerLabel:"Total"})]},e))})};var c,d,i;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <DonutChart {...args} />
}`,...(i=(d=n.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var p,u,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Center label hidden",
  args: {
    showCenterLabel: false
  },
  render: args => <DonutChart {...args} />
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,h,L;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Legend hidden",
  args: {
    showLegend: false
  },
  render: args => <DonutChart {...args} />
}`,...(L=(h=o.parameters)==null?void 0:h.docs)==null?void 0:L.source}}};var C,b,v;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Custom center value",
  args: {
    centerValue: "$142k",
    centerLabel: "Revenue"
  },
  render: args => <DonutChart {...args} />
}`,...(v=(b=l.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var x,f,S,T,y;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "var(--space-5)",
    flexWrap: "wrap"
  }}>
      {THICKNESSES.map(thickness => <div key={thickness}>
          <p style={LABEL_STYLE}>thickness="{thickness}"</p>
          <DonutChart data={DATA} size={140} thickness={thickness} showLegend={false} centerLabel="Total" />
        </div>)}
    </div>
}`,...(S=(f=a.parameters)==null?void 0:f.docs)==null?void 0:S.source},description:{story:"Every `thickness`, at the same size.",...(y=(T=a.parameters)==null?void 0:T.docs)==null?void 0:y.description}}};const w=["Default","CenterLabelHidden","LegendHidden","CustomCenterValue","Thickness"],V=Object.freeze(Object.defineProperty({__proto__:null,CenterLabelHidden:t,CustomCenterValue:l,Default:n,LegendHidden:o,Thickness:a,__namedExportsOrder:w,default:j},Symbol.toStringTag,{value:"Module"}));export{t as C,n as D,o as L,a as T,l as a,V as b};
