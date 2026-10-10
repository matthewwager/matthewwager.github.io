import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as s}from"./index-DUy19JZU.js";import{c as r,C as i}from"./index-R-0gtsrS.js";import{P as a,D as l,V as c,W as d,a as h,b as p}from"./ProgressIndicator.stories-DkubQE-M.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function n(o){const t={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
`,e.jsx(t.h1,{id:"progressindicator",children:"ProgressIndicator"}),`
`,e.jsx(t.p,{children:"A representation of a user's progress through a series of discrete steps."}),`
`,e.jsx(t.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"A multi-step flow with a known, fixed number of steps — onboarding, a checkout, a setup wizard — where showing what's done, what's next, and (if applicable) what failed helps someone orient themselves."}),`
`]}),`
`,e.jsx(t.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["For a single continuous quantity (percent complete, bytes uploaded) — use ",e.jsx(t.code,{children:"<ProgressBar>"}),"."]}),`
`,e.jsxs(t.li,{children:["For a small, linear sequence someone actively navigates back and forth through — use ",e.jsx(t.code,{children:"<Stepper>"})," once it ships; this component only ",e.jsx(t.em,{children:"displays"})," progress, it doesn't drive navigation."]}),`
`]}),`
`,e.jsx(t.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { ProgressIndicator } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<ProgressIndicator
  steps={[
    { label: "Account", state: "completed" },
    { label: "Profile", state: "completed" },
    { label: "Team" },
    { label: "Billing" },
  ]}
/>
`})}),`
`,e.jsxs(t.p,{children:["Each step is ",e.jsx(t.code,{children:"{ label, state? }"})," — ",e.jsx(t.code,{children:"state"})," defaults to ",e.jsx(t.code,{children:'"default"'})," (an upcoming, numbered step) when omitted, so you only need to mark the steps that are ",e.jsx(t.code,{children:'"completed"'})," or ",e.jsx(t.code,{children:'"error"'}),". Hover (or Tab to) a badge below — since this is ",e.jsx(t.code,{children:'orientation="horizontal"'}),", labels aren't shown as text, so each one is in a ",e.jsx(t.code,{children:"<Tooltip>"})," instead."]}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(t.h2,{id:"orientation",children:"Orientation"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:'orientation="vertical"'})," shows each step's label next to it. ",e.jsx(t.code,{children:'orientation="horizontal"'})," (the default) never shows labels at all — that's a real Figma distinction, not a limitation of this implementation: Figma's horizontal variant is just the connected badges, full stop."]}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(t.h2,{id:"error",children:"Error"}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(t.h2,{id:"without-labels",children:"Without labels"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"showStepTitle={false}"})," hides labels even in ",e.jsx(t.code,{children:'orientation="vertical"'}),", leaving just the connected badges — useful in a tight space (e.g. inside a card header) where full step names don't fit."]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(t.h2,{id:"tooltips",children:"Tooltips"}),`
`,e.jsxs(t.p,{children:["Whenever a step's label isn't shown as visible text — always in ",e.jsx(t.code,{children:'orientation="horizontal"'}),", and in ",e.jsx(t.code,{children:'orientation="vertical"'})," when ",e.jsx(t.code,{children:"showStepTitle={false}"})," — its badge gets a ",e.jsx(t.code,{children:"<Tooltip>"})," showing the label instead, so the information isn't lost, just moved to hover/focus. It's a no-op (and adds nothing extra) wherever the label is already visible, so you don't need to think about it in the common vertical-with-labels case. On by default; set ",e.jsx(t.code,{children:"showTooltips={false}"})," to turn it off:"]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(t.h2,{id:"a-note-on-current-step",children:'A note on "current step"'}),`
`,e.jsxs(t.p,{children:[`Figma's Progress Step only defines three states — completed, default (upcoming/numbered), and error — there's no distinct visual for "this is the step I'm on right now." So the step in progress just renders as the next `,e.jsx(t.code,{children:'"default"'})," step, identical to every other upcoming one, unless you choose to mark it ",e.jsx(t.code,{children:'"completed"'})," or ",e.jsx(t.code,{children:'"error"'})," yourself. This isn't an oversight on this component's part; it's a real gap in what Figma defines, called out here rather than silently invented."]}),`
`,e.jsx(t.h2,{id:"connectors",children:"Connectors"}),`
`,e.jsxs(t.p,{children:["The connector leading into a step (to its left, horizontal; above it, vertical) takes ",e.jsx(t.em,{children:"that step's own"}),' color, not the step before it — confirmed directly from Figma: a "completed → default" transition renders the connector in the ',e.jsx(t.em,{children:"default"})," (upcoming) color, not completed. The very first step never has a leading connector at all, since there's nothing before it to connect from."]}),`
`,e.jsx(t.h2,{id:"built-on-badge",children:"Built on Badge"}),`
`,e.jsxs(t.p,{children:["Each step's circle is a real ",e.jsx(t.code,{children:"<Badge>"})," — ",e.jsx(t.code,{children:'"completed"'})," and ",e.jsx(t.code,{children:'"error"'})," map to ",e.jsx(t.code,{children:"<Badge>"}),"'s own ",e.jsx(t.code,{children:'status="complete"'}),"/",e.jsx(t.code,{children:'status="error"'})," icon variants, ",e.jsx(t.code,{children:'"default"'})," maps to ",e.jsx(t.code,{children:'status="neutral"'})," showing the step number. Fixing this component's badges surfaced a real bug in ",e.jsx(t.code,{children:"<Badge>"})," itself: its ",e.jsx(t.code,{children:"complete"}),"/",e.jsx(t.code,{children:"error"})," variants used the same min-width-plus-padding sizing as its text/count variants, which produces an oblong pill instead of a circle for icon-only content — now fixed directly in ",e.jsx(t.code,{children:"Badge.css"}),", so it's correct everywhere ",e.jsx(t.code,{children:"<Badge>"})," is used, not just here."]}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Each badge's icon/number is decorative (",e.jsx(t.code,{children:"aria-hidden"}),`) — a visually-hidden string ("Step 2: completed") carries the actual status to assistive tech, since Figma's badge is visual-only and wouldn't otherwise communicate anything on its own (this applies in `,e.jsx(t.code,{children:'orientation="horizontal"'})," too, even though there's no visible label there for it to sit next to)."]}),`
`,e.jsxs(t.li,{children:["When a badge has a tooltip, it also gets ",e.jsx(t.code,{children:"tabIndex={0}"})," — otherwise a plain ",e.jsx(t.code,{children:"<span>"})," can't receive keyboard focus at all, and the same information a mouse user gets on hover would be unreachable without one."]}),`
`]}),`
`,e.jsx(t.h2,{id:"props",children:"Props"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"steps"})," (required — ",e.jsx(t.code,{children:"{ label, state? }[]"}),"), ",e.jsx(t.code,{children:"orientation"}),", ",e.jsx(t.code,{children:"showStepTitle"}),", ",e.jsx(t.code,{children:"showTooltips"}),", ",e.jsx(t.code,{children:"className"}),"."]})]})}function Fe(o={}){const{wrapper:t}={...s(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{Fe as default};
