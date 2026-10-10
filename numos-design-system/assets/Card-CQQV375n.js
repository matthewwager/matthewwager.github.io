import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as i}from"./index-DUy19JZU.js";import{c as s,C as d,b as t}from"./index-R-0gtsrS.js";import{C as c,D as o,S as l,e as h,M as x,E as p,b as m,c as j,d as u,a as g}from"./Card.stories-DkFCrDcX.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";import"./ellipsis-vertical-Bt6GK3lC.js";import"./minimize-2-bzaecEGE.js";import"./maximize-2-B86vZ2tx.js";function a(r){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c}),`
`,e.jsx(n.h1,{id:"card",children:"Card"}),`
`,e.jsxs(n.p,{children:["A clickable card shell — matches Figma's Card exactly. Composes ",e.jsx(n.code,{children:"<CardHeader>"})," for its own header row, ",e.jsx(n.code,{children:"<Avatar>"})," for the lead image, and plain ",e.jsx(n.code,{children:"<Button>"}),"s for any footer actions — nothing about those is reimplemented."]}),`
`,e.jsx(d,{of:o}),`
`,e.jsx(n.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"A clickable summary tile — a person, an object, an option to pick — where the whole card (not just a button inside it) is the interactive target."}),`
`]}),`
`,e.jsx(n.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Avatar, Card, CardHeader } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<Card selected={selected} onClick={() => setSelected(true)}>
  <CardHeader lead={<Avatar size="xs" name="Maya Chen" />} title="Maya Chen" subtitle="Product Designer" />
  <p>Explore the latest updates and features designed to enhance your workflow.</p>
</Card>
`})}),`
`,e.jsx(n.h2,{id:"selected-vs-hover",children:"Selected vs. hover"}),`
`,e.jsxs(n.p,{children:["Confirmed from Figma: default and hover both keep the card's drop shadow — hover just adds a ",e.jsx(n.code,{children:"border-emphasis"})," outline, a real ",e.jsx(n.code,{children:":hover"}),", not a prop. ",e.jsx(n.code,{children:"selected"})," is genuinely unknowable app state, so it's a real prop instead — and it swaps the drop shadow entirely for a ",e.jsx(n.code,{children:"border-brand"})," outline plus a ",e.jsx(n.code,{children:"background-brand-subdued"})," focus ring, rather than layering on top of the same shadow."]}),`
`,e.jsx(d,{of:l}),`
`,e.jsx(n.h2,{id:"grouping-selection-with-cardgroup",children:"Grouping selection with CardGroup"}),`
`,e.jsxs(n.p,{children:["A single ",e.jsx(n.code,{children:"selected"}),"/",e.jsx(n.code,{children:"onClick"})," pair is enough for one card, but a ",e.jsx(n.em,{children:"set"}),' of cards — pick one, or pick any number — needs the same "single vs. multiple" coordination ',e.jsx(n.code,{children:"<RadioGroup>"}),"/",e.jsx(n.code,{children:"<CheckboxGroup>"})," already give their own children. ",e.jsx(n.code,{children:"<CardGroup>"})," draws that same line for ",e.jsx(n.code,{children:"<Card>"}),"'s own ",e.jsx(n.code,{children:"selected"})," state."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:'type="single"'})," (the default) behaves like ",e.jsx(n.code,{children:"<RadioGroup>"}),": give each ",e.jsx(n.code,{children:"<Card>"})," a ",e.jsx(n.code,{children:"value"}),", and selecting one deselects any other — ",e.jsx(n.code,{children:"<CardGroup>"})," tracks which ",e.jsx(n.code,{children:"value"})," is selected for you (controlled via ",e.jsx(n.code,{children:"value"}),"/",e.jsx(n.code,{children:"onValueChange"}),", or uncontrolled via ",e.jsx(n.code,{children:"defaultValue"}),")."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<CardGroup defaultValue="maya">
  <Card value="maya">...</Card>
  <Card value="sam">...</Card>
</CardGroup>
`})}),`
`,e.jsx(d,{of:h}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:'type="multiple"'})," is the ",e.jsx(n.code,{children:"<CheckboxGroup>"})," side of that distinction: there's no shared value to coordinate, since any number of cards can be selected at once — same as a bare ",e.jsx(n.code,{children:"<Checkbox>"}),", each ",e.jsx(n.code,{children:"<Card>"})," just manages its own ",e.jsx(n.code,{children:"selected"}),"/",e.jsx(n.code,{children:"onClick"})," independently, exactly as it would standalone. ",e.jsx(n.code,{children:"<CardGroup>"})," is really just the wrapping layout in this mode."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<CardGroup type="multiple">
  <Card selected={selectedIds.includes("maya")} onClick={() => toggle("maya")}>...</Card>
  <Card selected={selectedIds.includes("sam")} onClick={() => toggle("sam")}>...</Card>
