import{j as t}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as e}from"./index-DUy19JZU.js";import{c as s,C as r}from"./index-R-0gtsrS.js";import{B as p,D as m,V as a,T as c}from"./ButtonGroup.stories-BmS_hOPq.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...e(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:p}),`
`,t.jsx(o.h1,{id:"buttongroup",children:"ButtonGroup"}),`
`,t.jsxs(o.p,{children:["A wrapper for multiple, related buttons. It's a layout primitive around real ",t.jsx(o.code,{children:"<Button>"})," instances — not a styled component of its own — so it composes with any ",t.jsx(o.code,{children:"variant"}),"/",t.jsx(o.code,{children:"size"})," combination."]}),`
`,t.jsx(o.h2,{id:"when-to-use",children:"When to use"}),`
`,t.jsxs(o.ul,{children:[`
`,t.jsxs(o.li,{children:["A row (or stack) of related actions that belong together — most commonly a form's Cancel/Submit pair, in ",t.jsx(o.code,{children:"<FormFooter>"}),"."]}),`
`]}),`
`,t.jsx(o.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,t.jsxs(o.ul,{children:[`
`,t.jsxs(o.li,{children:["For unrelated actions scattered around a layout — just place ",t.jsx(o.code,{children:"<Button>"}),"s directly; grouping implies they belong together."]}),`
`,t.jsxs(o.li,{children:["For a single-choice toggle between options — use ",t.jsx(o.code,{children:"<SegmentedControl>"}),"."]}),`
`]}),`
`,t.jsx(o.h2,{id:"implementation",children:"Implementation"}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-tsx",children:`import { Button, ButtonGroup } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<ButtonGroup>
  <Button variant="secondary">Cancel</Button>
  <Button variant="primary">Submit</Button>
</ButtonGroup>
`})}),`
`,t.jsx(r,{of:m}),`
`,t.jsx(o.h2,{id:"orientation",children:"Orientation"}),`
`,t.jsxs(o.p,{children:[t.jsx(o.code,{children:'orientation="vertical"'}),` (Figma's "Block") stacks the buttons and stretches each to the group's full width, instead of sitting side by side at their natural size.`]}),`
`,t.jsx(r,{of:a}),`
`,t.jsx(o.h2,{id:"more-than-two",children:"More than two"}),`
`,t.jsx(o.p,{children:"Not limited to a Cancel/Submit pair — any number of related buttons, any variants:"}),`
`,t.jsx(r,{of:c}),`
`,t.jsx(o.h2,{id:"props",children:"Props"}),`
`,t.jsxs(o.p,{children:[t.jsx(o.code,{children:"orientation"}),", plus any native ",t.jsx(o.code,{children:"<div>"})," prop."]})]})}function wt(i={}){const{wrapper:o}={...e(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(n,{...i})}):n(i)}export{wt as default};
