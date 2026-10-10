import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as t}from"./index-DUy19JZU.js";import{c as d,C as n}from"./index-R-0gtsrS.js";import{F as c,D as s,T as l}from"./Form.stories--JL6e7i2.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function r(o){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:c}),`
`,e.jsx(i.h1,{id:"form",children:"Form"}),`
`,e.jsxs(i.p,{children:["A card-like container for a ",e.jsx(i.code,{children:"<FormHeader>"}),", ",e.jsx(i.code,{children:"<FormBody>"}),", and ",e.jsx(i.code,{children:"<FormFooter>"})," — the shell Figma composes around ",e.jsx(i.code,{children:"<TextInput>"}),", ",e.jsx(i.code,{children:"<Select>"}),", ",e.jsx(i.code,{children:"<CheckboxGroup>"}),", ",e.jsx(i.code,{children:"<RadioGroup>"}),", ",e.jsx(i.code,{children:"<SegmentedControl>"}),", and ",e.jsx(i.code,{children:"<Toggle>"}),". ",e.jsx(i.code,{children:"<Form>"})," itself renders a real ",e.jsx(i.code,{children:"<form>"}),": Enter-to-submit and native ",e.jsx(i.code,{children:"FormData"})," collection on submit, since everything it's meant to contain is a real form control."]}),`
`,e.jsx(i.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:'A self-contained set of fields with a clear title and a Cancel/Submit-style action pair — a "New project" dialog, a settings panel, a create/edit form.'}),`
`]}),`
`,e.jsx(i.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["For a single field inline in a page (not in its own card) — just use the field component directly (",e.jsx(i.code,{children:"<TextInput>"}),", ",e.jsx(i.code,{children:"<Select>"}),", etc.) without wrapping it in ",e.jsx(i.code,{children:"<Form>"}),"."]}),`
`]}),`
`,e.jsx(i.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import {
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
`,e.jsxs(i.p,{children:["Fill in the fields and hit Submit below — it's a real, live ",e.jsx(i.code,{children:"<form>"}),", not a screenshot; the panel underneath shows the actual ",e.jsx(i.code,{children:"FormData"})," collected."]}),`
`,e.jsx(n,{of:s}),`
`,e.jsx(i.h2,{id:"fields-participate-for-real",children:"Fields participate for real"}),`
`,e.jsxs(i.p,{children:["Every field in the example above is (or renders) a real native input, so it shows up in ",e.jsx(i.code,{children:"FormData"})," on submit with no extra wiring:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"<TextInput>"})," / ",e.jsx(i.code,{children:"<Textarea>"})," — real ",e.jsx(i.code,{children:"<input>"}),"/",e.jsx(i.code,{children:"<textarea>"}),"."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"<Select>"})," — a hidden ",e.jsx(i.code,{children:'<input type="hidden" name={name}>'})," tracks the chosen value."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"<Checkbox>"})," / ",e.jsx(i.code,{children:"<Radio>"})," — real ",e.jsx(i.code,{children:'<input type="checkbox">'}),"/",e.jsx(i.code,{children:'<input type="radio">'}),"; give same-",e.jsx(i.code,{children:"name"})," checkboxes different ",e.jsx(i.code,{children:"value"}),"s to collect them all under one key."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:'<SegmentedControl name="...">'})," — same hidden-input pattern as ",e.jsx(i.code,{children:"<Select>"}),"."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"<Toggle>"})," — real ",e.jsx(i.code,{children:'<input type="checkbox" role="switch">'}),"."]}),`
`]}),`
`,e.jsx(i.h2,{id:"formheader",children:"FormHeader"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"children"})," is the title; ",e.jsx(i.code,{children:"actions"})," is a trailing row of icon buttons (Figma's example: a close button) — pass your own, styled however fits your use case, same as ",e.jsx(i.code,{children:"<Header>"}),"'s ",e.jsx(i.code,{children:"titleActions"}),"."]}),`
`,e.jsx(i.h2,{id:"formfooter",children:"FormFooter"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"children"})," is the main (usually right-aligned) actions — typically a ",e.jsx(i.code,{children:"<ButtonGroup>"}),". ",e.jsx(i.code,{children:"secondaryAction"})," is a separate, left-aligned slot for something that shouldn't be grouped with Cancel/Submit — Figma's own example uses a ",e.jsx(i.code,{children:'<Button variant="link">'}),' there ("Reset").']}),`
`,e.jsx(i.h2,{id:"without-header-actions",children:"Without header actions"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"actions"})," and ",e.jsx(i.code,{children:"secondaryAction"})," are both optional:"]}),`
`,e.jsx(n,{of:l}),`
`,e.jsx(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"<Form>"})," is a real ",e.jsx(i.code,{children:"<form>"})," — submitting via Enter in a text field works the way it would in any native form."]}),`
`,e.jsxs(i.li,{children:["Every field keeps its own accessibility behavior (labels, ",e.jsx(i.code,{children:"aria-invalid"}),", fieldset/legend grouping) — ",e.jsx(i.code,{children:"<Form>"})," doesn't add or override any of it."]}),`
`]}),`
`,e.jsx(i.h2,{id:"props",children:"Props"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"<Form>"}),": any native ",e.jsx(i.code,{children:"<form>"})," prop (",e.jsx(i.code,{children:"onSubmit"}),", etc.). ",e.jsx(i.code,{children:"<FormHeader>"}),": ",e.jsx(i.code,{children:"children"})," (title, required), ",e.jsx(i.code,{children:"actions"}),". ",e.jsx(i.code,{children:"<FormBody>"}),": any native ",e.jsx(i.code,{children:"<div>"})," prop. ",e.jsx(i.code,{children:"<FormFooter>"}),": ",e.jsx(i.code,{children:"secondaryAction"}),", ",e.jsx(i.code,{children:"children"})," (required)."]})]})}function ge(o={}){const{wrapper:i}={...t(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(r,{...o})}):r(o)}export{ge as default};
