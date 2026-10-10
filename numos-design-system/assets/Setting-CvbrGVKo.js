import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as r}from"./index-DUy19JZU.js";import{c as n,C as o}from"./index-R-0gtsrS.js";import{b as c,T as s,d as l,a as h,R as x,C as a,c as m,e as p,S as j}from"./Setting.stories-DfMbRCbk.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function d(t){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n,{of:c}),`
`,e.jsx(i.h1,{id:"setting",children:"Setting"}),`
`,e.jsxs(i.p,{children:["One row of a settings form: a label, and either a read-only value or a real editable field, depending on ",e.jsx(i.code,{children:"edit"})," — matches Figma's Setting exactly across all 8 ",e.jsx(i.code,{children:"type"}),"s."]}),`
`,e.jsx(i.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Building a settings form alongside ",e.jsx(i.code,{children:"<SettingsCard>"})," — ",e.jsx(i.code,{children:"<Setting>"})," is the reusable row; a card composes several of them under one title, description, and edit-mode toggle."]}),`
`]}),`
`,e.jsx(i.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import { Setting } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<Setting label="Full name" type="text" value="Maya Chen" edit={false} />
`})}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"edit"})," only needs to be passed explicitly when using ",e.jsx(i.code,{children:"<Setting>"})," on its own like this — nested inside ",e.jsx(i.code,{children:"<SettingsCard>"}),", every ",e.jsx(i.code,{children:"<Setting>"})," reads the card's current mode from context automatically, without the prop."]}),`
`,e.jsx(i.h2,{id:"every-edit-mode-field-is-a-real-component",children:"Every edit-mode field is a real component"}),`
`,e.jsxs(i.p,{children:["Nothing here is reimplemented — each ",e.jsx(i.code,{children:"type"}),"'s edit mode is a real field this library already ships, at the confirmed ",e.jsx(i.code,{children:'"md"'})," size, with ",e.jsx(i.code,{children:"<Setting>"})," supplying only the label and switching between read/edit:"]}),`
`,e.jsxs(i.p,{children:["| ",e.jsx(i.code,{children:"type"}),` | Edit mode renders | Read mode shows |
| --- | --- | --- |
| `,e.jsx(i.code,{children:"text"})," | ",e.jsx(i.code,{children:"<TextInput>"})," | ",e.jsx(i.code,{children:"value"}),` |
| `,e.jsx(i.code,{children:"textarea"})," | ",e.jsx(i.code,{children:"<Textarea>"})," | ",e.jsx(i.code,{children:"value"}),` |
| `,e.jsx(i.code,{children:"select"})," | ",e.jsx(i.code,{children:"<Select>"}),` | the chosen option's label |
| `,e.jsx(i.code,{children:"radio"})," | ",e.jsx(i.code,{children:"<RadioGroup>"})," of ",e.jsx(i.code,{children:"<Radio>"}),` | the chosen option's label |
| `,e.jsx(i.code,{children:"checkbox"})," | ",e.jsx(i.code,{children:"<CheckboxGroup>"})," of ",e.jsx(i.code,{children:"<Checkbox>"}),` | every checked option's label, joined with ", " |
| `,e.jsx(i.code,{children:"slider"})," | ",e.jsx(i.code,{children:"<Slider>"})," | a formatted value (",e.jsx(i.code,{children:"${value}%"}),` by default) |
| `,e.jsx(i.code,{children:"toggle"})," | ",e.jsx(i.code,{children:"<Toggle>"}),` | "On"/"Off" |
| `,e.jsx(i.code,{children:"segmentedControl"})," | ",e.jsx(i.code,{children:"<SegmentedControl>"})," | the chosen option's label |"]}),`
`,e.jsx(i.h3,{id:"text",children:"text"}),`
`,e.jsx(o,{of:s}),`
`,e.jsx(i.h3,{id:"textarea",children:"textarea"}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(i.h3,{id:"select",children:"select"}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(i.h3,{id:"radio",children:"radio"}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(i.h3,{id:"checkbox",children:"checkbox"}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(i.h3,{id:"slider",children:"slider"}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(i.h3,{id:"toggle",children:"toggle"}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(i.h3,{id:"segmentedcontrol",children:"segmentedControl"}),`
`,e.jsx(o,{of:j}),`
`,e.jsx(i.h2,{id:"props",children:"Props"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"label"})," (required), ",e.jsx(i.code,{children:"type"})," (default ",e.jsx(i.code,{children:'"text"'}),"), ",e.jsx(i.code,{children:"edit"}),", ",e.jsx(i.code,{children:"name"}),", ",e.jsx(i.code,{children:"value"})," (",e.jsx(i.code,{children:"text"}),"/",e.jsx(i.code,{children:"textarea"}),"/",e.jsx(i.code,{children:"select"}),"/",e.jsx(i.code,{children:"radio"}),"/",e.jsx(i.code,{children:"segmentedControl"}),"), ",e.jsx(i.code,{children:"values"})," (",e.jsx(i.code,{children:"checkbox"}),", plural — multi-select), ",e.jsx(i.code,{children:"checked"})," (",e.jsx(i.code,{children:"toggle"}),"), ",e.jsx(i.code,{children:"options"})," (",e.jsx(i.code,{children:"select"}),"/",e.jsx(i.code,{children:"radio"}),"/",e.jsx(i.code,{children:"checkbox"}),"/",e.jsx(i.code,{children:"segmentedControl"}),"), ",e.jsx(i.code,{children:"placeholder"})," (",e.jsx(i.code,{children:"text"}),"/",e.jsx(i.code,{children:"textarea"}),"), ",e.jsx(i.code,{children:"min"}),"/",e.jsx(i.code,{children:"max"}),"/",e.jsx(i.code,{children:"step"}),"/",e.jsx(i.code,{children:"formatValue"})," (",e.jsx(i.code,{children:"slider"}),"), ",e.jsx(i.code,{children:"className"}),"."]})]})}function Me(t={}){const{wrapper:i}={...r(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(d,{...t})}):d(t)}export{Me as default};
