import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as s}from"./index-DUy19JZU.js";import{c as t,C as r}from"./index-R-0gtsrS.js";import{R as a,D as l,B as d,E as c,a as h}from"./Radio.stories-Dy5AnAMB.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function n(o){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:a}),`
`,e.jsx(i.h1,{id:"radio",children:"Radio"}),`
`,e.jsxs(i.p,{children:["A real ",e.jsx(i.code,{children:'<input type="radio">'}),", styled the same way ",e.jsx(i.code,{children:"<Checkbox>"})," is — Figma's Hover/Focus/Checked/Disabled states are real CSS selectors, not props. Always used inside a ",e.jsx(i.code,{children:"<RadioGroup>"}),", which supplies a shared ",e.jsx(i.code,{children:"name"}),' and drives selection for you — see "Always use a group" below for why a bare, ungrouped ',e.jsx(i.code,{children:"<Radio>"})," isn't a supported pattern here."]}),`
`,e.jsx(i.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["A set of mutually-exclusive options, in a form where the choice isn't final until submitted — pick one from a short, fully-visible list, including a binary Yes/No or True/False choice (see ",e.jsx(i.code,{children:'orientation="horizontal"'})," below)."]}),`
`]}),`
`,e.jsx(i.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["For a single on/off setting — use ",e.jsx(i.code,{children:"<Checkbox>"})," (pending choice) or ",e.jsx(i.code,{children:"<Toggle>"})," (immediate effect)."]}),`
`,e.jsxs(i.li,{children:["For more than ~6 options, or when space is tight — use ",e.jsx(i.code,{children:"<Select>"})," instead."]}),`
`]}),`
`,e.jsx(i.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import { Radio, RadioGroup } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

const [value, setValue] = useState("weekly");

<RadioGroup label="Email frequency" value={value} onValueChange={setValue}>
  <Radio value="daily" label="Daily" />
  <Radio value="weekly" label="Weekly" />
  <Radio value="monthly" label="Monthly" />
</RadioGroup>
`})}),`
`,e.jsx(i.p,{children:"Click an option below — it's a real, live component, not a screenshot."}),`
`,e.jsx(r,{of:l}),`
`,e.jsx(i.h2,{id:"always-use-a-group",children:"Always use a group"}),`
`,e.jsxs(i.p,{children:["A single, ungrouped radio button is a UX anti-pattern — on its own it doesn't communicate a mutually-exclusive choice the way a group of them does, and anything it could mean (a pending on/off setting) is already said more clearly by ",e.jsx(i.code,{children:"<Checkbox>"}),". So ",e.jsx(i.code,{children:"<Radio>"})," isn't documented or demonstrated standalone here; every example wraps it in ",e.jsx(i.code,{children:"<RadioGroup>"}),", which is also what actually gives same-",e.jsx(i.code,{children:"name"})," inputs their radio behavior in the first place — ",e.jsx(i.code,{children:"<RadioGroup>"})," just tracks the selected ",e.jsx(i.code,{children:"value"})," for you too, so you don't wire up ",e.jsx(i.code,{children:"checked"}),"/",e.jsx(i.code,{children:"onChange"})," on every option by hand."]}),`
`,e.jsx(i.h3,{id:"binary-choices",children:"Binary choices"}),`
`,e.jsxs(i.p,{children:["For a short, binary choice — True/False, Yes/No — ",e.jsx(i.code,{children:'orientation="horizontal"'})," lays the two options side by side instead of stacking them, which better matches how small a decision this actually is:"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<RadioGroup label="Is this a recurring charge?" orientation="horizontal" value={value} onValueChange={setValue}>
  <Radio value="true" label="Yes" />
  <Radio value="false" label="No" />
</RadioGroup>
`})}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(i.h2,{id:"error",children:"Error"}),`
`,e.jsxs(i.p,{children:["Set ",e.jsx(i.code,{children:"error"})," on the group's message and on the individual ",e.jsx(i.code,{children:"<Radio>"}),"s you want visually flagged:"]}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(i.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"disabled"})," on an individual ",e.jsx(i.code,{children:"<Radio>"})," — the rest of the group stays interactive:"]}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"label"})," renders as a real ",e.jsx(i.code,{children:"<label htmlFor>"})," — clicking it selects the radio."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"<RadioGroup>"}),"'s ",e.jsx(i.code,{children:"label"})," is a ",e.jsx(i.code,{children:"<legend>"}),", read once for the whole group rather than repeated per option."]}),`
`,e.jsxs(i.li,{children:["Arrow keys move between options within a group — that's native browser behavior for same-",e.jsx(i.code,{children:"name"})," radio inputs, not something this component implements."]}),`
`]}),`
`,e.jsx(i.h2,{id:"props",children:"Props"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"<Radio>"}),": ",e.jsx(i.code,{children:"label"}),", ",e.jsx(i.code,{children:"helpText"}),", ",e.jsx(i.code,{children:"error"}),", ",e.jsx(i.code,{children:"value"}),", plus any native ",e.jsx(i.code,{children:"<input>"})," prop. ",e.jsx(i.code,{children:"<RadioGroup>"}),": ",e.jsx(i.code,{children:"name"}),", ",e.jsx(i.code,{children:"label"}),", ",e.jsx(i.code,{children:"helpText"}),", ",e.jsx(i.code,{children:"error"}),", ",e.jsx(i.code,{children:"orientation"}),", ",e.jsx(i.code,{children:"value"}),", ",e.jsx(i.code,{children:"defaultValue"}),", ",e.jsx(i.code,{children:"onValueChange"}),", ",e.jsx(i.code,{children:"children"}),"."]})]})}function Re(o={}){const{wrapper:i}={...s(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(n,{...o})}):n(o)}export{Re as default};
