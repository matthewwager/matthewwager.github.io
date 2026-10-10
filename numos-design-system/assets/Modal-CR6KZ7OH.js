import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as t}from"./index-DUy19JZU.js";import{c as r,P as a,b as l,C as n}from"./index-R-0gtsrS.js";import{f as d,D as c,a as h,c as p,d as m,b as x,F as u,e as j,M as f,W as g}from"./Modal.stories-BZz1KmfU.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";import"./paperclip-C3vj8D1_.js";function s(i){const o={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:d}),`
`,e.jsx(o.h1,{id:"modal",children:"Modal"}),`
`,e.jsxs(o.p,{children:["A centered dialog, edge-anchored drawer, or fullscreen panel, portaled to ",e.jsx(o.code,{children:"document.body"})," over a backdrop — matches Figma's Modal (Default/Drawer types) exactly, filled with ",e.jsx(o.code,{children:'<Header variant="modal">'}),", ",e.jsx(o.code,{children:"<ModalBody>"}),", and ",e.jsx(o.code,{children:"<ModalFooter>"}),"."]}),`
`,e.jsx(a,{}),`
`,e.jsx(l,{}),`
`,e.jsxs(o.p,{children:["The example above is wrapped in a small Storybook-only ",e.jsx(o.code,{children:"ModalPlayground"})," so Controls can drive it — the real ",e.jsx(o.code,{children:"<Modal>"})," doesn't manage its own trigger button, that's just how the demo opens it."]}),`
`,e.jsx(o.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"A focused task or decision that interrupts the current page until it's resolved — confirming a destructive action, a short create/edit form, reviewing something before continuing."}),`
`]}),`
`,e.jsx(o.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["For a non-blocking status message — use ",e.jsx(o.code,{children:"<Alert>"}),"."]}),`
`,e.jsxs(o.li,{children:["For a small amount of extra info attached to an element — use ",e.jsx(o.code,{children:"<Tooltip>"})," or ",e.jsx(o.code,{children:"<Popover>"}),"."]}),`
`]}),`
`,e.jsx(o.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import { Modal, ModalBody, ModalFooter, Header, Button, ButtonGroup } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

const [open, setOpen] = useState(false);

<Modal open={open} onOpenChange={setOpen}>
  <Header variant="modal" title="Delete project" onClose={() => setOpen(false)} />
  <ModalBody>
    <p>This can't be undone. Are you sure you want to delete "Q3 roadmap"?</p>
  </ModalBody>
  <ModalFooter>
    <ButtonGroup>
      <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
      <Button variant="destructive" onClick={() => setOpen(false)}>Delete</Button>
    </ButtonGroup>
  </ModalFooter>
</Modal>
`})}),`
`,e.jsx(o.p,{children:"Click the button below — it's a real, live component, not a screenshot."}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(o.h2,{id:"the-header-slot",children:"The header slot"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:'<Header variant="modal">'}),` is exactly what fills Figma's "Header" slot — that variant exists specifically for this (see `,e.jsx(o.code,{children:"<Header>"}),`'s own docs for why it's named "modal" and not "drawer"). Its `,e.jsx(o.code,{children:"onClose"})," is what you wire up to close the modal; ",e.jsx(o.code,{children:"<Modal>"})," itself has no idea how its own header is closed, the same way it has no idea what's in its body."]}),`
`,e.jsx(o.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:'variant="default"'})," (the default) is a centered dialog that fades in while scaling up from the center. ",e.jsx(o.code,{children:'variant="drawer"'})," slides in from an edge instead — pick which one with ",e.jsx(o.code,{children:"side"}),": ",e.jsx(o.code,{children:'"top" | "right" | "bottom" | "left"'})," (defaults to ",e.jsx(o.code,{children:'"right"'}),")."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`<Modal variant="drawer" side="left" open={open} onOpenChange={setOpen}>
  ...
</Modal>
`})}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(n,{of:x}),`
`,e.jsxs(o.p,{children:['Figma gives "drawer" square corners and lets it run edge-to-edge (no radius, matching its own frame exactly) — "default" keeps the ',e.jsx(o.code,{children:"radius-xl"})," rounded corners of a normal dialog."]}),`
`,e.jsxs(o.p,{children:["A third variant, ",e.jsx(o.code,{children:'variant="fullscreen"'}),", is for a modal whose own content is itself a full page — e.g. a List & Detail review flow (a checkbox-selectable list beside a detail pane, with a footer spanning both). It centers like ",e.jsx(o.code,{children:'"default"'})," but scales to fill the viewport minus a small inset, rather than sitting at a fixed reading width."]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(n,{of:j}),`
`,e.jsxs(o.p,{children:["For this shape, the header's own ",e.jsx(o.strong,{children:"×"})," (",e.jsx(o.code,{children:'<Header variant="modal" onClose={...}>'}),`) is the only close affordance — there's no separate close button inside the detail pane, since dismissing "the thing you're reviewing" and dismissing "the whole review" are the same action here. The detail pane also always shows something (defaults to the first row) rather than an empty "nothing selected" state, and a select-all/count row is pinned to the top of the list pane while its rows scroll beneath it — see `,e.jsx(o.code,{children:"FullscreenListDetail"}),"'s own source for the full layout."]}),`
`,e.jsx(o.h2,{id:"closing",children:"Closing"}),`
`,e.jsxs(o.p,{children:["Three ways to close, plus a fourth you control yourself: the header's own ",e.jsx(o.strong,{children:"×"})," button, clicking the backdrop, and Escape — the first two are just callbacks/props you wire up yourself (",e.jsx(o.code,{children:"onClose"}),", ",e.jsx(o.code,{children:"closeOnOverlayClick"}),"), the third is always on."]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"closeOnOverlayClick"})," (default ",e.jsx(o.code,{children:"true"}),") — clicking the dimmed backdrop behind the modal closes it. Set to ",e.jsx(o.code,{children:"false"})," for a modal that should only close via an explicit action (a destructive confirmation you don't want dismissed by an accidental outside click)."]}),`
`,e.jsxs(o.li,{children:["Escape always closes the modal, regardless of ",e.jsx(o.code,{children:"closeOnOverlayClick"}),` — that's a keyboard-accessibility affordance, not a "casual dismiss" one, so it isn't gated behind the same prop.`]}),`
`]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`<Modal closeOnOverlayClick={false} open={open} onOpenChange={setOpen}>
  ...
