import{j as t}from"./jsx-runtime-BYYWji4R.js";import{J as c,k as w,j as a}from"./DiagramConnector-DY1AhLDR.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";import E from"./inbox-CZnJlf16.js";import _ from"./search-x-BgAXhC1f.js";import G from"./sparkles-BGkPd9R1.js";const O={title:"Components/EmptyState",component:c,argTypes:{title:{control:"text"},description:{control:"text"}},args:{icon:t.jsx(G,{size:24}),title:"Title",description:"Description description description description description"},render:b=>t.jsx("div",{style:{width:"20rem"},children:t.jsx(c,{...b})})},e={args:{actions:t.jsxs(w,{orientation:"vertical",children:[t.jsx(a,{size:"sm",variant:"secondary",children:"Button"}),t.jsx(a,{size:"sm",variant:"primary",children:"Button"})]})}},o={args:{actions:void 0}},r={args:{icon:void 0}},s={args:{description:void 0,actions:void 0}},n={args:{icon:t.jsx(_,{size:24}),title:"No results found",description:"Try adjusting your search or filters to find what you're looking for.",actions:void 0}},i={args:{icon:t.jsx(E,{size:24}),title:"No items yet",description:"Items you add will show up here.",actions:t.jsx(w,{orientation:"vertical",children:t.jsx(a,{size:"sm",variant:"primary",children:"Add item"})})}};var d,u,p;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    actions: <ButtonGroup orientation="vertical">
        <Button size="sm" variant="secondary">
          Button
        </Button>
        <Button size="sm" variant="primary">
          Button
        </Button>
      </ButtonGroup>
  }
}`,...(p=(u=e.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,l,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    actions: undefined
  }
}`,...(g=(l=o.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var y,f,h;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    icon: undefined
  }
}`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,j,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    description: undefined,
    actions: undefined
  }
}`,...(v=(j=s.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var B,S,z;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    icon: <SearchX size={24} />,
    title: "No results found",
    description: "Try adjusting your search or filters to find what you're looking for.",
    actions: undefined
  }
}`,...(z=(S=n.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var N,I,T;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    icon: <Inbox size={24} />,
    title: "No items yet",
    description: "Items you add will show up here.",
    actions: <ButtonGroup orientation="vertical">
        <Button size="sm" variant="primary">
          Add item
        </Button>
      </ButtonGroup>
  }
}`,...(T=(I=i.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};const W=["Default","WithoutActions","WithoutIcon","TitleOnly","NoResults","NoItemsYet"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:e,NoItemsYet:i,NoResults:n,TitleOnly:s,WithoutActions:o,WithoutIcon:r,__namedExportsOrder:W,default:O},Symbol.toStringTag,{value:"Module"}));export{e as D,J as E,i as N,s as T,o as W,n as a,r as b};
