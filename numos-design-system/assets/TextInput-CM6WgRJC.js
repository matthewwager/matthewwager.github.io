import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as s}from"./index-DUy19JZU.js";import{c as o,P as a,b as l,C as t}from"./index-R-0gtsrS.js";import{T as d,D as c,W as h,c as p,d as x,E as m,b as u,a as j,S as f}from"./TextInput.stories-BLa0Zv3_.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";import"./eye-ugpUS8T7.js";import"./mail-WW_jGw0C.js";function r(n){const i={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
`,e.jsx(i.h1,{id:"textinput",children:"TextInput"}),`
`,e.jsx(i.p,{children:"A labeled single-line text field, with optional help text, icons, and validation state."}),`
`,e.jsx(a,{}),`
`,e.jsx(l,{}),`
`,e.jsx(i.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Any single-line text entry: names, emails, search, short freeform values."}),`
`,e.jsxs(i.li,{children:["Use ",e.jsx(i.code,{children:'status="error"'})," / ",e.jsx(i.code,{children:'"success"'})," with ",e.jsx(i.code,{children:"helpText"})," to surface validation feedback."]}),`
`]}),`
`,e.jsx(i.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["For multi-line content — use a ",e.jsx(i.code,{children:"<Textarea>"})," instead."]}),`
`,e.jsxs(i.li,{children:["For a fixed set of choices — use ",e.jsx(i.code,{children:"<Select>"}),", ",e.jsx(i.code,{children:"<RadioButton>"}),", or ",e.jsx(i.code,{children:"<Checkbox>"}),"."]}),`
`]}),`
`,e.jsx(i.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import { TextInput } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<TextInput label="Email" placeholder="you@example.com" />
`})}),`
`,e.jsx(i.h3,{id:"with-help-text-and-validation",children:"With help text and validation"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<TextInput
  label="Email"
  status="error"
  helpText="This field is required."
/>
`})}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:'status="error"'})," and ",e.jsx(i.code,{children:'status="success"'})," both style the field border/ring and automatically prefix ",e.jsx(i.code,{children:"helpText"})," with a matching icon — no extra markup needed."]}),`
`,e.jsx(i.h3,{id:"with-an-icon",children:"With an icon"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import { Mail } from "lucide-react";

<TextInput label="Email" leadingIcon={<Mail size={16} />} />
`})}),`
`,e.jsx(i.h3,{id:"with-a-prefix-andor-suffix",children:"With a prefix and/or suffix"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<TextInput label="Amount" prefix="$" suffix="USD" defaultValue="15.00" />
`})}),`
`,e.jsxs(i.p,{children:["Fixed text inside the field, immediately before/after the value — e.g. a currency symbol or unit. Not shown by default. Unlike ",e.jsx(i.code,{children:"leadingIcon"}),"/",e.jsx(i.code,{children:"trailingIcon"}),", a ",e.jsx(i.code,{children:"prefix"}),"/",e.jsx(i.code,{children:"suffix"})," is real content, not ",e.jsx(i.code,{children:"aria-hidden"})," decoration, so a screen reader reads it as part of the field. It always renders in ",e.jsx(i.code,{children:"content-subtle"}),", at the same font size as the value itself — including through focus, since (confirmed against Figma) it doesn't pick up the brand tint the way an icon does."]}),`
`,e.jsxs(i.p,{children:["Available on every component in this family that mirrors ",e.jsx(i.code,{children:"<TextInput>"}),"'s Field anatomy: ",e.jsx(i.code,{children:"<Textarea>"}),", ",e.jsx(i.code,{children:"<SearchInput>"}),", ",e.jsx(i.code,{children:"<RichTextEditor>"}),"."]}),`
`,e.jsx(i.h2,{id:"a-note-on-state",children:"A note on state"}),`
`,e.jsxs(i.p,{children:["Figma's Hover/Focus/Filled/Disabled variants aren't separate props on this component — they're real ",e.jsx(i.code,{children:":hover"}),", ",e.jsx(i.code,{children:":focus-within"}),", ",e.jsx(i.code,{children:"::placeholder"})," (vs. the input's own typed value), and native ",e.jsx(i.code,{children:"disabled"})," behavior. A browser already knows when a field is hovered, focused, or has a value; encoding that as extra props would just be a second, driftable source of truth. Only ",e.jsx(i.code,{children:"status"})," (default/error/success) is a real prop, since that's actual application state — validity — that nothing in the DOM can infer on its own."]}),`
`,e.jsx(i.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(i.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsx(t,{of:f}),`
`,e.jsx(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Renders a real ",e.jsx(i.code,{children:"<label>"})," wired to the ",e.jsx(i.code,{children:"<input>"})," via ",e.jsx(i.code,{children:"htmlFor"}),"/",e.jsx(i.code,{children:"id"})," (auto-generated with React's ",e.jsx(i.code,{children:"useId"})," if you don't pass one)."]}),`
`,e.jsxs(i.li,{children:["Sets ",e.jsx(i.code,{children:'aria-invalid="true"'})," automatically when ",e.jsx(i.code,{children:'status="error"'}),"."]}),`
`,e.jsxs(i.li,{children:["Disabled fields use the native ",e.jsx(i.code,{children:"disabled"})," attribute — screen readers and keyboard navigation skip them for free."]}),`
`,e.jsxs(i.li,{children:["If ",e.jsx(i.code,{children:"helpText"})," conveys an error, make sure it's the primary explanation of ",e.jsx(i.em,{children:"why"})," — screen reader users hear the icon's meaning only through the text, not the glyph."]}),`
`]}),`
`,e.jsx(i.h2,{id:"props",children:"Props"}),`
`,e.jsxs(i.p,{children:["See the ",e.jsx(i.strong,{children:"Controls"})," table above for the full list, types, and defaults — generated automatically from the TypeScript types."]})]})}function Ce(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(r,{...n})}):r(n)}export{Ce as default};
