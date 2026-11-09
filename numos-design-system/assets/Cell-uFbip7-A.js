import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as r}from"./index-DUy19JZU.js";import{d,C as o}from"./index-C13yEV_o.js";import{C as t,G as l,T as c,f as a,E as h,D as p,N as x,e as m,S as j,d as u,P as g,L as b,B as f,A as y,a as w,I as C,c as k,g as v,b as A}from"./Cell.stories-51BJGS15.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BB6PH927.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramCell-BoDqalDD.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:t}),`
`,e.jsx(n.h1,{id:"cell",children:"Cell"}),`
`,e.jsxs(n.p,{children:["The contents of one table cell — matches Figma's Cell exactly, all 16 ",e.jsx(n.code,{children:"type"}),"s (plus ",e.jsx(n.code,{children:"group"}),`, for rollup tables) implemented as one component (Figma's own "Type" variant axis), not 16 separate ones.`]}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(n.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Building a data table's rows and header, once composed with ",e.jsx(n.code,{children:"<Column>"})," (and, later, ",e.jsx(n.code,{children:"<Row>"}),"/",e.jsx(n.code,{children:"<Table>"}),") — ",e.jsx(n.code,{children:"<Cell>"})," is the reusable content unit that goes inside them."]}),`
`]}),`
`,e.jsx(n.h2,{id:"types",children:"Types"}),`
`,e.jsx(n.p,{children:`Most types are plain text with different typography/color/alignment. A few compose other real components rather than reimplementing their look — that's deliberate, the same "reuse the primitive" reasoning as everywhere else in this library.`}),`
`,e.jsx(n.h3,{id:"text",children:"Text"}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(n.h3,{id:"numeric",children:"Numeric"}),`
`,e.jsx(n.p,{children:"Right-aligned — for values where alignment communicates magnitude (numbers, currency, counts)."}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(n.h3,{id:"emphasis",children:"Emphasis"}),`
`,e.jsxs(n.p,{children:["Bolder and darker than ",e.jsx(n.code,{children:"text"}),` — for a column's "primary" identifying value in a row otherwise full of `,e.jsx(n.code,{children:"text"})," cells."]}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(n.h3,{id:"double",children:"Double"}),`
`,e.jsxs(n.p,{children:["A primary line (",e.jsx(n.code,{children:"children"}),") and a subdued second line (",e.jsx(n.code,{children:"secondary"}),") — a name and a role, a title and a subtitle."]}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h3,{id:"null",children:"Null"}),`
`,e.jsx(n.p,{children:`Always renders "—" — there's nothing to pass it, since it represents the absence of a value, not a specific one.`}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(n.h3,{id:"loading",children:"Loading"}),`
`,e.jsx(n.p,{children:"A pulsing skeleton bar, for a cell whose value hasn't loaded yet. Figma's mockup is necessarily static; the pulse animation is this implementation's own reasonable addition, not something a static frame could specify."}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(n.h3,{id:"slot",children:"Slot"}),`
`,e.jsx(n.p,{children:"The escape hatch — a single flexible child, for content that doesn't fit any of the other 15 types."}),`
`,e.jsx(o,{of:j}),`
`,e.jsx(n.h3,{id:"group",children:"Group"}),`
`,e.jsxs(n.p,{children:["The head of a rollup row in a grouped table — e.g. a vendor whose total sums the account rows under it. A chevron and an emphasis label toggle the group's rows; ",e.jsx(n.code,{children:"secondary"})," adds a subdued note after the label (like a count), outside the toggle."]}),`
`,e.jsxs(n.p,{children:["The table owns which groups are open, so ",e.jsx(n.code,{children:"group"})," is controlled: pass ",e.jsx(n.code,{children:"expanded"}),", and ",e.jsx(n.code,{children:"onExpandedChange(expanded, { all })"})," is called when the head is clicked. Render the group's rows only while it's open, and mark their first cell ",e.jsx(n.code,{children:"nested"})," so their labels line up under the group's, past its chevron."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Expand or collapse all:"})," ",e.jsx(n.code,{children:"all"})," is ",e.jsx(n.code,{children:"true"})," when the head is Shift-clicked (or Shift+Enter/Space from the keyboard). Open or close every group to match ",e.jsx(n.code,{children:"expanded"})," — the same built-in shortcut ",e.jsx(n.code,{children:"<Accordion>"})," has. Try it:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Cell type="group" expanded={open.has(id)} onExpandedChange={(expanded, { all }) => (all ? setAllGroups(expanded) : setGroup(id, expanded))} secondary="(4)">
  AWS
</Cell>
// …and each of its rows, while open:
<Cell nested>6150 – Cloud Infrastructure</Cell>
`})}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(n.h3,{id:"progress",children:"Progress"}),`
`,e.jsxs(n.p,{children:["Composes ",e.jsx(n.code,{children:"<ProgressBar>"})," (",e.jsx(n.code,{children:"showValue={false}"}),`, since Figma's own trailing "49%" is styled and positioned differently from `,e.jsx(n.code,{children:"<ProgressBar>"}),"'s built-in label/value row) plus its own trailing value text. ",e.jsx(n.code,{children:"formatValue"})," overrides the default ",e.jsx(n.code,{children:"${value}%"}),"."]}),`
`,e.jsx(o,{of:g}),`
`,e.jsx(n.h3,{id:"label",children:"Label"}),`
`,e.jsxs(n.p,{children:["A status pill — visually similar to ",e.jsx(n.code,{children:'<Badge status="neutral">'}),"'s colors, but Figma gives this cell type its own confirmed padding and type scale (",e.jsx(n.code,{children:"Paragraph S Regular"}),", not Badge's usual ",e.jsx(n.code,{children:"text-xs"}),"), so it isn't literally a nested ",e.jsx(n.code,{children:"<Badge>"})," instance."]}),`
`,e.jsx(o,{of:b}),`
`,e.jsx(n.h3,{id:"button",children:"Button"}),`
`,e.jsxs(n.p,{children:["A real ",e.jsx(n.code,{children:'<Button variant="secondary" size="sm">'})," — confirmed directly from Figma's own instance, not approximated. Right-aligned: an action column is the last in its row, and its ",e.jsx(n.code,{children:"<Column>"})," header right-aligns to match."]}),`
`,e.jsx(o,{of:f}),`
`,e.jsx(n.h3,{id:"avatar",children:"Avatar"}),`
`,e.jsxs(n.p,{children:["A real ",e.jsx(n.code,{children:'<Avatar size="xs">'})," next to a primary label and an optional ",e.jsx(n.code,{children:"sublabel"}),"."]}),`
`,e.jsx(o,{of:y}),`
`,e.jsx(n.h3,{id:"checkbox",children:"Checkbox"}),`
`,e.jsxs(n.p,{children:["A real ",e.jsx(n.code,{children:"<Checkbox>"}),", right-aligned, no visible label of its own — pass ",e.jsx(n.code,{children:"aria-label"}),"."]}),`
`,e.jsx(o,{of:w}),`
`,e.jsx(n.h3,{id:"icon",children:"Icon"}),`
`,e.jsxs(n.p,{children:["Up to 3 right-aligned row-action icon buttons (",e.jsx(n.code,{children:"actions"}),"), plus an optional trailing ",e.jsx(n.code,{children:"count"}),"."]}),`
`,e.jsx(o,{of:C}),`
`,e.jsx(n.h2,{id:"header-types",children:"Header types"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"columnHead"}),", ",e.jsx(n.code,{children:"sorted"}),", and ",e.jsx(n.code,{children:"checkboxColumnHead"})," share one look (a shaded background, a firmer border, a subtle drop shadow) — Figma treats them as more ",e.jsx(n.code,{children:"Cell"})," types, not a separate header component, so this does too. Use them as a column's ",e.jsx(n.code,{children:"header"}),"."]}),`
`,e.jsx(n.h3,{id:"column-head",children:"Column Head"}),`
`,e.jsx(o,{of:k}),`
`,e.jsx(n.h3,{id:"sorted",children:"Sorted"}),`
`,e.jsxs(n.p,{children:["Adds a direction arrow (",e.jsx(n.code,{children:"direction"}),", ",e.jsx(n.code,{children:'"asc" | "desc"'}),") and bolder text — for whichever column a table is currently sorted by."]}),`
`,e.jsx(o,{of:v}),`
`,e.jsx(n.h3,{id:"checkbox-column-head",children:"Checkbox Column Head"}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.code,{children:"<Checkbox>"}),' for "select all" — same alignment as the body ',e.jsx(n.code,{children:"checkbox"})," type, so the column lines up (Figma's two checkbox-cell mockups happen to be too narrow to show this alignment directly, but the body cell's explicit right-alignment is the real signal; this cell type matches it rather than the header mockup's default/unconfirmed alignment)."]}),`
`,e.jsx(o,{of:A}),`
`,e.jsx(n.h2,{id:"not-implemented-input",children:"Not implemented: Input"}),`
`,e.jsxs(n.p,{children:[`Figma's "Input" cell type reuses a component explicitly named — and marked — "Deprecated" in the source file. Reproducing a deprecated pattern as current didn't seem right, so it's left out rather than guessed at. For an inline-editable cell, use `,e.jsx(n.code,{children:'type="slot"'})," with a real ",e.jsx(n.code,{children:'<TextInput size="sm">'})," or ",e.jsx(n.code,{children:'<Select size="sm">'})," instead."]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"type"})," (default ",e.jsx(n.code,{children:'"text"'}),"), ",e.jsx(n.code,{children:"children"}),", ",e.jsx(n.code,{children:"secondary"})," (",e.jsx(n.code,{children:"double"}),"), ",e.jsx(n.code,{children:"value"}),"/",e.jsx(n.code,{children:"formatValue"})," (",e.jsx(n.code,{children:"progress"}),"), ",e.jsx(n.code,{children:"name"}),"/",e.jsx(n.code,{children:"src"}),"/",e.jsx(n.code,{children:"initials"}),"/",e.jsx(n.code,{children:"sublabel"})," (",e.jsx(n.code,{children:"avatar"}),"), ",e.jsx(n.code,{children:"checked"}),"/",e.jsx(n.code,{children:"onCheckedChange"}),"/",e.jsx(n.code,{children:"aria-label"})," (",e.jsx(n.code,{children:"checkbox"}),"/",e.jsx(n.code,{children:"checkboxColumnHead"}),"), ",e.jsx(n.code,{children:"disabled"})," (",e.jsx(n.code,{children:"button"}),"/",e.jsx(n.code,{children:"checkbox"}),"/",e.jsx(n.code,{children:"checkboxColumnHead"}),"), ",e.jsx(n.code,{children:"onClick"})," (",e.jsx(n.code,{children:"button"}),"), ",e.jsx(n.code,{children:"actions"}),"/",e.jsx(n.code,{children:"count"})," (",e.jsx(n.code,{children:"icon"}),"), ",e.jsx(n.code,{children:"direction"})," (",e.jsx(n.code,{children:"sorted"}),"), ",e.jsx(n.code,{children:"expanded"}),"/",e.jsx(n.code,{children:"onExpandedChange"})," and ",e.jsx(n.code,{children:"secondary"})," (",e.jsx(n.code,{children:"group"}),"), ",e.jsx(n.code,{children:"nested"})," (any type — a row inside a group), ",e.jsx(n.code,{children:"className"}),"."]})]})}function Ge(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{Ge as default};
