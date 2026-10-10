import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as r}from"./index-DUy19JZU.js";import{c as s,C as i}from"./index-R-0gtsrS.js";import{a as d,D as a,W as l,N as h}from"./DragList.stories-hgJt4qzU.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function n(t){const o={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
`,e.jsx(o.h1,{id:"draglist",children:"DragList"}),`
`,e.jsxs(o.p,{children:["A reorderable list — drag any row by its grip handle to move it, hover a row to reveal its own delete button, and (if you pass ",e.jsx(o.code,{children:"addOptions"}),") add more rows from a dropdown at the bottom. Matches Figma's ListItem exactly across its 4 states: ",e.jsx(o.strong,{children:"Default"}),", ",e.jsx(o.strong,{children:"Hover"})," (reveals the delete button), ",e.jsx(o.strong,{children:"Active"})," (the row actually being dragged — bigger shadow, no delete button), and ",e.jsx(o.strong,{children:"Target"}),' (the dashed "Drop here" placeholder shown in place of whichever row a drag is currently over).']}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(o.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"An ordered set of things the user should be able to rearrange by hand — checklist steps, form field order, a ranked list."}),`
`,e.jsx(o.li,{children:"A list where items can also be added (from a fixed set of options) and removed, alongside reordering."}),`
`]}),`
`,e.jsx(o.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"A large or virtualized list — this renders every row directly into the DOM, with no virtualization."}),`
`,e.jsxs(o.li,{children:["Free-form item creation (typing a new item's own text) — ",e.jsx(o.code,{children:"addOptions"}),' is a closed set of choices offered in a dropdown, not a text field. Compose your own "new item" input alongside ',e.jsx(o.code,{children:"DragList"})," if you need that."]}),`
`]}),`
`,e.jsx(o.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import { useState } from "react";
import { DragList } from "@numosai/ui";
import type { DragListItem } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

function Example() {
  const [items, setItems] = useState<DragListItem[]>([
    { id: "sync", label: "Sync data" },
    { id: "validate", label: "Validate completion" },
    { id: "prepare", label: "Prepare schedules" },
  ]);

  return (
    <DragList
      items={items}
      onReorder={setItems}
      onRemove={(id) => setItems((prev) => prev.filter((item) => item.id !== id))}
    />
  );
}
`})}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"DragList"})," is fully controlled — it never owns the list itself. ",e.jsx(o.code,{children:"onReorder"})," is called with the complete list in its new order once a drag-and-drop reorder finishes; you're responsible for storing that and passing it back in as ",e.jsx(o.code,{children:"items"}),"."]}),`
`,e.jsx(o.h2,{id:"adding-items-from-a-dropdown",children:"Adding items from a dropdown"}),`
`,e.jsxs(o.p,{children:["Pass ",e.jsx(o.code,{children:"addOptions"})," (and ",e.jsx(o.code,{children:"onAddOption"}),') to show a small "+" button after the last row — clicking it opens a dropdown of the options you give it. Omit ',e.jsx(o.code,{children:"addOptions"})," (or pass an empty array) to hide the button entirely, e.g. once every option has already been added:"]}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`<DragList
  items={items}
  onReorder={setItems}
  addOptions={[
    { value: "audit", label: "Audit trail" },
    { value: "signoff", label: "Manager sign-off" },
  ]}
  onAddOption={(value) => {
    // look up the option and append it to \`items\` yourself
  }}
/>
`})}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"items"})," and ",e.jsx(o.code,{children:"addOptions"})," are two separate, consumer-owned lists — ",e.jsx(o.code,{children:"DragList"})," itself never moves an entry between them. The example above wires its own ",e.jsx(o.code,{children:"onRemove"})," to push a deleted row's ",e.jsx(o.code,{children:"{ id, label }"})," back into ",e.jsx(o.code,{children:"addOptions"})," (as ",e.jsx(o.code,{children:"{ value: id, label }"}),"), so deleting something makes it available to add back later instead of discarding it outright — a pattern worth following if ",e.jsx(o.code,{children:"addOptions"}),' represents "the full set of things that could be in this list," rather than something else entirely.']}),`
`,e.jsx(o.h2,{id:"without-a-delete-button",children:"Without a delete button"}),`
`,e.jsxs(o.p,{children:["Omit ",e.jsx(o.code,{children:"onRemove"})," and rows never show the delete affordance, even on hover — reordering only:"]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(o.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Reordering"}),": built on the native HTML5 drag-and-drop API — the same technique the demo app's own kanban board already uses, not a drag library dependency. Drag a row by anywhere on it (not just the grip icon, which is a visual affordance rather than the only handle) and drop it on another row to move it there."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"The dragged row"}),` stays visible in its original position with an elevated shadow (Figma's "Active" state) rather than disappearing — the row you're currently dragging `,e.jsx(o.em,{children:"over"}),` shows the dashed "Drop here" placeholder (Figma's "Target" state) in its place instead of its own content, marking exactly where the dragged row will land.`]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Removing a row"}),": hovering (or keyboard-focusing) a row reveals its delete (×) button; clicking it calls ",e.jsx(o.code,{children:"onRemove(id)"}),". Hidden for the row currently being dragged, since a row mid-drag can't also be individually deleted."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Not handled"}),": no keyboard equivalent for reordering — native drag-and-drop has none, so moving a row is mouse/touch-only. The delete button and the add dropdown are both fully keyboard operable regardless."]}),`
`]}),`
`,e.jsx(o.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["The delete button is reachable via keyboard (",e.jsx(o.code,{children:":focus-within"})," keeps it visible while tabbing through a row, not just on mouse hover) and always carries ",e.jsx(o.code,{children:'aria-label="Remove item"'}),"."]}),`
`,e.jsxs(o.li,{children:["The add button is a real ",e.jsx(o.code,{children:'<IconButton aria-label="Add item">'})," opening a real ",e.jsx(o.code,{children:"<DropdownMenu>"})," — same keyboard behavior (arrow keys, Escape, outside click) as everywhere else that component is used."]}),`
`,e.jsx(o.li,{children:"Reordering itself has no assistive-technology announcement or keyboard path — a known limitation of native drag-and-drop, not something this component works around."}),`
`]}),`
`,e.jsx(o.h2,{id:"props",children:"Props"}),`
`,e.jsxs(o.p,{children:[`| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `,e.jsx(o.code,{children:"items"})," | ",e.jsx(o.code,{children:"DragListItem[]"})," (",e.jsx(o.code,{children:"{ id: string; label: ReactNode }[]"}),`) | — | The list, in order. |
| `,e.jsx(o.code,{children:"onReorder"})," | ",e.jsx(o.code,{children:"(items: DragListItem[]) => void"}),` | — | Called with the full list in its new order after a drag-and-drop reorder. |
| `,e.jsx(o.code,{children:"onRemove"})," | ",e.jsx(o.code,{children:"(id: string) => void"}),` | — | Omit to hide every row's hover delete button. |
| `,e.jsx(o.code,{children:"addOptions"})," | ",e.jsx(o.code,{children:"DragListAddOption[]"})," (",e.jsx(o.code,{children:"{ value: string; label: ReactNode }[]"}),") | ",e.jsx(o.code,{children:"[]"}),` | Options shown in the "Add item" button's dropdown. Omit/empty hides that button. |
| `,e.jsx(o.code,{children:"onAddOption"})," | ",e.jsx(o.code,{children:"(value: string) => void"})," | — | Called with the picked option's ",e.jsx(o.code,{children:"value"}),` when chosen from the add dropdown. |
| `,e.jsx(o.code,{children:"className"})," | ",e.jsx(o.code,{children:"string"})," | — | Applied to the list's own root element. |"]})]})}function ye(t={}){const{wrapper:o}={...r(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}export{ye as default};
