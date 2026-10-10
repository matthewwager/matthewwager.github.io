import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as r}from"./index-DUy19JZU.js";import{c as s,P as l,b as d,C as i}from"./index-R-0gtsrS.js";import{T as a,D as c,W as h,P as p,C as m,I as x}from"./Tooltip.stories-DQ-z3C3C.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:a}),`
`,e.jsx(o.h1,{id:"tooltip",children:"Tooltip"}),`
`,e.jsx(o.p,{children:"A means of displaying a description or extra information about an element — usually on hover, but can also be on click or tap."}),`
`,e.jsx(l,{}),`
`,e.jsx(d,{}),`
`,e.jsxs(o.p,{children:["The example above is wrapped in a small Storybook-only ",e.jsx(o.code,{children:"TooltipPlayground"}),' so Controls can drive it — its trigger is always the same "Hover me" button, and ',e.jsx(o.code,{children:"open"})," forces the tooltip to render without needing to hover it. Both are Storybook conveniences; the real ",e.jsx(o.code,{children:"<Tooltip>"})," API is exactly what's documented below."]}),`
`,e.jsx(o.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"Explaining what an icon-only button does."}),`
`,e.jsx(o.li,{children:"Adding a short bit of extra context to a label, metric, or truncated value, without permanently taking up space on the page."}),`
`]}),`
`,e.jsx(o.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["For content someone needs to interact with (links, buttons) — a tooltip is non-interactive (",e.jsx(o.code,{children:"pointer-events: none"}),") and disappears the moment the pointer leaves the trigger. Use ",e.jsx(o.code,{children:"<Popover>"})," instead."]}),`
`,e.jsx(o.li,{children:"For anything critical to completing a task — tooltips are easy to miss, especially on touch devices."}),`
`]}),`
`,e.jsx(o.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import { Tooltip, Button } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<Tooltip content="Saved 2 minutes ago">
  <Button variant="secondary">Hover me</Button>
</Tooltip>
`})}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"children"})," is the trigger — any single element, wired up via ",e.jsx(o.code,{children:"cloneElement"})," (matching ",e.jsx(o.code,{children:"<DropdownMenuTrigger>"}),"'s pattern), so it renders exactly as you wrote it plus the hover/focus/click handlers Tooltip needs."]}),`
`,e.jsx(o.p,{children:"Hover over the button below — it's a real, live component, not a screenshot."}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(o.h3,{id:"title",children:"Title"}),`
`,e.jsxs(o.p,{children:["Figma's Tooltip has an optional bold heading above the body text, hidden unless set. Pass it as ",e.jsx(o.code,{children:"title"}),":"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`<Tooltip title="Autosave" content="Changes are saved automatically as you type.">
  <Button variant="secondary">Hover me</Button>
</Tooltip>
`})}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(o.h2,{id:"placement",children:"Placement"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"placement"})," (",e.jsx(o.code,{children:'"top" | "bottom" | "left" | "right"'}),", defaults to ",e.jsx(o.code,{children:'"top"'}),") is which side of the trigger the tooltip opens toward — the arrow always points back at the trigger from the opposite side. Position is computed from the trigger's measured ",e.jsx(o.code,{children:"getBoundingClientRect()"}),", not CSS anchoring, and there's no viewport collision detection: if ",e.jsx(o.code,{children:'placement="top"'})," would run off the top of the screen, it stays there rather than flipping to ",e.jsx(o.code,{children:'"bottom"'}),"."]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(o.h2,{id:"trigger-mode",children:"Trigger mode"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"trigger"})," (",e.jsx(o.code,{children:'"hover" | "click"'}),", defaults to ",e.jsx(o.code,{children:'"hover"'}),`) matches Figma's description that a tooltip is "usually on hover, but can also be on click or tap." `,e.jsx(o.code,{children:'"hover"'})," also opens on keyboard focus, so it's reachable without a mouse. ",e.jsx(o.code,{children:'"click"'})," toggles on click/tap and additionally closes on an outside click, mirroring ",e.jsx(o.code,{children:"<DropdownMenu>"}),"."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(o.h2,{id:"icon-only-triggers",children:"Icon-only triggers"}),`
`,e.jsxs(o.p,{children:["The most common real use — pair with ",e.jsx(o.code,{children:"aria-label"})," on the trigger since it has no visible text of its own:"]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(o.h2,{id:"colors",children:"Colors"}),`
`,e.jsxs(o.p,{children:["Tooltip always renders with ",e.jsx(o.code,{children:"--background-default-inverse"})," / ",e.jsx(o.code,{children:"--content-base-inverse"})," / ",e.jsx(o.code,{children:"--content-emphasis-inverse"})," — the same *-inverse tokens used elsewhere for content sitting on an inverted surface. ",e.jsx(o.code,{children:"--background-default-inverse"})," is new: it didn't exist in this file before Tooltip needed it. Confirmed directly from Figma's Foundations semantic doc table (",e.jsx(o.code,{children:"Background/Default Inverse"}),") — Mode 1 (light) is Gray/600, Mode 2 (dark) is Beige/100, so the tooltip flips to a light surface on a dark page instead of blending into it. See the Foundations → Tokens page."]}),`
`,e.jsx(o.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Opens on"}),": hover or focus (",e.jsx(o.code,{children:'trigger="hover"'}),", the default) or click/tap (",e.jsx(o.code,{children:'trigger="click"'}),")."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Closes on"}),": mouse leave / blur (hover mode), an outside click (click mode), or Escape (either mode)."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Transition"}),": fades in while sliding ",e.jsx(o.code,{children:"var(--space-1)"})," from the trigger's side into its resting ",e.jsx(o.code,{children:"placement"})," position — e.g. ",e.jsx(o.code,{children:'placement="left"'})," starts closer to the trigger and settles further left as it fades in. Reverses on close, and (like ",e.jsx(o.code,{children:"<DropdownMenu>"}),") stays mounted for the exit transition instead of disappearing instantly."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Rendering"}),": portaled to ",e.jsx(o.code,{children:"document.body"})," and positioned via the trigger's measured position (re-measured on scroll/resize), rather than CSS ",e.jsx(o.code,{children:"position: absolute"})," in place. Otherwise a scrolling or ",e.jsx(o.code,{children:"overflow: hidden"})," ancestor — a scrollable panel, a modal, ",e.jsx(o.code,{children:"<Navigation>"}),"'s scrollable item list — would clip the tooltip the instant it extended past that ancestor's own box, no matter how high its z-index. The portaled tooltip re-applies whatever ",e.jsx(o.code,{children:"data-theme"})," its trigger was under (so it still renders dark inside ",e.jsx(o.code,{children:"<Navigation>"}),", for example) even though it's no longer a DOM descendant of it."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Controlled open state"}),": skip ",e.jsx(o.code,{children:"defaultOpen"}),"/hover entirely and drive it yourself with ",e.jsx(o.code,{children:"open"}),"/",e.jsx(o.code,{children:"onOpenChange"}),", same pattern as ",e.jsx(o.code,{children:"<DropdownMenu>"}),"."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Not handled yet"}),": no open/close delay, and no viewport collision detection — see Placement above."]}),`
`]}),`
`,e.jsx(o.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["The trigger gets ",e.jsx(o.code,{children:"aria-describedby"})," pointing at the tooltip's content while it's open, so screen readers announce it on focus."]}),`
`,e.jsxs(o.li,{children:["The tooltip panel is a real ",e.jsx(o.code,{children:'role="tooltip"'}),"."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:'trigger="hover"'})," also opens on keyboard focus (and closes on blur), so it's reachable without a mouse — an icon-only trigger still needs its own ",e.jsx(o.code,{children:"aria-label"}),", since the tooltip's own accessible-name wiring doesn't replace that."]}),`
`]}),`
`,e.jsx(o.h2,{id:"props",children:"Props"}),`
`,e.jsxs(o.p,{children:["See the ",e.jsx(o.strong,{children:"Controls"})," table above for the full list, types, and defaults — generated automatically from the TypeScript types."]})]})}function Me(t={}){const{wrapper:o}={...r(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}export{Me as default};
