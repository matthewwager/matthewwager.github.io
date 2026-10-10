import{j as S}from"./jsx-runtime-BYYWji4R.js";import{h as C}from"./DiagramConnector-DY1AhLDR.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";const L=[{label:"Root",href:"#"},{label:"Trunk",href:"#"},{label:"Branch",href:"#"},{label:"Leaf"}],B={title:"Components/Breadcrumb",component:C,parameters:{layout:"padded"},argTypes:{items:{control:!1},separator:{control:"select",options:["chevron","slash"]}},args:{items:L,separator:"chevron"}},e={},a={name:'separator="slash"',args:{separator:"slash"}},r={name:"Two levels",args:{items:[{label:"Employees",href:"#"},{label:"Ada Lovelace"}]}},o={name:"A crumb with no href/onClick",args:{items:[{label:"Root",href:"#"},{label:"Archived (2019)"},{label:"Branch",href:"#"},{label:"Leaf"}]}},s={name:"onClick instead of href",render:T=>S.jsx(C,{...T,items:[{label:"Root",onClick:()=>alert("Navigate to Root")},{label:"Trunk",onClick:()=>alert("Navigate to Trunk")},{label:"Leaf"}]})};var n,t,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(l=(t=e.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};var c,m,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'separator="slash"',
  args: {
    separator: "slash"
  }
}`,...(i=(m=a.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var p,d,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Two levels",
  args: {
    items: [{
      label: "Employees",
      href: "#"
    }, {
      label: "Ada Lovelace"
    }]
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var b,h,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "A crumb with no href/onClick",
  args: {
    items: [{
      label: "Root",
      href: "#"
    }, {
      label: "Archived (2019)"
    }, {
      label: "Branch",
      href: "#"
    }, {
      label: "Leaf"
    }]
  }
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var g,v,k;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "onClick instead of href",
  render: args => <Breadcrumb {...args} items={[{
    label: "Root",
    onClick: () => alert("Navigate to Root")
  }, {
    label: "Trunk",
    onClick: () => alert("Navigate to Trunk")
  }, {
    label: "Leaf"
  }]} />
}`,...(k=(v=s.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};const R=["Default","Slash","TwoLevels","NonInteractiveCrumb","OnClickHandlers"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:e,NonInteractiveCrumb:o,OnClickHandlers:s,Slash:a,TwoLevels:r,__namedExportsOrder:R,default:B},Symbol.toStringTag,{value:"Module"}));export{O as B,e as D,o as N,s as O,a as S,r as T};
