import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as r}from"./index-DUy19JZU.js";import{c as s,P as a,b as l,C as o}from"./index-R-0gtsrS.js";import{c as d,D as c,A as h,B as m,M as p,Y as x,a as j,b as u,I as g}from"./DisplayMetric.stories-DHHwavX3.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function t(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
`,e.jsx(n.h1,{id:"displaymetric",children:"DisplayMetric"}),`
`,e.jsxs(n.p,{children:["A single headline metric on a dark card — matches Figma's DisplayMetric exactly across its 4 accent colors (Brand/Green/Magenta/Yellow), each tinting both the label text and a dithered glow in the corner (see ",e.jsx(n.a,{href:"?path=/docs/components-graincorner--docs",children:"GrainCorner"}),", the shared motif this composes) from the same token."]}),`
`,e.jsx(a,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"A dashboard's headline stats — revenue, active users, open tickets — where each metric gets its own small card rather than sitting in a plain table."}),`
`,e.jsxs(n.li,{children:[`When you want a categorical accent (a "kind" of metric — positive/informational/attention-needed/brand) rather than a literal good/bad judgment on the number itself; that's what `,e.jsx(n.code,{children:"color"})," picks, not the value's sign."]}),`
`]}),`
`,e.jsx(n.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"A metric that needs a trend indicator, sparkline, or comparison to a prior period — this is deliberately just a value and a label, matching Figma's own component exactly; compose your own richer card if you need more."}),`
`,e.jsx(n.li,{children:"Anywhere that should follow the app's own light/dark setting — this component is always dark, by design (see below)."}),`
`]}),`
`,e.jsx(n.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { DisplayMetric } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<DisplayMetric value="$24.2K" label="Revenue" color="green" />
`})}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(n.h2,{id:"always-dark",children:"Always dark"}),`
`,e.jsxs(n.p,{children:["Confirmed from Figma: every real instance of this component is dark-mode-only, regardless of the app's own theme setting. ",e.jsx(n.code,{children:'data-theme="dark"'})," on the root forces every token inside to resolve to its dark value — the same mechanism already used to keep a portaled ",e.jsx(n.code,{children:"<DropdownMenuContent>"})," in whatever theme its trigger is in, just applied unconditionally here instead of dynamically."]}),`
`,e.jsx(n.h2,{id:"the-4-colors",children:"The 4 colors"}),`
`,e.jsxs(n.p,{children:["Each ",e.jsx(n.code,{children:"color"})," tints both the label text and the corner glow from the same token — there's no independent way to set one without the other."]}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(n.p,{children:"Brand's label is the only one shown at reduced opacity (confirmed from Figma — Green/Magenta/Yellow are all full-opacity)."}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(n.h2,{id:"animated-on-mount",children:"Animated on mount"}),`
`,e.jsxs(n.p,{children:["Pass ",e.jsx(n.code,{children:"animate"})," to count ",e.jsx(n.code,{children:"value"})," up from 0 (or down, for a negative value) on mount, instead of showing it immediately — a fade-in also plays on the corner glow regardless of ",e.jsx(n.code,{children:"animate"}),", so a static card still gets a subtle page-load moment. The count only kicks in when ",e.jsx(n.code,{children:"value"})," is a string containing a recognizable number (",e.jsx(n.code,{children:'"$24.2K"'}),", ",e.jsx(n.code,{children:'"1,204"'}),", ",e.jsx(n.code,{children:'"-$3.1K"'}),", ",e.jsx(n.code,{children:'"12"'}),") — everything except the digits themselves (",e.jsx(n.code,{children:"$"}),", ",e.jsx(n.code,{children:"-"}),", ",e.jsx(n.code,{children:"K"}),", comma grouping) stays fixed throughout, and the animated frames match the same decimal precision and thousands-grouping the target string already has. A non-numeric ",e.jsx(n.code,{children:"value"})," (or any ",e.jsx(n.code,{children:"ReactNode"})," that isn't a plain string) just renders as-is, ",e.jsx(n.code,{children:"animate"})," or not. Respects ",e.jsx(n.code,{children:"prefers-reduced-motion"})," — reduced-motion users see the final value immediately, no counting."]}),`
`,e.jsx(o,{of:j}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(n.h2,{id:"sizing",children:"Sizing"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"width: 100%"})," by default — sized by whatever grid/flex cell contains it, not a fixed pixel width. Lay several out in a wrapping flex row (or a grid) for a real dashboard stat strip:"]}),`
`,e.jsx(o,{of:g}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value"}),"/",e.jsx(n.code,{children:"label"}),' are plain content — if the number itself needs a more specific accessible name (e.g. "$24.2K, up 12% from last month"), compose that into ',e.jsx(n.code,{children:"value"})," or wrap the component with your own ",e.jsx(n.code,{children:"aria-label"}),", same as any other presentational card."]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `,e.jsx(n.code,{children:"value"})," | ",e.jsx(n.code,{children:"ReactNode"})," | — | The headline figure — e.g. ",e.jsx(n.code,{children:'"$24.2K"'}),`. |
| `,e.jsx(n.code,{children:"label"})," | ",e.jsx(n.code,{children:"ReactNode"})," | — | The label under it — e.g. ",e.jsx(n.code,{children:'"Revenue"'}),`. |
| `,e.jsx(n.code,{children:"color"})," | ",e.jsx(n.code,{children:'"brand" \\| "green" \\| "magenta" \\| "yellow"'})," | ",e.jsx(n.code,{children:'"green"'}),` | Tints both the label and the corner glow. |
| `,e.jsx(n.code,{children:"animate"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"})," | Counts ",e.jsx(n.code,{children:"value"}),` up/down from 0 on mount (numeric strings only). |
| `,e.jsx(n.code,{children:"className"})," | ",e.jsx(n.code,{children:"string"})," | — | Applied to the root element. |"]})]})}function Re(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{Re as default};
