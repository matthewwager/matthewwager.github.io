import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as y}from"./index-ClcD9ViR.js";import{ah as s,q as b,ao as ge,av as he}from"./DiagramConnector-DY1AhLDR.js";import"./index-Brl4xq4Y.js";const a={minHeight:420,width:"20rem"},ve={title:"Components/SearchFilter",component:s,argTypes:{filters:{control:!1},properties:{control:!1},status:{control:"select",options:["default","error","success"]},size:{control:"select",options:["sm","md","lg"]},label:{control:"text"},placeholder:{control:"text"},helpText:{control:"text"},disabled:{control:"boolean"}},args:{label:"Invoices",placeholder:"Search or filter",status:"default",size:"lg"}},fe=[{key:"status",label:"status",values:[{value:"overdue",label:"Overdue"},{value:"paid",label:"Paid"},{value:"draft",label:"Draft"}]},{key:"customer",label:"customer",values:[{value:"acme",label:"Acme Co."},{value:"globex",label:"Globex Corp."}]},{key:"amount",label:"amount",values:[{value:">40",label:"> $40"},{value:"<40",label:"< $40"}]}];function t(){return e.jsxs(e.Fragment,{children:[e.jsx(b,{label:"Only overdue",size:"md"}),e.jsx(b,{label:"Only paid",size:"md"}),e.jsx(ge,{label:"Minimum amount",defaultValue:40,size:"md"}),e.jsx(he,{label:"Customer",placeholder:"e.g. Acme Co.",size:"md"})]})}const n={name:"No filters (plain search)",render:r=>e.jsx("div",{style:a,children:e.jsx(s,{...r})})},i={render:r=>e.jsx("div",{style:a,children:e.jsx(s,{...r,filters:e.jsx(t,{})})})},o={name:"Typing suggestions",render:r=>e.jsx("div",{style:a,children:e.jsx(s,{...r,properties:fe})})},d={name:"Suggestions + filter panel together",render:r=>e.jsx("div",{style:a,children:e.jsx(s,{...r,properties:fe,filters:e.jsx(t,{})})})},c={name:"Filters open by default",render:r=>e.jsx("div",{style:a,children:e.jsx(s,{...r,filters:e.jsx(t,{}),defaultFiltersOpen:!0})})},u={name:"Applied count + Clear",render:r=>e.jsx("div",{style:a,children:e.jsx(s,{...r,defaultValue:"status:overdue amount:>40",filters:e.jsx(t,{}),filterCount:2,defaultFiltersOpen:!0,onClearFilters:()=>alert("Clear filters")})})},m={name:"With filter notation applied",render:r=>e.jsx("div",{style:a,children:e.jsx(s,{...r,defaultValue:"status:overdue amount:>40",filters:e.jsx(t,{})})})},p={args:{status:"error",helpText:"That filter combination returned no results."},render:r=>e.jsx("div",{style:a,children:e.jsx(s,{...r,filters:e.jsx(t,{})})})},g={args:{status:"success",helpText:"3 invoices match."},render:r=>e.jsx("div",{style:a,children:e.jsx(s,{...r,defaultValue:"status:overdue",filters:e.jsx(t,{})})})},f={args:{disabled:!0},render:r=>e.jsx("div",{style:a,children:e.jsx(s,{...r,defaultValue:"status:overdue",filters:e.jsx(t,{})})})},S={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6)",...a},children:[e.jsx(s,{...r,size:"sm",label:"Small",filters:e.jsx(t,{})}),e.jsx(s,{...r,size:"md",label:"Medium",filters:e.jsx(t,{})}),e.jsx(s,{...r,size:"lg",label:"Large",filters:e.jsx(t,{})})]})};function xe(){const[r,P]=y.useState(""),[v,C]=y.useState(!1),[x,V]=y.useState(!1),[E,W]=y.useState(0);function T(l,j,R){const F=[];l&&F.push("status:overdue"),j&&F.push("status:paid"),R>0&&F.push(`amount:>${R}`),P(F.join(" "))}function Se(){C(!1),V(!1),W(0),P("")}const _=[v,x,E>0].filter(Boolean).length;return e.jsx("div",{style:a,children:e.jsx(s,{label:"Invoices",value:r,onChange:P,filterCount:_,onClearFilters:_>0?Se:void 0,filters:e.jsxs(e.Fragment,{children:[e.jsx(b,{label:"Only overdue",size:"md",checked:v,onChange:l=>{C(l.target.checked),T(l.target.checked,x,E)}}),e.jsx(b,{label:"Only paid",size:"md",checked:x,onChange:l=>{V(l.target.checked),T(v,l.target.checked,E)}}),e.jsx(ge,{label:"Minimum amount",size:"md",value:E,onValueChange:l=>{const j=l;W(j),T(v,x,j)}})]})})})}const h={name:"Building filter notation live",render:()=>e.jsx(xe,{})};var z,I,O;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "No filters (plain search)",
  render: args => <div style={PREVIEW_STYLE}>
      <SearchFilter {...args} />
    </div>
}`,...(O=(I=n.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var L,k,A;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <div style={PREVIEW_STYLE}>
      <SearchFilter {...args} filters={<SampleFilters />} />
    </div>
}`,...(A=(k=i.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var D,Y,M;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Typing suggestions",
  render: args => <div style={PREVIEW_STYLE}>
      <SearchFilter {...args} properties={SAMPLE_PROPERTIES} />
    </div>
}`,...(M=(Y=o.parameters)==null?void 0:Y.docs)==null?void 0:M.source}}};var B,$,q;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Suggestions + filter panel together",
  render: args => <div style={PREVIEW_STYLE}>
      <SearchFilter {...args} properties={SAMPLE_PROPERTIES} filters={<SampleFilters />} />
    </div>
}`,...(q=($=d.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var N,w,G;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Filters open by default",
  render: args => <div style={PREVIEW_STYLE}>
      <SearchFilter {...args} filters={<SampleFilters />} defaultFiltersOpen />
    </div>
}`,...(G=(w=c.parameters)==null?void 0:w.docs)==null?void 0:G.source}}};var H,Q,J;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "Applied count + Clear",
  render: args => <div style={PREVIEW_STYLE}>
      <SearchFilter {...args} defaultValue="status:overdue amount:>40" filters={<SampleFilters />} filterCount={2} defaultFiltersOpen onClearFilters={() => alert("Clear filters")} />
    </div>
}`,...(J=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:J.source}}};var K,U,X;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "With filter notation applied",
  render: args => <div style={PREVIEW_STYLE}>
      <SearchFilter {...args} defaultValue="status:overdue amount:>40" filters={<SampleFilters />} />
    </div>
}`,...(X=(U=m.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Z,ee,re;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    status: "error",
    helpText: "That filter combination returned no results."
  },
  render: args => <div style={PREVIEW_STYLE}>
      <SearchFilter {...args} filters={<SampleFilters />} />
    </div>
}`,...(re=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var se,ae,te;g.parameters={...g.parameters,docs:{...(se=g.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    status: "success",
    helpText: "3 invoices match."
  },
  render: args => <div style={PREVIEW_STYLE}>
      <SearchFilter {...args} defaultValue="status:overdue" filters={<SampleFilters />} />
    </div>
}`,...(te=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var le,ne,ie;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <div style={PREVIEW_STYLE}>
      <SearchFilter {...args} defaultValue="status:overdue" filters={<SampleFilters />} />
    </div>
}`,...(ie=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var oe,de,ce;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-6)",
    ...PREVIEW_STYLE
  }}>
      <SearchFilter {...args} size="sm" label="Small" filters={<SampleFilters />} />
      <SearchFilter {...args} size="md" label="Medium" filters={<SampleFilters />} />
      <SearchFilter {...args} size="lg" label="Large" filters={<SampleFilters />} />
    </div>
}`,...(ce=(de=S.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ue,me,pe;h.parameters={...h.parameters,docs:{...(ue=h.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: "Building filter notation live",
  render: () => <WorkedExampleDemo />
}`,...(pe=(me=h.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};const Ee=["PlainSearch","Default","Suggestions","SuggestionsAndFilters","FiltersOpenByDefault","WithBadgeAndClear","Filled","Error","Success","Disabled","Sizes","WorkedExample"],Pe=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Disabled:f,Error:p,Filled:m,FiltersOpenByDefault:c,PlainSearch:n,Sizes:S,Success:g,Suggestions:o,SuggestionsAndFilters:d,WithBadgeAndClear:u,WorkedExample:h,__namedExportsOrder:Ee,default:ve},Symbol.toStringTag,{value:"Module"}));export{i as D,p as E,m as F,n as P,Pe as S,u as W,f as a,c as b,S as c,g as d,o as e,d as f,h as g};
