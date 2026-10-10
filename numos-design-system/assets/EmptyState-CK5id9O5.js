import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as r}from"./index-DUy19JZU.js";import{c as s,C as n}from"./index-R-0gtsrS.js";import{E as c,D as a,N as d,W as l,b as h,a as p,T as m}from"./EmptyState.stories-C6AYQDby.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";import"./search-x-BgAXhC1f.js";function o(i){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c}),`
`,e.jsx(t.h1,{id:"emptystate",children:"EmptyState"}),`
`,e.jsx(t.p,{children:"A centered placeholder for an empty collection — a table with no rows yet, a search with no matches, a list before its first item is added. Matches Figma's reference exactly: a decorative icon, a title, a description, and an optional pair of stacked buttons, all centered in a column."}),`
`,e.jsx(n,{of:a}),`
`,e.jsx(t.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"A table, list, or grid that currently has nothing in it — instead of just rendering nothing, explain what's missing and (if there's a next step) how to fix that."}),`
`,e.jsx(t.li,{children:'A search or filtered view with no matches — pair with a description that suggests what to try next (see the "No results found" example below).'}),`
`]}),`
`,e.jsx(t.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:`A loading state — this is for "there's genuinely nothing here," not "the data hasn't arrived yet." Reach for a skeleton or spinner instead.`}),`
`,e.jsxs(t.li,{children:["An error state — a failed request isn't an empty collection; use ",e.jsx(t.code,{children:"Banner"}),"/",e.jsx(t.code,{children:"Alert"})," (",e.jsx(t.code,{children:'status="negative"'}),") instead, so it reads as a problem rather than a normal empty state."]}),`
`]}),`
`,e.jsx(t.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { Sparkles } from "lucide-react";
import { Button, ButtonGroup, EmptyState } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

function Example() {
  return (
    <EmptyState
      icon={<Sparkles size={24} />}
      title="Title"
      description="Description description description description description"
      actions={
        <ButtonGroup orientation="vertical">
          <Button size="sm" variant="secondary">Button</Button>
          <Button size="sm" variant="primary">Button</Button>
        </ButtonGroup>
      }
    />
  );
}
`})}),`
`,e.jsx(t.h2,{id:"icon-title-and-description",children:"Icon, title, and description"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"icon"})," is any decorative content — typically a ",e.jsx(t.code,{children:"lucide-react"})," icon at ",e.jsx(t.code,{children:"size={24}"}),", matching Figma's own reference — rendered ",e.jsx(t.code,{children:"--content-subtle"})," above the title and hidden from assistive tech (",e.jsx(t.code,{children:"aria-hidden"}),"), since the title/description already say the same thing in words. Omit it for a text-only empty state (see ",e.jsx(t.code,{children:"WithoutIcon"})," below)."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"title"})," renders in ",e.jsx(t.code,{children:"Heading XL"})," (the same scale used for large numeric callouts elsewhere in this library), and ",e.jsx(t.code,{children:"description"})," in ",e.jsx(t.code,{children:"Paragraph S Regular"})," — both ",e.jsx(t.code,{children:"--content-subtle"}),", both centered. ",e.jsx(t.code,{children:"description"})," gets a fixed measure (",e.jsx(t.code,{children:"max-width: 18.5rem"}),") so it wraps onto a readable two- or three-line block instead of stretching edge to edge of whatever container it's in, matching Figma's own reference exactly."]}),`
`,e.jsx(t.h2,{id:"actions",children:"Actions"}),`
`,e.jsx(n,{of:d}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"actions"})," is typically a ",e.jsx(t.code,{children:'<ButtonGroup orientation="vertical">'})," wrapping one or two ",e.jsx(t.code,{children:'<Button size="sm">'}),"s — matching Figma's own reference exactly (a ",e.jsx(t.code,{children:"secondary"})," button stacked above a ",e.jsx(t.code,{children:"primary"})," one) — but it accepts any content. It renders as a plain flex child below the description, at its own natural width rather than stretched to fill the space the title/description take up, so a short one- or two-word button doesn't end up awkwardly full-width. Omit it entirely for an empty state with no action to offer (see ",e.jsx(t.code,{children:"WithoutActions"})," below)."]}),`
`,e.jsx(n,{of:l}),`
`,e.jsx(t.h2,{id:"without-an-icon-or-text-only",children:"Without an icon, or text only"}),`
`,e.jsx(n,{of:h}),`
`,e.jsxs(t.p,{children:["Every part but ",e.jsx(t.code,{children:"title"})," is optional. A search-results empty state, for instance, often reads better with just a title and a suggestion, no icon or action:"]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(t.h2,{id:"layout",children:"Layout"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"EmptyState"})," has no width, background, or border of its own — it centers its own content (",e.jsx(t.code,{children:"display: flex; flex-direction: column; align-items: center"}),") but otherwise fills whatever box its parent gives it. Centering the whole block within a larger region — a tall empty table body, a full page section — is the parent's job: wrap it in a container with its own ",e.jsx(t.code,{children:"display: flex; align-items: center; justify-content: center; min-height: ..."})," (or a CSS Grid ",e.jsx(t.code,{children:"place-items: center"}),"), the same way you'd center any other block of content."]}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"icon"})," is always ",e.jsx(t.code,{children:"aria-hidden"})," — it's decorative, and the title/description already convey the same thing as text."]}),`
`,e.jsxs(t.li,{children:["The root accepts any ",e.jsx(t.code,{children:"<div>"})," prop (e.g. ",e.jsx(t.code,{children:"role"}),", ",e.jsx(t.code,{children:"aria-live"}),"), since whether an empty state needs to announce itself to assistive tech depends on how it appears: a search-results empty state that replaces content live on the page is a good candidate for ",e.jsx(t.code,{children:'role="status"'}),"; a static empty state present from first render generally isn't."]}),`
`]}),`
`,e.jsx(t.h2,{id:"props",children:"Props"}),`
`,e.jsxs(t.p,{children:[`| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `,e.jsx(t.code,{children:"icon"})," | ",e.jsx(t.code,{children:"ReactNode"})," | — | Decorative icon above the title, ",e.jsx(t.code,{children:"--content-subtle"}),`. Omit for a text-only empty state. |
| `,e.jsx(t.code,{children:"title"})," | ",e.jsx(t.code,{children:"ReactNode"})," | — | Required. Rendered in ",e.jsx(t.code,{children:"Heading XL"}),", ",e.jsx(t.code,{children:"--content-subtle"}),`. |
| `,e.jsx(t.code,{children:"description"})," | ",e.jsx(t.code,{children:"ReactNode"})," | — | Rendered in ",e.jsx(t.code,{children:"Paragraph S Regular"}),", ",e.jsx(t.code,{children:"--content-subtle"}),`, wrapped to an 18.5rem measure. |
| `,e.jsx(t.code,{children:"actions"})," | ",e.jsx(t.code,{children:"ReactNode"})," | — | Typically a ",e.jsx(t.code,{children:'<ButtonGroup orientation="vertical">'})," of ",e.jsx(t.code,{children:'<Button size="sm">'}),`s. Rendered at its own natural width, not stretched. |
| `,e.jsx(t.code,{children:"className"})," | ",e.jsx(t.code,{children:"string"})," | — | Applied to the root element. |"]}),`
`,e.jsxs(t.p,{children:["Also accepts every other standard ",e.jsx(t.code,{children:"<div>"})," prop (",e.jsx(t.code,{children:"id"}),", ",e.jsx(t.code,{children:"role"}),", ",e.jsx(t.code,{children:"aria-*"}),", etc.), spread onto the root element."]})]})}function Se(i={}){const{wrapper:t}={...r(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(o,{...i})}):o(i)}export{Se as default};
