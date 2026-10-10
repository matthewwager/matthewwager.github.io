import{j as t}from"./jsx-runtime-BYYWji4R.js";import{ay as k,j as _}from"./DiagramConnector-DY1AhLDR.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";import D from"./info-M8l_MGNq.js";const I={minHeight:120,display:"flex",alignItems:"center",justifyContent:"center"};function S({title:e,content:n,placement:E,trigger:C,open:P}){return t.jsx("div",{style:I,children:t.jsx(k,{title:e||void 0,content:n,placement:E,trigger:C,open:P||void 0,children:t.jsx(_,{variant:"secondary",children:"Hover me"})})})}const W={title:"Components/Tooltip",component:S,parameters:{layout:"padded"},argTypes:{title:{control:"text"},content:{control:"text"},placement:{control:"select",options:["top","bottom","left","right"]},trigger:{control:"select",options:["hover","click"]},open:{control:"boolean"}},args:{title:"",content:"Saved 2 minutes ago",placement:"top",trigger:"hover",open:!1}},o={},r={args:{title:"Autosave",content:"Changes are saved automatically as you type.",open:!0}},a={render:e=>t.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--space-8)",minHeight:320},children:["top","bottom","left","right"].map(n=>t.jsx(S,{...e,placement:n,content:`placement="${n}"`,open:!0},n))})},s={name:'trigger="click"',args:{trigger:"click",content:"Click again (or press Escape) to close."}},c={name:"Icon-only trigger",render:e=>t.jsx("div",{style:I,children:t.jsx(k,{title:e.title||void 0,content:e.content,placement:e.placement,trigger:e.trigger,open:e.open||void 0,children:t.jsx("button",{type:"button","aria-label":"More info",style:{background:"none",border:"none",cursor:"pointer",color:"var(--content-subtle)",display:"flex"},children:t.jsx(D,{size:16})})})}),args:{content:"This metric excludes weekends."}};var i,l,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var g,m,d;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: "Autosave",
    content: "Changes are saved automatically as you type.",
    open: true
  }
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,y,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "var(--space-8)",
    minHeight: 320
  }}>
      {(["top", "bottom", "left", "right"] as const).map(placement => <TooltipPlayground key={placement} {...args} placement={placement} content={\`placement="\${placement}"\`} open />)}
    </div>
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,x,h;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'trigger="click"',
  args: {
    trigger: "click",
    content: "Click again (or press Escape) to close."
  }
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var b,T,j;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Icon-only trigger",
  render: args => <div style={PREVIEW_STYLE}>
      <Tooltip title={args.title || undefined} content={args.content} placement={args.placement} trigger={args.trigger} open={args.open || undefined}>
        <button type="button" aria-label="More info" style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        color: "var(--content-subtle)",
        display: "flex"
      }}>
          <Info size={16} />
        </button>
      </Tooltip>
    </div>,
  args: {
    content: "This metric excludes weekends."
  }
}`,...(j=(T=c.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};const H=["Default","WithTitle","Placements","ClickTrigger","IconTrigger"],A=Object.freeze(Object.defineProperty({__proto__:null,ClickTrigger:s,Default:o,IconTrigger:c,Placements:a,WithTitle:r,__namedExportsOrder:H,default:W},Symbol.toStringTag,{value:"Module"}));export{s as C,o as D,c as I,a as P,A as T,r as W};
