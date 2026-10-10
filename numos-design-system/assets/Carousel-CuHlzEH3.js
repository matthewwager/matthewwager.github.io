import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as n}from"./index-DUy19JZU.js";import{c as r,P as a,b as l,C as t}from"./index-R-0gtsrS.js";import{C as d,D as h,L as c,M as p,B as m,N as u,T as g,S as w,O as x,A as j,a as f}from"./Carousel.stories-B0wKpzcI.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function s(o){const i={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:d}),`
`,e.jsx(i.h1,{id:"carousel",children:"Carousel"}),`
`,e.jsxs(i.p,{children:["A slide viewer with previous/next arrows, dot indicators, and drag/swipe navigation — matches Figma's Carousel exactly: ",e.jsx(i.code,{children:'<IconButton variant="secondary" size="md">'})," arrows and dots where the active one is a wider pill among plain circles. Figma's own mockup is a single static slot; sliding between real ",e.jsx(i.code,{children:"slides"})," via a translated track is a genuine implementation, not a reproduction of that placeholder. A second Figma variant shows multiple slides visible at once — that's ",e.jsx(i.code,{children:"itemsPerView"}),", not a different component."]}),`
`,e.jsx(a,{}),`
`,e.jsx(l,{}),`
`,e.jsx(i.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"A set of promotional images, product photos, or cards where only one needs attention at a time and the rest are worth browsing, not reading in sequence."}),`
`]}),`
`,e.jsx(i.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Content the user needs to compare side by side, or scan all of at once — a carousel hides everything but the current slide, which is exactly wrong for that."}),`
`,e.jsx(i.li,{children:"A sequence with a clear start/end the user should read in order — pagination or plain scrolling keeps everything reachable without depending on remembering to click through."}),`
`]}),`
`,e.jsx(i.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import { Carousel } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<Carousel
  slides={[
    <img src="/photo-1.jpg" alt="…" />,
    <img src="/photo-2.jpg" alt="…" />,
    <img src="/photo-3.jpg" alt="…" />,
  ]}
/>
`})}),`
`,e.jsx(t,{of:h}),`
`,e.jsxs(i.h2,{id:"arrows-are-real-iconbuttons",children:["Arrows are real ",e.jsx(i.code,{children:"<IconButton>"}),"s"]}),`
`,e.jsxs(i.p,{children:["The previous/next arrows are ",e.jsx(i.code,{children:'<IconButton variant="secondary" size="md">'})," — not bespoke markup. At the first/last slide, the relevant arrow disables using that variant's own disabled treatment (confirmed from this exact Carousel instance in Figma: a flat ",e.jsx(i.code,{children:"background-disabled"})," fill, no border) rather than wrapping around."]}),`
`,e.jsx(i.h2,{id:"loop",children:e.jsx(i.code,{children:"loop"})}),`
`,e.jsxs(i.p,{children:["Pass ",e.jsx(i.code,{children:"loop"}),` to wrap from the last slide back to the first (and vice versa) instead of disabling the arrows at the ends — Figma's own example shows the non-looping default (first slide, "previous" arrow disabled).`]}),`
`,e.jsx(t,{of:c}),`
`,e.jsxs(i.h2,{id:"itemsperview--multiple-slides-at-once",children:[e.jsx(i.code,{children:"itemsPerView"})," — multiple slides at once"]}),`
`,e.jsxs(i.p,{children:["Defaults to 1 (Figma's original single-slide variant). Set it higher to show that many slides side by side instead — Figma's own multi-item variant. Navigation still steps one slide at a time (a sliding window revealing/hiding one slide at each edge), not by a full page of ",e.jsx(i.code,{children:"itemsPerView"})," slides at once, and ",e.jsx(i.code,{children:"index"}),"'s valid range shrinks accordingly so the window never scrolls past the last slide into empty space — e.g. 5 slides at ",e.jsx(i.code,{children:"itemsPerView={2}"})," can only stop at indices 0–3."]}),`
`,e.jsx(t,{of:p}),`
`,e.jsxs(i.h2,{id:"showbuttons--hide-the-arrows-for-swipe-only-navigation",children:[e.jsx(i.code,{children:"showButtons"})," — hide the arrows for swipe-only navigation"]}),`
`,e.jsxs(i.p,{children:["Defaults to true. Set to ",e.jsx(i.code,{children:"false"})," at mobile sizes where an on-screen swipe gesture reads better than tappable arrows — dragging (via Pointer Events, so touch, mouse, and pen all work identically) is always available regardless of this prop, so hiding the buttons doesn't remove a way to navigate. A drag past a fixed 50px threshold advances/retreats one slide and animates the rest of the way to its resting position; releasing short of that snaps back to the current slide. ",e.jsx(i.code,{children:"touch-action: pan-y"})," on the viewer keeps vertical page scrolling working normally on touch devices — only the horizontal gesture is captured."]}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(i.h2,{id:"dots",children:"Dots"}),`
`,e.jsxs(i.p,{children:["One dot per valid position, shown below the viewer — click one to jump straight there. At ",e.jsx(i.code,{children:"itemsPerView={1}"})," that's one per slide; at higher values, one per valid window start (see ",e.jsx(i.code,{children:"itemsPerView"})," above), since a position beyond that would leave the window's tail end empty. Hidden automatically when there's only one position (no navigation possible), or pass ",e.jsx(i.code,{children:"showDots={false}"})," to hide them regardless."]}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(t,{of:g}),`
`,e.jsx(t,{of:w}),`
`,e.jsxs(i.h2,{id:"buttonplacementdotplacement--perimeter-or-overlay",children:[e.jsx(i.code,{children:"buttonPlacement"}),"/",e.jsx(i.code,{children:"dotPlacement"})," — perimeter or overlay"]}),`
`,e.jsxs(i.p,{children:["Both default to ",e.jsx(i.code,{children:'"perimeter"'}),": arrows in their own row beside the slot, dots in their own row below it — set independently of each other, e.g. perimeter arrows with overlaid dots. ",e.jsx(i.code,{children:'"overlay"'})," instead floats them on top of the slide content (arrows centered on the left/right edges, dots centered along the bottom), for full-bleed media — a photo, a video — where a separate row would just waste space. Since overlaid controls sit on arbitrary content rather than the page's own background, they get a fixed dark scrim + light icon/dot color regardless of light/dark theme, the same reasoning a photo app's floating controls stay visually consistent independent of the OS setting."]}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(i.h2,{id:"slides-round-their-own-corners",children:"Slides round their own corners"}),`
`,e.jsxs(i.p,{children:["Each slide — not just the outer edges of the viewer — has its own ",e.jsx(i.code,{children:"border-radius"}),"/",e.jsx(i.code,{children:"overflow: hidden"}),", so every slide reads as a self-contained rounded card, including the seams between simultaneously-visible ones at ",e.jsx(i.code,{children:"itemsPerView > 1"}),". The slot itself clips as a plain rectangle (needed regardless, to hide slides translated outside the visible window) with no radius of its own."]}),`
`,e.jsx(i.h2,{id:"height-follows-the-active-slide",children:"Height follows the active slide"}),`
`,e.jsxs(i.p,{children:["Nothing here imposes a height — size your own slide content (an ",e.jsx(i.code,{children:"<img>"}),", a fixed-height placeholder) — and the viewer's own height smoothly animates to match whichever slide(s) are actually visible as you navigate, rather than sitting fixed at whatever the tallest slide overall happens to be. That's what makes the same component work for a strip of small thumbnails or a single full-screen image without any extra configuration."]}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(i.h2,{id:"controlled-index",children:"Controlled index"}),`
`,e.jsxs(i.p,{children:["Skip ",e.jsx(i.code,{children:"defaultIndex"})," and drive the active slide yourself with ",e.jsx(i.code,{children:"index"}),"/",e.jsx(i.code,{children:"onIndexChange"})," — useful for syncing the carousel with something else on the page (thumbnails, a step indicator):"]}),`
`,e.jsx(t,{of:f}),`
`,e.jsx(i.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Navigation"}),": the arrows (when ",e.jsx(i.code,{children:"showButtons"}),"), clicking a dot, the Left/Right arrow keys while focus is anywhere inside the carousel, or dragging/swiping the slot directly."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Transition"}),": the track slides via ",e.jsx(i.code,{children:"transform: translateX(...)"})," on ",e.jsx(i.code,{children:"--motion-toggle"})," — a persistent-state change between two slides, not a mount/unmount, so it doesn't use an enter/exit token. Suppressed entirely while a drag is in progress, so the track follows the pointer with no lag, then re-enabled the instant it's released so the snap to a resting position animates."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Sizing"}),": slides aren't given a height by this component — size your own slide content (an ",e.jsx(i.code,{children:"<img>"}),", a fixed-height placeholder) — and the viewer's own height (measured via ",e.jsx(i.code,{children:"ResizeObserver"}),", animated on ",e.jsx(i.code,{children:"--motion-toggle"}),") follows just the currently-visible slide(s), not the tallest slide overall."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Not handled yet"}),": no autoplay."]}),`
`]}),`
`,e.jsx(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["The root is ",e.jsx(i.code,{children:'role="region"'})," ",e.jsx(i.code,{children:'aria-roledescription="carousel"'})," with an ",e.jsx(i.code,{children:"aria-label"})," you provide (describe what the slides ",e.jsx(i.em,{children:"are"}),' — "Product photos" — not the word "carousel," which ',e.jsx(i.code,{children:"aria-roledescription"})," already announces)."]}),`
`,e.jsxs(i.li,{children:["Each slide is ",e.jsx(i.code,{children:'role="group"'})," ",e.jsx(i.code,{children:'aria-roledescription="slide"'})," with an ",e.jsx(i.code,{children:"aria-label"}),' of "Slide X of N", and ',e.jsx(i.code,{children:"aria-hidden"})," while it's outside the currently visible window."]}),`
`,e.jsxs(i.li,{children:["Each dot is a real ",e.jsx(i.code,{children:"<button>"})," with an ",e.jsx(i.code,{children:"aria-label"}),' ("Go to slide X") and ',e.jsx(i.code,{children:"aria-current"})," on the active one."]}),`
`,e.jsx(i.li,{children:"Left/Right arrow keys navigate from anywhere inside the carousel, not just when an arrow button itself has focus."}),`
`]}),`
`,e.jsx(i.h2,{id:"props",children:"Props"}),`
`,e.jsxs(i.p,{children:["See the ",e.jsx(i.strong,{children:"Controls"})," table above for the full list, types, and defaults — generated automatically from the TypeScript types."]})]})}function Te(o={}){const{wrapper:i}={...n(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(s,{...o})}):s(o)}export{Te as default};
