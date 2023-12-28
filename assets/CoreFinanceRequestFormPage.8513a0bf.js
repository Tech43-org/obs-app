import{Q as yt}from"./QToolbarTitle.264325dc.js";import{x as ge,R as L,B as y,H as se,J as we,an as je,ai as He,M as _t,C as U,a6 as Ct,E as qe,D as Qe,ae as ke,y as Pt,z as Le,I as Tt,bj as et,a0 as ee,aP as wt,ad as qt,av as Vt,a9 as be,X as St,aI as Rt,A as Dt,at as Lt,au as xt,ao as kt,k as Me,f as Ie,o as K,m as le,w as a,n as t,i as tt,a1 as at,p as i,a2 as lt,_ as Oe,s as k,t as A,a8 as re,a3 as ot,a4 as nt,a5 as fe,u as Ut,a as Qt,$ as Mt,W as It,Q as We,q as ze,aU as Ot,aT as xe,bi as At}from"./index.f190ceab.js";import{Q as Ae}from"./QSpace.eb8fd1ba.js";import{u as Bt,c as Ft,Q as rt,a as ve,b as pe}from"./QList.a3910935.js";import{Q as Nt}from"./QToolbar.49791f40.js";import{Q as $t}from"./QHeader.66ca6e51.js";import{u as Et,Q as z,a as q,b as ne}from"./use-form.cb4f783b.js";import{Q as te}from"./QInput.d92d18d1.js";import{l as jt,d as Ht,v as Ke,m as Wt,p as Ge,n as Te,u as Ue,o as zt,q as Kt,r as Gt,s as Xt,t as Xe,w as Jt,x as Yt,y as Zt,Q as it}from"./QSelect.399267eb.js";import{u as ea,a as ta,b as aa,c as Je,Q as la}from"./QChip.c38fae29.js";import{Q as ae}from"./QBadge.5cbfb030.js";import{Q as $}from"./QRadio.8d1a1984.js";import{b as oa,Q as na,a as ra}from"./QLayout.75ab1bd5.js";import{u as ia,a as sa,b as ua,c as da}from"./use-panel.cf3d8b1f.js";import{Q as ca}from"./QPage.6a841fe8.js";import{Q as fa}from"./QFile.bd97a323.js";import{Q as st}from"./QCardActions.47d7d9a6.js";import{Q as ma}from"./QBtnGroup.777a2229.js";import"./option-sizes.ebe5aac9.js";import"./touch.3df10340.js";var ie=ge({name:"QTooltip",inheritAttrs:!1,props:{...jt,...ea,...Ht,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:Ke},self:{type:String,default:"top middle",validator:Ke},offset:{type:Array,default:()=>[14,14],validator:Wt},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...ta],setup(e,{slots:h,emit:C,attrs:o}){let d,m;const v=qe(),{proxy:{$q:r}}=v,b=L(null),p=L(!1),B=y(()=>Ge(e.anchor,r.lang.rtl)),E=y(()=>Ge(e.self,r.lang.rtl)),M=y(()=>e.persistent!==!0),{registerTick:V,removeTick:S}=Te(),{registerTimeout:x}=Ue(),{transitionProps:j,transitionStyle:I}=zt(e),{localScrollTarget:H,changeScrollEvent:c,unconfigureScrollTarget:s}=Kt(e,Ce),{anchorEl:n,canShow:w,anchorEvents:R}=Gt({showing:p,configureAnchorEl:_e}),{show:O,hide:F}=aa({showing:p,canShow:w,handleShow:Se,handleHide:ue,hideOnRouteChange:M,processOnMount:!0});Object.assign(R,{delayShow:me,delayHide:de});const{showPortal:he,hidePortal:ye,renderPortal:Ve}=Xt(v,b,Y,"tooltip");if(r.platform.is.mobile===!0){const D={anchorEl:n,innerRef:b,onClickOutside(W){return F(W),W.target.classList.contains("q-dialog__backdrop")&&ke(W),!0}},ce=y(()=>e.modelValue===null&&e.persistent!==!0&&p.value===!0);se(ce,W=>{(W===!0?Yt:Xe)(D)}),we(()=>{Xe(D)})}function Se(D){he(),V(()=>{m=new MutationObserver(()=>G()),m.observe(b.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),G(),Ce()}),d===void 0&&(d=se(()=>r.screen.width+"|"+r.screen.height+"|"+e.self+"|"+e.anchor+"|"+r.lang.rtl,G)),x(()=>{he(!0),C("show",D)},e.transitionDuration)}function ue(D){S(),ye(),oe(),x(()=>{ye(!0),C("hide",D)},e.transitionDuration)}function oe(){m!==void 0&&(m.disconnect(),m=void 0),d!==void 0&&(d(),d=void 0),s(),je(R,"tooltipTemp")}function G(){Jt({targetEl:b.value,offset:e.offset,anchorEl:n.value,anchorOrigin:B.value,selfOrigin:E.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function me(D){if(r.platform.is.mobile===!0){Je(),document.body.classList.add("non-selectable");const ce=n.value,W=["touchmove","touchcancel","touchend","click"].map(N=>[ce,N,"delayHide","passiveCapture"]);He(R,"tooltipTemp",W)}x(()=>{O(D)},e.delay)}function de(D){r.platform.is.mobile===!0&&(je(R,"tooltipTemp"),Je(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),x(()=>{F(D)},e.hideDelay)}function _e(){if(e.noParentEvent===!0||n.value===null)return;const D=r.platform.is.mobile===!0?[[n.value,"touchstart","delayShow","passive"]]:[[n.value,"mouseenter","delayShow","passive"],[n.value,"mouseleave","delayHide","passive"]];He(R,"anchor",D)}function Ce(){if(n.value!==null||e.scrollTarget!==void 0){H.value=_t(n.value,e.scrollTarget);const D=e.noParentEvent===!0?G:F;c(H.value,D)}}function J(){return p.value===!0?U("div",{...o,ref:b,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",o.class],style:[o.style,I.value],role:"tooltip"},Qe(h.default)):null}function Y(){return U(Ct,j.value,J)}return we(oe),Object.assign(v.proxy,{updatePosition:G}),Ve}});let va=0;const ba=["click","keydown"],pa={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${va++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function ga(e,h,C,o){const d=Pt(et,Le);if(d===Le)return console.error("QTab/QRouteTab component needs to be child of QTabs"),Le;const{proxy:m}=qe(),v=L(null),r=L(null),b=L(null),p=y(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),B=y(()=>d.currentModel.value===e.name),E=y(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(B.value===!0?" q-tab--active"+(d.tabProps.value.activeClass?" "+d.tabProps.value.activeClass:"")+(d.tabProps.value.activeColor?` text-${d.tabProps.value.activeColor}`:"")+(d.tabProps.value.activeBgColor?` bg-${d.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&d.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||d.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(o!==void 0?o.linkClass.value:"")),M=y(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(d.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),V=y(()=>e.disable===!0||d.hasFocus.value===!0||B.value===!1&&d.hasActiveTab.value===!0?-1:e.tabindex||0);function S(c,s){if(s!==!0&&v.value!==null&&v.value.focus(),e.disable===!0){o!==void 0&&o.hasRouterLink.value===!0&&ke(c);return}if(o===void 0){d.updateModel({name:e.name}),C("click",c);return}if(o.hasRouterLink.value===!0){const n=(w={})=>{let R;const O=w.to===void 0||Rt(w.to,e.to)===!0?d.avoidRouteWatcher=Et():null;return o.navigateToRouterLink(c,{...w,returnRouterError:!0}).catch(F=>{R=F}).then(F=>{if(O===d.avoidRouteWatcher&&(d.avoidRouteWatcher=!1,R===void 0&&(F===void 0||F.message.startsWith("Avoided redundant navigation")===!0)&&d.updateModel({name:e.name})),w.returnRouterError===!0)return R!==void 0?Promise.reject(R):F})};C("click",c,n),c.defaultPrevented!==!0&&n();return}C("click",c)}function x(c){qt(c,[13,32])?S(c,!0):Vt(c)!==!0&&c.keyCode>=35&&c.keyCode<=40&&c.altKey!==!0&&c.metaKey!==!0&&d.onKbdNavigate(c.keyCode,m.$el)===!0&&ke(c),C("keydown",c)}function j(){const c=d.tabProps.value.narrowIndicator,s=[],n=U("div",{ref:b,class:["q-tab__indicator",d.tabProps.value.indicatorClass]});e.icon!==void 0&&s.push(U(be,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&s.push(U("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&s.push(e.alertIcon!==void 0?U(be,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):U("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),c===!0&&s.push(n);const w=[U("div",{class:"q-focus-helper",tabindex:-1,ref:v}),U("div",{class:M.value},St(h.default,s))];return c===!1&&w.push(n),w}const I={name:y(()=>e.name),rootRef:r,tabIndicatorRef:b,routeData:o};we(()=>{d.unregisterTab(I)}),Tt(()=>{d.registerTab(I)});function H(c,s){const n={ref:r,class:E.value,tabindex:V.value,role:"tab","aria-selected":B.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:S,onKeydown:x,...s};return ee(U(c,n,j()),[[wt,p.value]])}return{renderTab:H,$tabs:d}}var Ye=ge({name:"QTab",props:pa,emits:ba,setup(e,{slots:h,emit:C}){const{renderTab:o}=ga(e,h,C);return()=>o("div")}});function ha(e,h,C){const o=C===!0?["left","right"]:["top","bottom"];return`absolute-${h===!0?o[0]:o[1]}${e?` text-${e}`:""}`}const ya=["left","center","right","justify"];var _a=ge({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>ya.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:h,emit:C}){const{proxy:o}=qe(),{$q:d}=o,{registerTick:m}=Te(),{registerTick:v}=Te(),{registerTick:r}=Te(),{registerTimeout:b,removeTimeout:p}=Ue(),{registerTimeout:B,removeTimeout:E}=Ue(),M=L(null),V=L(null),S=L(e.modelValue),x=L(!1),j=L(!0),I=L(!1),H=L(!1),c=[],s=L(0),n=L(!1);let w=null,R=null,O;const F=y(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:ha(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),he=y(()=>{const l=s.value,u=S.value;for(let f=0;f<l;f++)if(c[f].name.value===u)return!0;return!1}),ye=y(()=>`q-tabs__content--align-${x.value===!0?"left":H.value===!0?"justify":e.align}`),Ve=y(()=>`q-tabs row no-wrap items-center q-tabs--${x.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Se=y(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+ye.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),ue=y(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),oe=y(()=>e.vertical!==!0&&d.lang.rtl===!0),G=y(()=>Zt===!1&&oe.value===!0);se(oe,Y),se(()=>e.modelValue,l=>{me({name:l,setCurrent:!0,skipEmit:!0})}),se(()=>e.outsideArrows,de);function me({name:l,setCurrent:u,skipEmit:f}){S.value!==l&&(f!==!0&&e["onUpdate:modelValue"]!==void 0&&C("update:modelValue",l),(u===!0||e["onUpdate:modelValue"]===void 0)&&(Ce(S.value,l),S.value=l))}function de(){m(()=>{_e({width:M.value.offsetWidth,height:M.value.offsetHeight})})}function _e(l){if(ue.value===void 0||V.value===null)return;const u=l[ue.value.container],f=Math.min(V.value[ue.value.scroll],Array.prototype.reduce.call(V.value.children,(T,_)=>T+(_[ue.value.content]||0),0)),P=u>0&&f>u;x.value=P,P===!0&&v(Y),H.value=u<parseInt(e.breakpoint,10)}function Ce(l,u){const f=l!=null&&l!==""?c.find(T=>T.name.value===l):null,P=u!=null&&u!==""?c.find(T=>T.name.value===u):null;if(f&&P){const T=f.tabIndicatorRef.value,_=P.tabIndicatorRef.value;w!==null&&(clearTimeout(w),w=null),T.style.transition="none",T.style.transform="none",_.style.transition="none",_.style.transform="none";const g=T.getBoundingClientRect(),Q=_.getBoundingClientRect();_.style.transform=e.vertical===!0?`translate3d(0,${g.top-Q.top}px,0) scale3d(1,${Q.height?g.height/Q.height:1},1)`:`translate3d(${g.left-Q.left}px,0,0) scale3d(${Q.width?g.width/Q.width:1},1,1)`,r(()=>{w=setTimeout(()=>{w=null,_.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",_.style.transform="none"},70)})}P&&x.value===!0&&J(P.rootRef.value)}function J(l){const{left:u,width:f,top:P,height:T}=V.value.getBoundingClientRect(),_=l.getBoundingClientRect();let g=e.vertical===!0?_.top-P:_.left-u;if(g<0){V.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(g),Y();return}g+=e.vertical===!0?_.height-T:_.width-f,g>0&&(V.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(g),Y())}function Y(){const l=V.value;if(l===null)return;const u=l.getBoundingClientRect(),f=e.vertical===!0?l.scrollTop:Math.abs(l.scrollLeft);oe.value===!0?(j.value=Math.ceil(f+u.width)<l.scrollWidth-1,I.value=f>0):(j.value=f>0,I.value=e.vertical===!0?Math.ceil(f+u.height)<l.scrollHeight:Math.ceil(f+u.width)<l.scrollWidth)}function D(l){R!==null&&clearInterval(R),R=setInterval(()=>{ct(l)===!0&&N()},5)}function ce(){D(G.value===!0?Number.MAX_SAFE_INTEGER:0)}function W(){D(G.value===!0?0:Number.MAX_SAFE_INTEGER)}function N(){R!==null&&(clearInterval(R),R=null)}function ut(l,u){const f=Array.prototype.filter.call(V.value.children,Q=>Q===u||Q.matches&&Q.matches(".q-tab.q-focusable")===!0),P=f.length;if(P===0)return;if(l===36)return J(f[0]),f[0].focus(),!0;if(l===35)return J(f[P-1]),f[P-1].focus(),!0;const T=l===(e.vertical===!0?38:37),_=l===(e.vertical===!0?40:39),g=T===!0?-1:_===!0?1:void 0;if(g!==void 0){const Q=oe.value===!0?-1:1,X=f.indexOf(u)+g*Q;return X>=0&&X<P&&(J(f[X]),f[X].focus({preventScroll:!0})),!0}}const dt=y(()=>G.value===!0?{get:l=>Math.abs(l.scrollLeft),set:(l,u)=>{l.scrollLeft=-u}}:e.vertical===!0?{get:l=>l.scrollTop,set:(l,u)=>{l.scrollTop=u}}:{get:l=>l.scrollLeft,set:(l,u)=>{l.scrollLeft=u}});function ct(l){const u=V.value,{get:f,set:P}=dt.value;let T=!1,_=f(u);const g=l<_?-1:1;return _+=g*5,_<0?(T=!0,_=0):(g===-1&&_<=l||g===1&&_>=l)&&(T=!0,_=l),P(u,_),Y(),T}function Be(l,u){for(const f in l)if(l[f]!==u[f])return!1;return!0}function ft(){let l=null,u={matchedLen:0,queryDiff:9999,hrefLen:0};const f=c.filter(g=>g.routeData!==void 0&&g.routeData.hasRouterLink.value===!0),{hash:P,query:T}=o.$route,_=Object.keys(T).length;for(const g of f){const Q=g.routeData.exact.value===!0;if(g.routeData[Q===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:X,query:Re,matched:gt,href:ht}=g.routeData.resolvedLink.value,De=Object.keys(Re).length;if(Q===!0){if(X!==P||De!==_||Be(T,Re)===!1)continue;l=g.name.value;break}if(X!==""&&X!==P||De!==0&&Be(Re,T)===!1)continue;const Z={matchedLen:gt.length,queryDiff:_-De,hrefLen:ht.length-X.length};if(Z.matchedLen>u.matchedLen){l=g.name.value,u=Z;continue}else if(Z.matchedLen!==u.matchedLen)continue;if(Z.queryDiff<u.queryDiff)l=g.name.value,u=Z;else if(Z.queryDiff!==u.queryDiff)continue;Z.hrefLen>u.hrefLen&&(l=g.name.value,u=Z)}l===null&&c.some(g=>g.routeData===void 0&&g.name.value===S.value)===!0||me({name:l,setCurrent:!0})}function mt(l){if(p(),n.value!==!0&&M.value!==null&&l.target&&typeof l.target.closest=="function"){const u=l.target.closest(".q-tab");u&&M.value.contains(u)===!0&&(n.value=!0,x.value===!0&&J(u))}}function vt(){b(()=>{n.value=!1},30)}function Pe(){Ne.avoidRouteWatcher===!1?B(ft):E()}function Fe(){if(O===void 0){const l=se(()=>o.$route.fullPath,Pe);O=()=>{l(),O=void 0}}}function bt(l){c.push(l),s.value++,de(),l.routeData===void 0||o.$route===void 0?B(()=>{if(x.value===!0){const u=S.value,f=u!=null&&u!==""?c.find(P=>P.name.value===u):null;f&&J(f.rootRef.value)}}):(Fe(),l.routeData.hasRouterLink.value===!0&&Pe())}function pt(l){c.splice(c.indexOf(l),1),s.value--,de(),O!==void 0&&l.routeData!==void 0&&(c.every(u=>u.routeData===void 0)===!0&&O(),Pe())}const Ne={currentModel:S,tabProps:F,hasFocus:n,hasActiveTab:he,registerTab:bt,unregisterTab:pt,verifyRouteModel:Pe,updateModel:me,onKbdNavigate:ut,avoidRouteWatcher:!1};Dt(et,Ne);function $e(){w!==null&&clearTimeout(w),N(),O!==void 0&&O()}let Ee;return we($e),Lt(()=>{Ee=O!==void 0,$e()}),xt(()=>{Ee===!0&&Fe(),de()}),()=>U("div",{ref:M,class:Ve.value,role:"tablist",onFocusin:mt,onFocusout:vt},[U(oa,{onResize:_e}),U("div",{ref:V,class:Se.value,onScroll:Y},Qe(h.default)),U(be,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(j.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||d.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:ce,onTouchstartPassive:ce,onMouseupPassive:N,onMouseleavePassive:N,onTouchendPassive:N}),U(be,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(I.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||d.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:W,onTouchstartPassive:W,onMouseupPassive:N,onMouseleavePassive:N,onTouchendPassive:N})])}}),Ze=ge({name:"QTabPanel",props:ia,setup(e,{slots:h}){return()=>U("div",{class:"q-tab-panel",role:"tabpanel"},Qe(h.default))}}),Ca=ge({name:"QTabPanels",props:{...sa,...Bt},emits:ua,setup(e,{slots:h}){const C=qe(),o=Ft(e,C.proxy.$q),{updatePanelsList:d,getPanelContent:m,panelDirectives:v}=da(),r=y(()=>"q-tab-panels q-panel-parent"+(o.value===!0?" q-tab-panels--dark q-dark":""));return()=>(d(h),kt("div",{class:r.value},m(),"pan",e.swipeable,()=>v.value))}});const Pa=e=>(ot("data-v-5f439460"),e=e(),nt(),e),Ta=Pa(()=>fe("div",{class:"text-h6"},"POP Pricing per Location",-1)),wa=Me({__name:"POPList",setup(e){const h=Ie();se(()=>h.newCoreData.itemLocations,m=>{m.forEach(v=>{var b;const r=(b=h.locationsOptions)==null?void 0:b.find(p=>p.value===v.locationId);r&&(v.abbr=r.abbrev)})},{deep:!0});function C(m){return y(()=>{var r,b;const v=((b=(r=h.originalMetadata)==null?void 0:r.requestFinanceCore)==null?void 0:b.itemLocations)||{};return m in v})}const o=m=>y(()=>{var r,b;const v=(b=(r=h.originalMetadata)==null?void 0:r.requestFinanceCore)==null?void 0:b.itemLocations;if(v){const p=v[m];if(p)return"Requested by "+p.requester+" on "+p.date}return""}),d=y(()=>{const m={};for(const v of h.newCoreData.itemLocations)v.id&&(m[v.id]=o(v.id).value);return m});return(m,v)=>(K(),le(z,null,{default:a(()=>[t(q,null,{default:a(()=>[t(st,null,{default:a(()=>[Ta,t(Ae)]),_:1})]),_:1}),(K(!0),tt(lt,null,at(i(h).newCoreData.itemLocations,r=>(K(),le(rt,{side:"",key:r.id,class:"bg-grey-2 menu"},{default:a(()=>[t(ve,{class:"q-gutter-x-sm items-center"},{default:a(()=>[t(pe,null,{default:a(()=>[t(it,{modelValue:r.locationId,"onUpdate:modelValue":b=>r.locationId=b,options:i(h).locationsOptions,dense:"",outlined:"","emit-value":"","map-options":"",disable:""},null,8,["modelValue","onUpdate:modelValue","options"]),t(ae,{floating:"",rounded:"",label:r.abbr},null,8,["label"])]),_:2},1024),t(pe,{side:""},{default:a(()=>[ee(t(ae,{rounded:"",color:"orange",label:"Pending",style:{position:"absolute",top:"-4px",right:"212px",left:"auto"}},{default:a(()=>[t(ie,{anchor:"top middle",self:"bottom middle",offset:[5,5]},{default:a(()=>[k(A(r.id!==void 0?d.value[r.id]:""),1)]),_:2},1024)]),_:2},1536),[[re,r.id?C(r.id).value:!1]]),t(te,{style:{"max-width":"7rem"},modelValue:r.price,"onUpdate:modelValue":b=>r.price=b,modelModifiers:{number:!0},type:"number",label:"Price","input-class":"text-right",outlined:"",dense:"",disable:r.id?C(r.id).value:!1},null,8,["modelValue","onUpdate:modelValue","disable"])]),_:2},1024),t(te,{style:{"max-width":"12rem"},modelValue:r.sapProductNumber,"onUpdate:modelValue":b=>r.sapProductNumber=b,label:"SAP Product Number",outlined:"",dense:"",disable:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024))),128))]),_:1}))}});var qa=Oe(wa,[["__scopeId","data-v-5f439460"]]);const Va=e=>(ot("data-v-f815163a"),e=e(),nt(),e),Sa=Va(()=>fe("div",{class:"text-h6"},"Unilateral Pricing",-1)),Ra=Me({__name:"UnilateralList",setup(e){const h=Ie();function C(m){return y(()=>{var r,b;const v=((b=(r=h.originalMetadata)==null?void 0:r.requestFinanceCore)==null?void 0:b.itemUnicable)||{};return m in v})}const o=m=>y(()=>{var r,b;const v=(b=(r=h.originalMetadata)==null?void 0:r.requestFinanceCore)==null?void 0:b.itemUnicable;if(v){const p=v[m];if(p)return"Requested by "+p.requester+" on "+p.date}return""}),d=y(()=>{const m={};for(const v of h.newCoreData.itemUnicable)v.id&&(m[v.id]=o(v.id).value);return m});return(m,v)=>(K(),le(z,null,{default:a(()=>[t(q,null,{default:a(()=>[t(st,null,{default:a(()=>[Sa,t(Ae)]),_:1})]),_:1}),(K(!0),tt(lt,null,at(i(h).newCoreData.itemUnicable,(r,b)=>(K(),le(rt,{side:"",key:b,class:"bg-grey-2 menu"},{default:a(()=>[t(ve,{class:"q-gutter-x-sm"},{default:a(()=>[t(pe,null,{default:a(()=>[t(ma,{type:"radio",dense:"",flat:""},{default:a(()=>[t($,{modelValue:r.type,"onUpdate:modelValue":p=>r.type=p,val:"Type 1",label:"Type 1",disable:""},null,8,["modelValue","onUpdate:modelValue"]),t($,{modelValue:r.type,"onUpdate:modelValue":p=>r.type=p,val:"Type 2",label:"Type 2",disable:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),t(te,{style:{"max-width":"7rem"},modelValue:r.price,"onUpdate:modelValue":p=>r.price=p,modelModifiers:{number:!0},type:"number",label:"Price","input-class":"text-right",outlined:"",dense:"",disable:r.id?C(r.id).value:!1},null,8,["modelValue","onUpdate:modelValue","disable"]),ee(t(ae,{rounded:"",floating:"",color:"orange",label:"Pending"},{default:a(()=>[t(ie,{anchor:"top middle",self:"bottom middle",offset:[5,5]},{default:a(()=>[k(A(r.id!==void 0?d.value[r.id]:""),1)]),_:2},1024)]),_:2},1536),[[re,r.id?C(r.id).value:!1]])]),_:2},1024)]),_:2},1024))),128))]),_:1}))}});var Da=Oe(Ra,[["__scopeId","data-v-f815163a"]]);const La={class:"row items-center"},xa={class:"text-h6"},ka={class:"ellipsis"},Ua={class:"row items-center"},Qa=Me({__name:"CoreFinanceRequestFormPage",setup(e){const h=Ut(),C=Qt(),o=Ie(),d=L(),m=L();Mt(()=>{h.readSettings(),C.readAllUsers(),o.readCoreFinanceRequestData()});async function v(c){m.value&&URL.revokeObjectURL(m.value),m.value=URL.createObjectURL(c);const s=await At(m.value);o.financeRequest.file&&d.value&&(o.financeRequest.file.base64=s,o.financeRequest.file.name=d.value.name)}const r=L("pop"),b=y(()=>!o.requestChanges||!o.financeRequest.userRecipient);function p(c){return y(()=>{var n;return c in(((n=o.originalMetadata)==null?void 0:n.requestFinanceCore)||{})})}const B=p("price"),E=p("priceType"),M=p("priceTypeParas"),V=p("priceParas"),S=p("priceTypeParasNewCustomer"),x=p("priceParasNewCustomer"),j=c=>y(()=>{var n,w;const s=(w=(n=o.originalMetadata)==null?void 0:n.requestFinanceCore)==null?void 0:w[c];return s?"Requested by "+s.requester+" on "+s.date:""}),I=j("price"),H=j("priceType");return It(()=>{m.value&&URL.revokeObjectURL(m.value)}),(c,s)=>(K(),le(na,{view:"hHh lpR fFf"},{default:a(()=>[t($t,null,{default:a(()=>[t(Nt,{class:"bg-primary"},{default:a(()=>[t(yt,null,{default:a(()=>[k(" Edit Finance Core Data ")]),_:1}),t(ve,null,{default:a(()=>[t(We,{color:"primary",type:"cancel",label:"Cancel",onClick:s[0]||(s[0]=n=>i(o).cancelCoreFinanceRequest())}),t(Ae),t(We,{color:"primary",type:"submit",label:"Submit Request",onClick:s[1]||(s[1]=n=>i(o).sendCoreFinanceRequest()),disable:b.value},null,8,["disable"])]),_:1})]),_:1})]),_:1}),t(ra,null,{default:a(()=>[t(ca,null,{default:a(()=>[fe("div",La,[t(z,{class:"col"},{default:a(()=>[t(q,null,{default:a(()=>[t(ne,null,{default:a(()=>[k("Requester")]),_:1}),t(te,{modelValue:i(h).loggedUser.fullName,"onUpdate:modelValue":s[2]||(s[2]=n=>i(h).loggedUser.fullName=n),readonly:"",dense:""},null,8,["modelValue"])]),_:1})]),_:1}),t(z,{class:"col"},{default:a(()=>[t(q,null,{default:a(()=>[t(ne,null,{default:a(()=>[k("Request to")]),_:1}),t(it,{modelValue:i(o).financeCoreRequest.userRecipient,"onUpdate:modelValue":s[3]||(s[3]=n=>i(o).financeCoreRequest.userRecipient=n),options:i(C).userDeptHeads,"option-value":"fullName","option-label":"fullName",dense:""},{option:a(n=>[t(ve,null,{default:a(()=>[t(pe,{avatar:""},{default:a(()=>[t(ze,{size:"sm","text-color":"white",style:Ot({backgroundColor:n.opt.color})},{default:a(()=>[k(A(n.opt.initials),1)]),_:2},1032,["style"])]),_:2},1024),t(pe,null,{default:a(()=>[fe("span",xa,A(n.opt.fullName),1)]),_:2},1024)]),_:2},1024)]),_:1},8,["modelValue","options"])]),_:1})]),_:1}),t(z,{class:"col"},{default:a(()=>[t(q,null,{default:a(()=>[t(ne,null,{default:a(()=>[k("Attachment")]),_:1}),t(i(fa),{modelValue:d.value,"onUpdate:modelValue":[s[4]||(s[4]=n=>d.value=n),v],label:"Select File",outlined:"",clearable:"",dense:""},{file:a(({file:n})=>[t(la,{size:"sm",color:"primary text-white"},{default:a(()=>[t(ze,null,{default:a(()=>[t(be,{name:"sym_o_description"})]),_:1}),fe("div",ka,A(n.name),1)]),_:2},1024)]),_:1},8,["modelValue"])]),_:1})]),_:1})]),t(z,null,{default:a(()=>[t(q,null,{default:a(()=>[t(te,{modelValue:i(o).financeCoreRequest.requestMessage,"onUpdate:modelValue":s[5]||(s[5]=n=>i(o).financeCoreRequest.requestMessage=n),type:"textarea",rows:"1",label:"Request Message",outlined:"",dense:""},null,8,["modelValue"])]),_:1})]),_:1}),t(z,null,{default:a(()=>[fe("div",Ua,[t(ne,{header:""},{default:a(()=>[k(A(i(o).financeCoreRequest.itemCode),1)]),_:1}),t(ve,null,{default:a(()=>[t(ne,{header:""},{default:a(()=>[k(A(i(o).financeCoreRequest.itemDescription),1)]),_:1})]),_:1})])]),_:1}),"priceType"in i(o).newCoreData?(K(),le(z,{key:0},{default:a(()=>[t(q,{horizontal:"",class:"q-py-none"},{default:a(()=>[t(q,{class:"col-4 q-py-md"},{default:a(()=>[ee(t(ae,{floating:"",rounded:"",color:"orange",label:"Pending"},{default:a(()=>[t(ie,{anchor:"top middle",self:"bottom middle",offset:[5,5]},{default:a(()=>[k(A(i(H)),1)]),_:1})]),_:1},512),[[re,i(E)]]),t($,{modelValue:i(o).newCoreData.priceType,"onUpdate:modelValue":s[6]||(s[6]=n=>i(o).newCoreData.priceType=n),val:"POA",label:"POA",disable:i(E)},null,8,["modelValue","disable"]),t($,{modelValue:i(o).newCoreData.priceType,"onUpdate:modelValue":s[7]||(s[7]=n=>i(o).newCoreData.priceType=n),val:"TBD",label:"TBD",disable:i(E)},null,8,["modelValue","disable"]),t($,{modelValue:i(o).newCoreData.priceType,"onUpdate:modelValue":s[8]||(s[8]=n=>i(o).newCoreData.priceType=n),val:"FOC",label:"FOC",disable:i(E)},null,8,["modelValue","disable"])]),_:1}),t(q,{class:"col-3 q-py-md"},{default:a(()=>[ee(t(ae,{floating:"",rounded:"",color:"orange",label:"Pending"},{default:a(()=>[t(ie,{anchor:"top middle",self:"bottom middle",offset:[5,5]},{default:a(()=>[k(A(i(I)),1)]),_:1})]),_:1},512),[[re,i(B)]]),t(te,{modelValue:i(o).newCoreData.price,"onUpdate:modelValue":s[9]||(s[9]=n=>i(o).newCoreData.price=n),modelModifiers:{number:!0},type:"number",label:"Price","input-class":"text-right",outlined:"",dense:"",disable:i(B)},null,8,["modelValue","disable"])]),_:1})]),_:1})]),_:1})):xe("",!0),"priceTypeParas"in i(o).newCoreData?(K(),le(z,{key:1},{default:a(()=>[t(q,{horizontal:""},{default:a(()=>[t(q,null,{default:a(()=>[t(ne,null,{default:a(()=>[k("Price Paras ")]),_:1})]),_:1}),t(q,{class:"q-py-md"},{default:a(()=>[t($,{modelValue:i(o).newCoreData.priceTypeParas,"onUpdate:modelValue":s[10]||(s[10]=n=>i(o).newCoreData.priceTypeParas=n),val:"POA",label:"POA",disable:i(M)},null,8,["modelValue","disable"]),t($,{modelValue:i(o).newCoreData.priceTypeParas,"onUpdate:modelValue":s[11]||(s[11]=n=>i(o).newCoreData.priceTypeParas=n),val:"TBD",label:"TBD",disable:i(M)},null,8,["modelValue","disable"]),t($,{modelValue:i(o).newCoreData.priceTypeParas,"onUpdate:modelValue":s[12]||(s[12]=n=>i(o).newCoreData.priceTypeParas=n),val:"FOC",label:"FOC",disable:i(M)},null,8,["modelValue","disable"])]),_:1}),t(q,{class:"col-3 q-py-md"},{default:a(()=>[ee(t(ae,{floating:"",rounded:"",color:"orange",label:"Pending"},{default:a(()=>[t(ie,{anchor:"top middle",self:"bottom middle",offset:[5,5]},{default:a(()=>[k(A(i(I)),1)]),_:1})]),_:1},512),[[re,i(V)]]),t(te,{modelValue:i(o).newCoreData.priceParas,"onUpdate:modelValue":s[13]||(s[13]=n=>i(o).newCoreData.priceParas=n),modelModifiers:{number:!0},type:"number",label:"Price Paras","input-class":"text-right",outlined:"",dense:"",disable:i(V)},null,8,["modelValue","disable"])]),_:1})]),_:1})]),_:1})):xe("",!0),"priceTypeParasNewCustomer"in i(o).newCoreData?(K(),le(z,{key:2},{default:a(()=>[t(q,{horizontal:""},{default:a(()=>[t(q,null,{default:a(()=>[t(ne,null,{default:a(()=>[k("Price Paras New Customer")]),_:1})]),_:1}),t(q,{class:"q-py-md"},{default:a(()=>[ee(t(ae,{floating:"",rounded:"",color:"orange",label:"Pending"},{default:a(()=>[t(ie,{anchor:"top middle",self:"bottom middle",offset:[5,5]},{default:a(()=>[k(A(i(H)),1)]),_:1})]),_:1},512),[[re,i(S)]]),t($,{modelValue:i(o).newCoreData.priceTypeParasNewCustomer,"onUpdate:modelValue":s[14]||(s[14]=n=>i(o).newCoreData.priceTypeParasNewCustomer=n),val:"POA",label:"POA",disable:i(S)},null,8,["modelValue","disable"]),t($,{modelValue:i(o).newCoreData.priceTypeParasNewCustomer,"onUpdate:modelValue":s[15]||(s[15]=n=>i(o).newCoreData.priceTypeParasNewCustomer=n),val:"TBD",label:"TBD",disable:i(S)},null,8,["modelValue","disable"]),t($,{modelValue:i(o).newCoreData.priceTypeParasNewCustomer,"onUpdate:modelValue":s[16]||(s[16]=n=>i(o).newCoreData.priceTypeParasNewCustomer=n),val:"FOC",label:"FOC",disable:i(S)},null,8,["modelValue","disable"])]),_:1}),t(q,{class:"col-3 q-py-md"},{default:a(()=>[ee(t(ae,{floating:"",rounded:"",color:"orange",label:"Pending"},{default:a(()=>[t(ie,{anchor:"top middle",self:"bottom middle",offset:[5,5]},{default:a(()=>[k(A(i(I)),1)]),_:1})]),_:1},512),[[re,i(x)]]),t(te,{modelValue:i(o).newCoreData.priceParasNewCustomer,"onUpdate:modelValue":s[17]||(s[17]=n=>i(o).newCoreData.priceParasNewCustomer=n),modelModifiers:{number:!0},type:"number",label:"Price Paras New Customer","input-class":"text-right",outlined:"",dense:"",disable:i(x)},null,8,["modelValue","disable"])]),_:1})]),_:1})]),_:1})):xe("",!0),t(q,null,{default:a(()=>[t(_a,{modelValue:r.value,"onUpdate:modelValue":s[18]||(s[18]=n=>r.value=n),dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:a(()=>[t(Ye,{name:"pop",label:"POP Pricing per Location"}),t(Ye,{name:"unilateral",label:"Unilateral"})]),_:1},8,["modelValue"]),t(Ca,{modelValue:r.value,"onUpdate:modelValue":s[19]||(s[19]=n=>r.value=n),animated:"",style:{"background-color":"var(--primary-white)"}},{default:a(()=>[t(Ze,{name:"pop",class:"q-ma-none q-pa-none"},{default:a(()=>[t(qa)]),_:1}),t(Ze,{name:"unilateral",class:"q-ma-none q-pa-none"},{default:a(()=>[t(Da)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}))}});var tl=Oe(Qa,[["__scopeId","data-v-1e49feb7"]]);export{tl as default};
