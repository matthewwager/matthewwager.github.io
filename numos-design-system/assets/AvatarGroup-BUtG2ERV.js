import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as n}from"./index-DUy19JZU.js";import{c as s,P as a,b as p,C as i}from"./index-R-0gtsrS.js";import{A as l,V as m,N as c,H as d,R as h,E as u}from"./AvatarGroup.stories-D9LG0H-f.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function t(r){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:l}),`
`,e.jsx(o.h1,{id:"avatargroup",children:"AvatarGroup"}),`
`,e.jsxs(o.p,{children:["Lays out a row or column of ",e.jsx(o.code,{children:"<Avatar>"}),'s with each one overlapping the last — the "N people on this task" pattern. Not a Figma component; a composition helper built around ',e.jsx(o.code,{children:"<Avatar>"}),"'s own ring, which is specifically what makes overlapping avatars show a visible seam instead of blending into one shape."]}),`
`,e.jsx(a,{}),`
`,e.jsx(p,{}),`
`,e.jsx(o.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"Showing a small set of people/entities associated with something (assignees, collaborators, members) in a compact space."}),`
`]}),`
`,e.jsx(o.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:'More than ~5-6 avatars — consider showing a fixed number plus a "+N" overflow indicator instead (not something this component does for you yet).'}),`
`]}),`
`,e.jsx(o.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import { Avatar, AvatarGroup } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<AvatarGroup>
  <Avatar name="Maya Chen" />
  <Avatar name="Sam Ortiz" />
  <Avatar name="Priya Nair" />
</AvatarGroup>
`})}),`
`,e.jsx(o.h2,{id:"orientation",children:"Orientation"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:'orientation="vertical"'})," stacks downward instead of across."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(o.h2,{id:"overlap",children:"Overlap"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"overlap"})," is in pixels — how much each avatar shifts toward the previous one. Negative values space them apart instead."]}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(o.h2,{id:"randomized-colors",children:"Randomized colors"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"randomizeColors"})," assigns each avatar a random color from the full status palette (",e.jsx(o.code,{children:"info"}),"/",e.jsx(o.code,{children:"positive"}),"/",e.jsx(o.code,{children:"notice"}),"/",e.jsx(o.code,{children:"negative"}),"/",e.jsx(o.code,{children:"neutral"}),"/",e.jsx(o.code,{children:"alt-negative"}),") — useful for quickly telling people apart in a group where everyone would otherwise be the same brand-blue. It's randomized once per mount, not on every re-render, so avatars don't visibly reshuffle while the group stays on screen — but it is genuinely random, not derived from the name, so the same group can land on different colors the next time it mounts."]}),`
`,e.jsx(i,{of:h}),`
`,e.jsxs(o.p,{children:["Any ",e.jsx(o.code,{children:"<Avatar>"})," that already sets its own ",e.jsx(o.code,{children:"color"})," keeps it — randomization only fills in the ones left unset."]}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(o.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["Purely a layout wrapper — it renders a ",e.jsx(o.code,{children:"<div>"})," and clones its ",e.jsx(o.code,{children:"<Avatar>"})," children as-is. All of Avatar's own accessibility behavior (image ",e.jsx(o.code,{children:"alt"})," text, etc.) is unchanged."]}),`
`]}),`
`,e.jsx(o.h2,{id:"props",children:"Props"}),`
`,e.jsxs(o.p,{children:["See the ",e.jsx(o.strong,{children:"Controls"})," table above for the full list, types, and defaults — generated automatically from the TypeScript types."]})]})}function ze(r={}){const{wrapper:o}={...n(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(t,{...r})}):t(r)}export{ze as default};
