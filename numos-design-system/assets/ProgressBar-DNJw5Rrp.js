import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as o}from"./index-DUy19JZU.js";import{c as t,P as a,b as l,C as i}from"./index-R-0gtsrS.js";import{a as d,N as c,P as h,F as p,A as m,I as x,S as j,b as g,c as u,d as v,W as f}from"./ProgressBar.stories-S-pPvcbD.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function r(n){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:d}),`
`,e.jsx(s.h1,{id:"progressbar",children:"ProgressBar"}),`
`,e.jsxs(s.p,{children:["A completion meter. ",e.jsx(s.code,{children:"mode"})," picks between two kinds of coloring:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Scaled"})," (",e.jsx(s.code,{children:'"negative-to-positive"'})," or ",e.jsx(s.code,{children:'"positive-to-negative"'}),") — the fill color is driven by ",e.jsx(s.code,{children:"value"}),` itself. This is a deliberate read of Figma's own component: its 25/50/75% samples are red/yellow/green, not one fixed color, so this reads as "how healthy/complete is this" rather than "how far along is this download."`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Fixed"})," (",e.jsx(s.code,{children:'"info"'})," / ",e.jsx(s.code,{children:'"positive"'})," / ",e.jsx(s.code,{children:'"notice"'})," / ",e.jsx(s.code,{children:'"negative"'}),") — one color, ignoring ",e.jsx(s.code,{children:"value"})," entirely."]}),`
`]}),`
`,e.jsxs(s.p,{children:["Or pass ",e.jsx(s.code,{children:"segments"})," instead of ",e.jsx(s.code,{children:"value"})," to split the bar into several colored parts — see ",e.jsx(s.a,{href:"#segmented",children:"Segmented"}),"."]}),`
`,e.jsx(a,{}),`
`,e.jsx(l,{}),`
`,e.jsx(s.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsxs(s.strong,{children:["Scaled, ",e.jsx(s.code,{children:'"negative-to-positive"'})]})," (the default): higher is better — profile completion, a health/quality score."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsxs(s.strong,{children:["Scaled, ",e.jsx(s.code,{children:'"positive-to-negative"'})]}),`: higher is worse — error rate, risk score, storage usage nearing a limit. Same red/yellow/green bands as the default, just inverted, so a high number still reads as alarming rather than accidentally looking "good" because it's mostly filled.`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsxs(s.strong,{children:["Fixed, ",e.jsx(s.code,{children:'"info"'})]}),`: a plain "in progress, no judgment" indicator — a file upload, a multi-step wizard — where the percentage isn't good or bad, just how far along it is.`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsxs(s.strong,{children:["Fixed, ",e.jsx(s.code,{children:'"positive"'})," / ",e.jsx(s.code,{children:'"notice"'})," / ",e.jsx(s.code,{children:'"negative"'})]}),": force a color a scaled mode would otherwise choose automatically — e.g. always showing red for a specific known-bad state regardless of the exact percentage."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Segmented"})," (",e.jsx(s.code,{children:"segments"}),"): a breakdown of one whole into parts — tasks by status, invoices by payment state — where each part's share matters, not just the overall total."]}),`
`]}),`
`]}),`
`,e.jsx(s.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["An indeterminate/unknown-duration loading state — this component always needs a ",e.jsx(s.code,{children:"value"}),"; use a spinner instead."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Segmented"}),", more than ~5 parts or parts that need exact comparison — the values row gets crowded and thin slivers are hard to hover; use a DonutChart or a bar chart instead."]}),`
`]}),`
`,e.jsx(s.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { ProgressBar } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<ProgressBar value={75} label="Profile completion" />
`})}),`
`,e.jsx(s.h3,{id:"scaled-negative--positive-default",children:"Scaled: negative → positive (default)"}),`
`,e.jsx(s.p,{children:"Higher is better. Red below 34%, yellow below 67%, green at 67%+."}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(s.h3,{id:"scaled-positive--negative",children:"Scaled: positive → negative"}),`
`,e.jsx(s.p,{children:"Higher is worse. Same bands, inverted."}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<ProgressBar mode="positive-to-negative" value={80} label="Error rate" />
`})}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(s.h3,{id:"fixed-color-non-graded",children:"Fixed color (non-graded)"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<ProgressBar mode="info" value={40} label="Uploading…" />
`})}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(s.h3,{id:"inline",children:"Inline"}),`
`,e.jsx(s.p,{children:"Label, bar, and value in one row instead of stacked."}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(s.h3,{id:"segmented",children:"Segmented"}),`
`,e.jsxs(s.p,{children:["Pass ",e.jsx(s.code,{children:"segments"})," instead of ",e.jsx(s.code,{children:"value"}),". Each segment has a ",e.jsx(s.code,{children:"value"})," (its share, 0–100), a ",e.jsx(s.code,{children:"status"})," (its color), and a ",e.jsx(s.code,{children:"label"}),". Segments are laid out left to right in order. Each value is shown in the header in its segment's color, and hovering a segment shows its ",e.jsx(s.code,{children:"label"})," in a tooltip tinted to match. If the total is under 100 the rest of the track stays empty; past 100, later segments are cut off. ",e.jsx(s.code,{children:"mode"})," is ignored."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<ProgressBar
  label="Status"
  segments={[
    { value: 9, status: "negative", label: "Blocked" },
    { value: 13, status: "info", label: "In progress" },
    { value: 25, status: "notice", label: "In review" },
    { value: 25, status: "positive", label: "Done" },
  ]}
/>
`})}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(s.p,{children:"Totaling 100, with no empty track:"}),`
`,e.jsx(i,{of:g}),`
`,e.jsxs(s.p,{children:["Also works with ",e.jsx(s.code,{children:"inline"}),":"]}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(s.h3,{id:"without-value-or-label",children:"Without value or label"}),`
`,e.jsx(i,{of:v}),`
`,e.jsx(i,{of:f}),`
`,e.jsx(s.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Renders ",e.jsx(s.code,{children:'role="progressbar"'})," with ",e.jsx(s.code,{children:"aria-valuenow"}),"/",e.jsx(s.code,{children:"aria-valuemin"}),"/",e.jsx(s.code,{children:"aria-valuemax"})," set automatically from ",e.jsx(s.code,{children:"value"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Segmented:"})," ",e.jsx(s.code,{children:"aria-valuenow"})," is the segments' total, and ",e.jsx(s.code,{children:"aria-valuetext"}),' lists each part (e.g. "Blocked 9%, In progress 13%, …"), so screen reader users get the full breakdown without needing to hover each segment.']}),`
`,e.jsxs(s.li,{children:["When ",e.jsx(s.code,{children:"label"})," is set, it's automatically wired as the progressbar's accessible name via ",e.jsx(s.code,{children:"aria-labelledby"})," (using a generated id) — no extra markup needed on your end."]}),`
`]}),`
`,e.jsx(s.h2,{id:"props",children:"Props"}),`
`,e.jsxs(s.p,{children:["See the ",e.jsx(s.strong,{children:"Controls"})," table above for the full list, types, and defaults — generated automatically from the TypeScript types."]})]})}function We(n={}){const{wrapper:s}={...o(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{We as default};
