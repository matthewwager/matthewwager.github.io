import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as t}from"./index-DUy19JZU.js";import{d as l,C as o}from"./index-BhD-Js-7.js";import{a as s,D as a,c as d,T as c,N as h,b as m}from"./Diagram.stories-Dk2Uxtv8.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-D4mSwvmr.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramCell-D0CGHh4Q.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";import"./git-branch-Dxa2M4T0.js";import"./hammer-BjT4ZBEm.js";import"./shield-check-B2HjqpXN.js";import"./rocket-SBTibwt-.js";function n(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:s}),`
`,e.jsx(i.h1,{id:"diagram",children:"Diagram"}),`
`,e.jsxs(i.p,{children:["Two pieces for building a flow diagram or system schematic, matching Figma's GridCells: ",e.jsx(i.code,{children:"<DiagramGrid>"})," (the grid) and ",e.jsx(i.code,{children:"<DiagramCell>"}),' (one 32px cell — a line, a corner, a badge, a node, and so on). Nothing here computes layout or routes a line between two nodes automatically — the same "the consumer supplies the layout" philosophy ',e.jsx(i.code,{children:"<GanttChart>"})," already uses (explicit ",e.jsx(i.code,{children:"start"}),"/",e.jsx(i.code,{children:"end"})," dates, not a computed schedule). Every cell gets an explicit ",e.jsx(i.code,{children:"row"}),"/",e.jsx(i.code,{children:"column"}),", the same way you'd sketch the diagram out on graph paper, or lay it out in Figma."]}),`
`,e.jsx(i.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"A system diagram, pipeline, or schematic where flow can branch, converge, or loop back — a grid of explicit cells handles all three; a tree only really grows outward from a root, and a generic node-graph library brings auto-routing complexity this doesn't need."}),`
`,e.jsx(i.li,{children:"Anything you'd otherwise reach for a heavier diagramming library to build, where the shapes involved are simple (boxes and lines) and a hand-placed grid is enough."}),`
`]}),`
`,e.jsx(i.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"A user-editable canvas (drag nodes around, draw your own connections) — this is for an author (you, in code) to lay out a fixed diagram, not an end-user diagramming tool."}),`
`,e.jsx(i.li,{children:"A literal org chart or file tree, where content only ever branches one direction from a root — a tree component (not built yet) would fit that better than fighting a grid to look like one."}),`
`]}),`
`,e.jsx(i.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import { DiagramGrid, DiagramCell } from "@numosai/ui";
import { GitBranch, Hammer, Rocket, ShieldCheck } from "lucide-react";
import "@numosai/ui/styles.css"; // once, at your app entry

<DiagramGrid columns={7} dots>
  <DiagramCell row={1} column={1} type="node"><GitBranch /></DiagramCell>
  <DiagramCell row={1} column={2} type="badge" rotate={90} />
  <DiagramCell row={1} column={3} type="node"><Hammer /></DiagramCell>
  <DiagramCell row={1} column={4} type="corner" rotate={90} />
  <DiagramCell row={2} column={4} type="node"><ShieldCheck /></DiagramCell>
  <DiagramCell row={2} column={5} type="dotted" rotate={90} />
  <DiagramCell row={2} column={6} type="arrow" rotate={270} />
  <DiagramCell row={2} column={7} type="node"><Rocket /></DiagramCell>
</DiagramGrid>
`})}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(i.h2,{id:"the-grid",children:"The grid"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"<DiagramGrid columns={n}>"})," is a plain CSS grid — rows grow automatically as content needs them. Every cell is ",e.jsx(i.code,{children:"cellSize"})," square (defaults to 2rem/32px, matching Figma's GridCells). A cell with nothing placed in it is just an empty grid cell. Add ",e.jsx(i.code,{children:"dots"})," to draw a faint dot in every cell, so the grid itself reads behind a sparse diagram — the same dot as ",e.jsx(i.code,{children:'type="space"'}),", without placing one per cell."]}),`
`,e.jsx(i.h2,{id:"cell-types",children:"Cell types"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"type"})," picks one of Figma's GridCells types. Lines are 2px in ",e.jsx(i.code,{children:"--border-subtle"}),"; each type is drawn once, in the base orientation shown here:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:'"line"'})," — vertical."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:'"dotted"'})," — a dashed vertical line, for a conditional or inferred path."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:'"arrow"'})," — a vertical line with an arrowhead at the bottom."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:'"corner"'})," — an 8px-radius turn joining the bottom and right edges."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:'"cross"'})," — four-way."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:'"branch"'}),` — a vertical line with a stub to the right (Figma's "Branch R").`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:'"badge"'})," — a vertical line with a 24px ",e.jsx(i.code,{children:"<Badge>"})," centered on it."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:'"node"'})," — a tinted square that's just a slot (see Nodes below)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:'"space"'})," — an empty cell marked with a small dot."]}),`
`]}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(i.h2,{id:"rotating-and-flipping",children:"Rotating and flipping"}),`
`,e.jsxs(i.p,{children:["Rather than a separate drawing per direction, ",e.jsx(i.code,{children:"rotate"})," (",e.jsx(i.code,{children:"0 | 90 | 180 | 270"}),", clockwise) turns a cell, and ",e.jsx(i.code,{children:"flipX"}),"/",e.jsx(i.code,{children:"flipY"})," mirror it (left↔right / top↔bottom, as you see it, after any rotation). The badge or node content itself never turns."]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["A ",e.jsx(i.code,{children:'"line"'})," at ",e.jsx(i.code,{children:"rotate={90}"})," is horizontal."]}),`
`,e.jsxs(i.li,{children:["An ",e.jsx(i.code,{children:'"arrow"'})," points right at ",e.jsx(i.code,{children:"rotate={270}"}),", left at ",e.jsx(i.code,{children:"90"}),", and up with ",e.jsx(i.code,{children:"flipY"}),"."]}),`
`,e.jsxs(i.li,{children:["A ",e.jsx(i.code,{children:'"corner"'})," joins bottom↔right at ",e.jsx(i.code,{children:"0"}),", left↔bottom at ",e.jsx(i.code,{children:"90"}),", top↔left at ",e.jsx(i.code,{children:"180"}),", and top↔right at ",e.jsx(i.code,{children:"270"})," — or flip it instead (",e.jsx(i.code,{children:"flipX"})," gives bottom↔left)."]}),`
`,e.jsxs(i.li,{children:["A ",e.jsx(i.code,{children:'"branch"'})," with ",e.jsx(i.code,{children:"flipX"})," has its stub on the left — e.g. where a source's line meets a vertical merge line."]}),`
`]}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(i.h2,{id:"badges",children:"Badges"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:'type="badge"'})," centers a real ",e.jsx(i.code,{children:"<Badge>"})," on the line — the same component and colors used everywhere else in this library. It defaults to a green check (",e.jsx(i.code,{children:'{ status: "complete" }'}),"):"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<DiagramCell row={1} column={2} type="badge" rotate={90} />
<DiagramCell row={2} column={2} type="badge" rotate={90} badge={{ status: "error" }} />
<DiagramCell row={3} column={2} type="badge" rotate={90} badge={{ status: "positive", label: "100" }} />
`})}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:'status="complete"'}),"/",e.jsx(i.code,{children:'"error"'})," show ",e.jsx(i.code,{children:"<Badge>"}),"'s own check/x icon. For any other status, ",e.jsx(i.code,{children:"label"})," shows text — a count like ",e.jsx(i.code,{children:'"100"'})," or an amount like ",e.jsx(i.code,{children:'"$52,455"'})," — or ",e.jsx(i.code,{children:"icon"})," shows an icon. A wide badge overlaps its neighbouring cells and sits above their lines."]}),`
`,e.jsx(i.h2,{id:"nodes",children:"Nodes"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:'type="node"'})," is a 32px tinted square that's just a slot. Put an icon in it (shown at 24px in ",e.jsx(i.code,{children:"--content-placeholder"}),"), an ",e.jsx(i.code,{children:"<Avatar>"})," (",e.jsx(i.code,{children:'size="sm"'})," fills the cell), or an ",e.jsx(i.code,{children:'<AppIcon size="sm">'}),". Whatever goes in keeps its own behavior — an ",e.jsx(i.code,{children:"<Avatar>"})," still shows its name in a tooltip on hover, the same as it does in a table cell or a card header:"]}),`
`,e.jsx(o,{of:h}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"tile={false}"})," drops the tinted square, for content that should sit straight on the grid. ",e.jsx(i.code,{children:"rowSpan"}),"/",e.jsx(i.code,{children:"columnSpan"})," let a node cover more than one cell. ",e.jsx(i.code,{children:"onClick"})," makes it a real, focusable button, e.g. to open a system's details."]}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["A node with ",e.jsx(i.code,{children:"onClick"})," renders a real ",e.jsx(i.code,{children:"<button>"})," — pass ",e.jsx(i.code,{children:"aria-label"})," so it has an accessible name, same as any icon-only control. An ",e.jsx(i.code,{children:"<Avatar>"})," inside a node is already named by its ",e.jsx(i.code,{children:"name"}),"."]}),`
`,e.jsx(i.li,{children:`Lines, corners and other connecting cells are hidden from screen readers; a badge's text (e.g. "100") is not. A whole diagram's meaning usually isn't recoverable from one cell in isolation, so consider a text summary or table alongside it for anyone not viewing it visually, the same way you would for a chart.`}),`
`]}),`
`,e.jsx(i.h2,{id:"props",children:"Props"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"<DiagramGrid>"}),": ",e.jsx(i.code,{children:"columns"})," (required), ",e.jsx(i.code,{children:"cellSize"})," (default ",e.jsx(i.code,{children:'"2rem"'}),"), ",e.jsx(i.code,{children:"dots"}),", ",e.jsx(i.code,{children:"className"}),`.
`,e.jsx(i.code,{children:"<DiagramCell>"}),": ",e.jsx(i.code,{children:"row"}),"/",e.jsx(i.code,{children:"column"})," (required), ",e.jsx(i.code,{children:"type"})," (default ",e.jsx(i.code,{children:'"line"'}),"), ",e.jsx(i.code,{children:"rotate"})," (default ",e.jsx(i.code,{children:"0"}),"), ",e.jsx(i.code,{children:"flipX"}),", ",e.jsx(i.code,{children:"flipY"}),", ",e.jsx(i.code,{children:"badge"})," (",e.jsx(i.code,{children:"{ status, label?, icon? }"}),", ",e.jsx(i.code,{children:'type="badge"'}),"), ",e.jsx(i.code,{children:"tile"})," (default ",e.jsx(i.code,{children:"true"}),"), ",e.jsx(i.code,{children:"rowSpan"}),"/",e.jsx(i.code,{children:"columnSpan"}),", ",e.jsx(i.code,{children:"onClick"})," (",e.jsx(i.code,{children:'type="node"'}),"), ",e.jsx(i.code,{children:"aria-label"}),", ",e.jsx(i.code,{children:"className"}),"."]})]})}function Se(r={}){const{wrapper:i}={...t(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(n,{...r})}):n(r)}export{Se as default};
