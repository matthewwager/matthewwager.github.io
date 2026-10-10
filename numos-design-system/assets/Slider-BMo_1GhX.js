import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as t}from"./index-DUy19JZU.js";import{c as o,P as a,b as d,C as n}from"./index-R-0gtsrS.js";import{b as l,D as c,R as h,S as m,a as p,C as x,I as u}from"./Slider.stories-H_Yo2cN7.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function s(i){const r={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:l}),`
`,e.jsx(r.h1,{id:"slider",children:"Slider"}),`
`,e.jsx(r.p,{children:"A track, fill, and one or two draggable thumbs for picking a value (or a range) along a continuum — matches Figma's Slider exactly (S/M sizes, Default/Hover/Disabled/Range states)."}),`
`,e.jsx(a,{}),`
`,e.jsx(d,{}),`
`,e.jsx(r.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Picking a numeric value (or a min/max range) where the ",e.jsx(r.em,{children:"relative"})," position along a scale matters more than typing an exact number — volume, brightness, a price filter."]}),`
`]}),`
`,e.jsx(r.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["When the exact number matters more than the gesture of choosing it, or the range is large/sparse (a year, a dollar amount with no natural bounds) — use ",e.jsx(r.code,{children:'<TextInput type="number">'})," instead; dragging a thumb across a huge range is imprecise."]}),`
`]}),`
`,e.jsx(r.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { Slider } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<Slider label="Volume" defaultValue={40} />
`})}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(r.h2,{id:"range",children:"Range"}),`
`,e.jsxs(r.p,{children:["Pass a ",e.jsx(r.code,{children:"[min, max]"})," tuple instead of a single number — for ",e.jsx(r.code,{children:"value"}),"/",e.jsx(r.code,{children:"defaultValue"})," ",e.jsx(r.em,{children:"and"})," whatever ",e.jsx(r.code,{children:"onValueChange"})," receives back — and Slider renders two thumbs instead of one. There's no separate ",e.jsx(r.code,{children:"range"})," prop: whether it's a range slider is just the shape of the value, the same way ",e.jsx(r.code,{children:"<RadioGroup>"})," doesn't need a prop to tell it how many ",e.jsx(r.code,{children:"<Radio>"})," children it has."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`<Slider label="Price range" defaultValue={[25, 75]} />
`})}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(r.p,{children:"The two thumbs can't cross — dragging or arrowing one past the other clamps it there instead, so the tuple's first value is always the lower one."}),`
`,e.jsx(r.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(r.p,{children:["Figma only defines ",e.jsx(r.code,{children:'"sm"'})," and ",e.jsx(r.code,{children:'"md"'})," for this component — there's no ",e.jsx(r.code,{children:'"lg"'})," to match ",e.jsx(r.code,{children:"<TextInput>"}),"/",e.jsx(r.code,{children:"<Select>"}),"'s three-size scale, so neither does this prop."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(r.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(r.h2,{id:"formatting-the-value",children:"Formatting the value"}),`
`,e.jsxs(r.p,{children:["The text beside the label defaults to ",e.jsx(r.code,{children:"${value}%"}),` (matching Figma's own "75%" / "25–75%" examples) — override it with `,e.jsx(r.code,{children:"formatValue"})," for anything else a slider's value might represent:"]}),`
`,e.jsx(n,{of:x}),`
`,e.jsxs(r.h2,{id:"inside-a-form",children:["Inside a ",e.jsx(r.code,{children:"<form>"})]}),`
`,e.jsxs(r.p,{children:["Pass ",e.jsx(r.code,{children:"name"})," to participate in real ",e.jsx(r.code,{children:"<form>"})," submission via a hidden input — ",e.jsx(r.code,{children:"name"})," alone for a single thumb, ",e.jsx(r.code,{children:"${name}Min"}),"/",e.jsx(r.code,{children:"${name}Max"})," for a range (since a tuple can't collapse into one form field):"]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(r.h2,{id:"interaction",children:"Interaction"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Pointer"}),": drag a thumb, or click/tap anywhere on the track to jump the nearest thumb there. Uses pointer capture, so dragging tracks the pointer correctly even once it leaves the track's bounds."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Keyboard"}),": focus a thumb (Tab) and use Arrow Left/Right/Up/Down (±",e.jsx(r.code,{children:"step"}),"), Page Up/Down (±",e.jsx(r.code,{children:"step × 10"}),"), Home (this thumb's lower bound), End (this thumb's upper bound)."]}),`
`,e.jsxs(r.li,{children:["Hover isn't a prop — it's real ",e.jsx(r.code,{children:":hover"})," on the track, same philosophy as ",e.jsx(r.code,{children:"<TextInput>"}),". Confirmed from Figma to darken the whole track and the thumb's border together, not just the thumb."]}),`
`]}),`
`,e.jsx(r.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Each thumb is a real ",e.jsx(r.code,{children:'role="slider"'})," with ",e.jsx(r.code,{children:"aria-valuemin"}),"/",e.jsx(r.code,{children:"aria-valuemax"}),"/",e.jsx(r.code,{children:"aria-valuenow"}),"/",e.jsx(r.code,{children:"aria-valuetext"})," (the last using ",e.jsx(r.code,{children:"formatValue"}),`, so a screen reader hears "75%" rather than a bare "75"). A two-thumb range is two adjacent sliders with distinguishing labels ("Volume minimum"/"Volume maximum") — the documented ARIA pattern, since there's no dedicated "range slider" role.`]}),`
`,e.jsxs(r.li,{children:["A single thumb is ",e.jsx(r.code,{children:"aria-labelledby"})," the visible label directly, rather than duplicating it into an ",e.jsx(r.code,{children:"aria-label"}),"."]}),`
`]}),`
`,e.jsx(r.h2,{id:"props",children:"Props"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"label"}),", ",e.jsx(r.code,{children:"size"})," (",e.jsx(r.code,{children:'"sm" | "md"'}),", default ",e.jsx(r.code,{children:'"md"'}),"), ",e.jsx(r.code,{children:"min"}),"/",e.jsx(r.code,{children:"max"}),"/",e.jsx(r.code,{children:"step"})," (default ",e.jsx(r.code,{children:"0"}),"/",e.jsx(r.code,{children:"100"}),"/",e.jsx(r.code,{children:"1"}),"), ",e.jsx(r.code,{children:"value"}),"/",e.jsx(r.code,{children:"defaultValue"}),"/",e.jsx(r.code,{children:"onValueChange"})," (",e.jsx(r.code,{children:"number | [number, number]"}),"), ",e.jsx(r.code,{children:"showValue"}),", ",e.jsx(r.code,{children:"formatValue"}),", ",e.jsx(r.code,{children:"disabled"}),", ",e.jsx(r.code,{children:"name"}),", ",e.jsx(r.code,{children:"className"}),"."]})]})}function De(i={}){const{wrapper:r}={...t(),...i.components};return r?e.jsx(r,{...i,children:e.jsx(s,{...i})}):s(i)}export{De as default};
