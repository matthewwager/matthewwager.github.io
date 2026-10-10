import{j as e}from"./jsx-runtime-BYYWji4R.js";import{as as i,aq as n,ap as a,ar as s}from"./DiagramConnector-DY1AhLDR.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";import W from"./user-CssntHaa.js";import k from"./bell-dJEDpyJq.js";import N from"./settings-5LyT_Gvo.js";const O={title:"Components/Tabs",component:i,parameters:{layout:"padded"}},r={render:()=>e.jsx("div",{style:{width:28*16},children:e.jsxs(i,{defaultValue:"overview",children:[e.jsxs(n,{children:[e.jsx(a,{value:"overview",children:"Overview"}),e.jsx(a,{value:"activity",children:"Activity"}),e.jsx(a,{value:"settings",children:"Settings"})]}),e.jsx(s,{value:"overview",children:"A summary of what's happened recently."}),e.jsx(s,{value:"activity",children:"A chronological feed of every change."}),e.jsx(s,{value:"settings",children:"Preferences for this workspace."})]})})},t={render:()=>e.jsx("div",{style:{width:28*16},children:e.jsxs(i,{orientation:"vertical",defaultValue:"profile",children:[e.jsxs(n,{style:{minWidth:8*16},children:[e.jsx(a,{value:"profile",leadingIcon:e.jsx(W,{size:16}),children:"Profile"}),e.jsx(a,{value:"notifications",leadingIcon:e.jsx(k,{size:16}),children:"Notifications"}),e.jsx(a,{value:"settings",leadingIcon:e.jsx(N,{size:16}),children:"Settings"})]}),e.jsx(s,{value:"profile",style:{flex:1,minWidth:0},children:"Name, photo, and bio."}),e.jsx(s,{value:"notifications",style:{flex:1,minWidth:0},children:"Choose what you get emailed about."}),e.jsx(s,{value:"settings",style:{flex:1,minWidth:0},children:"Preferences for this workspace."})]})})},l={name:'Vertical, align="end"',render:()=>e.jsxs("div",{style:{display:"flex",width:32*16},children:[e.jsx(i,{orientation:"vertical",defaultValue:"general",children:e.jsxs(n,{align:"end",style:{width:9*16,flexShrink:0},children:[e.jsx(a,{value:"general",children:"General"}),e.jsx(a,{value:"notifications",children:"Notifications"}),e.jsx(a,{value:"access",children:"Access"})]})}),e.jsx("div",{style:{flex:1,minWidth:0,marginLeft:1.5*16,padding:1*16,borderRadius:"var(--radius-md)",background:"var(--background-default)",boxShadow:"var(--shadow-l1)",font:"var(--type-paragraph-s-regular)",color:"var(--content-base)"},children:"A category list sitting to the left of the panel it describes, pointing inward at it — the same shape a Settings page's own category list uses beside its detail pane."})]})},o={render:()=>e.jsx("div",{style:{width:28*16},children:e.jsxs(i,{defaultValue:"inbox",children:[e.jsxs(n,{children:[e.jsx(a,{value:"inbox",badge:12,children:"Inbox"}),e.jsx(a,{value:"sent",children:"Sent"}),e.jsx(a,{value:"drafts",badge:3,children:"Drafts"})]}),e.jsx(s,{value:"inbox",children:"12 unread messages."}),e.jsx(s,{value:"sent",children:"Messages you've sent."}),e.jsx(s,{value:"drafts",children:"3 unfinished messages."})]})})},d={render:()=>e.jsx("div",{style:{width:28*16},children:e.jsxs(i,{defaultValue:"overview",children:[e.jsxs(n,{children:[e.jsx(a,{value:"overview",children:"Overview"}),e.jsx(a,{value:"billing",disabled:!0,children:"Billing"}),e.jsx(a,{value:"settings",children:"Settings"})]}),e.jsx(s,{value:"overview",children:"A summary of what's happened recently."}),e.jsx(s,{value:"billing",children:"Not shown — this tab is disabled."}),e.jsx(s,{value:"settings",children:"Preferences for this workspace."})]})})},c={name:"Overflow (scrolls, doesn't wrap)",render:()=>e.jsx("div",{style:{width:20*16,border:"1px dashed var(--border-subtle)",padding:"0.5rem"},children:e.jsx(i,{defaultValue:"confidence",children:e.jsxs(n,{children:[e.jsx(a,{value:"confidence",children:"Confidence"}),e.jsx(a,{value:"journal",children:"Journal Entry"}),e.jsx(a,{value:"history",children:"History"}),e.jsx(a,{value:"evidence",children:"Evidence"}),e.jsx(a,{value:"collaborate",badge:2,children:"Collaborate"})]})})})};var b,v,u;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 28 * 16
  }}>
      <Tabs defaultValue="overview">
        <TabList>
          <Tab value="overview">Overview</Tab>
          <Tab value="activity">Activity</Tab>
          <Tab value="settings">Settings</Tab>
        </TabList>
        <TabPanel value="overview">A summary of what's happened recently.</TabPanel>
        <TabPanel value="activity">A chronological feed of every change.</TabPanel>
        <TabPanel value="settings">Preferences for this workspace.</TabPanel>
      </Tabs>
    </div>
}`,...(u=(v=r.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var h,f,T;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 28 * 16
  }}>
      <Tabs orientation="vertical" defaultValue="profile">
        <TabList style={{
        minWidth: 8 * 16
      }}>
          <Tab value="profile" leadingIcon={<User size={16} />}>
            Profile
          </Tab>
          <Tab value="notifications" leadingIcon={<Bell size={16} />}>
            Notifications
          </Tab>
          <Tab value="settings" leadingIcon={<Settings size={16} />}>
            Settings
          </Tab>
        </TabList>
        <TabPanel value="profile" style={{
        flex: 1,
        minWidth: 0
      }}>
          Name, photo, and bio.
        </TabPanel>
        <TabPanel value="notifications" style={{
        flex: 1,
        minWidth: 0
      }}>
          Choose what you get emailed about.
        </TabPanel>
        <TabPanel value="settings" style={{
        flex: 1,
        minWidth: 0
      }}>
          Preferences for this workspace.
        </TabPanel>
      </Tabs>
    </div>
}`,...(T=(f=t.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var g,p,x;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Vertical, align="end"',
  render: () => <div style={{
    display: "flex",
    width: 32 * 16
  }}>
      <Tabs orientation="vertical" defaultValue="general">
        <TabList align="end" style={{
        width: 9 * 16,
        flexShrink: 0
      }}>
          <Tab value="general">General</Tab>
          <Tab value="notifications">Notifications</Tab>
          <Tab value="access">Access</Tab>
        </TabList>
      </Tabs>
      <div style={{
      flex: 1,
      minWidth: 0,
      marginLeft: 1.5 * 16,
      padding: 1 * 16,
      borderRadius: "var(--radius-md)",
      background: "var(--background-default)",
      boxShadow: "var(--shadow-l1)",
      font: "var(--type-paragraph-s-regular)",
      color: "var(--content-base)"
    }}>
        A category list sitting to the left of the panel it describes, pointing inward at it — the same shape a Settings page's own
        category list uses beside its detail pane.
      </div>
    </div>
}`,...(x=(p=l.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var m,y,j;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 28 * 16
  }}>
      <Tabs defaultValue="inbox">
        <TabList>
          <Tab value="inbox" badge={12}>
            Inbox
          </Tab>
          <Tab value="sent">Sent</Tab>
          <Tab value="drafts" badge={3}>
            Drafts
          </Tab>
        </TabList>
        <TabPanel value="inbox">12 unread messages.</TabPanel>
        <TabPanel value="sent">Messages you've sent.</TabPanel>
        <TabPanel value="drafts">3 unfinished messages.</TabPanel>
      </Tabs>
    </div>
}`,...(j=(y=o.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var w,P,S;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 28 * 16
  }}>
      <Tabs defaultValue="overview">
        <TabList>
          <Tab value="overview">Overview</Tab>
          <Tab value="billing" disabled>
            Billing
          </Tab>
          <Tab value="settings">Settings</Tab>
        </TabList>
        <TabPanel value="overview">A summary of what's happened recently.</TabPanel>
        <TabPanel value="billing">Not shown — this tab is disabled.</TabPanel>
        <TabPanel value="settings">Preferences for this workspace.</TabPanel>
      </Tabs>
    </div>
}`,...(S=(P=d.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var V,L,A;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "Overflow (scrolls, doesn't wrap)",
  render: () => <div style={{
    width: 20 * 16,
    border: "1px dashed var(--border-subtle)",
    padding: "0.5rem"
  }}>
      <Tabs defaultValue="confidence">
        <TabList>
          <Tab value="confidence">Confidence</Tab>
          <Tab value="journal">Journal Entry</Tab>
          <Tab value="history">History</Tab>
          <Tab value="evidence">Evidence</Tab>
          <Tab value="collaborate" badge={2}>
            Collaborate
          </Tab>
        </TabList>
      </Tabs>
    </div>
}`,...(A=(L=c.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};const E=["Default","Vertical","VerticalAlignEnd","WithBadge","DisabledTab","NarrowOverflow"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:r,DisabledTab:d,NarrowOverflow:c,Vertical:t,VerticalAlignEnd:l,WithBadge:o,__namedExportsOrder:E,default:O},Symbol.toStringTag,{value:"Module"}));export{r as D,c as N,R as T,t as V,o as W,d as a,l as b};
