import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as r}from"./index-DUy19JZU.js";import{c as o,P as l,b as a,C as n}from"./index-R-0gtsrS.js";import{S as d,D as h,P as c,b as p,g as u,F as m,e as x,f,E as j,d as g,a as y,c as w,W as b}from"./SearchFilter.stories-L335mD-r.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function s(i){const t={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
`,e.jsx(t.h1,{id:"searchfilter",children:"SearchFilter"}),`
`,e.jsxs(t.p,{children:["A search field with a filter button that opens a panel of arbitrary fields — matches Figma's Search/Filter input exactly. Built from the same pieces as everything else: ",e.jsx(t.code,{children:"<SearchInput>"}),"'s own field anatomy, ",e.jsx(t.code,{children:"<FieldLabel>"})," for the label, and ",e.jsx(t.code,{children:"<DropdownMenu>"})," + ",e.jsx(t.code,{children:"<DropdownMenuPanel>"}),' (the "any input components" variant of its content — see the DropdownMenu docs) for the filter panel itself.']}),`
`,e.jsx(l,{}),`
`,e.jsx(a,{}),`
`,e.jsx(t.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:`Search modeled on Gmail's own search bar: type freely, or open a structured filter builder that composes into the same field, rather than a separate "Advanced search" page.`}),`
`,e.jsx(t.li,{children:"When the set of filterable fields is genuinely arbitrary — a date range here, a status checklist there — not a fixed schema this component could know in advance."}),`
`]}),`
`,e.jsx(t.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["A fixed set of 1-3 filters always visible — plain ",e.jsx(t.code,{children:"<Select>"}),"/",e.jsx(t.code,{children:"<Checkbox>"})," controls next to the search field are simpler than hiding them behind a panel."]}),`
`,e.jsxs(t.li,{children:["Free-text search with autocomplete suggestions and no structured filters at all — that's ",e.jsx(t.code,{children:"<SearchInput>"}),", not this component."]}),`
`]}),`
`,e.jsx(t.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { Checkbox, SearchFilter, Slider, TextInput } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<SearchFilter
  label="Invoices"
  filters={
    <>
      <Checkbox label="Only overdue" />
      <Slider label="Minimum amount" defaultValue={40} />
      <TextInput label="Customer" placeholder="e.g. Acme Co." />
    </>
  }
/>
`})}),`
`,e.jsx(n,{of:h}),`
`,e.jsxs(t.p,{children:["Omit ",e.jsx(t.code,{children:"filters"})," entirely for a plain search field — the filter button doesn't render at all:"]}),`
`,e.jsx(n,{of:c}),`
`,e.jsxs(t.h2,{id:"filters-is-genuinely-just-a-slot",children:[e.jsx(t.code,{children:"filters"})," is genuinely just a slot"]}),`
`,e.jsxs(t.p,{children:["SearchFilter doesn't know or care what's inside ",e.jsx(t.code,{children:"filters"})," — any input components, in whatever layout you want (it's rendered inside ",e.jsx(t.code,{children:"<DropdownMenuPanel>"})," exactly as given). It doesn't validate them, read their values, or coordinate them with the search field's own ",e.jsx(t.code,{children:"value"})," for you."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(t.h2,{id:"building-standard-filter-notation",children:'Building "standard filter notation"'}),`
`,e.jsxs(t.p,{children:["The field showing something like ",e.jsx(t.code,{children:"status:overdue amount:>40"})," isn't a separate display mode SearchFilter computes — it's just the field's own ",e.jsx(t.code,{children:"value"}),", the same one you could type into directly. Wire each filter control's ",e.jsx(t.code,{children:"onChange"})," to recompute that notation string and call ",e.jsx(t.code,{children:"onChange"}),", the same value whether it came from typing or from the panel:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`const [query, setQuery] = useState("");
const [overdue, setOverdue] = useState(false);

function applyFilters(nextOverdue: boolean) {
  setQuery(nextOverdue ? "status:overdue" : "");
}

<SearchFilter
  value={query}
  onChange={setQuery}
  filters={
    <Checkbox
      label="Only overdue"
      checked={overdue}
      onChange={(e) => { setOverdue(e.target.checked); applyFilters(e.target.checked); }}
    />
  }
/>
`})}),`
`,e.jsx(n,{of:u}),`
`,e.jsxs(t.p,{children:[`Confirmed from Figma: the field shows this text (truncated with an ellipsis if it's long) exactly like a typed query — there's no separate "filled" rendering mode, just `,e.jsx(t.code,{children:"value"})," being non-empty."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(t.h2,{id:"typing-suggestions",children:"Typing suggestions"}),`
`,e.jsxs(t.p,{children:["Pass ",e.jsx(t.code,{children:"properties"})," to turn on a real type-ahead dropdown for the field itself — an ARIA combobox (",e.jsx(t.code,{children:'role="combobox"'})," + ",e.jsx(t.code,{children:'role="listbox"'}),", ",e.jsx(t.code,{children:"aria-activedescendant"})," for the highlighted option) modeled directly on ",e.jsx(t.code,{children:"<SearchInput>"}),"'s own, not ",e.jsx(t.code,{children:"<DropdownMenu>"})," (which would move real focus onto a menu item and steal it away from the input mid-type):"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`const properties = [
  {
    key: "status",
    label: "status",
    values: [
      { value: "overdue", label: "Overdue" },
      { value: "paid", label: "Paid" },
    ],
  },
];

<SearchFilter label="Invoices" properties={properties} />
`})}),`
`,e.jsxs(t.p,{children:["Typing a bare word (no colon yet) suggests matching ",e.jsx(t.em,{children:"properties"}),", shown as ",e.jsx(t.code,{children:'"status:"'}),". Typing ",e.jsx(t.code,{children:'"status:"'})," (or ",e.jsx(t.code,{children:'"status:pa"'}),") narrows the list to that property's own values instead — ",e.jsx(t.code,{children:"key"})," is matched case-insensitively. Picking a property inserts ",e.jsx(t.code,{children:'"key:"'})," with no trailing space, so typing continues straight into its values; picking a value inserts ",e.jsx(t.code,{children:'"key:value "'})," (trailing space), completing that clause. Only the word currently being typed — the last whitespace-delimited run of the field's text — is ever replaced, so earlier finished clauses are left alone."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(t.p,{children:"This is independent of, and coordinates with, the filter panel below: the two are separate popups sharing one field, so opening either one closes the other."}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(n,{of:y}),`
`,e.jsx(t.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsx(n,{of:w}),`
`,e.jsx(t.h2,{id:"the-trailing-icon-is-the-filter-toggle-not-a-clear-button",children:"The trailing icon is the filter toggle, not a clear button"}),`
`,e.jsxs(t.p,{children:["The funnel icon swaps to a chevron-up only while the panel is open — regardless of whether ",e.jsx(t.code,{children:"value"})," is empty or filled with a filter summary — same as any other dropdown trigger, open vs. closed. It's not ",e.jsx(t.code,{children:"<SearchInput>"}),`'s "clear the typed text" button; clicking it toggles the panel, and clicking it again (or Escape, or an outside click) closes it. An X here would read as "clear," which is now the panel's own Clear button's job (below) — resetting whatever's driving `,e.jsx(t.code,{children:"filters"}),", not toggling the panel. Clearing the query by hand is ordinary text editing, the same as any other field."]}),`
`,e.jsx(t.h2,{id:"applied-filter-count",children:"Applied-filter count"}),`
`,e.jsxs(t.p,{children:["Pass ",e.jsx(t.code,{children:"filterCount"})," to show a count badge beside the filter button — SearchFilter doesn't parse ",e.jsx(t.code,{children:"filters"})," or ",e.jsx(t.code,{children:"value"}),`, so it has no idea how many filters are actually "applied"; that's on you to compute (see the worked example below, which counts its own checkbox/slider state).`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<SearchFilter filters={<Checkbox label="Only overdue" />} filterCount={1} />
`})}),`
`,e.jsx(t.h2,{id:"the-panel-heading",children:"The panel heading"}),`
`,e.jsxs(t.p,{children:["Confirmed from Figma: the panel now opens with its own heading — a ",e.jsx(t.code,{children:"<FieldLabel>"}),' (default text "Filters", override with ',e.jsx(t.code,{children:"filtersLabel"}),") and, when ",e.jsx(t.code,{children:"onClearFilters"}),' is passed, a "Clear" link button beside it. Omit ',e.jsx(t.code,{children:"onClearFilters"})," and only the label renders — no dead button with nothing to do."]}),`
`,e.jsx(n,{of:b}),`
`,e.jsxs(t.p,{children:["The worked example above wires both ",e.jsx(t.code,{children:"filterCount"})," and ",e.jsx(t.code,{children:"onClearFilters"})," from the same state that drives its checkboxes and slider."]}),`
`,e.jsx(t.h2,{id:"controlling-the-panel",children:"Controlling the panel"}),`
`,e.jsxs(t.p,{children:["Useful if something inside ",e.jsx(t.code,{children:"filters"}),' (e.g. an "Apply" button) should also close the panel — control ',e.jsx(t.code,{children:"filtersOpen"})," the same way you'd control any other open state:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`const [filtersOpen, setFiltersOpen] = useState(false);

<SearchFilter
  filtersOpen={filtersOpen}
  onFiltersOpenChange={setFiltersOpen}
  filters={
    <>
      ...
      <Button onClick={() => setFiltersOpen(false)}>Apply</Button>
    </>
  }
/>
`})}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["The filter button gets ",e.jsx(t.code,{children:'aria-haspopup="menu"'})," from ",e.jsx(t.code,{children:"<DropdownMenuTrigger>"})," — not quite accurate (the panel isn't a menu), a known limitation shared with every other ",e.jsx(t.code,{children:"<DropdownMenuPanel>"})," consumer; see the DropdownMenu docs."]}),`
`,e.jsxs(t.li,{children:["Opening the panel doesn't move focus anywhere — there's no safe assumption about what inside arbitrary ",e.jsx(t.code,{children:"filters"})," content should receive it. Escape closes the panel and returns focus to the filter button."]}),`
`,e.jsxs(t.li,{children:["The suggestions dropdown never moves real focus either — the input keeps it the whole time. The highlighted option is tracked as plain state and exposed via ",e.jsx(t.code,{children:"aria-activedescendant"}),", with the usual Arrow/Home/End/Enter/Escape keys wired to the input itself."]}),`
`,e.jsxs(t.li,{children:["Sets ",e.jsx(t.code,{children:'aria-invalid="true"'})," automatically when ",e.jsx(t.code,{children:'status="error"'}),"."]}),`
`]}),`
`,e.jsx(t.h2,{id:"the-filter-panels-width-and-position",children:"The filter panel's width and position"}),`
`,e.jsxs(t.p,{children:["The panel matches the field's width exactly — and opens from the field's own left edge, not the small filter button that happens to trigger it — the same width and position as the typing suggestions listbox above. ",e.jsx(t.code,{children:"filters"})," content that needs more room wraps or scrolls within that width rather than growing the panel wider."]}),`
`,e.jsx(t.h2,{id:"props",children:"Props"}),`
`,e.jsxs(t.p,{children:["See the ",e.jsx(t.strong,{children:"Controls"})," table above for the full list, types, and defaults — generated automatically from the TypeScript types."]})]})}function Pe(i={}){const{wrapper:t}={...r(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(s,{...i})}):s(i)}export{Pe as default};
