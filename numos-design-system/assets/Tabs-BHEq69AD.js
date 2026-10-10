import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as o}from"./index-DUy19JZU.js";import{c as s,C as t}from"./index-R-0gtsrS.js";import{T as r,D as l,V as d,b as c,W as h,a as p,N as b}from"./Tabs.stories-q3QjfYqW.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";import"./user-CssntHaa.js";function a(i){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:r}),`
`,e.jsx(n.h1,{id:"tabs",children:"Tabs"}),`
`,e.jsx(n.p,{children:"Tabbed interfaces are a way of navigating between multiple panels, reducing clutter and fitting more into a smaller space."}),`
`,e.jsx(n.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Splitting related content into sections someone switches between, without leaving the page (settings, a profile, a record's detail view)."}),`
`]}),`
`,e.jsx(n.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["For a small, fixed sequence someone moves through in order — use ",e.jsx(n.code,{children:"<Stepper>"}),"."]}),`
`,e.jsxs(n.li,{children:["For primary app-level navigation between different pages — use ",e.jsx(n.code,{children:"<Navigation>"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsxs(n.p,{children:["This is a compound component, mirroring ",e.jsx(n.code,{children:"<DropdownMenu>"}),"'s shape: ",e.jsx(n.code,{children:"<Tabs>"})," (root, owns the selected value) wraps a ",e.jsx(n.code,{children:"<TabList>"})," (the row/column of triggers) and one ",e.jsx(n.code,{children:"<TabPanel>"})," per ",e.jsx(n.code,{children:"<Tab>"}),", matched by ",e.jsx(n.code,{children:"value"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Tabs, TabList, Tab, TabPanel } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<Tabs defaultValue="overview">
  <TabList>
    <Tab value="overview">Overview</Tab>
    <Tab value="activity">Activity</Tab>
    <Tab value="settings">Settings</Tab>
  </TabList>
  <TabPanel value="overview">A summary of what's happened recently.</TabPanel>
  <TabPanel value="activity">A chronological feed of every change.</TabPanel>
  <TabPanel value="settings">Preferences for this workspace.</TabPanel>
</Tabs>
`})}),`
`,e.jsx(n.p,{children:"Click a tab below — it's a real, live component, not a screenshot."}),`
`,e.jsx(t,{of:l}),`
`,e.jsxs(n.p,{children:["There's no selection at all until you set ",e.jsx(n.code,{children:"defaultValue"})," (uncontrolled) or ",e.jsx(n.code,{children:"value"})," (controlled) — Tabs doesn't auto-select the first tab for you."]}),`
`,e.jsx(n.h3,{id:"controlled-selection",children:"Controlled selection"}),`
`,e.jsxs(n.p,{children:["For cases where something else needs to change the active tab (e.g. a URL param), skip ",e.jsx(n.code,{children:"defaultValue"})," and control it directly:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [tab, setTab] = useState("overview");

<Tabs value={tab} onValueChange={setTab}>
  ...
</Tabs>
`})}),`
`,e.jsx(n.h2,{id:"orientation",children:"Orientation"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:'orientation="vertical"'}),` matches Figma's "Stacked" variant — a column of tabs, each with a left-edge indicator instead of a bottom one, typically paired with its panel beside it rather than below it.`]}),`
`,e.jsx(t,{of:d}),`
`,e.jsxs(n.h3,{id:"right-aligned-alignend",children:["Right-aligned (",e.jsx(n.code,{children:'align="end"'}),")"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:'<TabList align="end">'})," — only meaningful alongside ",e.jsx(n.code,{children:'orientation="vertical"'})," — right-aligns the labels and moves the selected indicator to the right edge, for a category list that sits to the ",e.jsx(n.em,{children:"left"}),` of the panel it describes and points inward at it (a Settings page's own category list beside its detail pane is exactly this shape). It also stretches the list to fill its own container's width, which "end" needs to have a real edge to align against.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Tabs orientation="vertical" value={category} onValueChange={setCategory}>
  <TabList align="end">
    <Tab value="general">General</Tab>
    <Tab value="notifications">Notifications</Tab>
  </TabList>
</Tabs>
`})}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(n.h2,{id:"icons-and-badges",children:"Icons and badges"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"<Tab>"})," takes the same ",e.jsx(n.code,{children:"leadingIcon"}),"/",e.jsx(n.code,{children:"trailingIcon"})," props as ",e.jsx(n.code,{children:"<DropdownMenuItem>"}),", plus ",e.jsx(n.code,{children:"badge"}),` for a count pill (Figma's optional "Badge" — e.g. an unread count):`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Tab value="inbox" badge={12}>Inbox</Tab>
`})}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(n.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsx(n.p,{children:`Not part of Figma's Tab component set — no "Disabled" state is defined there — but added since it's a common real need. A disabled tab is skipped by arrow-key navigation and can't be clicked or selected.`}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Selecting a tab"}),": click, or Enter/Space while it's focused (both are free from ",e.jsx(n.code,{children:"<Tab>"})," being a real ",e.jsx(n.code,{children:"<button>"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Keyboard navigation"}),": Arrow Right/Left (horizontal) or Arrow Down/Up (vertical) move focus between tabs ",e.jsx(n.em,{children:"and"}),' select the newly focused one — the "automatic activation" pattern, matching how most real tab strips behave. Home/End jump to the first/last tab. Only the selected tab is in the natural Tab-key order (roving ',e.jsx(n.code,{children:"tabindex"}),"), same as arrow-key list navigation elsewhere in this library."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Panels"}),": a ",e.jsx(n.code,{children:"<TabPanel>"})," unmounts (not just visually hides) while its tab isn't selected."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Selected indicator"}),": a single bar owned by ",e.jsx(n.code,{children:"<TabList>"}),", measured off the selected ",e.jsx(n.code,{children:"<Tab>"}),"'s own box and repositioned via CSS transition — it slides from the previously selected tab to the newly selected one, and fades in on first selection, rather than teleporting. Also re-measures on window resize, so it doesn't end up pointing at stale coordinates if the list reflows."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Layout stability"}),": horizontal tabs reserve their hover indicator's 2px border space (transparent, or ",e.jsx(n.code,{children:"background-brand-subdued"})," on hover) even when unselected — Figma's separate per-state frames don't need to worry about this, but a live component does: without it, hovering a tab would shift every tab after it by 2px. The ",e.jsx(n.em,{children:"selected"})," indicator doesn't need this — it's the overlay described above, not a per-tab border, so it never affects tab layout."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Overflow"}),": a horizontal ",e.jsx(n.code,{children:"<TabList>"})," scrolls once its tabs stop fitting, rather than shrinking labels down to a wrapped or ellipsized mess — every ",e.jsx(n.code,{children:"<Tab>"})," keeps its own natural, fully-readable width (",e.jsx(n.code,{children:"flex-shrink: 0"}),'), and the list itself is what gives, scrolling via wheel/trackpad/drag/keyboard with the scrollbar itself hidden. Confirmed the wrong call to let it wrap: a handful of short labels squeezed onto two lines on a narrow viewport reads as broken, not "responsive."']}),`
`]}),`
`,e.jsx(t,{of:b}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Follows the WAI-ARIA Tabs pattern: ",e.jsx(n.code,{children:"<TabList>"})," is ",e.jsx(n.code,{children:'role="tablist"'})," with ",e.jsx(n.code,{children:"aria-orientation"}),"; each ",e.jsx(n.code,{children:"<Tab>"})," is ",e.jsx(n.code,{children:'role="tab"'})," with ",e.jsx(n.code,{children:"aria-selected"})," and ",e.jsx(n.code,{children:"aria-controls"})," pointing at its panel; each ",e.jsx(n.code,{children:"<TabPanel>"})," is ",e.jsx(n.code,{children:'role="tabpanel"'})," with ",e.jsx(n.code,{children:"aria-labelledby"})," pointing back at its tab."]}),`
`,e.jsxs(n.li,{children:["Panels are focusable (",e.jsx(n.code,{children:"tabIndex={0}"}),") so keyboard users can move from the tab straight into its content."]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"<Tabs>"}),": ",e.jsx(n.code,{children:"orientation"}),", ",e.jsx(n.code,{children:"value"}),", ",e.jsx(n.code,{children:"defaultValue"}),", ",e.jsx(n.code,{children:"onValueChange"}),", ",e.jsx(n.code,{children:"className"}),`.
`,e.jsx(n.code,{children:"<TabList>"}),": ",e.jsx(n.code,{children:"align"}),' ("start", the default, or "end" — only meaningful for ',e.jsx(n.code,{children:'orientation="vertical"'}),"), plus any ",e.jsx(n.code,{children:"<div>"})," prop (it's a thin wrapper — ",e.jsx(n.code,{children:"role"}),"/",e.jsx(n.code,{children:"aria-orientation"}),`/keyboard handling are automatic).
`,e.jsx(n.code,{children:"<Tab>"}),": ",e.jsx(n.code,{children:"value"})," (required), ",e.jsx(n.code,{children:"leadingIcon"}),", ",e.jsx(n.code,{children:"trailingIcon"}),", ",e.jsx(n.code,{children:"badge"}),", ",e.jsx(n.code,{children:"disabled"}),", plus any native ",e.jsx(n.code,{children:"<button>"}),` prop.
`,e.jsx(n.code,{children:"<TabPanel>"}),": ",e.jsx(n.code,{children:"value"})," (required), plus any native ",e.jsx(n.code,{children:"<div>"})," prop."]})]})}function Pe(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(a,{...i})}):a(i)}export{Pe as default};
