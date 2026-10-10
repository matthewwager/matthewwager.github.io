import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as o}from"./index-DUy19JZU.js";import{c as s,P as a,b as l,C as r}from"./index-R-0gtsrS.js";import{C as d,D as h,G as c,L as m,S as p}from"./Chart-Bubble.stories-Dnd3Q9jY.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function n(t){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
`,e.jsx(i.h1,{id:"bubblechart",children:"BubbleChart"}),`
`,e.jsxs(i.p,{children:['A bubble chart — the same "Chart grid" building block as ',e.jsx(i.code,{children:"<BarChart>"}),"/",e.jsx(i.code,{children:"<LineChart>"})," (border-subtle gridlines, a border-emphasis baseline, Paragraph XS Regular / content-placeholder throughout), except both axes are numeric here: the baseline shows the x-axis's own 0/max instead of category labels. Figma's own bubbles are 5 flattened SVG images at fixed positions, not real x/y/size data, so the layout here is computed from ",e.jsx(i.code,{children:"data"}),"'s real values."]}),`
`,e.jsx(a,{}),`
`,e.jsx(l,{}),`
`,e.jsx(i.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Comparing three numeric dimensions at once — two axes plus a size encoding — like reach vs. engagement vs. spend across campaigns."}),`
`]}),`
`,e.jsx(i.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Only two dimensions — use ",e.jsx(i.code,{children:"<LineChart>"})," or ",e.jsx(i.code,{children:"<BarChart>"})," instead; a bubble chart's size encoding adds nothing without a real third variable."]}),`
`,e.jsxs(i.li,{children:["Precise value comparison — bubble area is naturally harder to compare exactly than bar length; use ",e.jsx(i.code,{children:"<BarChart>"})," when the numbers themselves matter more than the overall shape of the data."]}),`
`]}),`
`,e.jsx(i.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import { BubbleChart } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<BubbleChart
  data={[
    { label: "First", x: 78, y: 82, size: 58 },
    { label: "Second", x: 43, y: 88, size: 34 },
    { label: "Third", x: 47, y: 28, size: 44 },
    { label: "Fourth", x: 50, y: 92, size: 22 },
    { label: "Fifth", x: 62, y: 32, size: 24 },
  ]}
/>
`})}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(i.h2,{id:"bubbles-default-to-50-opacity",children:"Bubbles default to 50% opacity"}),`
`,e.jsxs(i.p,{children:["Unlike Bar/Line/Donut (fully opaque by default, dimmed on hover), bubbles start at their ",e.jsx(i.code,{children:"chartColorMuted"})," (50%) fill — the same convention ",e.jsx(i.code,{children:"<SankeyChart>"})," uses for its ribbons — so overlapping bubbles stay legible. Hovering (or focusing) one brings it to full color and shows its x/y/size in a tooltip; a full-color border keeps every bubble's outline visible even at rest."]}),`
`,e.jsx(i.h2,{id:"independent-visibility-controls",children:"Independent visibility controls"}),`
`,e.jsx(i.p,{children:"Legend and grid lines (with their axis tick values) are two separate booleans — same convention as the other chart types."}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(i.h2,{id:"bubble-size-range",children:"Bubble size range"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"minDiameter"}),"/",e.jsx(i.code,{children:"maxDiameter"})," (default 16/64px) set the px range ",e.jsx(i.code,{children:"size"})," is scaled into — the smallest value in ",e.jsx(i.code,{children:"data"})," renders at ",e.jsx(i.code,{children:"minDiameter"}),", the largest at ",e.jsx(i.code,{children:"maxDiameter"}),"."]}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(i.h2,{id:"colors",children:"Colors"}),`
`,e.jsxs(i.p,{children:["Bubbles default to the five-color ",e.jsx(i.code,{children:"--chart-1"}),"…",e.jsx(i.code,{children:"--chart-5"})," palette assigned by index — pass ",e.jsx(i.code,{children:"color"})," on a datum to override it."]}),`
`,e.jsx(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Each bubble is ",e.jsx(i.code,{children:"tabIndex"}),"-focusable with an ",e.jsx(i.code,{children:"aria-label"})," describing its x/y/size — pair with a visually-hidden data table if the underlying data needs a non-visual equivalent beyond that summary."]}),`
`,e.jsx(i.li,{children:"Legend and axis text render as real, readable text."}),`
`]}),`
`,e.jsx(i.h2,{id:"props",children:"Props"}),`
`,e.jsxs(i.p,{children:["See the ",e.jsx(i.strong,{children:"Controls"})," table above for the full list, types, and defaults — generated automatically from the TypeScript types."]})]})}function Be(t={}){const{wrapper:i}={...o(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(n,{...t})}):n(t)}export{Be as default};
