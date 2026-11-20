import{j as o}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as n}from"./index-DUy19JZU.js";import{d as s,P as a,c as p,C as i}from"./index-CAEx-Fqm.js";import{A as l,V as m,N as c,H as d,R as h,E as u}from"./AvatarGroup.stories-n4GOLA5R.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-B-540lTs.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramCell-Dfzt8eBQ.js";import"./x-8M16RbwM.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./chevron-right-DjmJ9Qh9.js";import"./sparkles-BGkPd9R1.js";import"./file-text-CVBO4J0q.js";import"./circle-plus-BIyj2I_j.js";import"./mic-Cs5li76X.js";import"./arrow-up-B8mFgxMJ.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./chevron-left-C9vICWy7.js";import"./bell-dJEDpyJq.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./play-CfSXC4xN.js";import"./pause-Du-skLIo.js";import"./chartShapes-DrAbwZkd.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./square-centerline-dashed-horizontal-DoWox9pG.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function t(r){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:l}),`
`,o.jsx(e.h1,{id:"avatargroup",children:"AvatarGroup"}),`
`,o.jsxs(e.p,{children:["Lays out a row or column of ",o.jsx(e.code,{children:"<Avatar>"}),'s with each one overlapping the last — the "N people on this task" pattern. Not a Figma component; a composition helper built around ',o.jsx(e.code,{children:"<Avatar>"}),"'s own ring, which is specifically what makes overlapping avatars show a visible seam instead of blending into one shape."]}),`
`,o.jsx(a,{}),`
`,o.jsx(p,{}),`
`,o.jsx(e.h2,{id:"when-to-use",children:"When to use"}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsx(e.li,{children:"Showing a small set of people/entities associated with something (assignees, collaborators, members) in a compact space."}),`
`]}),`
`,o.jsx(e.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsx(e.li,{children:'More than ~5-6 avatars — consider showing a fixed number plus a "+N" overflow indicator instead (not something this component does for you yet).'}),`
`]}),`
`,o.jsx(e.h2,{id:"implementation",children:"Implementation"}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-tsx",children:`import { Avatar, AvatarGroup } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<AvatarGroup>
  <Avatar name="Maya Chen" />
  <Avatar name="Sam Ortiz" />
  <Avatar name="Priya Nair" />
</AvatarGroup>
`})}),`
`,o.jsx(e.h2,{id:"orientation",children:"Orientation"}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:'orientation="vertical"'})," stacks downward instead of across."]}),`
`,o.jsx(i,{of:m}),`
`,o.jsx(e.h2,{id:"overlap",children:"Overlap"}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"overlap"})," is in pixels — how much each avatar shifts toward the previous one. Negative values space them apart instead."]}),`
`,o.jsx(i,{of:c}),`
`,o.jsx(i,{of:d}),`
`,o.jsx(e.h2,{id:"randomized-colors",children:"Randomized colors"}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"randomizeColors"})," assigns each avatar a random color from the full status palette (",o.jsx(e.code,{children:"info"}),"/",o.jsx(e.code,{children:"positive"}),"/",o.jsx(e.code,{children:"notice"}),"/",o.jsx(e.code,{children:"negative"}),"/",o.jsx(e.code,{children:"neutral"}),"/",o.jsx(e.code,{children:"alt-negative"}),") — useful for quickly telling people apart in a group where everyone would otherwise be the same brand-blue. It's randomized once per mount, not on every re-render, so avatars don't visibly reshuffle while the group stays on screen — but it is genuinely random, not derived from the name, so the same group can land on different colors the next time it mounts."]}),`
`,o.jsx(i,{of:h}),`
`,o.jsxs(e.p,{children:["Any ",o.jsx(e.code,{children:"<Avatar>"})," that already sets its own ",o.jsx(e.code,{children:"color"})," keeps it — randomization only fills in the ones left unset."]}),`
`,o.jsx(i,{of:u}),`
`,o.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsxs(e.li,{children:["Purely a layout wrapper — it renders a ",o.jsx(e.code,{children:"<div>"})," and clones its ",o.jsx(e.code,{children:"<Avatar>"})," children as-is. All of Avatar's own accessibility behavior (image ",o.jsx(e.code,{children:"alt"})," text, etc.) is unchanged."]}),`
`]}),`
`,o.jsx(e.h2,{id:"props",children:"Props"}),`
`,o.jsxs(e.p,{children:["See the ",o.jsx(e.strong,{children:"Controls"})," table above for the full list, types, and defaults — generated automatically from the TypeScript types."]})]})}function Do(r={}){const{wrapper:e}={...n(),...r.components};return e?o.jsx(e,{...r,children:o.jsx(t,{...r})}):t(r)}export{Do as default};
