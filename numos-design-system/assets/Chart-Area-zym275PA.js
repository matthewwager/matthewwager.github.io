import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as i}from"./index-DUy19JZU.js";import{c as s,P as a,b as h,C as n}from"./index-R-0gtsrS.js";import{C as l,D as d,b as c,a as p,T as m,F as u}from"./Chart-Area.stories-CPA9YIm7.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function o(r){const t={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:l}),`
`,e.jsx(t.h1,{id:"areachart",children:"AreaChart"}),`
`,e.jsx(t.p,{children:`A single trend line with an area fill and a continuous hover readout — matches Figma's ChartLineHover exactly (renamed: "area chart" is what this pattern is universally called — a revenue graph, a stock chart — and Figma's own name describes the interaction, not the chart type).`}),`
`,e.jsx(a,{}),`
`,e.jsx(h,{}),`
`,e.jsx(t.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"A single metric changing over time where the shape of the trend matters as much as any individual value — revenue, active users, a stock price."}),`
`,e.jsx(t.li,{children:'You want a big, prominent "current value" readout up top that updates as the user explores history by hovering, the way Apple Stocks or a brokerage app does.'}),`
`]}),`
`,e.jsx(t.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["More than one series — use ",e.jsx(t.code,{children:"<LineChart>"}),", which supports multiple series with a legend, though its own hover only responds to discrete per-point dot targets rather than tracking the pointer continuously."]}),`
`,e.jsxs(t.li,{children:["Categorical (non-time-series) data — ",e.jsx(t.code,{children:"<BarChart>"})," or ",e.jsx(t.code,{children:"<LineChart>"})," fit a fixed set of named categories better than a continuous date axis."]}),`
`]}),`
`,e.jsx(t.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { AreaChart } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<AreaChart
  data={[
    { date: new Date("2026-01-01"), value: 62000 },
    { date: new Date("2026-01-02"), value: 78000 },
    // …
  ]}
/>
`})}),`
`,e.jsx(t.p,{children:"Move the pointer across the chart below — it's real and live, not a screenshot."}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(t.h2,{id:"continuous-hover-not-discrete-dots",children:"Continuous hover, not discrete dots"}),`
`,e.jsxs(t.p,{children:["This is the key difference from ",e.jsx(t.code,{children:"<LineChart>"}),"'s own hover, which only responds to its own small per-point dot targets. Here, the ",e.jsx(t.em,{children:"entire plot area"}),` tracks the pointer continuously and snaps to whichever data point is nearest — no small hit target required, the same interaction real stock-chart apps use. At rest, the header shows the last point's value and the footer shows the full date range (the "dateline"); while hovering, both switch to the hovered point's own value and date, floating near the crosshair.`]}),`
`,e.jsx(t.h2,{id:"formatting",children:"Formatting"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"formatValue"}),", ",e.jsx(t.code,{children:"formatDate"})," (the single centered date shown while hovering), and ",e.jsx(t.code,{children:"formatRangeDate"}),` (the start/end dates shown at rest) all default to plain, unstyled output — Figma's own "$123,456" is one example value, not a hardcoded currency format:`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:"<AreaChart data={data} formatValue={(value) => `$${value.toLocaleString()}`} />\n"})}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(t.h2,{id:"colors",children:"Colors"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"color"})," (the line) and ",e.jsx(t.code,{children:"fillColor"})," (the area beneath it) are two independent props — confirmed as genuinely distinct tokens in Figma, not one derived from the other — defaulting to ",e.jsx(t.code,{children:"--background-brand-base"})," and ",e.jsx(t.code,{children:"--background-brand-subdued"}),"."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(t.h2,{id:"sizing",children:"Sizing"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"height"})," sets the plot's px height; width always fills the parent."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(t.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Hover"}),": moving the pointer anywhere over the plot continuously updates the crosshair, dot, value, and date to the nearest data point. Leaving the plot reverts to the at-rest state (last value, full date range)."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Keyboard"}),": the plot is focusable; Left/Right move one point at a time, Home/End jump to the first/last point, and losing focus reverts to the at-rest state — the same underlying hover state, just driven by focus instead of the pointer."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Not handled yet"}),": no pinch-to-zoom or range selection — this is a read-only trend view, not a full charting/analysis widget."]}),`
`]}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["The root is ",e.jsx(t.code,{children:'role="group"'})," with an ",e.jsx(t.code,{children:"aria-label"})," you provide — describe what the data ",e.jsx(t.em,{children:"is"}),' ("Revenue over the last 31 days"), not the word "chart."']}),`
`,e.jsxs(t.li,{children:["The value and date readouts are ",e.jsx(t.code,{children:'aria-live="polite"'}),", so keyboard/screen-reader users exploring via Left/Right hear each point's value and date as they move."]}),`
`,e.jsx(t.li,{children:"The plot itself is keyboard-focusable (see Behavior above) rather than requiring a pointer."}),`
`]}),`
`,e.jsx(t.h2,{id:"props",children:"Props"}),`
`,e.jsxs(t.p,{children:["See the ",e.jsx(t.strong,{children:"Controls"})," table above for the full list, types, and defaults — generated automatically from the TypeScript types."]})]})}function De(r={}){const{wrapper:t}={...i(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(o,{...r})}):o(r)}export{De as default};
