import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as r}from"./index-DUy19JZU.js";import{c as s,C as t}from"./index-R-0gtsrS.js";import{a as d,D as l,W as a,S as c,N as h,F as p}from"./DropdownMenu.stories-CkjyxlVS.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";import"./user-CssntHaa.js";import"./copy-m3bsxTJ7.js";function i(o){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
`,e.jsx(n.h1,{id:"dropdownmenu",children:"DropdownMenu"}),`
`,e.jsxs(n.p,{children:["A menu of actions or options that opens from a trigger. This is the shared foundation ",e.jsx(n.code,{children:"<Select>"})," is built on — a styled trigger paired with this same menu panel."]}),`
`,e.jsx(n.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'A list of actions attached to a button (row actions, a "more" menu, a user menu).'}),`
`,e.jsx(n.li,{children:"As the popover half of a custom select-like control."}),`
`]}),`
`,e.jsx(n.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["For a plain multi-choice form field — use ",e.jsx(n.code,{children:"<Select>"})," once it ships; it wraps this same menu with a field-styled trigger and keyboard/typeahead behavior tuned for forms."]}),`
`,e.jsxs(n.li,{children:["For persistent navigation — use ",e.jsx(n.code,{children:"<Navigation>"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsxs(n.p,{children:["This is a compound component: ",e.jsx(n.code,{children:"<DropdownMenu>"})," (root, owns open state) wraps a ",e.jsx(n.code,{children:"<DropdownMenuTrigger>"})," (clones its child — pass any single interactive element) and a ",e.jsx(n.code,{children:"<DropdownMenuContent>"})," (the panel, only rendered while open) containing ",e.jsx(n.code,{children:"<DropdownMenuItem>"}),"s."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Button, DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@numosai/ui";
import { User, Settings, LogOut } from "lucide-react";
import "@numosai/ui/styles.css"; // once, at your app entry

<DropdownMenu>
  <DropdownMenuTrigger>
    <Button variant="secondary">Open menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem leadingIcon={<User size={16} />}>Profile</DropdownMenuItem>
    <DropdownMenuItem leadingIcon={<Settings size={16} />}>Settings</DropdownMenuItem>
    <DropdownMenuItem leadingIcon={<LogOut size={16} />}>Log out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
`})}),`
`,e.jsx(n.p,{children:"Click the trigger below to open it — it's a real, live component, not a screenshot."}),`
`,e.jsx(t,{of:l}),`
`,e.jsx(n.h3,{id:"controlled-open-state",children:"Controlled open state"}),`
`,e.jsxs(n.p,{children:["For cases where something else needs to open/close the menu (e.g. a parent form), skip ",e.jsx(n.code,{children:"defaultOpen"})," and control it directly:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [open, setOpen] = useState(false);

<DropdownMenu open={open} onOpenChange={setOpen}>
  ...
</DropdownMenu>
`})}),`
`,e.jsx(n.h3,{id:"active-and-disabled-items",children:"Active and disabled items"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"active"}),` renders Figma's filled "Active" state — useful for marking the currently selected option (exactly what `,e.jsx(n.code,{children:"<Select>"})," will use it for). ",e.jsx(n.code,{children:"disabled"})," skips both pointer and keyboard interaction."]}),`
`,e.jsx(t,{of:a}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(n.p,{children:["Size is set once on the root — ",e.jsx(n.code,{children:'<DropdownMenu size="sm" | "md" | "lg">'})," — and shared via context by every ",e.jsx(n.code,{children:"<DropdownMenuContent>"}),"/",e.jsx(n.code,{children:"<DropdownMenuPanel>"}),' inside it, cascading down to each item. A trigger built at "md" and a ',e.jsx(n.code,{children:"<DropdownMenuContent>"}),` opened at "lg" can't drift out of sync this way, since there's only one place to set it:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<DropdownMenu size="md">
  <DropdownMenuTrigger>...</DropdownMenuTrigger>
  <DropdownMenuContent>...</DropdownMenuContent>
</DropdownMenu>
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"<DropdownMenuContent>"}),"/",e.jsx(n.code,{children:"<DropdownMenuPanel>"})," still each accept their own ",e.jsx(n.code,{children:"size"})," prop directly, overriding the root's, for the rare case that genuinely needs to — but the root is where ",e.jsx(n.code,{children:"<Select>"}),"/",e.jsx(n.code,{children:"<MultiSelect>"}),"/",e.jsx(n.code,{children:"<SearchFilter>"})," set it, once, from their own ",e.jsx(n.code,{children:"size"})," prop."]}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(n.h2,{id:"width",children:"Width"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"<DropdownMenuContent matchTriggerWidth>"})," (default ",e.jsx(n.code,{children:"false"}),") matches the panel's width exactly to the trigger's own measured width — what ",e.jsx(n.code,{children:"<Select>"}),"/",e.jsx(n.code,{children:"<MultiSelect>"})," use for their options list, so it lines up with the field that opened it edge-to-edge instead of shrinking to its content or growing wider than it. ",e.jsx(n.code,{children:"<DropdownMenuPanel>"})," defaults this to ",e.jsx(n.code,{children:"true"})," instead, since a panel is almost always anchored to a full-width field (",e.jsx(n.code,{children:"<SearchFilter>"}),"'s own filters panel, for instance)."]}),`
`,e.jsxs(n.p,{children:["If the element that should actually open the panel is only ",e.jsx(n.em,{children:"part"})," of the field it should visually line up with (",e.jsx(n.code,{children:"<SearchFilter>"}),"'s small filter button, say, rather than the whole field), pass ",e.jsx(n.code,{children:"anchorRef"})," — a ref to the element to measure/position from instead of ",e.jsx(n.code,{children:"<DropdownMenuTrigger>"}),"'s own."]}),`
`,e.jsx(n.h2,{id:"placement",children:"Placement"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:'placement="bottom" | "top"'})," (defaults to ",e.jsx(n.code,{children:'"bottom"'}),") is a ",e.jsx(n.em,{children:"preferred"})," side, not a fixed one — the panel automatically flips to the other side, and/or right-aligns instead of left-aligning, whenever the preferred combination would run it off the edge of the viewport once its real rendered size is known. A trigger pinned near a corner (a table row's kebab menu, ",e.jsx(n.code,{children:"<Navigation>"}),"'s ",e.jsx(n.code,{children:"<NavUser>"})," account menu near the bottom of the sidebar) ends up wherever actually keeps the whole panel on-screen — ",e.jsx(n.code,{children:"placement"})," just picks which side to try first."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<DropdownMenuContent placement="top">...</DropdownMenuContent>
`})}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(n.h2,{id:"dropdownmenupanel-any-input-components",children:"DropdownMenuPanel: any input components"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"<DropdownMenuContent>"})," is a ",e.jsx(n.code,{children:'role="menu"'})," full of ",e.jsx(n.code,{children:'role="menuitem"'})," rows — right for a list of actions or options, wrong for a form. Matches Figma's ",e.jsx(n.code,{children:"Dropdown"})," ",e.jsx(n.code,{children:'type="Filter"'})," variant: swap it for ",e.jsx(n.code,{children:"<DropdownMenuPanel>"})," when what opens from the trigger is arbitrary fields (",e.jsx(n.code,{children:"<Checkbox>"}),", ",e.jsx(n.code,{children:"<Slider>"}),", a date field, ",e.jsx(n.code,{children:"<TextInput>"}),", ...) instead of a list to pick from — same ",e.jsx(n.code,{children:"<DropdownMenu>"})," root, same open/close/positioning/outside-click, just a plain padded box instead of a menu, so each field keeps its own native keyboard behavior (arrow keys move a slider, not the menu's selection)."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Button, Checkbox, DropdownMenu, DropdownMenuTrigger, DropdownMenuPanel, Slider, TextInput } from "@numosai/ui";
import { Filter } from "lucide-react";

<DropdownMenu>
  <DropdownMenuTrigger>
    <Button variant="secondary" leadingIcon={<Filter size={16} />}>Filters</Button>
  </DropdownMenuTrigger>
  <DropdownMenuPanel>
    <TextInput label="Name contains" placeholder="e.g. invoice" />
    <Checkbox label="Only overdue" />
    <Slider label="Minimum amount" defaultValue={40} />
  </DropdownMenuPanel>
</DropdownMenu>
`})}),`
`,e.jsx(t,{of:p}),`
`,e.jsxs(n.p,{children:["Unlike ",e.jsx(n.code,{children:"<DropdownMenuContent>"}),", opening a ",e.jsx(n.code,{children:"<DropdownMenuPanel>"})," doesn't move focus anywhere — there's no safe assumption about what (if anything) inside arbitrary children should receive it. Escape still closes it and returns focus to the trigger; there's no Arrow/Home/End handling, since those belong to whatever field has focus, not to the panel itself. ",e.jsx(n.code,{children:"<SearchFilter>"})," is the real, worked example of this in practice — see its own docs page."]}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Closes on"}),": clicking outside, selecting an item (unless ",e.jsx(n.code,{children:"closeOnSelect={false}"})," is passed to that ",e.jsx(n.code,{children:"<DropdownMenuItem>"}),"), or pressing Escape (which also returns focus to the trigger)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Transition"}),": the panel fades and scales in/out (",e.jsx(n.code,{children:"--duration-fast"}),") on open/close. It stays mounted for the duration of the close animation rather than disappearing instantly — implemented with plain CSS + a mount/visible state split, no animation library."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Keyboard"}),": Arrow Down/Up move between items (wrapping), Home/End jump to the first/last, Enter/Space activate the focused item — all native ",e.jsx(n.code,{children:"<button>"})," behavior, nothing custom."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Viewport collision"}),`: handled automatically (see Placement above) — the correction happens inside the panel's own hidden "just mounted" frame, so only the final, already-correct position is ever visible, no flash of the wrong placement first.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Trigger gets ",e.jsx(n.code,{children:'aria-haspopup="menu"'})," and ",e.jsx(n.code,{children:"aria-expanded"})," automatically via ",e.jsx(n.code,{children:"<DropdownMenuTrigger>"})," — including when paired with ",e.jsx(n.code,{children:"<DropdownMenuPanel>"}),", where ",e.jsx(n.code,{children:'"menu"'})," isn't really accurate (there's no menu, just a panel of fields). Fixing that means changing what every ",e.jsx(n.code,{children:"<DropdownMenuTrigger>"})," consumer gets, so it's a known, minor inaccuracy rather than something worked around per-consumer."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<DropdownMenuContent>"})," is a real ",e.jsx(n.code,{children:'role="menu"'})," with ",e.jsx(n.code,{children:'role="menuitem"'})," children in ",e.jsx(n.code,{children:'role="none"'})," list items, per the WAI-ARIA menu pattern. Opening it moves focus to the first enabled item; Escape returns focus to the trigger."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<DropdownMenuPanel>"})," has no special role — its own children (real form fields) carry their own semantics. Escape still closes it and returns focus to the trigger; focus is otherwise left wherever it already was."]}),`
`]})]})}function Se(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{Se as default};
