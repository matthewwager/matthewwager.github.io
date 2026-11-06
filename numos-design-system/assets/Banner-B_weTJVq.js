import{j as i}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as o}from"./index-DUy19JZU.js";import{d as r,P as a,c as l,C as n}from"./index-CDRLqk4-.js";import{B as m,A as p,C as c}from"./Banner.stories--evL8r7_.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BU9NLRGc.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramCell-CHJIAByx.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function s(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return i.jsxs(i.Fragment,{children:[i.jsx(r,{of:m}),`
`,i.jsx(e.h1,{id:"banner",children:"Banner"}),`
`,i.jsx(e.p,{children:`A static, inline status message. Matches Figma's "Alert" component (internally named "Banner" in the file). Renders in place — no portal, positioning, timers, or transition.`}),`
`,i.jsx(a,{}),`
`,i.jsx(l,{}),`
`,i.jsx(e.h2,{id:"when-to-use",children:"When to use"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsx(e.li,{children:"A persistent status message embedded in page content — at the top of a form, inside a card, above a table."}),`
`,i.jsxs(e.li,{children:["Content that should stay visible until the user dismisses it or the underlying condition changes (unlike ",i.jsx(e.code,{children:"<Alert>"}),", it never times out on its own)."]}),`
`]}),`
`,i.jsx(e.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:["For a transient, self-dismissing notification that floats over the page — use ",i.jsx(e.code,{children:"<Alert>"})," instead. It renders this exact same visual, just portaled to a screen edge with a slide-in/out transition and an optional auto-dismiss timer."]}),`
`]}),`
`,i.jsx(e.h2,{id:"implementation",children:"Implementation"}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-tsx",children:`import { Banner } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<Banner
  status="negative"
  title="Payment failed"
  description="Your card was declined."
/>
`})}),`
`,i.jsx(e.h3,{id:"dismissible",children:"Dismissible"}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-tsx",children:`const [visible, setVisible] = useState(true);

{visible && (
  <Banner
    title="Trial ending soon"
    description="Your trial ends in 3 days."
    onDismiss={() => setVisible(false)}
  />
)}
`})}),`
`,i.jsxs(e.p,{children:[i.jsx(e.code,{children:"onDismiss"})," fires immediately on click — there's no exit animation to wait for (that's specifically what ",i.jsx(e.code,{children:"<Alert>"})," adds). Pass ",i.jsx(e.code,{children:"dismissible={false}"})," to hide the close button entirely."]}),`
`,i.jsx(e.h2,{id:"statuses",children:"Statuses"}),`
`,i.jsx(n,{of:p}),`
`,i.jsx(e.h2,{id:"custom-icon",children:"Custom icon"}),`
`,i.jsxs(e.p,{children:[i.jsx(e.code,{children:"icon"})," replaces the status's own icon while keeping its colors — e.g. a sparkles icon on an AI-written summary:"]}),`
`,i.jsx(n,{of:c}),`
`,i.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:["Renders with ",i.jsx(e.code,{children:'role="alert"'}),", so screen readers announce it when it appears (an ARIA live region, assertive by default). For static content that's part of the page rather than news — like a summary at the top of a record — pass ",i.jsx(e.code,{children:'role="note"'})," so it isn't announced every time it renders."]}),`
`,i.jsxs(e.li,{children:["The close button has ",i.jsx(e.code,{children:'aria-label="Dismiss"'})," since it has no visible text."]}),`
`]}),`
`,i.jsx(e.h2,{id:"props",children:"Props"}),`
`,i.jsxs(e.p,{children:["See the ",i.jsx(e.strong,{children:"Controls"})," table above for the full list, types, and defaults — generated automatically from the TypeScript types."]})]})}function Ai(t={}){const{wrapper:e}={...o(),...t.components};return e?i.jsx(e,{...t,children:i.jsx(s,{...t})}):s(t)}export{Ai as default};
