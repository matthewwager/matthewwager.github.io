import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as t}from"./index-DUy19JZU.js";import{c as s,C as i}from"./index-R-0gtsrS.js";import{M as a,D as d,E as c,W as l}from"./MobileNav.stories-BYJ19BwV.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";import"./square-check-big-D0--LuaP.js";import"./credit-card-eje3g-yY.js";import"./lightbulb-CPIyNY1X.js";import"./receipt-STmIF1Op.js";import"./activity-DoVuY_Pe.js";import"./chart-column-CZtiMpn9.js";import"./message-circle-IvCFfBmD.js";import"./mail-WW_jGw0C.js";import"./workflow-DuG2DCt7.js";function r(o){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:a}),`
`,e.jsx(n.h1,{id:"mobilenav",children:"MobileNav"}),`
`,e.jsxs(n.p,{children:["The mobile counterpart to ",e.jsx(n.code,{children:"<Navigation>"})," — matches Figma's MobileNav exactly: a persistent compact top bar that expands into a full nav panel. Expanded, it's nearly identical to ",e.jsx(n.code,{children:"<Navigation>"})," itself — same background/shadow, same ",e.jsx(n.code,{children:"<NavSection>"}),"/",e.jsx(n.code,{children:"<NavItem>"}),"/",e.jsx(n.code,{children:"<NavUser>"})," components, same account ",e.jsx(n.code,{children:"<DropdownMenu>"}),". The one real difference is the head's collapse arrow becomes an ",e.jsx(n.strong,{children:"×"})," — a full close, not a shrink-to-icon-rail, since a mobile drawer has no collapsed-but-still-visible state to shrink into."]}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(n.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The mobile/narrow-viewport counterpart to ",e.jsx(n.code,{children:"<Navigation>"}),", in a responsive layout that swaps between a sidebar and a top bar + drawer depending on screen size."]}),`
`]}),`
`,e.jsx(n.h2,{id:"one-nav-definition-two-components",children:"One nav definition, two components"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"children"})," takes the ",e.jsx(n.em,{children:"exact same"})," ",e.jsx(n.code,{children:"<NavSection>"}),"/",e.jsx(n.code,{children:"<NavItem>"}),"/",e.jsx(n.code,{children:"<NavUser>"})," tree you'd pass to ",e.jsx(n.code,{children:"<Navigation>"})," — not an approximation of it, the identical elements:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { MobileNav, NavItem, NavSection, NavUser, DropdownMenuItem } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<MobileNav name="Matthew Wager" accountMenu={<>
  <DropdownMenuItem>Profile</DropdownMenuItem>
  <DropdownMenuItem>Sign out</DropdownMenuItem>
</>}>
  <NavSection grow>
    <NavItem icon={<SquareCheckBig size={24} />} href="#tasks">Tasks</NavItem>
    <NavItem icon={<Receipt size={24} />} href="#accruals" selected>Accruals</NavItem>
  </NavSection>
  <NavSection>
    <NavUser name="Matthew Wager">
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Sign out</DropdownMenuItem>
    </NavUser>
    <NavItem icon={<Settings size={24} />}>Settings</NavItem>
  </NavSection>
</MobileNav>
`})}),`
`,e.jsxs(n.p,{children:["This works because MobileNav's expanded panel provides the same ",e.jsx(n.code,{children:"expanded: true"})," context ",e.jsx(n.code,{children:"<Navigation>"})," does — ",e.jsx(n.code,{children:"<NavItem>"}),"/",e.jsx(n.code,{children:"<NavSection>"}),"/",e.jsx(n.code,{children:"<NavUser>"})," don't know or care which one they're rendered inside. None of their CSS is duplicated here either; it's ",e.jsx(n.code,{children:"<Navigation>"}),"'s own ",e.jsx(n.code,{children:".ds-nav-item"}),"/",e.jsx(n.code,{children:".ds-nav-user"})," styles, reused directly."]}),`
`,e.jsx(n.h2,{id:"the-account-dropdown",children:"The account dropdown"}),`
`,e.jsxs(n.p,{children:["Tapping the chevron in ",e.jsx(n.code,{children:"<NavUser>"})," opens a real ",e.jsx(n.code,{children:"<DropdownMenu>"})," — exactly as it does on desktop, not an inline disclosure. The collapsed bar's own avatar opens the same menu content, via a separate ",e.jsx(n.code,{children:"accountMenu"})," prop: the bar can't reach into ",e.jsx(n.code,{children:"children"})," to reuse the ",e.jsx(n.code,{children:"<NavUser>"})," instance buried inside it, so this is typically the same ",e.jsx(n.code,{children:"<DropdownMenuItem>"}),"s repeated in both places."]}),`
`,e.jsx(i,{of:c}),`
`,e.jsxs(n.p,{children:["Omit ",e.jsx(n.code,{children:"accountMenu"})," for a plain, non-interactive avatar in the collapsed bar (the account section inside ",e.jsx(n.code,{children:"children"})," still works normally, if you include one):"]}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(n.h2,{id:"closing",children:"Closing"}),`
`,e.jsxs(n.p,{children:["Four ways, deliberately overlapping with how ",e.jsx(n.code,{children:"<Navigation>"}),"'s own collapsed rail expands and how a mobile drawer is expected to behave:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.strong,{children:"×"})," button."]}),`
`,e.jsxs(n.li,{children:["Tapping the wordmark — mirroring how tapping the logomark is also how ",e.jsx(n.code,{children:"<Navigation>"}),"'s collapsed rail re-expands itself."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Escape"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Picking any real nav destination"})," — a ",e.jsx(n.code,{children:"<NavItem>"})," link, a sub-item, a ",e.jsx(n.code,{children:"<DropdownMenuItem>"})," in the account menu. This isn't wired per-item; a single delegated click handler on the panel closes it whenever the clicked element is a real ",e.jsx(n.code,{children:"<a>"}),"/",e.jsx(n.code,{children:"<button>"})," ",e.jsx(n.em,{children:"without"})," ",e.jsx(n.code,{children:"aria-expanded"})," — which is exactly what excludes the two things that shouldn't close it (",e.jsx(n.code,{children:"<NavItem>"}),"'s own sub-menu toggle, and ",e.jsx(n.code,{children:"<NavUser>"}),"'s dropdown trigger) while still catching every actual destination."]}),`
`]}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Portaled"})," to ",e.jsx(n.code,{children:"document.body"})," and ",e.jsx(n.code,{children:"position: fixed"}),", so the expanded panel always covers the full viewport regardless of where ",e.jsx(n.code,{children:"<MobileNav>"})," is mounted — the same reasoning ",e.jsx(n.code,{children:"<Modal>"})," portals for."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Background scroll locks"})," while the panel is open, and unlocks when it closes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Focus moves into the panel"})," on open and ",e.jsx(n.strong,{children:"is trapped there"})," (Tab/Shift+Tab cycle within it) until it closes, returning focus to whatever opened it afterward."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Transition"})," mirrors ",e.jsx(n.code,{children:"<Navigation>"}),"'s own collapse/expand animation: a single dimension (there, rail ",e.jsx(n.code,{children:"width"}),"; here, panel ",e.jsx(n.code,{children:"height"}),") animating with the same duration/easing tokens, growing from the collapsed edge — a sidebar grows wider from its collapsed rail, this panel grows downward from the bar."]}),`
`]}),`
`,e.jsx(n.h2,{id:"controlled-vs-uncontrolled",children:"Controlled vs. uncontrolled"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"defaultExpanded"})," (default ",e.jsx(n.code,{children:"false"}),") for an uncontrolled MobileNav that manages its own open state. Pass ",e.jsx(n.code,{children:"expanded"}),"/",e.jsx(n.code,{children:"onExpandedChange"})," together if something else needs to know or control whether it's open."]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The panel is ",e.jsx(n.code,{children:'role="dialog"'})," with ",e.jsx(n.code,{children:'aria-modal="true"'})," and ",e.jsx(n.code,{children:'aria-label="Navigation"'}),"."]}),`
`,e.jsxs(n.li,{children:["The logomark button, wordmark button, close button, and account-menu avatar all have real ",e.jsx(n.code,{children:"aria-label"}),"s, since none has visible text of its own to announce otherwise."]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"children"})," (required), ",e.jsx(n.code,{children:"name"})," (required), ",e.jsx(n.code,{children:"avatarSrc"}),", ",e.jsx(n.code,{children:"initials"}),", ",e.jsx(n.code,{children:"accountMenu"}),", ",e.jsx(n.code,{children:"onNotificationsClick"}),", ",e.jsx(n.code,{children:"expanded"}),", ",e.jsx(n.code,{children:"defaultExpanded"})," (default ",e.jsx(n.code,{children:"false"}),"), ",e.jsx(n.code,{children:"onExpandedChange"}),", ",e.jsx(n.code,{children:"className"}),"."]})]})}function Ee(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{Ee as default};
