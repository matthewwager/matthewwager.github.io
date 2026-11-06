import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as s}from"./index-DUy19JZU.js";import{d as a,C as n,a as l}from"./index-CKI-Cq_u.js";import{a as r,S as c,T as h,M as d}from"./Toolbar.stories-CDytJoaE.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-GuuHnXBw.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramCell-D0CGHh4Q.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";import"./circle-plus-BIyj2I_j.js";import"./settings-2-x8J_n0Zq.js";import"./table-DpGfGRcu.js";import"./layout-grid-LHnh2PTj.js";function i(o){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
`,e.jsx(t.h1,{id:"toolbar",children:"Toolbar"}),`
`,e.jsx(t.p,{children:"A row of controls that sits on top of the content it acts on: a table, a list, a grid of cards. Matches Figma's Toolbar, read left to right:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsxs(t.strong,{children:[e.jsx(t.code,{children:"selector"}),":"]})," what's displayed. A ",e.jsx(t.code,{children:"<Select>"})," (a month, an account) or a ",e.jsx(t.code,{children:"<TabList>"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsxs(t.strong,{children:[e.jsx(t.code,{children:"controls"}),":"]})," how it's displayed. A search, then a view ",e.jsx(t.code,{children:"<SegmentedControl>"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsxs(t.strong,{children:[e.jsx(t.code,{children:"actions"}),":"]})," what you can do with it. ",e.jsx(t.code,{children:"<Button>"}),"s, secondary before primary."]}),`
`]}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(t.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Above a table, list or grid, for what it shows, how it's shown and what you can add to it."}),`
`,e.jsx(t.li,{children:"At the top of a tab's content, for a selector that applies to everything on the tab."}),`
`]}),`
`,e.jsx(t.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["To name a page, modal or drawer — use ",e.jsx(t.code,{children:"<Header>"}),". A Header has an icon, a title and a close button, and there's one per surface. A Toolbar has no title; it belongs to the content under it, and a page can have several."]}),`
`,e.jsxs(t.li,{children:["For controls that belong to one card — use ",e.jsx(t.code,{children:"<CardHeader controls>"}),", which keeps them beside the card's title."]}),`
`,e.jsxs(t.li,{children:["For a form's submit and cancel buttons — use ",e.jsx(t.code,{children:"<ModalFooter>"})," or ",e.jsx(t.code,{children:"<FormFooter>"}),"."]}),`
`]}),`
`,e.jsx(t.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { Button, IconButton, SearchFilter, SegmentedControl, SegmentedControlOption, Select, Toolbar } from "@numosai/ui";

<Toolbar
  aria-label="Sources"
  selector={<Select options={months} value={month} onChange={setMonth} aria-label="Month" />}
  controls={
    <>
      <SearchFilter filters={<SourceFilters />} />
      <SegmentedControl value={view} onValueChange={setView}>
        <SegmentedControlOption value="table" leadingIcon={<Table size={16} />} aria-label="Table view" />
        <SegmentedControlOption value="grid" leadingIcon={<LayoutGrid size={16} />} aria-label="Grid view" />
      </SegmentedControl>
    </>
  }
  actions={
    <>
      <Button variant="secondary">Upload</Button>
      <Button variant="primary">Add Source</Button>
    </>
  }
  compactControls={
    <>
      <IconButton variant="ghost" icon={<Search size={20} />} aria-label="Search" />
      <IconButton variant="ghost" icon={<Funnel size={20} />} aria-label="Filter" />
      <IconButton variant="ghost" icon={<Settings2 size={20} />} aria-label="View settings" />
    </>
  }
  compactActions={<IconButton variant="primary" icon={<CirclePlus size={20} />} aria-label="Add Source" />}
/>
`})}),`
`,e.jsx(t.h2,{id:"search-or-search-and-filter",children:"Search or search-and-filter"}),`
`,e.jsx(t.p,{children:"The search control is one of two components, and the placeholder tells people which:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"<SearchInput>"})}),` for plain search: type to find. Give it a placeholder that says what's searched, e.g. "Search invoices".`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"<SearchFilter>"})})," with ",e.jsx(t.code,{children:"filters"}),` when there's a filter panel too: its placeholder defaults to "Search or filter", and the funnel button opens the panel.`]}),`
`]}),`
`,e.jsxs(t.p,{children:[`Don't use "Search or filter" without a filter panel behind it. A SearchFilter without `,e.jsx(t.code,{children:"filters"}),' defaults to "Search" for that reason.']}),`
`,e.jsx(t.p,{children:"In the compact toolbar, a search icon button stands for either one, and a filter icon button only belongs there when there's a filter panel."}),`
`,e.jsx(t.h2,{id:"one-size-for-everything-inside",children:"One size for everything inside"}),`
`,e.jsxs(t.p,{children:["Every control in a toolbar takes the toolbar's ",e.jsx(t.code,{children:"size"})," — ",e.jsx(t.code,{children:'"md"'})," (Figma's M) by default — unless it sets its own. Select, SearchInput, SearchFilter, SegmentedControl, Button and IconButton all read it, so there's no ",e.jsx(t.code,{children:"size"})," to repeat on each one, and they line up at the same height."]}),`
`,e.jsxs(t.p,{children:["Select, SearchInput and SearchFilter fill their container by default, as form fields. In a toolbar they hug a fixed width instead: 10rem for a Select and 16rem for either search. Change those with ",e.jsx(t.code,{children:"--ds-toolbar-select-width"})," and ",e.jsx(t.code,{children:"--ds-toolbar-search-width"})," on the toolbar."]}),`
`,e.jsx(t.h2,{id:"tabs-as-the-selector",children:"Tabs as the selector"}),`
`,e.jsxs(t.p,{children:["When what's displayed is a short, fixed set of views, a ",e.jsx(t.code,{children:"<TabList>"})," takes the Select's place."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(t.h2,{id:"narrow-widths",children:"Narrow widths"}),`
`,e.jsxs(t.p,{children:["Below 40rem of its own width — the space it's given, not the viewport — the toolbar swaps ",e.jsx(t.code,{children:"controls"})," for ",e.jsx(t.code,{children:"compactControls"})," and ",e.jsx(t.code,{children:"actions"})," for ",e.jsx(t.code,{children:"compactActions"}),": ghost icon buttons that open what the full controls show inline, and the primary action as one round icon button. Without them, the full controls and actions wrap onto their own row instead."]}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["With an ",e.jsx(t.code,{children:"aria-label"}),", the toolbar is a labelled ",e.jsx(t.code,{children:"group"}),", so screen readers announce what its controls act on. Give one whenever a page has more than one toolbar."]}),`
`,e.jsxs(t.li,{children:["It isn't ",e.jsx(t.code,{children:'role="toolbar"'}),": that role expects arrow keys to move between controls, which would fight a Select's and a SegmentedControl's own arrow keys. Tab moves through the controls in order."]}),`
`,e.jsxs(t.li,{children:["Every control needs its own accessible name: an ",e.jsx(t.code,{children:"aria-label"})," on a Select with no visible label, on each icon-only segment and on each icon button."]}),`
`,e.jsxs(t.li,{children:["Only one of the full and compact sets is shown at a time; the other is ",e.jsx(t.code,{children:"display: none"}),", so it's out of the tab order and the accessibility tree too."]}),`
`]}),`
`,e.jsx(t.h2,{id:"props",children:"Props"}),`
`,e.jsx(l,{of:r})]})}function Ie(o={}){const{wrapper:t}={...s(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(i,{...o})}):i(o)}export{Ie as default};
