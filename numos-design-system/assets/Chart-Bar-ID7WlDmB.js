import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as o}from"./index-DUy19JZU.js";import{c as a,P as s,b as l,C as t}from"./index-R-0gtsrS.js";import{B as d,D as c,H as h,G as m,M as p,W as x,C as u,S as j}from"./Chart-Bar.stories-BnVyD965.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function i(n){const r={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:d}),`
`,e.jsx(r.h1,{id:"barchart",children:"BarChart"}),`
`,e.jsxs(r.p,{children:["A vertical or horizontal bar chart — matches Figma's Chart component's colors, typography, and grid/baseline treatment exactly. ",e.jsx(r.code,{children:'orientation="horizontal"'})," is the same chart transposed, not a separate implementation. Three variants: ",e.jsx(r.code,{children:'"single"'})," (default, one bar per category), ",e.jsx(r.code,{children:'"clustered"'})," (several series' bars side by side per category), and ",e.jsx(r.code,{children:'"stacked"'})," (several series' segments stacked into one bar per category)."]}),`
`,e.jsx(s,{}),`
`,e.jsx(l,{}),`
`,e.jsx(r.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Comparing a handful of discrete categories against each other (revenue by region, count by status)."}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:'orientation="horizontal"'})," when category labels are long — a vertical chart's rotated or truncated labels are harder to read than a horizontal one's full-width row."]}),`
`]}),`
`,e.jsx(r.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["A continuous trend over time — use ",e.jsx(r.code,{children:"<LineChart>"}),"."]}),`
`,e.jsxs(r.li,{children:["Part-to-whole composition of a single total — use ",e.jsx(r.code,{children:"<DonutChart>"}),"."]}),`
`]}),`
`,e.jsx(r.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { BarChart } from "@numosai/ui";
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
`,e.jsx(t,{of:c}),`
`,e.jsx(r.h2,{id:"orientation",children:"Orientation"}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(r.h2,{id:"independent-visibility-controls",children:"Independent visibility controls"}),`
`,e.jsx(r.p,{children:`Confirmed from the request behind this component: legend, grid lines (with their axis tick values), and category labels are three separate booleans, not one bundled "show chrome" switch — Figma's own static example always shows all three together, but nothing about the chart depends on that.`}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(t,{of:p}),`
`,e.jsxs(r.h2,{id:"legend-defaults-off-for-variantsingle",children:["Legend defaults off for ",e.jsx(r.code,{children:'variant="single"'})]}),`
`,e.jsxs(r.p,{children:["The default variant is always one bar per labeled category. With ",e.jsx(r.code,{children:"showCategoryLabels"})," on — the normal case — every bar already carries its own label, so a legend alongside it would just repeat the same names in a second place. It only earns its keep when there's no room for those per-bar labels in the first place:"]}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(r.h2,{id:"clustered-and-stacked",children:"Clustered and stacked"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:'variant="clustered"'}),"/",e.jsx(r.code,{children:'variant="stacked"'})," group several ",e.jsx(r.em,{children:"series"})," under one shared category instead — several colors sharing one axis label (e.g. a month), each color meaning something different. That's the actual scenario a legend is for: the axis identifies the category, color identifies the series, and neither one substitutes for the other — so both variants default ",e.jsx(r.code,{children:"showLegend"})," to ",e.jsx(r.code,{children:"true"}),". Their ",e.jsx(r.code,{children:"data"})," shape is different from the single-bar variant's own: an array of ",e.jsx(r.code,{children:"{ category, values }"})," (one shared axis label plus a value per series), alongside a ",e.jsx(r.code,{children:"series"})," array (",e.jsx(r.code,{children:"{ key, label, color? }"}),") naming and coloring each one consistently across every category."]}),`
`,e.jsx(r.p,{children:"Vertical-only for now — Figma's own reference only designed these two variants that way."}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`<BarChart
  variant="clustered" // or "stacked"
  series={[
    { key: "first", label: "First" },
    { key: "second", label: "Second" },
  ]}
  data={[
    { category: "Jan", values: { first: 58, second: 73 } },
    { category: "Feb", values: { first: 40, second: 45 } },
  ]}
/>
`})}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(r.h2,{id:"colors",children:"Colors"}),`
`,e.jsxs(r.p,{children:["Bars default to the five-color ",e.jsx(r.code,{children:"--chart-1"}),"…",e.jsx(r.code,{children:"--chart-5"}),` palette (Figma's own "Charts/First"–"Charts/Fifth"), assigned by index — pass `,e.jsx(r.code,{children:"color"})," on a datum to override it."]}),`
`,e.jsx(r.h2,{id:"ticks-are-computed-not-literal",children:"Ticks are computed, not literal"}),`
`,e.jsxs(r.p,{children:["Figma's own grid rows show static ",e.jsx(r.code,{children:'"00"'})," placeholder text at each end. Here, every tick is a real value derived from ",e.jsx(r.code,{children:"data"}),"'s max — ",e.jsx(r.code,{children:"gridLineCount"})," (default 5) controls how many divisions, not what they say."]}),`
`,e.jsx(r.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["The bars and grid are ",e.jsx(r.code,{children:"aria-hidden"})," — a bar chart's visual encoding doesn't have a meaningful DOM/AX fallback of its own; pair it with a visually-hidden data table or summary if the underlying data needs to reach assistive tech."]}),`
`,e.jsx(r.li,{children:"Legend and axis/category text render as real, readable text (not baked into an image), so zoom and text-scaling work normally."}),`
`]}),`
`,e.jsx(r.h2,{id:"props",children:"Props"}),`
`,e.jsxs(r.p,{children:["See the ",e.jsx(r.strong,{children:"Controls"})," table above for the full list, types, and defaults — generated automatically from the TypeScript types."]})]})}function Me(n={}){const{wrapper:r}={...o(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(i,{...n})}):i(n)}export{Me as default};
