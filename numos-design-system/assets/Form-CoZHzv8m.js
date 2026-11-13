import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as t}from"./index-DUy19JZU.js";import{d as s,C as n}from"./index-RBA69SJr.js";import{F as d,D as c,T as l}from"./Form.stories-DcIlAeBz.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BVaJyDbk.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramCell-BVBcLmyd.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function r(i){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
`,e.jsx(o.h1,{id:"form",children:"Form"}),`
`,e.jsxs(o.p,{children:["A card-like container for a ",e.jsx(o.code,{children:"<FormHeader>"}),", ",e.jsx(o.code,{children:"<FormBody>"}),", and ",e.jsx(o.code,{children:"<FormFooter>"})," — the shell Figma composes around ",e.jsx(o.code,{children:"<TextInput>"}),", ",e.jsx(o.code,{children:"<Select>"}),", ",e.jsx(o.code,{children:"<CheckboxGroup>"}),", ",e.jsx(o.code,{children:"<RadioGroup>"}),", ",e.jsx(o.code,{children:"<SegmentedControl>"}),", and ",e.jsx(o.code,{children:"<Toggle>"}),". ",e.jsx(o.code,{children:"<Form>"})," itself renders a real ",e.jsx(o.code,{children:"<form>"}),": Enter-to-submit and native ",e.jsx(o.code,{children:"FormData"})," collection on submit, since everything it's meant to contain is a real form control."]}),`
`,e.jsx(o.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:'A self-contained set of fields with a clear title and a Cancel/Submit-style action pair — a "New project" dialog, a settings panel, a create/edit form.'}),`
`]}),`
`,e.jsx(o.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["For a single field inline in a page (not in its own card) — just use the field component directly (",e.jsx(o.code,{children:"<TextInput>"}),", ",e.jsx(o.code,{children:"<Select>"}),", etc.) without wrapping it in ",e.jsx(o.code,{children:"<Form>"}),"."]}),`
`]}),`
`,e.jsx(o.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import {
  Form, FormHeader, FormBody, FormFooter,
  TextInput, Select, ButtonGroup, Button,
} from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  // ...
}

<Form onSubmit={handleSubmit}>
  <FormHeader>New project</FormHeader>
  <FormBody>
    <TextInput name="name" label="Name" size="md" />
  </FormBody>
  <FormFooter>
    <ButtonGroup>
      <Button variant="secondary" type="button">Cancel</Button>
      <Button variant="primary" type="submit">Submit</Button>
    </ButtonGroup>
  </FormFooter>
</Form>
`})}),`
`,e.jsxs(o.p,{children:["Fill in the fields and hit Submit below — it's a real, live ",e.jsx(o.code,{children:"<form>"}),", not a screenshot; the panel underneath shows the actual ",e.jsx(o.code,{children:"FormData"})," collected."]}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(o.h2,{id:"fields-participate-for-real",children:"Fields participate for real"}),`
`,e.jsxs(o.p,{children:["Every field in the example above is (or renders) a real native input, so it shows up in ",e.jsx(o.code,{children:"FormData"})," on submit with no extra wiring:"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"<TextInput>"})," / ",e.jsx(o.code,{children:"<Textarea>"})," — real ",e.jsx(o.code,{children:"<input>"}),"/",e.jsx(o.code,{children:"<textarea>"}),"."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"<Select>"})," — a hidden ",e.jsx(o.code,{children:'<input type="hidden" name={name}>'})," tracks the chosen value."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"<Checkbox>"})," / ",e.jsx(o.code,{children:"<Radio>"})," — real ",e.jsx(o.code,{children:'<input type="checkbox">'}),"/",e.jsx(o.code,{children:'<input type="radio">'}),"; give same-",e.jsx(o.code,{children:"name"})," checkboxes different ",e.jsx(o.code,{children:"value"}),"s to collect them all under one key."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:'<SegmentedControl name="...">'})," — same hidden-input pattern as ",e.jsx(o.code,{children:"<Select>"}),"."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"<Toggle>"})," — real ",e.jsx(o.code,{children:'<input type="checkbox" role="switch">'}),"."]}),`
`]}),`
`,e.jsx(o.h2,{id:"sizing-its-controls",children:"Sizing its controls"}),`
`,e.jsxs(o.p,{children:["Every control inside takes its ",e.jsx(o.code,{children:"size"})," — ",e.jsx(o.code,{children:'"md"'})," by default — so the form is uniformly sized: text fields, selects, segmented controls, checkboxes, radios, toggles, sliders, and the footer's buttons too. On mobile widths (under 768px) they all step up to ",e.jsx(o.code,{children:'"lg"'})," together, the size whose 16px text keeps iOS from zooming on a focused field, so a mobile form never mixes sizes either. A control's own ",e.jsx(o.code,{children:"size"})," still overrides it, as an escape hatch; a ",e.jsx(o.code,{children:"<Toolbar>"})," inside sets its own size for its own controls."]}),`
`,e.jsxs(o.p,{children:["This is the same mechanism as ",e.jsx(o.code,{children:"<Toolbar>"}),"'s: ",e.jsx(o.code,{children:"ControlSizeProvider"}),", which any custom container can use too. Checkbox has no ",e.jsx(o.code,{children:'"sm"'})," yet (an S form shows M checkboxes), and Slider no ",e.jsx(o.code,{children:'"lg"'}),"."]}),`
`,e.jsx(o.h2,{id:"formheader",children:"FormHeader"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"children"})," is the title; ",e.jsx(o.code,{children:"actions"})," is a trailing row of icon buttons (Figma's example: a close button) — pass your own, styled however fits your use case, same as ",e.jsx(o.code,{children:"<Header>"}),"'s ",e.jsx(o.code,{children:"titleActions"}),"."]}),`
`,e.jsx(o.h2,{id:"formfooter",children:"FormFooter"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"children"})," is the main (usually right-aligned) actions — typically a ",e.jsx(o.code,{children:"<ButtonGroup>"}),". ",e.jsx(o.code,{children:"secondaryAction"})," is a separate, left-aligned slot for something that shouldn't be grouped with Cancel/Submit — Figma's own example uses a ",e.jsx(o.code,{children:'<Button variant="link">'}),' there ("Reset").']}),`
`,e.jsx(o.h2,{id:"without-header-actions",children:"Without header actions"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"actions"})," and ",e.jsx(o.code,{children:"secondaryAction"})," are both optional:"]}),`
`,e.jsx(n,{of:l}),`
`,e.jsx(o.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"<Form>"})," is a real ",e.jsx(o.code,{children:"<form>"})," — submitting via Enter in a text field works the way it would in any native form."]}),`
`,e.jsxs(o.li,{children:["Every field keeps its own accessibility behavior (labels, ",e.jsx(o.code,{children:"aria-invalid"}),", fieldset/legend grouping) — ",e.jsx(o.code,{children:"<Form>"})," doesn't add or override any of it."]}),`
`]}),`
`,e.jsx(o.h2,{id:"props",children:"Props"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"<Form>"}),": any native ",e.jsx(o.code,{children:"<form>"})," prop (",e.jsx(o.code,{children:"onSubmit"}),", etc.). ",e.jsx(o.code,{children:"<FormHeader>"}),": ",e.jsx(o.code,{children:"children"})," (title, required), ",e.jsx(o.code,{children:"actions"}),". ",e.jsx(o.code,{children:"<FormBody>"}),": any native ",e.jsx(o.code,{children:"<div>"})," prop. ",e.jsx(o.code,{children:"<FormFooter>"}),": ",e.jsx(o.code,{children:"secondaryAction"}),", ",e.jsx(o.code,{children:"children"})," (required)."]})]})}function ge(i={}){const{wrapper:o}={...t(),...i.components};return o?e.jsx(o,{...i,children:e.jsx(r,{...i})}):r(i)}export{ge as default};
