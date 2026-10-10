import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as o}from"./index-DUy19JZU.js";import{c as s,P as d,b as a,C as r}from"./index-R-0gtsrS.js";import{S as c,D as l,E as m}from"./SettingsCard.stories-qel_kUMy.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function n(i){const t={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c}),`
`,e.jsx(t.h1,{id:"settingscard",children:"SettingsCard"}),`
`,e.jsxs(t.p,{children:["A card of ",e.jsx(t.code,{children:"<Setting>"})," rows that switches between a read-only summary and a real editable form — matches Figma's SettingsCard exactly. Built directly from ",e.jsx(t.code,{children:"<Form>"}),"/",e.jsx(t.code,{children:"<FormHeader>"}),"/",e.jsx(t.code,{children:"<FormBody>"}),"/",e.jsx(t.code,{children:"<FormFooter>"})," (confirmed from Figma's own component names, not just a visual resemblance), so none of that chrome is reimplemented here."]}),`
`,e.jsx(d,{}),`
`,e.jsx(a,{}),`
`,e.jsx(t.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["A focused settings form for one object — a profile, a project's configuration — that mostly gets ",e.jsx(t.em,{children:"viewed"}),", with editing as a deliberate, occasional action rather than the default state."]}),`
`]}),`
`,e.jsx(t.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { Setting, SettingsCard } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<SettingsCard
  title="Object Settings"
  description="This is a brief description about the object"
  onSave={(event) => {
    const data = new FormData(event.currentTarget);
    // persist data
  }}
>
  <Setting label="Name" type="text" name="name" value={name} />
  <Setting label="Role" type="select" name="role" value={role} options={roleOptions} />
</SettingsCard>
`})}),`
`,e.jsx(r,{of:l}),`
`,e.jsx(t.h2,{id:"read--edit--savecancel",children:"Read → edit → save/cancel"}),`
`,e.jsxs(t.p,{children:["The pencil icon in the header enters edit mode; every ",e.jsx(t.code,{children:"<Setting>"})," inside switches to its real editable field at once (they all read the same edit state from context — see ",e.jsx(t.code,{children:"<Setting>"}),"'s own docs). While editing, that same button becomes an ",e.jsx(t.strong,{children:"×"}),", and the footer gains Cancel/Save:"]}),`
`,e.jsx(r,{of:m}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Cancel"}),` (the × or the footer button) discards whatever was typed and returns to the read-only summary. This isn't extra logic tracking a "draft" to throw away — every edit-mode field is uncontrolled, so simply switching back to read mode unmounts them, which is what discards the in-progress edits, for free.`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Save"})," submits the real ",e.jsx(t.code,{children:"<form>"})," this card renders and calls ",e.jsx(t.code,{children:"onSave"})," with that submit event — ",e.jsx(t.code,{children:"new FormData(event.currentTarget)"})," collects every ",e.jsx(t.code,{children:"<Setting>"}),"'s current value in one read, the same pattern ",e.jsx(t.code,{children:"<Wizard>"})," uses. SettingsCard doesn't persist anything itself; that's the caller's job, using whatever ",e.jsx(t.code,{children:"onSave"})," receives to update the values passed back into ",e.jsx(t.code,{children:"<Setting>"})," as props."]}),`
`]}),`
`,e.jsx(t.h2,{id:"controlled-vs-uncontrolled",children:"Controlled vs. uncontrolled"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"defaultEditing"})," (default ",e.jsx(t.code,{children:"false"}),") for an uncontrolled card that manages its own mode. Pass ",e.jsx(t.code,{children:"editing"}),"/",e.jsx(t.code,{children:"onEditingChange"})," together if something else needs to know or control whether it's currently being edited."]}),`
`,e.jsx(t.h2,{id:"props",children:"Props"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"title"})," (required), ",e.jsx(t.code,{children:"description"}),", ",e.jsx(t.code,{children:"children"})," (required — ",e.jsx(t.code,{children:"<Setting>"})," rows), ",e.jsx(t.code,{children:"editing"}),", ",e.jsx(t.code,{children:"defaultEditing"})," (default ",e.jsx(t.code,{children:"false"}),"), ",e.jsx(t.code,{children:"onEditingChange"}),", ",e.jsx(t.code,{children:"onSave"}),", ",e.jsx(t.code,{children:"onCancel"}),", ",e.jsx(t.code,{children:"className"}),"."]})]})}function be(i={}){const{wrapper:t}={...o(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(n,{...i})}):n(i)}export{be as default};
