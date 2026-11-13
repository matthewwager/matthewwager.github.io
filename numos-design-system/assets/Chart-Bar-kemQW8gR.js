import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as r}from"./index-DUy19JZU.js";import{d as i,P as o,c as l,C as t}from"./index-RBA69SJr.js";import{B as h,D as d,H as c,G as p,M as m,f as x,C as g,S as u,T as j,a as f,b as v,c as b,W as w,e as y,d as k}from"./Chart-Bar.stories-D0CUxX0W.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BVaJyDbk.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramCell-BVBcLmyd.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function n(s){const a={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:h}),`
`,e.jsx(a.h1,{id:"barchart",children:"BarChart"}),`
`,e.jsxs(a.p,{children:["A vertical or horizontal bar chart — matches Figma's Chart component's colors, typography, and grid/baseline treatment exactly. ",e.jsx(a.code,{children:'orientation="horizontal"'})," is the same chart transposed, not a separate implementation. Three variants: ",e.jsx(a.code,{children:'"single"'})," (default, one bar per category), ",e.jsx(a.code,{children:'"clustered"'})," (several series' bars side by side per category), and ",e.jsx(a.code,{children:'"stacked"'})," (several series' segments stacked into one bar per category)."]}),`
`,e.jsx(o,{}),`
`,e.jsx(l,{}),`
`,e.jsx(a.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:"Comparing a handful of discrete categories against each other (revenue by region, count by status)."}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:'orientation="horizontal"'})," when category labels are long — a vertical chart's rotated or truncated labels are harder to read than a horizontal one's full-width row."]}),`
`]}),`
`,e.jsx(a.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:["A continuous trend over time — use ",e.jsx(a.code,{children:"<LineChart>"}),"."]}),`
`,e.jsxs(a.li,{children:["Part-to-whole composition of a single total — use ",e.jsx(a.code,{children:"<DonutChart>"}),"."]}),`
`]}),`
`,e.jsx(a.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-tsx",children:`import { BarChart } from "@numosai/ui";
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
`,e.jsx(t,{of:d}),`
`,e.jsx(a.h2,{id:"orientation",children:"Orientation"}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(a.h2,{id:"independent-visibility-controls",children:"Independent visibility controls"}),`
`,e.jsx(a.p,{children:`Confirmed from the request behind this component: legend, grid lines (with their axis tick values), and category labels are three separate booleans, not one bundled "show chrome" switch — Figma's own static example always shows all three together, but nothing about the chart depends on that.`}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(t,{of:m}),`
`,e.jsxs(a.h2,{id:"legend-defaults-off-for-variantsingle",children:["Legend defaults off for ",e.jsx(a.code,{children:'variant="single"'})]}),`
`,e.jsxs(a.p,{children:["The default variant is always one bar per labeled category. With ",e.jsx(a.code,{children:"showCategoryLabels"})," on — the normal case — every bar already carries its own label, so a legend alongside it would just repeat the same names in a second place. It only earns its keep when there's no room for those per-bar labels in the first place:"]}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(a.h2,{id:"clustered-and-stacked",children:"Clustered and stacked"}),`
`,e.jsxs(a.p,{children:[e.jsx(a.code,{children:'variant="clustered"'}),"/",e.jsx(a.code,{children:'variant="stacked"'})," group several ",e.jsx(a.em,{children:"series"})," under one shared category instead — several colors sharing one axis label (e.g. a month), each color meaning something different. That's the actual scenario a legend is for: the axis identifies the category, color identifies the series, and neither one substitutes for the other — so both variants default ",e.jsx(a.code,{children:"showLegend"})," to ",e.jsx(a.code,{children:"true"}),". Their ",e.jsx(a.code,{children:"data"})," shape is different from the single-bar variant's own: an array of ",e.jsx(a.code,{children:"{ category, values }"})," (one shared axis label plus a value per series), alongside a ",e.jsx(a.code,{children:"series"})," array (",e.jsx(a.code,{children:"{ key, label, color? }"}),") naming and coloring each one consistently across every category."]}),`
`,e.jsx(a.p,{children:"Vertical-only for now — Figma's own reference only designed these two variants that way."}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-tsx",children:`<BarChart
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
`,e.jsxs(a.p,{children:[e.jsx(a.strong,{children:"Choosing between them."})," Stack when the series are parts of one whole and the total means something: documents synced per week, split by the system they came from. Cluster when the series are separate measures to compare side by side, and adding them up would mean nothing: payments due against cash available, by day. The examples below use the Pay demo's own data."]}),`
`,e.jsx(t,{of:g}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(a.h2,{id:"thickness",children:"Thickness"}),`
`,e.jsxs(a.p,{children:[e.jsx(a.code,{children:"thickness"})," sets how thick each bar is — its width when vertical, its height when horizontal — on the spacing scale, the same t-shirt sizes ",e.jsx(a.code,{children:"<DonutChart>"})," uses for its ring:"]}),`
`,e.jsxs(a.p,{children:["| ",e.jsx(a.code,{children:"thickness"}),` | xs | s | m | l | xl |
|---|---|---|---|---|---|
| px | 4 | 8 | 16 | 24 | 32 |
| Token | `,e.jsx(a.code,{children:"--space-1"})," | ",e.jsx(a.code,{children:"--space-2"})," | ",e.jsx(a.code,{children:"--space-4"})," | ",e.jsx(a.code,{children:"--space-5"})," | ",e.jsx(a.code,{children:"--space-6"})," |"]}),`
`,e.jsxs(a.p,{children:["A bar never grows past its category's slot, so on a crowded chart the larger sizes cap at the slot's width. Each variant keeps its own default: ",e.jsx(a.code,{children:"xl"})," for vertical bars, ",e.jsx(a.code,{children:"s"})," for horizontal and clustered, ",e.jsx(a.code,{children:"m"})," for stacked."]}),`
`,e.jsx(a.p,{children:"Stacked segments always have a 1px gap between them — a real gap that shows whatever's behind the chart, not a painted line. It sits inside each segment's own height, so the stack still totals its value."}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(a.h2,{id:"diverging",children:"Diverging"}),`
`,e.jsxs(a.p,{children:[e.jsx(a.code,{children:'variant="diverging"'})," measures bars from zero rather than from the axis floor, so they run above it (positive) and below it (negative), with a 1px gap either side of the zero line. Use it for intervals that can go either way against a baseline, like each day's net change. Bars are clustered by category (e.g. days within a month), and the axis extends below zero as far as the data needs."]}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-tsx",children:`<BarChart
  variant="diverging"
  data={[
    { category: "Jan", values: [{ label: "Jan 1", value: 1.4 }, { label: "Jan 2", value: -0.6 }] },
    // …
  ]}
