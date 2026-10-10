import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as a}from"./index-ClcD9ViR.js";import{M as k}from"./DiagramConnector-DY1AhLDR.js";import"./index-Brl4xq4Y.js";const de={title:"Components/FileUpload",component:k,argTypes:{variant:{control:"select",options:["dropzone","link"]},state:{control:"select",options:["empty","loading","complete","error"]},progress:{control:{type:"range",min:0,max:100}},filename:{control:"text"},disabled:{control:"boolean"}},args:{variant:"dropzone",state:"empty"}},s={},o={name:"Empty (link variant)",args:{variant:"link"}},i={args:{state:"loading",progress:65}},l={name:"Loading (link variant)",args:{variant:"link",state:"loading",progress:40}},p={args:{state:"complete",filename:"invoice-march.pdf"}},c={name:"Complete (link variant)",args:{variant:"link",state:"complete",filename:"invoice-march.pdf"}},m={args:{state:"error"}},d={name:"Error (link variant)",args:{variant:"link",state:"error"}},u={args:{disabled:!0}},g={name:"Every state, both variants",render:()=>{const y=["empty","loading","complete","error"];return e.jsxs("div",{style:{display:"flex",gap:"var(--space-6)"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-4)",alignItems:"flex-start"},children:[e.jsx("p",{style:{margin:0,font:"var(--type-paragraph-s-medium)",color:"var(--content-subtle)"},children:"Dropzone"}),y.map(r=>e.jsx(k,{variant:"dropzone",state:r,progress:65,filename:"invoice-march.pdf"},r))]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-4)",alignItems:"flex-start"},children:[e.jsx("p",{style:{margin:0,font:"var(--type-paragraph-s-medium)",color:"var(--content-subtle)"},children:"Link"}),y.map(r=>e.jsx(k,{variant:"link",state:r,progress:65,filename:"invoice-march.pdf"},r))]})]})}};function pe({variant:y="dropzone",failFirst:r=!1}){const[S,x]=a.useState("empty"),[ce,E]=a.useState(0),[b,F]=a.useState(""),L=a.useRef(!1),h=a.useRef();function U(t){F(t),x("loading"),E(0)}a.useEffect(()=>{if(S==="loading")return h.current=setInterval(()=>{E(t=>{const n=t+20;return n>=100?(clearInterval(h.current),r&&!L.current?(L.current=!0,x("error")):x("complete"),100):n})},300),()=>clearInterval(h.current)},[S,r]);function me(t){var n;U(((n=t[0])==null?void 0:n.name)??"file")}return e.jsx(k,{variant:y,state:S,progress:ce,filename:b,onFilesSelected:me,onRemove:()=>{x("empty"),F("")},onRetry:()=>U(b)})}const f={name:"A real upload flow (browse or drop a file)",render:()=>e.jsx(pe,{})},v={name:"Upload flow, first attempt fails",render:()=>e.jsx(pe,{failFirst:!0})};var j,D,w;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(w=(D=s.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var z,C,I;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Empty (link variant)",
  args: {
    variant: "link"
  }
}`,...(I=(C=o.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var R,_,A;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    state: "loading",
    progress: 65
  }
}`,...(A=(_=i.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var O,M,P;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "Loading (link variant)",
  args: {
    variant: "link",
    state: "loading",
    progress: 40
  }
}`,...(P=(M=l.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var T,W,q;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    state: "complete",
    filename: "invoice-march.pdf"
  }
}`,...(q=(W=p.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var B,G,H;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Complete (link variant)",
  args: {
    variant: "link",
    state: "complete",
    filename: "invoice-march.pdf"
  }
}`,...(H=(G=c.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,N;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    state: "error"
  }
}`,...(N=(K=m.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var Q,V,X;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "Error (link variant)",
  args: {
    variant: "link",
    state: "error"
  }
}`,...(X=(V=d.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Y,Z,$;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...($=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ae;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: "Every state, both variants",
  render: () => {
    const states: FileUploadState[] = ["empty", "loading", "complete", "error"];
    return <div style={{
      display: "flex",
      gap: "var(--space-6)"
    }}>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)",
        alignItems: "flex-start"
      }}>
          <p style={{
          margin: 0,
          font: "var(--type-paragraph-s-medium)",
          color: "var(--content-subtle)"
        }}>Dropzone</p>
          {states.map(state => <FileUpload key={state} variant="dropzone" state={state} progress={65} filename="invoice-march.pdf" />)}
        </div>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)",
        alignItems: "flex-start"
      }}>
          <p style={{
          margin: 0,
          font: "var(--type-paragraph-s-medium)",
          color: "var(--content-subtle)"
        }}>Link</p>
          {states.map(state => <FileUpload key={state} variant="link" state={state} progress={65} filename="invoice-march.pdf" />)}
        </div>
      </div>;
  }
}`,...(ae=(re=g.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var te,ne,se;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: "A real upload flow (browse or drop a file)",
  render: () => <UploadDemo />
}`,...(se=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var oe,ie,le;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: "Upload flow, first attempt fails",
  render: () => <UploadDemo failFirst />
}`,...(le=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};const ue=["Empty","EmptyLink","Loading","LoadingLink","Complete","CompleteLink","Error","ErrorLink","Disabled","AllStates","UploadFlow","UploadFlowWithFailure"],xe=Object.freeze(Object.defineProperty({__proto__:null,AllStates:g,Complete:p,CompleteLink:c,Disabled:u,Empty:s,EmptyLink:o,Error:m,ErrorLink:d,Loading:i,LoadingLink:l,UploadFlow:f,UploadFlowWithFailure:v,__namedExportsOrder:ue,default:de},Symbol.toStringTag,{value:"Module"}));export{g as A,p as C,s as E,xe as F,i as L,f as U,o as a,m as b,v as c};