</CardGroup>
`})}),`
`,e.jsx(d,{of:x}),`
`,e.jsx(n.h2,{id:"expanding",children:"Expanding"}),`
`,e.jsxs(n.p,{children:["Figma's own Card only demonstrates one hardcoded jump (400px → 480px) with no content difference otherwise — not a real spec worth baking in as a fixed value. Instead, ",e.jsx(n.code,{children:"expand"})," is a generic sizing knob: ",e.jsx(n.code,{children:'"x"'}),", ",e.jsx(n.code,{children:'"y"'}),", or ",e.jsx(n.code,{children:'"both"'})," picks which axis is free to grow, filling 100% of whatever the parent gives it on that axis."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Card expand="x">...</Card>
`})}),`
`,e.jsx(d,{of:p}),`
`,e.jsxs(n.p,{children:["Add ",e.jsx(n.code,{children:"minWidth"}),"/",e.jsx(n.code,{children:"maxWidth"})," (or ",e.jsx(n.code,{children:"minHeight"}),"/",e.jsx(n.code,{children:"maxHeight"}),", for ",e.jsx(n.code,{children:'expand="y"'}),") to clamp that fill to a band instead of an unconditional 100% — the card won't shrink below the min or grow past the max, whatever the parent's actual size is:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Card expand="x" minWidth="18rem" maxWidth="32rem">...</Card>
`})}),`
`,e.jsx(d,{of:m}),`
`,e.jsx(n.h3,{id:"making-a-card-expandable",children:"Making a card expandable"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"expand"}),"/",e.jsx(n.code,{children:"minWidth"}),"/",e.jsx(n.code,{children:"maxWidth"})," are just plain props — toggling them from your own click handler is what makes a card actually expand and collapse. Two common triggers:"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Clicking the card itself"})," — natural when the card has no other click behavior to conflict with:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [expanded, setExpanded] = useState(false);

<Card expand={expanded ? "x" : undefined} maxWidth={expanded ? "40rem" : undefined} onClick={() => setExpanded((v) => !v)}>
  ...
</Card>
`})}),`
`,e.jsx(d,{of:j}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"A dedicated icon button"})," — needed once the card's own click already means something else (e.g. selection, as in the ",e.jsx(n.code,{children:"CardGroup"})," examples above). ",e.jsx(n.code,{children:"<CardHeader>"}),"'s action buttons already stop their click from reaching the card (see below), so an expand toggle placed there never also fires the card's ",e.jsx(n.code,{children:"onClick"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [selected, setSelected] = useState(false);
const [expanded, setExpanded] = useState(false);

<Card selected={selected} expand={expanded ? "x" : undefined} maxWidth={expanded ? "40rem" : undefined} onClick={() => setSelected((v) => !v)}>
  <CardHeader
    title="Maya Chen"
    actions={[{ icon: expanded ? <Minimize2 /> : <Maximize2 />, label: expanded ? "Collapse" : "Expand", onClick: () => setExpanded((v) => !v) }]}
  />
  ...
</Card>
`})}),`
`,e.jsx(d,{of:u}),`
`,e.jsx(n.h2,{id:"drag-and-drop",children:"Drag and drop"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"draggable"})," sets the native HTML5 ",e.jsx(n.code,{children:"draggable"})," attribute; pair it with ",e.jsx(n.code,{children:"onDragStart"}),"/",e.jsx(n.code,{children:"onDragEnd"})," to make a card a drag source — real browser drag-and-drop, not a custom gesture library. ",e.jsx(n.code,{children:"<Card>"})," only knows it's draggable, not who accepts it: the drop side (",e.jsx(n.code,{children:"onDragOver"}),"/",e.jsx(n.code,{children:"onDrop"}),") belongs to whatever container is receiving the card, the same as it would for any plain draggable element."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Card draggable onDragStart={() => setDraggingId(person.id)} onDragEnd={() => setDraggingId(null)}>
  ...
</Card>
`})}),`
`,e.jsx(d,{of:g}),`
`,e.jsx(n.h2,{id:"cardheader",children:"CardHeader"}),`
`,e.jsxs(n.p,{children:["Figma's real Card content instance reuses the same ",e.jsx(n.code,{children:"Card Header"})," layout twice — once as an actual header (lead image + title/subtitle + actions), once as a plain footer button row — so it's its own component, not something ",e.jsx(n.code,{children:"<Card>"})," renders for you. ",e.jsx(n.code,{children:"lead"}),", ",e.jsx(n.code,{children:"subtitle"}),", and ",e.jsx(n.code,{children:"actions"})," are all optional; omit any of them for a plainer header."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"<Card>"})," itself is a ",e.jsx(n.code,{children:'role="button"'})," div, not a real ",e.jsx(n.code,{children:"<button>"}),": Figma's own Card is a button, but a ",e.jsx(n.code,{children:"<button>"})," can't legally contain another interactive control — a nested ",e.jsx(n.code,{children:"<button>"})," (like ",e.jsx(n.code,{children:"<CardHeader>"}),"'s own action icons) makes the browser silently close the outer one, un-nesting it from the DOM entirely. ",e.jsx(n.code,{children:"tabIndex"}),"/keyboard handling reproduce real button behavior (Enter and Space both activate it) without that constraint. ",e.jsx(n.code,{children:"<CardHeader>"}),"'s own action buttons additionally stop their click from bubbling up, so they never also fire the enclosing card's ",e.jsx(n.code,{children:"onClick"}),"."]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Card"}),": ",e.jsx(n.code,{children:"children"})," (required), ",e.jsx(n.code,{children:"value"})," (only meaningful inside a ",e.jsx(n.code,{children:'<CardGroup type="single">'}),"), ",e.jsx(n.code,{children:"selected"})," (ignored inside a ",e.jsx(n.code,{children:'<CardGroup type="single">'})," when ",e.jsx(n.code,{children:"value"})," is set), ",e.jsx(n.code,{children:"expand"})," (",e.jsx(n.code,{children:'"x"'})," | ",e.jsx(n.code,{children:'"y"'})," | ",e.jsx(n.code,{children:'"both"'}),"), ",e.jsx(n.code,{children:"minWidth"}),"/",e.jsx(n.code,{children:"maxWidth"})," (only apply when ",e.jsx(n.code,{children:"expand"})," includes ",e.jsx(n.code,{children:'"x"'}),"), ",e.jsx(n.code,{children:"minHeight"}),"/",e.jsx(n.code,{children:"maxHeight"})," (only apply when ",e.jsx(n.code,{children:"expand"})," includes ",e.jsx(n.code,{children:'"y"'}),"), ",e.jsx(n.code,{children:"onClick"}),", ",e.jsx(n.code,{children:"draggable"}),", ",e.jsx(n.code,{children:"onDragStart"}),", ",e.jsx(n.code,{children:"onDragEnd"}),", ",e.jsx(n.code,{children:"className"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"CardHeader"}),": ",e.jsx(n.code,{children:"title"})," (required), ",e.jsx(n.code,{children:"lead"}),", ",e.jsx(n.code,{children:"subtitle"}),", ",e.jsx(n.code,{children:"actions"})," (up to 3 — same ",e.jsx(n.code,{children:"{ icon, label, onClick, disabled }"})," shape as ",e.jsx(n.code,{children:'<Cell type="icon">'}),"'s row actions), ",e.jsx(n.code,{children:"className"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"CardGroup"}),": ",e.jsx(n.code,{children:"children"})," (required — ",e.jsx(n.code,{children:"<Card>"}),"s), ",e.jsx(n.code,{children:"type"})," (",e.jsx(n.code,{children:'"single"'})," | ",e.jsx(n.code,{children:'"multiple"'}),", defaults to ",e.jsx(n.code,{children:'"single"'}),"), ",e.jsx(n.code,{children:"value"}),"/",e.jsx(n.code,{children:"defaultValue"}),"/",e.jsx(n.code,{children:"onValueChange"})," (",e.jsx(n.code,{children:'type="single"'})," only), ",e.jsx(n.code,{children:"className"}),"."]}),`
`,e.jsx(t,{of:o})]})}function Ne(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(a,{...r})}):a(r)}export{Ne as default};
