import{j as e}from"./jsx-runtime-BYYWji4R.js";import{A as r,a,u as f,r as i,ae as z,k as G,Y as H}from"./DiagramCell-BVBcLmyd.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";import $ from"./ellipsis-vertical-Bt6GK3lC.js";const U={title:"Components/Accordion",component:r,parameters:{layout:"padded"}},u={width:"36rem",maxWidth:"100%"},s={render:()=>e.jsx("div",{style:u,children:e.jsxs(r,{children:[e.jsx(a,{title:"What's included in the free plan?",defaultExpanded:!0,children:"Every workspace gets unlimited members, up to 3 projects, and 5GB of storage — no credit card required."}),e.jsx(a,{title:"Can I change plans later?",children:"Yes — upgrade or downgrade at any time from Settings → Billing. Changes take effect on your next billing cycle."}),e.jsx(a,{title:"Do you offer refunds?",children:"We offer a full refund within 14 days of any paid plan purchase, no questions asked."})]})})},l={name:"All collapsed",render:()=>e.jsx("div",{style:u,children:e.jsx(r,{children:Array.from({length:4},(n,t)=>e.jsxs(a,{title:`Section ${t+1}`,children:["Panel content for section ",t+1,"."]},t))})})},o={name:"Expand or collapse all",render:()=>e.jsx("div",{style:u,children:e.jsx(r,{variant:"separated",children:["Cash & Bank","Payables & Accruals","Revenue & Receivables","Payroll & Benefits"].map(n=>e.jsxs(a,{title:n,subtitle:"Shift-click to open or close them all",children:["The ",n.toLowerCase()," close tasks."]},n))})})},c={name:"exclusive (only one open at a time)",render:()=>e.jsx("div",{style:u,children:e.jsxs(r,{exclusive:!0,children:[e.jsx(a,{title:"What's included in the free plan?",defaultExpanded:!0,children:"Every workspace gets unlimited members, up to 3 projects, and 5GB of storage — no credit card required."}),e.jsx(a,{title:"Can I change plans later?",children:"Yes — upgrade or downgrade at any time from Settings → Billing. Changes take effect on your next billing cycle."}),e.jsx(a,{title:"Do you offer refunds?",children:"We offer a full refund within 14 days of any paid plan purchase, no questions asked."})]})})},V=[{name:"JP Morgan Chase Acct ****1234",detail:"1110.116 Cash – Chase Operating · 2 of 11 bank lines unmatched",matched:82},{name:"Ramp Corporate Card ****3321",detail:"2150 Corporate Card Clearing · 6 of 8 bank lines unmatched",matched:25},{name:"Silicon Valley Bank ****4410",detail:"1110.120 Cash – SVB Operating · 2 of 5 bank lines unmatched",matched:60}];function M({name:n,matched:t}){return e.jsxs(e.Fragment,{children:[e.jsx(z,{value:t,inline:!0,"aria-label":`${n} matched`}),e.jsx(G,{variant:"secondary",size:"sm",children:"Submit"}),e.jsx(H,{variant:"ghost",size:"sm",icon:e.jsx($,{size:16}),"aria-label":`More for ${n}`})]})}const F={padding:"var(--space-4)",font:"var(--type-paragraph-s-regular)",color:"var(--content-base)"},m={name:"Separated, with subtitle and trailing",render:()=>e.jsx("div",{style:{width:"48rem",maxWidth:"100%"},children:e.jsx(r,{variant:"separated",exclusive:!0,children:V.map((n,t)=>e.jsx(a,{defaultExpanded:t===0,title:n.name,subtitle:n.detail,trailing:e.jsx(M,{name:n.name,matched:n.matched}),children:e.jsxs("div",{style:F,children:["Bank transactions and NetSuite entries for ",n.name,"."]})},n.name))})})},d={name:"Panel padding: none, for a table",render:()=>e.jsx("div",{style:{width:"48rem",maxWidth:"100%"},children:e.jsx(r,{variant:"separated",panelPadding:"none",children:e.jsx(a,{defaultExpanded:!0,title:"Cash & Bank",subtitle:"Bank reconciliations for every operating account",children:e.jsxs("div",{style:{display:"flex"},children:[e.jsxs(f,{header:e.jsx(i,{type:"columnHead",children:"Task"}),children:[e.jsx(i,{type:"text",children:"Match bank statement transactions"}),e.jsx(i,{type:"text",children:"Match Stripe payouts to bank deposits"})]}),e.jsxs(f,{header:e.jsx(i,{type:"columnHead",children:"Preparer"}),width:160,children:[e.jsx(i,{type:"text",children:"Alex Kim"}),e.jsx(i,{type:"text",children:"Priya Patel"})]})]})})})})},p={name:"Fill (open item takes the full height)",parameters:{noThemeSplit:!0},render:()=>e.jsx("div",{style:{height:"24rem",width:"48rem",maxWidth:"100%"},children:e.jsx(r,{variant:"separated",fill:!0,children:V.map((n,t)=>e.jsx(a,{defaultExpanded:t===0,footer:"Select a transaction and a corresponding journal entry to match them.",title:n.name,subtitle:n.detail,trailing:e.jsx(M,{name:n.name,matched:n.matched}),children:e.jsx("div",{style:{...F,display:"flex",flexDirection:"column",gap:"var(--space-2)"},children:Array.from({length:12},(J,h)=>e.jsxs("div",{style:{padding:"var(--space-2)",borderRadius:"var(--radius-md)",background:"var(--background-default)"},children:["Bank line ",h+1]},h))})},n.name))})})};var x,y,g;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(g=(y=s.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var v,A,j;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(j=(A=l.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var C,k,b,S,E;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Expand or collapse all",
  render: () => <div style={PREVIEW_STYLE}>
      <Accordion variant="separated">
        {["Cash & Bank", "Payables & Accruals", "Revenue & Receivables", "Payroll & Benefits"].map(name => <AccordionItem key={name} title={name} subtitle="Shift-click to open or close them all">
            The {name.toLowerCase()} close tasks.
          </AccordionItem>)}
      </Accordion>
    </div>
}`,...(b=(k=o.parameters)==null?void 0:k.docs)==null?void 0:b.source},description:{story:"Shift-click any head (or Shift+Enter on it) to open or close every item.",...(E=(S=o.parameters)==null?void 0:S.docs)==null?void 0:E.description}}};var I,P,w;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(w=(P=c.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var B,T,W;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(W=(T=m.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var _,L,R,Y,N;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Panel padding: none, for a table",
  render: () => <div style={{
    width: "48rem",
    maxWidth: "100%"
  }}>
      <Accordion variant="separated" panelPadding="none">
        <AccordionItem defaultExpanded title="Cash & Bank" subtitle="Bank reconciliations for every operating account">
          <div style={{
          display: "flex"
        }}>
            <Column header={<Cell type="columnHead">Task</Cell>}>
              <Cell type="text">Match bank statement transactions</Cell>
              <Cell type="text">Match Stripe payouts to bank deposits</Cell>
            </Column>
            <Column header={<Cell type="columnHead">Preparer</Cell>} width={160}>
              <Cell type="text">Alex Kim</Cell>
              <Cell type="text">Priya Patel</Cell>
            </Column>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
}`,...(R=(L=d.parameters)==null?void 0:L.docs)==null?void 0:R.source},description:{story:'`panelPadding="none"`: a table brings its own cell padding, so the panel\ndrops its inset and the table fills it edge to edge.',...(N=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:N.description}}};var D,q,O;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(O=(q=p.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};const K=["Default","AllCollapsed","ExpandAll","Exclusive","Separated","PanelPaddingNone","Fill"],ae=Object.freeze(Object.defineProperty({__proto__:null,AllCollapsed:l,Default:s,Exclusive:c,ExpandAll:o,Fill:p,PanelPaddingNone:d,Separated:m,__namedExportsOrder:K,default:U},Symbol.toStringTag,{value:"Module"}));export{ae as A,s as D,c as E,p as F,d as P,m as S,l as a,o as b};
