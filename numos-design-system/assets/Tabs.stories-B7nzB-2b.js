import{j as e}from"./jsx-runtime-BYYWji4R.js";import{au as r,ar as i,aq as a,at as I,as as s}from"./DiagramCell-D01BibyM.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";import _ from"./user-CssntHaa.js";import R from"./bell-dJEDpyJq.js";import z from"./settings-5LyT_Gvo.js";const B={title:"Components/Tabs",component:r,parameters:{layout:"padded"}},l={render:()=>e.jsx("div",{style:{width:28*16},children:e.jsxs(r,{defaultValue:"overview",children:[e.jsxs(i,{children:[e.jsx(a,{value:"overview",children:"Overview"}),e.jsx(a,{value:"activity",children:"Activity"}),e.jsx(a,{value:"settings",children:"Settings"})]}),e.jsx(s,{value:"overview",children:"A summary of what's happened recently."}),e.jsx(s,{value:"activity",children:"A chronological feed of every change."}),e.jsx(s,{value:"settings",children:"Preferences for this workspace."})]})})},t={render:()=>e.jsx("div",{style:{width:28*16},children:e.jsxs(r,{orientation:"vertical",defaultValue:"profile",children:[e.jsxs(i,{style:{minWidth:8*16},children:[e.jsx(a,{value:"profile",leadingIcon:e.jsx(_,{size:16}),children:"Profile"}),e.jsx(a,{value:"notifications",leadingIcon:e.jsx(R,{size:16}),children:"Notifications"}),e.jsx(a,{value:"settings",leadingIcon:e.jsx(z,{size:16}),children:"Settings"})]}),e.jsx(s,{value:"profile",style:{flex:1,minWidth:0},children:"Name, photo, and bio."}),e.jsx(s,{value:"notifications",style:{flex:1,minWidth:0},children:"Choose what you get emailed about."}),e.jsx(s,{value:"settings",style:{flex:1,minWidth:0},children:"Preferences for this workspace."})]})})},o={name:'Vertical, align="end"',render:()=>e.jsxs("div",{style:{display:"flex",width:32*16},children:[e.jsx(r,{orientation:"vertical",defaultValue:"general",children:e.jsxs(i,{align:"end",style:{width:9*16,flexShrink:0},children:[e.jsx(a,{value:"general",children:"General"}),e.jsx(a,{value:"notifications",children:"Notifications"}),e.jsx(a,{value:"access",children:"Access"})]})}),e.jsx("div",{style:{flex:1,minWidth:0,marginLeft:1.5*16,padding:1*16,borderRadius:"var(--radius-md)",background:"var(--background-default)",boxShadow:"var(--shadow-l1)",font:"var(--type-paragraph-s-regular)",color:"var(--content-base)"},children:"A category list sitting to the left of the panel it describes, pointing inward at it — the same shape a Settings page's own category list uses beside its detail pane."})]})},d={render:()=>e.jsx("div",{style:{width:28*16},children:e.jsxs(r,{defaultValue:"inbox",children:[e.jsxs(i,{children:[e.jsx(a,{value:"inbox",badge:12,children:"Inbox"}),e.jsx(a,{value:"sent",children:"Sent"}),e.jsx(a,{value:"drafts",badge:3,children:"Drafts"})]}),e.jsx(s,{value:"inbox",children:"12 unread messages."}),e.jsx(s,{value:"sent",children:"Messages you've sent."}),e.jsx(s,{value:"drafts",children:"3 unfinished messages."})]})})},c={render:()=>e.jsx("div",{style:{width:28*16},children:e.jsxs(r,{defaultValue:"overview",children:[e.jsxs(i,{children:[e.jsx(a,{value:"overview",children:"Overview"}),e.jsx(a,{value:"billing",disabled:!0,children:"Billing"}),e.jsx(a,{value:"settings",children:"Settings"})]}),e.jsx(s,{value:"overview",children:"A summary of what's happened recently."}),e.jsx(s,{value:"billing",children:"Not shown — this tab is disabled."}),e.jsx(s,{value:"settings",children:"Preferences for this workspace."})]})})},u={name:"Overflow (scrolls, doesn't wrap)",render:()=>e.jsx("div",{style:{width:20*16,border:"1px dashed var(--border-subtle)",padding:"0.5rem"},children:e.jsx(r,{defaultValue:"confidence",children:e.jsxs(i,{children:[e.jsx(a,{value:"confidence",children:"Confidence"}),e.jsx(a,{value:"journal",children:"Journal Entry"}),e.jsx(a,{value:"history",children:"History"}),e.jsx(a,{value:"evidence",children:"Evidence"}),e.jsx(a,{value:"collaborate",badge:2,children:"Collaborate"})]})})})},h=[{value:"summary",title:"Summary",lines:3},{value:"processing",title:"Processing",lines:5},{value:"documents",title:"Documents",lines:8},{value:"history",title:"History",lines:2}],v={name:"As anchors",render:()=>e.jsxs(r,{anchors:!0,defaultValue:"summary",children:[e.jsx(i,{children:h.map(n=>e.jsx(a,{value:n.value,children:n.title},n.value))}),e.jsx(I,{style:{height:"18rem",display:"flex",flexDirection:"column",gap:"var(--space-6)",padding:"var(--space-4)",background:"var(--background-secondary)",borderRadius:"var(--radius-md)"},children:h.map(n=>e.jsxs(s,{value:n.value,style:{display:"flex",flexDirection:"column",gap:"var(--space-2)"},children:[e.jsx("h3",{style:{margin:0,font:"var(--type-heading-s)",color:"var(--content-emphasis)"},children:n.title}),Array.from({length:n.lines},(M,b)=>e.jsxs("p",{style:{margin:0,font:"var(--type-paragraph-s-regular)",color:"var(--content-base)"},children:[n.title," detail line ",b+1,"."]},b))]},n.value))})]})};var p,g,m;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(g=l.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var f,T,x;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(T=t.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var y,j,w;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(w=(j=o.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var P,S,A;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(A=(S=d.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var V,k,L;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(L=(k=c.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var N,O,C;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(C=(O=u.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var W,D,E;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "As anchors",
  render: () => <Tabs anchors defaultValue="summary">
      <TabList>
        {ANCHOR_SECTIONS.map(section => <Tab key={section.value} value={section.value}>
            {section.title}
          </Tab>)}
      </TabList>
      <TabScrollArea style={{
      height: "18rem",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)",
      padding: "var(--space-4)",
      background: "var(--background-secondary)",
      borderRadius: "var(--radius-md)"
    }}>
        {ANCHOR_SECTIONS.map(section => <TabPanel key={section.value} value={section.value} style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-2)"
      }}>
            <h3 style={{
          margin: 0,
          font: "var(--type-heading-s)",
          color: "var(--content-emphasis)"
        }}>{section.title}</h3>
            {Array.from({
          length: section.lines
        }, (_, i) => <p key={i} style={{
          margin: 0,
          font: "var(--type-paragraph-s-regular)",
          color: "var(--content-base)"
        }}>
                {section.title} detail line {i + 1}.
              </p>)}
          </TabPanel>)}
      </TabScrollArea>
    </Tabs>
}`,...(E=(D=v.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const H=["Default","Vertical","VerticalAlignEnd","WithBadge","DisabledTab","NarrowOverflow","AsAnchors"],X=Object.freeze(Object.defineProperty({__proto__:null,AsAnchors:v,Default:l,DisabledTab:c,NarrowOverflow:u,Vertical:t,VerticalAlignEnd:o,WithBadge:d,__namedExportsOrder:H,default:B},Symbol.toStringTag,{value:"Module"}));export{v as A,l as D,u as N,X as T,t as V,d as W,c as a,o as b};
