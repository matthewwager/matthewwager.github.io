import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as a}from"./index-DUy19JZU.js";import{c as r,P as d,b as c,C as o}from"./index-R-0gtsrS.js";import{N as l,D as h,C as t,a as p,W as m}from"./Navigation.stories-CK6TZ8a2.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";import"./square-check-big-D0--LuaP.js";import"./credit-card-eje3g-yY.js";import"./receipt-STmIF1Op.js";import"./lightbulb-CPIyNY1X.js";import"./activity-DoVuY_Pe.js";import"./chart-column-CZtiMpn9.js";import"./message-circle-IvCFfBmD.js";import"./mail-WW_jGw0C.js";import"./workflow-DuG2DCt7.js";function s(i){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(n.h1,{id:"navigation",children:"Navigation"}),`
`,e.jsxs(n.p,{children:["A container for navigation links; these can be to other pages (e.g. main site navigation) or to elements within the current page (e.g. a table of contents). Built almost entirely from other components in this library: ",e.jsx(n.code,{children:"<Avatar>"}),", ",e.jsx(n.code,{children:"<Tooltip>"}),", and ",e.jsx(n.code,{children:"<DropdownMenu>"}),"."]}),`
`,e.jsx(d,{}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The primary way to move between a product's top-level sections — this is a persistent sidebar, not a one-off menu."}),`
`]}),`
`,e.jsx(n.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["For breadcrumbs or a table of contents within a page — use ",e.jsx(n.code,{children:"<Breadcrumbs>"}),"."]}),`
`,e.jsxs(n.li,{children:["For a short, temporary list of actions attached to a button — use ",e.jsx(n.code,{children:"<DropdownMenu>"})," directly."]}),`
`]}),`
`,e.jsx(n.h2,{id:"always-dark",children:"Always dark"}),`
`,e.jsxs(n.p,{children:["Unlike every other component in this library, Navigation doesn't follow the page's light/dark mode — it hardcodes ",e.jsx(n.code,{children:'data-theme="dark"'}),` on itself. Figma's Navigation component has no light-mode variant at all, so this isn't a "defaults to dark, can be made light" situation the way `,e.jsx(n.code,{children:"<Tooltip>"})," inverts relative to the current theme; it's simply always dark, with no ",e.jsx(n.code,{children:"variant"})," prop to change that."]}),`
`,e.jsx(n.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Navigation, NavSection, NavItem, NavUser, DropdownMenuItem } from "@numosai/ui";
import { SquareCheckBig, Receipt, Settings, LogOut } from "lucide-react";
import "@numosai/ui/styles.css"; // once, at your app entry

<Navigation>
  <NavSection grow>
    <NavItem icon={<SquareCheckBig size={24} />} href="/tasks">Tasks</NavItem>
    <NavItem icon={<Receipt size={24} />} href="/accruals" selected>Accruals</NavItem>
  </NavSection>
  <NavSection>
    <NavUser name="Matthew Wager">
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Sign out</DropdownMenuItem>
    </NavUser>
    <NavItem icon={<Settings size={24} />}>Settings</NavItem>
    <NavItem icon={<LogOut size={24} />}>Sign Out</NavItem>
  </NavSection>
</Navigation>
`})}),`
`,e.jsx(n.p,{children:"Collapse it with the arrow in the header below — it's a real, live component, not a screenshot."}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(n.h2,{id:"sections",children:"Sections"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"<NavSection grow>"})," is the main scrollable list (Figma's top group) — it fills remaining height and scrolls independently. A plain ",e.jsx(n.code,{children:"<NavSection>"})," (no ",e.jsx(n.code,{children:"grow"}),") stays pinned at its natural height, matching Figma's bottom group (",e.jsx(n.code,{children:"<NavUser>"})," plus account links). Most navs use exactly one of each, in that order."]}),`
`,e.jsx(n.h2,{id:"collapse",children:"Collapse"}),`
`,e.jsxs(n.p,{children:["Click the arrow-left button in the header to collapse Navigation to an icon-only rail; click the logomark (which takes its place) to expand it back — this exact swap is what Figma's own collapsed header does. The rail's width transitions (",e.jsx(n.code,{children:"--duration-base"}),"); labels themselves still mount/unmount instantly rather than fading, since animating them in sync with the width without leaving a stray gap around the icon turned out to be more fragile than it's worth. Collapsed, every ",e.jsx(n.code,{children:"<NavItem>"}),"'s label moves into a ",e.jsx(n.code,{children:'<Tooltip placement="right">'})," instead of disappearing, and ",e.jsx(n.code,{children:"<NavUser>"})," falls back to ",e.jsx(n.code,{children:"<Avatar>"}),"'s own built-in tooltip — both work correctly even for items inside the scrollable top section, since ",e.jsx(n.code,{children:"<Tooltip>"})," portals to ",e.jsx(n.code,{children:"document.body"})," rather than rendering inline (a scrollable ancestor would otherwise clip it)."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Navigation defaultExpanded={false}>...</Navigation>
`})}),`
`,e.jsx(o,{of:t}),`
`,e.jsxs(n.p,{children:['For cases where something else needs to control it (e.g. a layout-wide "collapse all panels" toggle), skip ',e.jsx(n.code,{children:"defaultExpanded"})," and control it directly with ",e.jsx(n.code,{children:"expanded"}),"/",e.jsx(n.code,{children:"onExpandedChange"})," — same pattern as ",e.jsx(n.code,{children:"<DropdownMenu>"}),"/",e.jsx(n.code,{children:"<Tabs>"}),"."]}),`
`,e.jsx(n.h2,{id:"expandable-groups",children:"Expandable groups"}),`
`,e.jsxs(n.p,{children:["Pass ",e.jsx(n.code,{children:"items"})," to a ",e.jsx(n.code,{children:"<NavItem>"}),` to turn it into a disclosure instead of a link — matching Figma's "Expanded" Nav Item state. Its sub-items visually match `,e.jsx(n.code,{children:"<Tab>"}),"'s vertical selected style (a left-border indicator via ",e.jsx(n.code,{children:"active"}),"), without actually being ",e.jsx(n.code,{children:"<Tab>"}),"s — ",e.jsx(n.code,{children:'role="tab"'})," would be the wrong semantics for a navigation link."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<NavItem
  icon={<Receipt size={24} />}
  items={[
    { label: "Recurring", href: "/accruals/recurring", active: true },
    { label: "One-time", href: "/accruals/one-time" },
  ]}
>
  Accruals
</NavItem>
`})}),`
`,e.jsx(o,{of:p}),`
`,e.jsxs(n.p,{children:["Only shown while Navigation is expanded — collapsed, there's no room for a flyout yet, so the item falls back to a plain icon + tooltip like any other ",e.jsx(n.code,{children:"<NavItem>"}),". That's a real gap, not a design choice: closing it means adding flyout/popover support, which doesn't exist yet."]}),`
`,e.jsx(n.h2,{id:"badges",children:"Badges"}),`
`,e.jsxs(n.p,{children:["Pass ",e.jsx(n.code,{children:"badge"})," to show a count/status indicator on a ",e.jsx(n.code,{children:"<NavItem>"})," — matches Figma's own updated Nav Item: a full ",e.jsx(n.code,{children:'<Badge size="lg">'})," after the label while expanded, or a plain ",e.jsx(n.code,{children:'size="sm"'})," dot in the icon's own corner while collapsed, rather than disappearing entirely. ",e.jsx(n.code,{children:"badgeStatus"})," sets its color (any ",e.jsx(n.code,{children:"BadgeStatus"}),"), defaulting to ",e.jsx(n.code,{children:'"negative"'})," to match Figma's own example — override it per item, since what a badge means varies (a days-until-due badge might step from ",e.jsx(n.code,{children:'"info"'})," to ",e.jsx(n.code,{children:'"notice"'})," to ",e.jsx(n.code,{children:'"negative"'})," as a deadline actually gets closer, not stay one fixed color):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<NavItem icon={<CalendarCheck size={24} />} badge="1d" badgeStatus="negative">
  Close
</NavItem>
`})}),`
`,e.jsx(o,{of:m}),`
`,e.jsxs(n.p,{children:["Collapse the sidebar above (or see ",e.jsx(n.code,{children:"Collapsed"}),") to check the dot form:"]}),`
`,e.jsx(o,{of:t}),`
`,e.jsx(n.h2,{id:"navuser-and-the-account-menu",children:"NavUser and the account menu"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"<NavUser>"})," doesn't hardcode what the chevron opens — you pass ",e.jsx(n.code,{children:"<DropdownMenuItem>"}),"s as children, same as ",e.jsx(n.code,{children:"<DropdownMenu>"})," anywhere else. Because the row sits at the ",e.jsx(n.em,{children:"bottom"})," of the sidebar, its menu opens upward: ",e.jsx(n.code,{children:'<DropdownMenuContent placement="top">'}),", a new prop added to ",e.jsx(n.code,{children:"<DropdownMenu>"})," alongside this component (previously it only ever opened downward, which would've pushed the account menu off-screen here). See ",e.jsx(n.code,{children:"<DropdownMenu>"}),"'s own docs for the full placement/keyboard/accessibility behavior."]}),`
`,e.jsx(n.h2,{id:"colors",children:"Colors"}),`
`,e.jsxs(n.p,{children:["Two color decisions here don't trace back to a confirmed value in Figma's Foundations semantic doc table, and are called out in ",e.jsx(n.code,{children:"Navigation.css"})," where they're used:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default (unselected) item text/icon"})," uses ",e.jsx(n.code,{children:"Brand/400"})," directly — the live Figma instance is bound to that, not the dark-mode value of the generic ",e.jsx(n.code,{children:"--content-brand-primary"})," token (",e.jsx(n.code,{children:"Brand/200"}),`). Likely an intentional per-instance contrast tweak against this specific dark background rather than a token error, so it's used as-is rather than "corrected" to match the token.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Hover background"})," uses ",e.jsx(n.code,{children:"--background-hover"}),`. Figma's standalone "Hover" Nav Item symbol was authored against a light background (it resolves to plain `,e.jsx(n.code,{children:"--background-default"}),", which would be invisible on Navigation's dark surface) — there's no composed example showing hover inside the actual dark sidebar to confirm against, so this is an inferred stand-in."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Everything else (",e.jsx(n.code,{children:"--background-brand-subdued"})," selected fill, ",e.jsx(n.code,{children:"--content-emphasis"})," selected text, ",e.jsx(n.code,{children:"--border-brand"})," sub-item indicator) matched Figma's live dark-mode values exactly."]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Collapsed items keep their accessible name via ",e.jsx(n.code,{children:"<Tooltip>"}),"'s ",e.jsx(n.code,{children:"aria-describedby"})," wiring — icon-only buttons/links aren't unlabeled."]}),`
`,e.jsxs(n.li,{children:["Selected ",e.jsx(n.code,{children:"<NavItem>"}),"s get ",e.jsx(n.code,{children:'aria-current="page"'}),"."]}),`
`,e.jsxs(n.li,{children:["Expandable groups get ",e.jsx(n.code,{children:"aria-expanded"})," on their toggle button."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<NavUser>"}),"'s trigger inherits ",e.jsx(n.code,{children:"<DropdownMenuTrigger>"}),"'s ",e.jsx(n.code,{children:"aria-haspopup"}),"/",e.jsx(n.code,{children:"aria-expanded"})," wiring automatically."]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"<Navigation>"}),": ",e.jsx(n.code,{children:"expanded"}),", ",e.jsx(n.code,{children:"defaultExpanded"}),", ",e.jsx(n.code,{children:"onExpandedChange"}),", ",e.jsx(n.code,{children:"className"}),`.
`,e.jsx(n.code,{children:"<NavSection>"}),": ",e.jsx(n.code,{children:"grow"}),", plus any native ",e.jsx(n.code,{children:"<div>"}),` prop.
`,e.jsx(n.code,{children:"<NavItem>"}),": ",e.jsx(n.code,{children:"icon"})," (required), ",e.jsx(n.code,{children:"href"}),", ",e.jsx(n.code,{children:"selected"}),", ",e.jsx(n.code,{children:"disabled"}),", ",e.jsx(n.code,{children:"onClick"}),", ",e.jsx(n.code,{children:"items"}),", ",e.jsx(n.code,{children:"defaultOpen"}),", ",e.jsx(n.code,{children:"badge"}),", ",e.jsx(n.code,{children:"badgeStatus"})," (default ",e.jsx(n.code,{children:'"negative"'}),"), ",e.jsx(n.code,{children:"className"}),`.
`,e.jsx(n.code,{children:"<NavUser>"}),": ",e.jsx(n.code,{children:"name"})," (required), ",e.jsx(n.code,{children:"avatarSrc"}),", ",e.jsx(n.code,{children:"initials"}),", ",e.jsx(n.code,{children:"children"})," (the account menu's ",e.jsx(n.code,{children:"<DropdownMenuItem>"}),"s)."]})]})}function Ue(i={}){const{wrapper:n}={...a(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{Ue as default};
