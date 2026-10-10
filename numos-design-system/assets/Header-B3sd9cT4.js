import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as r}from"./index-DUy19JZU.js";import{c as s,P as a,b as d,C as i}from"./index-R-0gtsrS.js";import{H as c,D as l,T as h,I as p}from"./Header.stories-B2B1rfjR.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";import"./rotate-ccw-clock-DPzdVPsj.js";function t(n){const o={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c}),`
`,e.jsx(o.h1,{id:"header",children:"Header"}),`
`,e.jsxs(o.p,{children:["An element that appears across the top of all pages on a website or application; it usually contains the page name and main navigation. Composed from ",e.jsx(o.code,{children:"<AppIcon>"})," and ",e.jsx(o.code,{children:"<Tabs>"})," — the sub-nav is just a ",e.jsx(o.code,{children:"<TabList>"})," of ",e.jsx(o.code,{children:"<Tab>"}),"s."]}),`
`,e.jsx(a,{}),`
`,e.jsx(d,{}),`
`,e.jsxs(o.p,{children:["The example above is wrapped in a small Storybook-only ",e.jsx(o.code,{children:"HeaderPlayground"})," so Controls can drive it — ",e.jsx(o.code,{children:"subNav"})," and ",e.jsx(o.code,{children:"actions"})," there are booleans that toggle a bundled example ",e.jsx(o.code,{children:"<Tabs>"})," row and icon button on/off. Both are Storybook conveniences; the real ",e.jsx(o.code,{children:"<Header>"})," props are ",e.jsx(o.code,{children:"subNav"}),"/",e.jsx(o.code,{children:"actions: ReactNode"}),", documented below."]}),`
`,e.jsx(o.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"The top of a page or a drawer/panel, to name what you're looking at and (optionally) switch between its sub-sections."}),`
`]}),`
`,e.jsx(o.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["For the app-wide sidebar — use ",e.jsx(o.code,{children:"<Navigation>"}),". Header is what sits at the top of the content ",e.jsx(o.code,{children:"<Navigation>"})," doesn't cover, not a replacement for it."]}),`
`]}),`
`,e.jsx(o.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import { Header, AppIcon, Tabs, TabList, Tab } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<Header
  icon={<AppIcon app="tasks" />}
  title="Accruals"
  onClose={() => {}}
  subNav={
    <Tabs defaultValue="overview">
      <TabList>
        <Tab value="overview">Overview</Tab>
        <Tab value="entries">Entries</Tab>
      </TabList>
    </Tabs>
  }
/>
`})}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"subNav"})," needs a ",e.jsx(o.code,{children:"<Tabs>"})," ancestor of its own — ",e.jsx(o.code,{children:"<TabList>"}),"/",e.jsx(o.code,{children:"<Tab>"})," read their selection state from it, same as anywhere else in this library."]}),`
`,e.jsx(o.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:'variant="app"'})," (default) is the larger page-level header, with an icon slot and a trailing close button next to the title. ",e.jsx(o.code,{children:'variant="modal"'})," is the compact version for ",e.jsx(o.code,{children:"<Modal>"}),", a drawer, or any side panel — reusable across all of them: no icon, a smaller title, and the close button moves to the ",e.jsx(o.em,{children:"leading"}),` edge (before the title) — this exact placement swap is what Figma's own two sizes do, not an approximation. Renamed from Figma's own "Drawer" label once `,e.jsx(o.code,{children:"<Modal>"})," started using this same variant for its header slot regardless of whether ",e.jsx(o.code,{children:"<Modal>"}),' itself is a centered dialog or an actual drawer — "modal" describes the shared use case better than "drawer" does.']}),`
`,e.jsxs(o.p,{children:["One component with a ",e.jsx(o.code,{children:"variant"})," prop, not two separate components — this matches how Figma itself models Header (one component set, a ",e.jsx(o.code,{children:"Size"})," variant) and how every other multi-variant piece of this library works (",e.jsx(o.code,{children:"Button"}),"'s ",e.jsx(o.code,{children:"variant"}),", ",e.jsx(o.code,{children:"Avatar"}),"'s ",e.jsx(o.code,{children:"type"}),", ",e.jsx(o.code,{children:"Tabs"}),"' ",e.jsx(o.code,{children:"orientation"}),"). Named ",e.jsx(o.code,{children:"variant"})," rather than ",e.jsx(o.code,{children:"size"}),`, since "app" and "modal" aren't bigger/smaller versions of the same layout — they have different slots entirely. More variants are expected to land here over time as new Header treatments come out of Figma, the same way `,e.jsx(o.code,{children:"Button"})," accumulated variants rather than spawning new components per one."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`<Header variant="modal" title="Edit accrual" onClose={() => setOpen(false)} />
`})}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(o.h2,{id:"sub-nav-actions",children:"Sub-nav actions"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"actions"})," is trailing content in the sub-nav row, next to ",e.jsx(o.code,{children:"subNav"}),". For ",e.jsx(o.code,{children:'variant="app"'}),` it sits inline (Figma's example: a small icon button, e.g. a "view history" action); for `,e.jsx(o.code,{children:'variant="modal"'})," it stretches full-width instead (Figma's example: room for a search box or button group) — same prop, different layout per variant."]}),`
`,e.jsx(o.h2,{id:"without-sub-nav",children:"Without sub-nav"}),`
`,e.jsxs(o.p,{children:["Both ",e.jsx(o.code,{children:"subNav"})," and ",e.jsx(o.code,{children:"actions"})," are optional — the sub-nav row doesn't render at all if you pass neither."]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(o.h2,{id:"closing-a-drawer",children:"Closing a drawer"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"onClose"})," is just a callback — ",e.jsx(o.code,{children:"<Header>"})," doesn't hold any open/closed state itself. Whatever renders the drawer owns that state and decides what happens when it changes, same as ",e.jsx(o.code,{children:"<DropdownMenu>"}),"'s ",e.jsx(o.code,{children:"open"}),"/",e.jsx(o.code,{children:"onOpenChange"}),". Click the ",e.jsx(o.strong,{children:"×"})," below — it's a real, live component, not a screenshot."]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(o.h2,{id:"a-note-on-figma-fidelity",children:"A note on Figma fidelity"}),`
`,e.jsxs(o.p,{children:["Figma's own Code Connect export for this component reuses a single ambiguous ",e.jsx(o.code,{children:"actions"})," prop name for what are visibly two different, differently-positioned slots (a trailing close ",e.jsx(o.strong,{children:"×"})," in one composed example, an unrelated small icon in another) depending on variant and row. Rather than copy that ambiguity, ",e.jsx(o.code,{children:"<Header>"})," splits it into explicit, purpose-named props — ",e.jsx(o.code,{children:"onClose"})," for the well-defined close affordance (rendered in the position Figma actually shows it in per variant), ",e.jsx(o.code,{children:"titleActions"}),"/",e.jsx(o.code,{children:"actions"})," for the remaining, more open-ended slots."]}),`
`,e.jsx(o.h2,{id:"colors",children:"Colors"}),`
`,e.jsxs(o.p,{children:["The bottom border uses ",e.jsx(o.code,{children:"--border-disabled"})," — confirmed directly from Figma's Form and Modal components, which use this exact divider style for their own header/footer borders (an earlier pass here had guessed ",e.jsx(o.code,{children:"--border-subtle"})," before those were built and gave a real value to check against)."]}),`
`,e.jsx(o.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["The close button has ",e.jsx(o.code,{children:'aria-label="Close"'})," — no visible text of its own."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"title"})," renders as plain text content (a ",e.jsx(o.code,{children:"<p>"}),", matching ",e.jsx(o.code,{children:"<Banner>"}),"'s own title), not an ",e.jsx(o.code,{children:"<h1>"}),"/",e.jsx(o.code,{children:"<h2>"})," — Header doesn't assume where it sits in your page's heading structure. Wrap it yourself (",e.jsx(o.code,{children:"title={<h1>Accruals</h1>}"}),") if you want a real heading tag there."]}),`
`]}),`
`,e.jsx(o.h2,{id:"props",children:"Props"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"variant"}),", ",e.jsx(o.code,{children:"icon"}),", ",e.jsx(o.code,{children:"title"})," (required), ",e.jsx(o.code,{children:"onClose"}),", ",e.jsx(o.code,{children:"titleActions"}),", ",e.jsx(o.code,{children:"subNav"}),", ",e.jsx(o.code,{children:"actions"}),", ",e.jsx(o.code,{children:"className"}),". See the sections above for exactly how each behaves per ",e.jsx(o.code,{children:"variant"}),"."]})]})}function Ne(n={}){const{wrapper:o}={...r(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t(n)}export{Ne as default};
