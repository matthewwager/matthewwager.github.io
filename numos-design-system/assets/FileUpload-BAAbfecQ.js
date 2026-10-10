import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as s}from"./index-DUy19JZU.js";import{c as l,P as d,b as a,C as r}from"./index-R-0gtsrS.js";import{F as c,E as n,a as p,L as h,C as m,b as x,A as j,U as f,c as u}from"./FileUpload.stories-Dl4R5cVa.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BFv1ps5w.js";import"./index-Brl4xq4Y.js";import"./index-ClL5Gxbg.js";import"./index-DrFu-skq.js";import"./DiagramConnector-DY1AhLDR.js";import"./chevron-left-C9vICWy7.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./chevron-right-DjmJ9Qh9.js";import"./x-8M16RbwM.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-up-B8mFgxMJ.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./bell-dJEDpyJq.js";import"./sparkles-BGkPd9R1.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";function t(i){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
`,e.jsx(o.h1,{id:"fileupload",children:"FileUpload"}),`
`,e.jsxs(o.p,{children:["A file upload control — matches Figma's File Upload exactly across two real axes: ",e.jsx(o.code,{children:"variant"})," (a bordered drag-and-drop ",e.jsx(o.strong,{children:"dropzone"}),", or a plain compact ",e.jsx(o.strong,{children:"link"}),") and ",e.jsx(o.code,{children:"state"})," (empty/loading/complete/error)."]}),`
`,e.jsx(d,{}),`
`,e.jsx(a,{}),`
`,e.jsx(o.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"Uploading a document/attachment (an invoice, a receipt, an import file) where the user picks or drags in exactly one thing at a time."}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:'variant="dropzone"'})," for a prominent, standalone upload area (a modal, an empty state). ",e.jsx(o.code,{children:'variant="link"'}),` for a compact "Browse files" affordance inside a tighter layout (a form row, a table cell) where a full dashed box doesn't fit.`]}),`
`]}),`
`,e.jsx(o.h2,{id:"when-not-to-use",children:"When NOT to use"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["Multiple independent files each with their own progress/removal, shown as a persistent list — build that from your own array of state plus one ",e.jsx(o.code,{children:"FileUpload"})," (in its ",e.jsx(o.code,{children:"loading"}),"/",e.jsx(o.code,{children:"complete"}),"/",e.jsx(o.code,{children:"error"})," states) per file, or a plain list of already-uploaded filenames instead."]}),`
`,e.jsx(o.li,{children:'A generic "pick a value from disk" control unrelated to file upload (e.g. choosing a saved template) — this is specifically for the browse-or-drop-then-upload flow, progress bar and all.'}),`
`]}),`
`,e.jsx(o.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import { useState } from "react";
import { FileUpload } from "@numosai/ui";
import type { FileUploadState } from "@numosai/ui";
import "@numosai/ui/styles.css"; // once, at your app entry

function Example() {
  const [state, setState] = useState<FileUploadState>("empty");
  const [progress, setProgress] = useState(0);
  const [filename, setFilename] = useState("");

  function upload(file: File) {
    setFilename(file.name);
    setState("loading");
    // ...drive \`progress\` from your real upload, then setState("complete") or setState("error")
  }

  return (
    <FileUpload
      state={state}
      progress={progress}
      filename={filename}
      onFilesSelected={(files) => upload(files[0])}
      onRemove={() => setState("empty")}
      onRetry={() => upload(/* the same file again */)}
    />
  );
}
`})}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"FileUpload"})," is fully controlled, same philosophy as everywhere else in this system — it never tracks its own upload progress or outcome. ",e.jsx(o.code,{children:"onFilesSelected"})," fires with a real ",e.jsx(o.code,{children:"FileList"})," (browsing and dropping both funnel through it); driving ",e.jsx(o.code,{children:"state"}),"/",e.jsx(o.code,{children:"progress"})," from whatever that upload actually does is on you."]}),`
`,e.jsx(r,{of:n}),`
`,e.jsx(o.h2,{id:"the-two-variants",children:"The two variants"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Dropzone"}),' (default) — a dashed-bordered box you can drag a file onto, with a "Browse" link inside it for the native file picker:']}),`
`,e.jsx(r,{of:n}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Link"}),` — a plain "Browse files" link with no box. Click-to-browse only; there's no visible drop target to drag onto:`]}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(o.h2,{id:"states",children:"States"}),`
`,e.jsxs(o.p,{children:["Pass ",e.jsx(o.code,{children:"state"})," directly for a specific snapshot (useful for testing/Storybook); wire it up from a real upload for actual use."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Loading"}),' — a progress bar plus its own "N%" text, driven by your own ',e.jsx(o.code,{children:"progress"})," (0–100):"]}),`
`,e.jsx(r,{of:h}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Complete"})," — the uploaded ",e.jsx(o.code,{children:"filename"}),", plus a remove button that calls ",e.jsx(o.code,{children:"onRemove"}),":"]}),`
`,e.jsx(r,{of:m}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Error"}),' — a "Try again" link that calls ',e.jsx(o.code,{children:"onRetry"}),". Doesn't reset back to ",e.jsx(o.code,{children:"empty"})," itself — trying again re-enters ",e.jsx(o.code,{children:"loading"})," for the same file, same as the demo below:"]}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(r,{of:j}),`
`,e.jsx(o.h2,{id:"a-real-upload-flow",children:"A real upload flow"}),`
`,e.jsxs(o.p,{children:["Browse or drop a file to see ",e.jsx(o.code,{children:"empty → loading → complete"}),' driven by real (if fake-network) progress, including a version where the first attempt fails and "Try again" retries it:']}),`
`,e.jsx(r,{of:f}),`
`,e.jsx(r,{of:u}),`
`,e.jsx(o.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Drag-and-drop"})," is native HTML5 (",e.jsx(o.code,{children:"dragover"}),"/",e.jsx(o.code,{children:"drop"}),"), the same technique ",e.jsx(o.code,{children:"<DragList>"}),"/the demo app's kanban board already use — not a drag library dependency. Only active for ",e.jsx(o.code,{children:'variant="dropzone"'})," while ",e.jsx(o.code,{children:'state="empty"'}),"; there's nothing to drop onto in any other state or in ",e.jsx(o.code,{children:'variant="link"'}),"."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Browsing"})," (both variants) opens the platform's native file picker via a visually hidden real ",e.jsx(o.code,{children:'<input type="file">'})," — ",e.jsx(o.code,{children:"accept"}),"/",e.jsx(o.code,{children:"multiple"})," are forwarded to it directly."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Dragging over the dropzone"})," highlights its border (",e.jsx(o.code,{children:"--border-brand"}),', the same "actively interacting" color used elsewhere in this system) — not a distinct Figma variant, but a real drop target with zero drag feedback would be broken UX.']}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Not handled"}),": this component doesn't validate file type/size, upload anything itself, or persist between renders — it's a controlled view over whatever upload state you already have."]}),`
`]}),`
`,e.jsx(o.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["The hidden ",e.jsx(o.code,{children:'<input type="file">'}),` is genuinely off-screen, not just invisible-and-overlaid — every visible trigger (the "Browse" link, the dropzone's own drop handler) already has its own real handler, so there's nothing for a stray click to reach on the input itself.`]}),`
`,e.jsxs(o.li,{children:['"Browse" / "Browse files" / "Try again" are real ',e.jsx(o.code,{children:"<button>"}),"s, reachable and operable by keyboard like any other button."]}),`
`,e.jsxs(o.li,{children:["The remove button requires ",e.jsx(o.code,{children:'aria-label="Remove file"'})," (built in, not configurable) since it has no visible label of its own."]}),`
`]}),`
`,e.jsx(o.h2,{id:"props",children:"Props"}),`
`,e.jsxs(o.p,{children:[`| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `,e.jsx(o.code,{children:"variant"})," | ",e.jsx(o.code,{children:'"dropzone" \\| "link"'})," | ",e.jsx(o.code,{children:'"dropzone"'}),` | Bordered drag-and-drop box, or a plain compact link. |
| `,e.jsx(o.code,{children:"state"})," | ",e.jsx(o.code,{children:'"empty" \\| "loading" \\| "complete" \\| "error"'})," | ",e.jsx(o.code,{children:'"empty"'}),` | |
| `,e.jsx(o.code,{children:"progress"})," | ",e.jsx(o.code,{children:"number"})," | ",e.jsx(o.code,{children:"0"})," | ",e.jsx(o.code,{children:"loading"}),` only — 0–100. |
| `,e.jsx(o.code,{children:"filename"})," | ",e.jsx(o.code,{children:"ReactNode"})," | — | ",e.jsx(o.code,{children:"complete"}),` only — the uploaded file's display name. |
| `,e.jsx(o.code,{children:"accept"})," | ",e.jsx(o.code,{children:"string"})," | — | Forwarded to the hidden native ",e.jsx(o.code,{children:'<input type="file">'}),", e.g. ",e.jsx(o.code,{children:'".pdf,.png"'}),`. |
| `,e.jsx(o.code,{children:"multiple"})," | ",e.jsx(o.code,{children:"boolean"})," | ",e.jsx(o.code,{children:"false"}),` | Allow picking/dropping more than one file at once. |
| `,e.jsx(o.code,{children:"disabled"})," | ",e.jsx(o.code,{children:"boolean"})," | ",e.jsx(o.code,{children:"false"}),` | |
| `,e.jsx(o.code,{children:"onFilesSelected"})," | ",e.jsx(o.code,{children:"(files: FileList) => void"}),` | — | Fires with the picked or dropped files — browsing and dropping both funnel through here. |
| `,e.jsx(o.code,{children:"onRemove"})," | ",e.jsx(o.code,{children:"() => void"})," | — | ",e.jsx(o.code,{children:"complete"}),` only — the file's own remove action. |
| `,e.jsx(o.code,{children:"onRetry"})," | ",e.jsx(o.code,{children:"() => void"})," | — | ",e.jsx(o.code,{children:"error"}),` only — the "Try again" action. |
| `,e.jsx(o.code,{children:"className"})," | ",e.jsx(o.code,{children:"string"})," | — | Applied to the root element. |"]})]})}function Ce(i={}){const{wrapper:o}={...s(),...i.components};return o?e.jsx(o,{...i,children:e.jsx(t,{...i})}):t(i)}export{Ce as default};
