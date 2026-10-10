import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as d}from"./index-DUy19JZU.js";import{c as s,C as n,b as c}from"./index-R-0gtsrS.js";import{A as a,D as r,a as l,E as p}from"./Accordion.stories-9LrHI__J.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function t(i){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:a}),`
`,e.jsx(o.h1,{id:"accordion",children:"Accordion"}),`
`,e.jsxs(o.p,{children:["A rounded, clipped group of collapsible rows — matches Figma's Accordion/",e.jsx(o.code,{children:"CollapsableRow"})," exactly."]}),`
`,e.jsx(n,{of:r}),`
`,e.jsx(o.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:'FAQ lists, expandable help sections, or any vertical stack of "tap a title to reveal its content" rows.'}),`
`]}),`
`,e.jsx(o.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import { Accordion, AccordionItem } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<Accordion>
  <AccordionItem title="What's included in the free plan?" defaultExpanded>
    Every workspace gets unlimited members, up to 3 projects, and 5GB of storage.
  </AccordionItem>
  <AccordionItem title="Can I change plans later?">
    Yes — upgrade or downgrade at any time from Settings → Billing.
  </AccordionItem>
</Accordion>
`})}),`
`,e.jsxs(o.h2,{id:"each-item-manages-its-own-state--unless-you-ask-for-exclusive",children:["Each item manages its own state — unless you ask for ",e.jsx(o.code,{children:"exclusive"})]}),`
`,e.jsxs(o.p,{children:["Figma's own Accordion example is a plain stack of independently-collapsed rows, not a single-open-at-a-time widget — so by default, ",e.jsx(o.code,{children:"<AccordionItem>"})," behaves like a standalone ",e.jsx(o.code,{children:"<Toggle>"}),": uncontrolled by default (",e.jsx(o.code,{children:"defaultExpanded"}),"), or controlled with ",e.jsx(o.code,{children:"expanded"}),"/",e.jsx(o.code,{children:"onExpandedChange"}),"."]}),`
`,e.jsx(n,{of:l}),`
`,e.jsxs(o.p,{children:["Set ",e.jsx(o.code,{children:"exclusive"})," on ",e.jsx(o.code,{children:"<Accordion>"}),' to coordinate them instead — expanding one item collapses any other, the same "radio vs. checkbox" distinction ',e.jsx(o.code,{children:"<RadioGroup>"}),"/",e.jsx(o.code,{children:"<CheckboxGroup>"})," already draw. Whichever item has ",e.jsx(o.code,{children:"defaultExpanded"})," starts open (the first one, if more than one sets it); each item's own ",e.jsx(o.code,{children:"expanded"}),"/",e.jsx(o.code,{children:"onExpandedChange"})," are ignored here, since there's one shared source of truth instead."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`<Accordion exclusive>
  <AccordionItem title="..." defaultExpanded>...</AccordionItem>
  <AccordionItem title="...">...</AccordionItem>
</Accordion>
`})}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(o.h2,{id:"the-collapsed-panel-is-a-real-divider-not-just-hidden",children:"The collapsed panel is a real divider, not just hidden"}),`
`,e.jsxs(o.p,{children:["Confirmed from Figma: a collapsed row's panel isn't unmounted — it's a 1px sliver that still shows the ",e.jsx(o.code,{children:"border-disabled"})," divider between rows. This component reproduces that with a CSS grid ",e.jsx(o.code,{children:"fr"}),"-unit height animation (",e.jsx(o.code,{children:"0fr"})," ↔ ",e.jsx(o.code,{children:"1fr"}),") rather than a JS-measured height or ",e.jsx(o.code,{children:"display: none"}),", so the divider is always there and the expand/collapse is a genuine height transition, not a crossfade."]}),`
`,e.jsx(o.h2,{id:"props",children:"Props"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Accordion"}),": ",e.jsx(o.code,{children:"children"})," (required — ",e.jsx(o.code,{children:"<AccordionItem>"}),"s), ",e.jsx(o.code,{children:"exclusive"})," (only one item open at a time), ",e.jsx(o.code,{children:"className"}),"."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"AccordionItem"}),": ",e.jsx(o.code,{children:"title"})," (required), ",e.jsx(o.code,{children:"children"})," (required — the panel content), ",e.jsx(o.code,{children:"expanded"}),"/",e.jsx(o.code,{children:"onExpandedChange"})," (ignored when the parent ",e.jsx(o.code,{children:"<Accordion>"})," has ",e.jsx(o.code,{children:"exclusive"}),"), ",e.jsx(o.code,{children:"defaultExpanded"}),", ",e.jsx(o.code,{children:"className"}),"."]}),`
`,e.jsx(c,{of:r})]})}function Ce(i={}){const{wrapper:o}={...d(),...i.components};return o?e.jsx(o,{...i,children:e.jsx(t,{...i})}):t(i)}export{Ce as default};
