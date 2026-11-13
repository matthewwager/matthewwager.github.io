import{j as a}from"./jsx-runtime-BYYWji4R.js";import{r as A}from"./index-ClcD9ViR.js";import{g as t}from"./DiagramCell-BVBcLmyd.js";import"./index-Brl4xq4Y.js";const Me=[{label:"First",value:58},{label:"Second",value:73},{label:"Third",value:94},{label:"Fourth",value:73},{label:"Fifth",value:96}],Ie=[{key:"gmail",label:"Gmail"},{key:"stripe",label:"Stripe"},{key:"ramp",label:"Ramp"},{key:"snowflake",label:"Snowflake"},{key:"netsuite",label:"NetSuite"}],Te=[{category:"Dec 15",values:{gmail:4,stripe:0,ramp:4,snowflake:0,netsuite:3}},{category:"Dec 22",values:{gmail:4,stripe:2,ramp:2,snowflake:2,netsuite:8}},{category:"Dec 29",values:{gmail:8,stripe:4,ramp:8,snowflake:4,netsuite:3}},{category:"Jan 5",values:{gmail:8,stripe:4,ramp:2,snowflake:8,netsuite:1}},{category:"Jan 12",values:{gmail:2,stripe:0,ramp:0,snowflake:1,netsuite:0}}],ze=[{key:"scheduled",label:"Scheduled payments"},{key:"unscheduled",label:"Due, not scheduled",color:"var(--chart-4)"},{key:"available",label:"Cash available",color:"var(--chart-2)"}],He=[{category:"Mon",values:{scheduled:35127,unscheduled:0,available:160300}},{category:"Tue",values:{scheduled:0,unscheduled:114509,available:133923}},{category:"Wed",values:{scheduled:27208,unscheduled:24018,available:155323}},{category:"Thu",values:{scheduled:19289,unscheduled:4990,available:135015}},{category:"Fri",values:{scheduled:33532,unscheduled:6585,available:130926}}],$e=["xs","s","m","l","xl"],_e={margin:"0 0 var(--space-2)",font:"var(--type-paragraph-xs-regular)",color:"var(--content-subtle)"},Ne=e=>e===0?"$0":`$${Math.round(e/1e3)}K`,Ke={title:"Components/Chart-Bar",component:t,argTypes:{orientation:{control:"select",options:["vertical","horizontal"]},thickness:{control:"select",options:["xs","s","m","l","xl"]},connectIntervals:{control:"boolean",description:"Waterfall only."},data:{control:!1}},args:{data:Me,orientation:"vertical",showLegend:!1,showGridLines:!0,showAxisLabels:!0,showCategoryLabels:!0}},g={render:e=>a.jsx("div",{style:{width:"24rem"},children:a.jsx(t,{...e})})},f={args:{orientation:"horizontal"},render:e=>a.jsx("div",{style:{width:"24rem"},children:a.jsx(t,{...e})})},y={name:"Grid lines & axis labels hidden",args:{showGridLines:!1,showAxisLabels:!1},render:e=>a.jsx("div",{style:{width:"24rem"},children:a.jsx(t,{...e})})},w={name:"Legend, when there's no room for labels",args:{showCategoryLabels:!1,showLegend:!0},render:e=>a.jsx("div",{style:{width:"24rem"},children:a.jsx(t,{...e})})},b={name:"Just the bars",args:{showLegend:!1,showGridLines:!1,showAxisLabels:!1,showCategoryLabels:!1},render:e=>a.jsx("div",{style:{width:"24rem"},children:a.jsx(t,{...e})})},k={name:"Clustered (several series per category)",render:e=>a.jsx("div",{style:{width:"24rem"},children:a.jsx(t,{variant:"clustered",data:He,series:ze,formatValue:Ne,height:180,thickness:e.thickness})})},x={name:"Stacked (several series per category)",render:e=>a.jsx("div",{style:{width:"24rem"},children:a.jsx(t,{variant:"stacked",data:Te,series:Ie,height:180,thickness:e.thickness})})},o={render:()=>a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--space-5)"},children:$e.map(e=>a.jsxs("div",{style:{width:"12rem"},children:[a.jsxs("p",{style:_e,children:['thickness="',e,'"']}),a.jsx(t,{variant:"stacked",data:Te.slice(0,4),series:Ie,thickness:e,height:140,showLegend:!1,showAxisLabels:!1})]},e))})},Fe=["J","F","M","A","M ","J ","J  ","A ","S","O"],Ge=Fe.map((e,s)=>({category:e,values:[1.4,1.7,.7,.4,-.6,-1,-.6,-.3].filter((n,r)=>s%2===0?r<4:r>1&&r<7).map((n,r)=>({label:`Day ${r+1}`,value:Math.round(n*(s%2===0?1:.8)*10*(1+(s+r)%3*.15))/10}))})),c={name:"Diverging",render:e=>a.jsx("div",{style:{width:"24rem"},children:a.jsx(t,{variant:"diverging",data:Ge,gridLineCount:4,height:160,thickness:e.thickness})})},Je=["North","South","East","West","Central"].map((e,s)=>({category:e,values:[-.25,-.4,-.25,-.12,.3,.4,.2,.5,.3,.15].map((n,r)=>({label:`Line ${r+1}`,value:Math.round(n*(1+(s+r)%3*.2)*100)/100}))})),d={name:"Diverging, horizontal",render:e=>a.jsx("div",{style:{width:"16rem"},children:a.jsx(t,{variant:"diverging",orientation:"horizontal",data:Je,negativeColor:"var(--background-brand-base)",positiveColor:"var(--background-negative-base)",gridLineCount:2,height:280,thickness:e.thickness})})},C=[1.5,.3,-.4,.4,-.2,.5,-1.9,.3,.3,.4,-.3,.6,.2,-.5,.3,.4,-.2,.3,.5,-.4,.2,.3,-.6,.4],h={render:e=>{const s=i=>new Date(2025,11,9+i).toLocaleDateString("en-US",{month:"short",day:"numeric"}),r=[...C.slice(0,8),...Array(26).fill(0),-1.6,-.3,.3,.2].map((i,v)=>({label:s(v),value:i,tickLabel:v%3===0?s(v).split(" ")[1]:void 0}));return a.jsx("div",{style:{width:"24rem"},children:a.jsx(t,{variant:"waterfall",data:r,gridLineCount:4,height:160,thickness:e.thickness,connectIntervals:e.connectIntervals})})}},p={name:"Waterfall without connectors",render:e=>a.jsx("div",{style:{width:"24rem"},children:a.jsx(t,{variant:"waterfall",connectIntervals:!1,data:C.slice(0,12).map((s,n)=>({label:`Jan ${n+1}`,value:s,tickLabel:n%3===0?`Jan ${n+1}`:void 0})),gridLineCount:4,height:160,thickness:e.thickness})})},u={name:"Waterfall: a week of cash",render:e=>a.jsx("div",{style:{width:"32rem"},children:a.jsx(t,{variant:"waterfall",data:[["Mon",3570343,642118],["Tue",235e4,815404],["Wed",0,1012840],["Thu",0,786e3],["Fri",0,62e4]].map(([s,n,r],i)=>({label:s,emphasis:s==="Wed",steps:[{label:`${s} · ${i===0?"available cash":n>0?"deposits":"available cash"}`,value:n,alwaysShow:!0},{label:`${s} · approved payments`,value:-r}]})),formatValue:s=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",notation:"compact",maximumFractionDigits:1}).format(s),gridLineCount:4,height:180,thickness:e.thickness})})};function E({count:e,width:s,connectIntervals:n=!0}){const r=A.useRef(null),[i,v]=A.useState("");A.useEffect(()=>{var j;const S=(j=r.current)==null?void 0:j.querySelector("[data-thickness]");if(!S)return;const l=()=>v(S.getAttribute("data-thickness")??"");l();const L=new MutationObserver(l);return L.observe(S,{attributes:!0,attributeFilter:["data-thickness"]}),()=>L.disconnect()},[]);const Be=Array.from({length:e},(S,l)=>{const L=C[l%C.length];return{label:`Day ${l+1}`,value:L,tickLabel:e<=12||l%Math.ceil(e/8)===0?String(l+1):void 0}});return a.jsxs("div",{ref:r,style:{width:s},children:[a.jsxs("p",{style:_e,children:[e," intervals, ",s,' wide → thickness="',i,'"']}),a.jsx(t,{variant:"waterfall",data:Be,connectIntervals:n,gridLineCount:4,height:140,showAxisLabels:!1})]})}const m={name:"Waterfall: thickness from the chart",render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--space-5)"},children:[6,12,24,48].map(e=>a.jsx(E,{count:e,width:"20rem"},e))}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--space-5)",alignItems:"flex-start"},children:["12rem","20rem","32rem"].map(e=>a.jsx(E,{count:12,width:e},e))}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--space-5)"},children:[12,24].map(e=>a.jsx(E,{count:e,width:"20rem",connectIntervals:!1},e))})]})};var W,D,I;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <div style={{
    width: "24rem"
  }}>
      <BarChart {...args} />
    </div>
}`,...(I=(D=g.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var T,_,B;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal"
  },
  render: args => <div style={{
    width: "24rem"
  }}>
      <BarChart {...args} />
    </div>
}`,...(B=(_=f.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var M,z,H;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Grid lines & axis labels hidden",
  args: {
    showGridLines: false,
    showAxisLabels: false
  },
  render: args => <div style={{
    width: "24rem"
  }}>
      <BarChart {...args} />
    </div>
}`,...(H=(z=y.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var $,N,K;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "Legend, when there's no room for labels",
  args: {
    showCategoryLabels: false,
    showLegend: true
  },
  render: args => <div style={{
    width: "24rem"
  }}>
      <BarChart {...args} />
    </div>
}`,...(K=(N=w.parameters)==null?void 0:N.docs)==null?void 0:K.source}}};var F,G,J;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Just the bars",
  args: {
    showLegend: false,
    showGridLines: false,
    showAxisLabels: false,
    showCategoryLabels: false
  },
  render: args => <div style={{
    width: "24rem"
  }}>
      <BarChart {...args} />
    </div>
}`,...(J=(G=b.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var R,Y,U;k.parameters={...k.parameters,docs:{...(R=k.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Clustered (several series per category)",
  // A separate render rather than \`args\`, since this variant's \`data\`/
  // \`series\` shape is structurally different from the single-bar variant
  // the rest of this file's \`args\` are typed for.
  render: args => <div style={{
    width: "24rem"
  }}>
      <BarChart variant="clustered" data={CASH_BY_DAY} series={CASH_SERIES} formatValue={formatUsdK} height={180} thickness={args.thickness} />
    </div>
}`,...(U=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:U.source}}};var P,O,V;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Stacked (several series per category)",
  render: args => <div style={{
    width: "24rem"
  }}>
      <BarChart variant="stacked" data={INTAKE_BY_WEEK} series={INTAKE_SERIES} height={180} thickness={args.thickness} />
    </div>
}`,...(V=(O=x.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var q,Q,X,Z,ee;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "var(--space-5)"
  }}>
      {THICKNESSES.map(thickness => <div key={thickness} style={{
      width: "12rem"
    }}>
          <p style={LABEL_STYLE}>thickness="{thickness}"</p>
          <BarChart variant="stacked" data={INTAKE_BY_WEEK.slice(0, 4)} series={INTAKE_SERIES} thickness={thickness} height={140} showLegend={false} showAxisLabels={false} />
        </div>)}
    </div>
}`,...(X=(Q=o.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:"Every `thickness`, on the stacked variant (whose segments also show the 1px gaps).",...(ee=(Z=o.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var ae,se,re,te,ne;c.parameters={...c.parameters,docs:{...(ae=c.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: "Diverging",
  render: args => <div style={{
    width: "24rem"
  }}>
      <BarChart variant="diverging" data={DAILY_CHANGE} gridLineCount={4} height={160} thickness={args.thickness} />
    </div>
}`,...(re=(se=c.parameters)==null?void 0:se.docs)==null?void 0:re.source},description:{story:"Daily net change, clustered by month: green up from zero, red down.",...(ne=(te=c.parameters)==null?void 0:te.docs)==null?void 0:ne.description}}};var ie,le,oe,ce,de;d.parameters={...d.parameters,docs:{...(ie=d.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: "Diverging, horizontal",
  render: args => <div style={{
    width: "16rem"
  }}>
      <BarChart variant="diverging" orientation="horizontal" data={SPREAD} negativeColor="var(--background-brand-base)" positiveColor="var(--background-negative-base)" gridLineCount={2} height={280} thickness={args.thickness} />
    </div>
}`,...(oe=(le=d.parameters)==null?void 0:le.docs)==null?void 0:oe.source},description:{story:"Categories down the side, bars left (negative) and right (positive) of zero.",...(de=(ce=d.parameters)==null?void 0:ce.docs)==null?void 0:de.description}}};var he,pe,ue,me,ve;h.parameters={...h.parameters,docs:{...(he=h.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: args => {
    // Daily from Dec 9: a busy week, a quiet holiday stretch, then January.
    const day = (offset: number) => new Date(2025, 11, 9 + offset).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric"
    });
    const values = [...STEPS.slice(0, 8), ...Array<number>(26).fill(0), -1.6, -0.3, 0.3, 0.2];
    const data = values.map((value, i) => ({
      label: day(i),
      value,
      tickLabel: i % 3 === 0 ? day(i).split(" ")[1] : undefined
    }));
    return <div style={{
      width: "24rem"
    }}>
        <BarChart variant="waterfall" data={data} gridLineCount={4} height={160} thickness={args.thickness} connectIntervals={(args as {
        connectIntervals?: boolean;
      }).connectIntervals} />
      </div>;
  }
}`,...(ue=(pe=h.parameters)==null?void 0:pe.docs)==null?void 0:ue.source},description:{story:`Each interval steps up or down from where the last one ended, joined by
connectors at the running total. Days with no change (the holidays) draw
no bar, so the connector runs across them.`,...(ve=(me=h.parameters)==null?void 0:me.docs)==null?void 0:ve.description}}};var ge,fe,ye,we,be;p.parameters={...p.parameters,docs:{...(ge=p.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: "Waterfall without connectors",
  render: args => <div style={{
    width: "24rem"
  }}>
      <BarChart variant="waterfall" connectIntervals={false} data={STEPS.slice(0, 12).map((value, i) => ({
      label: \`Jan \${i + 1}\`,
      value,
      tickLabel: i % 3 === 0 ? \`Jan \${i + 1}\` : undefined
    }))} gridLineCount={4} height={160} thickness={args.thickness} />
    </div>
}`,...(ye=(fe=p.parameters)==null?void 0:fe.docs)==null?void 0:ye.source},description:{story:"`connectIntervals={false}`: the steps alone, with fewer, wider intervals.",...(be=(we=p.parameters)==null?void 0:we.docs)==null?void 0:be.description}}};var ke,xe,Se,Le,Ce;u.parameters={...u.parameters,docs:{...(ke=u.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  name: "Waterfall: a week of cash",
  render: args => <div style={{
    width: "32rem"
  }}>
      <BarChart variant="waterfall" data={([["Mon", 3570343, 642118], ["Tue", 2350000, 815404], ["Wed", 0, 1012840], ["Thu", 0, 786000], ["Fri", 0, 620000]] as const).map(([day, cash, paid], index) => ({
      label: day,
      emphasis: day === "Wed",
      steps: [{
        label: \`\${day} · \${index === 0 ? "available cash" : cash > 0 ? "deposits" : "available cash"}\`,
        value: cash,
        alwaysShow: true
      }, {
        label: \`\${day} · approved payments\`,
        value: -paid
      }]
    }))} formatValue={value => new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      notation: "compact",
      maximumFractionDigits: 1
    }).format(value)} gridLineCount={4} height={180} thickness={args.thickness} />
    </div>
}`,...(Se=(xe=u.parameters)==null?void 0:xe.docs)==null?void 0:Se.source},description:{story:"A week of available cash, Monday to Friday: each day a pair (`steps`) —\nits cash, then its payments out. Monday's cash rises from zero; after\nthat, a deposit steps it up, and an unchanged day is a sliver\n(`alwaysShow`). Today's label is picked out (`emphasis`).",...(Ce=(Le=u.parameters)==null?void 0:Le.docs)==null?void 0:Ce.description}}};var Ae,Ee,je,We,De;m.parameters={...m.parameters,docs:{...(Ae=m.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  name: "Waterfall: thickness from the chart",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-6)"
  }}>
      <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-5)"
    }}>
        {[6, 12, 24, 48].map(count => <AutoWaterfall key={count} count={count} width="20rem" />)}
      </div>
      <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-5)",
      alignItems: "flex-start"
    }}>
        {["12rem", "20rem", "32rem"].map(width => <AutoWaterfall key={width} count={12} width={width} />)}
      </div>
      <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-5)"
    }}>
        {[12, 24].map(count => <AutoWaterfall key={count} count={count} width="20rem" connectIntervals={false} />)}
      </div>
    </div>
}`,...(je=(Ee=m.parameters)==null?void 0:Ee.docs)==null?void 0:je.source},description:{story:"With no `thickness`, a waterfall fits its bars to its intervals: fewer\nintervals, or more width, get thicker bars. Resize the window to watch it\nchange.",...(De=(We=m.parameters)==null?void 0:We.docs)==null?void 0:De.description}}};const Re=["Default","Horizontal","GridLinesHidden","WithLegend","Minimal","Clustered","Stacked","Thickness","Diverging","DivergingHorizontal","Waterfall","WaterfallUnconnected","WaterfallCashWeek","WaterfallAutoThickness"],Ve=Object.freeze(Object.defineProperty({__proto__:null,Clustered:k,Default:g,Diverging:c,DivergingHorizontal:d,GridLinesHidden:y,Horizontal:f,Minimal:b,Stacked:x,Thickness:o,Waterfall:h,WaterfallAutoThickness:m,WaterfallCashWeek:u,WaterfallUnconnected:p,WithLegend:w,__namedExportsOrder:Re,default:Ke},Symbol.toStringTag,{value:"Module"}));export{Ve as B,k as C,g as D,y as G,f as H,b as M,x as S,o as T,h as W,c as a,d as b,m as c,u as d,p as e,w as f};