/>
`})}),`
`,e.jsxs(a.p,{children:["Positive bars are green (",e.jsx(a.code,{children:"--chart-3"}),") and negative ones red (",e.jsx(a.code,{children:"--background-negative-base"}),"); ",e.jsx(a.code,{children:"positiveColor"}),"/",e.jsx(a.code,{children:"negativeColor"})," change them. Bars default to ",e.jsx(a.code,{children:'thickness="xs"'})," (4px), 2px apart, and narrow rather than overflow when a cluster has more bars than room."]}),`
`,e.jsx(t,{of:f}),`
`,e.jsxs(a.p,{children:[e.jsx(a.code,{children:'orientation="horizontal"'})," puts the categories down the side and grows bars left (negative) and right (positive) from a central zero line. The chart grows with its rows instead of fitting a fixed height. Below, negatives are blue and positives red, as in the Figma reference."]}),`
`,e.jsx(t,{of:v}),`
`,e.jsx(a.h2,{id:"waterfall",children:"Waterfall"}),`
`,e.jsxs(a.p,{children:[e.jsx(a.code,{children:'variant="waterfall"'})," shows a running total's steps: each interval's bar runs from where the last one ended to its new total, green up and red down, so the chart reads as one continuous ribbon. ",e.jsx(a.code,{children:"data"})," is each interval's change (",e.jsx(a.code,{children:"value"}),"); ",e.jsx(a.code,{children:"start"})," sets where the total begins (default 0)."]}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-tsx",children:`<BarChart
  variant="waterfall"
  data={[
    { label: "Jan 1", value: 1.5, tickLabel: "Jan 1" },
    { label: "Jan 2", value: -0.4 },
    { label: "Jan 3", value: 0 },
  ]}
