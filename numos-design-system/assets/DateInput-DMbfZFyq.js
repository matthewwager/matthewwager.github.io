import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as s}from"./index-DUy19JZU.js";import{c as o,P as a,b as r,C as n}from"./index-R-0gtsrS.js";import{D as l,a as c,d as h,E as p,c as m,W as x,b as j,S as u}from"./DateInput.stories-0jt-zP34.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function d(t){const i={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:l}),`
`,e.jsx(i.h1,{id:"dateinput",children:"DateInput"}),`
`,e.jsxs(i.p,{children:["A date field built on ",e.jsx(i.code,{children:"<DatePicker>"})," — matches the reference design's own Input/Date exactly: the same Field padding/radius/type tokens as ",e.jsx(i.code,{children:"<TextInput>"})," at every size, with a fixed leading Calendar icon. The field is a real, typeable ",e.jsx(i.code,{children:"<input>"})," — type a date by hand, or click the field to open the calendar in a real ",e.jsx(i.code,{children:"<DropdownMenuPanel>"})," and pick a day instead."]}),`
`,e.jsx(a,{}),`
`,e.jsx(r,{}),`
`,e.jsx(i.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Any single date value — a due date, a birthdate, a period-end date."}),`
`]}),`
`,e.jsx(i.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["A date ",e.jsx(i.em,{children:"range"})," (a from/to pair) — this is single-value only, matching Figma's own spec. A range field would be a separate component built the same way, not a mode bolted onto this one."]}),`
`,e.jsxs(i.li,{children:["Somewhere a plain native picker is good enough and you don't need this design system's own calendar look — ",e.jsx(i.code,{children:'<TextInput type="date">'})," is simpler and gets the OS's own picker for free."]}),`
`]}),`
`,e.jsx(i.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import { DateInput } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<DateInput label="Due date" />
`})}),`
`,e.jsxs(i.p,{children:["Type digits only — ",e.jsx(i.code,{children:"/"})," is inserted automatically as you go (the ",e.jsx(i.code,{children:"/"})," and ",e.jsx(i.code,{children:"-"})," keys are blocked in the field, since a manually-typed one would just get stripped right back out), so ",e.jsx(i.code,{children:"09272026"})," becomes ",e.jsx(i.code,{children:"09/27/2026"})," live. Month and day each accept 1 or 2 digits: ",e.jsx(i.code,{children:"922026"})," becomes ",e.jsx(i.code,{children:"9/2/2026"})," (single-digit month and day, still a full 4-digit year). A typed date only commits (calling ",e.jsx(i.code,{children:"onChange"}),") once it fully parses to a real calendar date, at which point it also snaps to the zero-padded canonical form (",e.jsx(i.code,{children:"09/02/2026"}),"). Or click the field (or its calendar icon) to open the picker instead; picking a date fills the field and closes the panel automatically. On blur, the field snaps back to match whatever's actually committed, so an incomplete or invalid typed string doesn't linger looking accepted."]}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(i.h3,{id:"controlled",children:"Controlled"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`const [date, setDate] = useState<Date | null>(null);

<DateInput label="Due date" value={date} onChange={setDate} />
`})}),`
`,e.jsxs(i.p,{children:["Omit ",e.jsx(i.code,{children:"value"}),"/",e.jsx(i.code,{children:"onChange"})," (use ",e.jsx(i.code,{children:"defaultValue"})," instead) to let the field manage its own state uncontrolled."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h2,{id:"the-embedded-panel",children:"The embedded panel"}),`
`,e.jsxs(i.p,{children:["The dropdown itself is a real ",e.jsx(i.code,{children:"<DropdownMenuPanel>"}),` — confirmed from Figma's own "Dropdown" wrapper, which `,e.jsx(i.em,{children:"is"})," that component (its background/border/shadow match exactly), holding a plain ",e.jsx(i.code,{children:"<DatePicker>"}),". Two things are scaled to this field's own size instead of ",e.jsx(i.code,{children:"<DropdownMenuPanel>"}),`'s usual tiers, confirmed against all three of Figma's paired "Dropdown" frames (not just "lg"): its padding (4px/8px/12px, not the panel's default 8px/12px/16px steps) and its corner radius (`,e.jsx(i.code,{children:"radius-sm"}),"/",e.jsx(i.code,{children:"radius-md"}),"/",e.jsx(i.code,{children:"radius-lg"}),", not the panel's own sm-tier ",e.jsx(i.code,{children:"radius-md"}),") — both happen to land on exactly ",e.jsx(i.code,{children:"<TextInput>"}),"'s own lg/md/sm scale."]}),`
`,e.jsx(i.h2,{id:"validation",children:"Validation"}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h2,{id:"help-text",children:"Help text"}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h2,{id:"disabling-dates--week-start",children:"Disabling dates / week start"}),`
`,e.jsxs(i.p,{children:["Forwarded straight to the embedded ",e.jsx(i.code,{children:"<DatePicker>"})," — see its own docs:"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<DateInput label="Delivery date" isDateDisabled={(date) => date.getDay() === 0 || date.getDay() === 6} />
`})}),`
`,e.jsx(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["The field is a real ",e.jsx(i.code,{children:"<input>"})," wired to its ",e.jsx(i.code,{children:"label"})," via ",e.jsx(i.code,{children:"htmlFor"}),"/",e.jsx(i.code,{children:"id"})," (same as ",e.jsx(i.code,{children:"<TextInput>"}),"), so typing works with no extra wiring. The leading calendar icon is a separate real ",e.jsx(i.code,{children:'<button aria-label="Open calendar">'}),", independently focusable and operable via keyboard."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:'status="error"'})," sets ",e.jsx(i.code,{children:"aria-invalid"})," on the input."]}),`
`,e.jsxs(i.li,{children:["See ",e.jsx(i.code,{children:"<DatePicker>"}),"'s own accessibility notes for the calendar itself — including the one real gap it has (no full ARIA grid/arrow-key navigation pattern)."]}),`
`]}),`
`,e.jsx(i.h2,{id:"props",children:"Props"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"label"}),", ",e.jsx(i.code,{children:"helpText"}),", ",e.jsx(i.code,{children:"status"}),", ",e.jsx(i.code,{children:"size"})," (",e.jsx(i.code,{children:'"sm" | "md" | "lg"'}),", default ",e.jsx(i.code,{children:'"lg"'}),"), ",e.jsx(i.code,{children:"placeholder"})," (default ",e.jsx(i.code,{children:'"MM / DD / YYYY"'}),"), ",e.jsx(i.code,{children:"value"}),"/",e.jsx(i.code,{children:"defaultValue"}),"/",e.jsx(i.code,{children:"onChange"}),", ",e.jsx(i.code,{children:"isDateDisabled"}),", ",e.jsx(i.code,{children:"weekStartsOn"}),", ",e.jsx(i.code,{children:"disabled"}),", ",e.jsx(i.code,{children:"name"}),", ",e.jsx(i.code,{children:"id"}),", ",e.jsx(i.code,{children:"className"}),"."]})]})}function Me(t={}){const{wrapper:i}={...s(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(d,{...t})}):d(t)}export{Me as default};
