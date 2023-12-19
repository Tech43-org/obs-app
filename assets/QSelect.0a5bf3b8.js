import{u as et,a as qt,b as At,c as Bt,d as sl,e as cl,f as gt,g as dl}from"./QInput.152723dc.js";import{H as Te,ax as St,ay as fl,aa as Et,ad as Ot,s as Ke,N as M,z as y,F as ie,aj as vl,J as ml,A as k,B as pt,a1 as Je,C as $e,az as zt,ab as ge,I as gl,an as Sl,a6 as hl,aq as yl,ar as bl,P as ce,aA as ze,ap as wl,aB as Cl,ah as Ye,a4 as xl,ai as qe,as as kl,U as Vl}from"./index.49fc7c04.js";import{h as ql,u as Ft,e as Tt,v as ht,i as Al,a as Mt,j as It,b as _t,k as Pt,l as Bl,m as El,d as Ht,n as Lt,p as yt,r as bt,o as Ol,s as pl,q as zl,Q as Fl}from"./QChip.0dea64ff.js";import{u as Tl,c as Ml,b as Il,a as _l}from"./QList.fd90aac6.js";import{c as Rt,b as Pl}from"./focus-manager.0068caea.js";function Hl(e,n,s){let m;function C(){m!==void 0&&(St.remove(m),m=void 0)}return Te(()=>{e.value===!0&&C()}),{removeFromHistory:C,addToHistory(){m={condition:()=>s.value===!0,handler:n},St.add(m)}}}function Ll(){let e;return{preventBodyScroll(n){n!==e&&(e!==void 0||n===!0)&&(e=n,fl(n))}}}const wt=["B","KB","MB","GB","TB","PB"];function un(e){let n=0;for(;parseInt(e,10)>=1024&&n<wt.length-1;)e/=1024,++n;return`${e.toFixed(1)}${wt[n]}`}function on(e,n,s){return s<=n?n:Math.min(s,Math.max(n,e))}function Ct(e,n,s){if(s<=n)return n;const m=s-n+1;let C=n+(e-n)%m;return C<n&&(C=m+C),C===0?0:C}const Se=[];let Be;function Rl(e){Be=e.keyCode===27}function Dl(){Be===!0&&(Be=!1)}function Kl(e){Be===!0&&(Be=!1,Et(e,27)===!0&&Se[Se.length-1](e))}function Dt(e){window[e]("keydown",Rl),window[e]("blur",Dl),window[e]("keyup",Kl),Be=!1}function Kt(e){Ot.is.desktop===!0&&(Se.push(e),Se.length===1&&Dt("addEventListener"))}function Re(e){const n=Se.indexOf(e);n>-1&&(Se.splice(n,1),Se.length===0&&Dt("removeEventListener"))}const he=[];function $t(e){he[he.length-1](e)}function jt(e){Ot.is.desktop===!0&&(he.push(e),he.length===1&&document.body.addEventListener("focusin",$t))}function Ze(e){const n=he.indexOf(e);n>-1&&(he.splice(n,1),he.length===0&&document.body.removeEventListener("focusin",$t))}var $l=Ke({name:"QMenu",inheritAttrs:!1,props:{...ql,...Ft,...Tl,...Tt,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:ht},self:{type:String,validator:ht},offset:{type:Array,validator:Al},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Mt,"click","escapeKey"],setup(e,{slots:n,emit:s,attrs:m}){let C=null,a,V,b;const g=$e(),{proxy:q}=g,{$q:c}=q,w=M(null),x=M(!1),A=y(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),z=Ml(e,c),{registerTick:$,removeTick:I}=It(),{registerTimeout:j}=_t(),{transitionProps:N,transitionStyle:P}=Pt(e),{localScrollTarget:O,changeScrollEvent:se,unconfigureScrollTarget:F}=Bl(e,S),{anchorEl:H,canShow:G}=El({showing:x}),{hide:te}=Ht({showing:x,canShow:G,handleShow:Z,handleHide:l,hideOnRouteChange:A,processOnMount:!0}),{showPortal:U,hidePortal:X,renderPortal:R}=Lt(g,w,T,"menu"),J={anchorEl:H,innerRef:w,onClickOutside(u){if(e.persistent!==!0&&x.value===!0)return te(u),(u.type==="touchstart"||u.target.classList.contains("q-dialog__backdrop"))&&ge(u),!0}},ae=y(()=>yt(e.anchor||(e.cover===!0?"center middle":"bottom start"),c.lang.rtl)),le=y(()=>e.cover===!0?ae.value:yt(e.self||"top start",c.lang.rtl)),L=y(()=>(e.square===!0?" q-menu--square":"")+(z.value===!0?" q-menu--dark q-dark":"")),re=y(()=>e.autoClose===!0?{onClick:B}:{}),Y=y(()=>x.value===!0&&e.persistent!==!0);ie(Y,u=>{u===!0?(Kt(f),zl(J)):(Re(f),bt(J))});function Q(){Rt(()=>{let u=w.value;u&&u.contains(document.activeElement)!==!0&&(u=u.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||u.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||u.querySelector("[autofocus], [data-autofocus]")||u,u.focus({preventScroll:!0}))})}function Z(u){if(C=e.noRefocus===!1?document.activeElement:null,jt(d),U(),S(),a=void 0,u!==void 0&&(e.touchPosition||e.contextMenu)){const D=vl(u);if(D.left!==void 0){const{top:ne,left:ye}=H.value.getBoundingClientRect();a={left:D.left-ye,top:D.top-ne}}}V===void 0&&(V=ie(()=>c.screen.width+"|"+c.screen.height+"|"+e.self+"|"+e.anchor+"|"+c.lang.rtl,v)),e.noFocus!==!0&&document.activeElement.blur(),$(()=>{v(),e.noFocus!==!0&&Q()}),j(()=>{c.platform.is.ios===!0&&(b=e.autoClose,w.value.click()),v(),U(!0),s("show",u)},e.transitionDuration)}function l(u){I(),X(),i(!0),C!==null&&(u===void 0||u.qClickOutside!==!0)&&(((u&&u.type.indexOf("key")===0?C.closest('[tabindex]:not([tabindex^="-"])'):void 0)||C).focus(),C=null),j(()=>{X(!0),s("hide",u)},e.transitionDuration)}function i(u){a=void 0,V!==void 0&&(V(),V=void 0),(u===!0||x.value===!0)&&(Ze(d),F(),bt(J),Re(f)),u!==!0&&(C=null)}function S(){(H.value!==null||e.scrollTarget!==void 0)&&(O.value=ml(H.value,e.scrollTarget),se(O.value,v))}function B(u){b!==!0?(Ol(q,u),s("click",u)):b=!1}function d(u){Y.value===!0&&e.noFocus!==!0&&zt(w.value,u.target)!==!0&&Q()}function f(u){s("escapeKey"),te(u)}function v(){pl({targetEl:w.value,offset:e.offset,anchorEl:H.value,anchorOrigin:ae.value,selfOrigin:le.value,absoluteOffset:a,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function T(){return k(Je,N.value,()=>x.value===!0?k("div",{role:"menu",...m,ref:w,tabindex:-1,class:["q-menu q-position-engine scroll"+L.value,m.class],style:[m.style,P.value],...re.value},pt(n.default)):null)}return Te(i),Object.assign(q,{focus:Q,updatePosition:v}),R}}),jl=Ke({name:"QField",inheritAttrs:!1,props:{...et,tag:{type:String,default:"label"}},emits:qt,setup(){return At(Bt({requiredForAttr:!1,tagProp:!0}))}});let Le=0;const Nl={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},xt={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var Ql=Ke({name:"QDialog",inheritAttrs:!1,props:{...Ft,...Tt,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...Mt,"shake","click","escapeKey"],setup(e,{slots:n,emit:s,attrs:m}){const C=$e(),a=M(null),V=M(!1),b=M(!1);let g=null,q=null,c,w;const x=y(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:A}=Ll(),{registerTimeout:z}=_t(),{registerTick:$,removeTick:I}=It(),{transitionProps:j,transitionStyle:N}=Pt(e,()=>xt[e.position][0],()=>xt[e.position][1]),{showPortal:P,hidePortal:O,portalIsAccessible:se,renderPortal:F}=Lt(C,a,B,"dialog"),{hide:H}=Ht({showing:V,hideOnRouteChange:x,handleShow:ae,handleHide:le,processOnMount:!0}),{addToHistory:G,removeFromHistory:te}=Hl(V,H,x),U=y(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${Nl[e.position]}`+(b.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),X=y(()=>V.value===!0&&e.seamless!==!0),R=y(()=>e.autoClose===!0?{onClick:l}:{}),J=y(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${X.value===!0?"modal":"seamless"}`,m.class]);ie(()=>e.maximized,d=>{V.value===!0&&Z(d)}),ie(X,d=>{A(d),d===!0?(jt(S),Kt(Y)):(Ze(S),Re(Y))});function ae(d){G(),q=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,Z(e.maximized),P(),b.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),$(L)):I(),z(()=>{if(C.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:f,bottom:v}=document.activeElement.getBoundingClientRect(),{innerHeight:T}=window,u=window.visualViewport!==void 0?window.visualViewport.height:T;f>0&&v>u/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-u,v>=T?1/0:Math.ceil(document.scrollingElement.scrollTop+v-u/2))),document.activeElement.scrollIntoView()}w=!0,a.value.click(),w=!1}P(!0),b.value=!1,s("show",d)},e.transitionDuration)}function le(d){I(),te(),Q(!0),b.value=!0,O(),q!==null&&(((d&&d.type.indexOf("key")===0?q.closest('[tabindex]:not([tabindex^="-"])'):void 0)||q).focus(),q=null),z(()=>{O(!0),b.value=!1,s("hide",d)},e.transitionDuration)}function L(d){Rt(()=>{let f=a.value;f===null||f.contains(document.activeElement)===!0||(f=(d!==""?f.querySelector(d):null)||f.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||f.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||f.querySelector("[autofocus], [data-autofocus]")||f,f.focus({preventScroll:!0}))})}function re(d){d&&typeof d.focus=="function"?d.focus({preventScroll:!0}):L(),s("shake");const f=a.value;f!==null&&(f.classList.remove("q-animate--scale"),f.classList.add("q-animate--scale"),g!==null&&clearTimeout(g),g=setTimeout(()=>{g=null,a.value!==null&&(f.classList.remove("q-animate--scale"),L())},170))}function Y(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&re():(s("escapeKey"),H()))}function Q(d){g!==null&&(clearTimeout(g),g=null),(d===!0||V.value===!0)&&(Z(!1),e.seamless!==!0&&(A(!1),Ze(S),Re(Y))),d!==!0&&(q=null)}function Z(d){d===!0?c!==!0&&(Le<1&&document.body.classList.add("q-body--dialog"),Le++,c=!0):c===!0&&(Le<2&&document.body.classList.remove("q-body--dialog"),Le--,c=!1)}function l(d){w!==!0&&(H(d),s("click",d))}function i(d){e.persistent!==!0&&e.noBackdropDismiss!==!0?H(d):e.noShake!==!0&&re()}function S(d){e.allowFocusOutside!==!0&&se.value===!0&&zt(a.value,d.target)!==!0&&L('[tabindex]:not([tabindex="-1"])')}Object.assign(C.proxy,{focus:L,shake:re,__updateRefocusTarget(d){q=d||null}}),Te(Q);function B(){return k("div",{role:"dialog","aria-modal":X.value===!0?"true":"false",...m,class:J.value},[k(Je,{name:"q-transition--fade",appear:!0},()=>X.value===!0?k("div",{class:"q-dialog__backdrop fixed-full",style:N.value,"aria-hidden":"true",tabindex:-1,onClick:i}):null),k(Je,j.value,()=>V.value===!0?k("div",{ref:a,class:U.value,style:N.value,tabindex:-1,...R.value},pt(n.default)):null)])}return F}});let De=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const n=document.createElement("div");Object.assign(n.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(n),e.scrollLeft=-1e3,De=e.scrollLeft>=0,e.remove()}const ee=1e3,Wl=["start","center","end","start-force","center-force","end-force"],Nt=Array.prototype.filter,Ul=window.getComputedStyle(document.body).overflowAnchor===void 0?gl:function(e,n){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const s=e.children||[];Nt.call(s,C=>C.dataset&&C.dataset.qVsAnchor!==void 0).forEach(C=>{delete C.dataset.qVsAnchor});const m=s[n];m&&m.dataset&&(m.dataset.qVsAnchor="")}))};function Ae(e,n){return e+n}function Ge(e,n,s,m,C,a,V,b){const g=e===window?document.scrollingElement||document.documentElement:e,q=C===!0?"offsetWidth":"offsetHeight",c={scrollStart:0,scrollViewSize:-V-b,scrollMaxSize:0,offsetStart:-V,offsetEnd:-b};if(C===!0?(e===window?(c.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,c.scrollViewSize+=document.documentElement.clientWidth):(c.scrollStart=g.scrollLeft,c.scrollViewSize+=g.clientWidth),c.scrollMaxSize=g.scrollWidth,a===!0&&(c.scrollStart=(De===!0?c.scrollMaxSize-c.scrollViewSize:0)-c.scrollStart)):(e===window?(c.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,c.scrollViewSize+=document.documentElement.clientHeight):(c.scrollStart=g.scrollTop,c.scrollViewSize+=g.clientHeight),c.scrollMaxSize=g.scrollHeight),s!==null)for(let w=s.previousElementSibling;w!==null;w=w.previousElementSibling)w.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetStart+=w[q]);if(m!==null)for(let w=m.nextElementSibling;w!==null;w=w.nextElementSibling)w.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetEnd+=w[q]);if(n!==e){const w=g.getBoundingClientRect(),x=n.getBoundingClientRect();C===!0?(c.offsetStart+=x.left-w.left,c.offsetEnd-=x.width):(c.offsetStart+=x.top-w.top,c.offsetEnd-=x.height),e!==window&&(c.offsetStart+=c.scrollStart),c.offsetEnd+=c.scrollMaxSize-c.offsetStart}return c}function kt(e,n,s,m){n==="end"&&(n=(e===window?document.body:e)[s===!0?"scrollWidth":"scrollHeight"]),e===window?s===!0?(m===!0&&(n=(De===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-n),window.scrollTo(n,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,n):s===!0?(m===!0&&(n=(De===!0?e.scrollWidth-e.offsetWidth:0)-n),e.scrollLeft=n):e.scrollTop=n}function Fe(e,n,s,m){if(s>=m)return 0;const C=n.length,a=Math.floor(s/ee),V=Math.floor((m-1)/ee)+1;let b=e.slice(a,V).reduce(Ae,0);return s%ee!==0&&(b-=n.slice(a*ee,s).reduce(Ae,0)),m%ee!==0&&m!==C&&(b-=n.slice(m,V*ee).reduce(Ae,0)),b}const Qt={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},an=Object.keys(Qt),Xl={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...Qt};function Yl({virtualScrollLength:e,getVirtualScrollTarget:n,getVirtualScrollEl:s,virtualScrollItemSizeComputed:m}){const C=$e(),{props:a,emit:V,proxy:b}=C,{$q:g}=b;let q,c,w,x=[],A;const z=M(0),$=M(0),I=M({}),j=M(null),N=M(null),P=M(null),O=M({from:0,to:0}),se=y(()=>a.tableColspan!==void 0?a.tableColspan:100);m===void 0&&(m=y(()=>a.virtualScrollItemSize));const F=y(()=>m.value+";"+a.virtualScrollHorizontal),H=y(()=>F.value+";"+a.virtualScrollSliceRatioBefore+";"+a.virtualScrollSliceRatioAfter);ie(H,()=>{L()}),ie(F,G);function G(){le(c,!0)}function te(l){le(l===void 0?c:l)}function U(l,i){const S=n();if(S==null||S.nodeType===8)return;const B=Ge(S,s(),j.value,N.value,a.virtualScrollHorizontal,g.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd);w!==B.scrollViewSize&&L(B.scrollViewSize),R(S,B,Math.min(e.value-1,Math.max(0,parseInt(l,10)||0)),0,Wl.indexOf(i)>-1?i:c>-1&&l>c?"end":"start")}function X(){const l=n();if(l==null||l.nodeType===8)return;const i=Ge(l,s(),j.value,N.value,a.virtualScrollHorizontal,g.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd),S=e.value-1,B=i.scrollMaxSize-i.offsetStart-i.offsetEnd-$.value;if(q===i.scrollStart)return;if(i.scrollMaxSize<=0){R(l,i,0,0);return}w!==i.scrollViewSize&&L(i.scrollViewSize),J(O.value.from);const d=Math.floor(i.scrollMaxSize-Math.max(i.scrollViewSize,i.offsetEnd)-Math.min(A[S],i.scrollViewSize/2));if(d>0&&Math.ceil(i.scrollStart)>=d){R(l,i,S,i.scrollMaxSize-i.offsetEnd-x.reduce(Ae,0));return}let f=0,v=i.scrollStart-i.offsetStart,T=v;if(v<=B&&v+i.scrollViewSize>=z.value)v-=z.value,f=O.value.from,T=v;else for(let u=0;v>=x[u]&&f<S;u++)v-=x[u],f+=ee;for(;v>0&&f<S;)v-=A[f],v>-i.scrollViewSize?(f++,T=v):T=A[f]+v;R(l,i,f,T)}function R(l,i,S,B,d){const f=typeof d=="string"&&d.indexOf("-force")>-1,v=f===!0?d.replace("-force",""):d,T=v!==void 0?v:"start";let u=Math.max(0,S-I.value[T]),D=u+I.value.total;D>e.value&&(D=e.value,u=Math.max(0,D-I.value.total)),q=i.scrollStart;const ne=u!==O.value.from||D!==O.value.to;if(ne===!1&&v===void 0){Y(S);return}const{activeElement:ye}=document,ue=P.value;ne===!0&&ue!==null&&ue!==ye&&ue.contains(ye)===!0&&(ue.addEventListener("focusout",ae),setTimeout(()=>{ue!==null&&ue.removeEventListener("focusout",ae)})),Ul(ue,S-u);const Me=v!==void 0?A.slice(u,S).reduce(Ae,0):0;if(ne===!0){const de=D>=O.value.from&&u<=O.value.to?O.value.to:D;O.value={from:u,to:de},z.value=Fe(x,A,0,u),$.value=Fe(x,A,D,e.value),requestAnimationFrame(()=>{O.value.to!==D&&q===i.scrollStart&&(O.value={from:O.value.from,to:D},$.value=Fe(x,A,D,e.value))})}requestAnimationFrame(()=>{if(q!==i.scrollStart)return;ne===!0&&J(u);const de=A.slice(u,S).reduce(Ae,0),fe=de+i.offsetStart+z.value,Ie=fe+A[S];let Ee=fe+B;if(v!==void 0){const je=de-Me,Oe=i.scrollStart+je;Ee=f!==!0&&Oe<fe&&Ie<Oe+i.scrollViewSize?Oe:v==="end"?Ie-i.scrollViewSize:fe-(v==="start"?0:Math.round((i.scrollViewSize-A[S])/2))}q=Ee,kt(l,Ee,a.virtualScrollHorizontal,g.lang.rtl),Y(S)})}function J(l){const i=P.value;if(i){const S=Nt.call(i.children,u=>u.classList&&u.classList.contains("q-virtual-scroll--skip")===!1),B=S.length,d=a.virtualScrollHorizontal===!0?u=>u.getBoundingClientRect().width:u=>u.offsetHeight;let f=l,v,T;for(let u=0;u<B;){for(v=d(S[u]),u++;u<B&&S[u].classList.contains("q-virtual-scroll--with-prev")===!0;)v+=d(S[u]),u++;T=v-A[f],T!==0&&(A[f]+=T,x[Math.floor(f/ee)]+=T),f++}}}function ae(){P.value!==null&&P.value!==void 0&&P.value.focus()}function le(l,i){const S=1*m.value;(i===!0||Array.isArray(A)===!1)&&(A=[]);const B=A.length;A.length=e.value;for(let f=e.value-1;f>=B;f--)A[f]=S;const d=Math.floor((e.value-1)/ee);x=[];for(let f=0;f<=d;f++){let v=0;const T=Math.min((f+1)*ee,e.value);for(let u=f*ee;u<T;u++)v+=A[u];x.push(v)}c=-1,q=void 0,z.value=Fe(x,A,0,O.value.from),$.value=Fe(x,A,O.value.to,e.value),l>=0?(J(O.value.from),ce(()=>{U(l)})):Q()}function L(l){if(l===void 0&&typeof window!="undefined"){const v=n();v!=null&&v.nodeType!==8&&(l=Ge(v,s(),j.value,N.value,a.virtualScrollHorizontal,g.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd).scrollViewSize)}w=l;const i=parseFloat(a.virtualScrollSliceRatioBefore)||0,S=parseFloat(a.virtualScrollSliceRatioAfter)||0,B=1+i+S,d=l===void 0||l<=0?1:Math.ceil(l/m.value),f=Math.max(1,d,Math.ceil((a.virtualScrollSliceSize>0?a.virtualScrollSliceSize:10)/B));I.value={total:Math.ceil(f*B),start:Math.ceil(f*i),center:Math.ceil(f*(.5+i)),end:Math.ceil(f*(1+i)),view:d}}function re(l,i){const S=a.virtualScrollHorizontal===!0?"width":"height",B={["--q-virtual-scroll-item-"+S]:m.value+"px"};return[l==="tbody"?k(l,{class:"q-virtual-scroll__padding",key:"before",ref:j},[k("tr",[k("td",{style:{[S]:`${z.value}px`,...B},colspan:se.value})])]):k(l,{class:"q-virtual-scroll__padding",key:"before",ref:j,style:{[S]:`${z.value}px`,...B}}),k(l,{class:"q-virtual-scroll__content",key:"content",ref:P,tabindex:-1},i.flat()),l==="tbody"?k(l,{class:"q-virtual-scroll__padding",key:"after",ref:N},[k("tr",[k("td",{style:{[S]:`${$.value}px`,...B},colspan:se.value})])]):k(l,{class:"q-virtual-scroll__padding",key:"after",ref:N,style:{[S]:`${$.value}px`,...B}})]}function Y(l){c!==l&&(a.onVirtualScroll!==void 0&&V("virtualScroll",{index:l,from:O.value.from,to:O.value.to-1,direction:l<c?"decrease":"increase",ref:b}),c=l)}L();const Q=Sl(X,g.platform.is.ios===!0?120:35);hl(()=>{L()});let Z=!1;return yl(()=>{Z=!0}),bl(()=>{if(Z!==!0)return;const l=n();q!==void 0&&l!==void 0&&l!==null&&l.nodeType!==8?kt(l,q,a.virtualScrollHorizontal,g.lang.rtl):U(c)}),Te(()=>{Q.cancel()}),Object.assign(b,{scrollTo:U,reset:G,refresh:te}),{virtualScrollSliceRange:O,virtualScrollSliceSizeComputed:I,setVirtualScrollSize:L,onVirtualScrollEvt:Q,localResetVirtualScroll:le,padVirtualScroll:re,scrollTo:U,reset:G,refresh:te}}const Vt=e=>["add","add-unique","toggle"].includes(e),Gl=".*+?^${}()|[]\\",Jl=Object.keys(et);var rn=Ke({name:"QSelect",inheritAttrs:!1,props:{...Xl,...sl,...et,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:Vt},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...qt,"add","remove","inputValue","newValue","keyup","keypress","keydown","filterAbort"],setup(e,{slots:n,emit:s}){const{proxy:m}=$e(),{$q:C}=m,a=M(!1),V=M(!1),b=M(-1),g=M(""),q=M(!1),c=M(!1);let w=null,x=null,A,z,$,I=null,j,N,P,O;const se=M(null),F=M(null),H=M(null),G=M(null),te=M(null),U=cl(e),X=dl(ct),R=y(()=>Array.isArray(e.options)?e.options.length:0),J=y(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:ae,virtualScrollSliceSizeComputed:le,localResetVirtualScroll:L,padVirtualScroll:re,onVirtualScrollEvt:Y,scrollTo:Q,setVirtualScrollSize:Z}=Yl({virtualScrollLength:R,getVirtualScrollTarget:Yt,getVirtualScrollEl:rt,virtualScrollItemSizeComputed:J}),l=Bt(),i=y(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,r=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const o=e.mapOptions===!0&&A!==void 0?A:[],h=r.map(p=>Xt(p,o));return e.modelValue===null&&t===!0?h.filter(p=>p!==null):h}return r}),S=y(()=>{const t={};return Jl.forEach(r=>{const o=e[r];o!==void 0&&(t[r]=o)}),t}),B=y(()=>e.optionsDark===null?l.isDark.value:e.optionsDark),d=y(()=>gt(i.value)),f=y(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||i.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),v=y(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),T=y(()=>R.value===0),u=y(()=>i.value.map(t=>W.value(t)).join(", ")),D=y(()=>e.displayValue!==void 0?e.displayValue:u.value),ne=y(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),ye=y(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||i.value.some(ne.value))),ue=y(()=>l.focused.value===!0?e.tabindex:-1),Me=y(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":a.value===!0?"true":"false","aria-controls":`${l.targetUid.value}_lb`};return b.value>=0&&(t["aria-activedescendant"]=`${l.targetUid.value}_${b.value}`),t}),de=y(()=>({id:`${l.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),fe=y(()=>i.value.map((t,r)=>({index:r,opt:t,html:ne.value(t),selected:!0,removeAtIndex:Ut,toggleOption:ve,tabindex:ue.value}))),Ie=y(()=>{if(R.value===0)return[];const{from:t,to:r}=ae.value;return e.options.slice(t,r).map((o,h)=>{const p=be.value(o)===!0,E=We(o)===!0,K=t+h,_={clickable:!0,active:E,activeClass:Oe.value,manualFocus:!0,focused:!1,disable:p,tabindex:-1,dense:e.optionsDense,dark:B.value,role:"option","aria-selected":E===!0?"true":"false",id:`${l.targetUid.value}_${K}`,onClick:()=>{ve(o)}};return p!==!0&&(b.value===K&&(_.focused=!0),C.platform.is.desktop===!0&&(_.onMousemove=()=>{a.value===!0&&we(K)})),{index:K,opt:o,html:ne.value(o),label:W.value(o),selected:_.active,focused:_.focused,toggleOption:ve,setOptionIndex:we,itemProps:_}})}),Ee=y(()=>e.dropdownIcon!==void 0?e.dropdownIcon:C.iconSet.arrow.dropdown),je=y(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),Oe=y(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),oe=y(()=>Qe(e.optionValue,"value")),W=y(()=>Qe(e.optionLabel,"label")),be=y(()=>Qe(e.optionDisable,"disable")),_e=y(()=>i.value.map(t=>oe.value(t))),Wt=y(()=>{const t={onInput:ct,onChange:X,onKeydown:at,onKeyup:ot,onKeypress:it,onFocus:nt,onClick(r){z===!0&&qe(r)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=X,t});ie(i,t=>{A=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&l.innerLoading.value!==!0&&(V.value!==!0&&a.value!==!0||d.value!==!0)&&($!==!0&&Ve(),(V.value===!0||a.value===!0)&&Ce(""))},{immediate:!0}),ie(()=>e.fillInput,Ve),ie(a,Ue),ie(R,rl);function tt(t){return e.emitValue===!0?oe.value(t):t}function Ne(t){if(t>-1&&t<i.value.length)if(e.multiple===!0){const r=e.modelValue.slice();s("remove",{index:t,value:r.splice(t,1)[0]}),s("update:modelValue",r)}else s("update:modelValue",null)}function Ut(t){Ne(t),l.focus()}function lt(t,r){const o=tt(t);if(e.multiple!==!0){e.fillInput===!0&&pe(W.value(t),!0,!0),s("update:modelValue",o);return}if(i.value.length===0){s("add",{index:0,value:o}),s("update:modelValue",e.multiple===!0?[o]:o);return}if(r===!0&&We(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const h=e.modelValue.slice();s("add",{index:h.length,value:o}),h.push(o),s("update:modelValue",h)}function ve(t,r){if(l.editable.value!==!0||t===void 0||be.value(t)===!0)return;const o=oe.value(t);if(e.multiple!==!0){r!==!0&&(pe(e.fillInput===!0?W.value(t):"",!0,!0),me()),F.value!==null&&F.value.focus(),(i.value.length===0||ze(oe.value(i.value[0]),o)!==!0)&&s("update:modelValue",e.emitValue===!0?o:t);return}if((z!==!0||q.value===!0)&&l.focus(),nt(),i.value.length===0){const E=e.emitValue===!0?o:t;s("add",{index:0,value:E}),s("update:modelValue",e.multiple===!0?[E]:E);return}const h=e.modelValue.slice(),p=_e.value.findIndex(E=>ze(E,o));if(p>-1)s("remove",{index:p,value:h.splice(p,1)[0]});else{if(e.maxValues!==void 0&&h.length>=e.maxValues)return;const E=e.emitValue===!0?o:t;s("add",{index:h.length,value:E}),h.push(E)}s("update:modelValue",h)}function we(t){if(C.platform.is.desktop!==!0)return;const r=t>-1&&t<R.value?t:-1;b.value!==r&&(b.value=r)}function Pe(t=1,r){if(a.value===!0){let o=b.value;do o=Ct(o+t,-1,R.value-1);while(o!==-1&&o!==b.value&&be.value(e.options[o])===!0);b.value!==o&&(we(o),Q(o),r!==!0&&e.useInput===!0&&e.fillInput===!0&&He(o>=0?W.value(e.options[o]):j,!0))}}function Xt(t,r){const o=h=>ze(oe.value(h),t);return e.options.find(o)||r.find(o)||t}function Qe(t,r){const o=t!==void 0?t:r;return typeof o=="function"?o:h=>h!==null&&typeof h=="object"&&o in h?h[o]:h}function We(t){const r=oe.value(t);return _e.value.find(o=>ze(o,r))!==void 0}function nt(t){e.useInput===!0&&F.value!==null&&(t===void 0||F.value===t.target&&t.target.value===u.value)&&F.value.select()}function ut(t){Et(t,27)===!0&&a.value===!0&&(qe(t),me(),Ve()),s("keyup",t)}function ot(t){const{value:r}=t.target;if(t.keyCode!==void 0){ut(t);return}if(t.target.value="",w!==null&&(clearTimeout(w),w=null),x!==null&&(clearTimeout(x),x=null),Ve(),typeof r=="string"&&r.length!==0){const o=r.toLocaleLowerCase(),h=E=>{const K=e.options.find(_=>E.value(_).toLocaleLowerCase()===o);return K===void 0?!1:(i.value.indexOf(K)===-1?ve(K):me(),!0)},p=E=>{h(oe)!==!0&&(h(W)===!0||E===!0||Ce(r,!0,()=>p(!0)))};p()}else l.clearValue(t)}function it(t){s("keypress",t)}function at(t){if(s("keydown",t),kl(t)===!0)return;const r=g.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),o=t.shiftKey!==!0&&e.multiple!==!0&&(b.value>-1||r===!0);if(t.keyCode===27){Ye(t);return}if(t.keyCode===9&&o===!1){xe();return}if(t.target===void 0||t.target.id!==l.targetUid.value||l.editable.value!==!0)return;if(t.keyCode===40&&l.innerLoading.value!==!0&&a.value===!1){ge(t),ke();return}if(t.keyCode===8&&(e.useChips===!0||e.clearable===!0)&&e.hideSelected!==!0&&g.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?Ne(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&s("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof g.value!="string"||g.value.length===0)&&(ge(t),b.value=-1,Pe(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&le.value!==void 0&&(ge(t),b.value=Math.max(-1,Math.min(R.value,b.value+(t.keyCode===33?-1:1)*le.value.view)),Pe(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(ge(t),Pe(t.keyCode===38?-1:1,e.multiple));const h=R.value;if((P===void 0||O<Date.now())&&(P=""),h>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||P.length!==0)){a.value!==!0&&ke(t);const p=t.key.toLocaleLowerCase(),E=P.length===1&&P[0]===p;O=Date.now()+1500,E===!1&&(ge(t),P+=p);const K=new RegExp("^"+P.split("").map(Xe=>Gl.indexOf(Xe)>-1?"\\"+Xe:Xe).join(".*"),"i");let _=b.value;if(E===!0||_<0||K.test(W.value(e.options[_]))!==!0)do _=Ct(_+1,-1,h-1);while(_!==b.value&&(be.value(e.options[_])===!0||K.test(W.value(e.options[_]))!==!0));b.value!==_&&ce(()=>{we(_),Q(_),_>=0&&e.useInput===!0&&e.fillInput===!0&&He(W.value(e.options[_]),!0)});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||P!=="")&&(t.keyCode!==9||o===!1))){if(t.keyCode!==9&&ge(t),b.value>-1&&b.value<h){ve(e.options[b.value]);return}if(r===!0){const p=(E,K)=>{if(K){if(Vt(K)!==!0)return}else K=e.newValueMode;if(pe("",e.multiple!==!0,!0),E==null)return;(K==="toggle"?ve:lt)(E,K==="add-unique"),e.multiple!==!0&&(F.value!==null&&F.value.focus(),me())};if(e.onNewValue!==void 0?s("newValue",g.value,p):p(g.value),e.multiple!==!0)return}a.value===!0?xe():l.innerLoading.value!==!0&&ke()}}function rt(){return z===!0?te.value:H.value!==null&&H.value.contentEl!==null?H.value.contentEl:void 0}function Yt(){return rt()}function Gt(){return e.hideSelected===!0?[]:n["selected-item"]!==void 0?fe.value.map(t=>n["selected-item"](t)).slice():n.selected!==void 0?[].concat(n.selected()):e.useChips===!0?fe.value.map((t,r)=>k(Fl,{key:"option-"+r,removable:l.editable.value===!0&&be.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:ue.value,onRemove(){t.removeAtIndex(r)}},()=>k("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:W.value(t.opt)}))):[k("span",{[ye.value===!0?"innerHTML":"textContent"]:D.value})]}function st(){if(T.value===!0)return n["no-option"]!==void 0?n["no-option"]({inputValue:g.value}):void 0;const t=n.option!==void 0?n.option:o=>k(_l,{key:o.index,...o.itemProps},()=>k(Il,()=>k(Pl,()=>k("span",{[o.html===!0?"innerHTML":"textContent"]:o.label}))));let r=re("div",Ie.value.map(t));return n["before-options"]!==void 0&&(r=n["before-options"]().concat(r)),Vl(n["after-options"],r)}function Jt(t,r){const o=r===!0?{...Me.value,...l.splitAttrs.attributes.value}:void 0,h={ref:r===!0?F:void 0,key:"i_t",class:f.value,style:e.inputStyle,value:g.value!==void 0?g.value:"",type:"search",...o,id:r===!0?l.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...Wt.value};return t!==!0&&z===!0&&(Array.isArray(h.class)===!0?h.class=[...h.class,"no-pointer-events"]:h.class+=" no-pointer-events"),k("input",h)}function ct(t){w!==null&&(clearTimeout(w),w=null),x!==null&&(clearTimeout(x),x=null),!(t&&t.target&&t.target.qComposing===!0)&&(He(t.target.value||""),$=!0,j=g.value,l.focused.value!==!0&&(z!==!0||q.value===!0)&&l.focus(),e.onFilter!==void 0&&(w=setTimeout(()=>{w=null,Ce(g.value)},e.inputDebounce)))}function He(t,r){g.value!==t&&(g.value=t,r===!0||e.inputDebounce===0||e.inputDebounce==="0"?s("inputValue",t):x=setTimeout(()=>{x=null,s("inputValue",t)},e.inputDebounce))}function pe(t,r,o){$=o!==!0,e.useInput===!0&&(He(t,!0),(r===!0||o!==!0)&&(j=t),r!==!0&&Ce(t))}function Ce(t,r,o){if(e.onFilter===void 0||r!==!0&&l.focused.value!==!0)return;l.innerLoading.value===!0?s("filterAbort"):(l.innerLoading.value=!0,c.value=!0),t!==""&&e.multiple!==!0&&i.value.length!==0&&$!==!0&&t===W.value(i.value[0])&&(t="");const h=setTimeout(()=>{a.value===!0&&(a.value=!1)},10);I!==null&&clearTimeout(I),I=h,s("filter",t,(p,E)=>{(r===!0||l.focused.value===!0)&&I===h&&(clearTimeout(I),typeof p=="function"&&p(),c.value=!1,ce(()=>{l.innerLoading.value=!1,l.editable.value===!0&&(r===!0?a.value===!0&&me():a.value===!0?Ue(!0):a.value=!0),typeof E=="function"&&ce(()=>{E(m)}),typeof o=="function"&&ce(()=>{o(m)})}))},()=>{l.focused.value===!0&&I===h&&(clearTimeout(I),l.innerLoading.value=!1,c.value=!1),a.value===!0&&(a.value=!1)})}function Zt(){return k($l,{ref:H,class:v.value,style:e.popupContentStyle,modelValue:a.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&T.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:B.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,square:je.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...de.value,onScrollPassive:Y,onBeforeShow:ft,onBeforeHide:el,onShow:tl},st)}function el(t){vt(t),xe()}function tl(){Z()}function ll(t){qe(t),F.value!==null&&F.value.focus(),q.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function nl(t){qe(t),ce(()=>{q.value=!1})}function ul(){const t=[k(jl,{class:`col-auto ${l.fieldClass.value}`,...S.value,for:l.targetUid.value,dark:B.value,square:!0,loading:c.value,itemAligned:!1,filled:!0,stackLabel:g.value.length!==0,...l.splitAttrs.listeners.value,onFocus:ll,onBlur:nl},{...n,rawControl:()=>l.getControl(!0),before:void 0,after:void 0})];return a.value===!0&&t.push(k("div",{ref:te,class:v.value+" scroll",style:e.popupContentStyle,...de.value,onClick:Ye,onScrollPassive:Y},st())),k(Ql,{ref:G,modelValue:V.value,position:e.useInput===!0?"top":void 0,transitionShow:N,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:ft,onBeforeHide:ol,onHide:il,onShow:al},()=>k("div",{class:"q-select__dialog"+(B.value===!0?" q-select__dialog--dark q-dark":"")+(q.value===!0?" q-select__dialog--focused":"")},t))}function ol(t){vt(t),G.value!==null&&G.value.__updateRefocusTarget(l.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),l.focused.value=!1}function il(t){me(),l.focused.value===!1&&s("blur",t),Ve()}function al(){const t=document.activeElement;(t===null||t.id!==l.targetUid.value)&&F.value!==null&&F.value!==t&&F.value.focus(),Z()}function xe(){V.value!==!0&&(b.value=-1,a.value===!0&&(a.value=!1),l.focused.value===!1&&(I!==null&&(clearTimeout(I),I=null),l.innerLoading.value===!0&&(s("filterAbort"),l.innerLoading.value=!1,c.value=!1)))}function ke(t){l.editable.value===!0&&(z===!0?(l.onControlFocusin(t),V.value=!0,ce(()=>{l.focus()})):l.focus(),e.onFilter!==void 0?Ce(g.value):(T.value!==!0||n["no-option"]!==void 0)&&(a.value=!0))}function me(){V.value=!1,xe()}function Ve(){e.useInput===!0&&pe(e.multiple!==!0&&e.fillInput===!0&&i.value.length!==0&&W.value(i.value[0])||"",!0,!0)}function Ue(t){let r=-1;if(t===!0){if(i.value.length!==0){const o=oe.value(i.value[0]);r=e.options.findIndex(h=>ze(oe.value(h),o))}L(r)}we(r)}function rl(t,r){a.value===!0&&l.innerLoading.value===!1&&(L(-1,!0),ce(()=>{a.value===!0&&l.innerLoading.value===!1&&(t>r?L():Ue(!0))}))}function dt(){V.value===!1&&H.value!==null&&H.value.updatePosition()}function ft(t){t!==void 0&&qe(t),s("popupShow",t),l.hasPopupOpen=!0,l.onControlFocusin(t)}function vt(t){t!==void 0&&qe(t),s("popupHide",t),l.hasPopupOpen=!1,l.onControlFocusout(t)}function mt(){z=C.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?n["no-option"]!==void 0||e.onFilter!==void 0||T.value===!1:!0),N=C.platform.is.ios===!0&&z===!0&&e.useInput===!0?"fade":e.transitionShow}return wl(mt),Cl(dt),mt(),Te(()=>{w!==null&&clearTimeout(w),x!==null&&clearTimeout(x)}),Object.assign(m,{showPopup:ke,hidePopup:me,removeAtIndex:Ne,add:lt,toggleOption:ve,getOptionIndex:()=>b.value,setOptionIndex:we,moveOptionSelection:Pe,filter:Ce,updateMenuPosition:dt,updateInputValue:pe,isOptionSelected:We,getEmittingOptionValue:tt,isOptionDisabled:(...t)=>be.value.apply(null,t)===!0,getOptionValue:(...t)=>oe.value.apply(null,t),getOptionLabel:(...t)=>W.value.apply(null,t)}),Object.assign(l,{innerValue:i,fieldClass:y(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:se,targetRef:F,hasValue:d,showPopup:ke,floatingLabel:y(()=>e.hideSelected!==!0&&d.value===!0||typeof g.value=="number"||g.value.length!==0||gt(e.displayValue)),getControlChild:()=>{if(l.editable.value!==!1&&(V.value===!0||T.value!==!0||n["no-option"]!==void 0))return z===!0?ul():Zt();l.hasPopupOpen===!0&&(l.hasPopupOpen=!1)},controlEvents:{onFocusin(t){l.onControlFocusin(t)},onFocusout(t){l.onControlFocusout(t,()=>{Ve(),xe()})},onClick(t){if(Ye(t),z!==!0&&a.value===!0){xe(),F.value!==null&&F.value.focus();return}ke(t)}},getControl:t=>{const r=Gt(),o=t===!0||V.value!==!0||z!==!0;if(e.useInput===!0)r.push(Jt(t,o));else if(l.editable.value===!0){const p=o===!0?Me.value:void 0;r.push(k("input",{ref:o===!0?F:void 0,key:"d_t",class:"q-select__focus-target",id:o===!0?l.targetUid.value:void 0,value:D.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...p,onKeydown:at,onKeyup:ut,onKeypress:it})),o===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&r.push(k("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:ot}))}if(U.value!==void 0&&e.disable!==!0&&_e.value.length!==0){const p=_e.value.map(E=>k("option",{value:E,selected:!0}));r.push(k("select",{class:"hidden",name:U.value,multiple:e.multiple},p))}const h=e.useInput===!0||o!==!0?void 0:l.splitAttrs.attributes.value;return k("div",{class:"q-field__native row items-center",...h,...l.splitAttrs.listeners.value},r)},getInnerAppend:()=>e.loading!==!0&&c.value!==!0&&e.hideDropdownIcon!==!0?[k(xl,{class:"q-select__dropdown-icon"+(a.value===!0?" rotate-180":""),name:Ee.value})]:null}),At(l)}});export{rn as Q,Ll as a,on as b,$l as c,Xl as d,Yl as e,an as f,un as h,Hl as u};