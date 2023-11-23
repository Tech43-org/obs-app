import{f as P,i as k,g as T,p as M,h as c,j as d,k as A,l as _,m as O,n as N,w as L,o as V,q as D,r as I,s as K,t as U,v as G,x as J,y as p,z as X,A as $,B as x,C as Y,D as Z,_ as ee,E as te,F as oe,G as ne,H as Q,I as F}from"./index.9c6167b6.js";import{Q as E}from"./QResizeObserver.0f37b82b.js";var ie=P({name:"QPageContainer",setup(e,{slots:h}){const{proxy:{$q:n}}=_(),o=k(O,T);if(o===T)return console.error("QPageContainer needs to be child of QLayout"),T;M(N,!0);const r=c(()=>{const a={};return o.header.space===!0&&(a.paddingTop=`${o.header.size}px`),o.right.space===!0&&(a[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${o.right.size}px`),o.footer.space===!0&&(a.paddingBottom=`${o.footer.size}px`),o.left.space===!0&&(a[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${o.left.size}px`),a});return()=>d("div",{class:"q-page-container",style:r.value},A(h.default))}});const{passive:B}=U,le=["both","horizontal","vertical"];var re=P({name:"QScrollObserver",props:{axis:{type:String,validator:e=>le.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:h}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let o=null,r,a;L(()=>e.scrollTarget,()=>{f(),y()});function u(){o!==null&&o();const g=Math.max(0,G(r)),m=J(r),s={top:g-n.position.top,left:m-n.position.left};if(e.axis==="vertical"&&s.top===0||e.axis==="horizontal"&&s.left===0)return;const w=Math.abs(s.top)>=Math.abs(s.left)?s.top<0?"up":"down":s.left<0?"left":"right";n.position={top:g,left:m},n.directionChanged=n.direction!==w,n.delta=s,n.directionChanged===!0&&(n.direction=w,n.inflectionPoint=n.position),h("scroll",{...n})}function y(){r=K(a,e.scrollTarget),r.addEventListener("scroll",l,B),l(!0)}function f(){r!==void 0&&(r.removeEventListener("scroll",l,B),r=void 0)}function l(g){if(g===!0||e.debounce===0||e.debounce==="0")u();else if(o===null){const[m,s]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];o=()=>{s(m),o=null}}}const{proxy:b}=_();return L(()=>b.$q.lang.rtl,u),V(()=>{a=b.$el.parentNode,y()}),D(()=>{o!==null&&o(),f()}),Object.assign(b,{trigger:l,getPosition:()=>n}),I}}),ae=P({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:h,emit:n}){const{proxy:{$q:o}}=_(),r=p(null),a=p(o.screen.height),u=p(e.container===!0?0:o.screen.width),y=p({position:0,direction:"down",inflectionPoint:0}),f=p(0),l=p(X.value===!0?0:$()),b=c(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),g=c(()=>e.container===!1?{minHeight:o.screen.height+"px"}:null),m=c(()=>l.value!==0?{[o.lang.rtl===!0?"left":"right"]:`${l.value}px`}:null),s=c(()=>l.value!==0?{[o.lang.rtl===!0?"right":"left"]:0,[o.lang.rtl===!0?"left":"right"]:`-${l.value}px`,width:`calc(100% + ${l.value}px)`}:null);function w(t){if(e.container===!0||document.qScrollPrevented!==!0){const i={position:t.position.top,direction:t.direction,directionChanged:t.directionChanged,inflectionPoint:t.inflectionPoint.top,delta:t.delta.top};y.value=i,e.onScroll!==void 0&&n("scroll",i)}}function W(t){const{height:i,width:v}=t;let S=!1;a.value!==i&&(S=!0,a.value=i,e.onScrollHeight!==void 0&&n("scrollHeight",i),R()),u.value!==v&&(S=!0,u.value=v),S===!0&&e.onResize!==void 0&&n("resize",t)}function j({height:t}){f.value!==t&&(f.value=t,R())}function R(){if(e.container===!0){const t=a.value>f.value?$():0;l.value!==t&&(l.value=t)}}let z=null;const q={instances:{},view:c(()=>e.view),isContainer:c(()=>e.container),rootRef:r,height:a,containerHeight:f,scrollbarWidth:l,totalWidth:c(()=>u.value+l.value),rows:c(()=>{const t=e.view.toLowerCase().split(" ");return{top:t[0].split(""),middle:t[1].split(""),bottom:t[2].split("")}}),header:x({size:0,offset:0,space:!1}),right:x({size:300,offset:0,space:!1}),footer:x({size:0,offset:0,space:!1}),left:x({size:300,offset:0,space:!1}),scroll:y,animate(){z!==null?clearTimeout(z):document.body.classList.add("q-body--layout-animate"),z=setTimeout(()=>{z=null,document.body.classList.remove("q-body--layout-animate")},155)},update(t,i,v){q[t][i]=v}};if(M(O,q),$()>0){let v=function(){t=null,i.classList.remove("hide-scrollbar")},S=function(){if(t===null){if(i.scrollHeight>o.screen.height)return;i.classList.add("hide-scrollbar")}else clearTimeout(t);t=setTimeout(v,300)},C=function(H){t!==null&&H==="remove"&&(clearTimeout(t),v()),window[`${H}EventListener`]("resize",S)},t=null;const i=document.body;L(()=>e.container!==!0?"add":"remove",C),e.container!==!0&&C("add"),Y(()=>{C("remove")})}return()=>{const t=Z(h.default,[d(re,{onScroll:w}),d(E,{onResize:W})]),i=d("div",{class:b.value,style:g.value,ref:e.container===!0?void 0:r,tabindex:-1},t);return e.container===!0?d("div",{class:"q-layout-container overflow-hidden",ref:r},[d(E,{onResize:j}),d("div",{class:"absolute-full",style:m.value},[d("div",{class:"scroll",style:s.value},[i])])]):i}}});const se={};function ce(e,h){const n=te("router-view");return oe(),ne(ae,{view:"hHh lpR fFf"},{default:Q(()=>[F(ie,null,{default:Q(()=>[F(n)]),_:1})]),_:1})}var fe=ee(se,[["render",ce]]);export{fe as default};
