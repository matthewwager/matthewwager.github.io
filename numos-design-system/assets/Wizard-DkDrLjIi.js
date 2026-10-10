import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as o}from"./index-DUy19JZU.js";import{c as r,P as a,C as i,b as d}from"./index-R-0gtsrS.js";import{W as l,D as c,C as h}from"./Wizard.stories-D8irv4G3.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function s(t){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(n.h1,{id:"wizard",children:"Wizard"}),`
`,e.jsxs(n.p,{children:['A multi-step "create object" flow — a persistent header (flow title, a step-panel toggle, an optional "Save & Exit", and a progress bar), a step panel (a vertical ',e.jsx(n.code,{children:"<ProgressIndicator>"}),") beside the current step's heading and fields, and a footer that navigates Back/Continue/Finish. Matches Figma's Wizard exactly — ",e.jsx(n.code,{children:"WizardHeader"}),", ",e.jsx(n.code,{children:"StepPanel"}),", ",e.jsx(n.code,{children:"WizardStepHeading"}),", and ",e.jsx(n.code,{children:"FormFooter"})," are all real pieces of it, not approximated."]}),`
`,e.jsx(a,{}),`
`,e.jsx(n.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Creating an object whose fields naturally group into a handful of ordered steps — onboarding a new record, a setup flow — where showing one step at a time, with a sense of overall progress, reduces how much someone has to take in at once."}),`
`]}),`
`,e.jsx(n.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["A short form with a handful of fields that fit comfortably on one screen — that's just ",e.jsx(n.code,{children:"<Form>"})," (see its own docs), no steps needed."]}),`
`,e.jsxs(n.li,{children:["Viewing, editing, or deleting ",e.jsx(n.em,{children:"existing"})," records in bulk — that's tabular CRUD (a data table + ",e.jsx(n.code,{children:"<Modal>"}),"), which depends on table cell/row/column components this library doesn't have yet."]}),`
`]}),`
`,e.jsx(n.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Wizard } from "@numosai/ui";
import type { WizardStep } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

const steps: WizardStep[] = [
  {
    id: "details",
    label: "Details", // shown in the step panel's progress list
    heading: "Employee details", // shown above this step's fields
    description: "Basic information used across the rest of the flow.",
    content: (
      <>
        <TextInput name="fullName" label="Full name" required />
        <TextInput name="email" label="Email" type="email" required />
      </>
    ),
  },
  // ...more steps
];

<Wizard
  title="Add employee"
  steps={steps}
  onFinish={(event) => {
    const data = new FormData(event.currentTarget);
    // create the object with data
  }}
/>
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"steps"})," is the whole outline — Wizard supplies the structure (header, progress, panel, footer navigation); you supply each step's heading, description, and fields. Adding, removing, or reordering steps needs nothing else."]}),`
`,e.jsx(i,{of:c}),`
`,e.jsxs(n.p,{children:["Every story on this page lives inside the padded, light/dark split canvas every component gets, which caps Wizard to a fixed preview height rather than the full viewport it actually fills next to ",e.jsx(n.code,{children:"<Navigation>"}),". To see it at real size, open ",e.jsx(n.strong,{children:'"Full viewport (open in new tab)"'})," in its own tab (the toolbar icon above its canvas) — that story opts out of the split specifically so a new tab shows Wizard filling the whole browser viewport."]}),`
`,e.jsxs(n.h2,{id:"one-form-every-step-mounted",children:["One ",e.jsx(n.code,{children:"<form>"}),", every step mounted"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"<Wizard>"})," renders one real ",e.jsx(n.code,{children:"<form>"}),". Every step's ",e.jsx(n.code,{children:"content"})," is mounted the entire time — only the current step's is visible, the rest get a ",e.jsx(n.code,{children:"hidden"})," attribute instead of being unmounted. That's deliberate: an uncontrolled ",e.jsx(n.code,{children:"<TextInput>"}),"/",e.jsx(n.code,{children:"<Select>"}),"/",e.jsx(n.code,{children:"<RadioGroup>"}),"/etc. keeps whatever value someone entered once they move past its step, since it's never actually removed from the DOM. ",e.jsx(n.code,{children:"onFinish"})," receives the same ",e.jsx(n.code,{children:"<form>"}),"'s submit event on the last step, so ",e.jsx(n.code,{children:"new FormData(event.currentTarget)"})," collects every step's fields together in one read — no per-field React state required."]}),`
`,e.jsxs(n.p,{children:["A side effect worth knowing: the HTML spec excludes non-rendered controls (anything with a ",e.jsx(n.code,{children:"hidden"})," attribute, on itself or an ancestor) from constraint validation. So a ",e.jsx(n.code,{children:"required"})," field on a step you've already moved past doesn't block submitting a ",e.jsx(n.em,{children:"later"})," step — but it does still block advancing past its own step, which is exactly the validation behavior a wizard wants."]}),`
`,e.jsx(n.h2,{id:"the-step-panel",children:"The step panel"}),`
`,e.jsxs(n.p,{children:["The step panel shows a vertical ",e.jsx(n.code,{children:"<ProgressIndicator>"})," — one entry per step, ",e.jsx(n.code,{children:'state: "completed"'})," for everything before the current one — toggled open/closed by the header's leading icon button. ",e.jsx(n.code,{children:"defaultStepPanelExpanded"})," sets its initial state (defaults to collapsed); ",e.jsx(n.code,{children:"stepPanelExpanded"}),"/",e.jsx(n.code,{children:"onStepPanelExpandedChange"})," control it yourself if the surrounding page needs to know."]}),`
`,e.jsx(i,{of:void 0}),`
`,e.jsx(n.h2,{id:"labels",children:"Labels"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"nextLabel"}),' (default "Continue") and ',e.jsx(n.code,{children:"finishLabel"}),' (default "Finish") — the same button, just its label and what submitting it does change on the last step.']}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h2,{id:"save--exit",children:"Save & Exit"}),`
`,e.jsxs(n.p,{children:["Pass ",e.jsx(n.code,{children:"onSaveExit"}),` to show a "Save & Exit" action in the header — omit it and the header just won't render one, the same optional-affordance pattern as `,e.jsx(n.code,{children:"<Modal>"}),"'s ",e.jsx(n.code,{children:"onClose"}),"."]}),`
`,e.jsx(n.h2,{id:"composing-with-app-chrome",children:"Composing with app chrome"}),`
`,e.jsxs(n.p,{children:["Figma's Wizard sits next to ",e.jsx(n.code,{children:"<Navigation>"}),", but Wizard doesn't render ",e.jsx(n.code,{children:"<Navigation>"})," itself — that's ordinary page chrome the surrounding app composes around it, the same reasoning ",e.jsx(n.code,{children:"<Header>"})," doesn't own ",e.jsx(n.code,{children:"<Navigation>"})," either:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<div style={{ display: "flex", height: "100vh" }}>
  <Navigation>...</Navigation>
  <Wizard title="Add employee" steps={steps} onFinish={handleFinish} />
</div>
`})}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The progress bar is a real ",e.jsx(n.code,{children:'role="progressbar"'})," with ",e.jsx(n.code,{children:"aria-valuenow"}),"/",e.jsx(n.code,{children:"aria-valuemin"}),"/",e.jsx(n.code,{children:"aria-valuemax"})," and an ",e.jsx(n.code,{children:"aria-label"})," stating which step it's on."]}),`
`,e.jsxs(n.li,{children:["The step-panel toggle is a real ",e.jsx(n.code,{children:"<button>"})," with ",e.jsx(n.code,{children:"aria-expanded"}),' and a label that flips between "Collapse step panel"/"Expand step panel".']}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"title"})," (required), ",e.jsx(n.code,{children:"steps"})," (required — ",e.jsx(n.code,{children:"{ id, label, heading, description?, content }[]"}),"), ",e.jsx(n.code,{children:"onFinish"})," (required), ",e.jsx(n.code,{children:"stepIndex"}),", ",e.jsx(n.code,{children:"defaultStepIndex"}),", ",e.jsx(n.code,{children:"onStepIndexChange"}),", ",e.jsx(n.code,{children:"stepPanelExpanded"}),", ",e.jsx(n.code,{children:"defaultStepPanelExpanded"}),", ",e.jsx(n.code,{children:"onStepPanelExpandedChange"}),", ",e.jsx(n.code,{children:"onSaveExit"}),", ",e.jsx(n.code,{children:"secondaryAction"}),", ",e.jsx(n.code,{children:"nextLabel"}),", ",e.jsx(n.code,{children:"finishLabel"}),", ",e.jsx(n.code,{children:"className"}),"."]}),`
`,e.jsx(d,{})]})}function ze(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{ze as default};
