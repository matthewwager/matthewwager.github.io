import{j as e}from"./jsx-runtime-BYYWji4R.js";import{A as t,a as n,ac as Y,k as D,W as q}from"./DiagramCell-BoDqalDD.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";import N from"./ellipsis-vertical-Bt6GK3lC.js";const O={title:"Components/Accordion",component:t,parameters:{layout:"padded"}},m={width:"36rem",maxWidth:"100%"},o={render:()=>e.jsx("div",{style:m,children:e.jsxs(t,{children:[e.jsx(n,{title:"What's included in the free plan?",defaultExpanded:!0,children:"Every workspace gets unlimited members, up to 3 projects, and 5GB of storage — no credit card required."}),e.jsx(n,{title:"Can I change plans later?",children:"Yes — upgrade or downgrade at any time from Settings → Billing. Changes take effect on your next billing cycle."}),e.jsx(n,{title:"Do you offer refunds?",children:"We offer a full refund within 14 days of any paid plan purchase, no questions asked."})]})})},s={name:"All collapsed",render:()=>e.jsx("div",{style:m,children:e.jsx(t,{children:Array.from({length:4},(a,r)=>e.jsxs(n,{title:`Section ${r+1}`,children:["Panel content for section ",r+1,"."]},r))})})},i={name:"Expand or collapse all",render:()=>e.jsx("div",{style:m,children:e.jsx(t,{variant:"separated",children:["Cash & Bank","Payables & Accruals","Revenue & Receivables","Payroll & Benefits"].map(a=>e.jsxs(n,{title:a,subtitle:"Shift-click to open or close them all",children:["The ",a.toLowerCase()," close tasks."]},a))})})},d={name:"exclusive (only one open at a time)",render:()=>e.jsx("div",{style:m,children:e.jsxs(t,{exclusive:!0,children:[e.jsx(n,{title:"What's included in the free plan?",defaultExpanded:!0,children:"Every workspace gets unlimited members, up to 3 projects, and 5GB of storage — no credit card required."}),e.jsx(n,{title:"Can I change plans later?",children:"Yes — upgrade or downgrade at any time from Settings → Billing. Changes take effect on your next billing cycle."}),e.jsx(n,{title:"Do you offer refunds?",children:"We offer a full refund within 14 days of any paid plan purchase, no questions asked."})]})})},P=[{name:"JP Morgan Chase Acct ****1234",detail:"1110.116 Cash – Chase Operating · 2 of 11 bank lines unmatched",matched:82},{name:"Ramp Corporate Card ****3321",detail:"2150 Corporate Card Clearing · 6 of 8 bank lines unmatched",matched:25},{name:"Silicon Valley Bank ****4410",detail:"1110.120 Cash – SVB Operating · 2 of 5 bank lines unmatched",matched:60}];function L({name:a,matched:r}){return e.jsxs(e.Fragment,{children:[e.jsx(Y,{value:r,inline:!0,"aria-label":`${a} matched`}),e.jsx(D,{variant:"secondary",size:"sm",children:"Submit"}),e.jsx(q,{variant:"ghost",size:"sm",icon:e.jsx(N,{size:16}),"aria-label":`More for ${a}`})]})}const R={padding:"var(--space-4)",font:"var(--type-paragraph-s-regular)",color:"var(--content-base)"},c={name:"Separated, with subtitle and trailing",render:()=>e.jsx("div",{style:{width:"48rem",maxWidth:"100%"},children:e.jsx(t,{variant:"separated",exclusive:!0,children:P.map((a,r)=>e.jsx(n,{defaultExpanded:r===0,title:a.name,subtitle:a.detail,trailing:e.jsx(L,{name:a.name,matched:a.matched}),children:e.jsxs("div",{style:R,children:["Bank transactions and NetSuite entries for ",a.name,"."]})},a.name))})})},l={name:"Fill (open item takes the full height)",parameters:{noThemeSplit:!0},render:()=>e.jsx("div",{style:{height:"24rem",width:"48rem",maxWidth:"100%"},children:e.jsx(t,{variant:"separated",fill:!0,children:P.map((a,r)=>e.jsx(n,{defaultExpanded:r===0,footer:"Select a transaction and a corresponding journal entry to match them.",title:a.name,subtitle:a.detail,trailing:e.jsx(L,{name:a.name,matched:a.matched}),children:e.jsx("div",{style:{...R,display:"flex",flexDirection:"column",gap:"var(--space-2)"},children:Array.from({length:12},(F,p)=>e.jsxs("div",{style:{padding:"var(--space-2)",borderRadius:"var(--radius-md)",background:"var(--background-default)"},children:["Bank line ",p+1]},p))})},a.name))})})};var u,h,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var g,y,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(x=(y=s.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var v,A,E,S,j;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Expand or collapse all",
  render: () => <div style={PREVIEW_STYLE}>
      <Accordion variant="separated">
        {["Cash & Bank", "Payables & Accruals", "Revenue & Receivables", "Payroll & Benefits"].map(name => <AccordionItem key={name} title={name} subtitle="Shift-click to open or close them all">
            The {name.toLowerCase()} close tasks.
          </AccordionItem>)}
      </Accordion>
    </div>
}`,...(E=(A=i.parameters)==null?void 0:A.docs)==null?void 0:E.source},description:{story:"Shift-click any head (or Shift+Enter on it) to open or close every item.",...(j=(S=i.parameters)==null?void 0:S.docs)==null?void 0:j.description}}};var k,b,I;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(I=(b=d.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var C,w,B;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Separated, with subtitle and trailing",
  render: () => <div style={{
    width: "48rem",
    maxWidth: "100%"
  }}>
      <Accordion variant="separated" exclusive>
        {ACCOUNTS.map((account, index) => <AccordionItem key={account.name} defaultExpanded={index === 0} title={account.name} subtitle={account.detail} trailing={<AccountTrailing name={account.name} matched={account.matched} />}>
            <div style={PANEL_STYLE}>Bank transactions and NetSuite entries for {account.name}.</div>
          </AccordionItem>)}
      </Accordion>
    </div>
}`,...(B=(w=c.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var T,W,_;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Fill (open item takes the full height)",
  parameters: {
    noThemeSplit: true
  },
  render: () => <div style={{
    height: "24rem",
    width: "48rem",
    maxWidth: "100%"
  }}>
      <Accordion variant="separated" fill>
        {ACCOUNTS.map((account, index) => <AccordionItem key={account.name} defaultExpanded={index === 0} footer="Select a transaction and a corresponding journal entry to match them." title={account.name} subtitle={account.detail} trailing={<AccountTrailing name={account.name} matched={account.matched} />}>
            <div style={{
          ...PANEL_STYLE,
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-2)"
        }}>
              {Array.from({
            length: 12
          }, (_, line) => <div key={line} style={{
            padding: "var(--space-2)",
            borderRadius: "var(--radius-md)",
            background: "var(--background-default)"
          }}>
                  Bank line {line + 1}
                </div>)}
            </div>
          </AccordionItem>)}
      </Accordion>
    </div>
}`,...(_=(W=l.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};const V=["Default","AllCollapsed","ExpandAll","Exclusive","Separated","Fill"],J=Object.freeze(Object.defineProperty({__proto__:null,AllCollapsed:s,Default:o,Exclusive:d,ExpandAll:i,Fill:l,Separated:c,__namedExportsOrder:V,default:O},Symbol.toStringTag,{value:"Module"}));export{J as A,o as D,d as E,l as F,c as S,s as a,i as b};
