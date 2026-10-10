import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as a}from"./index-DUy19JZU.js";import{c as r,P as s,b as l,C as n}from"./index-R-0gtsrS.js";import{P as d,D as p,C as c,F as m,L as h,S as g,a as x}from"./Pagination.stories-Bph2-wSk.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function o(t){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:d}),`
`,e.jsx(i.h1,{id:"pagination",children:"Pagination"}),`
`,e.jsx(i.p,{children:`Prev/next icon buttons around a real, editable page-number field — matches Figma's Pagination exactly. Compact by design: no row of numbered page buttons, just where you are ("N of Total") and a field you can type a page into directly.`}),`
`,e.jsx(s,{}),`
`,e.jsx(l,{}),`
`,e.jsx(i.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Navigating a large, ordered result set page by page — a table, a search results list — where jumping straight to a known page number is at least as useful as stepping one page at a time."}),`
`]}),`
`,e.jsx(i.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import { Pagination } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
`})}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h2,{id:"the-page-field-is-real-not-a-label",children:"The page field is real, not a label"}),`
`,e.jsxs(i.p,{children:["Figma builds this from its own Text Input component, not a static number — so this is a genuine ",e.jsx(i.code,{children:"<input>"}),": type a page number and press Enter (or click away) to jump there, clamped to ",e.jsx(i.code,{children:"[1, totalPages]"}),`. Typing is tracked as its own draft text separate from the committed page, so entering "1" while typing "12" doesn't briefly clamp/jump to page 1 before the second digit lands. Escape reverts to the current page without committing.`]}),`
`,e.jsx(i.h2,{id:"controlled-vs-uncontrolled",children:"Controlled vs. uncontrolled"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"defaultPage"})," (default ",e.jsx(i.code,{children:"1"}),") for an uncontrolled Pagination that tracks its own current page — fine for a demo, or anywhere nothing else needs to know which page it's on. Pass ",e.jsx(i.code,{children:"page"}),"/",e.jsx(i.code,{children:"onPageChange"})," together once something else does (typically whatever's fetching/rendering the paginated data):"]}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(i.h2,{id:"boundaries",children:"Boundaries"}),`
`,e.jsxs(i.p,{children:["Prev disables on page 1, Next disables on the last page — confirmed directly from Figma's own example (page 1 of 25: Prev genuinely disabled, Next genuinely enabled), not just visually implied. Notice the two use different confirmed colors (",e.jsx(i.code,{children:"Content/Disabled"})," vs. ",e.jsx(i.code,{children:"Content/Brand Primary"}),"), not one icon color faded by opacity."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.p,{children:"A single page disables both:"}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(i.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsx(i.p,{children:"Disables Prev, Next, and the page field together — e.g. while the page being paginated is still loading."}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["The whole control is a ",e.jsx(i.code,{children:'<nav aria-label="Pagination">'}),"."]}),`
`,e.jsxs(i.li,{children:["Prev/Next are real ",e.jsx(i.code,{children:'<button aria-label="Previous page"/"Next page">'}),"s using native ",e.jsx(i.code,{children:"disabled"}),", not a styled-to-look-disabled div."]}),`
`,e.jsxs(i.li,{children:["The page field has a visually-hidden ",e.jsx(i.code,{children:"<label>"})," plus an ",e.jsx(i.code,{children:"aria-label"}),' stating the current position (e.g. "Page, 1 of 25"), so a screen reader gets full context even though "of 25" is a separate, unlabeled sibling element visually.']}),`
`]}),`
`,e.jsx(i.h2,{id:"props",children:"Props"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"page"}),", ",e.jsx(i.code,{children:"defaultPage"})," (default ",e.jsx(i.code,{children:"1"}),"), ",e.jsx(i.code,{children:"totalPages"})," (required), ",e.jsx(i.code,{children:"onPageChange"}),", ",e.jsx(i.code,{children:"disabled"}),", ",e.jsx(i.code,{children:"className"}),"."]})]})}function ke(t={}){const{wrapper:i}={...a(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(o,{...t})}):o(t)}export{ke as default};
