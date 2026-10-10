import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as r}from"./index-DUy19JZU.js";import{c as s,P as c,b as a,C as i}from"./index-R-0gtsrS.js";import{L as d,D as l,W as h,S as p,C as m,a as j}from"./LogEntry.stories-MQ2yW2YE.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function o(n){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
`,e.jsx(t.h1,{id:"logentry",children:"LogEntry"}),`
`,e.jsx(t.p,{children:"One entry in a chronological changelog/audit-log feed — matches Figma's LogEntry exactly. Stack several directly (no gap needed) to get a continuous connecting timeline running down the page, a dot marking each entry."}),`
`,e.jsx(c,{}),`
`,e.jsx(a,{}),`
`,e.jsx(t.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["A History/activity tab showing what changed, who changed it, and when — see ",e.jsx(t.code,{children:"HistoryTimeline"})," in the demo app for a full worked page (month-grouped feed + search + jump-to-month sidebar) built from this."]}),`
`,e.jsx(t.li,{children:"Any audit trail where each row is naturally a single sentence, not a table row with many independent columns."}),`
`]}),`
`,e.jsx(t.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Structured, filterable/sortable data with several independent fields — use ",e.jsx(t.code,{children:"<Cell>"}),"/",e.jsx(t.code,{children:"<Column>"})," instead."]}),`
`]}),`
`,e.jsx(t.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { LogEntry } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<LogEntry
  subject="Mary Jane’s"
  description="employment status changed from full-time to part-time"
  actor="John Doe"
  timestamp="Sep 15, 2026 at 3:45p PST"
/>
`})}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(t.h2,{id:"the-schema",children:"The schema"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"subject"}),` is the bold, link-colored lead segment — typically the record's own name, matching Figma's own possessive phrasing ("Mary Jane's ..."). `,e.jsx(t.code,{children:"description"})," is the rest of the sentence: what happened, and however much of where/why/how belongs in it. Neither prop parses or generates this text — write whatever natural sentence fits, the same way ",e.jsx(t.code,{children:"<SearchFilter>"}),"'s own ",e.jsx(t.code,{children:"value"})," is just plain text it doesn't interpret."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"actor"})," and ",e.jsx(t.code,{children:"timestamp"}),` fill the fixed "by ... on ..." byline underneath — those connective words themselves aren't configurable, matching Figma exactly.`]}),`
`,e.jsx(t.h2,{id:"without-a-subject",children:"Without a subject"}),`
`,e.jsxs(t.p,{children:["Omit ",e.jsx(t.code,{children:"subject"})," for an entry with no single clear record to point at:"]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(t.h2,{id:"stacked-forming-a-timeline",children:"Stacked, forming a timeline"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(t.h2,{id:"subject-and-actor-as-links",children:"Subject and actor as links"}),`
`,e.jsxs(t.p,{children:["Pass ",e.jsx(t.code,{children:"onSubjectClick"}),"/",e.jsx(t.code,{children:"onActorClick"})," to render ",e.jsx(t.code,{children:"subject"}),"/",e.jsx(t.code,{children:"actor"}),` as real buttons instead of plain text — the expected use is opening that record's own detail view (a drawer, most often) elsewhere on the page. Omit either one for a name with nothing to open — a departed employee, a "System" actor, a settings change with no single record behind it:`]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(t.h2,{id:"long-text",children:"Long text"}),`
`,e.jsxs(t.p,{children:["The subject+description line wraps onto as many lines as it needs — a long description reads better in full than clipped mid-sentence. The byline still truncates with an ellipsis rather than wrapping, since ",e.jsx(t.code,{children:"actor"}),"/",e.jsx(t.code,{children:"timestamp"})," are a short, fixed-shape line rather than free-form prose:"]}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(t.h2,{id:"props",children:"Props"}),`
`,e.jsxs(t.p,{children:[`| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `,e.jsx(t.code,{children:"subject"})," | ",e.jsx(t.code,{children:"ReactNode"}),` | — | The bold, link-colored lead segment. Omit for no single clear subject. |
| `,e.jsx(t.code,{children:"description"})," | ",e.jsx(t.code,{children:"ReactNode"}),` | — | The rest of the sentence. |
| `,e.jsx(t.code,{children:"actor"})," | ",e.jsx(t.code,{children:"ReactNode"}),` | — | Who performed the action — shown in the byline. |
| `,e.jsx(t.code,{children:"timestamp"})," | ",e.jsx(t.code,{children:"ReactNode"})," | — | Already-formatted display text (not a ",e.jsx(t.code,{children:"Date"}),`) — this component doesn't format dates itself. |
| `,e.jsx(t.code,{children:"onSubjectClick"})," | ",e.jsx(t.code,{children:"() => void"})," | — | Renders ",e.jsx(t.code,{children:"subject"}),` as a real button. Omit for plain text. |
| `,e.jsx(t.code,{children:"onActorClick"})," | ",e.jsx(t.code,{children:"() => void"})," | — | Renders ",e.jsx(t.code,{children:"actor"}),` as a real button. Omit for plain text. |
| `,e.jsx(t.code,{children:"className"})," | ",e.jsx(t.code,{children:"string"})," | — | Applied to the root element. |"]})]})}function De(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{De as default};
