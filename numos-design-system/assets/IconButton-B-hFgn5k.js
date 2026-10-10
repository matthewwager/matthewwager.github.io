import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as s}from"./index-DUy19JZU.js";import{c as r,P as c,b as d,C as i}from"./index-R-0gtsrS.js";import{I as a,P as l,S as h,G as m,A as p,c as x,a as j,D as u,b}from"./IconButton.stories-C34H8uVk.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function t(o){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
`,e.jsx(n.h1,{id:"iconbutton",children:"IconButton"}),`
`,e.jsx(n.p,{children:"A circular, icon-only button — matches Figma's Icon Button exactly across its 4 types × 3 sizes."}),`
`,e.jsx(c,{}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"A single, unlabeled action next to other content — a close (×), a row's delete/edit action, a toolbar button — where an icon alone is a clear, established convention and a text label would be redundant."}),`
`]}),`
`,e.jsx(n.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Any action whose meaning isn't obvious from the icon alone — use ",e.jsx(n.code,{children:"<Button>"})," with a visible label, or at minimum pair the icon with one."]}),`
`,e.jsxs(n.li,{children:["Inline with body text or as a labeled action in a form — ",e.jsx(n.code,{children:"<Button leadingIcon={...}>"})," is a labeled button that also happens to have an icon; this is icon-",e.jsx(n.em,{children:"only"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { IconButton } from "@numosai/ui";
import { Plus } from "lucide-react";
import "@numosai/ui/styles.css"; // once, at your app entry

<IconButton icon={<Plus size={24} />} aria-label="Add" />
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"icon"})," is sized by the caller, not this component — matching ",e.jsx(n.code,{children:"<Button>"}),"'s own ",e.jsx(n.code,{children:"leadingIcon"})," convention. Figma's confirmed icon size per ",e.jsx(n.code,{children:"size"}),": ",e.jsx(n.strong,{children:'16px for "sm", 24px for "md" and "lg"'}),". That's not a typo — Size M's icon was recently increased from 16px to 24px in Figma, so M and L now share the same icon size and differ only in the surrounding circle's diameter (36px vs. 48px)."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"aria-label"})," is required — an icon-only button has no visible label of its own for assistive tech to read."]}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.p,{children:[`Figma calls the outlined type "Tertiary"; it's renamed to `,e.jsx(n.code,{children:'"secondary"'})," here — the identical treatment ",e.jsx(n.code,{children:'<Button variant="secondary">'})," already has a name for, and Figma's own label would just be a second name for the same visual concept. ",e.jsx(n.code,{children:'"ghost"'})," (no border, no fill until hover) has no equivalent on ",e.jsx(n.code,{children:"<Button>"}),"."]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"size"})," (",e.jsx(n.code,{children:'"sm" | "md" | "lg"'}),", defaults to ",e.jsx(n.code,{children:'"md"'}),") sets the circle's diameter — 24px, 36px, 48px. Pass a matching icon size yourself (see above)."]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h2,{id:"all-variants--sizes",children:"All variants × sizes"}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(n.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(i,{of:b}),`
`,e.jsx(n.h2,{id:"a-gap-figma-doesnt-define-within-this-component",children:"A gap Figma doesn't define within this component"}),`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:'"accent"'})," only has a Default state in Figma"]})," — no Hover/Active/Disabled symbols exist yet. Hover/active reuse the exact ",e.jsx(n.code,{children:"--button-accent-hover"}),"/",e.jsx(n.code,{children:"--button-accent-active"})," tokens ",e.jsx(n.code,{children:'<Button variant="accent">'})," already uses (confirmed: Figma's ",e.jsx(n.code,{children:"Button/Accent/Default"})," color is exactly what ",e.jsx(n.code,{children:"--button-accent-default"})," already resolves to), and Disabled matches ",e.jsx(n.code,{children:'"primary"'}),"'s (both solid-fill types dim to ",e.jsx(n.code,{children:"--background-disabled"})," uniformly)."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:'"secondary"'}),` (Figma's "Tertiary") Disabled has no symbol in this component's own frame either, but `,e.jsx(n.code,{children:"<Carousel>"}),"'s disabled nav arrow uses this exact variant and confirms what it looks like: a flat ",e.jsx(n.code,{children:"--background-disabled"})," fill with no border — matching ",e.jsx(n.code,{children:'"primary"'}),"'s own disabled treatment, not an outlined ring."]}),`
`,e.jsx(n.h2,{id:"colors",children:"Colors"}),`
`,e.jsxs(n.p,{children:[`| Variant | Default | Hover | Active | Disabled |
|---|---|---|---|---|
| `,e.jsx(n.code,{children:"primary"})," | ",e.jsx(n.code,{children:"--button-primary-default"})," bg, white icon | ",e.jsx(n.code,{children:"--button-primary-hover"})," bg | ",e.jsx(n.code,{children:"--button-primary-active"})," bg + ",e.jsx(n.code,{children:"--shadow-focus-brand"})," | ",e.jsx(n.code,{children:"--background-disabled"})," bg, ",e.jsx(n.code,{children:"--content-disabled"}),` icon |
| `,e.jsx(n.code,{children:"secondary"})," | ",e.jsx(n.code,{children:"--border-brand"})," outline, ",e.jsx(n.code,{children:"--content-brand-primary"})," icon | + ",e.jsx(n.code,{children:"--background-brand-subdued"})," fill | thicker ",e.jsx(n.code,{children:"--content-link-default"})," outline + fill + ",e.jsx(n.code,{children:"--shadow-focus-brand"})," | ",e.jsx(n.code,{children:"--background-disabled"})," bg, no border, ",e.jsx(n.code,{children:"--content-disabled"}),` icon |
| `,e.jsx(n.code,{children:"ghost"})," | ",e.jsx(n.code,{children:"--content-brand-primary"})," icon, no fill | ",e.jsx(n.code,{children:"--background-element"})," fill | ",e.jsx(n.code,{children:"--background-hover"})," fill | ",e.jsx(n.code,{children:"--content-disabled"}),` icon, no fill |
| `,e.jsx(n.code,{children:"accent"})," | ",e.jsx(n.code,{children:"--button-accent-default"})," bg, ",e.jsx(n.code,{children:"--button-accent-content"})," icon | ",e.jsx(n.code,{children:"--button-accent-hover"})," bg | ",e.jsx(n.code,{children:"--button-accent-active"})," bg + ",e.jsx(n.code,{children:"--shadow-focus-brand"})," | ",e.jsx(n.code,{children:"--background-disabled"})," bg, ",e.jsx(n.code,{children:"--content-disabled"})," icon |"]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"aria-label"})," is a required prop (not optional) — TypeScript enforces it can't be skipped."]}),`
`,e.jsxs(n.li,{children:["Real ",e.jsx(n.code,{children:'<button type="button">'}),", so it's keyboard-focusable and activates on Enter/Space for free."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"disabled"})," uses the native attribute, removing it from the tab order like any other disabled button."]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:["See the ",e.jsx(n.strong,{children:"Controls"})," table above for the full list, types, and defaults — generated automatically from the TypeScript types."]})]})}function Ie(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{Ie as default};
