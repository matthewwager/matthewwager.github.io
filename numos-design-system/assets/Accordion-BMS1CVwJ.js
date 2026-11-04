import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as s}from"./index-DUy19JZU.js";import{d as c,C as i,c as d}from"./index-BxMlVsXw.js";import{A as a,D as t,a as l,E as h,S as p,F as m}from"./Accordion.stories-BvK_gbgF.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-5e6ad3Cm.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramCell-4gPCrU5w.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";import"./ellipsis-vertical-Bt6GK3lC.js";function r(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:a}),`
`,e.jsx(n.h1,{id:"accordion",children:"Accordion"}),`
`,e.jsxs(n.p,{children:["A rounded, clipped group of collapsible rows — matches Figma's Accordion/",e.jsx(n.code,{children:"CollapsableRow"})," exactly."]}),`
`,e.jsx(i,{of:t}),`
`,e.jsx(n.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'FAQ lists, expandable help sections, or any vertical stack of "tap a title to reveal its content" rows.'}),`
`]}),`
`,e.jsx(n.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Accordion, AccordionItem } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<Accordion>
  <AccordionItem title="What's included in the free plan?" defaultExpanded>
    Every workspace gets unlimited members, up to 3 projects, and 5GB of storage.
  </AccordionItem>
  <AccordionItem title="Can I change plans later?">
    Yes — upgrade or downgrade at any time from Settings → Billing.
  </AccordionItem>
