import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as s}from"./index-DUy19JZU.js";import{c as r,P as l,b as c,C as n}from"./index-R-0gtsrS.js";import{S as d,D as a,W as h,E as p,c as m,a as x,b as u}from"./Select.stories-CG_W5qk9.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function o(t){const i={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:d}),`
`,e.jsx(i.h1,{id:"select",children:"Select"}),`
`,e.jsxs(i.p,{children:["A single-choice field. Built on ",e.jsx(i.code,{children:"<DropdownMenu>"})," — the trigger is styled identically to ",e.jsx(i.code,{children:"<TextInput>"})," (same tokens, same states), and the options list is a ",e.jsx(i.code,{children:"<DropdownMenuContent>"})," full of ",e.jsx(i.code,{children:"<DropdownMenuItem>"}),"s."]}),`
`,e.jsx(l,{}),`
`,e.jsx(c,{}),`
`,e.jsx(i.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Choosing one value from a list of options in a form."}),`
`,e.jsxs(i.li,{children:["Use ",e.jsx(i.code,{children:'status="error"'})," / ",e.jsx(i.code,{children:'"success"'})," with ",e.jsx(i.code,{children:"helpText"})," for validation feedback, exactly like ",e.jsx(i.code,{children:"<TextInput>"}),"."]}),`
`]}),`
`,e.jsx(i.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["For more than ~10-ish options, or when users need to search — a ",e.jsx(i.code,{children:"<Combobox>"})," (typeahead) fits better."]}),`
`,e.jsxs(i.li,{children:["For 2-5 always-visible options — ",e.jsx(i.code,{children:"<RadioButton>"})," or ",e.jsx(i.code,{children:"<SegmentedControl>"})," avoids the extra click to see the choices."]}),`
`,e.jsxs(i.li,{children:["For choosing more than one value — see ",e.jsx(i.code,{children:"<MultiSelect>"}),", the same trigger/panel with removable chips instead of a single value."]}),`
`]}),`
`,e.jsx(i.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import { Select } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
];

<Select label="Fruit" placeholder="Select a fruit" options={options} />
`})}),`
`,e.jsx(i.h3,{id:"controlled",children:"Controlled"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`const [value, setValue] = useState<string>();

<Select label="Fruit" options={options} value={value} onChange={setValue} />
`})}),`
`,e.jsxs(i.h3,{id:"in-a-native-form",children:["In a native ",e.jsx(i.code,{children:"<form>"})]}),`
`,e.jsxs(i.p,{children:["Pass ",e.jsx(i.code,{children:"name"})," to render a hidden input alongside the trigger, so the selected value shows up in ",e.jsx(i.code,{children:"FormData"})," like any other field:"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<Select name="fruit" label="Fruit" options={options} />
`})}),`
`,e.jsx(i.h3,{id:"with-validation",children:"With validation"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<Select
  label="Fruit"
  options={options}
  status="error"
  helpText="Please choose a fruit."
/>
`})}),`
`,e.jsx(i.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n,{of:a}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h2,{id:"width",children:"Width"}),`
`,e.jsxs(i.p,{children:["Fills its container's width by default, same as ",e.jsx(i.code,{children:"<TextInput>"}),"/",e.jsx(i.code,{children:"<Textarea>"})," — not sized to the selected option's own text. That took an explicit fix: ",e.jsx(i.code,{children:"<Select>"})," is built on ",e.jsx(i.code,{children:"<DropdownMenu>"}),", whose root wrapper is ",e.jsx(i.code,{children:"display: inline-block"})," (correct for a plain dropdown trigger button, which shouldn't stretch on its own) — scoped to ",e.jsx(i.code,{children:".ds-select"}),", it's overridden to fill the field's width instead."]}),`
`,e.jsxs(i.p,{children:["The options list matches that same width exactly — ",e.jsx(i.code,{children:"<DropdownMenuContent matchTriggerWidth>"})," — rather than shrinking to its longest option's own text (which truncates instead of widening the menu), so the open menu lines up with the field edge-to-edge exactly like a native ",e.jsx(i.code,{children:"<select>"})," would."]}),`
`,e.jsx(i.h2,{id:"options",children:"Options"}),`
`,e.jsxs(i.p,{children:["Each option is ",e.jsx(i.code,{children:"{ value, label, disabled?, leadingIcon? }"}),". ",e.jsx(i.code,{children:"disabled"})," options are unclickable and skipped by keyboard navigation — both handled by ",e.jsx(i.code,{children:"<DropdownMenuItem>"}),", not reimplemented here."]}),`
`,e.jsx(i.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsxs(i.p,{children:["Everything interactive — open/close, outside-click, Escape, Arrow/Home/End navigation, the open/close transition, automatic viewport-collision flipping — comes directly from ",e.jsx(i.code,{children:"<DropdownMenu>"}),". Select only adds: a field-styled trigger showing the selected label (or placeholder), a chevron that flips when open, and turning a click into a selected value. See the DropdownMenu docs for the full behavior contract."]}),`
`,e.jsx(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["The trigger is a real ",e.jsx(i.code,{children:"<button>"}),", labeled via a native ",e.jsx(i.code,{children:"<label htmlFor>"})," — clicking the label focuses/activates it, same as ",e.jsx(i.code,{children:"<TextInput>"}),"."]}),`
`,e.jsxs(i.li,{children:["Sets ",e.jsx(i.code,{children:'aria-invalid="true"'})," automatically when ",e.jsx(i.code,{children:'status="error"'}),"."]}),`
`,e.jsxs(i.li,{children:["Disabled uses the native ",e.jsx(i.code,{children:"disabled"})," attribute on the trigger button."]}),`
`,e.jsxs(i.li,{children:["Options inherit ",e.jsx(i.code,{children:"<DropdownMenu>"}),"'s ",e.jsx(i.code,{children:'role="menu"'}),"/",e.jsx(i.code,{children:'role="menuitem"'})," structure. Note this is the ARIA ",e.jsx(i.em,{children:"menu"})," pattern, not the dedicated ",e.jsx(i.em,{children:"listbox"})," pattern a native ",e.jsx(i.code,{children:"<select>"})," uses — screen reader announcements will differ slightly from a native select. Worth knowing if you're auditing against a strict listbox spec."]}),`
`]}),`
`,e.jsx(i.h2,{id:"props",children:"Props"}),`
`,e.jsxs(i.p,{children:["See the ",e.jsx(i.strong,{children:"Controls"})," table above for the full list, types, and defaults — generated automatically from the TypeScript types."]})]})}function Me(t={}){const{wrapper:i}={...s(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(o,{...t})}):o(t)}export{Me as default};
