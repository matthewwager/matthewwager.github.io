import{j as i}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as s}from"./index-DUy19JZU.js";import{c as r,P as o,b as a,C as l}from"./index-R-0gtsrS.js";import{B as m,A as p}from"./Banner.stories-Ccj5piX-.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function n(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...e.components};return i.jsxs(i.Fragment,{children:[i.jsx(r,{of:m}),`
`,i.jsx(t.h1,{id:"banner",children:"Banner"}),`
`,i.jsx(t.p,{children:`A static, inline status message. Matches Figma's "Alert" component (internally named "Banner" in the file). Renders in place — no portal, positioning, timers, or transition.`}),`
`,i.jsx(o,{}),`
`,i.jsx(a,{}),`
`,i.jsx(t.h2,{id:"when-to-use",children:"When to use"}),`
`,i.jsxs(t.ul,{children:[`
`,i.jsx(t.li,{children:"A persistent status message embedded in page content — at the top of a form, inside a card, above a table."}),`
`,i.jsxs(t.li,{children:["Content that should stay visible until the user dismisses it or the underlying condition changes (unlike ",i.jsx(t.code,{children:"<Alert>"}),", it never times out on its own)."]}),`
`]}),`
`,i.jsx(t.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,i.jsxs(t.ul,{children:[`
`,i.jsxs(t.li,{children:["For a transient, self-dismissing notification that floats over the page — use ",i.jsx(t.code,{children:"<Alert>"})," instead. It renders this exact same visual, just portaled to a screen edge with a slide-in/out transition and an optional auto-dismiss timer."]}),`
`]}),`
`,i.jsx(t.h2,{id:"implementation",children:"Implementation"}),`
`,i.jsx(t.pre,{children:i.jsx(t.code,{className:"language-tsx",children:`import { Banner } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<Banner
  status="negative"
  title="Payment failed"
  description="Your card was declined."
/>
`})}),`
`,i.jsx(t.h3,{id:"dismissible",children:"Dismissible"}),`
`,i.jsx(t.pre,{children:i.jsx(t.code,{className:"language-tsx",children:`const [visible, setVisible] = useState(true);

{visible && (
  <Banner
    title="Trial ending soon"
    description="Your trial ends in 3 days."
    onDismiss={() => setVisible(false)}
  />
)}
`})}),`
`,i.jsxs(t.p,{children:[i.jsx(t.code,{children:"onDismiss"})," fires immediately on click — there's no exit animation to wait for (that's specifically what ",i.jsx(t.code,{children:"<Alert>"})," adds). Pass ",i.jsx(t.code,{children:"dismissible={false}"})," to hide the close button entirely."]}),`
`,i.jsx(t.h2,{id:"statuses",children:"Statuses"}),`
`,i.jsx(l,{of:p}),`
`,i.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,i.jsxs(t.ul,{children:[`
`,i.jsxs(t.li,{children:["Renders with ",i.jsx(t.code,{children:'role="alert"'}),", so screen readers announce it when it appears (an ARIA live region, assertive by default)."]}),`
`,i.jsxs(t.li,{children:["The close button has ",i.jsx(t.code,{children:'aria-label="Dismiss"'})," since it has no visible text."]}),`
`]}),`
`,i.jsx(t.h2,{id:"props",children:"Props"}),`
`,i.jsxs(t.p,{children:["See the ",i.jsx(t.strong,{children:"Controls"})," table above for the full list, types, and defaults — generated automatically from the TypeScript types."]})]})}function Ai(e={}){const{wrapper:t}={...s(),...e.components};return t?i.jsx(t,{...e,children:i.jsx(n,{...e})}):n(e)}export{Ai as default};