</Accordion>
`})}),`
`,e.jsxs(n.h2,{id:"each-item-manages-its-own-state--unless-you-ask-for-exclusive",children:["Each item manages its own state — unless you ask for ",e.jsx(n.code,{children:"exclusive"})]}),`
`,e.jsxs(n.p,{children:["Figma's own Accordion example is a plain stack of independently-collapsed rows, not a single-open-at-a-time widget — so by default, ",e.jsx(n.code,{children:"<AccordionItem>"})," behaves like a standalone ",e.jsx(n.code,{children:"<Toggle>"}),": uncontrolled by default (",e.jsx(n.code,{children:"defaultExpanded"}),"), or controlled with ",e.jsx(n.code,{children:"expanded"}),"/",e.jsx(n.code,{children:"onExpandedChange"}),"."]}),`
`,e.jsx(i,{of:l}),`
`,e.jsxs(n.p,{children:["Set ",e.jsx(n.code,{children:"exclusive"})," on ",e.jsx(n.code,{children:"<Accordion>"}),' to coordinate them instead — expanding one item collapses any other, the same "radio vs. checkbox" distinction ',e.jsx(n.code,{children:"<RadioGroup>"}),"/",e.jsx(n.code,{children:"<CheckboxGroup>"})," already draw. Whichever item has ",e.jsx(n.code,{children:"defaultExpanded"})," starts open (the first one, if more than one sets it); each item's own ",e.jsx(n.code,{children:"expanded"}),"/",e.jsx(n.code,{children:"onExpandedChange"})," are ignored here, since there's one shared source of truth instead."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Accordion exclusive>
  <AccordionItem title="..." defaultExpanded>...</AccordionItem>
  <AccordionItem title="...">...</AccordionItem>
</Accordion>
`})}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h2,{id:"separated",children:"Separated"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:'variant="separated"'})," gives each item its own bordered, rounded row with a 4px gap between them, a chevron that points right when collapsed, and the open panel on ",e.jsx(n.code,{children:"--background-element"}),". Use it when each item is a record in its own right, e.g. a bank account to reconcile, and especially when its head carries more than a title."]}),`
`,e.jsx(n.h2,{id:"subtitle-and-trailing-content",children:"Subtitle and trailing content"}),`
`,e.jsxs(n.p,{children:["Any item can take a ",e.jsx(n.code,{children:"subtitle"})," (a second line under the title) and ",e.jsx(n.code,{children:"trailing"})," content on the right: a ",e.jsx(n.code,{children:"<ProgressBar inline>"}),", a ",e.jsx(n.code,{children:'<Button size="sm">'}),", an overflow ",e.jsx(n.code,{children:"<IconButton>"}),". Clicking anywhere else on the head toggles the item, but clicks in ",e.jsx(n.code,{children:"trailing"})," only reach their own controls. The chevron and titles are the head's keyboard target: one Tab stop that toggles with Enter or Space, before the trailing controls."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Accordion variant="separated" exclusive>
  <AccordionItem
    title="JP Morgan Chase Acct ****1234"
    subtitle="1110.116 Cash – Chase Operating · 2 of 11 bank lines unmatched"
    trailing={
      <>
        <ProgressBar value={82} inline aria-label="Matched" />
        <Button variant="secondary" size="sm">Submit</Button>
        <IconButton variant="ghost" size="sm" icon={<EllipsisVertical size={16} />} aria-label="More" />
      </>
    }
  >
    ...
  </AccordionItem>
</Accordion>
`})}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h2,{id:"fill",children:"Fill"}),`
`,e.jsxs(n.p,{children:["With ",e.jsx(n.code,{children:"fill"}),", the open item takes over the accordion: a working view, such as two columns of records to match, rather than a disclosure."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"It grows to the accordion's full height, and its panel scrolls inside it."}),`
`,e.jsx(n.li,{children:"Opening pushes the other items out of view: those above slide up and out as its head rises to the top, and those below are pushed down by the growing panel. Closing reverses it, with the items above coming back down and pushing it into place."}),`
`,e.jsxs(n.li,{children:["While it's open, the accordion can't be scrolled and the other items can't be tabbed to (they're ",e.jsx(n.code,{children:"inert"}),") until it closes."]}),`
`,e.jsx(n.li,{children:"While nothing is open, the accordion is a scroll area of collapsed items, and closing returns to wherever the list was scrolled."}),`
`]}),`
`,e.jsxs(n.p,{children:["The accordion is as tall as its parent, so the parent needs a height (e.g. a full-height page whose content area is ",e.jsx(n.code,{children:"flex: 1"}),"). ",e.jsx(n.code,{children:"fill"})," implies ",e.jsx(n.code,{children:"exclusive"}),", since only one item can fill it at a time."]}),`
`,e.jsx(n.h3,{id:"footer",children:"Footer"}),`
`,e.jsxs(n.p,{children:["An item's ",e.jsx(n.code,{children:"footer"})," shows below it while it's open, outside its border, and in a ",e.jsx(n.code,{children:"fill"}),` accordion it's pinned to the bottom. Use it for how to work in the panel, e.g. "Select a transaction and a corresponding journal entry to match them.", or for actions on the whole panel.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Accordion variant="separated" fill>
  <AccordionItem title="JP Morgan Chase Acct ****1234" footer="Select a transaction and a corresponding journal entry to match them.">
    ...
  </AccordionItem>
</Accordion>
`})}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h2,{id:"the-collapsed-panel-is-a-real-divider-not-just-hidden",children:"The collapsed panel is a real divider, not just hidden"}),`
`,e.jsxs(n.p,{children:["In the default variant, confirmed from Figma: a collapsed row's panel isn't unmounted — it's a 1px sliver that still shows the ",e.jsx(n.code,{children:"border-disabled"})," divider between rows. This component reproduces that with a CSS grid ",e.jsx(n.code,{children:"fr"}),"-unit height animation (",e.jsx(n.code,{children:"0fr"})," ↔ ",e.jsx(n.code,{children:"1fr"}),") rather than a JS-measured height or ",e.jsx(n.code,{children:"display: none"}),", so the divider is always there and the expand/collapse is a genuine height transition, not a crossfade."]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Accordion"}),": ",e.jsx(n.code,{children:"children"})," (required — ",e.jsx(n.code,{children:"<AccordionItem>"}),"s), ",e.jsx(n.code,{children:"variant"})," (",e.jsx(n.code,{children:'"default"'})," or ",e.jsx(n.code,{children:'"separated"'}),"), ",e.jsx(n.code,{children:"exclusive"})," (only one item open at a time), ",e.jsx(n.code,{children:"fill"})," (the open item takes over the accordion's full height; implies ",e.jsx(n.code,{children:"exclusive"}),"), ",e.jsx(n.code,{children:"className"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"AccordionItem"}),": ",e.jsx(n.code,{children:"title"})," (required), ",e.jsx(n.code,{children:"subtitle"}),", ",e.jsx(n.code,{children:"trailing"})," (controls on the right of the head that don't toggle it), ",e.jsx(n.code,{children:"footer"})," (shown below the open item, pinned in a ",e.jsx(n.code,{children:"fill"})," accordion), ",e.jsx(n.code,{children:"children"})," (required — the panel content), ",e.jsx(n.code,{children:"expanded"}),"/",e.jsx(n.code,{children:"onExpandedChange"})," (ignored when the parent ",e.jsx(n.code,{children:"<Accordion>"})," has ",e.jsx(n.code,{children:"exclusive"}),"), ",e.jsx(n.code,{children:"defaultExpanded"}),", ",e.jsx(n.code,{children:"className"}),"."]}),`
`,e.jsx(d,{of:t})]})}function Ce(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{Ce as default};
