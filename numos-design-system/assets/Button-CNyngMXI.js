import{j as i}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as r}from"./index-DUy19JZU.js";import{c as s,P as a,b as c,C as n}from"./index-R-0gtsrS.js";import{B as l,W as m,P as d,S as p,A as h,D as x,L as j,a as u}from"./Button.stories-DgjapCLc.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";import"./download-B-7_ipn_.js";import"./arrow-right-CSI71RkN.js";import"./save-Cc8TSHU4.js";function t(o){const e={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...o.components};return i.jsxs(i.Fragment,{children:[i.jsx(s,{of:l}),`
`,i.jsx(e.h1,{id:"button",children:"Button"}),`
`,i.jsxs(e.p,{children:["The primary affordance for user actions. Use it whenever you want someone to ",i.jsx(e.em,{children:"do something"}),"."]}),`
`,i.jsx(a,{}),`
`,i.jsx(c,{}),`
`,i.jsx(e.h2,{id:"when-to-use",children:"When to use"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsx(e.li,{children:"Submitting forms, confirming actions, navigating to a primary destination."}),`
`,i.jsxs(e.li,{children:["Use ",i.jsx(e.code,{children:'variant="primary"'})," for the ",i.jsx(e.em,{children:"one"})," most important action on a screen."]}),`
`,i.jsxs(e.li,{children:["Use ",i.jsx(e.code,{children:'variant="secondary"'})," for less prominent actions, ",i.jsx(e.code,{children:'"accent"'})," to draw attention without competing with primary, and ",i.jsx(e.code,{children:'"link"'})," for the lowest-emphasis, text-only actions."]}),`
`,i.jsxs(e.li,{children:["Use ",i.jsx(e.code,{children:'variant="destructive"'})," only for destructive actions (delete, leave, etc.)."]}),`
`]}),`
`,i.jsx(e.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:["For navigation between top-level pages — use a ",i.jsx(e.code,{children:"<Link>"})," instead."]}),`
`,i.jsxs(e.li,{children:["For toggles — use ",i.jsx(e.code,{children:"<Switch>"})," or ",i.jsx(e.code,{children:"<Checkbox>"}),"."]}),`
`,i.jsxs(e.li,{children:["More than one ",i.jsx(e.code,{children:"primary"})," button per screen."]}),`
`]}),`
`,i.jsx(e.h2,{id:"implementation",children:"Implementation"}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-tsx",children:`import { Button } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<Button variant="primary" onClick={handleSave}>
  Save changes
</Button>
`})}),`
`,i.jsx(e.h3,{id:"with-an-icon",children:"With an icon"}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-tsx",children:`import { Save } from "lucide-react";

<Button leadingIcon={<Save size={16} />}>
  Save changes
</Button>
`})}),`
`,i.jsx(n,{of:m}),`
`,i.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,i.jsx(n,{of:d}),`
`,i.jsx(n,{of:p}),`
`,i.jsx(n,{of:h}),`
`,i.jsx(n,{of:x}),`
`,i.jsx(n,{of:j}),`
`,i.jsx(e.h2,{id:"sizes",children:"Sizes"}),`
`,i.jsx(n,{of:u}),`
`,i.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:["Renders a real ",i.jsx(e.code,{children:"<button>"})," element — screen readers and keyboard navigation work for free."]}),`
`,i.jsxs(e.li,{children:["Focus ring uses ",i.jsx(e.code,{children:"--button-primary-default"})," and ",i.jsx(e.code,{children:"2px"})," outline offset. Visible on keyboard focus only (",i.jsx(e.code,{children:":focus-visible"}),")."]}),`
`,i.jsxs(e.li,{children:["Disabled buttons set ",i.jsx(e.code,{children:"aria-disabled"})," automatically (via the HTML ",i.jsx(e.code,{children:"disabled"})," attribute) and skip pointer/keyboard interactions."]}),`
`,i.jsxs(e.li,{children:["Always provide a meaningful ",i.jsx(e.code,{children:"children"})," label. For icon-only buttons, add ",i.jsx(e.code,{children:"aria-label"}),"."]}),`
`]}),`
`,i.jsx(e.h2,{id:"props",children:"Props"}),`
`,i.jsxs(e.p,{children:["See the ",i.jsx(e.strong,{children:"Controls"})," table above for the full list, types, and defaults — generated automatically from the TypeScript types."]})]})}function Pi(o={}){const{wrapper:e}={...r(),...o.components};return e?i.jsx(e,{...o,children:i.jsx(t,{...o})}):t(o)}export{Pi as default};
