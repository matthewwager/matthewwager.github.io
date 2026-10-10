import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as n}from"./index-DUy19JZU.js";import{c as r,P as c,b as a,C as t}from"./index-R-0gtsrS.js";import{B as l,b as d,P as m,N as p,c as h,a as x,C as j,E as u,S as g,I as f}from"./Badge.stories-C2Tdb0iO.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function s(o){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(i.h1,{id:"badge",children:"Badge"}),`
`,e.jsx(i.p,{children:"A small status or count indicator. Use it to surface a state (positive/negative/notice/info) or a number (unread count, item count) attached to another element."}),`
`,e.jsx(c,{}),`
`,e.jsx(a,{}),`
`,e.jsx(i.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Attaching a status to another element (a list item, a nav icon, a table row)."}),`
`,e.jsxs(i.li,{children:["Showing a count — ",e.jsx(i.code,{children:'size="md"'})," or ",e.jsx(i.code,{children:'"lg"'})," renders whatever you pass as ",e.jsx(i.code,{children:"children"}),"."]}),`
`,e.jsxs(i.li,{children:["Use ",e.jsx(i.code,{children:'status="complete"'})," / ",e.jsx(i.code,{children:'"error"'})," for a fixed check/x icon instead of a count — these always render their icon regardless of ",e.jsx(i.code,{children:"children"}),", and are always a fixed-size circle (",e.jsx(i.code,{children:"1.5rem"})," at ",e.jsx(i.code,{children:'size="lg"'}),", ",e.jsx(i.code,{children:"1rem"})," at ",e.jsx(i.code,{children:'size="md"'}),") rather than sized to content, since there's no text to size around. ",e.jsx(i.code,{children:'status="notice"'})," gets the same treatment, but only at ",e.jsx(i.code,{children:'size="md"'})," so far — at ",e.jsx(i.code,{children:'"lg"'})," it's still a plain-color pill like ",e.jsx(i.code,{children:"positive"}),"/",e.jsx(i.code,{children:"negative"}),"/",e.jsx(i.code,{children:"info"}),"."]}),`
`]}),`
`,e.jsx(i.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["As a standalone clickable element — Badge isn't interactive. Use ",e.jsx(i.code,{children:"<Button>"})," if it needs to respond to clicks."]}),`
`,e.jsx(i.li,{children:"For long text labels — Badge is sized for a digit or two, not a sentence."}),`
`]}),`
`,e.jsx(i.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import { Badge } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<Badge status="positive">3</Badge>
`})}),`
`,e.jsx(i.h3,{id:"as-a-plain-status-dot",children:"As a plain status dot"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<Badge status="negative" size="sm" />
`})}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:'size="sm"'})," never renders content — it's a plain dot, matching Figma's spec."]}),`
`,e.jsx(i.h2,{id:"statuses",children:"Statuses"}),`
`,e.jsx(t,{of:d}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(i.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsx(t,{of:g}),`
`,e.jsx(i.h3,{id:"completeerrornotice-have-their-own-icon-per-size",children:"Complete/error/notice have their own icon per size"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:'"lg"'})," (the original, default size) composites a plain check/x onto a solid-colored circle. ",e.jsx(i.code,{children:'"md"'})," (confirmed later) swaps in Lucide's own ",e.jsx(i.code,{children:"circle-check"}),"/",e.jsx(i.code,{children:"circle-x"}),"/",e.jsx(i.code,{children:"circle-alert"})," glyphs instead — at 16px, the icon's own drawn circle can just be the badge's edge, rather than compositing two circles. ",e.jsx(i.code,{children:'"notice"'})," only has a confirmed icon at ",e.jsx(i.code,{children:'"md"'}),"; at ",e.jsx(i.code,{children:'"lg"'})," it still renders as a plain-color pill, same as ",e.jsx(i.code,{children:"positive"}),"/",e.jsx(i.code,{children:"negative"}),"/",e.jsx(i.code,{children:"info"}),"."]}),`
`,e.jsx(t,{of:f}),`
`,e.jsx(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Renders a ",e.jsx(i.code,{children:"<span>"})," — it's presentational, not interactive or focusable."]}),`
`,e.jsxs(i.li,{children:["Badge conveys status via color alone. If the status is meaningful (not just decorative), pair it with visible text nearby or an ",e.jsx(i.code,{children:"aria-label"})," on the badge itself."]}),`
`]}),`
`,e.jsx(i.h2,{id:"props",children:"Props"}),`
`,e.jsxs(i.p,{children:["See the ",e.jsx(i.strong,{children:"Controls"})," table above for the full list, types, and defaults — generated automatically from the TypeScript types."]})]})}function Ie(o={}){const{wrapper:i}={...n(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(s,{...o})}):s(o)}export{Ie as default};
