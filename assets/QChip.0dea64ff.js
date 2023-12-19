import{F as T,aC as J,G as U,C as P,P as A,aq as X,H as z,aD as Y,aE as Z,N as L,aa as O,ah as F,af as I,ak as ee,K as D,aF as W,T as te,ao as le,A as S,aG as ie,aH as ne,aI as oe,z as q,ad as ae,R as ue,s as re,aJ as se,aK as ce,al as de,a4 as B,aL as fe,aM as he,ab as me}from"./index.49fc7c04.js";import{d as j,e as ve}from"./focus-manager.0068caea.js";import{u as ge,c as be}from"./QList.fd90aac6.js";const Ee={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Pe=["beforeShow","show","beforeHide","hide"];function $e({showing:e,canShow:t,hideOnRouteChange:i,handleShow:l,handleHide:n,processOnMount:f}){const o=P(),{props:u,emit:c,proxy:s}=o;let h;function b(m){e.value===!0?r(m):p(m)}function p(m){if(u.disable===!0||m!==void 0&&m.qAnchorHandled===!0||t!==void 0&&t(m)!==!0)return;const v=u["onUpdate:modelValue"]!==void 0;v===!0&&(c("update:modelValue",!0),h=m,A(()=>{h===m&&(h=void 0)})),(u.modelValue===null||v===!1)&&a(m)}function a(m){e.value!==!0&&(e.value=!0,c("beforeShow",m),l!==void 0?l(m):c("show",m))}function r(m){if(u.disable===!0)return;const v=u["onUpdate:modelValue"]!==void 0;v===!0&&(c("update:modelValue",!1),h=m,A(()=>{h===m&&(h=void 0)})),(u.modelValue===null||v===!1)&&w(m)}function w(m){e.value!==!1&&(e.value=!1,c("beforeHide",m),n!==void 0?n(m):c("hide",m))}function d(m){u.disable===!0&&m===!0?u["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):m===!0!==e.value&&(m===!0?a:w)(h)}T(()=>u.modelValue,d),i!==void 0&&J(o)===!0&&T(()=>s.$route.fullPath,()=>{i.value===!0&&e.value===!0&&r()}),f===!0&&U(()=>{d(u.modelValue)});const x={show:p,hide:r,toggle:b};return Object.assign(s,x),x}function We(){let e=null;const t=P();function i(){e!==null&&(clearTimeout(e),e=null)}return X(i),z(i),{removeTimeout:i,registerTimeout(l,n){i(),Y(t)===!1&&(e=setTimeout(l,n))}}}function pe(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Z.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const Ae={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Le({showing:e,avoidEmit:t,configureAnchorEl:i}){const{props:l,proxy:n,emit:f}=P(),o=L(null);let u=null;function c(a){return o.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const s={};i===void 0&&(Object.assign(s,{hide(a){n.hide(a)},toggle(a){n.toggle(a),a.qAnchorHandled=!0},toggleKey(a){O(a,13)===!0&&s.toggle(a)},contextClick(a){n.hide(a),F(a),A(()=>{n.show(a),a.qAnchorHandled=!0})},prevent:F,mobileTouch(a){if(s.mobileCleanup(a),c(a)!==!0)return;n.hide(a),o.value.classList.add("non-selectable");const r=a.target;I(s,"anchor",[[r,"touchmove","mobileCleanup","passive"],[r,"touchend","mobileCleanup","passive"],[r,"touchcancel","mobileCleanup","passive"],[o.value,"contextmenu","prevent","notPassive"]]),u=setTimeout(()=>{u=null,n.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){o.value.classList.remove("non-selectable"),u!==null&&(clearTimeout(u),u=null),e.value===!0&&a!==void 0&&pe()}}),i=function(a=l.contextMenu){if(l.noParentEvent===!0||o.value===null)return;let r;a===!0?n.$q.platform.is.mobile===!0?r=[[o.value,"touchstart","mobileTouch","passive"]]:r=[[o.value,"mousedown","hide","passive"],[o.value,"contextmenu","contextClick","notPassive"]]:r=[[o.value,"click","toggle","passive"],[o.value,"keyup","toggleKey","passive"]],I(s,"anchor",r)});function h(){ee(s,"anchor")}function b(a){for(o.value=a;o.value.classList.contains("q-anchor--skip");)o.value=o.value.parentNode;i()}function p(){if(l.target===!1||l.target===""||n.$el.parentNode===null)o.value=null;else if(l.target===!0)b(n.$el.parentNode);else{let a=l.target;if(typeof l.target=="string")try{a=document.querySelector(l.target)}catch{a=void 0}a!=null?(o.value=a.$el||a,i()):(o.value=null,console.error(`Anchor: target "${l.target}" not found`))}}return T(()=>l.contextMenu,a=>{o.value!==null&&(h(),i(a))}),T(()=>l.target,()=>{o.value!==null&&h(),p()}),T(()=>l.noParentEvent,a=>{o.value!==null&&(a===!0?h():i())}),U(()=>{p(),t!==!0&&l.modelValue===!0&&o.value===null&&f("update:modelValue",!1)}),z(()=>{u!==null&&clearTimeout(u),h()}),{anchorEl:o,canShow:c,anchorEvents:s}}function Ve(e,t){const i=L(null);let l;function n(u,c){const s=`${c!==void 0?"add":"remove"}EventListener`,h=c!==void 0?c:l;u!==window&&u[s]("scroll",h,D.passive),window[s]("scroll",h,D.passive),l=c}function f(){i.value!==null&&(n(i.value),i.value=null)}const o=T(()=>e.noParentEvent,()=>{i.value!==null&&(f(),t())});return z(o),{localScrollTarget:i,unconfigureScrollTarget:f,changeScrollEvent:n}}const k=[];function _e(e){return k.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function xe(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return W(e)}else if(e.__qPortal===!0){const i=W(e);return i!==void 0&&i.$options.name==="QPopupProxy"?(e.hide(t),i):e}e=W(e)}while(e!=null)}function ze(e,t,i){for(;i!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(i--,e.$options.name==="QMenu"){e=xe(e,t);continue}e.hide(t)}e=W(e)}}function qe(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Be(e,t,i,l){const n=L(!1),f=L(!1);let o=null;const u={},c=l==="dialog"&&qe(e);function s(b){if(b===!0){j(u),f.value=!0;return}f.value=!1,n.value===!1&&(c===!1&&o===null&&(o=ne(!1,l)),n.value=!0,k.push(e.proxy),ve(u))}function h(b){if(f.value=!1,b!==!0)return;j(u),n.value=!1;const p=k.indexOf(e.proxy);p!==-1&&k.splice(p,1),o!==null&&(oe(o),o=null)}return te(()=>{h(!0)}),e.proxy.__qPortal=!0,le(e.proxy,"contentEl",()=>t.value),{showPortal:s,hidePortal:h,portalIsActive:n,portalIsAccessible:f,renderPortal:()=>c===!0?i():n.value===!0?[S(ie,{to:o},i())]:void 0}}const Re={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function De(e,t=()=>{},i=()=>{}){return{transitionProps:q(()=>{const l=`q-transition--${e.transitionShow||t()}`,n=`q-transition--${e.transitionHide||i()}`;return{appear:!0,enterFromClass:`${l}-enter-from`,enterActiveClass:`${l}-enter-active`,enterToClass:`${l}-enter-to`,leaveFromClass:`${n}-leave-from`,leaveActiveClass:`${n}-leave-active`,leaveToClass:`${n}-leave-to`}}),transitionStyle:q(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function Qe(){let e;const t=P();function i(){e=void 0}return X(i),z(i),{removeTick:i,registerTick(l){e=l,A(()=>{e===l&&(Y(t)===!1&&e(),e=void 0)})}}}const{notPassiveCapture:V}=D,C=[];function _(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let i=k.length-1;for(;i>=0;){const l=k[i].$;if(l.type.name==="QTooltip"){i--;continue}if(l.type.name!=="QDialog")break;if(l.props.seamless!==!0)return;i--}for(let l=C.length-1;l>=0;l--){const n=C[l];if((n.anchorEl.value===null||n.anchorEl.value.contains(t)===!1)&&(t===document.body||n.innerRef.value!==null&&n.innerRef.value.contains(t)===!1))e.qClickOutside=!0,n.onClickOutside(e);else return}}function Fe(e){C.push(e),C.length===1&&(document.addEventListener("mousedown",_,V),document.addEventListener("touchstart",_,V))}function Ie(e){const t=C.findIndex(i=>i===e);t>-1&&(C.splice(t,1),C.length===0&&(document.removeEventListener("mousedown",_,V),document.removeEventListener("touchstart",_,V)))}let N,G;function je(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Ne(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const Q={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{Q[`${e}#ltr`]=e,Q[`${e}#rtl`]=e});function Ge(e,t){const i=e.split(" ");return{vertical:i[0],horizontal:Q[`${i[1]}#${t===!0?"rtl":"ltr"}`]}}function we(e,t){let{top:i,left:l,right:n,bottom:f,width:o,height:u}=e.getBoundingClientRect();return t!==void 0&&(i-=t[1],l-=t[0],f+=t[1],n+=t[0],o+=t[0],u+=t[1]),{top:i,bottom:f,height:u,left:l,right:n,width:o,middle:l+(n-l)/2,center:i+(f-i)/2}}function ye(e,t,i){let{top:l,left:n}=e.getBoundingClientRect();return l+=t.top,n+=t.left,i!==void 0&&(l+=i[1],n+=i[0]),{top:l,bottom:l+1,height:1,left:n,right:n+1,width:1,middle:n,center:l}}function Se(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function K(e,t,i,l){return{top:e[i.vertical]-t[l.vertical],left:e[i.horizontal]-t[l.horizontal]}}function Ce(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{Ce(e,t+1)},10);return}const{targetEl:i,offset:l,anchorEl:n,anchorOrigin:f,selfOrigin:o,absoluteOffset:u,fit:c,cover:s,maxHeight:h,maxWidth:b}=e;if(ae.is.ios===!0&&window.visualViewport!==void 0){const $=document.body.style,{offsetLeft:M,offsetTop:y}=window.visualViewport;M!==N&&($.setProperty("--q-pe-left",M+"px"),N=M),y!==G&&($.setProperty("--q-pe-top",y+"px"),G=y)}const{scrollLeft:p,scrollTop:a}=i,r=u===void 0?we(n,s===!0?[0,0]:l):ye(n,u,l);Object.assign(i.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:b||"100vw",maxHeight:h||"100vh",visibility:"visible"});const{offsetWidth:w,offsetHeight:d}=i,{elWidth:x,elHeight:m}=c===!0||s===!0?{elWidth:Math.max(r.width,w),elHeight:s===!0?Math.max(r.height,d):d}:{elWidth:w,elHeight:d};let v={maxWidth:b,maxHeight:h};(c===!0||s===!0)&&(v.minWidth=r.width+"px",s===!0&&(v.minHeight=r.height+"px")),Object.assign(i.style,v);const H=Se(x,m);let g=K(r,H,f,o);if(u===void 0||l===void 0)R(g,r,H,f,o);else{const{top:$,left:M}=g;R(g,r,H,f,o);let y=!1;if(g.top!==$){y=!0;const E=2*l[1];r.center=r.top-=E,r.bottom-=E+2}if(g.left!==M){y=!0;const E=2*l[0];r.middle=r.left-=E,r.right-=E+2}y===!0&&(g=K(r,H,f,o),R(g,r,H,f,o))}v={top:g.top+"px",left:g.left+"px"},g.maxHeight!==void 0&&(v.maxHeight=g.maxHeight+"px",r.height>g.maxHeight&&(v.minHeight=v.maxHeight)),g.maxWidth!==void 0&&(v.maxWidth=g.maxWidth+"px",r.width>g.maxWidth&&(v.minWidth=v.maxWidth)),Object.assign(i.style,v),i.scrollTop!==a&&(i.scrollTop=a),i.scrollLeft!==p&&(i.scrollLeft=p)}function R(e,t,i,l,n){const f=i.bottom,o=i.right,u=ue(),c=window.innerHeight-u,s=document.body.clientWidth;if(e.top<0||e.top+f>c)if(n.vertical==="center")e.top=t[l.vertical]>c/2?Math.max(0,c-f):0,e.maxHeight=Math.min(f,c);else if(t[l.vertical]>c/2){const h=Math.min(c,l.vertical==="center"?t.center:l.vertical===n.vertical?t.bottom:t.top);e.maxHeight=Math.min(f,h),e.top=Math.max(0,h-f)}else e.top=Math.max(0,l.vertical==="center"?t.center:l.vertical===n.vertical?t.top:t.bottom),e.maxHeight=Math.min(f,c-e.top);if(e.left<0||e.left+o>s)if(e.maxWidth=Math.min(o,s),n.horizontal==="middle")e.left=t[l.horizontal]>s/2?Math.max(0,s-o):0;else if(t[l.horizontal]>s/2){const h=Math.min(s,l.horizontal==="middle"?t.middle:l.horizontal===n.horizontal?t.right:t.left);e.maxWidth=Math.min(o,h),e.left=Math.max(0,h-e.maxWidth)}else e.left=Math.max(0,l.horizontal==="middle"?t.middle:l.horizontal===n.horizontal?t.left:t.right),e.maxWidth=Math.min(o,s-e.left)}const Te={xs:8,sm:10,md:14,lg:20,xl:24};var Ke=re({name:"QChip",props:{...ge,...se,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:t,emit:i}){const{proxy:{$q:l}}=P(),n=be(e,l),f=ce(e,Te),o=q(()=>e.selected===!0||e.icon!==void 0),u=q(()=>e.selected===!0?e.iconSelected||l.iconSet.chip.selected:e.icon),c=q(()=>e.iconRemove||l.iconSet.chip.remove),s=q(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),h=q(()=>{const d=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(d?` text-${d} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(s.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(n.value===!0?" q-chip--dark q-dark":"")}),b=q(()=>{const d=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},x={...d,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||l.lang.label.remove};return{chip:d,remove:x}});function p(d){d.keyCode===13&&a(d)}function a(d){e.disable||(i("update:selected",!e.selected),i("click",d))}function r(d){(d.keyCode===void 0||d.keyCode===13)&&(me(d),e.disable===!1&&(i("update:modelValue",!1),i("remove")))}function w(){const d=[];s.value===!0&&d.push(S("div",{class:"q-focus-helper"})),o.value===!0&&d.push(S(B,{class:"q-chip__icon q-chip__icon--left",name:u.value}));const x=e.label!==void 0?[S("div",{class:"ellipsis"},[e.label])]:void 0;return d.push(S("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},fe(t.default,x))),e.iconRight&&d.push(S(B,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&d.push(S(B,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:c.value,...b.value.remove,onClick:r,onKeyup:r})),d}return()=>{if(e.modelValue===!1)return;const d={class:h.value,style:f.value};return s.value===!0&&Object.assign(d,b.value.chip,{onClick:a,onKeyup:p}),de("div",d,w(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[he,e.ripple]])}}});export{Ke as Q,Pe as a,We as b,pe as c,$e as d,Re as e,ze as f,_e as g,Ae as h,Ne as i,Qe as j,De as k,Ve as l,Le as m,Be as n,xe as o,Ge as p,Fe as q,Ie as r,Ce as s,Ee as u,je as v};