/>
`})}),`
`,e.jsxs(a.p,{children:[e.jsx(a.strong,{children:"Connectors."})," By default (",e.jsx(a.code,{children:"connectIntervals"}),"), a flat connector at the running total joins each interval to the next, 1px clear of the bars either side, in the earlier bar's color at half strength. Its width is just the space the bars leave — so it comes from how many intervals share the chart's width: wide on a chart of a few intervals, a sliver on a dense daily one, gone when bars fill their slots. An interval with no change draws no bar, so the connector runs on across it — a quiet stretch reads as one long, flat line holding the total (hover it for the span). ",e.jsx(a.code,{children:"connectIntervals={false}"})," draws the bars alone."]}),`
`,e.jsxs(a.p,{children:[e.jsx(a.strong,{children:"Thickness from the chart."})," Leave ",e.jsx(a.code,{children:"thickness"})," unset and the waterfall sizes its bars to fit: it measures its own width and picks the largest t-shirt size whose bars fit each interval — at most half of it when intervals are connected (so the connector always gets at least as much room as the bar), or the whole interval less the 1px gaps when they aren't. Fewer intervals or more width means thicker bars, and the chart re-measures as it resizes. Set ",e.jsx(a.code,{children:"thickness"})," to fix the size instead; bars still never grow wider than their interval. Connectors are always the xs thickness (4px), whatever the bars' — a thin join at the running total, so a connector never looks bigger than the change it joins. Corners round with the thickness: ",e.jsx(a.code,{children:"--radius-sm"})," for xs and s, then md, lg and xl."]}),`
`,e.jsx(t,{of:b}),`
`,e.jsxs(a.p,{children:[e.jsx(a.code,{children:"tickLabel"})," sets what shows under the axis, so a dense daily chart can label every third day; omit it on every datum to label them all."]}),`
`,e.jsx(t,{of:w}),`
`,e.jsx(t,{of:y}),`
`,e.jsxs(a.p,{children:[e.jsx(a.strong,{children:"Starting from a balance."})," The value axis reaches zero by default. A running total that starts from a large balance and moves by small steps — a cash balance through a week of payments — would leave every step a sliver at the top. ",e.jsx(a.code,{children:"includeZero={false}"})," fits the axis to the range the total covers instead. The bars float either way, so nothing measures from zero; keep zero in when crossing it is the point, such as cash running short."]}),`
`,e.jsxs(a.p,{children:[e.jsx(a.strong,{children:"Several steps an interval."})," Give an interval ",e.jsx(a.code,{children:"steps"})," instead of a ",e.jsx(a.code,{children:"value"})," and its changes draw side by side, in order, each starting where the last ended — a day's available cash, then its payments. Every interval keeps the same places, so the pairs line up; connectors run between intervals, not within one. A step with no change draws nothing, unless it's ",e.jsx(a.code,{children:"alwaysShow"}),`: then it's a sliver the connector's height at the running total, so "unchanged" still reads. `,e.jsx(a.code,{children:"emphasis"})," on an interval picks out its label — today, say."]}),`
`,e.jsx(t,{of:k}),`
`,e.jsx(a.h2,{id:"formatting-values",children:"Formatting values"}),`
`,e.jsxs(a.p,{children:[e.jsx(a.code,{children:"formatValue"})," formats the axis ticks, the tooltips and each bar's accessible name, e.g. currency. The axis ceiling is still computed from the raw values."]}),`
`,e.jsx(a.h2,{id:"colors",children:"Colors"}),`
`,e.jsxs(a.p,{children:["Bars default to the five-color ",e.jsx(a.code,{children:"--chart-1"}),"…",e.jsx(a.code,{children:"--chart-5"}),` palette (Figma's own "Charts/First"–"Charts/Fifth"), assigned by index — pass `,e.jsx(a.code,{children:"color"})," on a datum to override it."]}),`
`,e.jsx(a.h2,{id:"ticks-are-computed-not-literal",children:"Ticks are computed, not literal"}),`
`,e.jsxs(a.p,{children:["Figma's own grid rows show static ",e.jsx(a.code,{children:'"00"'})," placeholder text at each end. Here, every tick is a real value derived from ",e.jsx(a.code,{children:"data"}),"'s max — ",e.jsx(a.code,{children:"gridLineCount"})," (default 5) controls how many divisions, not what they say."]}),`
`,e.jsx(a.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:["The bars and grid are ",e.jsx(a.code,{children:"aria-hidden"})," — a bar chart's visual encoding doesn't have a meaningful DOM/AX fallback of its own; pair it with a visually-hidden data table or summary if the underlying data needs to reach assistive tech."]}),`
`,e.jsx(a.li,{children:"Legend and axis/category text render as real, readable text (not baked into an image), so zoom and text-scaling work normally."}),`
`]}),`
`,e.jsx(a.h2,{id:"props",children:"Props"}),`
`,e.jsxs(a.p,{children:["See the ",e.jsx(a.strong,{children:"Controls"})," table above for the full list, types, and defaults — generated automatically from the TypeScript types."]})]})}function Ie(s={}){const{wrapper:a}={...r(),...s.components};return a?e.jsx(a,{...s,children:e.jsx(n,{...s})}):n(s)}export{Ie as default};
