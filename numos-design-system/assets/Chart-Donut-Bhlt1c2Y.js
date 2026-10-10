import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as n}from"./index-DUy19JZU.js";import{c as s,P as a,b as l,C as i}from"./index-R-0gtsrS.js";import{b as d,D as m,C as c,a as h,L as p}from"./Chart-Donut.stories-Cw2lx8eJ.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function o(r){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
`,e.jsx(t.h1,{id:"donutchart",children:"DonutChart"}),`
`,e.jsxs(t.p,{children:["A donut chart — matches Figma's colors, center-text typography (Heading 2XL value / Heading XS label), and side-positioned vertical legend exactly. Figma's own ring is 5 flattened SVG vector fragments, not real arc data, so the arcs here are computed from ",e.jsx(t.code,{children:"data"}),"'s real value proportions via ",e.jsx(t.code,{children:"stroke-dasharray"}),"."]}),`
`,e.jsx(a,{}),`
`,e.jsx(l,{}),`
`,e.jsx(t.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Part-to-whole composition of a single total, with 2–5 segments — a share of revenue by product line, a status breakdown."}),`
`]}),`
`,e.jsx(t.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["More than a handful of segments — thin slices become unreadable; use ",e.jsx(t.code,{children:"<BarChart>"})," instead once there are more than ~5–6 categories."]}),`
`,e.jsxs(t.li,{children:["Comparing magnitudes, not proportions of one whole — use ",e.jsx(t.code,{children:"<BarChart>"}),"."]}),`
`]}),`
`,e.jsx(t.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { DonutChart } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<DonutChart
  data={[
    { label: "First", value: 38 },
    { label: "Second", value: 27 },
    { label: "Third", value: 18 },
    { label: "Fourth", value: 11 },
    { label: "Fifth", value: 6 },
  ]}
  centerLabel="Total"
/>
`})}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(t.h2,{id:"a-genuinely-different-legend-layout",children:"A genuinely different legend layout"}),`
`,e.jsx(t.p,{children:"Unlike bar/line/sankey's horizontal-wrap legend below the chart, the donut's legend is a narrow vertical stack beside the ring — confirmed from Figma as a deliberate, different layout for this chart type, not an oversight to unify."}),`
`,e.jsx(t.h2,{id:"center-text",children:"Center text"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"centerValue"})," defaults to the sum of ",e.jsx(t.code,{children:"data"}),"'s values; ",e.jsx(t.code,{children:"centerLabel"})," is optional — omit it for just the number. Toggle both off at once with ",e.jsx(t.code,{children:"showCenterLabel"}),"."]}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(t.h2,{id:"legend-visibility",children:"Legend visibility"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(t.h2,{id:"colors",children:"Colors"}),`
`,e.jsxs(t.p,{children:["Segments default to the five-color ",e.jsx(t.code,{children:"--chart-1"}),"…",e.jsx(t.code,{children:"--chart-5"})," palette assigned by index — pass ",e.jsx(t.code,{children:"color"})," on a datum to override it."]}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"The ring is decorative markup with no accessible fallback of its own; pair with a visually-hidden data table or summary if the underlying data needs to reach assistive tech."}),`
`,e.jsx(t.li,{children:"Center value/label and legend text render as real, readable text."}),`
`]}),`
`,e.jsx(t.h2,{id:"props",children:"Props"}),`
`,e.jsxs(t.p,{children:["See the ",e.jsx(t.strong,{children:"Controls"})," table above for the full list, types, and defaults — generated automatically from the TypeScript types."]})]})}function Le(r={}){const{wrapper:t}={...n(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(o,{...r})}):o(r)}export{Le as default};
