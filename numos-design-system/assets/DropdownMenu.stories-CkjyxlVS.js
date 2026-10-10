import{j as e}from"./jsx-runtime-BYYWji4R.js";import{E as o,I as r,j as t,F as u,G as n,H as V,av as _,q as F,ao as W}from"./DiagramConnector-DY1AhLDR.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";import g from"./user-CssntHaa.js";import h from"./settings-5LyT_Gvo.js";import w from"./log-out-K7g2kBzm.js";import R from"./funnel-DlR6VGzI.js";import H from"./pencil-b3GEJP5P.js";import N from"./copy-m3bsxTJ7.js";import Y from"./trash-2-CtCsxZDL.js";const A={title:"Components/DropdownMenu",component:o,parameters:{layout:"padded"}},m={minHeight:220},i={render:()=>e.jsx("div",{style:m,children:e.jsxs(o,{children:[e.jsx(r,{children:e.jsx(t,{variant:"secondary",children:"Open menu"})}),e.jsxs(u,{children:[e.jsx(n,{leadingIcon:e.jsx(g,{size:16}),children:"Profile"}),e.jsx(n,{leadingIcon:e.jsx(h,{size:16}),children:"Settings"}),e.jsx(n,{leadingIcon:e.jsx(w,{size:16}),children:"Log out"})]})]})})},s={render:()=>e.jsx("div",{style:m,children:e.jsxs(o,{defaultOpen:!0,children:[e.jsx(r,{children:e.jsx(t,{variant:"secondary",children:"Open menu"})}),e.jsxs(u,{children:[e.jsx(n,{leadingIcon:e.jsx(g,{size:16}),children:"Profile"}),e.jsx(n,{leadingIcon:e.jsx(h,{size:16}),children:"Settings"}),e.jsx(n,{leadingIcon:e.jsx(w,{size:16}),children:"Log out"})]})]})})},d={render:()=>e.jsx("div",{style:m,children:e.jsxs(o,{defaultOpen:!0,children:[e.jsx(r,{children:e.jsx(t,{variant:"secondary",children:"Row actions"})}),e.jsxs(u,{children:[e.jsx(n,{leadingIcon:e.jsx(H,{size:16}),active:!0,children:"Edit"}),e.jsx(n,{leadingIcon:e.jsx(N,{size:16}),children:"Duplicate"}),e.jsx(n,{leadingIcon:e.jsx(Y,{size:16}),disabled:!0,children:"Delete"})]})]})})},a={name:"DropdownMenuPanel (any input components)",render:()=>e.jsx("div",{style:{minHeight:380},children:e.jsxs(o,{defaultOpen:!0,children:[e.jsx(r,{children:e.jsx(t,{variant:"secondary",leadingIcon:e.jsx(R,{size:16}),children:"Filters"})}),e.jsxs(V,{matchTriggerWidth:!1,style:{width:"20rem"},children:[e.jsx(_,{label:"Name contains",placeholder:"e.g. invoice",size:"md"}),e.jsx(F,{label:"Only overdue",size:"md"}),e.jsx(W,{label:"Minimum amount",defaultValue:40,size:"md"})]})]})})},l={name:"Viewport collision (auto-flip)",render:()=>e.jsxs("div",{style:{minHeight:220},children:[e.jsx("p",{style:{margin:"0 0 1rem",font:"var(--type-paragraph-s-regular)",color:"var(--content-subtle)"},children:"This trigger sits fixed at the bottom-right corner of the preview — its menu automatically opens above and right-aligns instead of running off the edge below/to the right."}),e.jsx("div",{style:{position:"fixed",bottom:16,right:16},children:e.jsxs(o,{defaultOpen:!0,children:[e.jsx(r,{children:e.jsx(t,{variant:"secondary",children:"Corner menu"})}),e.jsxs(u,{children:[e.jsx(n,{leadingIcon:e.jsx(g,{size:16}),children:"Profile"}),e.jsx(n,{leadingIcon:e.jsx(h,{size:16}),children:"Settings"}),e.jsx(n,{leadingIcon:e.jsx(w,{size:16}),children:"Log out"})]})]})})]})},p={render:()=>e.jsx("div",{style:{display:"flex",gap:"var(--space-6)",...m},children:["sm","md","lg"].map(c=>e.jsxs(o,{defaultOpen:!0,size:c,children:[e.jsx(r,{children:e.jsx(t,{variant:"secondary",size:c,children:c})}),e.jsxs(u,{children:[e.jsx(n,{children:"First option"}),e.jsx(n,{children:"Second option"}),e.jsx(n,{children:"Third option"})]})]},c))})};var D,M,x;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={PREVIEW_STYLE}>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="secondary">Open menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem leadingIcon={<User size={16} />}>Profile</DropdownMenuItem>
          <DropdownMenuItem leadingIcon={<Settings size={16} />}>Settings</DropdownMenuItem>
          <DropdownMenuItem leadingIcon={<LogOut size={16} />}>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
}`,...(x=(M=i.parameters)==null?void 0:M.docs)==null?void 0:x.source}}};var j,I,f;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={PREVIEW_STYLE}>
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>
          <Button variant="secondary">Open menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem leadingIcon={<User size={16} />}>Profile</DropdownMenuItem>
          <DropdownMenuItem leadingIcon={<Settings size={16} />}>Settings</DropdownMenuItem>
          <DropdownMenuItem leadingIcon={<LogOut size={16} />}>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
}`,...(f=(I=s.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var v,y,z;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={PREVIEW_STYLE}>
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>
          <Button variant="secondary">Row actions</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem leadingIcon={<Pencil size={16} />} active>Edit</DropdownMenuItem>
          <DropdownMenuItem leadingIcon={<Copy size={16} />}>Duplicate</DropdownMenuItem>
          <DropdownMenuItem leadingIcon={<Trash2 size={16} />} disabled>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
}`,...(z=(y=d.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var S,T,b;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "DropdownMenuPanel (any input components)",
  render: () => <div style={{
    minHeight: 380
  }}>
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>
          <Button variant="secondary" leadingIcon={<Filter size={16} />}>
            Filters
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuPanel matchTriggerWidth={false} style={{
        width: "20rem"
      }}>
          <TextInput label="Name contains" placeholder="e.g. invoice" size="md" />
          <Checkbox label="Only overdue" size="md" />
          <Slider label="Minimum amount" defaultValue={40} size="md" />
        </DropdownMenuPanel>
      </DropdownMenu>
    </div>
}`,...(b=(T=a.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var O,P,C;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "Viewport collision (auto-flip)",
  render: () => <div style={{
    minHeight: 220
  }}>
      <p style={{
      margin: "0 0 1rem",
      font: "var(--type-paragraph-s-regular)",
      color: "var(--content-subtle)"
    }}>
        This trigger sits fixed at the bottom-right corner of the preview — its menu automatically opens above and
        right-aligns instead of running off the edge below/to the right.
      </p>
      <div style={{
      position: "fixed",
      bottom: 16,
      right: 16
    }}>
        <DropdownMenu defaultOpen>
          <DropdownMenuTrigger>
            <Button variant="secondary">Corner menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem leadingIcon={<User size={16} />}>Profile</DropdownMenuItem>
            <DropdownMenuItem leadingIcon={<Settings size={16} />}>Settings</DropdownMenuItem>
            <DropdownMenuItem leadingIcon={<LogOut size={16} />}>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
}`,...(C=(P=l.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var E,B,L;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "var(--space-6)",
    ...PREVIEW_STYLE
  }}>
      {(["sm", "md", "lg"] as const).map(size => <DropdownMenu key={size} defaultOpen size={size}>
          <DropdownMenuTrigger>
            <Button variant="secondary" size={size}>{size}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>First option</DropdownMenuItem>
            <DropdownMenuItem>Second option</DropdownMenuItem>
            <DropdownMenuItem>Third option</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>)}
    </div>
}`,...(L=(B=p.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};const U=["Default","OpenByDefault","WithActiveAndDisabled","FilterPanel","NearViewportCorner","Sizes"],oe=Object.freeze(Object.defineProperty({__proto__:null,Default:i,FilterPanel:a,NearViewportCorner:l,OpenByDefault:s,Sizes:p,WithActiveAndDisabled:d,__namedExportsOrder:U,default:A},Symbol.toStringTag,{value:"Module"}));export{i as D,a as F,l as N,p as S,d as W,oe as a};
