import{j as e}from"./jsx-runtime-BYYWji4R.js";import{a8 as c,a6 as r,a5 as n,a7 as d,G as i}from"./DiagramConnector-DY1AhLDR.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";import l from"./square-check-big-D0--LuaP.js";import v from"./credit-card-eje3g-yY.js";import m from"./receipt-STmIF1Op.js";import u from"./bell-dJEDpyJq.js";import W from"./settings-5LyT_Gvo.js";import C from"./log-out-K7g2kBzm.js";import D from"./lightbulb-CPIyNY1X.js";import f from"./activity-DoVuY_Pe.js";import E from"./chart-column-CZtiMpn9.js";import R from"./message-circle-IvCFfBmD.js";import P from"./mail-WW_jGw0C.js";import T from"./workflow-DuG2DCt7.js";const y={title:"Components/Navigation",component:c,parameters:{layout:"padded"}},h={height:"40rem"},a={render:()=>e.jsx("div",{style:h,children:e.jsxs(c,{children:[e.jsxs(r,{grow:!0,children:[e.jsx(n,{icon:e.jsx(l,{size:24}),href:"#tasks",children:"Tasks"}),e.jsx(n,{icon:e.jsx(v,{size:24}),href:"#reconciliations",children:"Reconciliations"}),e.jsx(n,{icon:e.jsx(D,{size:24}),href:"#transactions",children:"Transactions"}),e.jsx(n,{icon:e.jsx(m,{size:24}),href:"#accruals",selected:!0,children:"Accruals"}),e.jsx(n,{icon:e.jsx(f,{size:24}),href:"#variance",children:"Variance"}),e.jsx(n,{icon:e.jsx(E,{size:24}),href:"#reports",children:"Reports"}),e.jsx(n,{icon:e.jsx(R,{size:24}),href:"#chat",children:"Chat"}),e.jsx(n,{icon:e.jsx(P,{size:24}),href:"#helpdesk",children:"Helpdesk"}),e.jsx(n,{icon:e.jsx(T,{size:24}),href:"#workflows",children:"Workflows"})]}),e.jsxs(r,{children:[e.jsxs(d,{name:"Matthew Wager",children:[e.jsx(i,{children:"Profile"}),e.jsx(i,{children:"Preferences"}),e.jsx(i,{children:"Sign out"})]}),e.jsx(n,{icon:e.jsx(u,{size:24}),children:"Notifications"}),e.jsx(n,{icon:e.jsx(W,{size:24}),children:"Settings"}),e.jsx(n,{icon:e.jsx(C,{size:24}),children:"Sign Out"})]})]})})},s={render:()=>e.jsx("div",{style:h,children:e.jsxs(c,{defaultExpanded:!1,children:[e.jsxs(r,{grow:!0,children:[e.jsx(n,{icon:e.jsx(l,{size:24}),href:"#tasks",children:"Tasks"}),e.jsx(n,{icon:e.jsx(v,{size:24}),href:"#reconciliations",children:"Reconciliations"}),e.jsx(n,{icon:e.jsx(m,{size:24}),href:"#accruals",selected:!0,badge:"1d",children:"Accruals"})]}),e.jsxs(r,{children:[e.jsxs(d,{name:"Matthew Wager",children:[e.jsx(i,{children:"Profile"}),e.jsx(i,{children:"Preferences"}),e.jsx(i,{children:"Sign out"})]}),e.jsx(n,{icon:e.jsx(u,{size:24}),badge:2,badgeStatus:"info",children:"Notifications"}),e.jsx(n,{icon:e.jsx(W,{size:24}),children:"Settings"}),e.jsx(n,{icon:e.jsx(C,{size:24}),children:"Sign Out"})]})]})})},t={name:"With badges",render:()=>e.jsx("div",{style:h,children:e.jsxs(c,{children:[e.jsxs(r,{grow:!0,children:[e.jsx(n,{icon:e.jsx(l,{size:24}),href:"#tasks",children:"Tasks"}),e.jsx(n,{icon:e.jsx(m,{size:24}),href:"#accruals",selected:!0,badge:"5d",badgeStatus:"info",children:"Accruals"}),e.jsx(n,{icon:e.jsx(v,{size:24}),href:"#reconciliations",badge:"3d",badgeStatus:"notice",children:"Reconciliations"}),e.jsx(n,{icon:e.jsx(f,{size:24}),href:"#variance",badge:"1d",children:"Variance"})]}),e.jsxs(r,{children:[e.jsxs(d,{name:"Matthew Wager",children:[e.jsx(i,{children:"Profile"}),e.jsx(i,{children:"Sign out"})]}),e.jsx(n,{icon:e.jsx(u,{size:24}),badge:2,children:"Notifications"})]})]})})},o={name:"With an expandable group",render:()=>e.jsx("div",{style:h,children:e.jsxs(c,{children:[e.jsxs(r,{grow:!0,children:[e.jsx(n,{icon:e.jsx(l,{size:24}),href:"#tasks",children:"Tasks"}),e.jsx(n,{icon:e.jsx(m,{size:24}),defaultOpen:!0,items:[{label:"Recurring",href:"#recurring",active:!0},{label:"One-time",href:"#one-time"},{label:"Templates",href:"#templates"},{label:"Archived",href:"#archived"}],children:"Accruals"}),e.jsx(n,{icon:e.jsx(f,{size:24}),href:"#variance",children:"Variance"})]}),e.jsx(r,{children:e.jsxs(d,{name:"Matthew Wager",children:[e.jsx(i,{children:"Profile"}),e.jsx(i,{children:"Sign out"})]})})]})})};var N,g,p;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={PREVIEW_STYLE}>
      <Navigation>
        <NavSection grow>
          <NavItem icon={<SquareCheckBig size={24} />} href="#tasks">
            Tasks
          </NavItem>
          <NavItem icon={<CreditCard size={24} />} href="#reconciliations">
            Reconciliations
          </NavItem>
          <NavItem icon={<Lightbulb size={24} />} href="#transactions">
            Transactions
          </NavItem>
          <NavItem icon={<Receipt size={24} />} href="#accruals" selected>
            Accruals
          </NavItem>
          <NavItem icon={<Activity size={24} />} href="#variance">
            Variance
          </NavItem>
          <NavItem icon={<ChartColumn size={24} />} href="#reports">
            Reports
          </NavItem>
          <NavItem icon={<MessageCircle size={24} />} href="#chat">
            Chat
          </NavItem>
          <NavItem icon={<Mail size={24} />} href="#helpdesk">
            Helpdesk
          </NavItem>
          <NavItem icon={<Workflow size={24} />} href="#workflows">
            Workflows
          </NavItem>
        </NavSection>
        <NavSection>
          <NavUser name="Matthew Wager">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Preferences</DropdownMenuItem>
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </NavUser>
          <NavItem icon={<Bell size={24} />}>Notifications</NavItem>
          <NavItem icon={<Settings size={24} />}>Settings</NavItem>
          <NavItem icon={<LogOut size={24} />}>Sign Out</NavItem>
        </NavSection>
      </Navigation>
    </div>
}`,...(p=(g=a.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var x,j,I;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={PREVIEW_STYLE}>
      <Navigation defaultExpanded={false}>
        <NavSection grow>
          <NavItem icon={<SquareCheckBig size={24} />} href="#tasks">
            Tasks
          </NavItem>
          <NavItem icon={<CreditCard size={24} />} href="#reconciliations">
            Reconciliations
          </NavItem>
          <NavItem icon={<Receipt size={24} />} href="#accruals" selected badge="1d">
            Accruals
          </NavItem>
        </NavSection>
        <NavSection>
          <NavUser name="Matthew Wager">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Preferences</DropdownMenuItem>
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </NavUser>
          <NavItem icon={<Bell size={24} />} badge={2} badgeStatus="info">
            Notifications
          </NavItem>
          <NavItem icon={<Settings size={24} />}>Settings</NavItem>
          <NavItem icon={<LogOut size={24} />}>Sign Out</NavItem>
        </NavSection>
      </Navigation>
    </div>
}`,...(I=(j=s.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var S,z,w;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "With badges",
  render: () => <div style={PREVIEW_STYLE}>
      <Navigation>
        <NavSection grow>
          <NavItem icon={<SquareCheckBig size={24} />} href="#tasks">
            Tasks
          </NavItem>
          <NavItem icon={<Receipt size={24} />} href="#accruals" selected badge="5d" badgeStatus="info">
            Accruals
          </NavItem>
          <NavItem icon={<CreditCard size={24} />} href="#reconciliations" badge="3d" badgeStatus="notice">
            Reconciliations
          </NavItem>
          <NavItem icon={<Activity size={24} />} href="#variance" badge="1d">
            Variance
          </NavItem>
        </NavSection>
        <NavSection>
          <NavUser name="Matthew Wager">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </NavUser>
          <NavItem icon={<Bell size={24} />} badge={2}>
            Notifications
          </NavItem>
        </NavSection>
      </Navigation>
    </div>
}`,...(w=(z=t.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var b,M,k;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "With an expandable group",
  render: () => <div style={PREVIEW_STYLE}>
      <Navigation>
        <NavSection grow>
          <NavItem icon={<SquareCheckBig size={24} />} href="#tasks">
            Tasks
          </NavItem>
          <NavItem icon={<Receipt size={24} />} defaultOpen items={[{
          label: "Recurring",
          href: "#recurring",
          active: true
        }, {
          label: "One-time",
          href: "#one-time"
        }, {
          label: "Templates",
          href: "#templates"
        }, {
          label: "Archived",
          href: "#archived"
        }]}>
            Accruals
          </NavItem>
          <NavItem icon={<Activity size={24} />} href="#variance">
            Variance
          </NavItem>
        </NavSection>
        <NavSection>
          <NavUser name="Matthew Wager">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </NavUser>
        </NavSection>
      </Navigation>
    </div>
}`,...(k=(M=o.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};const A=["Default","Collapsed","WithBadges","WithExpandableGroup"],$=Object.freeze(Object.defineProperty({__proto__:null,Collapsed:s,Default:a,WithBadges:t,WithExpandableGroup:o,__namedExportsOrder:A,default:y},Symbol.toStringTag,{value:"Module"}));export{s as C,a as D,$ as N,t as W,o as a};
