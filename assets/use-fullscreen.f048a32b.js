import{R as v,aK as F,H as f,$ as y,I as h,J as x,aA as p,E as $}from"./index.caf99d4c.js";let s=0;const E={fullscreen:Boolean,noRouteFullscreenExit:Boolean},g=["update:fullscreen","fullscreen"];function B(){const d=$(),{props:u,emit:m,proxy:e}=d;let n,o,a;const l=v(!1);F(d)===!0&&f(()=>e.$route.fullPath,()=>{u.noRouteFullscreenExit!==!0&&t()}),f(()=>u.fullscreen,r=>{l.value!==r&&c()}),f(l,r=>{m("update:fullscreen",r),m("fullscreen",r)});function c(){l.value===!0?t():i()}function i(){l.value!==!0&&(l.value=!0,a=e.$el.parentNode,a.replaceChild(o,e.$el),document.body.appendChild(e.$el),s++,s===1&&document.body.classList.add("q-body--fullscreen-mixin"),n={handler:t},p.add(n))}function t(){l.value===!0&&(n!==void 0&&(p.remove(n),n=void 0),a.replaceChild(e.$el,o),l.value=!1,s=Math.max(0,s-1),s===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),e.$el.scrollIntoView!==void 0&&setTimeout(()=>{e.$el.scrollIntoView()})))}return y(()=>{o=document.createElement("span")}),h(()=>{u.fullscreen===!0&&i()}),x(t),Object.assign(e,{toggleFullscreen:c,setFullscreen:i,exitFullscreen:t}),{inFullscreen:l,toggleFullscreen:c}}export{g as a,B as b,E as u};
