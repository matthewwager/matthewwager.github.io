import{j as e}from"./jsx-runtime-BYYWji4R.js";import{aa as z,j as d,k as $}from"./DiagramConnector-DY1AhLDR.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";import G from"./info-M8l_MGNq.js";const B={minHeight:200,display:"flex",alignItems:"center",justifyContent:"center"};function D({title:t,content:n,showClose:R,withActions:L,placement:V,trigger:u,defaultOpen:Y}){return e.jsx("div",{style:B,children:e.jsx(z,{title:t||void 0,content:n,showClose:R,actions:L?e.jsxs($,{children:[e.jsx(d,{variant:"secondary",size:"sm",children:"Cancel"}),e.jsx(d,{variant:"primary",size:"sm",children:"Confirm"})]}):void 0,placement:V,trigger:u,defaultOpen:Y,children:e.jsx(d,{variant:"secondary",children:u==="hover"?"Hover me":"Click me"})})})}const q={title:"Components/Popover",component:D,parameters:{layout:"padded"},argTypes:{title:{control:"text"},content:{control:"text"},showClose:{control:"boolean"},withActions:{control:"boolean"},placement:{control:"select",options:["top","bottom","left","right"]},trigger:{control:"select",options:["click","hover"]},defaultOpen:{control:"boolean"}},args:{title:"Title",content:"Body text",showClose:!0,withActions:!1,placement:"top",trigger:"click",defaultOpen:!1}},r={},o={name:"No title",args:{title:"",defaultOpen:!0}},s={name:"No title, no close button",args:{title:"",showClose:!1,defaultOpen:!0}},a={name:"With footer actions",args:{withActions:!0,defaultOpen:!0}},i={name:"Close button hidden",args:{showClose:!1,withActions:!0,defaultOpen:!0}},c={render:t=>e.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--space-8)",minHeight:480},children:["top","bottom","left","right"].map(n=>e.jsx(D,{...t,placement:n,content:`placement="${n}"`,defaultOpen:!0},n))}),args:{defaultOpen:!0}},l={name:'trigger="hover"',args:{trigger:"hover",content:"Moving the pointer away closes this one."}},p={name:"Icon-only trigger",render:t=>e.jsx("div",{style:B,children:e.jsx(z,{title:t.title||void 0,content:t.content,placement:t.placement,trigger:t.trigger,defaultOpen:t.defaultOpen,children:e.jsx("button",{type:"button","aria-label":"More info",style:{background:"none",border:"none",cursor:"pointer",color:"var(--content-subtle)",display:"flex"},children:e.jsx(G,{size:16})})})}),args:{content:"This metric excludes weekends."}};var m,g,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,v,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "No title",
  args: {
    title: "",
    defaultOpen: true
  }
}`,...(y=(v=o.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var x,b,O;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "No title, no close button",
  args: {
    title: "",
    showClose: false,
    defaultOpen: true
  }
}`,...(O=(b=s.parameters)==null?void 0:b.docs)==null?void 0:O.source}}};var j,w,C;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "With footer actions",
  args: {
    withActions: true,
    defaultOpen: true
  }
}`,...(C=(w=a.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var P,S,T;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Close button hidden",
  args: {
    showClose: false,
    withActions: true,
    defaultOpen: true
  }
}`,...(T=(S=i.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var I,k,N;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "var(--space-8)",
    minHeight: 480
  }}>
      {(["top", "bottom", "left", "right"] as const).map(placement => <PopoverPlayground key={placement} {...args} placement={placement} content={\`placement="\${placement}"\`} defaultOpen />)}
    </div>,
  args: {
    defaultOpen: true
  }
}`,...(N=(k=c.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var A,E,M;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'trigger="hover"',
  args: {
    trigger: "hover",
    content: "Moving the pointer away closes this one."
  }
}`,...(M=(E=l.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var _,H,W;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Icon-only trigger",
  render: args => <div style={PREVIEW_STYLE}>
      <Popover title={args.title || undefined} content={args.content} placement={args.placement} trigger={args.trigger} defaultOpen={args.defaultOpen}>
        <button type="button" aria-label="More info" style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        color: "var(--content-subtle)",
        display: "flex"
      }}>
          <Info size={16} />
        </button>
      </Popover>
    </div>,
  args: {
    content: "This metric excludes weekends."
  }
}`,...(W=(H=p.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};const F=["Default","NoTitle","Minimal","WithActions","NoCloseButton","Placements","HoverTrigger","IconTrigger"],Z=Object.freeze(Object.defineProperty({__proto__:null,Default:r,HoverTrigger:l,IconTrigger:p,Minimal:s,NoCloseButton:i,NoTitle:o,Placements:c,WithActions:a,__namedExportsOrder:F,default:q},Symbol.toStringTag,{value:"Module"}));export{r as D,l as H,p as I,s as M,i as N,c as P,a as W,o as a,Z as b};
