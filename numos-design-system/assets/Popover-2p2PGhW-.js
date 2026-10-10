import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as s}from"./index-DUy19JZU.js";import{c as r,P as l,b as c,C as t}from"./index-R-0gtsrS.js";import{b as a,D as d,a as h,M as p,W as m,N as x,P as u,H as g,I as j}from"./Popover.stories-DcNY0vo7.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
`,e.jsx(o.h1,{id:"popover",children:"Popover"}),`
`,e.jsxs(o.p,{children:[`A persistent, dismissible panel anchored to a trigger — matches Figma's Popover exactly: a title + close (×) button row, a body row, an optional footer action row (Figma's own "ButtonGroup", hidden unless you pass `,e.jsx(o.code,{children:"actions"}),"), and a single arrow pointing back at the trigger."]}),`
`,e.jsx(l,{}),`
`,e.jsx(c,{}),`
`,e.jsxs(o.p,{children:["The example above is wrapped in a small Storybook-only ",e.jsx(o.code,{children:"PopoverPlayground"})," so Controls can drive it — its trigger is always the same button. Click it to open the popover, same as real usage; some examples below set ",e.jsx(o.code,{children:"defaultOpen"})," so you can see them without clicking first, but they're still the real, uncontrolled component underneath (clicking the trigger, or moving the pointer off it in ",e.jsx(o.code,{children:'trigger="hover"'})," examples, still closes them). Both the playground and ",e.jsx(o.code,{children:"defaultOpen"}),"-for-review are Storybook conveniences; the real ",e.jsx(o.code,{children:"<Popover>"})," API is exactly what's documented below."]}),`
`,e.jsx(o.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"Content someone needs to interact with — links, form fields, a confirm/cancel action pair — anchored to whatever triggered it."}),`
`,e.jsx(o.li,{children:"A dismissible panel that should stay open while the user reads or acts on it, rather than disappearing the moment the pointer moves."}),`
`]}),`
`,e.jsx(o.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["A short, non-interactive hint on hover — use ",e.jsx(o.code,{children:"<Tooltip>"}),", which is lighter-weight (",e.jsx(o.code,{children:"pointer-events: none"}),", no header/footer chrome) and exactly what it's for."]}),`
`,e.jsxs(o.li,{children:["A list of actions or options to pick from — use ",e.jsx(o.code,{children:"<DropdownMenu>"}),". A menu's items are the whole point of the panel; a Popover's ",e.jsx(o.code,{children:"content"})," is closer to an explanation with something to act on."]}),`
`,e.jsxs(o.li,{children:["Blocking interaction with the rest of the page until the user responds — use ",e.jsx(o.code,{children:"<Modal>"}),". A Popover never traps focus or dims the background."]}),`
`]}),`
`,e.jsx(o.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import { Popover, Button } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<Popover title="Title" content="Body text">
  <Button variant="secondary">Click me</Button>
</Popover>
`})}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"children"})," is the trigger — any single element, wired up via ",e.jsx(o.code,{children:"cloneElement"})," (same pattern as ",e.jsx(o.code,{children:"<Tooltip>"}),"/",e.jsx(o.code,{children:"<DropdownMenuTrigger>"}),"), so it renders exactly as you wrote it plus whatever click/hover handling ",e.jsx(o.code,{children:"trigger"})," needs."]}),`
`,e.jsx(o.p,{children:"Click the button below — it's a real, live component, not a screenshot."}),`
`,e.jsx(t,{of:d}),`
`,e.jsx(o.h3,{id:"title-is-optional",children:"Title is optional"}),`
`,e.jsxs(o.p,{children:["Omit it and the body flows into the space a title would have occupied instead of leaving an empty row above it — sharing that row with the close button, if ",e.jsx(o.code,{children:"showClose"})," is still on:"]}),`
`,e.jsx(t,{of:h}),`
`,e.jsxs(o.p,{children:["With ",e.jsx(o.code,{children:"showClose"})," also off, it's just the body, filling the panel on its own:"]}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(o.h2,{id:"footer-actions",children:"Footer actions"}),`
`,e.jsxs(o.p,{children:[`Figma's own "ButtonGroup" is hidden by default — pass `,e.jsx(o.code,{children:"actions"})," (typically a ",e.jsx(o.code,{children:"<ButtonGroup>"})," of ",e.jsx(o.code,{children:"<Button>"}),"s) for a footer row, right-aligned to match Figma:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`<Popover
  title="Delete this record?"
  content="This can't be undone."
  actions={
    <ButtonGroup>
      <Button variant="secondary" size="sm">Cancel</Button>
      <Button variant="primary" size="sm">Confirm</Button>
    </ButtonGroup>
  }
>
  <Button variant="destructive">Delete</Button>
</Popover>
`})}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(o.h3,{id:"hiding-the-close-button",children:"Hiding the close button"}),`
`,e.jsxs(o.p,{children:["Only do this if ",e.jsx(o.code,{children:"actions"})," (or something else) already gives the user a clear way to dismiss it — otherwise the only way out is Escape or an outside click, which isn't discoverable:"]}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(o.h2,{id:"placement",children:"Placement"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"placement"})," (",e.jsx(o.code,{children:'"top" | "bottom" | "left" | "right"'}),", defaults to ",e.jsx(o.code,{children:'"top"'}),") is which side of the trigger the popover opens toward — matches Figma's four Point-* arrow variants, and the arrow always points back at the trigger from the opposite side. Position is computed from the trigger's measured ",e.jsx(o.code,{children:"getBoundingClientRect()"}),", not CSS anchoring, and there's no viewport collision detection: if ",e.jsx(o.code,{children:'placement="top"'})," would run off the top of the screen, it stays there rather than flipping to ",e.jsx(o.code,{children:'"bottom"'}),"."]}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(o.h2,{id:"trigger-mode",children:"Trigger mode"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"trigger"})," (",e.jsx(o.code,{children:'"click" | "hover"'}),", defaults to ",e.jsx(o.code,{children:'"click"'}),") — a Popover is a persistent, explicitly-dismissed panel (it has its own close button), not a hover hint, so it defaults the opposite way from ",e.jsx(o.code,{children:"<Tooltip>"}),". ",e.jsx(o.code,{children:'"click"'})," also closes on an outside click, mirroring ",e.jsx(o.code,{children:"<DropdownMenu>"}),". ",e.jsx(o.code,{children:'"hover"'})," is available for lighter-weight cases — it never renders the close button regardless of ",e.jsx(o.code,{children:"showClose"}),", since dismissing on pointer-leave already gives it a way out; a persistent close button on a surface that disappears the moment you move toward it doesn't make sense."]}),`
`,e.jsx(t,{of:g}),`
`,e.jsx(o.h2,{id:"icon-only-triggers",children:"Icon-only triggers"}),`
`,e.jsxs(o.p,{children:["Pair with ",e.jsx(o.code,{children:"aria-label"})," on the trigger since it has no visible text of its own:"]}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(o.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Opens on"}),": click/tap (",e.jsx(o.code,{children:'trigger="click"'}),", the default) or hover (",e.jsx(o.code,{children:'trigger="hover"'}),")."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Closes on"}),": the close button, an outside click (click mode), mouse leave (hover mode), or Escape (any mode) — Escape and the close button both return focus to the trigger; an outside click doesn't, since the user's clicking on something else they likely meant to interact with."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Transition"}),": fades in while sliding ",e.jsx(o.code,{children:"var(--space-1)"})," from the trigger's side into its resting ",e.jsx(o.code,{children:"placement"})," position, same technique as ",e.jsx(o.code,{children:"<Tooltip>"}),". Reverses on close, and stays mounted for the exit transition instead of disappearing instantly."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Rendering"}),": portaled to ",e.jsx(o.code,{children:"document.body"})," and positioned via the trigger's measured position (re-measured on scroll/resize/every render), rather than CSS ",e.jsx(o.code,{children:"position: absolute"})," in place — otherwise a scrolling or ",e.jsx(o.code,{children:"overflow: hidden"})," ancestor would clip it the instant it extended past that ancestor's own box, no matter how high its z-index. Re-applies whatever ",e.jsx(o.code,{children:"data-theme"})," its trigger was under, since portaling escapes that ancestor."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Controlled open state"}),": skip ",e.jsx(o.code,{children:"defaultOpen"}),"/click entirely and drive it yourself with ",e.jsx(o.code,{children:"open"}),"/",e.jsx(o.code,{children:"onOpenChange"}),", same pattern as ",e.jsx(o.code,{children:"<DropdownMenu>"}),"/",e.jsx(o.code,{children:"<Tooltip>"}),"."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Not handled yet"}),": no viewport collision detection (see Placement above), and no focus trap — a Popover never blocks interaction with the rest of the page, unlike ",e.jsx(o.code,{children:"<Modal>"}),"."]}),`
`]}),`
`,e.jsx(o.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["The panel is a real ",e.jsx(o.code,{children:'role="dialog"'}),", ",e.jsx(o.code,{children:"aria-labelledby"})," the title when one's given."]}),`
`,e.jsxs(o.li,{children:["The trigger gets ",e.jsx(o.code,{children:"aria-describedby"})," pointing at the popover while it's open."]}),`
`,e.jsxs(o.li,{children:["Opening a Popover doesn't move focus into it — there's no safe assumption about whether the close button, an action button, or something inside ",e.jsx(o.code,{children:"content"})," should receive it first, same reasoning as ",e.jsx(o.code,{children:"<DropdownMenuPanel>"}),". Escape and the close button both return focus to the trigger."]}),`
`]}),`
`,e.jsx(o.h2,{id:"props",children:"Props"}),`
`,e.jsxs(o.p,{children:["See the ",e.jsx(o.strong,{children:"Controls"})," table above for the full list, types, and defaults — generated automatically from the TypeScript types."]})]})}function De(i={}){const{wrapper:o}={...s(),...i.components};return o?e.jsx(o,{...i,children:e.jsx(n,{...i})}):n(i)}export{De as default};
