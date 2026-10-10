import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as S}from"./index-ClcD9ViR.js";import{N as i,Q as x,O as y,av as s,P as v,k as f,j as t,al as C,r as k,q as o,ae as w,ad as n,aj as B,ak as l,ax as D}from"./DiagramConnector-DY1AhLDR.js";import"./index-Brl4xq4Y.js";import O from"./x-8M16RbwM.js";const z={title:"Components/Form",component:i,parameters:{layout:"padded"}};function E(){const[d,g]=S.useState(null);function F(m){m.preventDefault();const T=new FormData(m.currentTarget);g(JSON.stringify(Object.fromEntries(T),null,2))}return e.jsxs("div",{style:{width:"22rem"},children:[e.jsxs(i,{onSubmit:F,children:[e.jsx(x,{actions:e.jsx("button",{type:"button","aria-label":"Close",style:{display:"flex",border:"none",background:"none",borderRadius:"var(--radius-full)",padding:"var(--space-1)",color:"var(--content-subtle)",cursor:"pointer"},children:e.jsx(O,{size:16})}),children:"New project"}),e.jsxs(y,{children:[e.jsx(s,{name:"name",label:"Name",size:"md",placeholder:"Q3 roadmap"}),e.jsx(s,{name:"owner",label:"Owner",size:"md",placeholder:"Maya Chen"}),e.jsx(C,{name:"team",label:"Team",size:"md",placeholder:"Select a team",options:[{value:"design",label:"Design"},{value:"engineering",label:"Engineering"},{value:"product",label:"Product"}]}),e.jsxs(k,{label:"Notify",children:[e.jsx(o,{name:"notify",value:"comments",label:"Comments",defaultChecked:!0}),e.jsx(o,{name:"notify",value:"mentions",label:"Mentions",defaultChecked:!0}),e.jsx(o,{name:"notify",value:"digest",label:"Weekly digest"})]}),e.jsxs(w,{name:"visibility",label:"Visibility",defaultValue:"team",children:[e.jsx(n,{value:"private",label:"Private"}),e.jsx(n,{value:"team",label:"Team"}),e.jsx(n,{value:"public",label:"Public"})]}),e.jsxs(B,{name:"priority",defaultValue:"medium",children:[e.jsx(l,{value:"low",children:"Low"}),e.jsx(l,{value:"medium",children:"Medium"}),e.jsx(l,{value:"high",children:"High"})]}),e.jsx(D,{name:"archived",label:"Archive when complete"})]}),e.jsx(v,{secondaryAction:e.jsx(t,{variant:"link",type:"reset",children:"Reset"}),children:e.jsxs(f,{children:[e.jsx(t,{variant:"secondary",type:"button",children:"Cancel"}),e.jsx(t,{variant:"primary",type:"submit",children:"Submit"})]})})]}),d&&e.jsx("pre",{style:{marginTop:"1rem",padding:"1rem",background:"var(--background-element)",borderRadius:"var(--radius-md)",fontSize:"0.75rem",overflow:"auto"},children:d})]})}const r={render:()=>e.jsx(E,{})},a={name:"Title only (no header actions)",render:()=>e.jsx("div",{style:{width:"22rem"},children:e.jsxs(i,{children:[e.jsx(x,{children:"Delete project"}),e.jsxs(y,{children:[e.jsx("p",{style:{margin:0,font:"var(--type-paragraph-m-regular)",color:"var(--content-base)"},children:"This can't be undone. Type the project name to confirm."}),e.jsx(s,{name:"confirm",label:"Project name",size:"md",placeholder:"Q3 roadmap"})]}),e.jsx(v,{children:e.jsxs(f,{children:[e.jsx(t,{variant:"secondary",type:"button",children:"Cancel"}),e.jsx(t,{variant:"destructive",type:"submit",children:"Delete"})]})})]})})};var c,u,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <ExampleForm />
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var h,j,b;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Title only (no header actions)",
  render: () => <div style={{
    width: "22rem"
  }}>
      <Form>
        <FormHeader>Delete project</FormHeader>
        <FormBody>
          <p style={{
          margin: 0,
          font: "var(--type-paragraph-m-regular)",
          color: "var(--content-base)"
        }}>
            This can't be undone. Type the project name to confirm.
          </p>
          <TextInput name="confirm" label="Project name" size="md" placeholder="Q3 roadmap" />
        </FormBody>
        <FormFooter>
          <ButtonGroup>
            <Button variant="secondary" type="button">
              Cancel
            </Button>
            <Button variant="destructive" type="submit">
              Delete
            </Button>
          </ButtonGroup>
        </FormFooter>
      </Form>
    </div>
}`,...(b=(j=a.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};const P=["Default","TitleOnly"],M=Object.freeze(Object.defineProperty({__proto__:null,Default:r,TitleOnly:a,__namedExportsOrder:P,default:z},Symbol.toStringTag,{value:"Module"}));export{r as D,M as F,a as T};
