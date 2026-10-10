import{j as t}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as r}from"./index-DUy19JZU.js";import{c as s,P as a,b as l,C as e}from"./index-R-0gtsrS.js";import{L as p,W as c,a as m,P as d,N as h,b as x,I as j,S as u}from"./Label.stories-2_RoYIOr.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function n(o){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:p}),`
`,t.jsx(i.h1,{id:"label",children:"Label"}),`
`,t.jsx(i.p,{children:"A status tag/chip. Use it to show a discrete state — active, pending, failed, draft — next to or inside another element like a table row or card."}),`
`,t.jsx(a,{}),`
`,t.jsx(l,{}),`
`,t.jsx(i.h2,{id:"when-to-use",children:"When to use"}),`
`,t.jsxs(i.ul,{children:[`
`,t.jsxs(i.li,{children:["Tagging a state on a row, card, or list item (",t.jsx(i.code,{children:'"Active"'}),", ",t.jsx(i.code,{children:'"Pending"'}),", ",t.jsx(i.code,{children:'"Failed"'}),")."]}),`
`,t.jsxs(i.li,{children:["Categorizing content (a topic, a type) where ",t.jsx(i.code,{children:'status="neutral"'})," reads as a plain, unopinionated tag."]}),`
`]}),`
`,t.jsx(i.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,t.jsxs(i.ul,{children:[`
`,t.jsxs(i.li,{children:["For a live count — use ",t.jsx(i.code,{children:"<Badge>"})," instead, it's sized for a digit or two and supports a plain-dot mode."]}),`
`,t.jsx(i.li,{children:"As a clickable filter/toggle — Label isn't interactive. Build a button-like affordance instead if it needs to respond to clicks."}),`
`]}),`
`,t.jsx(i.h2,{id:"implementation",children:"Implementation"}),`
`,t.jsx(i.pre,{children:t.jsx(i.code,{className:"language-tsx",children:`import { Label } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<Label status="positive">Active</Label>
`})}),`
`,t.jsx(i.h3,{id:"with-an-icon",children:"With an icon"}),`
`,t.jsx(i.pre,{children:t.jsx(i.code,{className:"language-tsx",children:`import { Check } from "lucide-react";

<Label status="positive" leadingIcon={<Check size={16} />}>
  Verified
</Label>
`})}),`
`,t.jsx(e,{of:c}),`
`,t.jsx(i.h2,{id:"statuses",children:"Statuses"}),`
`,t.jsx(e,{of:m}),`
`,t.jsx(e,{of:d}),`
`,t.jsx(e,{of:h}),`
`,t.jsx(e,{of:x}),`
`,t.jsx(e,{of:j}),`
`,t.jsx(i.h2,{id:"sizes",children:"Sizes"}),`
`,t.jsx(e,{of:u}),`
`,t.jsx(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,t.jsxs(i.ul,{children:[`
`,t.jsxs(i.li,{children:["Renders a ",t.jsx(i.code,{children:"<span>"})," — it's presentational, not interactive or focusable."]}),`
`,t.jsxs(i.li,{children:["Label conveys status via color and text together, so unlike Badge it doesn't need an ",t.jsx(i.code,{children:"aria-label"})," fallback — the text content already describes the state."]}),`
`]}),`
`,t.jsx(i.h2,{id:"props",children:"Props"}),`
`,t.jsxs(i.p,{children:["See the ",t.jsx(i.strong,{children:"Controls"})," table above for the full list, types, and defaults — generated automatically from the TypeScript types."]})]})}function zt(o={}){const{wrapper:i}={...r(),...o.components};return i?t.jsx(i,{...o,children:t.jsx(n,{...o})}):n(o)}export{zt as default};
