import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as t}from"./index-DUy19JZU.js";import{c as i}from"./index-R-0gtsrS.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";function o(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Introduction"}),`
`,e.jsx(n.h1,{id:"numosai-design-system",children:"Numosai Design System"}),`
`,e.jsx(n.p,{children:"A library of React components mirroring our Figma design system, plus a suite of generative SVG, transform, and motion tools."}),`
`,e.jsx(n.h2,{id:"how-this-docs-site-is-organized",children:"How this docs site is organized"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Foundations"})," — design tokens (color, spacing, type, radii)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Components"})," — every React component, one page each, with examples + props"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Illustration tools"})," — generative SVG, recolor/transform utilities, motion components"]}),`
`]}),`
`,e.jsx(n.h2,{id:"authoring-stories",children:"Authoring stories"}),`
`,e.jsx(n.p,{children:"Every component gets two files:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<Component>.stories.tsx"})," — one or more usage examples, rendered live with knob controls"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<Component>.mdx"})," — prose: when to use, when not to, implementation guidance, accessibility notes"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Both live in ",e.jsx(n.code,{children:"apps/storybook/src/stories/"}),". The MDX page references the stories file with ",e.jsx(n.code,{children:"<Canvas>"})," and ",e.jsx(n.code,{children:"<ArgsTable>"})," blocks, so prose and live demos sit side-by-side."]}),`
`,e.jsx(n.h2,{id:"tokens-are-the-source-of-truth",children:"Tokens are the source of truth"}),`
`,e.jsxs(n.p,{children:["Components never hard-code values. If you want to change something across the system, you edit ",e.jsx(n.code,{children:"packages/tokens/src/tokens.css"}),". The next render of Storybook (and every consuming app) reflects it."]})]})}function u(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{u as default};
