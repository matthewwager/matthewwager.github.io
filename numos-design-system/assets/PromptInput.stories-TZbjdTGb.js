import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as h}from"./index-ClcD9ViR.js";import{at as m}from"./DiagramCell-Dfzt8eBQ.js";import"./index-Brl4xq4Y.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./x-8M16RbwM.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./chevron-right-DjmJ9Qh9.js";import"./sparkles-BGkPd9R1.js";import"./file-text-CVBO4J0q.js";import"./circle-plus-BIyj2I_j.js";import"./mic-Cs5li76X.js";import"./arrow-up-B8mFgxMJ.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./chevron-left-C9vICWy7.js";import"./bell-dJEDpyJq.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./play-CfSXC4xN.js";import"./pause-Du-skLIo.js";import"./chartShapes-DrAbwZkd.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./square-centerline-dashed-horizontal-DoWox9pG.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";const u=["Q3 vendor invoices.pdf","AP aging — Oct.xlsx","NetSuite export.csv","Bank statement — Chase.pdf"];function a({size:r="lg",files:R=[],placeholder:Q}){const[_,d]=h.useState(R.map((t,c)=>({id:String(c),name:t}))),[l,H]=h.useState(null);return e.jsxs("div",{style:{display:"grid",gap:"var(--space-3)",width:"26rem"},children:[e.jsx(m,{size:r,placeholder:Q,attachments:_,onRemoveAttachment:t=>d(c=>c.filter(M=>M.id!==t)),onAdd:()=>d(t=>[...t,{id:String(Date.now()),name:u[t.length%u.length]}]),onDictate:()=>{},onSubmit:t=>{H(t||"(files only)"),d([])}}),l?e.jsxs("p",{style:{margin:0,font:"var(--type-paragraph-s-regular)",color:"var(--content-subtle)"},children:["Sent: ",l]}):null]})}const tt={title:"Components/PromptInput",component:m,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A prompt for the agent — Figma's Input / Prompt, on Textarea's field. The prompt over a row of icon buttons (add on the left; dictate and send on the right), attached files as chips (`<Label>`) between them. Its lead icon is a sparkle until focused, then the assistant's mark in color; send is disabled until there's a prompt or a file. Enter sends, Shift+Enter makes a new line; it grows with the prompt. `startActions`/`endActions` take more icon buttons."}}},argTypes:{size:{control:"inline-radio",options:["lg","md","sm"]}}},o={render:r=>e.jsx(a,{size:r.size}),args:{size:"lg"}},i={render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--space-5)"},children:[e.jsx(a,{size:"lg"}),e.jsx(a,{size:"md"}),e.jsx(a,{size:"sm"})]})},s={name:"With files",render:()=>e.jsx(a,{files:["Q3 vendor invoices.pdf","AP aging — Oct.xlsx"],placeholder:"What should Numos do with these?"})},n={name:"With label and help text",args:{label:"Ask Numos",helpText:"Enter to send, Shift+Enter for a new line.",onSubmit:()=>{},onAdd:()=>{},onDictate:()=>{}},render:r=>e.jsx("div",{style:{width:"26rem"},children:e.jsx(m,{...r})})},p={args:{disabled:!0,defaultValue:"Reconcile the Chase operating account for October",onAdd:()=>{},onDictate:()=>{}},render:r=>e.jsx("div",{style:{width:"26rem"},children:e.jsx(m,{...r})})};var g,f,x,v,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <Live size={args.size} />,
  args: {
    size: "lg"
  }
}`,...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source},description:{story:"L, as in Figma. Focus it for the assistant's mark; type for the send button.",...(b=(v=o.parameters)==null?void 0:v.docs)==null?void 0:b.description}}};var S,y,A,j,w;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: "var(--space-5)"
  }}>
      <Live size="lg" />
      <Live size="md" />
      <Live size="sm" />
    </div>
}`,...(A=(y=i.parameters)==null?void 0:y.docs)==null?void 0:A.source},description:{story:"L, M and S.",...(w=(j=i.parameters)==null?void 0:j.docs)==null?void 0:w.description}}};var z,L,W,E,D;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "With files",
  render: () => <Live files={["Q3 vendor invoices.pdf", "AP aging — Oct.xlsx"]} placeholder="What should Numos do with these?" />
}`,...(W=(L=s.parameters)==null?void 0:L.docs)==null?void 0:W.source},description:{story:"With files attached, as chips — add attaches another, × removes one. Files alone can be sent.",...(D=(E=s.parameters)==null?void 0:E.docs)==null?void 0:D.description}}};var k,P,F,I,T;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "With label and help text",
  args: {
    label: "Ask Numos",
    helpText: "Enter to send, Shift+Enter for a new line.",
    onSubmit: () => {},
    onAdd: () => {},
    onDictate: () => {}
  },
  render: args => <div style={{
    width: "26rem"
  }}>
      <PromptInput {...args} />
    </div>
}`,...(F=(P=n.parameters)==null?void 0:P.docs)==null?void 0:F.source},description:{story:"With a label and help text, like any field.",...(T=(I=n.parameters)==null?void 0:I.docs)==null?void 0:T.description}}};var O,N,C;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: "Reconcile the Chase operating account for October",
    onAdd: () => {},
    onDictate: () => {}
  },
  render: args => <div style={{
    width: "26rem"
  }}>
      <PromptInput {...args} />
    </div>
}`,...(C=(N=p.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};const rt=["Default","Sizes","WithFiles","WithLabelAndHelpText","Disabled"];export{o as Default,p as Disabled,i as Sizes,s as WithFiles,n as WithLabelAndHelpText,rt as __namedExportsOrder,tt as default};
