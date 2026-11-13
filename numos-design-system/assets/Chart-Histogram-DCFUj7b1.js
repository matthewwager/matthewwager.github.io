import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as o}from"./index-DUy19JZU.js";import{d as a,P as r,c as l,C as i}from"./index-RBA69SJr.js";import{H as h,S as d,C as c,P as m,Q as p,D as u,F as x,W as j}from"./Chart-Histogram.stories-CJGqpNbm.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BVaJyDbk.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramCell-BVBcLmyd.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";import"./banknote-B6xn6vQX.js";import"./user-CssntHaa.js";function n(t){const s={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:h}),`
`,e.jsx(s.h1,{id:"histogramchart",children:"HistogramChart"}),`
`,e.jsx(s.p,{children:"A distribution drawn in stacked glyphs — icons or plain shapes. Give it the raw values (one per item: a salary, an invoice amount, days to pay) and it does the counting."}),`
`,e.jsx(r,{}),`
`,e.jsx(l,{}),`
`,e.jsx(s.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"The shape of a set of values: where they cluster, how spread out they are, whether there's a long tail or outliers."}),`
`,e.jsx(s.li,{children:"The value at a few percentiles — a pay band's 25th, median and 75th."}),`
`]}),`
`,e.jsx(s.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Comparing named categories (departments, vendors) — use ",e.jsx(s.code,{children:"<BarChart>"})," or ",e.jsx(s.code,{children:"<IconChart>"}),"; a histogram's axis is a continuous range of values, not a list of names."]}),`
`,e.jsx(s.li,{children:"A handful of values — under about 20, a histogram's shape is mostly noise; list them instead."}),`
`]}),`
`,e.jsx(s.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:'import { HistogramChart } from "@numosai/ui";\n\n<HistogramChart values={salaries} itemLabel="employees" formatValue={(v) => `$${v}K`} markers={["median"]} />\n'})}),`
`,e.jsx(s.h2,{id:"two-modes",children:"Two modes"}),`
`,e.jsxs(s.p,{children:[e.jsxs(s.strong,{children:["Counts (",e.jsx(s.code,{children:"bins"}),")"]})," — the true histogram. Each column is a range of values and its stack is how many values fall in it, so the stacks show the distribution's shape. Columns sit edge to edge and the axis is labeled at the bin edges, because the axis is continuous: a value of $59K and one of $61K are neighbors across an edge, not in unrelated categories."]}),`
`,e.jsxs(s.p,{children:[e.jsxs(s.strong,{children:["Values (",e.jsx(s.code,{children:"quantiles"}),")"]}),` — each column is the value at a percentile, labeled "25th", "Median" and so on. Binning by quantile would put the same number of values in every bin (that's what a quantile is), so every column would be the same height; plotting the values is what tells the story. The Figma "Labor Cost" chart is this mode.`]}),`
`,e.jsx(s.h2,{id:"binning",children:"Binning"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"bins"})," decides how values are grouped:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:'"auto"'})," (default) — equal-width bins on round edges, as many as the data suits: the Freedman–Diaconis rule (bin width 2 × IQR × n",e.jsx("sup",{children:"−1/3"}),"), which isn't thrown by outliers, kept to 5–20 bins. Equal widths are the default because they make heights directly comparable."]}),`
`,e.jsx(s.li,{children:"a number — that many equal-width bins, again on round edges."}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:'"std"'})," — bands one standard deviation wide either side of the mean, open-ended past ±2σ. The axis is labeled μ, ±1σ, ±2σ; tooltips give the actual values."]}),`
`,e.jsx(s.li,{children:"an array — custom edges, e.g. the company's pay bands. Values outside them count in the end bins rather than vanishing. Columns are as wide as their ranges, so the axis stays true when bins differ — but a wide bin holds more values just by being wide, so prefer even edges where you can."}),`
`]}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(s.h2,{id:"quantiles",children:"Quantiles"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"quantiles"})," switches to values: ",e.jsx(s.code,{children:'"quartiles"'})," (25/50/75), ",e.jsx(s.code,{children:'"quintiles"'})," (20/40/60/80), ",e.jsx(s.code,{children:'"deciles"'})," (10–90), or custom percentiles (0–100), interpolated between the nearest values. Use custom ones for the spread that matters, like ",e.jsx(s.code,{children:"[1, 25, 50, 75, 99]"}),"."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(s.h2,{id:"reference-markers",children:"Reference markers"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"markers"})," draws dashed lines over a count histogram: ",e.jsx(s.code,{children:'"mean"'}),", ",e.jsx(s.code,{children:'"median"'}),", and ",e.jsx(s.code,{children:'"std"'})," (±1σ and ±2σ either side of the mean). Mark the median for skewed data like pay, where a long tail pulls the mean away from the typical value; showing both makes the skew visible. Labels that would overlap step up a line."]}),`
`,e.jsx(s.h2,{id:"glyphs-and-units",children:"Glyphs and units"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"shape"})," (",e.jsx(s.code,{children:'"square"'})," or ",e.jsx(s.code,{children:'"circle"'}),", filled solid) or any lucide ",e.jsx(s.code,{children:"icon"}),"; ",e.jsx(s.code,{children:"iconSize"})," 16 or 24, and ",e.jsx(s.code,{children:"gap"})," between stacked glyphs (negative overlaps them, like a stack of notes)."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"fillWidth"})," stretches each shape across its bin: squares become bars and circles become pills, still stacked one per unit, so the columns read as solid bars built of units — the classic histogram silhouette, still countable. Bins sit 1px apart. It applies to shapes only; an icon keeps its own proportions."]}),`
`,e.jsx(i,{of:x}),`
`,e.jsxs(s.p,{children:["One glyph stands for ",e.jsx(s.code,{children:"unitValue"})," items (or, in quantile mode, an amount). By default it's a round number that keeps the tallest column to about 12 glyphs; the caption above says what one glyph is worth (",e.jsx(s.code,{children:"unitLabel"}),", from ",e.jsx(s.code,{children:"itemLabel"}),"). A remainder shows as a partial glyph on top, cropped to its share — so a bin with 2 items at 5 per glyph still shows, rather than rounding away to nothing."]}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(s.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(s.p,{children:["Each column is one focus stop with a role of ",e.jsx(s.code,{children:"img"}),', named by its range (or percentile) and count — "$60K – $70K: 25 employees (10%)" — and the glyphs inside are hidden from assistive tech, so a distribution of hundreds of items is still a handful of stops. Hovering or focusing a column shows the same in a tooltip and dims the others.']}),`
`,e.jsx(s.h2,{id:"props",children:"Props"}),`
`,e.jsxs(s.p,{children:["See the ",e.jsx(s.strong,{children:"Controls"})," table above for the full list, types, and defaults — generated automatically from the TypeScript types."]})]})}function He(t={}){const{wrapper:s}={...o(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(n,{...t})}):n(t)}export{He as default};
