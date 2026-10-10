import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as s}from"./index-DUy19JZU.js";import{c as a,P as r,b as l,C as t}from"./index-R-0gtsrS.js";import{A as c,E as d,W as h,a as p,B as m,b as x,S as j,C as u,T as g}from"./Avatar.stories-BtkLPDu3.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function o(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:c}),`
`,e.jsx(i.h1,{id:"avatar",children:"Avatar"}),`
`,e.jsxs(i.p,{children:["A person or entity's visual identifier: a photo when there is one, otherwise a single initial. ",e.jsx(i.code,{children:'type="person"'})," renders circular; ",e.jsx(i.code,{children:'type="entity"'})," (an org, app, or other non-person) renders as a rounded square."]}),`
`,e.jsx(r,{}),`
`,e.jsx(l,{}),`
`,e.jsx(i.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Representing a user or account next to their name — a comment, a table row, a nav menu."}),`
`,e.jsxs(i.li,{children:["Representing a non-person entity (a company, an integration, an app) — use ",e.jsx(i.code,{children:'type="entity"'}),"."]}),`
`]}),`
`,e.jsx(i.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["For this product's own named apps (Collect, Pay, Accrue, etc.) — use ",e.jsx(i.code,{children:"<AppIcon>"})," instead, which matches those exact glyphs."]}),`
`]}),`
`,e.jsx(i.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import { Avatar } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<Avatar name="Maya Chen" src="/maya.jpg" />
`})}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"src"})," is shown when it's set and loads successfully. Otherwise — no ",e.jsx(i.code,{children:"src"}),", or the image fails to load — it falls back to a single initial: the first character of ",e.jsx(i.code,{children:"name"}),", uppercased. Pass ",e.jsx(i.code,{children:"initials"})," directly if you want to control that fallback yourself instead of deriving it from ",e.jsx(i.code,{children:"name"}),"."]}),`
`,e.jsx(i.h3,{id:"entity",children:"Entity"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<Avatar type="entity" name="Acme Corp" />
`})}),`
`,e.jsx(t,{of:d}),`
`,e.jsx(i.h3,{id:"image-with-automatic-fallback",children:"Image, with automatic fallback"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"Image"})," control on the example above isn't a real ",e.jsx(i.code,{children:"Avatar"})," prop — Avatar has no boolean for this, whether ",e.jsx(i.code,{children:"src"})," is set (vs. ",e.jsx(i.code,{children:"undefined"}),") is what decides image-vs-initial. The control just fills ",e.jsx(i.code,{children:"src"})," with a bundled example asset (a gradient PNG for ",e.jsx(i.code,{children:'type="person"'}),", an SVG logo mark for ",e.jsx(i.code,{children:'type="entity"'}),") so you can toggle it on/off in Controls without needing a real URL."]}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(i.h3,{id:"explicit-initials",children:"Explicit initials"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<Avatar initials="Z" />
`})}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(i.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsx(i.p,{children:"Figma's five sizes (XS/SM/Med/L/XL) map directly onto the first five steps of the Heading semantic type scale — confirmed at both ends directly from Figma, and the fallback initial's typography scales with it automatically."}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(i.h2,{id:"colors",children:"Colors"}),`
`,e.jsxs(i.p,{children:["Figma's Avatar only ever shows one color (brand blue, ",e.jsx(i.code,{children:'color="info"'}),", the default here). The rest reuse the same semantic status colors as ",e.jsx(i.code,{children:"<Badge>"}),"/",e.jsx(i.code,{children:"<Label>"}),"/",e.jsx(i.code,{children:"<Banner>"})," — useful for color-coding avatars (by team, by status, to visually distinguish people from bots) rather than every avatar looking identical."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<Avatar name="Maya Chen" color="positive" />
`})}),`
`,e.jsx(t,{of:u}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:'color="alt-negative"'}),' is new — Figma added an "Alt Negative" semantic color (Background/Background Base/Border/Content, all magenta-based) after the rest of this token system was built from its Foundations page. ',e.jsx(i.code,{children:"--background-alt-negative"}),", ",e.jsx(i.code,{children:"--background-alt-negative-base"}),", ",e.jsx(i.code,{children:"--border-alt-negative"}),", and ",e.jsx(i.code,{children:"--content-alt-negative"})," were added to ",e.jsx(i.code,{children:"tokens.css"}),` to match, confirmed directly from Figma's variables panel — see the Foundations → Tokens page. It's a second, visually distinct "negative" — useful when you need to tell two different error/negative states apart at a glance (e.g. two failure categories) without both reading as the same red.`]}),`
`,e.jsx(i.h2,{id:"tooltip",children:"Tooltip"}),`
`,e.jsxs(i.p,{children:["Not a Figma-specified behavior — an addition, since an avatar only ever shows an image or a single initial, never the full name. On by default: hovering (or focusing) any avatar with a ",e.jsx(i.code,{children:"name"})," or ",e.jsx(i.code,{children:"initials"})," shows it in a ",e.jsx(i.code,{children:'<Tooltip placement="top">'}),". Set ",e.jsx(i.code,{children:"tooltip={false}"})," to opt out."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<Avatar name="Maya Chen" tooltip={false} />
`})}),`
`,e.jsx(t,{of:g}),`
`,e.jsxs(i.p,{children:["Content prefers ",e.jsx(i.code,{children:"name"}),"; if there's no ",e.jsx(i.code,{children:"name"})," (only ",e.jsx(i.code,{children:"initials"}),"), the tooltip shows ",e.jsx(i.code,{children:"initials"})," instead. If neither is set, ",e.jsx(i.code,{children:"tooltip"})," is a no-op — there's nothing to show. See ",e.jsx(i.code,{children:"<Tooltip>"}),"'s own docs for placement, trigger mode, and transition details; Avatar doesn't expose those as separate props, it always uses ",e.jsx(i.code,{children:"<Tooltip>"}),"'s defaults (",e.jsx(i.code,{children:'placement="top"'}),", ",e.jsx(i.code,{children:'trigger="hover"'}),")."]}),`
`,e.jsx(i.h2,{id:"overlapping-groups",children:"Overlapping groups"}),`
`,e.jsxs(i.p,{children:["Every avatar has a 2px ring in its own background color baked in via ",e.jsx(i.code,{children:"box-shadow"})," — that's what gives overlapping avatars a visible seam instead of blending into one shape. For laying out a row or column of overlapping avatars, see ",e.jsx(i.code,{children:"<AvatarGroup>"}),", which handles the spacing (and optional random coloring) for you."]}),`
`,e.jsx(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["When showing an image, ",e.jsx(i.code,{children:"alt"})," is set to ",e.jsx(i.code,{children:"name"})," (or left empty if ",e.jsx(i.code,{children:"name"})," isn't provided, marking it decorative)."]}),`
`,e.jsx(i.li,{children:"The fallback initial is plain text content — no extra ARIA needed, but it's not a substitute for a visible or accessible name elsewhere on the page if the avatar is the only identifier for who/what it represents."}),`
`,e.jsxs(i.li,{children:["The tooltip (when shown) wires up ",e.jsx(i.code,{children:"aria-describedby"})," automatically, and ",e.jsx(i.code,{children:'trigger="hover"'})," also opens on keyboard focus — so the name is announced on focus even without a mouse."]}),`
`]}),`
`,e.jsx(i.h2,{id:"props",children:"Props"}),`
`,e.jsxs(i.p,{children:["See the ",e.jsx(i.strong,{children:"Controls"})," table above for the full list, types, and defaults — generated automatically from the TypeScript types."]})]})}function Ie(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(o,{...n})}):o(n)}export{Ie as default};
