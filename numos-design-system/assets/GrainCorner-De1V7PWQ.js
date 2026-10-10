import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as t}from"./index-DUy19JZU.js";import{c as s,P as a,b as c,C as o}from"./index-R-0gtsrS.js";import{G as d,D as l,A as h}from"./GrainCorner.stories-C_HBpmVA.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function i(n){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
`,e.jsx(r.h1,{id:"graincorner",children:"GrainCorner"}),`
`,e.jsxs(r.p,{children:["A dithered, corner-anchored glow — ",e.jsx(r.code,{children:"color"}),' fading in from one corner, textured with a grainy dithered gradient rather than a flat, banded one. This is the shared "grain" motif, factored out so it can be reused anywhere in the design system that calls for the same effect, not just its first consumer (',e.jsx(r.a,{href:"?path=/docs/components-displaymetric--docs",children:"DisplayMetric"}),"'s own corner ornament)."]}),`
`,e.jsx(a,{}),`
`,e.jsx(c,{}),`
`,e.jsx(r.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Anywhere a flat radial gradient would look banded or too clean/synthetic for the surface it's on — a dark card's corner, a hero panel, an empty state's backdrop."}),`
`,e.jsx(r.li,{children:"Reach for this instead of re-implementing the underlying SVG-filter trick by hand each time — it's a genuinely non-obvious recipe with a few real, easy-to-get-wrong constraints (see below)."}),`
`]}),`
`,e.jsx(r.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"A plain, flat accent color or a smooth gradient with no grain — just use CSS directly."}),`
`,e.jsx(r.li,{children:"Full-bleed background texture — this hugs a fixed 160×153px box anchored to one corner (matching the one real design this was pulled from); stretching it to cover a much larger area hasn't been designed or tested."}),`
`]}),`
`,e.jsx(r.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"GrainCorner"})," positions itself nowhere on its own — position the box yourself (",e.jsx(r.code,{children:"position: absolute"}),", anchored wherever you need it) and give it a ",e.jsx(r.code,{children:"color"}),":"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { GrainCorner } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<div style={{ position: "relative", overflow: "hidden" }}>
  <div style={{ position: "absolute", right: -8, bottom: -8 }}>
    <GrainCorner color="var(--background-positive-base)" />
  </div>
  {/* your own content, stacked above via z-index or DOM order */}
</div>
`})}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(r.h2,{id:"the-technique",children:"The technique"}),`
`,e.jsxs(r.p,{children:["Per ",e.jsx(r.a,{href:"https://css-tricks.com/grainy-gradients/",rel:"nofollow",children:"css-tricks.com/grainy-gradients"}),", tuned against a real Figma export rather than guessed: a same-document SVG ",e.jsx(r.code,{children:"feTurbulence"})," filter, desaturated to grayscale (raw turbulence has independently-random R/G/B channels, which reads as rainbow static otherwise), used as a plain ",e.jsx(r.code,{children:"background-image"}),", punched up with a ",e.jsx(r.em,{children:"CSS"})," ",e.jsx(r.code,{children:"contrast()"}),"/",e.jsx(r.code,{children:"brightness()"})," filter, and combined with a color layer via ",e.jsx(r.code,{children:"mix-blend-mode: soft-light"}),". A radial ",e.jsx(r.code,{children:"mask-image"})," fades the whole thing out toward the opposite corner."]}),`
`,e.jsx(r.p,{children:"Three real constraints the implementation depends on, each confirmed against actual (Chromium) rendering rather than assumed from the CSS spec alone:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Referencing the SVG filter from CSS ",e.jsx(r.code,{children:'filter: url("data:...")'})," directly silently no-ops in Chromium. The turbulence filter has to be applied ",e.jsx(r.em,{children:"inside"})," its own self-contained SVG document (to a ",e.jsx(r.code,{children:"<rect>"}),", via a same-document ",e.jsx(r.code,{children:"#id"}),"), with that whole SVG used as a plain ",e.jsx(r.code,{children:"background-image"})," — only the contrast/brightness ",e.jsx(r.em,{children:"functions"})," (no ",e.jsx(r.code,{children:"url()"}),") belong in the real CSS ",e.jsx(r.code,{children:"filter"})," property."]}),`
`,e.jsxs(r.li,{children:["The ",e.jsx(r.code,{children:"mask-image"})," has to wrap the ",e.jsx(r.em,{children:"whole"})," isolated color+grain group, not sit on a wrapper between the isolation boundary and the grain layer itself — that placement silently produced a masked-but-untextured (flat) result."]}),`
`,e.jsxs(r.li,{children:["The grain layer must not have its own ",e.jsx(r.code,{children:"background-color"})," fallback sitting underneath the ",e.jsx(r.code,{children:"background-image"})," — even fully overridden by a more specific ",e.jsx(r.code,{children:"background-image"})," declaration, its mere presence in the cascade silently broke ",e.jsx(r.code,{children:"mix-blend-mode"})," compositing for that element."]}),`
`]}),`
`,e.jsx(r.h2,{id:"any-accent-color",children:"Any accent color"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"color"})," accepts any real CSS color — a token reference or a literal value:"]}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(r.h2,{id:"props",children:"Props"}),`
`,e.jsxs(r.p,{children:[`| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `,e.jsx(r.code,{children:"color"})," | ",e.jsx(r.code,{children:"string"}),` | — | Any real CSS color — tints both the glow and the grain blended over it. |
| `,e.jsx(r.code,{children:"className"})," | ",e.jsx(r.code,{children:"string"})," | — | Applied to the root element. |"]})]})}function Ce(n={}){const{wrapper:r}={...t(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(i,{...n})}):i(n)}export{Ce as default};
