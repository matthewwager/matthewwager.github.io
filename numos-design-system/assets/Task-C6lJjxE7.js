import{j as t}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as n}from"./index-DUy19JZU.js";import{c as r,P as a,b as l,C as i}from"./index-R-0gtsrS.js";import{T as c,D as d,N as p,I as m,O as h,C as u,E as x,L as j}from"./Task.stories-DkJRxPiV.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function s(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{of:c}),`
`,t.jsx(e.h1,{id:"task",children:"Task"}),`
`,t.jsxs(e.p,{children:['A single step in a sequential checklist — a status badge, title/description, a right-aligned label (a due date, "Locked", "3d ago"), and an optional action button. ',t.jsx(e.code,{children:"<TaskList>"})," stacks them under a heading."]}),`
`,t.jsx(a,{}),`
`,t.jsx(l,{}),`
`,t.jsx(e.h2,{id:"when-to-use",children:"When to use"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"A sequential list of steps a user works through (onboarding, a monthly close checklist, a setup wizard) where each step has its own status."}),`
`,t.jsxs(e.li,{children:["Anywhere a step can be locked until a prior one finishes — ",t.jsx(e.code,{children:'state="disabled"'})," renders no action button and dims the row."]}),`
`]}),`
`,t.jsx(e.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"A bulk-actionable list where many rows get selected together and reviewed as a batch — that's a List & Detail pattern (checkbox + detail pane + footer), not a sequential checklist."}),`
`,t.jsxs(e.li,{children:["As a generic card — ",t.jsx(e.code,{children:"<Card>"})," is the plain, unopinionated shell; ",t.jsx(e.code,{children:"Task"})," is specifically the multi-state step pattern from Figma."]}),`
`]}),`
`,t.jsx(e.h2,{id:"implementation",children:"Implementation"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import { Task, TaskList } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<TaskList title="Get set up" description="Finish these steps to start closing your books with Numos.">
  <Task state="complete" title="Connect your bank account" description="Linked 2 accounts" meta="Done" actionLabel="Review" />
  <Task state="notStarted" title="Invite your team" description="Add teammates to assign work" meta="Due in 5d" actionLabel="Start" onAction={invite} />
  <Task state="disabled" title="Set your close calendar" meta="Locked" />
</TaskList>
`})}),`
`,t.jsx(e.h2,{id:"states",children:"States"}),`
`,t.jsx(i,{of:d}),`
`,t.jsx(i,{of:p}),`
`,t.jsx(i,{of:m}),`
`,t.jsx(i,{of:h}),`
`,t.jsx(i,{of:u}),`
`,t.jsx(i,{of:x}),`
`,t.jsx(e.h2,{id:"tasklist",children:"TaskList"}),`
`,t.jsx(i,{of:j}),`
`,t.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.code,{children:"Task"})," renders a plain ",t.jsx(e.code,{children:"<div>"}),", not a button — Figma's own frame wraps the whole row in one, but it also nests a real action button inside it, and a button can't legally contain another button. The action button (",t.jsx(e.code,{children:"actionLabel"}),"/",t.jsx(e.code,{children:"onAction"}),") is the only real interactive element."]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.code,{children:'state="disabled"'}),` is a visual/copy convention (dimmed color, no action button, "Locked" label) — it doesn't set a native `,t.jsx(e.code,{children:"disabled"})," attribute anywhere, since there's nothing on the row itself to disable."]}),`
`]}),`
`,t.jsx(e.h2,{id:"props",children:"Props"}),`
`,t.jsxs(e.p,{children:["See the ",t.jsx(e.strong,{children:"Controls"})," table above for ",t.jsx(e.code,{children:"Task"}),"'s full list, types, and defaults — generated automatically from the TypeScript types. ",t.jsx(e.code,{children:"TaskList"})," takes ",t.jsx(e.code,{children:"title"}),", ",t.jsx(e.code,{children:"description"}),", and ",t.jsx(e.code,{children:"children"})," (",t.jsx(e.code,{children:"<Task>"})," elements)."]})]})}function Dt(o={}){const{wrapper:e}={...n(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(s,{...o})}):s(o)}export{Dt as default};
