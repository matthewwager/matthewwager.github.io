import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as s}from"./index-DUy19JZU.js";import{d as r,C as o}from"./index-Dqhar8cf.js";import{S as d,D as a,e as l,W as c,I as h,b as m,P as p,c as x,d as g,a as u}from"./SegmentedControl.stories-DdlTOFTb.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-CajeWqVt.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramCell-D01BibyM.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";import"./layout-grid-LHnh2PTj.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:d}),`
`,e.jsx(n.h1,{id:"segmentedcontrol",children:"SegmentedControl"}),`
`,e.jsxs(n.p,{children:["A single-choice control styled as connected pill segments. Implements the WAI-ARIA ",e.jsx(n.code,{children:"radiogroup"}),"/",e.jsx(n.code,{children:"radio"})," pattern — this is fundamentally a mutually-exclusive choice, the same as ",e.jsx(n.code,{children:"<RadioGroup>"}),", just styled as buttons — with the same roving-tabindex, automatic-activation keyboard behavior as ",e.jsx(n.code,{children:"<TabList>"}),": arrow keys move focus and select in one step."]}),`
`,e.jsx(n.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'Switching between a small number (2-4) of closely-related views or filters that are all visible at once — "Day / Week / Month", "List / Grid".'}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:'variant="progress"'}),":"]}),' filtering by the stages of an ordered process — "Inputs → Review → Approved → Paid" — where the order itself matters. Add a ',e.jsx(n.code,{children:"badge"})," count to each segment to show how much is waiting at every stage."]}),`
`]}),`
`,e.jsx(n.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["For navigating between unrelated sections of content — use ",e.jsx(n.code,{children:"<Tabs>"}),"."]}),`
`,e.jsxs(n.li,{children:["For more than ~4-5 options — use ",e.jsx(n.code,{children:"<Select>"})," or ",e.jsx(n.code,{children:"<RadioGroup>"})," instead; segmented controls get cramped fast."]}),`
`]}),`
`,e.jsx(n.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { SegmentedControl, SegmentedControlOption } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

const [value, setValue] = useState("week");

<SegmentedControl value={value} onValueChange={setValue}>
  <SegmentedControlOption value="day">Day</SegmentedControlOption>
  <SegmentedControlOption value="week">Week</SegmentedControlOption>
  <SegmentedControlOption value="month">Month</SegmentedControlOption>
</SegmentedControl>
`})}),`
`,e.jsxs(n.p,{children:["Click an option below — it's a real, live component, not a screenshot. There's no selection at all until you set ",e.jsx(n.code,{children:"defaultValue"})," (uncontrolled) or ",e.jsx(n.code,{children:"value"})," (controlled), same as ",e.jsx(n.code,{children:"<Tabs>"}),"."]}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(n.h2,{id:"width",children:"Width"}),`
`,e.jsxs(n.p,{children:["The control fills its container's width (",e.jsx(n.code,{children:"width: 100%"}),"), with every option taking an equal share of it (",e.jsx(n.code,{children:"flex: 1"})," each) — not shrink-to-fit like Figma's own frames, which only ever show it at its content's natural width. This matters most inside ",e.jsx(n.code,{children:"<Form>"}),"/",e.jsx(n.code,{children:"<FormBody>"}),", where it needs to behave like any other field and span the same width as ",e.jsx(n.code,{children:"<TextInput>"}),"/",e.jsx(n.code,{children:"<Select>"})," above and below it, rather than being only as wide as its own labels."]}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"size"}),": ",e.jsx(n.code,{children:'"sm" | "md" | "lg"'})," (defaults to ",e.jsx(n.code,{children:'"lg"'}),"). ",e.jsx(n.code,{children:"lg"}),"/",e.jsx(n.code,{children:"md"})," padding and type are confirmed directly from Figma; ",e.jsx(n.code,{children:"sm"})," follows the same downward progression rather than being individually confirmed there, since Figma's own doc didn't include a fully worked example at that size."]}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(n.h2,{id:"icons",children:"Icons"}),`
`,e.jsx(o,{of:c}),`
`,e.jsxs(n.p,{children:["Leave out the text for an icon-only segment, e.g. a list/grid view switch in a ",e.jsx(n.code,{children:"<Toolbar>"}),". Give each one an ",e.jsx(n.code,{children:"aria-label"}),", since the icon alone has no accessible name."]}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(n.h2,{id:"disabled-options",children:"Disabled options"}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(n.h2,{id:"a-note-on-disabled",children:"A note on disabled"}),`
`,e.jsxs(n.p,{children:["Disabled isn't in Figma's variant set at all — it's added here rather than left unstyled, using ",e.jsx(n.code,{children:"--content-disabled"})," with pointer events off, consistent with the rest of this library."]}),`
`,e.jsx(n.h2,{id:"progress-variant",children:"Progress variant"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:'variant="progress"'})," draws the segments as chevrons pointing left to right, so the control reads as a sequence of stages, not a set of equal choices. Selecting a segment still works exactly like the default variant — it's the same single-choice ",e.jsx(n.code,{children:"radiogroup"})," with the same keyboard behavior; only the shape changes. Use it to filter a list by stage, as in the workflow apps' Inputs → Work → Output template."]}),`
`,e.jsxs(n.p,{children:["It defaults to ",e.jsx(n.code,{children:'size="md"'}),", Figma's own progress size; ",e.jsx(n.code,{children:"lg"})," and ",e.jsx(n.code,{children:"sm"})," also work. The progress variant fits up to about 5–6 stages, a little more than the default variant, since the labels are usually short."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<SegmentedControl variant="progress" value={stage} onValueChange={setStage}>
  <SegmentedControlOption value="inputs" badge={12}>Inputs</SegmentedControlOption>
  <SegmentedControlOption value="review" badge={4}>Review</SegmentedControlOption>
  <SegmentedControlOption value="approved" badge={3}>Approved</SegmentedControlOption>
  <SegmentedControlOption value="scheduled" badge={6}>Scheduled</SegmentedControlOption>
  <SegmentedControlOption value="paid" badge={21}>Paid</SegmentedControlOption>
</SegmentedControl>
`})}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(o,{of:g}),`
`,e.jsx(n.h2,{id:"badges",children:"Badges"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"badge"})," on any ",e.jsx(n.code,{children:"<SegmentedControlOption>"})," shows a count (or short text) after the label, using ",e.jsx(n.code,{children:'<Badge size="md">'}),": ",e.jsx(n.code,{children:"neutral"})," normally, ",e.jsx(n.code,{children:"info"})," while that segment is selected. It works on both variants."]}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(n.h2,{id:"using-it-in-a-form",children:"Using it in a form"}),`
`,e.jsxs(n.p,{children:["Since the selected option isn't a real ",e.jsx(n.code,{children:"<input>"}),", it doesn't participate in a ",e.jsx(n.code,{children:"<form>"}),"'s submission on its own. Pass ",e.jsx(n.code,{children:"name"})," to render a hidden native input that tracks the selected value — same pattern as ",e.jsx(n.code,{children:"<Select>"}),"'s ",e.jsx(n.code,{children:"name"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<SegmentedControl name="priority" defaultValue="medium">
  <SegmentedControlOption value="low">Low</SegmentedControlOption>
  <SegmentedControlOption value="medium">Medium</SegmentedControlOption>
  <SegmentedControlOption value="high">High</SegmentedControlOption>
</SegmentedControl>
`})}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The container is ",e.jsx(n.code,{children:'role="radiogroup"'}),"; each option is ",e.jsx(n.code,{children:'role="radio"'})," with ",e.jsx(n.code,{children:"aria-checked"}),"."]}),`
`,e.jsxs(n.li,{children:["Arrow Left/Right move focus and select in one step (roving ",e.jsx(n.code,{children:"tabindex"})," — only the selected option is in the natural Tab order). Home/End jump to the first/last option."]}),`
`,e.jsxs(n.li,{children:["A ",e.jsx(n.code,{children:"badge"}),` is part of the option's accessible name, so a screen reader announces "Review 4". The progress variant's chevrons are decorative (`,e.jsx(n.code,{children:"aria-hidden"}),"); if the order of the stages matters to the user, say so in a visible label or heading near the control."]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"<SegmentedControl>"}),": ",e.jsx(n.code,{children:"size"}),", ",e.jsx(n.code,{children:"value"}),", ",e.jsx(n.code,{children:"defaultValue"}),", ",e.jsx(n.code,{children:"onValueChange"}),", ",e.jsx(n.code,{children:"name"}),", ",e.jsx(n.code,{children:"className"}),". ",e.jsx(n.code,{children:"<SegmentedControlOption>"}),": ",e.jsx(n.code,{children:"value"})," (required), ",e.jsx(n.code,{children:"leadingIcon"}),", ",e.jsx(n.code,{children:"trailingIcon"}),", ",e.jsx(n.code,{children:"disabled"}),", ",e.jsx(n.code,{children:"className"}),"."]})]})}function Ae(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ae as default};
