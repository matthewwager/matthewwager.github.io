import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as r}from"./index-DUy19JZU.js";import{c as a,P as s,b as c,C as n}from"./index-R-0gtsrS.js";import{M as l,D as d,W as h,O as p,I as m}from"./MobileAppHeader.stories-DZ5ty_V2.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function o(i){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:l}),`
`,e.jsx(t.h1,{id:"mobileappheader",children:"MobileAppHeader"}),`
`,e.jsx(t.p,{children:"A mobile page header: a branded app icon + title, a row of tabs for switching between that page's sub-views, and an optional trailing action — matches Figma's MobileAppHeader exactly."}),`
`,e.jsx(s,{}),`
`,e.jsx(c,{}),`
`,e.jsx(t.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["The header for a single page/app section in a mobile layout — below ",e.jsx(t.code,{children:"<MobileNav>"}),`'s own top bar, at the top of that page's actual content — when that page has its own set of sub-views to switch between (Figma's example: an "Accruals" page with Recurring/One-time/Templates/Archived).`]}),`
`]}),`
`,e.jsx(t.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { MobileAppHeader, Tab } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

const [tab, setTab] = useState("recurring");

<MobileAppHeader icon="accruals" title="Accruals" value={tab} onValueChange={setTab}>
  <Tab value="recurring">Recurring</Tab>
  <Tab value="one-time">One-time</Tab>
  <Tab value="templates">Templates</Tab>
  <Tab value="archived">Archived</Tab>
</MobileAppHeader>
`})}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(t.h2,{id:"nothing-here-is-reimplemented",children:"Nothing here is reimplemented"}),`
`,e.jsxs(t.p,{children:["The icon is a real ",e.jsx(t.code,{children:'<AppIcon size="sm">'})," — this header's own confirmed Figma instance is exactly ",e.jsx(t.code,{children:"<AppIcon>"}),`'s "sm" size (a 24px tile, 4px radius), not a separate one-off scaled down from its default.`]}),`
`,e.jsxs(t.p,{children:["The tabs are the real ",e.jsx(t.code,{children:"<Tabs>"}),"/",e.jsx(t.code,{children:"<TabList>"}),"/",e.jsx(t.code,{children:"<Tab>"})," components — ",e.jsx(t.code,{children:"children"})," takes ",e.jsx(t.code,{children:"<Tab>"}),"s directly, same as anywhere else ",e.jsx(t.code,{children:"<Tabs>"})," is used. Confirmed color-for-color identical to their existing styling (unselected ",e.jsx(t.code,{children:"content-brand-primary"}),", selected ",e.jsx(t.code,{children:"content-base"}),", the sliding ",e.jsx(t.code,{children:"border-brand"})," indicator) — nothing about tab appearance is overridden here."]}),`
`,e.jsxs(t.p,{children:["There's deliberately no paired ",e.jsx(t.code,{children:"<TabPanel>"})," inside this component: the sub-page content these tabs switch between lives in the page below the header, not inside it. Read ",e.jsx(t.code,{children:"value"}),"/",e.jsx(t.code,{children:"onValueChange"})," the same way you would with a standalone ",e.jsx(t.code,{children:"<Tabs>"}),", and render that content yourself alongside ",e.jsx(t.code,{children:"<MobileAppHeader>"}),":"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<MobileAppHeader icon="accruals" title="Accruals" value={tab} onValueChange={setTab}>
  <Tab value="recurring">Recurring</Tab>
  <Tab value="one-time">One-time</Tab>
</MobileAppHeader>

{tab === "recurring" && <RecurringAccrualsList />}
{tab === "one-time" && <OneTimeAccrualsList />}
`})}),`
`,e.jsx(t.h2,{id:"actions",children:"Actions"}),`
`,e.jsx(t.p,{children:"An optional trailing slot — Figma's own example reserves this space but hides it (nothing to show in that particular instance), so it's optional here too:"}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(t.h2,{id:"overflow",children:"Overflow"}),`
`,e.jsxs(t.p,{children:["Real phone screens can easily have more tabs than fit — the title and the tab row scroll horizontally together, as one strip, rather than wrapping or overflowing the header. Confirmed from Figma: the icon is the only thing that stays fixed, not just the tabs. A separator line between the title and the tabs rides along with that same scroll at first, but it's ",e.jsx(t.code,{children:"position: sticky"})," — once it reaches the scroll container's own edge (a fixed 8px right of the icon), it anchors there instead of continuing, while the title (ahead of it) keeps scrolling out of view and the tabs (behind it) keep sliding past that same anchored point. A soft edge fade (real scroll position toggling it, not a static overlay) hints there's more to scroll to in whichever direction actually has more."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(t.h2,{id:"tapping-the-icon",children:"Tapping the icon"}),`
`,e.jsxs(t.p,{children:["The icon is a real button: tapping it scrolls the title/tabs strip back to the start (an actual animated ",e.jsx(t.code,{children:"scrollTo"}),", since there's no single CSS property to transition when what's moving is scroll position) and selects the first ",e.jsx(t.code,{children:"<Tab>"})," by DOM order. ",e.jsx(t.code,{children:"MobileAppHeader"})," tracks the selected value itself for this (the same controlled/uncontrolled duality ",e.jsx(t.code,{children:"<Tabs>"})," has on its own) rather than leaving that state inside the nested ",e.jsx(t.code,{children:"<Tabs>"})," where it couldn't reach it. Pass ",e.jsx(t.code,{children:"onIconClick"})," too for anything else that tap should also trigger, or if the tab you actually want selected isn't the first one."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(t.h2,{id:"props",children:"Props"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"icon"})," (required — any ",e.jsx(t.code,{children:"AppIconName"}),"), ",e.jsx(t.code,{children:"title"})," (required), ",e.jsx(t.code,{children:"children"})," (required — ",e.jsx(t.code,{children:"<Tab>"}),"s), ",e.jsx(t.code,{children:"value"}),", ",e.jsx(t.code,{children:"defaultValue"}),", ",e.jsx(t.code,{children:"onValueChange"}),", ",e.jsx(t.code,{children:"onIconClick"}),", ",e.jsx(t.code,{children:"actions"}),", ",e.jsx(t.code,{children:"className"}),"."]})]})}function Me(i={}){const{wrapper:t}={...r(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(o,{...i})}):o(i)}export{Me as default};
