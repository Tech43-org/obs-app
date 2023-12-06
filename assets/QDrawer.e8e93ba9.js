import{u as De,b as _,a as Oe}from"./QSelect.0a5bf3b8.js";import{c as Ae,u as Le,a as $e,b as Pe,d as _e}from"./QChip.0dea64ff.js";import{u as ze,c as Fe}from"./QList.fd90aac6.js";import{ac as We,ad as A,I as Xe,ae as Ie,af as z,ag as Q,ah as le,ai as U,aj as Z,ak as R,ab as Ne,s as He,v as Ye,x as K,N as E,z as v,F as p,G as je,P as se,H as Ve,X as Qe,A as F,al as de,B as Ue,D as Re,C as Ke}from"./index.49fc7c04.js";const ee={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Ge=Object.keys(ee);ee.all=!0;function ce(t){const i={};for(const n of Ge)t[n]===!0&&(i[n]=!0);return Object.keys(i).length===0?ee:(i.horizontal===!0?i.left=i.right=!0:i.left===!0&&i.right===!0&&(i.horizontal=!0),i.vertical===!0?i.up=i.down=!0:i.up===!0&&i.down===!0&&(i.vertical=!0),i.horizontal===!0&&i.vertical===!0&&(i.all=!0),i)}const Je=["INPUT","TEXTAREA"];function ve(t,i){return i.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof i.handler=="function"&&Je.includes(t.target.nodeName.toUpperCase())===!1&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(i.uid)===-1)}function G(t,i,n){const g=Z(t);let e,r=g.left-i.event.x,l=g.top-i.event.y,f=Math.abs(r),m=Math.abs(l);const s=i.direction;s.horizontal===!0&&s.vertical!==!0?e=r<0?"left":"right":s.horizontal!==!0&&s.vertical===!0?e=l<0?"up":"down":s.up===!0&&l<0?(e="up",f>m&&(s.left===!0&&r<0?e="left":s.right===!0&&r>0&&(e="right"))):s.down===!0&&l>0?(e="down",f>m&&(s.left===!0&&r<0?e="left":s.right===!0&&r>0&&(e="right"))):s.left===!0&&r<0?(e="left",f<m&&(s.up===!0&&l<0?e="up":s.down===!0&&l>0&&(e="down"))):s.right===!0&&r>0&&(e="right",f<m&&(s.up===!0&&l<0?e="up":s.down===!0&&l>0&&(e="down")));let u=!1;if(e===void 0&&n===!1){if(i.event.isFirst===!0||i.event.lastDir===void 0)return{};e=i.event.lastDir,u=!0,e==="left"||e==="right"?(g.left-=r,f=0,r=0):(g.top-=l,m=0,l=0)}return{synthetic:u,payload:{evt:t,touch:i.event.mouse!==!0,mouse:i.event.mouse===!0,position:g,direction:e,isFirst:i.event.isFirst,isFinal:n===!0,duration:Date.now()-i.event.time,distance:{x:f,y:m},offset:{x:r,y:l},delta:{x:g.left-i.event.lastX,y:g.top-i.event.lastY}}}}let Ze=0;var J=We({name:"touch-pan",beforeMount(t,{value:i,modifiers:n}){if(n.mouse!==!0&&A.has.touch!==!0)return;function g(r,l){n.mouse===!0&&l===!0?Ne(r):(n.stop===!0&&U(r),n.prevent===!0&&le(r))}const e={uid:"qvtp_"+Ze++,handler:i,modifiers:n,direction:ce(n),noop:Xe,mouseStart(r){ve(r,e)&&Ie(r)&&(z(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(r,!0))},touchStart(r){if(ve(r,e)){const l=r.target;z(e,"temp",[[l,"touchmove","move","notPassiveCapture"],[l,"touchcancel","end","passiveCapture"],[l,"touchend","end","passiveCapture"]]),e.start(r)}},start(r,l){if(A.is.firefox===!0&&Q(t,!0),e.lastEvt=r,l===!0||n.stop===!0){if(e.direction.all!==!0&&(l!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const s=r.type.indexOf("mouse")>-1?new MouseEvent(r.type,r):new TouchEvent(r.type,r);r.defaultPrevented===!0&&le(s),r.cancelBubble===!0&&U(s),Object.assign(s,{qKeyEvent:r.qKeyEvent,qClickOutside:r.qClickOutside,qAnchorHandled:r.qAnchorHandled,qClonedBy:r.qClonedBy===void 0?[e.uid]:r.qClonedBy.concat(e.uid)}),e.initialEvent={target:r.target,event:s}}U(r)}const{left:f,top:m}=Z(r);e.event={x:f,y:m,time:Date.now(),mouse:l===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:m}},move(r){if(e.event===void 0)return;const l=Z(r),f=l.left-e.event.x,m=l.top-e.event.y;if(f===0&&m===0)return;e.lastEvt=r;const s=e.event.mouse===!0,u=()=>{g(r,s);let y;n.preserveCursor!==!0&&n.preservecursor!==!0&&(y=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),s===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Ae(),e.styleCleanup=d=>{if(e.styleCleanup=void 0,y!==void 0&&(document.documentElement.style.cursor=y),document.body.classList.remove("non-selectable"),s===!0){const B=()=>{document.body.classList.remove("no-pointer-events--children")};d!==void 0?setTimeout(()=>{B(),d()},50):B()}else d!==void 0&&d()}};if(e.event.detected===!0){e.event.isFirst!==!0&&g(r,e.event.mouse);const{payload:y,synthetic:d}=G(r,e,!1);y!==void 0&&(e.handler(y)===!1?e.end(r):(e.styleCleanup===void 0&&e.event.isFirst===!0&&u(),e.event.lastX=y.position.left,e.event.lastY=y.position.top,e.event.lastDir=d===!0?void 0:y.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||s===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){u(),e.event.detected=!0,e.move(r);return}const q=Math.abs(f),h=Math.abs(m);q!==h&&(e.direction.horizontal===!0&&q>h||e.direction.vertical===!0&&q<h||e.direction.up===!0&&q<h&&m<0||e.direction.down===!0&&q<h&&m>0||e.direction.left===!0&&q>h&&f<0||e.direction.right===!0&&q>h&&f>0?(e.event.detected=!0,e.move(r)):e.end(r,!0))},end(r,l){if(e.event!==void 0){if(R(e,"temp"),A.is.firefox===!0&&Q(t,!1),l===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(G(r===void 0?e.lastEvt:r,e).payload);const{payload:f}=G(r===void 0?e.lastEvt:r,e,!0),m=()=>{e.handler(f)};e.styleCleanup!==void 0?e.styleCleanup(m):m()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(t.__qtouchpan=e,n.mouse===!0){const r=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";z(e,"main",[[t,"mousedown","mouseStart",`passive${r}`]])}A.has.touch===!0&&z(e,"main",[[t,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,i){const n=t.__qtouchpan;n!==void 0&&(i.oldValue!==i.value&&(typeof value!="function"&&n.end(),n.handler=i.value),n.direction=ce(i.modifiers))},beforeUnmount(t){const i=t.__qtouchpan;i!==void 0&&(i.event!==void 0&&i.end(),R(i,"main"),R(i,"temp"),A.is.firefox===!0&&Q(t,!1),i.styleCleanup!==void 0&&i.styleCleanup(),delete t.__qtouchpan)}});const fe=150;var ut=He({name:"QDrawer",inheritAttrs:!1,props:{...Le,...ze,side:{type:String,default:"left",validator:t=>["left","right"].includes(t)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:t=>["default","desktop","mobile"].includes(t),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...$e,"onLayout","miniState"],setup(t,{slots:i,emit:n,attrs:g}){const e=Ke(),{proxy:{$q:r}}=e,l=Fe(t,r),{preventBodyScroll:f}=Oe(),{registerTimeout:m,removeTimeout:s}=Pe(),u=Ye(Re,K);if(u===K)return console.error("QDrawer needs to be child of QLayout"),K;let q,h=null,y;const d=E(t.behavior==="mobile"||t.behavior!=="desktop"&&u.totalWidth.value<=t.breakpoint),B=v(()=>t.mini===!0&&d.value!==!0),w=v(()=>B.value===!0?t.miniWidth:t.width),c=E(t.showIfAbove===!0&&d.value===!1?!0:t.modelValue===!0),te=v(()=>t.persistent!==!0&&(d.value===!0||ye.value===!0));function ae(a,o){if(me(),a!==!1&&u.animate(),C(0),d.value===!0){const b=u.instances[$.value];b!==void 0&&b.belowBreakpoint===!0&&b.hide(!1),S(1),u.isContainer.value!==!0&&f(!0)}else S(0),a!==!1&&Y(!1);m(()=>{a!==!1&&Y(!0),o!==!0&&n("show",a)},fe)}function re(a,o){he(),a!==!1&&u.animate(),S(0),C(T.value*w.value),j(),o!==!0?m(()=>{n("hide",a)},fe):s()}const{show:W,hide:D}=_e({showing:c,hideOnRouteChange:te,handleShow:ae,handleHide:re}),{addToHistory:me,removeFromHistory:he}=De(c,D,te),L={belowBreakpoint:d,hide:D},k=v(()=>t.side==="right"),T=v(()=>(r.lang.rtl===!0?-1:1)*(k.value===!0?1:-1)),ie=E(0),M=E(!1),X=E(!1),ue=E(w.value*T.value),$=v(()=>k.value===!0?"left":"right"),I=v(()=>c.value===!0&&d.value===!1&&t.overlay===!1?t.miniToOverlay===!0?t.miniWidth:w.value:0),N=v(()=>t.overlay===!0||t.miniToOverlay===!0||u.view.value.indexOf(k.value?"R":"L")>-1||r.platform.is.ios===!0&&u.isContainer.value===!0),O=v(()=>t.overlay===!1&&c.value===!0&&d.value===!1),ye=v(()=>t.overlay===!0&&c.value===!0&&d.value===!1),pe=v(()=>"fullscreen q-drawer__backdrop"+(c.value===!1&&M.value===!1?" hidden":"")),be=v(()=>({backgroundColor:`rgba(0,0,0,${ie.value*.4})`})),oe=v(()=>k.value===!0?u.rows.value.top[2]==="r":u.rows.value.top[0]==="l"),ge=v(()=>k.value===!0?u.rows.value.bottom[2]==="r":u.rows.value.bottom[0]==="l"),we=v(()=>{const a={};return u.header.space===!0&&oe.value===!1&&(N.value===!0?a.top=`${u.header.offset}px`:u.header.space===!0&&(a.top=`${u.header.size}px`)),u.footer.space===!0&&ge.value===!1&&(N.value===!0?a.bottom=`${u.footer.offset}px`:u.footer.space===!0&&(a.bottom=`${u.footer.size}px`)),a}),Ce=v(()=>{const a={width:`${w.value}px`,transform:`translateX(${ue.value}px)`};return d.value===!0?a:Object.assign(a,we.value)}),qe=v(()=>"q-drawer__content fit "+(u.isContainer.value!==!0?"scroll":"overflow-auto")),ke=v(()=>`q-drawer q-drawer--${t.side}`+(X.value===!0?" q-drawer--mini-animate":"")+(t.bordered===!0?" q-drawer--bordered":"")+(l.value===!0?" q-drawer--dark q-dark":"")+(M.value===!0?" no-transition":c.value===!0?"":" q-layout--prevent-focus")+(d.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${B.value===!0?"mini":"standard"}`+(N.value===!0||O.value!==!0?" fixed":"")+(t.overlay===!0||t.miniToOverlay===!0?" q-drawer--on-top":"")+(oe.value===!0?" q-drawer--top-padding":""))),Be=v(()=>{const a=r.lang.rtl===!0?t.side:$.value;return[[J,Me,void 0,{[a]:!0,mouse:!0}]]}),Se=v(()=>{const a=r.lang.rtl===!0?$.value:t.side;return[[J,ne,void 0,{[a]:!0,mouse:!0}]]}),xe=v(()=>{const a=r.lang.rtl===!0?$.value:t.side;return[[J,ne,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function H(){Ee(d,t.behavior==="mobile"||t.behavior!=="desktop"&&u.totalWidth.value<=t.breakpoint)}p(d,a=>{a===!0?(q=c.value,c.value===!0&&D(!1)):t.overlay===!1&&t.behavior!=="mobile"&&q!==!1&&(c.value===!0?(C(0),S(0),j()):W(!1))}),p(()=>t.side,(a,o)=>{u.instances[o]===L&&(u.instances[o]=void 0,u[o].space=!1,u[o].offset=0),u.instances[a]=L,u[a].size=w.value,u[a].space=O.value,u[a].offset=I.value}),p(u.totalWidth,()=>{(u.isContainer.value===!0||document.qScrollPrevented!==!0)&&H()}),p(()=>t.behavior+t.breakpoint,H),p(u.isContainer,a=>{c.value===!0&&f(a!==!0),a===!0&&H()}),p(u.scrollbarWidth,()=>{C(c.value===!0?0:void 0)}),p(I,a=>{x("offset",a)}),p(O,a=>{n("onLayout",a),x("space",a)}),p(k,()=>{C()}),p(w,a=>{C(),V(t.miniToOverlay,a)}),p(()=>t.miniToOverlay,a=>{V(a,w.value)}),p(()=>r.lang.rtl,()=>{C()}),p(()=>t.mini,()=>{t.noMiniAnimation||t.modelValue===!0&&(Te(),u.animate())}),p(B,a=>{n("miniState",a)});function C(a){a===void 0?se(()=>{a=c.value===!0?0:w.value,C(T.value*a)}):(u.isContainer.value===!0&&k.value===!0&&(d.value===!0||Math.abs(a)===w.value)&&(a+=T.value*u.scrollbarWidth.value),ue.value=a)}function S(a){ie.value=a}function Y(a){const o=a===!0?"remove":u.isContainer.value!==!0?"add":"";o!==""&&document.body.classList[o]("q-body--drawer-toggle")}function Te(){h!==null&&clearTimeout(h),e.proxy&&e.proxy.$el&&e.proxy.$el.classList.add("q-drawer--mini-animate"),X.value=!0,h=setTimeout(()=>{h=null,X.value=!1,e&&e.proxy&&e.proxy.$el&&e.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Me(a){if(c.value!==!1)return;const o=w.value,b=_(a.distance.x,0,o);if(a.isFinal===!0){b>=Math.min(75,o)===!0?W():(u.animate(),S(0),C(T.value*o)),M.value=!1;return}C((r.lang.rtl===!0?k.value!==!0:k.value)?Math.max(o-b,0):Math.min(0,b-o)),S(_(b/o,0,1)),a.isFirst===!0&&(M.value=!0)}function ne(a){if(c.value!==!0)return;const o=w.value,b=a.direction===t.side,P=(r.lang.rtl===!0?b!==!0:b)?_(a.distance.x,0,o):0;if(a.isFinal===!0){Math.abs(P)<Math.min(75,o)===!0?(u.animate(),S(1),C(0)):D(),M.value=!1;return}C(T.value*P),S(_(1-P/o,0,1)),a.isFirst===!0&&(M.value=!0)}function j(){f(!1),Y(!0)}function x(a,o){u.update(t.side,a,o)}function Ee(a,o){a.value!==o&&(a.value=o)}function V(a,o){x("size",a===!0?t.miniWidth:o)}return u.instances[t.side]=L,V(t.miniToOverlay,w.value),x("space",O.value),x("offset",I.value),t.showIfAbove===!0&&t.modelValue!==!0&&c.value===!0&&t["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),je(()=>{n("onLayout",O.value),n("miniState",B.value),q=t.showIfAbove===!0;const a=()=>{(c.value===!0?ae:re)(!1,!0)};if(u.totalWidth.value!==0){se(a);return}y=p(u.totalWidth,()=>{y(),y=void 0,c.value===!1&&t.showIfAbove===!0&&d.value===!1?W(!1):a()})}),Ve(()=>{y!==void 0&&y(),h!==null&&(clearTimeout(h),h=null),c.value===!0&&j(),u.instances[t.side]===L&&(u.instances[t.side]=void 0,x("size",0),x("offset",0),x("space",!1))}),()=>{const a=[];d.value===!0&&(t.noSwipeOpen===!1&&a.push(Qe(F("div",{key:"open",class:`q-drawer__opener fixed-${t.side}`,"aria-hidden":"true"}),Be.value)),a.push(de("div",{ref:"backdrop",class:pe.value,style:be.value,"aria-hidden":"true",onClick:D},void 0,"backdrop",t.noSwipeBackdrop!==!0&&c.value===!0,()=>xe.value)));const o=B.value===!0&&i.mini!==void 0,b=[F("div",{...g,key:""+o,class:[qe.value,g.class]},o===!0?i.mini():Ue(i.default))];return t.elevated===!0&&c.value===!0&&b.push(F("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(de("aside",{ref:"content",class:ke.value,style:Ce.value},b,"contentclose",t.noSwipeClose!==!0&&d.value===!0,()=>Se.value)),F("div",{class:"q-drawer-container"},a)}}});export{ut as Q};
