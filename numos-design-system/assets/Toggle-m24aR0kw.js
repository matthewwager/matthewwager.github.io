import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as r}from"./index-DUy19JZU.js";import{c as s,P as c,b as l,C as t}from"./index-R-0gtsrS.js";import{T as a,D as d,S as h,L as p,a as m}from"./Toggle.stories-mLf9phB5.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function n(o){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:a}),`
`,e.jsx(i.h1,{id:"toggle",children:"Toggle"}),`
`,e.jsxs(i.p,{children:["A real ",e.jsx(i.code,{children:'<input type="checkbox" role="switch">'})," — native form participation and keyboard/click behavior for free, styled as Figma's pill-shaped Switch. ",e.jsx(i.code,{children:'role="switch"'}),' overrides the implicit checkbox role so assistive tech announces "on/off" rather than "checked/unchecked", which is what this actually is: a real distinction, even though both controls boil down to a boolean.']}),`
`,e.jsx(c,{}),`
`,e.jsx(l,{}),`
`,e.jsx(i.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:'A single setting that takes effect immediately, with no separate "Save" step — "Wi-Fi", "Dark mode", "Notifications on".'}),`
`]}),`
`,e.jsx(i.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["For a setting that's part of a form and only takes effect on submit — use ",e.jsx(i.code,{children:"<Checkbox>"})," instead; a checkbox implies a pending choice, a toggle implies an immediate one."]}),`
`]}),`
`,e.jsx(i.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import { Toggle } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

const [checked, setChecked] = useState(true);

<Toggle label="Enable notifications" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
`})}),`
`,e.jsx(t,{of:d}),`
`,e.jsx(i.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"size"}),": ",e.jsx(i.code,{children:'"sm" | "md" | "lg"'})," (defaults to ",e.jsx(i.code,{children:'"lg"'}),"), matching Figma's three Switch sizes."]}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(i.h2,{id:"label-placement",children:"Label placement"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"labelPlacement"}),": ",e.jsx(i.code,{children:'"right" | "left" | "above"'})," (defaults to ",e.jsx(i.code,{children:'"right"'}),", matching Figma's own layout)."]}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(i.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(i.p,{children:["Real ",e.jsx(i.code,{children:"disabled"}),", on or off:"]}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(i.h2,{id:"a-note-on-the-on-ring",children:'A note on the "on" ring'}),`
`,e.jsxs(i.p,{children:[`The brand-colored ring around an "on" toggle isn't a focus indicator — it's part of Figma's resting style for every checked example, focused or not. A separate `,e.jsx(i.code,{children:":focus-visible"})," outline is added on top for real keyboard-focus visibility, since Figma's variant set doesn't otherwise specify one for this component."]}),`
`,e.jsx(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"label"})," renders inside a ",e.jsx(i.code,{children:"<label>"})," wrapping the whole control — clicking the label text toggles it, same as clicking the switch itself."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:'role="switch"'})," is set directly on the input, overriding its implicit checkbox role."]}),`
`]}),`
`,e.jsx(i.h2,{id:"props",children:"Props"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"label"}),", ",e.jsx(i.code,{children:"size"}),", ",e.jsx(i.code,{children:"labelPlacement"}),", plus any native ",e.jsx(i.code,{children:"<input>"})," prop (",e.jsx(i.code,{children:"checked"}),", ",e.jsx(i.code,{children:"onChange"}),", ",e.jsx(i.code,{children:"disabled"}),", etc.)."]})]})}function De(o={}){const{wrapper:i}={...r(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(n,{...o})}):n(o)}export{De as default};
