import{j as e}from"./jsx-runtime-BYYWji4R.js";import{A as r,a as t,ac as B,k as _,W as T}from"./DiagramCell-D0CGHh4Q.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";import P from"./ellipsis-vertical-Bt6GK3lC.js";const Y={title:"Components/Accordion",component:r,parameters:{layout:"padded"}},l={width:"36rem",maxWidth:"100%"},i={render:()=>e.jsx("div",{style:l,children:e.jsxs(r,{children:[e.jsx(t,{title:"What's included in the free plan?",defaultExpanded:!0,children:"Every workspace gets unlimited members, up to 3 projects, and 5GB of storage — no credit card required."}),e.jsx(t,{title:"Can I change plans later?",children:"Yes — upgrade or downgrade at any time from Settings → Billing. Changes take effect on your next billing cycle."}),e.jsx(t,{title:"Do you offer refunds?",children:"We offer a full refund within 14 days of any paid plan purchase, no questions asked."})]})})},o={name:"All collapsed",render:()=>e.jsx("div",{style:l,children:e.jsx(r,{children:Array.from({length:4},(n,a)=>e.jsxs(t,{title:`Section ${a+1}`,children:["Panel content for section ",a+1,"."]},a))})})},d={name:"exclusive (only one open at a time)",render:()=>e.jsx("div",{style:l,children:e.jsxs(r,{exclusive:!0,children:[e.jsx(t,{title:"What's included in the free plan?",defaultExpanded:!0,children:"Every workspace gets unlimited members, up to 3 projects, and 5GB of storage — no credit card required."}),e.jsx(t,{title:"Can I change plans later?",children:"Yes — upgrade or downgrade at any time from Settings → Billing. Changes take effect on your next billing cycle."}),e.jsx(t,{title:"Do you offer refunds?",children:"We offer a full refund within 14 days of any paid plan purchase, no questions asked."})]})})},C=[{name:"JP Morgan Chase Acct ****1234",detail:"1110.116 Cash – Chase Operating · 2 of 11 bank lines unmatched",matched:82},{name:"Ramp Corporate Card ****3321",detail:"2150 Corporate Card Clearing · 6 of 8 bank lines unmatched",matched:25},{name:"Silicon Valley Bank ****4410",detail:"1110.120 Cash – SVB Operating · 2 of 5 bank lines unmatched",matched:60}];function w({name:n,matched:a}){return e.jsxs(e.Fragment,{children:[e.jsx(B,{value:a,inline:!0,"aria-label":`${n} matched`}),e.jsx(_,{variant:"secondary",size:"sm",children:"Submit"}),e.jsx(T,{variant:"ghost",size:"sm",icon:e.jsx(P,{size:16}),"aria-label":`More for ${n}`})]})}const W={padding:"var(--space-4)",font:"var(--type-paragraph-s-regular)",color:"var(--content-base)"},s={name:"Separated, with subtitle and trailing",render:()=>e.jsx("div",{style:{width:"48rem",maxWidth:"100%"},children:e.jsx(r,{variant:"separated",exclusive:!0,children:C.map((n,a)=>e.jsx(t,{defaultExpanded:a===0,title:n.name,subtitle:n.detail,trailing:e.jsx(w,{name:n.name,matched:n.matched}),children:e.jsxs("div",{style:W,children:["Bank transactions and NetSuite entries for ",n.name,"."]})},n.name))})})},c={name:"Fill (open item takes the full height)",parameters:{noThemeSplit:!0},render:()=>e.jsx("div",{style:{height:"24rem",width:"48rem",maxWidth:"100%"},children:e.jsx(r,{variant:"separated",fill:!0,children:C.map((n,a)=>e.jsx(t,{defaultExpanded:a===0,footer:"Select a transaction and a corresponding journal entry to match them.",title:n.name,subtitle:n.detail,trailing:e.jsx(w,{name:n.name,matched:n.matched}),children:e.jsx("div",{style:{...W,display:"flex",flexDirection:"column",gap:"var(--space-2)"},children:Array.from({length:12},(D,m)=>e.jsxs("div",{style:{padding:"var(--space-2)",borderRadius:"var(--radius-md)",background:"var(--background-default)"},children:["Bank line ",m+1]},m))})},n.name))})})};var u,p,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(p=i.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var f,g,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var y,v,A;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(A=(v=d.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var j,S,E;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(E=(S=s.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var k,b,I;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(I=(b=c.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};const L=["Default","AllCollapsed","Exclusive","Separated","Fill"],F=Object.freeze(Object.defineProperty({__proto__:null,AllCollapsed:o,Default:i,Exclusive:d,Fill:c,Separated:s,__namedExportsOrder:L,default:Y},Symbol.toStringTag,{value:"Module"}));export{F as A,i as D,d as E,c as F,s as S,o as a};
