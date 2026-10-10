import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as o}from"./index-DUy19JZU.js";import{c as r,P as a,b as l,C as i}from"./index-R-0gtsrS.js";import{A as d,b as h,a as c}from"./Alert.stories-CoRR5I_x.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function n(s){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:d}),`
`,e.jsx(t.h1,{id:"alert",children:"Alert"}),`
`,e.jsxs(t.p,{children:["A toast/snackbar — a status notification that floats over the page and dismisses itself, manually or after a delay. Renders the exact same card as ",e.jsx(t.code,{children:"<Banner>"}),` (matching Figma's visually-identical "Alert" and "Toast" components), portaled to a screen edge with a position-aware slide transition.`]}),`
`,e.jsxs(t.p,{children:["Click ",e.jsx(t.strong,{children:"Show alert"})," below, then use Controls to change status, position, or switch dismissal between manual (close button only) and auto (a delay in ms)."]}),`
`,e.jsx(a,{}),`
`,e.jsx(l,{}),`
`,e.jsx("p",{style:{fontSize:"var(--text-sm)",color:"var(--content-subtle)"},children:e.jsxs(t.p,{children:["The ",e.jsx("code",{children:"Dismiss"})," control and its delay field aren't real ",e.jsx(t.code,{children:"<Alert>"}),` props — they're a small wrapper this Storybook example uses to drive a live demo, since Alert itself doesn't have a single "show it" prop (see Implementation below for the real API).`]})}),`
`,e.jsx(t.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:'Confirming the result of an action the user just took ("Changes saved", "Payment failed") without blocking the page.'}),`
`,e.jsxs(t.li,{children:["Anything that should disappear on its own — pair with ",e.jsx(t.code,{children:"autoDismissDelay"}),"."]}),`
`]}),`
`,e.jsx(t.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["For a persistent, in-page status message — use ",e.jsx(t.code,{children:"<Banner>"})," instead (no portal, no timer, no transition, stays until the user or your app removes it)."]}),`
`,e.jsxs(t.li,{children:["For anything the user must act on before continuing — that's a ",e.jsx(t.code,{children:"<Modal>"}),", not a toast."]}),`
`]}),`
`,e.jsx(t.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsxs(t.p,{children:["Alert doesn't manage its own presence — you control whether it's mounted, and ",e.jsx(t.code,{children:"onDismiss"})," tells you when it's safe to unmount (after the exit transition finishes, not before)."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { useState } from "react";
import { Alert, Button } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

function SaveButton() {
  const [shown, setShown] = useState(false);

  return (
    <>
      <Button onClick={() => setShown(true)}>Save</Button>
      {shown && (
        <Alert
          status="positive"
          title="Changes saved"
          position="bottom-center"
          autoDismissDelay={3000}
          onDismiss={() => setShown(false)}
        />
      )}
    </>
  );
}
`})}),`
`,e.jsxs(t.p,{children:["Auto-dismiss is just passing a delay instead of leaving ",e.jsx(t.code,{children:"autoDismissDelay"})," undefined — try switching the ",e.jsx(t.code,{children:"Dismiss"})," control above from manual to auto to see it:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<Alert status="positive" title="Changes saved" autoDismissDelay={3000} onDismiss={...} />
`})}),`
`,e.jsx(t.h3,{id:"multiple-alerts-stack-automatically",children:"Multiple alerts stack automatically"}),`
`,e.jsxs(t.p,{children:["Alerts floated to the same ",e.jsx(t.code,{children:"position"})," share one viewport and stack — you don't need to coordinate this yourself."]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(t.h2,{id:"positions",children:"Positions"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"position"})," sets which screen edge the alert anchors to (default ",e.jsx(t.code,{children:'"bottom-center"'}),"). The slide direction follows the vertical half of the position — top positions slide down, bottom positions slide up — regardless of left/center/right alignment."]}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(t.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Enter"}),": mounts hidden, then slides/fades in from its anchored edge on the next frame."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Exit"}),": triggered by the close button or ",e.jsx(t.code,{children:"autoDismissDelay"}),". Plays the reverse transition, and only calls ",e.jsx(t.code,{children:"onDismiss"})," once that transition actually finishes — remove the ",e.jsx(t.code,{children:"<Alert>"})," from your tree in that callback, not before."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Stacking"}),": alerts at the same ",e.jsx(t.code,{children:"position"})," share a single fixed viewport element (created on demand, removed once empty) so they stack instead of overlapping. Bottom positions stack with the newest closest to the edge; top positions stack with the newest closest to the edge as well."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Not handled yet"}),": pausing the auto-dismiss timer on hover, and a queue/limit for how many toasts can stack at once. Both are common toast-library features this doesn't have — worth adding if you need them."]}),`
`]}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Renders with ",e.jsx(t.code,{children:'role="alert"'})," (inherited from ",e.jsx(t.code,{children:"<Banner>"}),") — an assertive ARIA live region, so screen readers announce it as soon as it's inserted."]}),`
`,e.jsxs(t.li,{children:["The close button has ",e.jsx(t.code,{children:'aria-label="Dismiss"'}),"."]}),`
`]})]})}function Ae(s={}){const{wrapper:t}={...o(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(n,{...s})}):n(s)}export{Ae as default};
