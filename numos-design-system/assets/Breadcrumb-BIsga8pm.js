import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as o}from"./index-DUy19JZU.js";import{c as s,P as a,b as c,C as n}from"./index-R-0gtsrS.js";import{B as l,D as h,T as d,S as m,N as p,O as u}from"./Breadcrumb.stories-DO0Aze2J.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function i(t){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:l}),`
`,e.jsx(r.h1,{id:"breadcrumb",children:"Breadcrumb"}),`
`,e.jsxs(r.p,{children:["A trail of ancestor links back to some root, plus the current page — matches Figma's Breadcrumbs exactly: ancestor crumbs in ",e.jsx(r.code,{children:"content-link-default"}),", the current crumb in ",e.jsx(r.code,{children:"content-emphasis"}),", a chevron between each."]}),`
`,e.jsx(a,{}),`
`,e.jsx(c,{}),`
`,e.jsx(r.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Showing where a page sits in a hierarchy the user can navigate back up through — a nested settings page, an object detail view reached through a list, a folder structure."}),`
`]}),`
`,e.jsx(r.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:['A single level of "back to X" — a plain link or a ',e.jsx(r.code,{children:'<Button variant="link">'})," is simpler than a one-crumb trail."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"<DetailHeader>"}),`'s own breadcrumb row already covers the common "parent list → this record" case with its own `,e.jsx(r.code,{children:"breadcrumb"}),"/",e.jsx(r.code,{children:"title"})," props; reach for ",e.jsx(r.code,{children:"<Breadcrumb>"})," directly when the trail has more than two levels or needs real per-crumb links."]}),`
`]}),`
`,e.jsx(r.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { Breadcrumb } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<Breadcrumb
  items={[
    { label: "Root", href: "/root" },
    { label: "Trunk", href: "/root/trunk" },
    { label: "Branch", href: "/root/trunk/branch" },
    { label: "Leaf" },
  ]}
/>
`})}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(r.h3,{id:"the-last-item-is-always-the-current-page",children:"The last item is always the current page"}),`
`,e.jsxs(r.p,{children:["Regardless of whether it has an ",e.jsx(r.code,{children:"href"}),"/",e.jsx(r.code,{children:"onClick"}),", the last entry in ",e.jsx(r.code,{children:"items"})," renders as plain text with ",e.jsx(r.code,{children:'aria-current="page"'}),`, never a link — matching Figma's own "Leaf" crumb (a different color, not a link) and the general convention that you don't need to navigate to the page you're already on.`]}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(r.h2,{id:"separator",children:"Separator"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"separator"})," (",e.jsx(r.code,{children:'"chevron" | "slash"'}),", defaults to ",e.jsx(r.code,{children:'"chevron"'}),") — Figma's own icon is the chevron; ",e.jsx(r.code,{children:'"slash"'})," is available for the other common breadcrumb convention."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(r.h2,{id:"links-buttons-or-plain-text",children:"Links, buttons, or plain text"}),`
`,e.jsxs(r.p,{children:["Each non-last item picks its own rendering from what you give it — same convention as ",e.jsx(r.code,{children:"<NavItem>"}),": ",e.jsx(r.code,{children:"href"})," → a real ",e.jsx(r.code,{children:"<a>"}),", ",e.jsx(r.code,{children:"onClick"})," alone → a ",e.jsx(r.code,{children:"<button>"})," (for SPA-style navigation without a real URL), neither → plain (non-interactive) text, still styled like the other crumbs. Useful for an intermediate level that doesn't have a page of its own:"]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(r.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["The whole trail is a ",e.jsx(r.code,{children:'<nav aria-label="Breadcrumb">'})," wrapping a real ",e.jsx(r.code,{children:"<ol>"})," — one ",e.jsx(r.code,{children:"<li>"})," per crumb, per the standard breadcrumb pattern."]}),`
`,e.jsxs(r.li,{children:["The separator between crumbs is ",e.jsx(r.code,{children:"aria-hidden"})," — it's decorative, not part of the content a screen reader needs to announce."]}),`
`,e.jsxs(r.li,{children:["The current crumb gets ",e.jsx(r.code,{children:'aria-current="page"'}),"."]}),`
`]}),`
`,e.jsx(r.h2,{id:"props",children:"Props"}),`
`,e.jsxs(r.p,{children:["See the ",e.jsx(r.strong,{children:"Controls"})," table above for the full list, types, and defaults — generated automatically from the TypeScript types."]})]})}function Te(t={}){const{wrapper:r}={...o(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(i,{...t})}):i(t)}export{Te as default};
