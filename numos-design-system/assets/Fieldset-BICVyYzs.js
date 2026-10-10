import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as o}from"./index-DUy19JZU.js";import{c as r,C as n}from"./index-R-0gtsrS.js";import{F as l,D as d,S as a,E as c}from"./Fieldset.stories-D284OKLj.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function t(s){const i={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(i.h1,{id:"fieldset",children:"Fieldset"}),`
`,e.jsxs(i.p,{children:[`A single group label sitting above otherwise-unlabeled fields. Matches Figma's Fieldset exactly — its reference example is an "Address" group: one legend, then Street Address 1, Street Address 2, City, and a State/Zip row, with only `,e.jsx(i.code,{children:"placeholder"})," text (not a per-field ",e.jsx(i.code,{children:"label"}),") distinguishing them."]}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(i.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["A group of fields that reads as one real-world concept a user already recognizes — an address, a name, a date range — where a per-field ",e.jsx(i.code,{children:"label"})," above every input would mostly just repeat what the placeholder already says."]}),`
`,e.jsx(i.li,{children:"Anywhere you want one accessible group name announced once, rather than duplicating context into every field's own label."}),`
`]}),`
`,e.jsx(i.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Fields that aren't self-evident from placeholder text alone, or where getting one wrong has real cost (a password field, a field with validation rules) — give those their own visible ",e.jsx(i.code,{children:"label"})," via the field's own ",e.jsx(i.code,{children:"label"})," prop instead."]}),`
`,e.jsxs(i.li,{children:["A single field — ",e.jsx(i.code,{children:"Fieldset"})," groups more than one; a lone field doesn't need a wrapping legend."]}),`
`]}),`
`,e.jsx(i.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import { Fieldset, FieldsetRow, Select, TextInput } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

function AddressFields() {
  return (
    <Fieldset label="Address" size="md">
      <TextInput size="md" placeholder="Street Address 1" aria-label="Street address 1" />
      <TextInput size="md" placeholder="Street Address 2" aria-label="Street address 2" />
      <TextInput size="md" placeholder="City" aria-label="City" />
      <FieldsetRow>
        <Select size="md" options={stateOptions} placeholder="State or Province" />
        <TextInput size="md" placeholder="Zip or Postal Code" aria-label="Zip or postal code" />
      </FieldsetRow>
    </Fieldset>
  );
}
`})}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"Fieldset"})," renders a real ",e.jsx(i.code,{children:"<fieldset>"})," with a ",e.jsx(i.code,{children:'<FieldLabel as="legend">'})," — same reasoning as ",e.jsx(i.code,{children:"<RadioGroup>"}),": assistive tech announces the group's label once, instead of needing every field inside to repeat it."]}),`
`,e.jsx(i.h2,{id:"fields-are-plain-unlabeled-inputs",children:"Fields are plain, unlabeled inputs"}),`
`,e.jsxs(i.p,{children:["Every child is just an ordinary ",e.jsx(i.code,{children:"<TextInput>"}),"/",e.jsx(i.code,{children:"<Select>"}),", used without its own ",e.jsx(i.code,{children:"label"})," prop — ",e.jsx(i.code,{children:"Fieldset"})," doesn't wrap or specialize them. That has one real accessibility consequence worth handling deliberately: dropping the visible ",e.jsx(i.code,{children:"label"})," is a ",e.jsx(i.em,{children:"display"})," choice, not an invitation to drop the accessible name too. A ",e.jsx(i.code,{children:"placeholder"})," disappears the moment someone starts typing, so:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"TextInput"})})," needs an explicit ",e.jsx(i.code,{children:"aria-label"})," (or ",e.jsx(i.code,{children:"aria-labelledby"}),") alongside its ",e.jsx(i.code,{children:"placeholder"})," — its ",e.jsx(i.code,{children:"placeholder"})," is a real HTML attribute, not reliable as an accessible name on its own."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"Select"})}),` doesn't need one — its "placeholder" is real visible text rendered inside the trigger button (not a vanishing attribute), so the button already has a valid accessible name from its own content.`]}),`
`]}),`
`,e.jsx(i.h2,{id:"rows-of-side-by-side-fields",children:"Rows of side-by-side fields"}),`
`,e.jsx(n,{of:a}),`
`,e.jsxs(i.p,{children:["Use ",e.jsx(i.code,{children:"<FieldsetRow>"})," to put fields on one line sharing the width equally (State next to Zip, City next to State, etc.) — it's a pure layout helper with no label or grouping semantics of its own, since the parent ",e.jsx(i.code,{children:"<Fieldset>"})," already supplies those for the whole group."]}),`
`,e.jsx(i.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"size"})," (",e.jsx(i.code,{children:"sm"}),"/",e.jsx(i.code,{children:"md"}),"/",e.jsx(i.code,{children:"lg"}),") only scales the legend's own type, via ",e.jsx(i.code,{children:"<FieldLabel>"}),"'s existing size scale — it does ",e.jsx(i.strong,{children:"not"})," cascade to the fields inside. Pass the same ",e.jsx(i.code,{children:"size"})," to each field explicitly, same as everywhere else in this library that takes a ",e.jsx(i.code,{children:"size"})," prop. This also means the legend already gets ",e.jsx(i.code,{children:"<FieldLabel>"}),"'s existing mobile behavior for free: below 768px, ",e.jsx(i.code,{children:"sm"}),"/",e.jsx(i.code,{children:"md"})," legends render at ",e.jsx(i.code,{children:"lg"}),"'s larger type automatically."]}),`
`,e.jsx(i.h2,{id:"error-states",children:"Error states"}),`
`,e.jsx(n,{of:c}),`
`,e.jsxs(i.p,{children:["An error belongs to the one field it's about, not to the group — ",e.jsx(i.code,{children:"Fieldset"})," has no ",e.jsx(i.code,{children:"error"}),"/",e.jsx(i.code,{children:"helpText"})," prop of its own. Give the invalid field its own ",e.jsx(i.code,{children:'status="error"'})," and ",e.jsx(i.code,{children:"helpText"}),", exactly as you would outside a ",e.jsx(i.code,{children:"Fieldset"}),":"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<FieldsetRow>
  <Select size="md" options={stateOptions} placeholder="State or Province" defaultValue="ca" />
  <TextInput
    size="md"
    placeholder="Zip or Postal Code"
    aria-label="Zip or postal code"
    status="error"
    helpText="Enter a valid ZIP code"
  />
</FieldsetRow>
`})}),`
`,e.jsxs(i.p,{children:["That's a deliberate contrast with ",e.jsx(i.code,{children:"<RadioGroup>"}),", which ",e.jsx(i.em,{children:"does"})," have a group-level ",e.jsx(i.code,{children:"error"}),"/",e.jsx(i.code,{children:"helpText"}),": a radio group's options are really one answer, so there's only ever one thing to be wrong about. A ",e.jsx(i.code,{children:"Fieldset"}),"'s fields are independent — Street Address 1 can be fine while Zip is invalid — so the error, the red border, and the inline message all stay scoped to the one field that's actually wrong. Multiple fields can be in error at once, each with its own message, with no coordination needed between them."]}),`
`,e.jsx(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Renders a real ",e.jsx(i.code,{children:"<fieldset>"}),"/",e.jsx(i.code,{children:"<legend>"})," pair, not a styled ",e.jsx(i.code,{children:"<div>"})," — the group's label is announced once by assistive tech, not repeated per field."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"Fieldset"}),` itself doesn't set any field's accessible name — see "Fields are plain, unlabeled inputs" above for what each field type needs on its own.`]}),`
`]}),`
`,e.jsx(i.h2,{id:"props",children:"Props"}),`
`,e.jsx(i.h3,{id:"fieldset-1",children:e.jsx(i.code,{children:"Fieldset"})}),`
`,e.jsxs(i.p,{children:[`| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `,e.jsx(i.code,{children:"label"})," | ",e.jsx(i.code,{children:"ReactNode"})," | — | The group's own label, rendered as a real ",e.jsx(i.code,{children:"<legend>"}),`. |
| `,e.jsx(i.code,{children:"size"})," | ",e.jsx(i.code,{children:'"sm" \\| "md" \\| "lg"'})," | ",e.jsx(i.code,{children:'"md"'}),` | Scales the legend's own type only — pass the same size to each field yourself. |
| `,e.jsx(i.code,{children:"children"})," | ",e.jsx(i.code,{children:"ReactNode"}),` | — | The fields themselves. |
| `,e.jsx(i.code,{children:"className"})," | ",e.jsx(i.code,{children:"string"})," | — | Applied to the root ",e.jsx(i.code,{children:"<fieldset>"}),". |"]}),`
`,e.jsx(i.h3,{id:"fieldsetrow",children:e.jsx(i.code,{children:"FieldsetRow"})}),`
`,e.jsxs(i.p,{children:[`| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `,e.jsx(i.code,{children:"children"})," | ",e.jsx(i.code,{children:"ReactNode"}),` | — | Fields to lay out side by side, sharing the row's width equally. |
| `,e.jsx(i.code,{children:"className"})," | ",e.jsx(i.code,{children:"string"})," | — | Applied to the row's root element. |"]})]})}function ve(s={}){const{wrapper:i}={...o(),...s.components};return i?e.jsx(i,{...s,children:e.jsx(t,{...s})}):t(s)}export{ve as default};
