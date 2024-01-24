import{u as Te,a as Ee,b as P,c as Oe}from"./QSelect.52f5a7be.js";import{c as $e,u as _e,a as Ae,b as Le}from"./QChip.1ab6b5fc.js";import{u as Pe,b as Fe}from"./QItem.343513fa.js";import{af as We,ag as $,I as ze,ah as Ie,ai as F,aj as R,ak as re,al as K,am as Z,an as N,ae as Xe,s as He,v as Ye,x as U,O as T,z as v,F as p,G as Ve,R as le,H as Qe,a0 as je,A as W,ao as se,B as Re,D as Ke,C as Ne}from"./index.47b229d6.js";import{g as de,s as ce}from"./touch.3df10340.js";function G(a,o,r){const w=Z(a);let e,u=w.left-o.event.x,l=w.top-o.event.y,f=Math.abs(u),m=Math.abs(l);const s=o.direction;s.horizontal===!0&&s.vertical!==!0?e=u<0?"left":"right":s.horizontal!==!0&&s.vertical===!0?e=l<0?"up":"down":s.up===!0&&l<0?(e="up",f>m&&(s.left===!0&&u<0?e="left":s.right===!0&&u>0&&(e="right"))):s.down===!0&&l>0?(e="down",f>m&&(s.left===!0&&u<0?e="left":s.right===!0&&u>0&&(e="right"))):s.left===!0&&u<0?(e="left",f<m&&(s.up===!0&&l<0?e="up":s.down===!0&&l>0&&(e="down"))):s.right===!0&&u>0&&(e="right",f<m&&(s.up===!0&&l<0?e="up":s.down===!0&&l>0&&(e="down")));let i=!1;if(e===void 0&&r===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};e=o.event.lastDir,i=!0,e==="left"||e==="right"?(w.left-=u,f=0,u=0):(w.top-=l,m=0,l=0)}return{synthetic:i,payload:{evt:a,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:w,direction:e,isFirst:o.event.isFirst,isFinal:r===!0,duration:Date.now()-o.event.time,distance:{x:f,y:m},offset:{x:u,y:l},delta:{x:w.left-o.event.lastX,y:w.top-o.event.lastY}}}}let Ue=0;var J=We({name:"touch-pan",beforeMount(a,{value:o,modifiers:r}){if(r.mouse!==!0&&$.has.touch!==!0)return;function w(u,l){r.mouse===!0&&l===!0?Xe(u):(r.stop===!0&&K(u),r.prevent===!0&&re(u))}const e={uid:"qvtp_"+Ue++,handler:o,modifiers:r,direction:de(r),noop:ze,mouseStart(u){ce(u,e)&&Ie(u)&&(F(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(u,!0))},touchStart(u){if(ce(u,e)){const l=u.target;F(e,"temp",[[l,"touchmove","move","notPassiveCapture"],[l,"touchcancel","end","passiveCapture"],[l,"touchend","end","passiveCapture"]]),e.start(u)}},start(u,l){if($.is.firefox===!0&&R(a,!0),e.lastEvt=u,l===!0||r.stop===!0){if(e.direction.all!==!0&&(l!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const s=u.type.indexOf("mouse")>-1?new MouseEvent(u.type,u):new TouchEvent(u.type,u);u.defaultPrevented===!0&&re(s),u.cancelBubble===!0&&K(s),Object.assign(s,{qKeyEvent:u.qKeyEvent,qClickOutside:u.qClickOutside,qAnchorHandled:u.qAnchorHandled,qClonedBy:u.qClonedBy===void 0?[e.uid]:u.qClonedBy.concat(e.uid)}),e.initialEvent={target:u.target,event:s}}K(u)}const{left:f,top:m}=Z(u);e.event={x:f,y:m,time:Date.now(),mouse:l===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:m}},move(u){if(e.event===void 0)return;const l=Z(u),f=l.left-e.event.x,m=l.top-e.event.y;if(f===0&&m===0)return;e.lastEvt=u;const s=e.event.mouse===!0,i=()=>{w(u,s);let y;r.preserveCursor!==!0&&r.preservecursor!==!0&&(y=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),s===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),$e(),e.styleCleanup=d=>{if(e.styleCleanup=void 0,y!==void 0&&(document.documentElement.style.cursor=y),document.body.classList.remove("non-selectable"),s===!0){const B=()=>{document.body.classList.remove("no-pointer-events--children")};d!==void 0?setTimeout(()=>{B(),d()},50):B()}else d!==void 0&&d()}};if(e.event.detected===!0){e.event.isFirst!==!0&&w(u,e.event.mouse);const{payload:y,synthetic:d}=G(u,e,!1);y!==void 0&&(e.handler(y)===!1?e.end(u):(e.styleCleanup===void 0&&e.event.isFirst===!0&&i(),e.event.lastX=y.position.left,e.event.lastY=y.position.top,e.event.lastDir=d===!0?void 0:y.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||s===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){i(),e.event.detected=!0,e.move(u);return}const q=Math.abs(f),h=Math.abs(m);q!==h&&(e.direction.horizontal===!0&&q>h||e.direction.vertical===!0&&q<h||e.direction.up===!0&&q<h&&m<0||e.direction.down===!0&&q<h&&m>0||e.direction.left===!0&&q>h&&f<0||e.direction.right===!0&&q>h&&f>0?(e.event.detected=!0,e.move(u)):e.end(u,!0))},end(u,l){if(e.event!==void 0){if(N(e,"temp"),$.is.firefox===!0&&R(a,!1),l===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(G(u===void 0?e.lastEvt:u,e).payload);const{payload:f}=G(u===void 0?e.lastEvt:u,e,!0),m=()=>{e.handler(f)};e.styleCleanup!==void 0?e.styleCleanup(m):m()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(a.__qtouchpan=e,r.mouse===!0){const u=r.mouseCapture===!0||r.mousecapture===!0?"Capture":"";F(e,"main",[[a,"mousedown","mouseStart",`passive${u}`]])}$.has.touch===!0&&F(e,"main",[[a,"touchstart","touchStart",`passive${r.capture===!0?"Capture":""}`],[a,"touchmove","noop","notPassiveCapture"]])},updated(a,o){const r=a.__qtouchpan;r!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&r.end(),r.handler=o.value),r.direction=de(o.modifiers))},beforeUnmount(a){const o=a.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),N(o,"main"),N(o,"temp"),$.is.firefox===!0&&R(a,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete a.__qtouchpan)}});const ve=150;var ut=He({name:"QDrawer",inheritAttrs:!1,props:{..._e,...Pe,side:{type:String,default:"left",validator:a=>["left","right"].includes(a)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:a=>["default","desktop","mobile"].includes(a),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Ae,"onLayout","miniState"],setup(a,{slots:o,emit:r,attrs:w}){const e=Ne(),{proxy:{$q:u}}=e,l=Fe(a,u),{preventBodyScroll:f}=Oe(),{registerTimeout:m,removeTimeout:s}=Te(),i=Ye(Ke,U);if(i===U)return console.error("QDrawer needs to be child of QLayout"),U;let q,h=null,y;const d=T(a.behavior==="mobile"||a.behavior!=="desktop"&&i.totalWidth.value<=a.breakpoint),B=v(()=>a.mini===!0&&d.value!==!0),g=v(()=>B.value===!0?a.miniWidth:a.width),c=T(a.showIfAbove===!0&&d.value===!1?!0:a.modelValue===!0),ee=v(()=>a.persistent!==!0&&(d.value===!0||he.value===!0));function te(t,n){if(fe(),t!==!1&&i.animate(),C(0),d.value===!0){const b=i.instances[A.value];b!==void 0&&b.belowBreakpoint===!0&&b.hide(!1),x(1),i.isContainer.value!==!0&&f(!0)}else x(0),t!==!1&&V(!1);m(()=>{t!==!1&&V(!0),n!==!0&&r("show",t)},ve)}function ae(t,n){me(),t!==!1&&i.animate(),x(0),C(M.value*g.value),Q(),n!==!0?m(()=>{r("hide",t)},ve):s()}const{show:z,hide:E}=Le({showing:c,hideOnRouteChange:ee,handleShow:te,handleHide:ae}),{addToHistory:fe,removeFromHistory:me}=Ee(c,E,ee),_={belowBreakpoint:d,hide:E},k=v(()=>a.side==="right"),M=v(()=>(u.lang.rtl===!0?-1:1)*(k.value===!0?1:-1)),ue=T(0),D=T(!1),I=T(!1),ie=T(g.value*M.value),A=v(()=>k.value===!0?"left":"right"),X=v(()=>c.value===!0&&d.value===!1&&a.overlay===!1?a.miniToOverlay===!0?a.miniWidth:g.value:0),H=v(()=>a.overlay===!0||a.miniToOverlay===!0||i.view.value.indexOf(k.value?"R":"L")>-1||u.platform.is.ios===!0&&i.isContainer.value===!0),O=v(()=>a.overlay===!1&&c.value===!0&&d.value===!1),he=v(()=>a.overlay===!0&&c.value===!0&&d.value===!1),ye=v(()=>"fullscreen q-drawer__backdrop"+(c.value===!1&&D.value===!1?" hidden":"")),pe=v(()=>({backgroundColor:`rgba(0,0,0,${ue.value*.4})`})),ne=v(()=>k.value===!0?i.rows.value.top[2]==="r":i.rows.value.top[0]==="l"),be=v(()=>k.value===!0?i.rows.value.bottom[2]==="r":i.rows.value.bottom[0]==="l"),we=v(()=>{const t={};return i.header.space===!0&&ne.value===!1&&(H.value===!0?t.top=`${i.header.offset}px`:i.header.space===!0&&(t.top=`${i.header.size}px`)),i.footer.space===!0&&be.value===!1&&(H.value===!0?t.bottom=`${i.footer.offset}px`:i.footer.space===!0&&(t.bottom=`${i.footer.size}px`)),t}),ge=v(()=>{const t={width:`${g.value}px`,transform:`translateX(${ie.value}px)`};return d.value===!0?t:Object.assign(t,we.value)}),Ce=v(()=>"q-drawer__content fit "+(i.isContainer.value!==!0?"scroll":"overflow-auto")),qe=v(()=>`q-drawer q-drawer--${a.side}`+(I.value===!0?" q-drawer--mini-animate":"")+(a.bordered===!0?" q-drawer--bordered":"")+(l.value===!0?" q-drawer--dark q-dark":"")+(D.value===!0?" no-transition":c.value===!0?"":" q-layout--prevent-focus")+(d.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${B.value===!0?"mini":"standard"}`+(H.value===!0||O.value!==!0?" fixed":"")+(a.overlay===!0||a.miniToOverlay===!0?" q-drawer--on-top":"")+(ne.value===!0?" q-drawer--top-padding":""))),ke=v(()=>{const t=u.lang.rtl===!0?a.side:A.value;return[[J,Me,void 0,{[t]:!0,mouse:!0}]]}),Be=v(()=>{const t=u.lang.rtl===!0?A.value:a.side;return[[J,oe,void 0,{[t]:!0,mouse:!0}]]}),xe=v(()=>{const t=u.lang.rtl===!0?A.value:a.side;return[[J,oe,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]});function Y(){De(d,a.behavior==="mobile"||a.behavior!=="desktop"&&i.totalWidth.value<=a.breakpoint)}p(d,t=>{t===!0?(q=c.value,c.value===!0&&E(!1)):a.overlay===!1&&a.behavior!=="mobile"&&q!==!1&&(c.value===!0?(C(0),x(0),Q()):z(!1))}),p(()=>a.side,(t,n)=>{i.instances[n]===_&&(i.instances[n]=void 0,i[n].space=!1,i[n].offset=0),i.instances[t]=_,i[t].size=g.value,i[t].space=O.value,i[t].offset=X.value}),p(i.totalWidth,()=>{(i.isContainer.value===!0||document.qScrollPrevented!==!0)&&Y()}),p(()=>a.behavior+a.breakpoint,Y),p(i.isContainer,t=>{c.value===!0&&f(t!==!0),t===!0&&Y()}),p(i.scrollbarWidth,()=>{C(c.value===!0?0:void 0)}),p(X,t=>{S("offset",t)}),p(O,t=>{r("onLayout",t),S("space",t)}),p(k,()=>{C()}),p(g,t=>{C(),j(a.miniToOverlay,t)}),p(()=>a.miniToOverlay,t=>{j(t,g.value)}),p(()=>u.lang.rtl,()=>{C()}),p(()=>a.mini,()=>{a.noMiniAnimation||a.modelValue===!0&&(Se(),i.animate())}),p(B,t=>{r("miniState",t)});function C(t){t===void 0?le(()=>{t=c.value===!0?0:g.value,C(M.value*t)}):(i.isContainer.value===!0&&k.value===!0&&(d.value===!0||Math.abs(t)===g.value)&&(t+=M.value*i.scrollbarWidth.value),ie.value=t)}function x(t){ue.value=t}function V(t){const n=t===!0?"remove":i.isContainer.value!==!0?"add":"";n!==""&&document.body.classList[n]("q-body--drawer-toggle")}function Se(){h!==null&&clearTimeout(h),e.proxy&&e.proxy.$el&&e.proxy.$el.classList.add("q-drawer--mini-animate"),I.value=!0,h=setTimeout(()=>{h=null,I.value=!1,e&&e.proxy&&e.proxy.$el&&e.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Me(t){if(c.value!==!1)return;const n=g.value,b=P(t.distance.x,0,n);if(t.isFinal===!0){b>=Math.min(75,n)===!0?z():(i.animate(),x(0),C(M.value*n)),D.value=!1;return}C((u.lang.rtl===!0?k.value!==!0:k.value)?Math.max(n-b,0):Math.min(0,b-n)),x(P(b/n,0,1)),t.isFirst===!0&&(D.value=!0)}function oe(t){if(c.value!==!0)return;const n=g.value,b=t.direction===a.side,L=(u.lang.rtl===!0?b!==!0:b)?P(t.distance.x,0,n):0;if(t.isFinal===!0){Math.abs(L)<Math.min(75,n)===!0?(i.animate(),x(1),C(0)):E(),D.value=!1;return}C(M.value*L),x(P(1-L/n,0,1)),t.isFirst===!0&&(D.value=!0)}function Q(){f(!1),V(!0)}function S(t,n){i.update(a.side,t,n)}function De(t,n){t.value!==n&&(t.value=n)}function j(t,n){S("size",t===!0?a.miniWidth:n)}return i.instances[a.side]=_,j(a.miniToOverlay,g.value),S("space",O.value),S("offset",X.value),a.showIfAbove===!0&&a.modelValue!==!0&&c.value===!0&&a["onUpdate:modelValue"]!==void 0&&r("update:modelValue",!0),Ve(()=>{r("onLayout",O.value),r("miniState",B.value),q=a.showIfAbove===!0;const t=()=>{(c.value===!0?te:ae)(!1,!0)};if(i.totalWidth.value!==0){le(t);return}y=p(i.totalWidth,()=>{y(),y=void 0,c.value===!1&&a.showIfAbove===!0&&d.value===!1?z(!1):t()})}),Qe(()=>{y!==void 0&&y(),h!==null&&(clearTimeout(h),h=null),c.value===!0&&Q(),i.instances[a.side]===_&&(i.instances[a.side]=void 0,S("size",0),S("offset",0),S("space",!1))}),()=>{const t=[];d.value===!0&&(a.noSwipeOpen===!1&&t.push(je(W("div",{key:"open",class:`q-drawer__opener fixed-${a.side}`,"aria-hidden":"true"}),ke.value)),t.push(se("div",{ref:"backdrop",class:ye.value,style:pe.value,"aria-hidden":"true",onClick:E},void 0,"backdrop",a.noSwipeBackdrop!==!0&&c.value===!0,()=>xe.value)));const n=B.value===!0&&o.mini!==void 0,b=[W("div",{...w,key:""+n,class:[Ce.value,w.class]},n===!0?o.mini():Re(o.default))];return a.elevated===!0&&c.value===!0&&b.push(W("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(se("aside",{ref:"content",class:qe.value,style:ge.value},b,"contentclose",a.noSwipeClose!==!0&&d.value===!0,()=>Be.value)),W("div",{class:"q-drawer-container"},t)}}});export{ut as Q};
