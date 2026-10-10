import{j as e}from"./jsx-runtime-BYYWji4R.js";import{T as o}from"./DiagramConnector-DY1AhLDR.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";const v={position:"relative",width:"20rem",height:"8rem",background:"var(--background-default)",borderRadius:"0.5rem",overflow:"hidden"},m={position:"absolute",right:-8,bottom:-8},g={title:"Components/GrainCorner",component:o,argTypes:{color:{control:"color"}},args:{color:"var(--background-positive-base)"}},r={render:n=>e.jsx("div",{"data-theme":"dark",style:v,children:e.jsx("div",{style:m,children:e.jsx(o,{...n})})})},a={name:"The 4 accent-color tokens",render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--space-4)"},children:[["var(--background-brand-base)","Brand"],["var(--background-positive-base)","Green"],["var(--background-alt-negative-base)","Magenta"],["var(--background-notice-base)","Yellow"]].map(([n,s])=>e.jsxs("div",{"data-theme":"dark",style:v,children:[e.jsx("div",{style:m,children:e.jsx(o,{color:n})}),e.jsx("span",{style:{position:"relative",color:"#fff",font:"var(--type-paragraph-s-regular)",padding:"var(--space-4)"},children:s})]},s))})};var t,d,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => <div data-theme="dark" style={PREVIEW_STYLE}>
      <div style={ANCHOR_STYLE}>
        <GrainCorner {...args} />
      </div>
    </div>
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var l,c,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "The 4 accent-color tokens",
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "var(--space-4)"
  }}>
      {([["var(--background-brand-base)", "Brand"], ["var(--background-positive-base)", "Green"], ["var(--background-alt-negative-base)", "Magenta"], ["var(--background-notice-base)", "Yellow"]] as const).map(([color, name]) => <div key={name} data-theme="dark" style={PREVIEW_STYLE}>
          <div style={ANCHOR_STYLE}>
            <GrainCorner color={color} />
          </div>
          <span style={{
        position: "relative",
        color: "#fff",
        font: "var(--type-paragraph-s-regular)",
        padding: "var(--space-4)"
      }}>{name}</span>
        </div>)}
    </div>
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const u=["Default","AllAccentColors"],k=Object.freeze(Object.defineProperty({__proto__:null,AllAccentColors:a,Default:r,__namedExportsOrder:u,default:g},Symbol.toStringTag,{value:"Module"}));export{a as A,r as D,k as G};
