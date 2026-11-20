import{j as r}from"./jsx-runtime-BYYWji4R.js";import{_ as o,f as W,ar as z,g as E}from"./DiagramCell-Dfzt8eBQ.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";import"./x-8M16RbwM.js";import"./createLucideIcon-CB-0TapI.js";import"./Icon-BeLLTQTu.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./chevron-down-BvO_IJ5v.js";import"./check-CNzaN5mj.js";import"./triangle-alert-DP5nfbtP.js";import"./info-M8l_MGNq.js";import"./circle-alert-DCWEdet2.js";import"./circle-check-BUQxGn7l.js";import"./arrow-left-B4dQWpr9.js";import"./chevron-up-XKEvZH9m.js";import"./chevron-right-DjmJ9Qh9.js";import"./sparkles-BGkPd9R1.js";import"./file-text-CVBO4J0q.js";import"./circle-plus-BIyj2I_j.js";import"./mic-Cs5li76X.js";import"./arrow-up-B8mFgxMJ.js";import"./panel-left-close-B9h_ChMe.js";import"./panel-left-open-BVQr6B3g.js";import"./log-out-K7g2kBzm.js";import"./arrow-down-SIcAbZDb.js";import"./search-Cpengdub.js";import"./funnel-DlR6VGzI.js";import"./chevron-left-C9vICWy7.js";import"./bell-dJEDpyJq.js";import"./minus-Bc6RCqTY.js";import"./lock-CFXbVHCG.js";import"./pencil-b3GEJP5P.js";import"./grip-horizontal-uiY_vnuU.js";import"./plus-CFQ8fSZr.js";import"./upload-CA1JUWqD.js";import"./file-WFOUBp-_.js";import"./trash-2-CtCsxZDL.js";import"./file-x-BZjeeFtU.js";import"./play-CfSXC4xN.js";import"./pause-Du-skLIo.js";import"./chartShapes-DrAbwZkd.js";import"./settings-5LyT_Gvo.js";import"./users-D7iLkdj0.js";import"./radio-tower-Dv7pE3Ef.js";import"./telescope-B4FvPujs.js";import"./flask-conical-DehMN14T.js";import"./calendar-check-DTO-B1Qq.js";import"./scale-BU7aA_t8.js";import"./calculator-DkYseuOi.js";import"./banknote-arrow-up-C57S1h_Z.js";import"./inbox-CZnJlf16.js";import"./square-centerline-dashed-horizontal-DoWox9pG.js";import"./calendar-DQNx9KZJ.js";import"./undo-2-Dp11aCP9.js";import"./redo-2-C37NZhGB.js";import"./bold-Bwuh95HY.js";import"./italic-frOKtf2Y.js";import"./underline-CE2YM-oQ.js";import"./face-slightly-smiling-D4d6KlNC.js";import"./list-DQczBewf.js";import"./list-ordered-BXAVJb6E.js";import"./quote-aKKpUaQf.js";import"./strikethrough-DjihMOH_.js";import"./remove-formatting-BxX6qIMI.js";import"./circle-x-CN48avIp.js";const d=[{id:"prepare",label:"Prepare",start:"2026-05-29",end:"2026-05-30",assignee:"Michael Thomas"},{id:"record",label:"Record",start:"2026-05-30",end:"2026-05-31",assignee:"Tyrod Taylor"},{id:"reconcile",label:"Reconcile",start:"2026-05-31",end:"2026-06-01",assignee:"Frank Gibson"},{id:"review",label:"Review",start:"2026-06-01",end:"2026-06-02",assignee:"Tony Tiger"},{id:"finalize",label:"Finalize",start:"2026-06-02",end:"2026-06-02",assignee:"Sam Toucan"}],D=["Sync data","Validate completion","Prepare schedules"];function J(e){return D.map((t,s)=>({id:`${e.id}-${s}`,label:t,start:s===2?e.end:e.start,end:s===0?e.start:e.end}))}const _=d.map(e=>({id:e.id,label:e.label,tasks:J(e)})),er={title:"Components/Chart-Gantt",args:{groups:_},argTypes:{groups:{control:!1},thickness:{control:"select",options:["xs","s","m","l","xl"]},groupThickness:{control:"select",options:[void 0,"xs","s","m","l","xl"]},taskThickness:{control:"select",options:[void 0,"xs","s","m","l","xl"]}}},a={render:e=>r.jsx("div",{style:{width:"48rem"},children:r.jsx(o,{...e})})},i={name:"With a milestone column",args:{milestones:[{date:"2026-05-31",label:"Close"}]},render:e=>r.jsx("div",{style:{width:"48rem"},children:r.jsx(o,{...e})})},p={name:"Collapsed groups",args:{defaultCollapsedGroups:["prepare","record"]},render:e=>r.jsx("div",{style:{width:"48rem"},children:r.jsx(o,{...e})})};function F(e,t,s,c){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-3)",width:"16rem"},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",font:"var(--type-paragraph-s-medium)"},children:[r.jsx("span",{children:e}),r.jsxs("span",{style:{color:"var(--content-positive)"},children:[t," of ",s," tasks complete"]})]}),r.jsx(z,{value:t/s*100,mode:"positive",showValue:!1}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-2)"},children:[r.jsx(E,{children:c.map(u=>r.jsx(W,{name:u,size:"sm"},u))}),r.jsx("span",{style:{font:"var(--type-paragraph-s-regular)",color:"var(--content-link-default)"},children:c.join(", ")})]})]})}const m={name:"Milestone with a Popover",render:e=>r.jsx("div",{style:{width:"48rem",minHeight:"26rem"},children:r.jsx(o,{...e,milestones:[{date:"2026-05-31",label:"Close",popoverTitle:"Lock & report",popoverContent:F("Jun 1 – Jun 2",1,4,d.map(t=>t.assignee))}]})})};function L(){return d.map(e=>({id:e.assignee,label:e.assignee,icon:r.jsx(W,{name:e.assignee,size:"xs"}),tasks:J(e)}))}const l={name:"Grouped by team (avatars)",parameters:{docs:{source:{type:"code"}}},render:e=>r.jsx("div",{style:{width:"48rem",minHeight:"26rem"},children:r.jsx(o,{...e,groups:L(),milestones:[{date:"2026-05-31",label:"Close"}]})})},n={name:"Parent and child thickness",args:{groupThickness:"l",taskThickness:"s"},render:e=>r.jsx("div",{style:{width:"48rem"},children:r.jsx(o,{...e})})};var h,g,v;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <div style={{
    width: "48rem"
  }}>
      <GanttChart {...args} />
    </div>
}`,...(v=(g=a.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var y,x,k;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "With a milestone column",
  args: {
    milestones: [{
      date: "2026-05-31",
      label: "Close"
    }]
  },
  render: args => <div style={{
    width: "48rem"
  }}>
      <GanttChart {...args} />
    </div>
}`,...(k=(x=i.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var j,C,b;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Collapsed groups",
  args: {
    defaultCollapsedGroups: ["prepare", "record"]
  },
  render: args => <div style={{
    width: "48rem"
  }}>
      <GanttChart {...args} />
    </div>
}`,...(b=(C=p.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var f,T,w;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Milestone with a Popover",
  render: args => <div style={{
    width: "48rem",
    minHeight: "26rem"
  }}>
      <GanttChart {...args} milestones={[{
      date: "2026-05-31",
      label: "Close",
      popoverTitle: "Lock & report",
      popoverContent: completionSummary("Jun 1 – Jun 2", 1, 4, PHASES.map(p => p.assignee))
    }]} />
    </div>
}`,...(w=(T=m.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var S,G,P;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Grouped by team (avatars)",
  // Static source: the JSX source generator recurses into the <Avatar>
  // elements nested in \`groups\` (and their React owner fibers) and blows
  // the call stack.
  parameters: {
    docs: {
      source: {
        type: "code"
      }
    }
  },
  render: args => <div style={{
    width: "48rem",
    minHeight: "26rem"
  }}>
      <GanttChart {...args} groups={groupByTeam()} milestones={[{
      date: "2026-05-31",
      label: "Close"
    }]} />
    </div>
}`,...(P=(G=l.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var A,H,M,B,R;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Parent and child thickness",
  args: {
    groupThickness: "l",
    taskThickness: "s"
  },
  render: args => <div style={{
    width: "48rem"
  }}>
      <GanttChart {...args} />
    </div>
}`,...(M=(H=n.parameters)==null?void 0:H.docs)==null?void 0:M.source},description:{story:"Heavier parent (group) bars over lighter child (task) bars — `groupThickness`\nand `taskThickness` over the shared `thickness`. Shift-click a group's label\nto open or close them all.",...(R=(B=n.parameters)==null?void 0:B.docs)==null?void 0:R.description}}};const rr=["Default","WithMilestone","CollapsedGroups","WithMilestonePopover","GroupedByTeam","ParentAndChildThickness"];export{p as CollapsedGroups,a as Default,l as GroupedByTeam,n as ParentAndChildThickness,i as WithMilestone,m as WithMilestonePopover,rr as __namedExportsOrder,er as default};
