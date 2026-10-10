import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as d}from"./index-DUy19JZU.js";import{c as l}from"./index-R-0gtsrS.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";function t(a){const n={br:"br",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",span:"span",strong:"strong",ul:"ul",...d(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Foundations/Tokens"}),`
`,e.jsx(n.h1,{id:"design-tokens",children:"Design tokens"}),`
`,e.jsx(n.p,{children:"The single source of truth for color, spacing, type, radii, motion, and elevation. Every component reads from these via CSS variables."}),`
`,e.jsx(n.h2,{id:"color",children:"Color"}),`
`,e.jsxs(n.p,{children:["Follows Figma's own two-layer model: ",e.jsx(n.strong,{children:"Primitive"})," (raw ramps) → ",e.jsx(n.strong,{children:"Semantic"})," (aliases a primitive, and swaps to a different primitive in dark mode — toggle your OS/browser color scheme to see it). Components should only ever reach for semantic tokens; primitives exist so semantics have something to alias."]}),`
`,e.jsx(n.h3,{id:"color-primitives",children:"Color primitives"}),`
`,e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",marginTop:"1rem"},children:[["Beige",["100","200","300","400","500","600","700","800","900","1000","1100"]],["Brand",["100","200","300","400","500","600","700","800","900","1000","1100","dark-blue"]],["Gray",["100","200","300","400","500","600","700","800","900","1000","1100"]],["Green",["100","200","300","400","500","600","700","800","900","1000","1100"]],["Magenta",["100","200","300","400","500","600","700","800","900","1000","1100"]],["Red",["100","200","300","400","500","600","700","800","900","1000","1100"]],["Yellow",["100","200","300","400","500","600","700","800","900","1000","1100"]],["Defaults",["black","white"]]].map(([r,i])=>e.jsxs(n.div,{children:[e.jsx(n.p,{style:{fontSize:"var(--text-sm)",color:"var(--content-subtle)",margin:"0 0 0.5rem"},children:r}),e.jsx(n.div,{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(110px, 1fr))",gap:"0.75rem"},children:i.map(s=>{const o=r==="Defaults"?s:`${r.toLowerCase()}-${s}`;return e.jsxs(n.div,{style:{display:"flex",flexDirection:"column",gap:"0.25rem",fontFamily:"var(--font-mono)",fontSize:"0.7rem"},children:[e.jsx(n.div,{style:{background:`var(--${o})`,height:"48px",borderRadius:"var(--radius-md)",border:"1px solid var(--border-base)"}}),e.jsxs(n.span,{children:["--",o]})]},o)})})]},r))}),`
`,e.jsx(n.h3,{id:"color-semantic",children:"Color semantic"}),`
`,e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",marginTop:"1rem"},children:[["Background",["background-active","background-alt-negative","background-alt-negative-base","background-brand-base","background-brand-subdued","background-default","background-default-inverse","background-disabled","background-element","background-hover","background-negative","background-negative-base","background-notice","background-notice-base","background-positive","background-positive-base","background-secondary","background-selected"]],["Border",["border-alt-negative","border-base","border-brand","border-disabled","border-emphasis","border-negative","border-notice","border-positive","border-subtle"]],["Content",["content-alt-negative","content-base","content-base-inverse","content-brand-inverse","content-brand-primary","content-disabled","content-emphasis","content-emphasis-inverse","content-info","content-link-active","content-link-default","content-link-hover","content-negative","content-notice","content-placeholder","content-positive","content-subtle","content-subtle-inverse"]],["Button",["button-accent-active","button-accent-content","button-accent-default","button-accent-hover","button-destructive-active","button-destructive-default","button-destructive-hover","button-disabled","button-primary-active","button-primary-default","button-primary-hover"]],["AppIcon",["app-icon-fill","app-icon-stroke"]]].map(([r,i])=>e.jsxs(n.div,{children:[e.jsx(n.p,{style:{fontSize:"var(--text-sm)",color:"var(--content-subtle)",margin:"0 0 0.5rem"},children:r}),e.jsx(n.div,{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(160px, 1fr))",gap:"0.75rem"},children:i.map(s=>e.jsxs(n.div,{style:{display:"flex",flexDirection:"column",gap:"0.25rem",fontFamily:"var(--font-mono)",fontSize:"0.7rem"},children:[e.jsx(n.div,{style:{background:`var(--${s})`,height:"56px",borderRadius:"var(--radius-md)",border:"1px solid var(--border-base)"}}),e.jsxs(n.span,{children:["--",s]})]},s))})]},r))}),`
`,e.jsx(n.h2,{id:"typography",children:"Typography"}),`
`,e.jsxs(n.p,{children:["Same two-layer model as Color: ",e.jsx(n.strong,{children:"Primitive"})," (raw size/line-height/weight/tracking scale) → ",e.jsx(n.strong,{children:"Semantic"})," (a named text style — Heading or Paragraph — that combines several primitives). Figma's ",e.jsx(n.code,{children:"PP Neue Montreal"})," typeface isn't licensed/loaded in this repo yet, so specimens below render in ",e.jsx(n.code,{children:"--font-sans"})," instead — see ",e.jsx(n.code,{children:"Button.css"})," for the same caveat."]}),`
`,e.jsx(n.h3,{id:"typography-primitives",children:"Typography primitives"}),`
`,e.jsxs(n.p,{children:[`| Token         | Value    |
| ------------- | -------- |
| `,e.jsx(n.code,{children:"--text-xs"}),`   | 0.75rem  |
| `,e.jsx(n.code,{children:"--text-sm"}),`   | 0.875rem |
| `,e.jsx(n.code,{children:"--text-base"}),` | 1rem     |
| `,e.jsx(n.code,{children:"--text-l"}),`    | 1.25rem  |
| `,e.jsx(n.code,{children:"--text-xl"}),`   | 1.5rem   |
| `,e.jsx(n.code,{children:"--text-2xl"}),`  | 2rem     |
| `,e.jsx(n.code,{children:"--text-3xl"}),`  | 2.5rem   |
| `,e.jsx(n.code,{children:"--text-4xl"}),`  | 3rem     |
| `,e.jsx(n.code,{children:"--text-5xl"}),"  | 3.75rem  |"]}),`
`,e.jsxs(n.p,{children:[`| Token           | Value   |
| --------------- | ------- |
| `,e.jsx(n.code,{children:"--leading-xs"}),`  | 0.75rem |
| `,e.jsx(n.code,{children:"--leading-sm"}),`  | 1rem    |
| `,e.jsx(n.code,{children:"--leading-md"}),`  | 1.25rem |
| `,e.jsx(n.code,{children:"--leading-lg"}),`  | 1.5rem  |
| `,e.jsx(n.code,{children:"--leading-xl"}),`  | 1.75rem |
| `,e.jsx(n.code,{children:"--leading-2xl"}),` | 2.25rem |
| `,e.jsx(n.code,{children:"--leading-3xl"}),` | 2.75rem |
| `,e.jsx(n.code,{children:"--leading-4xl"}),` | 3rem    |
| `,e.jsx(n.code,{children:"--leading-5xl"})," | 3.75rem |"]}),`
`,e.jsxs(n.p,{children:[`| Token                   | Value |
| ----------------------- | ----- |
| `,e.jsx(n.code,{children:"--font-weight-regular"}),` | 400   |
| `,e.jsx(n.code,{children:"--font-weight-medium"}),`  | 500   |
| `,e.jsx(n.code,{children:"--tracking-tight"}),`      | 0     |
| `,e.jsx(n.code,{children:"--tracking-sm"}),"         | 0.5px |"]}),`
`,e.jsx(n.h3,{id:"typography-semantic",children:"Typography semantic"}),`
`,e.jsxs(n.p,{children:["Each row applies its token as ",e.jsx(n.code,{children:"font: var(--type-x)"})," plus ",e.jsx(n.code,{children:"letter-spacing: var(--type-x-tracking)"}),"."]}),`
`,e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem",marginTop:"1rem"},children:["heading-5xl","heading-4xl","heading-3xl","heading-2xl","heading-xl","heading-l","heading-m","heading-s","heading-xs"].map(r=>e.jsxs(n.div,{style:{display:"flex",alignItems:"baseline",gap:"1rem"},children:[e.jsx(n.span,{style:{font:`var(--type-${r})`,letterSpacing:`var(--type-${r}-tracking)`},children:"Numos design system"}),e.jsxs(n.span,{style:{fontFamily:"var(--font-mono)",fontSize:"0.7rem",color:"var(--content-subtle)",whiteSpace:"nowrap"},children:["--type-",r]})]},r))}),`
`,e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem",marginTop:"1.5rem"},children:["paragraph-l-medium","paragraph-l-regular","paragraph-m-medium","paragraph-m-regular","paragraph-s-medium","paragraph-s-regular","paragraph-xs-medium","paragraph-xs-regular"].map(r=>e.jsxs(n.div,{style:{display:"flex",alignItems:"baseline",gap:"1rem"},children:[e.jsx(n.span,{style:{font:`var(--type-${r})`,letterSpacing:`var(--type-${r}-tracking)`},children:"Numos design system"}),e.jsxs(n.span,{style:{fontFamily:"var(--font-mono)",fontSize:"0.7rem",color:"var(--content-subtle)",whiteSpace:"nowrap"},children:["--type-",r]})]},r))}),`
`,e.jsx(n.h2,{id:"spacing",children:"Spacing"}),`
`,e.jsxs(n.p,{children:[`| Token        | Value     |
| ------------ | --------- |
| `,e.jsx(n.code,{children:"--space-1"}),`  | 0.25rem   |
| `,e.jsx(n.code,{children:"--space-2"}),`  | 0.5rem    |
| `,e.jsx(n.code,{children:"--space-3"}),`  | 0.75rem   |
| `,e.jsx(n.code,{children:"--space-4"}),`  | 1rem      |
| `,e.jsx(n.code,{children:"--space-5"}),`  | 1.5rem    |
| `,e.jsx(n.code,{children:"--space-6"}),`  | 2rem      |
| `,e.jsx(n.code,{children:"--space-7"}),`  | 3rem      |
| `,e.jsx(n.code,{children:"--space-8"}),"  | 4rem      |"]}),`
`,e.jsx(n.h2,{id:"radii",children:"Radii"}),`
`,e.jsxs(n.p,{children:[`| Token          | Value    |
| -------------- | -------- |
| `,e.jsx(n.code,{children:"--radius-sm"}),`  | 0.25rem  |
| `,e.jsx(n.code,{children:"--radius-md"}),`  | 0.5rem   |
| `,e.jsx(n.code,{children:"--radius-lg"}),`  | 0.75rem  |
| `,e.jsx(n.code,{children:"--radius-xl"}),`  | 1rem     |
| `,e.jsx(n.code,{children:"--radius-full"}),"| 9999px   |"]}),`
`,e.jsx(n.h2,{id:"motion",children:"Motion"}),`
`,e.jsxs(n.p,{children:[`There's no single global "transition everything" rule in this codebase (a blanket `,e.jsx(n.code,{children:"transition: all"})," is a known anti-pattern — it animates properties that were never meant to, and forces the browser to watch every property on the element). Instead, ~30 components each declare their own explicit list of properties to transition, but all of them reach for the same handful of shared duration/easing tokens below — consistent timing without a blanket rule."]}),`
`,e.jsx("style",{children:`
  .ds-motion-track {
    position: relative;
    height: 2.5rem;
    background: var(--background-secondary);
    border-radius: var(--radius-md);
    overflow: hidden;
  }
  .ds-motion-dot {
    position: absolute;
    top: 50%;
    left: var(--space-2);
    width: 1.5rem;
    height: 1.5rem;
    margin-top: -0.75rem;
    border-radius: var(--radius-full);
    background: var(--content-brand-primary);
    animation-name: ds-motion-move;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  @keyframes ds-motion-move {
    from { transform: translateX(0); }
    to { transform: translateX(min(200px, calc(100% - 2 * var(--space-2) - 1.5rem))); }
  }
`}),`
`,e.jsx(n.h3,{id:"duration",children:"Duration"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--duration-fast"})," (150ms) and ",e.jsx(n.code,{children:"--duration-base"})," (250ms) are both in real use across the library — ",e.jsx(n.code,{children:"fast"})," for hover/focus feedback, ",e.jsx(n.code,{children:"base"})," for a layout-affecting reveal (a panel expanding, a card resizing). ",e.jsx(n.code,{children:"--duration-slow"})," (400ms) is defined for a genuinely larger movement, but nothing reaches for it yet — documented honestly rather than force-fitting it somewhere. The three demos below are slowed to ~8× their real duration so the difference is visible at a glance; the label under each is the token's real value."]}),`
`,e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(160px, 1fr))",gap:"1.5rem",marginTop:"1rem"},children:[["fast","150ms","1.2s"],["base","250ms","2s"],["slow","400ms","3.2s"]].map(([r,i,s])=>e.jsxs(n.div,{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx(n.div,{className:"ds-motion-track",children:e.jsx(n.div,{className:"ds-motion-dot",style:{animationDuration:s,animationTimingFunction:"var(--ease-out)"}})}),e.jsxs(n.span,{style:{fontFamily:"var(--font-mono)",fontSize:"0.7rem",color:"var(--content-subtle)"},children:["--duration-",r," (",i,")"]})]},r))}),`
`,e.jsx(n.h3,{id:"easing",children:"Easing"}),`
`,e.jsxs(n.p,{children:['All three share the same "Expo" curve family — ',e.jsx(n.code,{children:"--ease-in"}),"/",e.jsx(n.code,{children:"--ease-in-out"})," aren't an unrelated easing, they're the same personality as the original ",e.jsx(n.code,{children:"--ease-out"})," mirrored for entering vs. exiting, so a component's enter and exit feel like the same motion in reverse rather than two different curves. Duration is fixed at 1.6s across all three below so only the shape of the curve differs."]}),`
`,e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(160px, 1fr))",gap:"1.5rem",marginTop:"1rem"},children:["ease-out","ease-in","ease-in-out"].map(r=>e.jsxs(n.div,{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx(n.div,{className:"ds-motion-track",children:e.jsx(n.div,{className:"ds-motion-dot",style:{animationDuration:"1.6s",animationTimingFunction:`var(--${r})`}})}),e.jsxs(n.span,{style:{fontFamily:"var(--font-mono)",fontSize:"0.7rem",color:"var(--content-subtle)"},children:["--",r]})]},r))}),`
`,e.jsx(n.h3,{id:"which-easing-for-what",children:"Which easing for what"}),`
`,e.jsxs(n.p,{children:["Grouped by ",e.jsx(n.em,{children:"why"})," something is moving, not by which way it moves on screen — ",e.jsx(n.code,{children:"<Alert>"}),' can enter by sliding either down (docked to the top) or up (docked to the bottom), so a literal "upward eases out, downward eases in" rule would flip depending on position. What stays constant is whether the movement is a mount/unmount or a toggle between two states that are both already "home":']}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Entering/appearing"})," — ",e.jsx(n.code,{children:"--ease-out"}),". Decelerating into place: a ",e.jsx(n.code,{children:"<Modal>"}),"/",e.jsx(n.code,{children:"<Alert>"}),"/",e.jsx(n.code,{children:"<Tooltip>"}),"/",e.jsx(n.code,{children:"<DropdownMenu>"})," arriving, a ",e.jsx(n.code,{children:"<MobileNav>"})," panel opening."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Exiting/disappearing"})," — ",e.jsx(n.code,{children:"--ease-in"}),`. Accelerating away: the same components leaving. Declared on the "visible" class itself (not the base, hidden class) so removing that class — the exit — reverts to the base rule's own `,e.jsx(n.code,{children:"--ease-in"}),", while adding it — the entrance — picks up ",e.jsx(n.code,{children:"--ease-out"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Toggling between two persistent states"})," — ",e.jsx(n.code,{children:"--ease-in-out"}),'. Neither arriving nor leaving, just moving between two "at rest" positions: ',e.jsx(n.code,{children:"<Accordion>"}),"'s chevron and panel, ",e.jsx(n.code,{children:"<Toggle>"}),"'s thumb, ",e.jsx(n.code,{children:"<Navigation>"}),"'s rail width, ",e.jsx(n.code,{children:"<Wizard>"}),"'s step panel, ",e.jsx(n.code,{children:"<Card>"}),"'s ",e.jsx(n.code,{children:"expand"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Plain color/shadow fades"})," (hover backgrounds, focus rings) — ",e.jsx(n.code,{children:"--ease-out"})," by default. They have no direction to speak of, so there's no enter/exit/toggle distinction to make."]}),`
`]}),`
`,e.jsx(n.h2,{id:"depth-and-focus",children:"Depth and Focus"}),`
`,e.jsxs(n.p,{children:[`Matches Figma's own "Depth and Focus" Foundations page — 9 real Effect styles (all drop shadows), not hand-picked values. `,e.jsx(n.code,{children:"L1"}),"–",e.jsx(n.code,{children:"L4"})," are elevation, in increasing offset/blur; ",e.jsx(n.code,{children:"Focus Brand"}),"/",e.jsx(n.code,{children:"Negative"}),"/",e.jsx(n.code,{children:"Positive"})," are the exact same ",e.jsx(n.code,{children:"Background/Brand Subdued"}),"/",e.jsx(n.code,{children:"Negative"}),"/",e.jsx(n.code,{children:"Positive"})," semantic tokens already used as solid fills elsewhere, just as a spread-2 ring instead — components that need a colored focus ring should reach for these rather than reassembling the same box-shadow by hand."]}),`
`,e.jsx(n.h3,{id:"elevation",children:"Elevation"}),`
`,e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(120px, 1fr))",gap:"2rem",marginTop:"1rem",padding:"2rem 1.5rem",background:"var(--background-secondary)",borderRadius:"var(--radius-md)"},children:["l1","l2","l3","l4"].map(r=>e.jsxs(n.div,{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.75rem"},children:[e.jsx(n.div,{style:{width:"72px",height:"72px",background:"var(--background-default)",borderRadius:"var(--radius-md)",boxShadow:`var(--shadow-${r})`}}),e.jsxs(n.span,{style:{fontFamily:"var(--font-mono)",fontSize:"0.7rem",color:"var(--content-subtle)"},children:["--shadow-",r]})]},r))}),`
`,e.jsx(n.h3,{id:"focus",children:"Focus"}),`
`,e.jsxs(n.p,{children:["Applied on ",e.jsx(n.code,{children:":focus-visible"})," (and, for ",e.jsx(n.code,{children:"Card"}),"'s ",e.jsx(n.code,{children:"selected"})," state, as real controlled app state rather than a transient focus) — see ",e.jsx(n.code,{children:"Props"}),"/",e.jsx(n.code,{children:"Implementation"})," on each component's own docs page for which state triggers it."]}),`
`,e.jsxs(n.p,{children:[`Figma's own swatches always pair the shadow with a matching 1px border — not part of the Effect style itself (a Figma "Effect" is shadow-only; border is a separate stroke property), but a real, consistent pairing across all three swatches, so components should always set both together: `,e.jsx(n.code,{children:"--shadow-focus-brand"})," with ",e.jsx(n.code,{children:"--border-brand"}),", ",e.jsx(n.code,{children:"--shadow-focus-negative"})," with ",e.jsx(n.code,{children:"--border-negative"}),", ",e.jsx(n.code,{children:"--shadow-focus-positive"})," with ",e.jsx(n.code,{children:"--border-positive"}),"."]}),`
`,e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(120px, 1fr))",gap:"2rem",marginTop:"1rem",padding:"2rem 1.5rem",background:"var(--background-secondary)",borderRadius:"var(--radius-md)"},children:[["focus-brand","border-brand"],["focus-negative","border-negative"],["focus-positive","border-positive"]].map(([r,i])=>e.jsxs(n.div,{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.75rem"},children:[e.jsx(n.div,{style:{width:"72px",height:"72px",background:"var(--background-default)",borderRadius:"var(--radius-md)",border:`1px solid var(--${i})`,boxShadow:`var(--shadow-${r})`}}),e.jsxs(n.span,{style:{fontFamily:"var(--font-mono)",fontSize:"0.7rem",color:"var(--content-subtle)",textAlign:"center"},children:["--shadow-",r,e.jsx(n.br,{}),"+ --",i]})]},r))}),`
`,e.jsx(n.h3,{id:"glow",children:"Glow"}),`
`,e.jsx(n.p,{children:"Not currently used by any component — Figma documents them, but nothing in this library's real screens calls for one yet."}),`
`,e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(120px, 1fr))",gap:"2rem",marginTop:"1rem",padding:"2rem 1.5rem",background:"var(--background-secondary)",borderRadius:"var(--radius-md)"},children:["glow-positive","glow-brand"].map(r=>e.jsxs(n.div,{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.75rem"},children:[e.jsx(n.div,{style:{width:"72px",height:"72px",background:"var(--background-default)",borderRadius:"var(--radius-md)",boxShadow:`var(--shadow-${r})`}}),e.jsxs(n.span,{style:{fontFamily:"var(--font-mono)",fontSize:"0.7rem",color:"var(--content-subtle)"},children:["--shadow-",r]})]},r))})]})}function b(a={}){const{wrapper:n}={...d(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(t,{...a})}):t(a)}export{b as default};
