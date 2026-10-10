import{j as e}from"./jsx-runtime-BYYWji4R.js";import{A as a,a as r}from"./DiagramConnector-DY1AhLDR.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";const h={title:"Components/Accordion",component:a,parameters:{layout:"padded"}},d={width:"36rem",maxWidth:"100%"},n={render:()=>e.jsx("div",{style:d,children:e.jsxs(a,{children:[e.jsx(r,{title:"What's included in the free plan?",defaultExpanded:!0,children:"Every workspace gets unlimited members, up to 3 projects, and 5GB of storage — no credit card required."}),e.jsx(r,{title:"Can I change plans later?",children:"Yes — upgrade or downgrade at any time from Settings → Billing. Changes take effect on your next billing cycle."}),e.jsx(r,{title:"Do you offer refunds?",children:"We offer a full refund within 14 days of any paid plan purchase, no questions asked."})]})})},o={name:"All collapsed",render:()=>e.jsx("div",{style:d,children:e.jsx(a,{children:Array.from({length:4},(A,i)=>e.jsxs(r,{title:`Section ${i+1}`,children:["Panel content for section ",i+1,"."]},i))})})},t={name:"exclusive (only one open at a time)",render:()=>e.jsx("div",{style:d,children:e.jsxs(a,{exclusive:!0,children:[e.jsx(r,{title:"What's included in the free plan?",defaultExpanded:!0,children:"Every workspace gets unlimited members, up to 3 projects, and 5GB of storage — no credit card required."}),e.jsx(r,{title:"Can I change plans later?",children:"Yes — upgrade or downgrade at any time from Settings → Billing. Changes take effect on your next billing cycle."}),e.jsx(r,{title:"Do you offer refunds?",children:"We offer a full refund within 14 days of any paid plan purchase, no questions asked."})]})})};var s,c,l;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <div style={PREVIEW_STYLE}>
      <Accordion>
        <AccordionItem title="What's included in the free plan?" defaultExpanded>
          Every workspace gets unlimited members, up to 3 projects, and 5GB of storage — no credit card required.
        </AccordionItem>
        <AccordionItem title="Can I change plans later?">
          Yes — upgrade or downgrade at any time from Settings → Billing. Changes take effect on your next billing cycle.
        </AccordionItem>
        <AccordionItem title="Do you offer refunds?">
          We offer a full refund within 14 days of any paid plan purchase, no questions asked.
        </AccordionItem>
      </Accordion>
    </div>
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,p,m;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "All collapsed",
  render: () => <div style={PREVIEW_STYLE}>
      <Accordion>
        {Array.from({
        length: 4
      }, (_, i) => <AccordionItem key={i} title={\`Section \${i + 1}\`}>
            Panel content for section {i + 1}.
          </AccordionItem>)}
      </Accordion>
    </div>
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var f,g,y;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "exclusive (only one open at a time)",
  render: () => <div style={PREVIEW_STYLE}>
      <Accordion exclusive>
        <AccordionItem title="What's included in the free plan?" defaultExpanded>
          Every workspace gets unlimited members, up to 3 projects, and 5GB of storage — no credit card required.
        </AccordionItem>
        <AccordionItem title="Can I change plans later?">
          Yes — upgrade or downgrade at any time from Settings → Billing. Changes take effect on your next billing cycle.
        </AccordionItem>
        <AccordionItem title="Do you offer refunds?">
          We offer a full refund within 14 days of any paid plan purchase, no questions asked.
        </AccordionItem>
      </Accordion>
    </div>
}`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const x=["Default","AllCollapsed","Exclusive"],S=Object.freeze(Object.defineProperty({__proto__:null,AllCollapsed:o,Default:n,Exclusive:t,__namedExportsOrder:x,default:h},Symbol.toStringTag,{value:"Module"}));export{S as A,n as D,t as E,o as a};
