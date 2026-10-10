import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as s}from"./index-DUy19JZU.js";import{c as t,P as c,b as l,C as r}from"./index-R-0gtsrS.js";import{C as d,D as a,I as h,E as p,a as m,b as x,G as j}from"./Checkbox.stories-Ba92oJYm.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function n(o){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:d}),`
`,e.jsx(i.h1,{id:"checkbox",children:"Checkbox"}),`
`,e.jsxs(i.p,{children:["A real ",e.jsx(i.code,{children:'<input type="checkbox">'}),`. Figma's Hover/Focus/Checked/Disabled "states" aren't separate props here — they're real `,e.jsx(i.code,{children:":hover"}),", ",e.jsx(i.code,{children:":focus-visible"}),", ",e.jsx(i.code,{children:":checked"}),", and ",e.jsx(i.code,{children:":disabled"})," behavior, the same philosophy as ",e.jsx(i.code,{children:"<TextInput>"}),". Only ",e.jsx(i.code,{children:"error"})," and ",e.jsx(i.code,{children:"indeterminate"})," are props, since neither is something a browser can infer or express as an HTML attribute."]}),`
`,e.jsx(c,{}),`
`,e.jsx(l,{}),`
`,e.jsx(i.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["A single yes/no or on/off setting, or one option within a ",e.jsx(i.code,{children:"<CheckboxGroup>"})," where more than one can be selected at once."]}),`
`]}),`
`,e.jsx(i.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:['For a single on/off setting that takes effect immediately (no separate "Save" step) — use ',e.jsx(i.code,{children:"<Toggle>"})," instead; Checkbox implies a pending choice, Toggle implies an immediate one."]}),`
`,e.jsxs(i.li,{children:["For a set of options where only one can be selected — use ",e.jsx(i.code,{children:"<RadioGroup>"}),"."]}),`
`]}),`
`,e.jsx(i.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import { Checkbox } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

const [checked, setChecked] = useState(false);

<Checkbox label="Send me product updates" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
`})}),`
`,e.jsx(r,{of:a}),`
`,e.jsx(i.h2,{id:"indeterminate",children:"Indeterminate"}),`
`,e.jsxs(i.p,{children:[`A third visual state for "some, but not all, of this group's children are checked" — common for a "select all" checkbox above a list. There's no HTML attribute for this (unlike `,e.jsx(i.code,{children:"checked"}),"), so ",e.jsx(i.code,{children:"indeterminate"})," sets the real DOM property imperatively via a ref internally; you just pass the prop."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<Checkbox label="Select all" indeterminate />
`})}),`
`,e.jsx(r,{of:h}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"indeterminate"})," is purely visual — it doesn't affect ",e.jsx(i.code,{children:"checked"}),". Clicking an indeterminate checkbox checks it (or unchecks it), same as a native checkbox; you're expected to derive ",e.jsx(i.code,{children:"indeterminate"}),' from your own "are some, but not all, children checked?" logic and pass it back down.']}),`
`,e.jsx(i.h2,{id:"error",children:"Error"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<Checkbox label="I agree to the terms" error helpText="You must agree to continue" />
`})}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(i.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(i.p,{children:["Real ",e.jsx(i.code,{children:"disabled"}),`, including the checked+disabled combination (Figma's "Disabled, Checked=True" state — a muted fill rather than the full brand color, so a locked-in checked box still reads as visually distinct from an interactive one):`]}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(i.h2,{id:"groups",children:"Groups"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"<CheckboxGroup>"})," is a real ",e.jsx(i.code,{children:"<fieldset>"}),"/",e.jsx(i.code,{children:"<legend>"}),` — assistive tech announces the group's label once, not per checkbox. Figma's "Checkbox Group" is just a layout symbol (a vertical stack with a gap), not a detailed spec, so this is a straightforward wrapper rather than something pulled from distinct Figma states.`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<CheckboxGroup label="Notify me about" helpText="Pick as many as you'd like">
  <Checkbox label="Comments" />
  <Checkbox label="Mentions" />
  <Checkbox label="Weekly digest" />
</CheckboxGroup>
`})}),`
`,e.jsx(r,{of:j}),`
`,e.jsx(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"label"})," renders as a real ",e.jsx(i.code,{children:"<label htmlFor>"})," — clicking it toggles the checkbox."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"error"})," sets ",e.jsx(i.code,{children:"aria-invalid"})," on the input."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"<CheckboxGroup>"}),"'s ",e.jsx(i.code,{children:"label"})," is a ",e.jsx(i.code,{children:"<legend>"}),", not a floating ",e.jsx(i.code,{children:"<label>"})," — it's read once for the whole group, not repeated per option."]}),`
`]}),`
`,e.jsx(i.h2,{id:"props",children:"Props"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"label"}),", ",e.jsx(i.code,{children:"helpText"}),", ",e.jsx(i.code,{children:"error"}),", ",e.jsx(i.code,{children:"indeterminate"}),", plus any native ",e.jsx(i.code,{children:"<input>"})," prop (",e.jsx(i.code,{children:"checked"}),", ",e.jsx(i.code,{children:"onChange"}),", ",e.jsx(i.code,{children:"disabled"}),", etc.). ",e.jsx(i.code,{children:"<CheckboxGroup>"}),": ",e.jsx(i.code,{children:"label"}),", ",e.jsx(i.code,{children:"helpText"}),", ",e.jsx(i.code,{children:"error"}),", ",e.jsx(i.code,{children:"children"}),"."]})]})}function Ge(o={}){const{wrapper:i}={...s(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(n,{...o})}):n(o)}export{Ge as default};
