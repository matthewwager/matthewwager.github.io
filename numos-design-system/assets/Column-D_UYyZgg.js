import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as n}from"./index-DUy19JZU.js";import{c as l,C as i}from"./index-R-0gtsrS.js";import{C as s,D as m,S as d,M as c}from"./Column.stories-Q9_tBMN7.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function r(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:s}),`
`,e.jsx(o.h1,{id:"column",children:"Column"}),`
`,e.jsxs(o.p,{children:["One column of a table: a header ",e.jsx(o.code,{children:"<Cell>"})," above a stack of body ",e.jsx(o.code,{children:"<Cell>"}),"s — matches Figma's Column exactly. A pure layout wrapper, not a styled component of its own — every visual detail (backgrounds, row dividers, header shading) already belongs to ",e.jsx(o.code,{children:"<Cell>"})," itself, the same relationship ",e.jsx(o.code,{children:"<ButtonGroup>"})," has to real ",e.jsx(o.code,{children:"<Button>"}),"s."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(o.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["Composing a data table alongside ",e.jsx(o.code,{children:"<Cell>"})," (and, later, ",e.jsx(o.code,{children:"<Row>"}),"/",e.jsx(o.code,{children:"<Table>"}),", once they exist) — ",e.jsx(o.code,{children:"<Column>"})," is the vertical arrangement; a full table lays several of these side by side."]}),`
`]}),`
`,e.jsx(o.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import { Cell, Column } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<Column header={<Cell type="columnHead">Company</Cell>}>
  <Cell type="text">Acme Corp</Cell>
  <Cell type="text">Globex</Cell>
  <Cell type="text">Initech</Cell>
</Column>
`})}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"header"})," takes any of ",e.jsx(o.code,{children:"<Cell>"}),"'s three header types (",e.jsx(o.code,{children:"columnHead"}),", ",e.jsx(o.code,{children:"sorted"}),", ",e.jsx(o.code,{children:"checkboxColumnHead"}),") — ",e.jsx(o.code,{children:"<Column>"})," doesn't care which, it just renders whatever it's given above the body cells."]}),`
`,e.jsx(o.h2,{id:"sorted",children:"Sorted"}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(o.h2,{id:"width",children:"Width"}),`
`,e.jsxs(o.p,{children:["Omit ",e.jsx(o.code,{children:"width"})," and a ",e.jsx(o.code,{children:"<Column>"})," fills the available space evenly with its neighbors (",e.jsx(o.code,{children:"flex: 1 0 0"}),") — the common case for a table that should fill its container. Pass a number (pixels) or any CSS length to fix a column's width instead, e.g. a narrow checkbox column next to flexible content columns:"]}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(o.h2,{id:"props",children:"Props"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"header"})," (required), ",e.jsx(o.code,{children:"children"})," (required), ",e.jsx(o.code,{children:"width"}),", ",e.jsx(o.code,{children:"className"}),"."]})]})}function we(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(r,{...t})}):r(t)}export{we as default};
