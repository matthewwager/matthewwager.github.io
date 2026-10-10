import{j as o}from"./jsx-runtime-BYYWji4R.js";import{d as N}from"./DiagramConnector-DY1AhLDR.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";const L="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAAEHElEQVR42u3R5VaVURSF4XVVIiaKXSgWjYIiXQcOdne30pLSKZ0G2NgdKIrehmvvs7/hJcw/c4z3Cp5XZqQWutIKg7R0rSgoo2imlmnLKgrOKg7OtuUUz9JytZJZvpLZWp4tv3SO5rcVlM7VdpaZdpXN03ab5u8pN+01hezTboXsNy04YDuoVSw8ZDtsCj2iVYYeNS06ZjtepS0+YTtpWnKqOtDS07YzWs2ys7ZzpuXna00XTCsu2i7d1lZetl0xrbpaZ7pmWn3ddqNeW3PTVlgfVtgQVmQrblirlWiNa0sb12lltvLG8PKm8Fu2iqb1WmWzqap5g1Ztq2nZqNXabrds0upaNaE+UH9zfWAA9UH6dgD1cfpmAPWB+psb2oT6QP0IO4D6MP2IRh1AfZy+GUB9oH5Ekw6gPk4/0g2gPkg/srldqA/UNwOoD9SPbNEB1MfpR7kB1AfpR7XqAOrj9M0A6gP1o9o6hPpA/Wg7gPow/eh2HUB9nL4ZQH2gfnSHDqA+Tj+mo1OoD9SP6dQB1MfpmwHUB+rH3NEB1Mfpx7oB1Afpx3bpAOrj9GO77gj1gfqx3TqA+jj9ODeA+iD9uB4dQH2cvhlAfaB+XK8OoD5OP763S6gP1I/v6xLqA/W9AdQH6W/p1wHUx+m7AdRH6W8Z6BbqA/UDA6gP0986qAOoj9N3A6iP0t861C3UB+p7A6gP0k8Y7hHqA/UDA6gP008Y6RHqA/W9AdQH6SeO6gDq4/TdAOqj9BPv9gr1gfqBAdSH6W+7pwOoj9N3A6iP0t92v1eoD9T3BlAfpL/9QZ9QH6jvBlAfpb99rE+oD9T3BlAfpJ80rgOoj9NPGu8X6gP1kx72C/WB+v8HUB+iv+ORHUB9lL4ZQH2gvjeA+iD95McDQn2gfmAA9WH6yU8GhPpAfW8A9UH6KU91APVx+m4A9VH6Kc8GhfpAfW8A9UH6qc91APVx+m4A9VH6qRODQn2gfurEkFAfqJ/2QgdQH6fvBlAfpZ/2ckioD9T3BlAfpJ/+SgdQH6ef/mpYqA/UT389LNQH6nsDqA/Sz3ijA6iP03cDqI/Sz3g7LNQH6me8HRHqA/Uz3+kA6uP03QDqo/Qz348I9YH63gDqg/SzPowK9YH6ZgD1gfpZH3UA9XH62W4A9UH62Z90APVx+mYA9YH62Z/vCvWB+jl2APVh+jlfdAD1cfpmAPWB+jlfdQD1cfq5bgD1Qfq53+4J9YH6ZgD1gfq533UA9XH6PjeA+iB936QOoD5O3zd5X6gP1Pf90AHUx+nnuQHUB+nn/dQB1MfpmwHUB+rnTekA6uP086ceCPWB+vm/dAD1cfpmAPWB+vm/dQD1cfp+N4D6IH3/tA6gPk7fPz0m1Afq+//oAOrj9AsCA6iP0i/4O/YPiOxLhrfu0ggAAAAASUVORK5CYII=",X="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3crect%20width='64'%20height='64'%20fill='%2313324F'%20/%3e%3cpath%20d='M32%2012%20L50%2022%20V42%20L32%2052%20L14%2042%20V22%20Z'%20fill='%2378E8C6'%20/%3e%3ccircle%20cx='32'%20cy='32'%20r='8'%20fill='%2313324F'%20/%3e%3c/svg%3e";function g({image:e,type:a,...w}){const T=e?a==="entity"?X:L:void 0;return o.jsx(N,{...w,type:a,src:T})}const Y={title:"Components/Avatar",component:g,argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"]},type:{control:"select",options:["person","entity"]},color:{control:"select",options:["info","positive","notice","negative","neutral","alt-negative"]},name:{control:"text"},initials:{control:"text"},tooltip:{description:"Shows `name` (or `initials`) in a tooltip on hover. On by default.",control:"boolean"},image:{name:"Image",description:"Storybook-only — fills `src` with an example asset (PNG for person, SVG logo for entity).",control:"boolean"}},args:{name:"Maya Chen",size:"md",type:"person",color:"info",tooltip:!0,image:!1}},r={},t={args:{type:"entity",name:"Acme Corp"}},s={args:{image:!0}},n={args:{type:"entity",name:"Acme Corp",image:!0}},i={name:"Broken image (falls back to initial)",render:e=>o.jsx(N,{name:e.name,size:e.size,type:e.type,color:e.color,tooltip:e.tooltip,src:"/this-image-does-not-exist.jpg"})},p={args:{name:void 0,initials:"Z"}},c={name:"tooltip={false}",args:{tooltip:!1}},l={render:e=>o.jsx("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-3)"},children:["xs","sm","md","lg","xl"].map(a=>o.jsx(g,{...e,size:a},a))})},m={render:e=>o.jsx("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-3)"},children:["info","positive","notice","negative","neutral","alt-negative"].map(a=>o.jsx(g,{...e,color:a},a))})};var A,d,f;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:"{}",...(f=(d=r.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var u,v,P;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    type: "entity",
    name: "Acme Corp"
  }
}`,...(P=(v=t.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var y,H,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    image: true
  }
}`,...(x=(H=s.parameters)==null?void 0:H.docs)==null?void 0:x.source}}};var B,S,D;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    type: "entity",
    name: "Acme Corp",
    image: true
  }
}`,...(D=(S=n.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var j,q,O;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Broken image (falls back to initial)",
  render: args => <Avatar name={args.name} size={args.size} type={args.type} color={args.color} tooltip={args.tooltip} src="/this-image-does-not-exist.jpg" />
}`,...(O=(q=i.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var W,h,U;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    name: undefined,
    initials: "Z"
  }
}`,...(U=(h=p.parameters)==null?void 0:h.docs)==null?void 0:U.source}}};var Q,Z,b;c.parameters={...c.parameters,docs:{...(Q=c.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "tooltip={false}",
  args: {
    tooltip: false
  }
}`,...(b=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:b.source}}};var z,I,V;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "var(--space-3)"
  }}>
      {(["xs", "sm", "md", "lg", "xl"] as const).map(size => <AvatarPlayground key={size} {...args} size={size} />)}
    </div>
}`,...(V=(I=l.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var C,k,E;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "var(--space-3)"
  }}>
      {(["info", "positive", "notice", "negative", "neutral", "alt-negative"] as const).map(color => <AvatarPlayground key={color} {...args} color={color} />)}
    </div>
}`,...(E=(k=m.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const R=["Default","Entity","WithImage","EntityWithLogo","BrokenImage","ExplicitInitials","TooltipDisabled","Sizes","Colors"],_=Object.freeze(Object.defineProperty({__proto__:null,BrokenImage:i,Colors:m,Default:r,Entity:t,EntityWithLogo:n,ExplicitInitials:p,Sizes:l,TooltipDisabled:c,WithImage:s,__namedExportsOrder:R,default:Y},Symbol.toStringTag,{value:"Module"}));export{_ as A,i as B,m as C,t as E,l as S,c as T,s as W,n as a,p as b};
