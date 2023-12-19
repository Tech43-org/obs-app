import{x as Z,J as de,C as p,a6 as Se,bd as Ve,ab as Te,R as X,B as b,H as R,E as ve,a0 as qe,a8 as ke,D as oe,a9 as J,ae as ne,az as Ne,Q as G,X as we,af as $e,ag as K,L as Ee,ah as Ue,ai as te,aj as le,am as fe,an as ie,be as Fe,T as Oe,K as Me,I as je,ao as He,b5 as ze,k as ge,o as U,i as re,n as a,w as i,p as H,bf as Re,a2 as se,s as q,t as P,a1 as Ie,m as Y,bg as W,_ as Pe,a as Be,u as Ae,q as Ge,aU as Ke,a5 as me,aT as We,aR as pe,a_ as he,$ as Ye}from"./index.1bbbef81.js";import{Q as Xe}from"./QToolbarTitle.7e5ca1eb.js";import{Q as Je}from"./QToolbar.90f03879.js";import{Q as Ze}from"./QPage.eee2d5a7.js";import{Q as et,a as tt}from"./QLayout.c7b9c561.js";import{u as Qe,c as De,a as A,b as C,Q as nt}from"./QList.86b5a361.js";import{Q as ue}from"./QBadge.688772cf.js";import{Q as at}from"./QSpace.fbb96cb9.js";import{u as ot,a as lt,b as it,c as rt,Q as st}from"./QChip.77f3298f.js";import{Q as _e}from"./QCardActions.7b53cc76.js";import{u as be,b as ce,c as ut,e as ct,Q as dt,a as vt}from"./use-form.1ff89c0b.js";import{Q as ae}from"./QSeparator.be43a22a.js";import{Q as gt}from"./QBtnGroup.42bd5078.js";import{g as ye,s as xe}from"./touch.3df10340.js";import{u as ft,a as mt,b as pt}from"./use-fullscreen.b667f2ed.js";var ht=Z({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:o,emit:g}){let h=!1,u,t,l=null,m=null,x,n;function r(){u&&u(),u=null,h=!1,l!==null&&(clearTimeout(l),l=null),m!==null&&(clearTimeout(m),m=null),t!==void 0&&t.removeEventListener("transitionend",x),x=null}function c(v,T,y){T!==void 0&&(v.style.height=`${T}px`),v.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,h=!0,u=y}function d(v,T){v.style.overflowY=null,v.style.height=null,v.style.transition=null,r(),T!==n&&g(T)}function _(v,T){let y=0;t=v,h===!0?(r(),y=v.offsetHeight===v.scrollHeight?0:void 0):(n="hide",v.style.overflowY="hidden"),c(v,y,T),l=setTimeout(()=>{l=null,v.style.height=`${v.scrollHeight}px`,x=I=>{m=null,(Object(I)!==I||I.target===v)&&d(v,"show")},v.addEventListener("transitionend",x),m=setTimeout(x,e.duration*1.1)},100)}function w(v,T){let y;t=v,h===!0?r():(n="show",v.style.overflowY="hidden",y=v.scrollHeight),c(v,y,T),l=setTimeout(()=>{l=null,v.style.height=0,x=I=>{m=null,(Object(I)!==I||I.target===v)&&d(v,"hide")},v.addEventListener("transitionend",x),m=setTimeout(x,e.duration*1.1)},100)}return de(()=>{h===!0&&r()}),()=>p(Se,{css:!1,appear:e.appear,onEnter:_,onLeave:w},o.default)}});const j=Ve({}),_t=Object.keys(Te);var bt=Z({name:"QExpansionItem",props:{...Te,...ot,...Qe,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...lt,"click","afterShow","afterHide"],setup(e,{slots:o,emit:g}){const{proxy:{$q:h}}=ve(),u=De(e,h),t=X(e.modelValue!==null?e.modelValue:e.defaultOpened),l=X(null),m=be(),{show:x,hide:n,toggle:r}=it({showing:t});let c,d;const _=b(()=>`q-expansion-item q-item-type q-expansion-item--${t.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),w=b(()=>{if(e.contentInsetLevel===void 0)return null;const f=h.lang.rtl===!0?"Right":"Left";return{["padding"+f]:e.contentInsetLevel*56+"px"}}),v=b(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),T=b(()=>{const f={};return _t.forEach(N=>{f[N]=e[N]}),f}),y=b(()=>v.value===!0||e.expandIconToggle!==!0),I=b(()=>e.expandedIcon!==void 0&&t.value===!0?e.expandedIcon:e.expandIcon||h.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),L=b(()=>e.disable!==!0&&(v.value===!0||e.expandIconToggle===!0)),F=b(()=>({expanded:t.value===!0,detailsId:e.targetUid,toggle:r,show:x,hide:n})),O=b(()=>{const f=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:h.lang.label[t.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":t.value===!0?"true":"false","aria-controls":m,"aria-label":f}});R(()=>e.group,f=>{d!==void 0&&d(),f!==void 0&&D()});function $(f){v.value!==!0&&r(f),g("click",f)}function Q(f){f.keyCode===13&&E(f,!0)}function E(f,N){N!==!0&&l.value!==null&&l.value.focus(),r(f),ne(f)}function z(){g("afterShow")}function k(){g("afterHide")}function D(){c===void 0&&(c=be()),t.value===!0&&(j[e.group]=c);const f=R(t,ee=>{ee===!0?j[e.group]=c:j[e.group]===c&&delete j[e.group]}),N=R(()=>j[e.group],(ee,Le)=>{Le===c&&ee!==void 0&&ee!==c&&n()});d=()=>{f(),N(),j[e.group]===c&&delete j[e.group],d=void 0}}function M(){const f={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},N=[p(J,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&t.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:I.value})];return L.value===!0&&(Object.assign(f,{tabindex:0,...O.value,onClick:E,onKeyup:Q}),N.unshift(p("div",{ref:l,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),p(C,f,()=>N)}function s(){let f;return o.header!==void 0?f=[].concat(o.header(F.value)):(f=[p(C,()=>[p(ce,{lines:e.labelLines},()=>e.label||""),e.caption?p(ce,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&f[e.switchToggleSide===!0?"push":"unshift"](p(C,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>p(J,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&f[e.switchToggleSide===!0?"unshift":"push"](M()),f}function S(){const f={ref:"item",style:e.headerStyle,class:e.headerClass,dark:u.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return y.value===!0&&(f.clickable=!0,f.onClick=$,Object.assign(f,v.value===!0?T.value:O.value)),p(A,f,s)}function B(){return qe(p("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:w.value,id:m},oe(o.default)),[[ke,t.value]])}function V(){const f=[S(),p(ht,{duration:e.duration,onShow:z,onHide:k},B)];return e.expandSeparator===!0&&f.push(p(ae,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:u.value}),p(ae,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:u.value})),f}return e.group!==void 0&&D(),de(()=>{d!==void 0&&d()}),()=>p("div",{class:_.value},[p("div",{class:"q-expansion-item__container relative-position"},V())])}}),yt=Z({name:"QBtnToggle",props:{...ut,modelValue:{required:!0},options:{type:Array,required:!0,validator:e=>e.every(o=>("label"in o||"icon"in o||"slot"in o)&&"value"in o)},color:String,textColor:String,toggleColor:{type:String,default:"primary"},toggleTextColor:String,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,padding:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,readonly:Boolean,disable:Boolean,stack:Boolean,stretch:Boolean,spread:Boolean,clearable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","clear","click"],setup(e,{slots:o,emit:g}){const h=b(()=>e.options.find(d=>d.value===e.modelValue)!==void 0),u=b(()=>({type:"hidden",name:e.name,value:e.modelValue})),t=ct(u),l=b(()=>Ne(e)),m=b(()=>({rounded:e.rounded,dense:e.dense,...l.value})),x=b(()=>e.options.map((d,_)=>{const{attrs:w,value:v,slot:T,...y}=d;return{slot:T,props:{key:_,"aria-pressed":v===e.modelValue?"true":"false",...w,...y,...m.value,disable:e.disable===!0||y.disable===!0,color:v===e.modelValue?r(y,"toggleColor"):r(y,"color"),textColor:v===e.modelValue?r(y,"toggleTextColor"):r(y,"textColor"),noCaps:r(y,"noCaps")===!0,noWrap:r(y,"noWrap")===!0,size:r(y,"size"),padding:r(y,"padding"),ripple:r(y,"ripple"),stack:r(y,"stack")===!0,stretch:r(y,"stretch")===!0,onClick(I){n(v,d,I)}}}}));function n(d,_,w){e.readonly!==!0&&(e.modelValue===d?e.clearable===!0&&(g("update:modelValue",null,null),g("clear")):g("update:modelValue",d,_),g("click",w))}function r(d,_){return d[_]===void 0?e[_]:d[_]}function c(){const d=x.value.map(_=>p(G,_.props,_.slot!==void 0?o[_.slot]:void 0));return e.name!==void 0&&e.disable!==!0&&h.value===!0&&t(d,"push"),we(o.default,d)}return()=>p(gt,{class:"q-btn-toggle",...l.value,rounded:e.rounded,stretch:e.stretch,glossy:e.glossy,spread:e.spread},c)}});function xt(e){const o=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((g,h)=>{const u=parseFloat(g);u&&(o[h]=u)}),o}var Ct=$e({name:"touch-swipe",beforeMount(e,{value:o,arg:g,modifiers:h}){if(h.mouse!==!0&&K.has.touch!==!0)return;const u=h.mouseCapture===!0?"Capture":"",t={handler:o,sensitivity:xt(g),direction:ye(h),noop:Ee,mouseStart(l){xe(l,t)&&Ue(l)&&(te(t,"temp",[[document,"mousemove","move",`notPassive${u}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(l,!0))},touchStart(l){if(xe(l,t)){const m=l.target;te(t,"temp",[[m,"touchmove","move","notPassiveCapture"],[m,"touchcancel","end","notPassiveCapture"],[m,"touchend","end","notPassiveCapture"]]),t.start(l)}},start(l,m){K.is.firefox===!0&&le(e,!0);const x=fe(l);t.event={x:x.left,y:x.top,time:Date.now(),mouse:m===!0,dir:!1}},move(l){if(t.event===void 0)return;if(t.event.dir!==!1){ne(l);return}const m=Date.now()-t.event.time;if(m===0)return;const x=fe(l),n=x.left-t.event.x,r=Math.abs(n),c=x.top-t.event.y,d=Math.abs(c);if(t.event.mouse!==!0){if(r<t.sensitivity[1]&&d<t.sensitivity[1]){t.end(l);return}}else if(window.getSelection().toString()!==""){t.end(l);return}else if(r<t.sensitivity[2]&&d<t.sensitivity[2])return;const _=r/m,w=d/m;t.direction.vertical===!0&&r<d&&r<100&&w>t.sensitivity[0]&&(t.event.dir=c<0?"up":"down"),t.direction.horizontal===!0&&r>d&&d<100&&_>t.sensitivity[0]&&(t.event.dir=n<0?"left":"right"),t.direction.up===!0&&r<d&&c<0&&r<100&&w>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&r<d&&c>0&&r<100&&w>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&r>d&&n<0&&d<100&&_>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&r>d&&n>0&&d<100&&_>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(ne(l),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),rt(),t.styleCleanup=v=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const T=()=>{document.body.classList.remove("no-pointer-events--children")};v===!0?setTimeout(T,50):T()}),t.handler({evt:l,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:m,distance:{x:r,y:d}})):t.end(l)},end(l){t.event!==void 0&&(ie(t,"temp"),K.is.firefox===!0&&le(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),l!==void 0&&t.event.dir!==!1&&ne(l),t.event=void 0)}};if(e.__qtouchswipe=t,h.mouse===!0){const l=h.mouseCapture===!0||h.mousecapture===!0?"Capture":"";te(t,"main",[[e,"mousedown","mouseStart",`passive${l}`]])}K.has.touch===!0&&te(t,"main",[[e,"touchstart","touchStart",`passive${h.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const g=e.__qtouchswipe;g!==void 0&&(o.oldValue!==o.value&&(typeof o.value!="function"&&g.end(),g.handler=o.value),g.direction=ye(o.modifiers))},beforeUnmount(e){const o=e.__qtouchswipe;o!==void 0&&(ie(o,"main"),ie(o,"temp"),K.is.firefox===!0&&le(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchswipe)}});function St(){const e=new Map;return{getCache:function(o,g){return e[o]===void 0?e[o]=g:e[o]},getCacheWithFn:function(o,g){return e[o]===void 0?e[o]=g():e[o]}}}const Tt={name:{required:!0},disable:Boolean},Ce={setup(e,{slots:o}){return()=>p("div",{class:"q-panel scroll",role:"tabpanel"},oe(o.default))}},qt={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},kt=["update:modelValue","beforeTransition","transition"];function wt(){const{props:e,emit:o,proxy:g}=ve(),{getCacheWithFn:h}=St();let u,t;const l=X(null),m=X(null);function x(s){const S=e.vertical===!0?"up":"left";Q((g.$q.lang.rtl===!0?-1:1)*(s.direction===S?1:-1))}const n=b(()=>[[Ct,x,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),r=b(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),c=b(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),d=b(()=>`--q-transition-duration: ${e.transitionDuration}ms`),_=b(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),w=b(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),v=b(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);R(()=>e.modelValue,(s,S)=>{const B=L(s)===!0?F(s):-1;t!==!0&&$(B===-1?0:B<F(S)?-1:1),l.value!==B&&(l.value=B,o("beforeTransition",s,S),Oe(()=>{o("transition",s,S)}))});function T(){Q(1)}function y(){Q(-1)}function I(s){o("update:modelValue",s)}function L(s){return s!=null&&s!==""}function F(s){return u.findIndex(S=>S.props.name===s&&S.props.disable!==""&&S.props.disable!==!0)}function O(){return u.filter(s=>s.props.disable!==""&&s.props.disable!==!0)}function $(s){const S=s!==0&&e.animated===!0&&l.value!==-1?"q-transition--"+(s===-1?r.value:c.value):null;m.value!==S&&(m.value=S)}function Q(s,S=l.value){let B=S+s;for(;B>-1&&B<u.length;){const V=u[B];if(V!==void 0&&V.props.disable!==""&&V.props.disable!==!0){$(s),t=!0,o("update:modelValue",V.props.name),setTimeout(()=>{t=!1});return}B+=s}e.infinite===!0&&u.length!==0&&S!==-1&&S!==u.length&&Q(s,s===-1?u.length:-1)}function E(){const s=F(e.modelValue);return l.value!==s&&(l.value=s),!0}function z(){const s=L(e.modelValue)===!0&&E()&&u[l.value];return e.keepAlive===!0?[p(Me,w.value,[p(v.value===!0?h(_.value,()=>({...Ce,name:_.value})):Ce,{key:_.value,style:d.value},()=>s)])]:[p("div",{class:"q-panel scroll",style:d.value,key:_.value,role:"tabpanel"},[s])]}function k(){if(u.length!==0)return e.animated===!0?[p(Se,{name:m.value},z)]:z()}function D(s){return u=Fe(oe(s.default,[])).filter(S=>S.props!==null&&S.props.slot===void 0&&L(S.props.name)===!0),u.length}function M(){return u}return Object.assign(g,{next:T,previous:y,goTo:I}),{panelIndex:l,panelDirectives:n,updatePanelsList:D,updatePanelIndex:E,getPanelContent:k,getEnabledPanels:O,getPanels:M,isValidPanelName:L,keepAliveProps:w,needsUniqueKeepAliveWrapper:v,goToPanelByOffset:Q,goToPanel:I,nextPanel:T,previousPanel:y}}var It=Z({name:"QCarouselSlide",props:{...Tt,imgSrc:String},setup(e,{slots:o}){const g=b(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>p("div",{class:"q-carousel__slide",style:g.value},oe(o.default))}});const Pt=["top","right","bottom","left"],Bt=["regular","flat","outline","push","unelevated"];var At=Z({name:"QCarousel",props:{...Qe,...qt,...ft,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>Bt.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Pt.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...mt,...kt],setup(e,{slots:o}){const{proxy:{$q:g}}=ve(),h=De(e,g);let u=null,t;const{updatePanelsList:l,getPanelContent:m,panelDirectives:x,goToPanel:n,previousPanel:r,nextPanel:c,getEnabledPanels:d,panelIndex:_}=wt(),{inFullscreen:w}=pt(),v=b(()=>w.value!==!0&&e.height!==void 0?{height:e.height}:{}),T=b(()=>e.vertical===!0?"vertical":"horizontal"),y=b(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(w.value===!0?" fullscreen":"")+(h.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${T.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${O.value}`:"")),I=b(()=>{const k=[e.prevIcon||g.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||g.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&g.lang.rtl===!0?k.reverse():k}),L=b(()=>e.navigationIcon||g.iconSet.carousel.navigationIcon),F=b(()=>e.navigationActiveIcon||L.value),O=b(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),$=b(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));R(()=>e.modelValue,()=>{e.autoplay&&Q()}),R(()=>e.autoplay,k=>{k?Q():u!==null&&(clearTimeout(u),u=null)});function Q(){const k=ze(e.autoplay)===!0?Math.abs(e.autoplay):5e3;u!==null&&clearTimeout(u),u=setTimeout(()=>{u=null,k>=0?c():r()},k)}je(()=>{e.autoplay&&Q()}),de(()=>{u!==null&&clearTimeout(u)});function E(k,D){return p("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${k} q-carousel__navigation--${O.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[p("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},d().map(D))])}function z(){const k=[];if(e.navigation===!0){const D=o["navigation-icon"]!==void 0?o["navigation-icon"]:s=>p(G,{key:"nav"+s.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${s.active===!0?"":"in"}active`,...s.btnProps,onClick:s.onClick}),M=t-1;k.push(E("buttons",(s,S)=>{const B=s.props.name,V=_.value===S;return D({index:S,maxIndex:M,name:B,active:V,btnProps:{icon:V===!0?F.value:L.value,size:"sm",...$.value},onClick:()=>{n(B)}})}))}else if(e.thumbnails===!0){const D=e.controlColor!==void 0?` text-${e.controlColor}`:"";k.push(E("thumbnails",M=>{const s=M.props;return p("img",{key:"tmb#"+s.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${s.name===e.modelValue?"":"in"}active`+D,src:s.imgSrc||s["img-src"],onClick:()=>{n(s.name)}})}))}return e.arrows===!0&&_.value>=0&&((e.infinite===!0||_.value>0)&&k.push(p("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${T.value} absolute flex flex-center`},[p(G,{icon:I.value[0],...$.value,onClick:r})])),(e.infinite===!0||_.value<t-1)&&k.push(p("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${T.value} absolute flex flex-center`},[p(G,{icon:I.value[1],...$.value,onClick:c})]))),we(o.control,k)}return()=>(t=l(o),p("div",{class:y.value,style:v.value},[He("div",{class:"q-carousel__slides-container"},m(),"sl-cont",e.swipeable,()=>x.value)].concat(z())))}});const Qt=ge({__name:"CreditLinesList",props:{propData:{type:Object,default:null}},emits:["update:slide"],setup(e,{emit:o}){var l;const g=e,h=o;let u=X(((l=g.propData[0])==null?void 0:l.dataLineId)||0);const t=m=>{u.value=m,h("update:slide",m)};return(m,x)=>(U(),re(se,null,[a(ce,{header:""},{default:i(()=>[q(" Total lines: "+P(e.propData.length)+" \xBB Approved: "+P(e.propData.filter(n=>n.decission==="approved").length)+" | Declined: "+P(e.propData.filter(n=>n.decission==="declined").length),1)]),_:1}),a(At,{modelValue:H(u),"onUpdate:modelValue":[x[0]||(x[0]=n=>Re(u)?u.value=n:u=n),t],"transition-prev":"slide-right","transition-next":"slide-left",animated:"",arrows:"","control-color":"primary",class:"rounded-borders"},{default:i(()=>[(U(!0),re(se,null,Ie(e.propData,n=>(U(),Y(It,{key:n.dataLineId,name:n.dataLineId},{default:i(()=>[a(A,null,{default:i(()=>[a(C,{side:""},{default:i(()=>[a(ue,{rounded:"","text-color":"white",color:"cyan",label:n.service},null,8,["label"]),q(" "+P(n.description),1)]),_:2},1024)]),_:2},1024),a(A,null,{default:i(()=>[a(C,{side:""},{default:i(()=>[a(ue,{"text-color":"white",label:n.venue},null,8,["label"])]),_:2},1024)]),_:2},1024),a(ae,{class:"q-my-md"}),a(A,{class:"items-start"},{default:i(()=>[a(C,{horizontal:""},{default:i(()=>[a(A,null,{default:i(()=>[a(C,null,{default:i(()=>[q(" Unit Price ")]),_:1}),a(C,{side:""},{default:i(()=>[q(P(H(W)(n.unitPrice)),1)]),_:2},1024)]),_:2},1024),a(A,null,{default:i(()=>[a(C,null,{default:i(()=>[q(" Quantity ")]),_:1}),a(C,{side:""},{default:i(()=>[q(P(n.quantity),1)]),_:2},1024)]),_:2},1024),a(A,null,{default:i(()=>[a(C,null,{default:i(()=>[q(" Total ")]),_:1}),a(C,{side:""},{default:i(()=>[q(P(H(W)(n.total)),1)]),_:2},1024)]),_:2},1024),a(A,null,{default:i(()=>[a(C,null,{default:i(()=>[q(" Quantity to Credit")]),_:1}),a(C,{side:""},{default:i(()=>[q(P(n.creditQty),1)]),_:2},1024)]),_:2},1024),a(A,null,{default:i(()=>[a(C,null,{default:i(()=>[q(" Before fees ")]),_:1}),a(C,{side:""},{default:i(()=>[q(P(H(W)(n.creditQty*n.unitPrice)),1)]),_:2},1024)]),_:2},1024),a(A,null,{default:i(()=>[a(C,null,{default:i(()=>[q(" Fee Pct ")]),_:1}),a(C,{side:""},{default:i(()=>[q(P(n.cancellationFeePct)+"% ",1)]),_:2},1024)]),_:2},1024),a(A,null,{default:i(()=>[a(C,null,{default:i(()=>[q(" Fee Amount")]),_:1}),a(C,{side:""},{default:i(()=>[q(P(H(W)(n.cancellationFeeAmount)),1)]),_:2},1024)]),_:2},1024),a(A,null,{default:i(()=>[a(C,null,{default:i(()=>[q(" Total to Credit ")]),_:1}),a(C,{side:""},{default:i(()=>[q(P(H(W)(n.creditTotal)),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024),a(ae,{class:"q-my-md"}),a(A,null,{default:i(()=>[a(C,null,{default:i(()=>[a(yt,{class:"full-width",style:{"border-style":"solid","border-width":"1px","border-color":"grey"},spread:"",dense:"",modelValue:n.decission,"onUpdate:modelValue":r=>n.decission=r,"toggle-color":n.decission==="approved"?"green":n.decission==="declined"?"red":"grey",options:[{label:"Decline",value:"declined",icon:"sym_o_close"},{label:"Approve",value:"approved",icon:"sym_o_check"}]},null,8,["modelValue","onUpdate:modelValue","toggle-color"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])],64))}});var Dt=Pe(Qt,[["__scopeId","data-v-1c26feb9"]]);const Lt=["innerHTML"],Vt=["innerHTML"],Nt=ge({__name:"NotificationsList",setup(e){const o=Be(),g=Ae(),h=n=>n.split(" ").map(r=>r.charAt(0).toUpperCase()+r.slice(1).toLowerCase()).join(" "),u=n=>{switch(n){case"approved":return"sym_o_check";case"done":return"sym_o_check";case"declined":return"sym_o_close";default:return"sym_o_pending"}},t=n=>{switch(n){case"approved":return"green";case"done":return"green";case"declined":return"grey";default:return"blue-6"}},l=n=>o.users.find(r=>r.userId===(n.requesterContent?n.recipientId:n.senderId))||{color:"grey",initials:"NA"},m=n=>{n.status="declined",n.read=!0;const c={Parameter:n.title==="Request to Update Finance"?"Decline Update Finance":"Decline Credit Services",Data:n,LoggedUser:g.loggedUser};pe("GLB | Notifications Actions",c),he({message:"Task Declined",type:"negative",position:"top-right"})},x=n=>{console.log("notification",n),n.status="done",n.read=!0;const c={Parameter:n.title==="Request to Update Finance"?"Approve Update Finance":"Approve Credit Services",Data:n,LoggedUser:g.loggedUser};pe("GLB | Notifications Actions",c),he({message:"Task Approved",type:"positive",position:"top-right"})};return(n,r)=>(U(),Y(nt,{bordered:"",class:"rounded-borders q-ma-md"},{default:i(()=>[(U(!0),re(se,null,Ie(H(g).loggedUser.notifications,(c,d)=>(U(),Y(bt,{key:d,"expand-separator":"","hide-expand-icon":"",group:"notifications"},{header:i(()=>[a(C,{avatar:""},{default:i(()=>[a(Ge,{size:"sm","text-color":"white",style:Ke({backgroundColor:l(c).color})},{default:i(()=>[q(P(l(c).initials),1)]),_:2},1032,["style"])]),_:2},1024),a(C,null,{default:i(()=>[q(P(c.title),1)]),_:2},1024),a(C,{side:""},{default:i(()=>[q(P(new Date(c.timestampUnix*1e3).toLocaleDateString("en-GB"))+" ",1),a(ue,{align:"bottom",rounded:"",color:t(c.status)},{default:i(()=>[a(J,{name:u(c.status)},null,8,["name"]),q(" "+P(h(c.type)),1)]),_:2},1032,["color"])]),_:2},1024)]),default:i(()=>[a(dt,null,{default:i(()=>[a(_e,null,{default:i(()=>[a(at),a(st,{dense:"",class:"text-white q-pa-sm",color:t(c.status),label:h(c.status)},{default:i(()=>[a(J,{name:u(c.status)},null,8,["name"])]),_:2},1032,["color","label"])]),_:2},1024),a(vt,null,{default:i(()=>[me("div",{innerHTML:c.requesterContent},null,8,Lt),me("div",{innerHTML:c.recipientContent},null,8,Vt),c.type==="task"&&c.title==="Request Credit Services"?(U(),Y(Dt,{key:0,propData:c.metadata},null,8,["propData"])):We("",!0)]),_:2},1024),qe(a(_e,null,{default:i(()=>[a(A,{class:"q-gutter-x-md"},{default:i(()=>[a(G,{dense:"",icon:"sym_o_close",color:"red-6",label:"Decline",onClick:_=>m(c)},null,8,["onClick"]),a(G,{dense:"",icon:"sym_o_check",color:"green-6",label:"Approve",onClick:_=>x(c)},null,8,["onClick"])]),_:2},1024)]),_:2},1536),[[ke,c.type==="task"&&c.status==="pending"]])]),_:2},1024)]),_:2},1024))),128))]),_:1}))}});const $t=ge({__name:"NotificationsPage",setup(e){const o=Be(),g=Ae();return Ye(()=>{g.readSettings(),o.readAllUsers()}),(h,u)=>(U(),Y(et,null,{default:i(()=>[a(tt,null,{default:i(()=>[a(Ze,null,{default:i(()=>[a(Je,{class:"text-white bg-blue-6"},{default:i(()=>[a(J,{name:"sym_o_notifications",size:"md"}),a(Xe,null,{default:i(()=>[q(" Notifications ")]),_:1})]),_:1}),a(Nt)]),_:1})]),_:1})]),_:1}))}});var Zt=Pe($t,[["__scopeId","data-v-32848024"]]);export{Zt as default};
