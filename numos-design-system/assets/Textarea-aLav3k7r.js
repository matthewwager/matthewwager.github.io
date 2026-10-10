import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as n}from"./index-DUy19JZU.js";import{c as o,P as d,b as l,C as s}from"./index-R-0gtsrS.js";import{T as a,D as c,S as h,W as p,E as x,b as m,a as j}from"./Textarea.stories-8i2AX02n.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:a}),`
`,e.jsx(i.h1,{id:"textarea",children:"Textarea"}),`
`,e.jsxs(i.p,{children:["A labeled multi-line text field — ",e.jsx(i.code,{children:"<TextInput>"}),"'s structure and token scale, unchanged, with a ",e.jsx(i.code,{children:"<textarea>"})," in place of the ",e.jsx(i.code,{children:"<input>"}),". Confirmed directly against Figma: Textarea's ",e.jsx(i.code,{children:"L"})," size uses the exact same padding, radius, and type tokens as ",e.jsx(i.code,{children:"TextInput"}),"'s ",e.jsx(i.code,{children:"lg"}),", so this mirrors it rather than inventing a parallel scale."]}),`
`,e.jsx(d,{}),`
`,e.jsx(l,{}),`
`,e.jsx(i.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Free-form text longer than a single line — a description, a comment, notes."}),`
`]}),`
`,e.jsx(i.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["For a single line of text — use ",e.jsx(i.code,{children:"<TextInput>"}),"."]}),`
`]}),`
`,e.jsx(i.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import { Textarea } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<Textarea label="Description" placeholder="What's this project about?" />
`})}),`
`,e.jsxs(i.p,{children:[`Figma's Hover/Focus/Filled/Disabled "states" aren't separate props — they're real `,e.jsx(i.code,{children:":hover"}),", ",e.jsx(i.code,{children:":focus-within"}),", ",e.jsx(i.code,{children:"::placeholder"}),", and ",e.jsx(i.code,{children:":has(:disabled)"})," behavior, same as ",e.jsx(i.code,{children:"<TextInput>"}),". Only validation state (",e.jsx(i.code,{children:"status"}),") is a prop."]}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(i.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"size"}),": ",e.jsx(i.code,{children:'"sm" | "md" | "lg"'})," (defaults to ",e.jsx(i.code,{children:'"lg"'}),") — the same three steps as ",e.jsx(i.code,{children:"<TextInput>"}),"."]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(i.h2,{id:"prefix-and-suffix",children:"Prefix and suffix"}),`
`,e.jsxs(i.p,{children:["Fixed text rendered immediately before/after the value — e.g. ",e.jsx(i.code,{children:"#"})," before a ticket number — via ",e.jsx(i.code,{children:"prefix"}),"/",e.jsx(i.code,{children:"suffix"}),". Not shown by default; unlike ",e.jsx(i.code,{children:"leadingIcon"}),"/",e.jsx(i.code,{children:"trailingIcon"}),", it's real content (not ",e.jsx(i.code,{children:"aria-hidden"}),"), always rendered in ",e.jsx(i.code,{children:"content-subtle"})," at the value's own font size. Same prop, same reasoning, as ",e.jsx(i.code,{children:"<TextInput>"})," — see its own docs for the full write-up."]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(i.h2,{id:"validation",children:"Validation"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"status"}),": ",e.jsx(i.code,{children:'"default" | "error" | "success"'}),", same as ",e.jsx(i.code,{children:"<TextInput>"})," — also styles ",e.jsx(i.code,{children:"helpText"})," and adds its icon."]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(i.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(i.h2,{id:"resizing",children:"Resizing"}),`
`,e.jsxs(i.p,{children:["The control resizes vertically (",e.jsx(i.code,{children:"resize: vertical"}),") by default, and not at all while disabled. ",e.jsx(i.code,{children:"rows"})," defaults to ",e.jsx(i.code,{children:"3"}),"."]}),`
`,e.jsx(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"label"})," renders as a real ",e.jsx(i.code,{children:"<label htmlFor>"}),"."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:'status="error"'})," sets ",e.jsx(i.code,{children:"aria-invalid"})," on the textarea."]}),`
`]}),`
`,e.jsx(i.h2,{id:"props",children:"Props"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"label"}),", ",e.jsx(i.code,{children:"helpText"}),", ",e.jsx(i.code,{children:"status"}),", ",e.jsx(i.code,{children:"size"}),", ",e.jsx(i.code,{children:"leadingIcon"}),", ",e.jsx(i.code,{children:"trailingIcon"}),", plus any native ",e.jsx(i.code,{children:"<textarea>"})," prop."]})]})}function Fe(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{Fe as default};
