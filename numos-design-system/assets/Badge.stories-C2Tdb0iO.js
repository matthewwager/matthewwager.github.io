import{j as e}from"./jsx-runtime-BYYWji4R.js";import{B as r}from"./DiagramConnector-DY1AhLDR.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";const w={title:"Components/Badge",component:r,argTypes:{status:{control:"select",options:["neutral","positive","negative","notice","info","complete","error"]},size:{control:"select",options:["sm","md","lg"]},children:{control:"text"}},args:{children:"0",status:"neutral",size:"lg"}},a={},t={args:{status:"positive"}},o={args:{status:"negative"}},n={args:{status:"notice"}},c={args:{status:"info"}},i={args:{status:"complete"}},l={args:{status:"error"}},p={render:s=>e.jsxs("div",{style:{display:"flex",gap:"var(--space-3)",alignItems:"center"},children:[e.jsx(r,{...s,size:"sm"}),e.jsx(r,{...s,size:"md"}),e.jsx(r,{...s,size:"lg"})]})},d={name:"Complete/error/notice, lg vs. md",render:()=>e.jsx("div",{style:{display:"flex",gap:"var(--space-5)"},children:["complete","error","notice"].map(s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--space-2)"},children:[e.jsxs("div",{style:{display:"flex",gap:"var(--space-3)",alignItems:"center"},children:[e.jsx(r,{status:s,size:"lg",children:s==="notice"?"!":void 0}),e.jsx(r,{status:s,size:"md"})]}),e.jsx("span",{style:{font:"var(--type-paragraph-xs-regular)",color:"var(--content-subtle)"},children:s})]},s))})};var m,g,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var v,x,y;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    status: "positive"
  }
}`,...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var f,z,S;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    status: "negative"
  }
}`,...(S=(z=o.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var h,j,B;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    status: "notice"
  }
}`,...(B=(j=n.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var I,b,E;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    status: "info"
  }
}`,...(E=(b=c.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var N,C,_;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    status: "complete"
  }
}`,...(_=(C=i.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var P,k,O;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    status: "error"
  }
}`,...(O=(k=l.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var A,D,T;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "var(--space-3)",
    alignItems: "center"
  }}>
      <Badge {...args} size="sm" />
      <Badge {...args} size="md" />
      <Badge {...args} size="lg" />
    </div>
}`,...(T=(D=p.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var M,R,q;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Complete/error/notice, lg vs. md",
  render: () => <div style={{
    display: "flex",
    gap: "var(--space-5)"
  }}>
      {(["complete", "error", "notice"] as const).map(status => <div key={status} style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--space-2)"
    }}>
          <div style={{
        display: "flex",
        gap: "var(--space-3)",
        alignItems: "center"
      }}>
            {/* "notice" has no confirmed icon at "lg" yet — falls back to a
                plain-color pill like any other status, so it needs real
                children here or it'd render empty. */}
            <Badge status={status} size="lg">
              {status === "notice" ? "!" : undefined}
            </Badge>
            <Badge status={status} size="md" />
          </div>
          <span style={{
        font: "var(--type-paragraph-xs-regular)",
        color: "var(--content-subtle)"
      }}>{status}</span>
        </div>)}
    </div>
}`,...(q=(R=d.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};const F=["Neutral","Positive","Negative","Notice","Info","Complete","Error","Sizes","IconAtEachSize"],L=Object.freeze(Object.defineProperty({__proto__:null,Complete:i,Error:l,IconAtEachSize:d,Info:c,Negative:o,Neutral:a,Notice:n,Positive:t,Sizes:p,__namedExportsOrder:F,default:w},Symbol.toStringTag,{value:"Module"}));export{L as B,i as C,l as E,d as I,o as N,t as P,p as S,c as a,a as b,n as c};