</Modal>
`})}),`
`,e.jsx(n,{of:f}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"<Modal>"})," never closes itself — ",e.jsx(o.code,{children:"open"}),"/",e.jsx(o.code,{children:"onOpenChange"})," is how it tells you it ",e.jsx(o.em,{children:"wants"})," to close (backdrop click, Escape); your own state decides whether that actually happens, same pattern as ",e.jsx(o.code,{children:"<DropdownMenu>"}),"."]}),`
`,e.jsx(o.h2,{id:"with-form-fields",children:"With form fields"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"<ModalBody>"})," holds whatever you'd put in a form — real fields, not a nested ",e.jsx(o.code,{children:"<Form>"})," (that would double up the card shell; ",e.jsx(o.code,{children:"<Modal>"})," already ",e.jsx(o.em,{children:"is"})," the card)."]}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(o.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Portaled"})," to ",e.jsx(o.code,{children:"document.body"}),", so it always escapes any clipping/",e.jsx(o.code,{children:"overflow: hidden"})," ancestor and stacks above everything else on the page. If opened from somewhere with a forced ",e.jsx(o.code,{children:"data-theme"})," (e.g. inside ",e.jsx(o.code,{children:"<Navigation>"}),"), that theme is captured and reapplied to the portaled modal, even though it's no longer a DOM descendant of it — same technique ",e.jsx(o.code,{children:"<Tooltip>"})," uses."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Background scroll locks"})," while a modal is open, and unlocks when it closes."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Focus moves into the modal"})," on open (the panel itself, so no field gets an unintended initial value/selection) and ",e.jsx(o.strong,{children:"is trapped there"})," — Tab/Shift+Tab cycle within it rather than escaping to the page behind it — until it closes, at which point focus returns to whatever had it before the modal opened."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Transition"}),": stays mounted for the duration of the close animation rather than disappearing instantly, same mount/visible split as ",e.jsx(o.code,{children:"<Tooltip>"}),"/",e.jsx(o.code,{children:"<DropdownMenu>"}),"."]}),`
`]}),`
`,e.jsx(o.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["The panel is ",e.jsx(o.code,{children:'role="dialog"'})," with ",e.jsx(o.code,{children:'aria-modal="true"'}),"."]}),`
`,e.jsxs(o.li,{children:["Give it an accessible name yourself if the visible header text isn't enough on its own — ",e.jsx(o.code,{children:'<Modal aria-label="...">'})," (any native ",e.jsx(o.code,{children:"<div>"}),"/ARIA prop passes through) — or point ",e.jsx(o.code,{children:"aria-labelledby"})," at your header's own id."]}),`
`]}),`
`,e.jsx(o.h2,{id:"props",children:"Props"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"<Modal>"}),": ",e.jsx(o.code,{children:"variant"}),", ",e.jsx(o.code,{children:"side"}),", ",e.jsx(o.code,{children:"open"}),", ",e.jsx(o.code,{children:"defaultOpen"}),", ",e.jsx(o.code,{children:"onOpenChange"}),", ",e.jsx(o.code,{children:"closeOnOverlayClick"}),", ",e.jsx(o.code,{children:"className"}),", plus any native ",e.jsx(o.code,{children:"<div>"}),"/ARIA prop. ",e.jsx(o.code,{children:"<ModalBody>"}),": any native ",e.jsx(o.code,{children:"<div>"})," prop. ",e.jsx(o.code,{children:"<ModalFooter>"}),": ",e.jsx(o.code,{children:"secondaryAction"}),", ",e.jsx(o.code,{children:"children"})," (required)."]})]})}function Ae(i={}){const{wrapper:o}={...t(),...i.components};return o?e.jsx(o,{...i,children:e.jsx(s,{...i})}):s(i)}export{Ae as default};
