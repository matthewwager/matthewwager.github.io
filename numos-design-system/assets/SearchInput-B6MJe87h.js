import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as s}from"./index-DUy19JZU.js";import{c as r,P as d,b as l,C as n}from"./index-R-0gtsrS.js";import{S as c,D as a,O as h,N as p,W as x,b as m,c as u,a as j,I as f}from"./SearchInput.stories-CuRRDqFd.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";import"./apple-ClKgFGh2.js";import"./banana-V6DKv7TY.js";import"./cherry-DBSC7OKt.js";import"./grape-fsmgPOZP.js";import"./carrot-CasE05fa.js";function t(o){const i={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c}),`
`,e.jsx(i.h1,{id:"searchinput",children:"SearchInput"}),`
`,e.jsx(i.p,{children:"A text field that filters a list of suggestions as you type — matches Figma's Search Input (the field) and Combobox (the filtered dropdown) together, since that's what this component actually is: a combobox with a search icon baked in."}),`
`,e.jsx(d,{}),`
`,e.jsx(l,{}),`
`,e.jsx(i.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Filtering a known, client-side list of options by typed text, where the person can also freely type something not in the list (a genuine search, not a forced choice) — see ",e.jsx(i.code,{children:"<Select>"})," instead when the value truly must be one of a fixed set of options."]}),`
`]}),`
`,e.jsx(i.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import { SearchInput } from "@numosai/ui";
import type { SearchInputOption } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

const options: SearchInputOption[] = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
];

<SearchInput label="Fruit" placeholder="Search fruit" options={options} />
`})}),`
`,e.jsx(n,{of:a}),`
`,e.jsx(i.h2,{id:"its-a-text-field-not-a-forced-choice",children:"It's a text field, not a forced choice"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"value"}),"/",e.jsx(i.code,{children:"defaultValue"}),"/",e.jsx(i.code,{children:"onChange"})," are plain strings, exactly like ",e.jsx(i.code,{children:"<TextInput>"})," — typing freely always works, whether or not anything matches. Picking a suggestion just fills the field with that option's ",e.jsx(i.code,{children:"label"})," and additionally fires ",e.jsx(i.code,{children:"onSelect"})," with the whole option, in case you need its ",e.jsx(i.code,{children:"value"})," (a stable id) rather than just the display text:"]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h2,{id:"filtering",children:"Filtering"}),`
`,e.jsxs(i.p,{children:["The typed text narrows ",e.jsx(i.code,{children:"options"})," to whatever matches — the default is a case-insensitive substring match on ",e.jsx(i.code,{children:"label"}),", no configuration needed for a plain client-side list. Override ",e.jsx(i.code,{children:"filter"})," to match differently, or pass ",e.jsx(i.code,{children:"filter={null}"})," to turn off this built-in narrowing entirely (e.g. server-side/async search, where ",e.jsx(i.code,{children:"options"})," arriving via props is already exactly what should show — you're filtering outside the component, not inside it)."]}),`
`,e.jsxs(i.p,{children:["Omit ",e.jsx(i.code,{children:"options"})," (or pass ",e.jsx(i.code,{children:"[]"}),") for a plain search box with no dropdown at all:"]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h2,{id:"prefix-and-suffix",children:"Prefix and suffix"}),`
`,e.jsxs(i.p,{children:["Fixed text inside the field, immediately before/after the value — e.g. a currency symbol or unit — via ",e.jsx(i.code,{children:"prefix"}),"/",e.jsx(i.code,{children:"suffix"}),". Not shown by default; unlike the field's icons, it's real content (not ",e.jsx(i.code,{children:"aria-hidden"}),"), always rendered in ",e.jsx(i.code,{children:"content-subtle"})," at the value's own font size. Shared across every component that mirrors ",e.jsx(i.code,{children:"<TextInput>"}),"'s Field anatomy — see its own docs for the full reasoning."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h2,{id:"clearing",children:"Clearing"}),`
`,e.jsx(i.p,{children:`A trailing "×" button appears — filling Figma's own (otherwise-unused) trailing-icon slot — whenever the field is filled or focused, clearing the text (and refocusing the input) on click. Not shown while empty and unfocused, so an idle search box stays visually simple.`}),`
`,e.jsx(i.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h2,{id:"status",children:"Status"}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsx(n,{of:j}),`
`,e.jsxs(i.h2,{id:"inside-a-form",children:["Inside a ",e.jsx(i.code,{children:"<form>"})]}),`
`,e.jsxs(i.p,{children:["Unlike ",e.jsx(i.code,{children:"<Select>"}),"/",e.jsx(i.code,{children:"<SegmentedControl>"}),", no hidden input is needed — the visible ",e.jsx(i.code,{children:"<input>"})," ",e.jsx(i.em,{children:"is"})," the real form field, so ",e.jsx(i.code,{children:"name"})," passes straight through to it:"]}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(i.h2,{id:"interaction",children:"Interaction"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Typing"})," narrows the dropdown to matching options and opens it (as long as there's at least one match)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Keyboard"}),': Arrow Down/Up move which option is highlighted (the input keeps real focus the entire time — see "Accessibility" below for why), Enter picks the highlighted one, Escape closes the dropdown without changing the typed text, Home/End jump to the first/last enabled option.']}),`
`,e.jsx(i.li,{children:"Clicking outside, or moving focus elsewhere (Tab), closes the dropdown."}),`
`]}),`
`,e.jsx(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(i.p,{children:["Deliberately not built on ",e.jsx(i.code,{children:"<DropdownMenu>"})," (which ",e.jsx(i.code,{children:"<Select>"})," uses) — ",e.jsx(i.code,{children:"<DropdownMenuContent>"}),' moves real DOM focus onto menu items for keyboard navigation, which would yank focus out of the input mid-keystroke. A combobox instead tracks "which option is highlighted" as plain component state and exposes it via ',e.jsx(i.code,{children:"aria-activedescendant"}),", so focus provably never leaves the input — the documented ARIA combobox pattern, not an approximation of ",e.jsx(i.code,{children:"<Select>"}),"'s menu pattern."]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["The input is ",e.jsx(i.code,{children:'role="combobox"'})," with ",e.jsx(i.code,{children:"aria-expanded"}),", ",e.jsx(i.code,{children:"aria-controls"})," (the listbox), ",e.jsx(i.code,{children:'aria-autocomplete="list"'}),", and ",e.jsx(i.code,{children:"aria-activedescendant"})," pointing at whichever option is currently highlighted."]}),`
`,e.jsxs(i.li,{children:["The dropdown is a real ",e.jsx(i.code,{children:'role="listbox"'})," of ",e.jsx(i.code,{children:'role="option"'}),"s."]}),`
`]}),`
`,e.jsx(i.h2,{id:"props",children:"Props"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"options"}),", ",e.jsx(i.code,{children:"value"}),"/",e.jsx(i.code,{children:"defaultValue"}),"/",e.jsx(i.code,{children:"onChange"}),", ",e.jsx(i.code,{children:"onSelect"}),", ",e.jsx(i.code,{children:"filter"}),", ",e.jsx(i.code,{children:"label"}),", ",e.jsx(i.code,{children:"placeholder"}),", ",e.jsx(i.code,{children:"helpText"}),", ",e.jsx(i.code,{children:"status"}),", ",e.jsx(i.code,{children:"size"})," (",e.jsx(i.code,{children:'"sm" | "md" | "lg"'}),", default ",e.jsx(i.code,{children:'"lg"'}),"), ",e.jsx(i.code,{children:"disabled"}),", ",e.jsx(i.code,{children:"prefix"}),", ",e.jsx(i.code,{children:"suffix"}),", ",e.jsx(i.code,{children:"name"}),", ",e.jsx(i.code,{children:"className"}),", plus any other native ",e.jsx(i.code,{children:"<input>"})," attribute."]})]})}function Pe(o={}){const{wrapper:i}={...s(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(t,{...o})}):t(o)}export{Pe as default};
