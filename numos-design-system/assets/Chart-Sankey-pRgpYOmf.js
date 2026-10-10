import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as s}from"./index-DUy19JZU.js";import{c as r,P as a,b as d,C as i}from"./index-R-0gtsrS.js";import{S as l,D as c,a as h,b as p,L as m,O as u,B as g}from"./Chart-Sankey.stories-C_uEhzi7.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(n.h1,{id:"sankeychart",children:"SankeyChart"}),`
`,e.jsxs(n.p,{children:["A flow diagram — matches Figma's color palette and stage-label row, but Figma's own ribbons are 71 flattened SVG vector fragments, not real flow data. This lays out ",e.jsx(n.code,{children:"nodes"}),"/",e.jsx(n.code,{children:"links"})," from first principles: nodes stacked within their ",e.jsx(n.code,{children:"stage"})," column sized by throughput, links drawn as smooth ribbons sized by ",e.jsx(n.code,{children:"value"})," and stacked in input order along each endpoint."]}),`
`,e.jsx(a,{}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Visualizing how a quantity splits and flows across a sequence of stages — funnel drop-off, budget allocation across categories, traffic sources into outcomes."}),`
`]}),`
`,e.jsx(n.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["A single stage of part-to-whole composition — use ",e.jsx(n.code,{children:"<DonutChart>"}),"."]}),`
`,e.jsxs(n.li,{children:["Comparing magnitudes with no flow between them — use ",e.jsx(n.code,{children:"<BarChart>"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsxs(n.p,{children:["Every node declares which column (",e.jsx(n.code,{children:"stage"}),") it belongs to — an arbitrary link graph has no single correct column ordering to derive automatically, so it isn't inferred:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { SankeyChart } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

<SankeyChart
  nodes={[
    { id: "visits", stage: 0 },
    { id: "signups", stage: 1 },
    { id: "bounced", stage: 1 },
    { id: "customers", stage: 2 },
    { id: "churned", stage: 2 },
  ]}
  links={[
    { source: "visits", target: "signups", value: 60 },
    { source: "visits", target: "bounced", value: 40 },
    { source: "signups", target: "customers", value: 45 },
    { source: "signups", target: "churned", value: 15 },
  ]}
  stageLabels={["Visits", "Converted", "Outcome"]}
/>
`})}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h2,{id:"stage-labels-arent-derived-from-node-data",children:"Stage labels aren't derived from node data"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"stageLabels"})," is a separate array (one entry per distinct ",e.jsx(n.code,{children:"stage"}),` value, in ascending order) from any per-node data — Figma's own instance showed non-sequential placeholder numbers ("0, 1, 2, 4") that turned out to be a Figma artifact, not real data, which is why this is a prop you set intentionally rather than something read off the nodes. Omit it for each stage's own number:`]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h2,{id:"legend-is-manual",children:"Legend is manual"}),`
`,e.jsxs(n.p,{children:[`Unlike bar/line/donut, a link doesn't belong to one obvious "series" the way a bar or line datum does — so `,e.jsx(n.code,{children:"legend"})," is an explicit array you compose to match however you're coloring ",e.jsx(n.code,{children:"links"})," (by source node, by outcome, whatever makes sense for the data), rather than something derived automatically."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h2,{id:"colors",children:"Colors"}),`
`,e.jsxs(n.p,{children:["Links default to the five-color ",e.jsx(n.code,{children:"--chart-1"}),"…",e.jsx(n.code,{children:"--chart-5"})," palette assigned by index — pass ",e.jsx(n.code,{children:"color"})," on a link to override that one link."]}),`
`,e.jsx(n.h3,{id:"one-color",children:"One color"}),`
`,e.jsxs(n.p,{children:["Pass ",e.jsx(n.code,{children:"color"})," on the chart itself (not a link) for a monochrome chart instead of the categorical palette — nodes render at full opacity, ribbons keep the same muted-by-default/full-on-hover split as always, just with one color throughout instead of one per link. A per-link ",e.jsx(n.code,{children:"color"})," still overrides this for that one link."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<SankeyChart nodes={nodes} links={links} color="var(--chart-1)" />
`})}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.h2,{id:"branching-drop-off-hidden-nodes",children:"Branching drop-off (hidden nodes)"}),`
`,e.jsxs(n.p,{children:["A node can be ",e.jsx(n.code,{children:"hidden"})," — it still gets laid out and gives a link a real endpoint, but draws no marker of its own. Pairing a hidden node with a stage that already has a real, visible node splits that stage's incoming flow into two: the part that continues on to the next visible stage, and the part that branches off and ends there instead (attrition, drop-off) — without adding an extra visible stage for it."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<SankeyChart
  nodes={[
    { id: "backlog", stage: 0 },
    { id: "assigned", stage: 1 },
    { id: "droppedAfterBacklog", stage: 1, hidden: true },
    // …
  ]}
  links={[
    { source: "backlog", target: "assigned", value: 20 },
    { source: "backlog", target: "droppedAfterBacklog", value: 5 },
    // …
  ]}
  nodeWidth={8}
  stageAlign="centers"
/>
`})}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(n.h2,{id:"node-width-and-alignment",children:"Node width and alignment"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"nodeWidth"})," (default 3) sets each stage marker's thickness in real px, regardless of the chart's own rendered width — drawn as a stroked line (",e.jsx(n.code,{children:"vector-effect: non-scaling-stroke"}),", the same technique ",e.jsx(n.code,{children:"<LineChart>"})," uses for its own line), not a fill shape sized in viewBox units, since only that technique holds an exact px value steady across any container width."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"stageAlign"})," (",e.jsx(n.code,{children:'"edges"'})," default, or ",e.jsx(n.code,{children:'"centers"'}),") controls where each stage sits horizontally. ",e.jsx(n.code,{children:'"edges"'})," spreads stages from the chart's own left edge to its right edge, matching Figma. ",e.jsx(n.code,{children:'"centers"'})," instead splits the width into equal bands (one per stage) and centers each stage within its own band — for lining a Sankey up against a same-width column layout rendered alongside it, like a kanban board, where each stage needs to sit under the middle of its column rather than at a shared edge."]}),`
`,e.jsx(n.h2,{id:"tooltip-wording",children:"Tooltip wording"}),`
`,e.jsxs(n.p,{children:["By default a link's tooltip is two lines — ",e.jsx(n.code,{children:"label"})," (defaults to ",e.jsx(n.code,{children:'"{source} → {target}"'}),") above the raw ",e.jsx(n.code,{children:"value"}),". Set ",e.jsx(n.code,{children:"omitTooltipValue"})," on a link when ",e.jsx(n.code,{children:"label"})," already reads as a complete sentence with the number folded in (e.g. ",e.jsx(n.code,{children:'"20 moved to assigned"'})," instead of ",e.jsx(n.code,{children:'"Backlog → Assigned"'})," + ",e.jsx(n.code,{children:'"20"'}),") — this hides the redundant second line rather than repeating the number."]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The ribbons and nodes are decorative markup with no accessible fallback of their own; pair with a visually-hidden data table or summary if the underlying flow data needs to reach assistive tech."}),`
`,e.jsx(n.li,{children:"Stage-label and legend text render as real, readable text."}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:["See the ",e.jsx(n.strong,{children:"Controls"})," table above for the full list, types, and defaults — generated automatically from the TypeScript types."]})]})}function Be(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{Be as default};
