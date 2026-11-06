import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as s}from"./index-DUy19JZU.js";import{d as a,C as r}from"./index-CDRLqk4-.js";import{C as l,A as t,P as d,d as c,W as h,c as p,a as m,b as u}from"./Chart-BarMeter.stories-D0g4Gl4U.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BU9NLRGc.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramCell-CHJIAByx.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:l}),`
`,e.jsx(o.h1,{id:"barmeter",children:"BarMeter"}),`
`,e.jsx(o.p,{children:"A compact row of thin bars, one per item or interval — matches Figma's BarMeter. It works in two ways:"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Absolute"})," (",e.jsx(o.code,{children:"items"}),"): one bar per counted thing — an invoice, a task, a check — colored by that item's own ",e.jsx(o.code,{children:"status"}),". Each run of same-status bars shows its count underneath."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Proportional"})," (",e.jsx(o.code,{children:"value"}),"): a fixed number of ",e.jsx(o.code,{children:"bars"})," filled up to ",e.jsx(o.code,{children:"value"}),", each bar colored by the threshold zone it falls in. Unfilled bars are ",e.jsx(o.code,{children:"--background-element"}),"."]}),`
`]}),`
`,e.jsxs(o.p,{children:["Hovering a bar shows a tooltip. Add ",e.jsx(o.code,{children:"onBarClick"})," or ",e.jsx(o.code,{children:"renderPopover"})," and each bar becomes a button."]}),`
`,e.jsx(r,{of:t}),`
`,e.jsx(o.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Absolute:"}),' a small collection where each item matters individually and the mix of statuses tells the story — "15 paid, 9 due, 1 overdue". Fits in a table cell, card header or list row.']}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Proportional:"})," a single reading against thresholds where the segmented look helps — capacity, load, budget used. Each bar can also stand for an interval, e.g. 12 bars for 12 months."]}),`
`]}),`
`,e.jsx(o.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["More than ~50 items — the bars stop being individually readable or clickable. Summarise with ",e.jsx(o.code,{children:"<ProgressBar segments>"})," or a ",e.jsx(o.code,{children:"<DonutChart>"})," instead."]}),`
`,e.jsxs(o.li,{children:["A plain percentage with no thresholds — ",e.jsx(o.code,{children:"<ProgressBar>"})," is simpler."]}),`
`]}),`
`,e.jsx(o.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import { BarMeter } from "@numosai/ui";

// Absolute — one bar per item, grouped by status
<BarMeter
  aria-label="Invoices"
  items={[
    { status: "positive", label: "INV-1001", description: "Paid" },
    { status: "notice", label: "INV-1016", description: "Due in 2 days" },
    { status: "negative", label: "INV-1025", description: "Overdue 12 days" },
  ]}
/>

// Proportional — 15 bars filled to 80%, colored by zone
<BarMeter
  aria-label="Load"
  value={80}
  zones={[
    { upTo: 47, status: "positive", label: "Lo" },
    { upTo: 74, status: "notice" },
    { upTo: 100, status: "negative", label: "Hi" },
  ]}
/>
`})}),`
`,e.jsx(o.h3,{id:"absolute",children:"Absolute"}),`
`,e.jsxs(o.p,{children:["Items are drawn in the order given, and neighbouring items with the same ",e.jsx(o.code,{children:"status"})," form one group with its count underneath. Sort by status first if you want exactly one group per status. Statuses: ",e.jsx(o.code,{children:'"positive" | "notice" | "negative" | "info" | "neutral"'}),"."]}),`
`,e.jsx(r,{of:t}),`
`,e.jsx(o.h3,{id:"proportional",children:"Proportional"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"value"})," (0–100) fills ",e.jsx(o.code,{children:"bars"})," (default 15) from the left; a bar counts as filled once ",e.jsx(o.code,{children:"value"})," reaches it. Each bar takes the color of the zone its midpoint falls in. Zone labels sit under their zone: the first left-aligned, the last right-aligned. These match Figma's own 7 / 4 / 4 example, full and partly filled:"]}),`
`,e.jsx(r,{of:d}),`
`,e.jsxs(o.p,{children:["Without ",e.jsx(o.code,{children:"zones"}),", ",e.jsx(o.code,{children:"mode"})," gives the same 34/67% red/yellow/green bands as ",e.jsx(o.code,{children:"<ProgressBar>"})," and ",e.jsx(o.code,{children:"<GaugeChart>"}),": ",e.jsx(o.code,{children:'"negative-to-positive"'})," (default) when higher is better, ",e.jsx(o.code,{children:'"positive-to-negative"'})," when higher is worse."]}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(o.h3,{id:"without-labels",children:"Without labels"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"showLabels={false}"})," hides the counts and zone labels, for tight spaces like a table cell."]}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(o.h3,{id:"tooltips",children:"Tooltips"}),`
`,e.jsxs(o.p,{children:["By default the tooltip shows the item's ",e.jsx(o.code,{children:"label"})," and ",e.jsx(o.code,{children:"description"})," (absolute), or the zone and the bar's range (proportional). ",e.jsx(o.code,{children:"formatTooltip"})," overrides it — useful when each bar is an interval:"]}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(o.h3,{id:"clicking-a-bar",children:"Clicking a bar"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"onBarClick(bar, event)"})," makes every bar a button. Use it to open a ",e.jsx(o.code,{children:"<Modal>"})," or ",e.jsx(o.code,{children:"<Drawer>"})," with the item's details:"]}),`
`,e.jsx(r,{of:m}),`
`,e.jsxs(o.p,{children:["For something lighter, ",e.jsx(o.code,{children:"renderPopover(bar)"})," opens a ",e.jsx(o.code,{children:"<Popover>"})," anchored to the clicked bar:"]}),`
`,e.jsx(r,{of:u}),`
`,e.jsxs(o.p,{children:["Both callbacks receive the bar's ",e.jsx(o.code,{children:"index"}),", ",e.jsx(o.code,{children:"status"}),", ",e.jsx(o.code,{children:"label"}),", ",e.jsx(o.code,{children:"filled"}),", and either its ",e.jsx(o.code,{children:"item"})," (absolute) or ",e.jsx(o.code,{children:"zone"})," (proportional)."]}),`
`,e.jsx(o.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["A display-only meter is ",e.jsx(o.code,{children:'role="img"'})," with an ",e.jsx(o.code,{children:"aria-label"}),' summarising it — e.g. "Invoices: 15 positive, 9 notice, 1 negative" — built from your ',e.jsx(o.code,{children:"aria-label"})," plus the counts (or the percentage, for proportional meters). Always pass ",e.jsx(o.code,{children:"aria-label"})," so the summary says what's being counted."]}),`
`,e.jsxs(o.li,{children:["An interactive meter is ",e.jsx(o.code,{children:'role="group"'}),", and each bar is a ",e.jsx(o.code,{children:"<button>"})," named after its item or range. The whole meter is a single Tab stop; Arrow Left/Right move between bars and Home/End jump to the ends, and focusing a bar shows its tooltip."]}),`
`,e.jsx(o.li,{children:"Colors are reinforced by the group counts and tooltips, but don't rely on color alone for meaning that matters — say what the statuses mean nearby (e.g. a legend or column header)."}),`
`]})]})}function Pe(i={}){const{wrapper:o}={...s(),...i.components};return o?e.jsx(o,{...i,children:e.jsx(n,{...i})}):n(i)}export{Pe as default};
