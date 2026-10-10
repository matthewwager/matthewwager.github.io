import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as n}from"./index-DUy19JZU.js";import{c as t,P as a,b as d,C as s}from"./index-R-0gtsrS.js";import{C as l,N as c,P as h,F as m,A as x,S as p,a as j,W as g}from"./Chart-Gauge.stories-D-Nk2P45.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function o(r){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:l}),`
`,e.jsx(i.h1,{id:"gaugechart",children:"GaugeChart"}),`
`,e.jsxs(i.p,{children:["A half-donut reading with a needle — matches Figma's ChartGage exactly. ",e.jsx(i.code,{children:"mode"})," picks between two kinds of coloring, identical logic to ",e.jsx(i.code,{children:"<ProgressBar>"}),":"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Scaled"})," (",e.jsx(i.code,{children:'"negative-to-positive"'})," or ",e.jsx(i.code,{children:'"positive-to-negative"'}),") — the fill color is driven by ",e.jsx(i.code,{children:"value"})," itself, the same red/yellow/green bands ",e.jsx(i.code,{children:"<ProgressBar>"})," uses."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Fixed"})," (",e.jsx(i.code,{children:'"info"'})," / ",e.jsx(i.code,{children:'"positive"'})," / ",e.jsx(i.code,{children:'"notice"'})," / ",e.jsx(i.code,{children:'"negative"'}),") — one color, ignoring ",e.jsx(i.code,{children:"value"})," entirely."]}),`
`]}),`
`,e.jsx(a,{}),`
`,e.jsx(d,{}),`
`,e.jsx(i.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsxs(i.strong,{children:["Scaled, ",e.jsx(i.code,{children:'"negative-to-positive"'})]})," (the default): higher is better — a health score, capacity remaining, a quality rating."]}),`
`,e.jsxs(i.li,{children:[e.jsxs(i.strong,{children:["Scaled, ",e.jsx(i.code,{children:'"positive-to-negative"'})]}),": higher is worse — error rate, risk score, load nearing a limit. Same bands, inverted, so a high reading still reads as alarming."]}),`
`,e.jsxs(i.li,{children:[e.jsxs(i.strong,{children:["Fixed, ",e.jsx(i.code,{children:'"info"'})]}),`: a plain "here's the current reading, no judgment" gauge — a signal strength, a thermostat — where the number isn't good or bad, just what it is.`]}),`
`,e.jsxs(i.li,{children:[e.jsxs(i.strong,{children:["Fixed, ",e.jsx(i.code,{children:'"positive"'})," / ",e.jsx(i.code,{children:'"notice"'})," / ",e.jsx(i.code,{children:'"negative"'})]}),": force a color a scaled mode would otherwise choose automatically."]}),`
`,e.jsxs(i.li,{children:["Reach for this over ",e.jsx(i.code,{children:"<ProgressBar>"})," when the reading benefits from an at-a-glance needle position (a dashboard, a single headline metric) rather than a linear fill — for anything read left-to-right in a list or table, ",e.jsx(i.code,{children:"<ProgressBar>"})," is the simpler, more compact choice."]}),`
`]}),`
`,e.jsx(i.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["An indeterminate/unknown-duration loading state — this component always needs a ",e.jsx(i.code,{children:"value"}),"; use a spinner instead."]}),`
`,e.jsxs(i.li,{children:["A list of several readings — a column of ",e.jsx(i.code,{children:"<ProgressBar>"}),"s is far more compact than a row of gauges."]}),`
`]}),`
`,e.jsx(i.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import { GaugeChart } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<GaugeChart value={75} label="CPU usage" />
`})}),`
`,e.jsx(i.h3,{id:"scaled-negative--positive-default",children:"Scaled: negative → positive (default)"}),`
`,e.jsx(i.p,{children:"Higher is better. Red below 34%, yellow below 67%, green at 67%+."}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(i.h3,{id:"scaled-positive--negative",children:"Scaled: positive → negative"}),`
`,e.jsx(i.p,{children:"Higher is worse. Same bands, inverted."}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<GaugeChart mode="positive-to-negative" value={80} label="Error rate" />
`})}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(i.h3,{id:"fixed-color-non-graded",children:"Fixed color (non-graded)"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<GaugeChart mode="info" value={40} label="Signal" />
`})}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(i.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"size"})," (",e.jsx(i.code,{children:'"xs" | "sm" | "md" | "xl"'}),", defaults to ",e.jsx(i.code,{children:'"xl"'}),") matches Figma's three sizes plus an extra ",e.jsx(i.code,{children:'"xs"'}),` step below Figma's own smallest. Figma's own "sm" is a bare colored arc with no needle or readout — illustrated too small in the design file to fit one legibly, not a separate non-functional mode. `,e.jsx(i.code,{children:"showValue"})," (identical concept to ",e.jsx(i.code,{children:"<ProgressBar>"}),"'s own prop) defaults to ",e.jsx(i.code,{children:"false"})," at ",e.jsx(i.code,{children:'"sm"'}),"/",e.jsx(i.code,{children:'"xs"'})," to match that look; every size is the same real, value-driven gauge underneath, so pass ",e.jsx(i.code,{children:"showValue"})," explicitly to override either way."]}),`
`,e.jsxs(i.p,{children:["The value's own font size steps down the same type ramp one size per size step below ",e.jsx(i.code,{children:'"xl"'}),' — Figma only specifies "Heading 2XL" at its one fully-detailed size, which is too large once the gauge (and its hollow interior) gets proportionally smaller: ',e.jsx(i.code,{children:'"xl"'})," stays Heading 2XL, ",e.jsx(i.code,{children:'"md"'})," drops to Heading XL, ",e.jsx(i.code,{children:'"sm"'})," to Heading L, ",e.jsx(i.code,{children:'"xs"'})," to Heading M. The caption stays Heading XS throughout, matching Figma's own fixed choice for it."]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(i.h3,{id:"without-value-or-label",children:"Without value or label"}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(i.h2,{id:"a-renamed-status",children:"A renamed status"}),`
`,e.jsxs(i.p,{children:[`Figma's fourth status is called "Neutral" here — confirmed via `,e.jsx(i.code,{children:"get_variable_defs"})," to fill with the exact same ",e.jsx(i.code,{children:"--background-brand-base"})," token ",e.jsx(i.code,{children:"<ProgressBar>"})," already calls ",e.jsx(i.code,{children:'"info"'}),". Renamed to ",e.jsx(i.code,{children:'"info"'})," for the same reason ",e.jsx(i.code,{children:"<IconButton>"}),` renamed Figma's "Tertiary" to `,e.jsx(i.code,{children:'"secondary"'}),": it's the identical color and concept ",e.jsx(i.code,{children:"<ProgressBar>"})," already has a name for, and Figma's own label here would just be a second name for the same thing."]}),`
`,e.jsx(i.h2,{id:"colors",children:"Colors"}),`
`,e.jsxs(i.p,{children:[`| Status | Fill |
|---|---|
| `,e.jsx(i.code,{children:"positive"})," | ",e.jsx(i.code,{children:"--background-positive-base"}),` |
| `,e.jsx(i.code,{children:"notice"})," | ",e.jsx(i.code,{children:"--background-notice-base"}),` |
| `,e.jsx(i.code,{children:"negative"})," | ",e.jsx(i.code,{children:"--background-negative-base"}),` |
| `,e.jsx(i.code,{children:"info"})," | ",e.jsx(i.code,{children:"--background-brand-base"})," |"]}),`
`,e.jsxs(i.p,{children:["Track, needle, and readout are fixed regardless of status: ",e.jsx(i.code,{children:"--background-element"})," track, ",e.jsx(i.code,{children:"--content-emphasis"})," needle/pivot/value, ",e.jsx(i.code,{children:"--content-subtle"}),` caption (Figma's own "Content/Subdued" — the same naming variant already seen on `,e.jsx(i.code,{children:"<Card>"}),`'s "Border/Subdued").`]}),`
`,e.jsx(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Renders ",e.jsx(i.code,{children:'role="meter"'})," with ",e.jsx(i.code,{children:"aria-valuenow"}),"/",e.jsx(i.code,{children:"aria-valuemin"}),"/",e.jsx(i.code,{children:"aria-valuemax"})," set automatically from ",e.jsx(i.code,{children:"value"})," — the ARIA analog of ",e.jsx(i.code,{children:"<ProgressBar>"}),"'s ",e.jsx(i.code,{children:'role="progressbar"'}),", since a gauge is a static reading rather than an in-progress task."]}),`
`,e.jsxs(i.li,{children:["When ",e.jsx(i.code,{children:"label"})," is set, it's wired as the gauge's accessible name via ",e.jsx(i.code,{children:"aria-labelledby"})," (a generated id) — no extra markup needed, same as ",e.jsx(i.code,{children:"<ProgressBar>"}),"."]}),`
`]}),`
`,e.jsx(i.h2,{id:"props",children:"Props"}),`
`,e.jsxs(i.p,{children:["See the ",e.jsx(i.strong,{children:"Controls"})," table above for the full list, types, and defaults — generated automatically from the TypeScript types."]})]})}function Be(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(o,{...r})}):o(r)}export{Be as default};
