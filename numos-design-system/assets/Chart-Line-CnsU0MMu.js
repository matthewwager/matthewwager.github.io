import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as o}from"./index-DUy19JZU.js";import{c as s,P as a,b as l,C as t}from"./index-R-0gtsrS.js";import{a as d,D as c,S as m,G as p,L as h}from"./Chart-Line.stories-BN-dCdRx.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function n(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
`,e.jsx(i.h1,{id:"linechart",children:"LineChart"}),`
`,e.jsxs(i.p,{children:["A multi-series line chart — the same grid/baseline/legend treatment as ",e.jsx(i.code,{children:'<BarChart orientation="vertical">'}),`, confirmed identical in Figma. Figma's own "Fever Line" instance is a single flattened illustration, not real coordinate data, so this is a genuine renderer built from `,e.jsx(i.code,{children:"series"}),", not a reproduction of that image."]}),`
`,e.jsx(a,{}),`
`,e.jsx(l,{}),`
`,e.jsx(i.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"A trend over an ordered sequence — time, steps, cohorts — especially comparing several series against the same categories."}),`
`]}),`
`,e.jsx(i.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["A handful of unordered categories with no inherent sequence — use ",e.jsx(i.code,{children:"<BarChart>"}),"."]}),`
`,e.jsxs(i.li,{children:["Part-to-whole composition of a single total — use ",e.jsx(i.code,{children:"<DonutChart>"}),"."]}),`
`]}),`
`,e.jsx(i.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import { LineChart } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<LineChart
  categories={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]}
  series={[
    { label: "Revenue", values: [40, 55, 48, 62, 70, 66] },
    { label: "Expenses", values: [30, 32, 38, 35, 42, 40] },
  ]}
/>
`})}),`
`,e.jsx(t,{of:c}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"series"})," is any length — one line, or several sharing the same ",e.jsx(i.code,{children:"categories"}),":"]}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(i.h2,{id:"independent-visibility-controls",children:"Independent visibility controls"}),`
`,e.jsxs(i.p,{children:["Legend, grid lines (with their axis tick values), and category labels are three separate booleans — same convention as ",e.jsx(i.code,{children:"<BarChart>"}),"."]}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(i.h2,{id:"colors",children:"Colors"}),`
`,e.jsxs(i.p,{children:["Each series defaults to the five-color ",e.jsx(i.code,{children:"--chart-1"}),"…",e.jsx(i.code,{children:"--chart-5"})," palette assigned by index — pass ",e.jsx(i.code,{children:"color"})," on a series to override it."]}),`
`,e.jsx(i.h2,{id:"ticks-are-computed-not-literal",children:"Ticks are computed, not literal"}),`
`,e.jsxs(i.p,{children:["Every axis tick is a real value derived from the max across all series' ",e.jsx(i.code,{children:"values"})," — ",e.jsx(i.code,{children:"gridLineCount"})," (default 5) controls how many divisions."]}),`
`,e.jsx(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["The plotted lines are ",e.jsx(i.code,{children:"aria-hidden"})," — pair with a visually-hidden data table or summary if the underlying data needs to reach assistive tech."]}),`
`,e.jsx(i.li,{children:"Legend and axis/category text render as real, readable text."}),`
`]}),`
`,e.jsx(i.h2,{id:"props",children:"Props"}),`
`,e.jsxs(i.p,{children:["See the ",e.jsx(i.strong,{children:"Controls"})," table above for the full list, types, and defaults — generated automatically from the TypeScript types."]})]})}function Me(r={}){const{wrapper:i}={...o(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(n,{...r})}):n(r)}export{Me as default};
