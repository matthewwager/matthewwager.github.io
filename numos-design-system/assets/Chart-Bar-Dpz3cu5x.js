import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as s}from"./index-DUy19JZU.js";import{d as i,P as o,c as l,C as r}from"./index-CDRLqk4-.js";import{B as d,D as c,H as h,G as m,M as p,W as u,C as x,S as g}from"./Chart-Bar.stories-DYMFCstn.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BU9NLRGc.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramCell-CHJIAByx.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function n(a){const t={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:d}),`
`,e.jsx(t.h1,{id:"barchart",children:"BarChart"}),`
`,e.jsxs(t.p,{children:["A vertical or horizontal bar chart — matches Figma's Chart component's colors, typography, and grid/baseline treatment exactly. ",e.jsx(t.code,{children:'orientation="horizontal"'})," is the same chart transposed, not a separate implementation. Three variants: ",e.jsx(t.code,{children:'"single"'})," (default, one bar per category), ",e.jsx(t.code,{children:'"clustered"'})," (several series' bars side by side per category), and ",e.jsx(t.code,{children:'"stacked"'})," (several series' segments stacked into one bar per category)."]}),`
`,e.jsx(o,{}),`
`,e.jsx(l,{}),`
`,e.jsx(t.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Comparing a handful of discrete categories against each other (revenue by region, count by status)."}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:'orientation="horizontal"'})," when category labels are long — a vertical chart's rotated or truncated labels are harder to read than a horizontal one's full-width row."]}),`
`]}),`
`,e.jsx(t.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["A continuous trend over time — use ",e.jsx(t.code,{children:"<LineChart>"}),"."]}),`
`,e.jsxs(t.li,{children:["Part-to-whole composition of a single total — use ",e.jsx(t.code,{children:"<DonutChart>"}),"."]}),`
`]}),`
`,e.jsx(t.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { BarChart } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<BarChart
  data={[
    { label: "First", value: 58 },
    { label: "Second", value: 73 },
    { label: "Third", value: 94 },
    { label: "Fourth", value: 73 },
    { label: "Fifth", value: 96 },
  ]}
/>
`})}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(t.h2,{id:"orientation",children:"Orientation"}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(t.h2,{id:"independent-visibility-controls",children:"Independent visibility controls"}),`
`,e.jsx(t.p,{children:`Confirmed from the request behind this component: legend, grid lines (with their axis tick values), and category labels are three separate booleans, not one bundled "show chrome" switch — Figma's own static example always shows all three together, but nothing about the chart depends on that.`}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(r,{of:p}),`
`,e.jsxs(t.h2,{id:"legend-defaults-off-for-variantsingle",children:["Legend defaults off for ",e.jsx(t.code,{children:'variant="single"'})]}),`
`,e.jsxs(t.p,{children:["The default variant is always one bar per labeled category. With ",e.jsx(t.code,{children:"showCategoryLabels"})," on — the normal case — every bar already carries its own label, so a legend alongside it would just repeat the same names in a second place. It only earns its keep when there's no room for those per-bar labels in the first place:"]}),`
`,e.jsx(r,{of:u}),`
`,e.jsx(t.h2,{id:"clustered-and-stacked",children:"Clustered and stacked"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:'variant="clustered"'}),"/",e.jsx(t.code,{children:'variant="stacked"'})," group several ",e.jsx(t.em,{children:"series"})," under one shared category instead — several colors sharing one axis label (e.g. a month), each color meaning something different. That's the actual scenario a legend is for: the axis identifies the category, color identifies the series, and neither one substitutes for the other — so both variants default ",e.jsx(t.code,{children:"showLegend"})," to ",e.jsx(t.code,{children:"true"}),". Their ",e.jsx(t.code,{children:"data"})," shape is different from the single-bar variant's own: an array of ",e.jsx(t.code,{children:"{ category, values }"})," (one shared axis label plus a value per series), alongside a ",e.jsx(t.code,{children:"series"})," array (",e.jsx(t.code,{children:"{ key, label, color? }"}),") naming and coloring each one consistently across every category."]}),`
`,e.jsx(t.p,{children:"Vertical-only for now — Figma's own reference only designed these two variants that way."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<BarChart
  variant="clustered" // or "stacked"
  series={[
    { key: "scheduled", label: "Scheduled payments" },
    { key: "available", label: "Cash available" },
  ]}
  data={[
    { category: "Mon", values: { scheduled: 35127, available: 160300 } },
    { category: "Tue", values: { scheduled: 0, available: 133923 } },
  ]}
  formatValue={(value) => \`$\${Math.round(value / 1000)}K\`}
/>
`})}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Choosing between them."})," Stack when the series are parts of one whole and the total means something: documents synced per week, split by the system they came from. Cluster when the series are separate measures to compare side by side, and adding them up would mean nothing: payments due against cash available, by day. The examples below use the Pay demo's own data."]}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(r,{of:g}),`
`,e.jsx(t.h2,{id:"formatting-values",children:"Formatting values"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"formatValue"})," formats the axis ticks, the tooltips and each bar's accessible name, e.g. currency. The axis ceiling is still computed from the raw values."]}),`
`,e.jsx(t.h2,{id:"colors",children:"Colors"}),`
`,e.jsxs(t.p,{children:["Bars default to the five-color ",e.jsx(t.code,{children:"--chart-1"}),"…",e.jsx(t.code,{children:"--chart-5"}),` palette (Figma's own "Charts/First"–"Charts/Fifth"), assigned by index — pass `,e.jsx(t.code,{children:"color"})," on a datum to override it."]}),`
`,e.jsx(t.h2,{id:"ticks-are-computed-not-literal",children:"Ticks are computed, not literal"}),`
`,e.jsxs(t.p,{children:["Figma's own grid rows show static ",e.jsx(t.code,{children:'"00"'})," placeholder text at each end. Here, every tick is a real value derived from ",e.jsx(t.code,{children:"data"}),"'s max — ",e.jsx(t.code,{children:"gridLineCount"})," (default 5) controls how many divisions, not what they say."]}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["The bars and grid are ",e.jsx(t.code,{children:"aria-hidden"})," — a bar chart's visual encoding doesn't have a meaningful DOM/AX fallback of its own; pair it with a visually-hidden data table or summary if the underlying data needs to reach assistive tech."]}),`
`,e.jsx(t.li,{children:"Legend and axis/category text render as real, readable text (not baked into an image), so zoom and text-scaling work normally."}),`
`]}),`
`,e.jsx(t.h2,{id:"props",children:"Props"}),`
`,e.jsxs(t.p,{children:["See the ",e.jsx(t.strong,{children:"Controls"})," table above for the full list, types, and defaults — generated automatically from the TypeScript types."]})]})}function Le(a={}){const{wrapper:t}={...s(),...a.components};return t?e.jsx(t,{...a,children:e.jsx(n,{...a})}):n(a)}export{Le as default};
