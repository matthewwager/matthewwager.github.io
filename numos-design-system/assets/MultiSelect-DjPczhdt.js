import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as s}from"./index-DUy19JZU.js";import{c as l,P as r,b as c,C as t}from"./index-R-0gtsrS.js";import{M as a,D as d,W as h,E as p,b as m,a as u,S as x}from"./MultiSelect.stories-D188nvWi.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function o(i){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:a}),`
`,e.jsx(n.h1,{id:"multiselect",children:"MultiSelect"}),`
`,e.jsxs(n.p,{children:['A multi-choice field — the "checkbox" side of the same distinction ',e.jsx(n.code,{children:"<Select>"})," draws for a single choice. Built on the same pieces: ",e.jsx(n.code,{children:"<DropdownMenu>"})," for the panel, ",e.jsx(n.code,{children:"<FieldLabel>"})," for the label, and ",e.jsx(n.code,{children:"<Label>"}),"'s own token classes for the removable chips."]}),`
`,e.jsx(r,{}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Choosing any number of values from a list of options in a form."}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:'status="error"'})," / ",e.jsx(n.code,{children:'"success"'})," with ",e.jsx(n.code,{children:"helpText"})," for validation feedback, exactly like ",e.jsx(n.code,{children:"<Select>"}),"/",e.jsx(n.code,{children:"<TextInput>"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Choosing exactly one value — ",e.jsx(n.code,{children:"<Select>"})," is the right primitive there, not this component with a 1-item cap bolted on."]}),`
`,e.jsx(n.li,{children:"More than ~10-ish options, or when users need to search — a searchable multi-select (typeahead) fits better; this component doesn't filter its list."}),`
`]}),`
`,e.jsx(n.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { MultiSelect } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
];

<MultiSelect label="Fruit" placeholder="Select fruit" options={options} />
`})}),`
`,e.jsx(n.h3,{id:"controlled",children:"Controlled"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [value, setValue] = useState<string[]>([]);

<MultiSelect label="Fruit" options={options} value={value} onChange={setValue} />
`})}),`
`,e.jsxs(n.h3,{id:"in-a-native-form",children:["In a native ",e.jsx(n.code,{children:"<form>"})]}),`
`,e.jsxs(n.p,{children:["Pass ",e.jsx(n.code,{children:"name"})," to render one hidden input per selected value (all sharing that ",e.jsx(n.code,{children:"name"}),"), so every value shows up via ",e.jsx(n.code,{children:"FormData.getAll(name)"})," — the same pattern a checkbox group's own values use, not a single hidden input like ",e.jsx(n.code,{children:"<Select>"}),"'s:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<MultiSelect name="fruit" label="Fruit" options={options} />
`})}),`
`,e.jsx(n.h3,{id:"with-validation",children:"With validation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<MultiSelect
  label="Fruit"
  options={options}
  status="error"
  helpText="Please choose at least one fruit."
/>
`})}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t,{of:d}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(n.h2,{id:"the-field-shows-two-different-things-depending-on-openclosed",children:"The field shows two different things, depending on open/closed"}),`
`,e.jsxs(n.p,{children:["Confirmed from Figma: closed, the field shows a plain comma-joined text summary of the selected labels (truncated with an ellipsis, exactly like a single ",e.jsx(n.code,{children:"<Select>"}),"'s own value) — not chips. Chips only appear once the panel is open. A field that permanently grows chip-tall for every prior selection would make a long-selected field dominate the rest of the form; collapsing to a one-line summary when closed avoids that, at the cost of the chips' own remove buttons only being reachable while the panel is open."]}),`
`,e.jsxs(n.p,{children:["Each chip is ",e.jsx(n.code,{children:'<Label status="info">'}),"'s own token classes, not the ",e.jsx(n.code,{children:"<Label>"})," component itself — its ",e.jsx(n.code,{children:"trailingIcon"})," slot is intentionally ",e.jsx(n.code,{children:"aria-hidden"}),' (correct for a decorative icon), which would make a real "remove" button invisible to assistive tech if used that way. The remove button is a genuine focusable ',e.jsx(n.code,{children:'<button aria-label="Remove {value}">'})," instead, styled to match."]}),`
`,e.jsx(n.h2,{id:"clearing",children:"Clearing"}),`
`,e.jsx(n.p,{children:'Once the panel is open with a selection, the trailing chevron is replaced by a "Clear all" button — clicking it empties the selection without closing the panel, so you can immediately pick something else. Removing one chip at a time works the same way, both without toggling the panel closed (each stops its own click from reaching the field, which is what the chevron/trigger click listens for).'}),`
`,e.jsx(n.h2,{id:"selected-options-keep-their-checkmark-independent-of-hover",children:"Selected options keep their checkmark, independent of hover"}),`
`,e.jsxs(n.p,{children:["In the open panel, every already-selected option shows a trailing checkmark — not just the one currently hovered or keyboard-focused. Hover/keyboard-focus is its own real ",e.jsx(n.code,{children:":focus-visible"}),"/",e.jsx(n.code,{children:":hover"})," state on ",e.jsx(n.code,{children:"<DropdownMenuItem>"}),", unchanged from ",e.jsx(n.code,{children:"<Select>"}),`'s own panel; the checkmark is a second, independent signal for "this one is picked," since more than one can be at once. Clicking an option toggles it in or out of the selection without closing the panel (`,e.jsx(n.code,{children:"closeOnSelect={false}"}),"), unlike ",e.jsx(n.code,{children:"<Select>"}),", where any click is necessarily final."]}),`
`,e.jsx(n.h2,{id:"options",children:"Options"}),`
`,e.jsxs(n.p,{children:["Each option is ",e.jsx(n.code,{children:"{ value, label, disabled? }"}),". ",e.jsx(n.code,{children:"disabled"})," options are unclickable and skipped by keyboard navigation — both handled by ",e.jsx(n.code,{children:"<DropdownMenuItem>"}),", not reimplemented here."]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The field is a ",e.jsx(n.code,{children:'role="button"'})," div, not a real ",e.jsx(n.code,{children:"<button>"})," — same reasoning as ",e.jsx(n.code,{children:"<Card>"}),": it needs to contain other real interactive controls (each chip's own remove button, and the clear-all button), and a ",e.jsx(n.code,{children:"<button>"})," can't legally contain another one. ",e.jsx(n.code,{children:"tabIndex"}),"/keyboard handling reproduce real button behavior (Enter and Space both open the panel) without that constraint."]}),`
`,e.jsxs(n.li,{children:["Sets ",e.jsx(n.code,{children:'aria-invalid="true"'})," automatically when ",e.jsx(n.code,{children:'status="error"'}),", and ",e.jsx(n.code,{children:'aria-disabled="true"'})," when ",e.jsx(n.code,{children:"disabled"})," (paired with ",e.jsx(n.code,{children:"pointer-events: none"})," in CSS, since a plain div has no native ",e.jsx(n.code,{children:"disabled"})," attribute to fall back on)."]}),`
`,e.jsxs(n.li,{children:["Options inherit ",e.jsx(n.code,{children:"<DropdownMenu>"}),"'s ",e.jsx(n.code,{children:'role="menu"'}),"/",e.jsx(n.code,{children:'role="menuitem"'})," structure — see ",e.jsx(n.code,{children:"<Select>"}),"'s own accessibility notes for the same ARIA ",e.jsx(n.em,{children:"menu"})," vs. ",e.jsx(n.em,{children:"listbox"})," caveat."]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:["See the ",e.jsx(n.strong,{children:"Controls"})," table above for the full list, types, and defaults — generated automatically from the TypeScript types."]})]})}function De(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{De as default};
