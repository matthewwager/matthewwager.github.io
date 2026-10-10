import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as o}from"./index-DUy19JZU.js";import{c as r,P as s,b as d,C as n}from"./index-R-0gtsrS.js";import{C as c,D as l,b as h,a as p,F as m,T as x,W as j}from"./Calendar.stories-BT_iKD-W.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function a(i){const t={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c}),`
`,e.jsx(t.h1,{id:"calendar",children:"Calendar"}),`
`,e.jsxs(t.p,{children:["A month-grid ",e.jsx(t.em,{children:"display"})," calendar — matches the reference design's own Calendar exactly: a weekday header and a 7-column day grid, each day optionally highlighted with a status color. Clicking a day with details opens a ",e.jsx(t.code,{children:"<Popover>"})," — for picking a date instead of viewing one, reach for ",e.jsx(t.code,{children:"<DatePicker>"})," instead; this is for showing a month at a glance (a close calendar, a deadline overview) with details on demand."]}),`
`,e.jsx(s,{}),`
`,e.jsx(d,{}),`
`,e.jsx(t.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:`An "at a glance" month view where individual days carry meaning through color — overdue items, warnings, completed work — and clicking one reveals more (which invoice, which account, why it's flagged).`}),`
`]}),`
`,e.jsx(t.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Picking a single date or a range — use ",e.jsx(t.code,{children:"<DatePicker>"}),", which is built for exactly that."]}),`
`]}),`
`,e.jsx(t.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { Calendar } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<Calendar
  month={new Date(2026, 0, 1)}
  getDateStatus={(date) => (date.getDate() === 9 ? "negative" : undefined)}
  getDateDetails={(date) => (date.getDate() === 9 ? "Bank feed import overdue — 2 accounts haven't synced since the 4th." : undefined)}
/>
`})}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"getDateStatus"})," is a plain predicate, called once per visible day — return ",e.jsx(t.code,{children:'"negative"'}),", ",e.jsx(t.code,{children:'"notice"'}),", or ",e.jsx(t.code,{children:'"positive"'})," to highlight it, or ",e.jsx(t.code,{children:"undefined"})," (or omit the prop entirely) for the plain, unhighlighted cell."]}),`
`,e.jsx(n,{of:l}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(t.h2,{id:"clicking-a-day-for-details",children:"Clicking a day for details"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"getDateDetails"})," is the same shape of predicate, called once per visible day — return the content for that day's popover (a string, or any richer ",e.jsx(t.code,{children:"ReactNode"}),"), and the day renders as a real, clickable button that opens a ",e.jsx(t.code,{children:"<Popover>"}),' titled with the full date (e.g. "January 9, 2026") on click. Return ',e.jsx(t.code,{children:"null"}),"/",e.jsx(t.code,{children:"undefined"})," (or omit the prop entirely) to leave a day as a plain, non-interactive cell — a day with nothing to say doesn't get a dead click target that opens an empty popover."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(t.h2,{id:"it-flexes-as-it-resizes",children:"It flexes as it resizes"}),`
`,e.jsxs(t.p,{children:["Every dimension is fluid — the grid uses ",e.jsx(t.code,{children:"fr"})," columns and rows, so it stretches to fill whatever box it's given. An ",e.jsx(t.code,{children:"aspect-ratio"})," matching the reference design's own proportions is the default height, so it looks right by width alone with no extra sizing; a container that sets its own height overrides that default the normal CSS way."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(t.h2,{id:"the-weekday-header-abbreviates-as-it-narrows",children:"The weekday header abbreviates as it narrows"}),`
`,e.jsxs(t.p,{children:["Below a full name's comfortable width, the header switches to a 3-letter abbreviation, then to a single letter at the narrowest sizes (",e.jsx(t.code,{children:"<DatePicker>"}),"'s own S M T W R F S) — driven by a container query against the calendar's own box, not the viewport, since this can sit in a narrow sidebar on a wide screen just as easily as on an actual phone."]}),`
`,e.jsx(t.h2,{id:"today",children:"Today"}),`
`,e.jsxs(t.p,{children:["Whichever day matches the real current date always renders in medium weight — with ",e.jsx(t.code,{children:"--content-emphasis"})," for a plain/default-status day, or that status's own ",e.jsx(t.code,{children:"--content-negative"}),"/",e.jsx(t.code,{children:"--content-notice"}),"/",e.jsx(t.code,{children:"--content-positive"})," color instead when today also carries a status (its usual tinted-background ",e.jsx(t.code,{children:"-base"}),` color would otherwise clash with "today, and it's overdue" rather than reinforcing it). Not a prop — there's exactly one real today, so nothing to configure.`]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(t.h2,{id:"week-start",children:"Week start"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"weekStartsOn"})," (",e.jsx(t.code,{children:"0 | 1"}),", default ",e.jsx(t.code,{children:"0"}),") rotates both the weekday header and the day grid — matching ",e.jsx(t.code,{children:"<DatePicker>"}),"'s own prop."]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["The weekday header and leading blank cells are ",e.jsx(t.code,{children:"aria-hidden"})," — a screen reader gets straight to the actual days."]}),`
`,e.jsxs(t.li,{children:["A day with no ",e.jsx(t.code,{children:"getDateDetails"})," content is a plain, non-focusable ",e.jsx(t.code,{children:"<div>"})," with no ",e.jsx(t.code,{children:"aria-label"})," beyond its visible number — there's nothing to activate, and the visible digit is the whole of what it communicates."]}),`
`,e.jsxs(t.li,{children:["A day ",e.jsx(t.em,{children:"with"})," details is a real ",e.jsx(t.code,{children:"<button>"}),", keyboard-reachable and operable with Enter/Space like any ",e.jsx(t.code,{children:"<Popover>"})," trigger — see that component's own accessibility notes (",e.jsx(t.code,{children:'role="dialog"'}),", Escape to close, focus returns to the day on close)."]}),`
`]}),`
`,e.jsx(t.h2,{id:"props",children:"Props"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"month"})," (a ",e.jsx(t.code,{children:"Date"}),", only year/month read — defaults to today), ",e.jsx(t.code,{children:"getDateStatus"}),", ",e.jsx(t.code,{children:"getDateDetails"}),", ",e.jsx(t.code,{children:"weekStartsOn"})," (",e.jsx(t.code,{children:"0 | 1"}),", default ",e.jsx(t.code,{children:"0"}),"), ",e.jsx(t.code,{children:"className"}),"."]})]})}function Pe(i={}){const{wrapper:t}={...o(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(a,{...i})}):a(i)}export{Pe as default};
