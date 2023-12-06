import{s as ae,N as M,z as p,F as B,H as z,ak as oe,af as le,J as Ae,A as m,a1 as be,C as pe,B as _e,ab as ye,bc as Oe,a8 as Se,X as xe,a3 as Te,a4 as H,i as ke,a as Ce,u as we,o as F,k as ee,w as r,g as De,Y as Ee,m as Ne,Z as Be,l,n as He,aR as Ue,p as P,t as L,Q as Z,aO as se,a$ as ie,_ as je,a6 as $e}from"./index.49fc7c04.js";import{Q as Re}from"./QToolbarTitle.fd431f3a.js";import{Q as Fe}from"./QToolbar.0e7d31f4.js";import{Q as Me}from"./QPage.f8bc35e6.js";import{Q as ze,a as Ge}from"./QLayout.20112d17.js";import{u as Ve,c as Ye,a as te,b as O,Q as Ke}from"./QList.fd90aac6.js";import{h as We,u as Ie,e as Je,v as re,i as Xe,a as Qe,p as ue,j as Ze,b as et,k as tt,l as at,m as nt,d as Le,n as ot,r as de,s as lt,c as ce,q as st,Q as it}from"./QChip.0dea64ff.js";import{Q as ge}from"./QBadge.bca57178.js";import{Q as rt}from"./QSpace.c614c7e4.js";import{Q as me}from"./QCardActions.1b383fd5.js";import{u as fe,b as ve,Q as ut,a as dt}from"./focus-manager.0068caea.js";import{Q as he}from"./QSeparator.f68a0bf8.js";var ct=ae({name:"QTooltip",inheritAttrs:!1,props:{...We,...Ie,...Je,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:re},self:{type:String,default:"top middle",validator:re},offset:{type:Array,default:()=>[14,14],validator:Xe},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...Qe],setup(e,{slots:x,emit:_,attrs:c}){let g,s;const f=pe(),{proxy:{$q:i}}=f,d=M(null),n=M(!1),u=p(()=>ue(e.anchor,i.lang.rtl)),t=p(()=>ue(e.self,i.lang.rtl)),v=p(()=>e.persistent!==!0),{registerTick:C,removeTick:D}=Ze(),{registerTimeout:o}=et(),{transitionProps:b,transitionStyle:T}=tt(e),{localScrollTarget:y,changeScrollEvent:G,unconfigureScrollTarget:V}=at(e,R),{anchorEl:S,canShow:Y,anchorEvents:w}=nt({showing:n,configureAnchorEl:A}),{show:U,hide:E}=Le({showing:n,canShow:Y,handleShow:W,handleHide:J,hideOnRouteChange:v,processOnMount:!0});Object.assign(w,{delayShow:a,delayHide:k});const{showPortal:j,hidePortal:N,renderPortal:K}=ot(f,d,Pe,"tooltip");if(i.platform.is.mobile===!0){const h={anchorEl:S,innerRef:d,onClickOutside(Q){return E(Q),Q.target.classList.contains("q-dialog__backdrop")&&ye(Q),!0}},X=p(()=>e.modelValue===null&&e.persistent!==!0&&n.value===!0);B(X,Q=>{(Q===!0?st:de)(h)}),z(()=>{de(h)})}function W(h){j(),C(()=>{s=new MutationObserver(()=>I()),s.observe(d.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),I(),R()}),g===void 0&&(g=B(()=>i.screen.width+"|"+i.screen.height+"|"+e.self+"|"+e.anchor+"|"+i.lang.rtl,I)),o(()=>{j(!0),_("show",h)},e.transitionDuration)}function J(h){D(),N(),$(),o(()=>{N(!0),_("hide",h)},e.transitionDuration)}function $(){s!==void 0&&(s.disconnect(),s=void 0),g!==void 0&&(g(),g=void 0),V(),oe(w,"tooltipTemp")}function I(){lt({targetEl:d.value,offset:e.offset,anchorEl:S.value,anchorOrigin:u.value,selfOrigin:t.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function a(h){if(i.platform.is.mobile===!0){ce(),document.body.classList.add("non-selectable");const X=S.value,Q=["touchmove","touchcancel","touchend","click"].map(ne=>[X,ne,"delayHide","passiveCapture"]);le(w,"tooltipTemp",Q)}o(()=>{U(h)},e.delay)}function k(h){i.platform.is.mobile===!0&&(oe(w,"tooltipTemp"),ce(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),o(()=>{E(h)},e.hideDelay)}function A(){if(e.noParentEvent===!0||S.value===null)return;const h=i.platform.is.mobile===!0?[[S.value,"touchstart","delayShow","passive"]]:[[S.value,"mouseenter","delayShow","passive"],[S.value,"mouseleave","delayHide","passive"]];le(w,"anchor",h)}function R(){if(S.value!==null||e.scrollTarget!==void 0){y.value=Ae(S.value,e.scrollTarget);const h=e.noParentEvent===!0?I:E;G(y.value,h)}}function qe(){return n.value===!0?m("div",{...c,ref:d,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",c.class],style:[c.style,T.value],role:"tooltip"},_e(x.default)):null}function Pe(){return m(be,b.value,qe)}return z($),Object.assign(f.proxy,{updatePosition:I}),K}}),gt=ae({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:x,emit:_}){let c=!1,g,s,f=null,i=null,d,n;function u(){g&&g(),g=null,c=!1,f!==null&&(clearTimeout(f),f=null),i!==null&&(clearTimeout(i),i=null),s!==void 0&&s.removeEventListener("transitionend",d),d=null}function t(o,b,T){b!==void 0&&(o.style.height=`${b}px`),o.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,c=!0,g=T}function v(o,b){o.style.overflowY=null,o.style.height=null,o.style.transition=null,u(),b!==n&&_(b)}function C(o,b){let T=0;s=o,c===!0?(u(),T=o.offsetHeight===o.scrollHeight?0:void 0):(n="hide",o.style.overflowY="hidden"),t(o,T,b),f=setTimeout(()=>{f=null,o.style.height=`${o.scrollHeight}px`,d=y=>{i=null,(Object(y)!==y||y.target===o)&&v(o,"show")},o.addEventListener("transitionend",d),i=setTimeout(d,e.duration*1.1)},100)}function D(o,b){let T;s=o,c===!0?u():(n="show",o.style.overflowY="hidden",T=o.scrollHeight),t(o,T,b),f=setTimeout(()=>{f=null,o.style.height=0,d=y=>{i=null,(Object(y)!==y||y.target===o)&&v(o,"hide")},o.addEventListener("transitionend",d),i=setTimeout(d,e.duration*1.1)},100)}return z(()=>{c===!0&&u()}),()=>m(be,{css:!1,appear:e.appear,onEnter:C,onLeave:D},x.default)}});const q=Oe({}),mt=Object.keys(Se);var ft=ae({name:"QExpansionItem",props:{...Se,...Ie,...Ve,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...Qe,"click","afterShow","afterHide"],setup(e,{slots:x,emit:_}){const{proxy:{$q:c}}=pe(),g=Ye(e,c),s=M(e.modelValue!==null?e.modelValue:e.defaultOpened),f=M(null),i=fe(),{show:d,hide:n,toggle:u}=Le({showing:s});let t,v;const C=p(()=>`q-expansion-item q-item-type q-expansion-item--${s.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),D=p(()=>{if(e.contentInsetLevel===void 0)return null;const a=c.lang.rtl===!0?"Right":"Left";return{["padding"+a]:e.contentInsetLevel*56+"px"}}),o=p(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),b=p(()=>{const a={};return mt.forEach(k=>{a[k]=e[k]}),a}),T=p(()=>o.value===!0||e.expandIconToggle!==!0),y=p(()=>e.expandedIcon!==void 0&&s.value===!0?e.expandedIcon:e.expandIcon||c.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),G=p(()=>e.disable!==!0&&(o.value===!0||e.expandIconToggle===!0)),V=p(()=>({expanded:s.value===!0,detailsId:e.targetUid,toggle:u,show:d,hide:n})),S=p(()=>{const a=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:c.lang.label[s.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":s.value===!0?"true":"false","aria-controls":i,"aria-label":a}});B(()=>e.group,a=>{v!==void 0&&v(),a!==void 0&&N()});function Y(a){o.value!==!0&&u(a),_("click",a)}function w(a){a.keyCode===13&&U(a,!0)}function U(a,k){k!==!0&&f.value!==null&&f.value.focus(),u(a),ye(a)}function E(){_("afterShow")}function j(){_("afterHide")}function N(){t===void 0&&(t=fe()),s.value===!0&&(q[e.group]=t);const a=B(s,A=>{A===!0?q[e.group]=t:q[e.group]===t&&delete q[e.group]}),k=B(()=>q[e.group],(A,R)=>{R===t&&A!==void 0&&A!==t&&n()});v=()=>{a(),k(),q[e.group]===t&&delete q[e.group],v=void 0}}function K(){const a={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},k=[m(H,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&s.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:y.value})];return G.value===!0&&(Object.assign(a,{tabindex:0,...S.value,onClick:U,onKeyup:w}),k.unshift(m("div",{ref:f,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),m(O,a,()=>k)}function W(){let a;return x.header!==void 0?a=[].concat(x.header(V.value)):(a=[m(O,()=>[m(ve,{lines:e.labelLines},()=>e.label||""),e.caption?m(ve,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&a[e.switchToggleSide===!0?"push":"unshift"](m(O,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>m(H,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&a[e.switchToggleSide===!0?"unshift":"push"](K()),a}function J(){const a={ref:"item",style:e.headerStyle,class:e.headerClass,dark:g.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return T.value===!0&&(a.clickable=!0,a.onClick=Y,Object.assign(a,o.value===!0?b.value:S.value)),m(te,a,W)}function $(){return xe(m("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:D.value,id:i},_e(x.default)),[[Te,s.value]])}function I(){const a=[J(),m(gt,{duration:e.duration,onShow:E,onHide:j},$)];return e.expandSeparator===!0&&a.push(m(he,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:g.value}),m(he,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:g.value})),a}return e.group!==void 0&&N(),z(()=>{v!==void 0&&v()}),()=>m("div",{class:C.value},[m("div",{class:"q-expansion-item__container relative-position"},I())])}});const vt=ke({__name:"NotificationsList",setup(e){const x=Ce(),_=we(),c=n=>n.split(" ").map(u=>u.charAt(0).toUpperCase()+u.slice(1).toLowerCase()).join(" "),g=n=>{switch(n){case"done":return"sym_o_check";case"declined":return"sym_o_close";default:return"sym_o_pending"}},s=n=>{switch(n){case"done":return"green";case"declined":return"grey";default:return"blue-6"}},f=n=>{const u={timestampUnix:n.timestampUnix,type:n.type,status:"declined",title:n.title,recipientId:n.recipientId,recipientContent:n.recipientContent,requesterId:n.senderId};se("GLB | Notifications Actions",{Parameter:"Decline Update Finance",Data:u,ActivityData:{action:"Request Update Finance Declined",description:"xxx"}}),n.status="declined",n.read=!0,ie({message:"Task Declined",type:"negative",position:"top-right"})},i=n=>{if(console.log(n),n.title==="Request to Update Finance"){n.status="done",n.read=!0;const u={Parameter:"Aprove Update Finance",Data:n.metadata};se("GLB | Notifications Actions",u)}ie({message:"Task Approved",type:"positive",position:"top-right"})},d=n=>x.users.find(u=>u.userId===(n.requesterContent?n.recipientId:n.senderId))||{color:"grey",initials:"NA"};return(n,u)=>(F(),ee(Ke,{bordered:"",class:"rounded-borders q-ma-md"},{default:r(()=>[(F(!0),De(Be,null,Ee(Ne(_).loggedUser.notifications,(t,v)=>(F(),ee(ft,{key:v,"expand-separator":"","hide-expand-icon":"",group:"notifications"},{header:r(()=>[l(O,{avatar:""},{default:r(()=>[l(He,{size:"sm","text-color":"white",style:Ue({backgroundColor:d(t).color})},{default:r(()=>[P(L(d(t).initials),1)]),_:2},1032,["style"])]),_:2},1024),l(O,null,{default:r(()=>[P(L(t.title),1)]),_:2},1024),l(O,{side:""},{default:r(()=>[l(ge,{align:"top",rounded:"",color:t.read?"green":"orange-6"},{default:r(()=>[l(ct,{anchor:t.read?"bottom middle":"bottom end",self:t.read?"top middle":"top end",offset:[5,5]},{default:r(()=>[P(L(t.read?"Read":"Unread"),1)]),_:2},1032,["anchor","self"])]),_:2},1032,["color"]),P(" "+L(new Date(t.timestampUnix*1e3).toLocaleDateString())+" ",1),l(ge,{align:"bottom",rounded:"",color:s(t.status)},{default:r(()=>[l(H,{name:g(t.status)},null,8,["name"]),P(" "+L(c(t.type)),1)]),_:2},1032,["color"])]),_:2},1024)]),default:r(()=>[l(ut,null,{default:r(()=>[l(me,null,{default:r(()=>[l(rt),l(te,null,{default:r(()=>[l(it,{dense:"",class:"text-white q-pa-sm",color:s(t.status),label:c(t.status)},{default:r(()=>[l(H,{name:g(t.status)},null,8,["name"])]),_:2},1032,["color","label"])]),_:2},1024),l(Z,{onClick:C=>t.read=!t.read,icon:"sym_o_check",color:"green",size:"sm",label:"Mark as Read",disable:t.read},null,8,["onClick","disable"])]),_:2},1024),l(dt,null,{default:r(()=>[P(L(t.requesterContent)+" "+L(t.recipientContent),1)]),_:2},1024),xe(l(me,null,{default:r(()=>[l(te,{class:"q-gutter-x-md"},{default:r(()=>[l(Z,{dense:"",icon:"sym_o_close",color:"red-6",label:"Decline",onClick:C=>f(t)},null,8,["onClick"]),l(Z,{dense:"",icon:"sym_o_check",color:"green-6",label:"Approve",onClick:C=>i(t)},null,8,["onClick"])]),_:2},1024)]),_:2},1536),[[Te,t.type==="task"&&t.status==="pending"]])]),_:2},1024)]),_:2},1024))),128))]),_:1}))}});const ht=ke({__name:"NotificationsPage",setup(e){const x=Ce(),_=we();return $e(()=>{_.readSettings(),x.readAllUsers()}),(c,g)=>(F(),ee(ze,null,{default:r(()=>[l(Ge,null,{default:r(()=>[l(Me,null,{default:r(()=>[l(Fe,{class:"text-white bg-blue-6"},{default:r(()=>[l(H,{name:"sym_o_notifications",size:"md"}),l(Re,null,{default:r(()=>[P(" Notifications ")]),_:1})]),_:1}),l(vt)]),_:1})]),_:1})]),_:1}))}});var Lt=je(ht,[["__scopeId","data-v-32848024"]]);export{Lt as default};
