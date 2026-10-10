import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as o}from"./index-DUy19JZU.js";import{c as s,P as d,b as l,C as t}from"./index-R-0gtsrS.js";import{R as a,D as c,W as h,S as x,c as p,d as j,E as m,b as u,a as f}from"./RichTextEditor.stories-BfXSRoLr.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function r(n){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:a}),`
`,e.jsx(i.h1,{id:"richtexteditor",children:"RichTextEditor"}),`
`,e.jsxs(i.p,{children:["A labeled field for formatted, multi-line text — ",e.jsx(i.code,{children:"<TextInput>"}),"/",e.jsx(i.code,{children:"<Textarea>"}),"'s structure and token scale, unchanged, with a real ",e.jsx(i.code,{children:"contentEditable"})," area and an embedded formatting toolbar in place of a plain ",e.jsx(i.code,{children:"<textarea>"}),`. Matches Figma's "Input / RichTextEditor" component (S/M/L) directly.`]}),`
`,e.jsx(d,{}),`
`,e.jsx(l,{}),`
`,e.jsx(i.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Content that benefits from real inline formatting — bold/italic emphasis, lists, a quoted line — not just plain multi-line text (use ",e.jsx(i.code,{children:"<Textarea>"})," for that)."]}),`
`,e.jsx(i.li,{children:"A composer-style field where formatting controls live inside the input itself, rather than in a separate toolbar above or below it."}),`
`]}),`
`,e.jsx(i.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Plain multi-line text with no formatting need — use ",e.jsx(i.code,{children:"<Textarea>"}),", it's lighter weight."]}),`
`,e.jsxs(i.li,{children:["A single line of text — use ",e.jsx(i.code,{children:"<TextInput>"}),"."]}),`
`]}),`
`,e.jsx(i.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import { RichTextEditor } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<RichTextEditor label="Description" placeholder="What's this update about?" />
`})}),`
`,e.jsxs(i.p,{children:[`Figma's Hover/Focus/Filled/Disabled "states" aren't separate props — they're real `,e.jsx(i.code,{children:":hover"}),", ",e.jsx(i.code,{children:":focus-within"}),", and a ",e.jsx(i.code,{children:"disabled"})," prop, same as ",e.jsx(i.code,{children:"<TextInput>"}),"/",e.jsx(i.code,{children:"<Textarea>"}),". Only validation state (",e.jsx(i.code,{children:"status"}),") is a prop."]}),`
`,e.jsx(t,{of:c}),`
`,e.jsxs(i.p,{children:["Content is real HTML — ",e.jsx(i.code,{children:"defaultValue"})," for uncontrolled use, or ",e.jsx(i.code,{children:"value"}),"/",e.jsx(i.code,{children:"onChange"})," (both carrying the editor's ",e.jsx(i.code,{children:"innerHTML"}),") for controlled use. ",e.jsx(i.code,{children:"value"})," only syncs back into the DOM while the editor isn't focused, so a controlled consumer re-rendering mid-keystroke can't fight the caret."]}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(i.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"size"}),": ",e.jsx(i.code,{children:'"sm" | "md" | "lg"'})," (defaults to ",e.jsx(i.code,{children:'"lg"'}),") — the same three steps as ",e.jsx(i.code,{children:"<TextInput>"}),"/",e.jsx(i.code,{children:"<Textarea>"}),", same padding/radius/type tokens at each step. The toolbar's own icons stay 16px at every size — only the field around them scales."]}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(i.h2,{id:"icons",children:"Icons"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"leadingIcon"}),"/",e.jsx(i.code,{children:"trailingIcon"}),", same as ",e.jsx(i.code,{children:"<TextInput>"}),"/",e.jsx(i.code,{children:"<Textarea>"})," — an optional icon alongside the text content, above the toolbar."]}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(i.h2,{id:"prefix-and-suffix",children:"Prefix and suffix"}),`
`,e.jsxs(i.p,{children:["Fixed text inside the field, immediately before/after the value — e.g. a currency symbol or unit — via ",e.jsx(i.code,{children:"prefix"}),"/",e.jsx(i.code,{children:"suffix"}),". Not shown by default; unlike ",e.jsx(i.code,{children:"leadingIcon"}),"/",e.jsx(i.code,{children:"trailingIcon"}),", it's real content (not ",e.jsx(i.code,{children:"aria-hidden"}),"), always rendered in ",e.jsx(i.code,{children:"content-subtle"})," at the value's own font size. Same prop, same reasoning, as ",e.jsx(i.code,{children:"<TextInput>"})," — see its own docs for the full write-up."]}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(i.h2,{id:"validation",children:"Validation"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"status"}),": ",e.jsx(i.code,{children:'"default" | "error" | "success"'}),", same as ",e.jsx(i.code,{children:"<TextInput>"}),"/",e.jsx(i.code,{children:"<Textarea>"})," — also styles ",e.jsx(i.code,{children:"helpText"})," and adds its icon."]}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(i.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsx(t,{of:f}),`
`,e.jsx(i.h2,{id:"the-toolbar",children:"The toolbar"}),`
`,e.jsxs(i.p,{children:["Built on ",e.jsx(i.code,{children:"document.execCommand"})," — deprecated, but still universally supported for exactly this kind of inline formatting, and consistent with this library's own practice of hand-building interactive behavior (",e.jsx(i.code,{children:"<Modal>"}),", ",e.jsx(i.code,{children:"<DropdownMenu>"}),", ",e.jsx(i.code,{children:"<Tabs>"}),") rather than reaching for a rich-text dependency."]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Undo / Redo"})," — the browser's own ",e.jsx(i.code,{children:"contentEditable"})," history."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Font family / Font size"})," — dropdowns (Sans Serif/Serif/Monospace; 12–32px). Selecting an option applies it to the current selection, or to whatever's typed next if nothing's selected."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Bold / Italic / Underline"})," — toggle, and reflect the formatting under the cursor as you move through the text (pressed state via ",e.jsx(i.code,{children:"document.queryCommandState"}),")."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Emoji"})," — inserts at the cursor."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Bulleted list / Numbered list / Quote"})," — the same toggle behavior as Bold/Italic/Underline."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"More"})," — Strikethrough and Clear formatting."]}),`
`]}),`
`,e.jsx(i.p,{children:"Every toolbar action first restores the selection that was active when its dropdown opened (or never gives up focus at all, for direct buttons — see below) — opening a portaled menu would otherwise steal focus and lose the user's selection before they even pick an option."}),`
`,e.jsx(i.p,{children:"The icon-to-action mapping above is inferred from Figma's screenshot and layer names, not confirmed icon-by-icon against the source file — flag anything that reads wrong against the actual design intent."}),`
`,e.jsx(i.h2,{id:"a-future-basis-for-prompt-input",children:"A future basis for prompt input"}),`
`,e.jsxs(i.p,{children:['This component was built with an eye toward also becoming the basis for a "prompt input" — a chat composer with its own send/attach controls living inside the same bordered field, the way this toolbar already does. The shape (',e.jsx(i.code,{children:"Field"})," wraps ",e.jsx(i.code,{children:"content + embedded control row"}),") is already exactly that pattern; a prompt input would mean swapping what's inside the control row, not restructuring the field itself."]}),`
`,e.jsx(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"label"})," renders as a ",e.jsx(i.code,{children:"<span>"})," (not a real ",e.jsx(i.code,{children:"<label>"}),") associated via ",e.jsx(i.code,{children:"aria-labelledby"})," — a ",e.jsx(i.code,{children:"contentEditable"})," ",e.jsx(i.code,{children:"<div>"})," isn't a labelable element the way an ",e.jsx(i.code,{children:"<input>"}),"/",e.jsx(i.code,{children:"<textarea>"})," is, so ",e.jsx(i.code,{children:"htmlFor"})," wouldn't reliably reach it. Pass ",e.jsx(i.code,{children:"aria-label"})," instead when there's no visible ",e.jsx(i.code,{children:"label"}),"."]}),`
`,e.jsxs(i.li,{children:["The editable area is ",e.jsx(i.code,{children:'role="textbox"'})," with ",e.jsx(i.code,{children:'aria-multiline="true"'}),"."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:'status="error"'})," sets ",e.jsx(i.code,{children:"aria-invalid"}),"."]}),`
`,e.jsxs(i.li,{children:["Every toolbar button is a real ",e.jsx(i.code,{children:"<button>"})," with its own ",e.jsx(i.code,{children:"aria-label"})," and, where relevant, ",e.jsx(i.code,{children:"aria-pressed"}),"."]}),`
`]}),`
`,e.jsx(i.h2,{id:"props",children:"Props"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"label"}),", ",e.jsx(i.code,{children:"aria-label"}),", ",e.jsx(i.code,{children:"helpText"}),", ",e.jsx(i.code,{children:"status"}),", ",e.jsx(i.code,{children:"size"}),", ",e.jsx(i.code,{children:"leadingIcon"}),", ",e.jsx(i.code,{children:"trailingIcon"}),", ",e.jsx(i.code,{children:"prefix"}),", ",e.jsx(i.code,{children:"suffix"}),", ",e.jsx(i.code,{children:"placeholder"}),", ",e.jsx(i.code,{children:"value"}),", ",e.jsx(i.code,{children:"defaultValue"}),", ",e.jsx(i.code,{children:"onChange"}),", ",e.jsx(i.code,{children:"disabled"}),", ",e.jsx(i.code,{children:"id"}),", ",e.jsx(i.code,{children:"className"}),"."]})]})}function De(n={}){const{wrapper:i}={...o(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(r,{...n})}):r(n)}export{De as default};
