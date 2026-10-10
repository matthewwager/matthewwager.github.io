import{r}from"./index-ClcD9ViR.js";/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=(...e)=>e.filter((t,o,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===o).join(" ").trim();/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},W=r.createContext({}),b=()=>r.useContext(W),S=r.forwardRef(({color:e,size:t,strokeWidth:o,absoluteStrokeWidth:s,className:l="",children:n,iconNode:d,...c},h)=>{const{size:i=24,strokeWidth:u=2,absoluteStrokeWidth:x=!1,color:m="currentColor",className:f=""}=b()??{},k=s??x?Number(o??u)*24/Number(t??i):o??u;return r.createElement("svg",{ref:h,...a,width:t??i??a.width,height:t??i??a.height,stroke:e??m,strokeWidth:k,className:C("lucide",f,l),...!n&&!g(c)&&{"aria-hidden":"true"},...c},[...d.map(([p,w])=>r.createElement(p,w)),...Array.isArray(n)?n:[n]])});export{S as I,C as m};
