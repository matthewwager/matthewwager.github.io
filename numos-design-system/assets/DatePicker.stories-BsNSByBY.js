import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as y}from"./index-ClcD9ViR.js";import{t as d,E as S,I as M,av as b,H as T}from"./DiagramConnector-DY1AhLDR.js";import"./index-Brl4xq4Y.js";import A from"./calendar-DQNx9KZJ.js";const I={title:"Components/DatePicker",component:d,parameters:{layout:"padded"}},o=new Date(2026,0,11),t={render:()=>e.jsx(d,{defaultMonth:o,defaultValue:o})},r={name:'mode="range"',render:()=>e.jsx(d,{mode:"range",defaultMonth:o,defaultRangeValue:{start:new Date(2026,0,11),end:new Date(2026,0,16)}})},n={name:"isDateDisabled (weekends)",render:()=>e.jsx(d,{defaultMonth:o,isDateDisabled:a=>a.getDay()===0||a.getDay()===6})},O=new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",year:"numeric"});function k(){const[a,j]=y.useState(o);return e.jsxs(S,{children:[e.jsx(M,{children:e.jsx(b,{readOnly:!0,size:"md",label:"Due date",value:a?O.format(a):"",placeholder:"Select a date",trailingIcon:e.jsx(A,{size:16}),style:{width:"12rem",cursor:"pointer"}})}),e.jsx(T,{matchTriggerWidth:!1,style:{width:"12.5rem"},children:e.jsx(d,{defaultMonth:a??void 0,value:a,onChange:j})})]})}const s={name:"As a date input's own dropdown",render:()=>e.jsx("div",{style:{minHeight:340},children:e.jsx(k,{})})};var i,l,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <DatePicker defaultMonth={TODAY} defaultValue={TODAY} />
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,u,D;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "mode=\\"range\\"",
  render: () => <DatePicker mode="range" defaultMonth={TODAY} defaultRangeValue={{
    start: new Date(2026, 0, 11),
    end: new Date(2026, 0, 16)
  }} />
}`,...(D=(u=r.parameters)==null?void 0:u.docs)==null?void 0:D.source}}};var p,g,f;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "isDateDisabled (weekends)",
  render: () => <DatePicker defaultMonth={TODAY} isDateDisabled={date => date.getDay() === 0 || date.getDay() === 6} />
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,w,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "As a date input's own dropdown",
  render: () => <div style={{
    minHeight: 340
  }}>
      <DateInputDemo />
    </div>
}`,...(x=(w=s.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};const v=["Default","RangeSelection","WithDisabledDates","InADropdown"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:t,InADropdown:s,RangeSelection:r,WithDisabledDates:n,__namedExportsOrder:v,default:I},Symbol.toStringTag,{value:"Module"}));export{E as D,s as I,r as R,n as W,t as a};
