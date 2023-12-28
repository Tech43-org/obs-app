import{x as z,J as pe,C as k,a6 as Qe,bc as Ae,ab as he,R as re,B as _,H as Y,E as Ce,a0 as xe,a8 as Se,D as _e,a9 as J,ae as $e,az as Fe,Q as $,X as ke,I as Ue,ao as Ne,b5 as Le,k as Z,u as ee,o as q,i as j,p as P,m as w,w as t,aT as F,n as a,bd as Ve,a2 as R,_ as ge,be as A,s as p,t as I,a1 as X,a3 as Ie,a4 as qe,a5 as ve,aR as se,a_ as ie,bf as O,aW as Oe,a as Te,q as je,aU as Re,bg as ye,v as ze,aV as Ee,$ as He}from"./index.f190ceab.js";import{Q as Me}from"./QToolbarTitle.264325dc.js";import{Q as Ge}from"./QToolbar.49791f40.js";import{Q as We}from"./QHeader.66ca6e51.js";import{Q as Ke}from"./QPage.6a841fe8.js";import{Q as Ye,a as Je}from"./QLayout.75ab1bd5.js";import{u as we,c as De,a as T,b as m,Q as Xe}from"./QList.a3910935.js";import{Q as ue}from"./QBadge.5cbfb030.js";import{Q as Ze}from"./QSpace.eb8fd1ba.js";import{u as et,a as tt,b as at,Q as nt}from"./QChip.c38fae29.js";import{Q as lt}from"./QCardActions.47d7d9a6.js";import{u as be,b as de,c as ot,e as rt,Q as V,a as K}from"./use-form.cb4f783b.js";import{Q as ce}from"./QSeparator.7c7c1b52.js";import{Q as st}from"./QBtnGroup.777a2229.js";import{u as it,a as ut,b as dt,c as ct}from"./use-panel.cf3d8b1f.js";import{u as gt,a as vt,b as mt}from"./use-fullscreen.1f864d54.js";import"./touch.3df10340.js";var ft=z({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:c,emit:u}){let d=!1,r,y,g=null,b=null,s,l;function v(){r&&r(),r=null,d=!1,g!==null&&(clearTimeout(g),g=null),b!==null&&(clearTimeout(b),b=null),y!==void 0&&y.removeEventListener("transitionend",s),s=null}function o(n,C,x){C!==void 0&&(n.style.height=`${C}px`),n.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,d=!0,r=x}function h(n,C){n.style.overflowY=null,n.style.height=null,n.style.transition=null,v(),C!==l&&u(C)}function i(n,C){let x=0;y=n,d===!0?(v(),x=n.offsetHeight===n.scrollHeight?0:void 0):(l="hide",n.style.overflowY="hidden"),o(n,x,C),g=setTimeout(()=>{g=null,n.style.height=`${n.scrollHeight}px`,s=B=>{b=null,(Object(B)!==B||B.target===n)&&h(n,"show")},n.addEventListener("transitionend",s),b=setTimeout(s,e.duration*1.1)},100)}function S(n,C){let x;y=n,d===!0?v():(l="show",n.style.overflowY="hidden",x=n.scrollHeight),o(n,x,C),g=setTimeout(()=>{g=null,n.style.height=0,s=B=>{b=null,(Object(B)!==B||B.target===n)&&h(n,"hide")},n.addEventListener("transitionend",s),b=setTimeout(s,e.duration*1.1)},100)}return pe(()=>{d===!0&&v()}),()=>k(Qe,{css:!1,appear:e.appear,onEnter:i,onLeave:S},c.default)}});const L=Ae({}),pt=Object.keys(he);var _t=z({name:"QExpansionItem",props:{...he,...et,...we,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...tt,"click","afterShow","afterHide"],setup(e,{slots:c,emit:u}){const{proxy:{$q:d}}=Ce(),r=De(e,d),y=re(e.modelValue!==null?e.modelValue:e.defaultOpened),g=re(null),b=be(),{show:s,hide:l,toggle:v}=at({showing:y});let o,h;const i=_(()=>`q-expansion-item q-item-type q-expansion-item--${y.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),S=_(()=>{if(e.contentInsetLevel===void 0)return null;const f=d.lang.rtl===!0?"Right":"Left";return{["padding"+f]:e.contentInsetLevel*56+"px"}}),n=_(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),C=_(()=>{const f={};return pt.forEach(U=>{f[U]=e[U]}),f}),x=_(()=>n.value===!0||e.expandIconToggle!==!0),B=_(()=>e.expandedIcon!==void 0&&y.value===!0?e.expandedIcon:e.expandIcon||d.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),te=_(()=>e.disable!==!0&&(n.value===!0||e.expandIconToggle===!0)),me=_(()=>({expanded:y.value===!0,detailsId:e.targetUid,toggle:v,show:s,hide:l})),E=_(()=>{const f=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:d.lang.label[y.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":y.value===!0?"true":"false","aria-controls":b,"aria-label":f}});Y(()=>e.group,f=>{h!==void 0&&h(),f!==void 0&&N()});function H(f){n.value!==!0&&v(f),u("click",f)}function M(f){f.keyCode===13&&G(f,!0)}function G(f,U){U!==!0&&g.value!==null&&g.value.focus(),v(f),$e(f)}function fe(){u("afterShow")}function D(){u("afterHide")}function N(){o===void 0&&(o=be()),y.value===!0&&(L[e.group]=o);const f=Y(y,oe=>{oe===!0?L[e.group]=o:L[e.group]===o&&delete L[e.group]}),U=Y(()=>L[e.group],(oe,Be)=>{Be===o&&oe!==void 0&&oe!==o&&l()});h=()=>{f(),U(),L[e.group]===o&&delete L[e.group],h=void 0}}function W(){const f={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},U=[k(J,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&y.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:B.value})];return te.value===!0&&(Object.assign(f,{tabindex:0,...E.value,onClick:G,onKeyup:M}),U.unshift(k("div",{ref:g,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),k(m,f,()=>U)}function Q(){let f;return c.header!==void 0?f=[].concat(c.header(me.value)):(f=[k(m,()=>[k(de,{lines:e.labelLines},()=>e.label||""),e.caption?k(de,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&f[e.switchToggleSide===!0?"push":"unshift"](k(m,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>k(J,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&f[e.switchToggleSide===!0?"unshift":"push"](W()),f}function ae(){const f={ref:"item",style:e.headerStyle,class:e.headerClass,dark:r.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return x.value===!0&&(f.clickable=!0,f.onClick=H,Object.assign(f,n.value===!0?C.value:E.value)),k(T,f,Q)}function ne(){return xe(k("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:S.value,id:b},_e(c.default)),[[Se,y.value]])}function le(){const f=[ae(),k(ft,{duration:e.duration,onShow:fe,onHide:D},ne)];return e.expandSeparator===!0&&f.push(k(ce,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:r.value}),k(ce,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:r.value})),f}return e.group!==void 0&&N(),pe(()=>{h!==void 0&&h()}),()=>k("div",{class:i.value},[k("div",{class:"q-expansion-item__container relative-position"},le())])}}),yt=z({name:"QCarouselControl",props:{position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,default:()=>[18,18],validator:e=>e.length===2}},setup(e,{slots:c}){const u=_(()=>`q-carousel__control absolute absolute-${e.position}`),d=_(()=>({margin:`${e.offset[1]}px ${e.offset[0]}px`}));return()=>k("div",{class:u.value,style:d.value},_e(c.default))}}),bt=z({name:"QBtnToggle",props:{...ot,modelValue:{required:!0},options:{type:Array,required:!0,validator:e=>e.every(c=>("label"in c||"icon"in c||"slot"in c)&&"value"in c)},color:String,textColor:String,toggleColor:{type:String,default:"primary"},toggleTextColor:String,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,padding:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,readonly:Boolean,disable:Boolean,stack:Boolean,stretch:Boolean,spread:Boolean,clearable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","clear","click"],setup(e,{slots:c,emit:u}){const d=_(()=>e.options.find(h=>h.value===e.modelValue)!==void 0),r=_(()=>({type:"hidden",name:e.name,value:e.modelValue})),y=rt(r),g=_(()=>Fe(e)),b=_(()=>({rounded:e.rounded,dense:e.dense,...g.value})),s=_(()=>e.options.map((h,i)=>{const{attrs:S,value:n,slot:C,...x}=h;return{slot:C,props:{key:i,"aria-pressed":n===e.modelValue?"true":"false",...S,...x,...b.value,disable:e.disable===!0||x.disable===!0,color:n===e.modelValue?v(x,"toggleColor"):v(x,"color"),textColor:n===e.modelValue?v(x,"toggleTextColor"):v(x,"textColor"),noCaps:v(x,"noCaps")===!0,noWrap:v(x,"noWrap")===!0,size:v(x,"size"),padding:v(x,"padding"),ripple:v(x,"ripple"),stack:v(x,"stack")===!0,stretch:v(x,"stretch")===!0,onClick(B){l(n,h,B)}}}}));function l(h,i,S){e.readonly!==!0&&(e.modelValue===h?e.clearable===!0&&(u("update:modelValue",null,null),u("clear")):u("update:modelValue",h,i),u("click",S))}function v(h,i){return h[i]===void 0?e[i]:h[i]}function o(){const h=s.value.map(i=>k($,i.props,i.slot!==void 0?c[i.slot]:void 0));return e.name!==void 0&&e.disable!==!0&&d.value===!0&&y(h,"push"),ke(c.default,h)}return()=>k(st,{class:"q-btn-toggle",...g.value,rounded:e.rounded,stretch:e.stretch,glossy:e.glossy,spread:e.spread},o)}}),ht=z({name:"QCarouselSlide",props:{...it,imgSrc:String},setup(e,{slots:c}){const u=_(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>k("div",{class:"q-carousel__slide",style:u.value},_e(c.default))}});const Ct=["top","right","bottom","left"],xt=["regular","flat","outline","push","unelevated"];var St=z({name:"QCarousel",props:{...we,...ut,...gt,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>xt.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Ct.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...vt,...dt],setup(e,{slots:c}){const{proxy:{$q:u}}=Ce(),d=De(e,u);let r=null,y;const{updatePanelsList:g,getPanelContent:b,panelDirectives:s,goToPanel:l,previousPanel:v,nextPanel:o,getEnabledPanels:h,panelIndex:i}=ct(),{inFullscreen:S}=mt(),n=_(()=>S.value!==!0&&e.height!==void 0?{height:e.height}:{}),C=_(()=>e.vertical===!0?"vertical":"horizontal"),x=_(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(S.value===!0?" fullscreen":"")+(d.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${C.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${E.value}`:"")),B=_(()=>{const D=[e.prevIcon||u.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||u.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&u.lang.rtl===!0?D.reverse():D}),te=_(()=>e.navigationIcon||u.iconSet.carousel.navigationIcon),me=_(()=>e.navigationActiveIcon||te.value),E=_(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),H=_(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));Y(()=>e.modelValue,()=>{e.autoplay&&M()}),Y(()=>e.autoplay,D=>{D?M():r!==null&&(clearTimeout(r),r=null)});function M(){const D=Le(e.autoplay)===!0?Math.abs(e.autoplay):5e3;r!==null&&clearTimeout(r),r=setTimeout(()=>{r=null,D>=0?o():v()},D)}Ue(()=>{e.autoplay&&M()}),pe(()=>{r!==null&&clearTimeout(r)});function G(D,N){return k("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${D} q-carousel__navigation--${E.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[k("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},h().map(N))])}function fe(){const D=[];if(e.navigation===!0){const N=c["navigation-icon"]!==void 0?c["navigation-icon"]:Q=>k($,{key:"nav"+Q.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${Q.active===!0?"":"in"}active`,...Q.btnProps,onClick:Q.onClick}),W=y-1;D.push(G("buttons",(Q,ae)=>{const ne=Q.props.name,le=i.value===ae;return N({index:ae,maxIndex:W,name:ne,active:le,btnProps:{icon:le===!0?me.value:te.value,size:"sm",...H.value},onClick:()=>{l(ne)}})}))}else if(e.thumbnails===!0){const N=e.controlColor!==void 0?` text-${e.controlColor}`:"";D.push(G("thumbnails",W=>{const Q=W.props;return k("img",{key:"tmb#"+Q.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${Q.name===e.modelValue?"":"in"}active`+N,src:Q.imgSrc||Q["img-src"],onClick:()=>{l(Q.name)}})}))}return e.arrows===!0&&i.value>=0&&((e.infinite===!0||i.value>0)&&D.push(k("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${C.value} absolute flex flex-center`},[k($,{icon:B.value[0],...H.value,onClick:v})])),(e.infinite===!0||i.value<y-1)&&D.push(k("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${C.value} absolute flex flex-center`},[k($,{icon:B.value[1],...H.value,onClick:o})]))),ke(c.control,D)}return()=>(y=g(c),k("div",{class:x.value,style:n.value},[Ne("div",{class:"q-carousel__slides-container"},b(),"sl-cont",e.swipeable,()=>s.value)].concat(fe())))}});const kt=e=>(Ie("data-v-cacf8ed6"),e=e(),qe(),e),It=kt(()=>ve("br",null,null,-1)),qt=Z({__name:"CreditLinesCarousel",props:{propData:{type:Object,default:null}},setup(e){var h;const c=ee(),u=e,d=_(()=>u.propData),r=_(()=>u.propData.metadata&&"orderLines"in u.propData.metadata?u.propData.metadata.orderLines:[]),y=_(()=>u.propData.metadata&&"orderLines"in u.propData.metadata?u.propData.metadata.orderLines.length:0),g=_(()=>u.propData.metadata&&"orderLines"in u.propData.metadata?u.propData.metadata.orderLines.filter(i=>i.decision==="approved").length:0),b=_(()=>u.propData.metadata&&"orderLines"in u.propData.metadata?u.propData.metadata.orderLines.filter(i=>i.decision==="declined").length:0),s=re(null);let l=re(r.value&&((h=r.value[0])==null?void 0:h.dataLineId)||0);const v=i=>_(()=>i.metadata&&"orderLines"in i.metadata?i.metadata.orderLines.every(S=>S.decision&&S.decision.trim()!==""):!1),o=i=>{g.value>0&&b.value===0?i.status=A.Approved:g.value===0&&b.value>0?i.status=A.Declined:g.value>0&&b.value>0&&(i.status=A.PartiallyApproved),i.read=!0;const S={Data:i,LoggedUser:c.loggedUser};se("NTF | Decision Credit",S),ie({message:"Credit Note Created",type:"positive",position:"top-right"})};return(i,S)=>(q(),j(R,null,[d.value.type==="task"&&d.value.status===P(A).Pending?(q(),w(de,{key:0,header:""},{default:t(()=>[p(" Total lines: "+I(y.value)+" \xBB Approved: "+I(g.value)+" | Declined: "+I(b.value),1)]),_:1})):F("",!0),a(P(St),{ref_key:"carouselRef",ref:s,modelValue:P(l),"onUpdate:modelValue":S[3]||(S[3]=n=>Ve(l)?l.value=n:l=n),"transition-prev":"slide-right","transition-next":"slide-left",animated:"","control-color":"primary",class:"rounded-borders"},{control:t(()=>[r.value.length>1?(q(),w(yt,{key:0,position:"top-right",offset:[6,6],class:"q-gutter-xs"},{default:t(()=>[a($,{dense:"",color:"grey-3","text-color":"primary",icon:"sym_o_arrow_left",onClick:S[0]||(S[0]=n=>{var C;return(C=s.value)==null?void 0:C.previous()})}),a($,{dense:"",color:"grey-3","text-color":"primary",icon:"sym_o_arrow_right",onClick:S[1]||(S[1]=n=>{var C;return(C=s.value)==null?void 0:C.next()})})]),_:1})):F("",!0)]),default:t(()=>[(q(!0),j(R,null,X(r.value,n=>(q(),w(ht,{key:n.dataLineId,name:n.dataLineId},{default:t(()=>[a(T,null,{default:t(()=>[a(m,{side:""},{default:t(()=>[a(ue,{rounded:"","text-color":"white",color:"cyan",label:n.service},null,8,["label"]),p(" "+I(n.description),1)]),_:2},1024)]),_:2},1024),xe(a(T,null,{default:t(()=>[a(m,{side:""},{default:t(()=>[a(ue,{"text-color":"white",label:n.venue},null,8,["label"])]),_:2},1024)]),_:2},1536),[[Se,n.venue]]),a(ce,{class:"q-my-md"}),a(T,{class:"items-start"},{default:t(()=>[a(m,{horizontal:""},{default:t(()=>[a(T,null,{default:t(()=>[a(m,null,{default:t(()=>[p(" Unit Price ")]),_:1}),a(m,{side:""},{default:t(()=>[p(I(P(O)(n.unitPrice)),1)]),_:2},1024)]),_:2},1024),a(T,null,{default:t(()=>[a(m,null,{default:t(()=>[p(" Quantity ")]),_:1}),a(m,{side:""},{default:t(()=>[p(I(n.quantity),1)]),_:2},1024)]),_:2},1024),a(T,null,{default:t(()=>[a(m,null,{default:t(()=>[p(" Total ")]),_:1}),a(m,{side:""},{default:t(()=>[p(I(P(O)(n.total)),1)]),_:2},1024)]),_:2},1024),a(T,null,{default:t(()=>[a(m,null,{default:t(()=>[p(" Quantity to Credit")]),_:1}),a(m,{side:""},{default:t(()=>[p(I(n.creditQty),1)]),_:2},1024)]),_:2},1024),a(T,null,{default:t(()=>[a(m,null,{default:t(()=>[p(" Before fees ")]),_:1}),a(m,{side:""},{default:t(()=>[p(I(P(O)(n.creditQty*n.unitPrice)),1)]),_:2},1024)]),_:2},1024),a(T,null,{default:t(()=>[a(m,null,{default:t(()=>[p(" Fee Pct ")]),_:1}),a(m,{side:""},{default:t(()=>[p(I(n.cancellationFeePct)+"% ",1)]),_:2},1024)]),_:2},1024),a(T,null,{default:t(()=>[a(m,null,{default:t(()=>[p(" Fee Amount")]),_:1}),a(m,{side:""},{default:t(()=>[p(I(P(O)(n.cancellationFeeAmount)),1)]),_:2},1024)]),_:2},1024),a(T,null,{default:t(()=>[a(m,null,{default:t(()=>[p(" Total to Credit ")]),_:1}),a(m,{side:""},{default:t(()=>[p(I(P(O)(n.creditTotal)),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024),a(ce,{class:"q-my-md"}),d.value.type==="task"&&d.value.status===P(A).Pending?(q(),w(T,{key:0},{default:t(()=>[a(m,null,{default:t(()=>[a(bt,{class:"full-width",style:{"border-style":"solid","border-width":"1px","border-color":"grey"},spread:"",dense:"",modelValue:n.decision,"onUpdate:modelValue":[C=>n.decision=C,S[2]||(S[2]=C=>{var x;return(x=s.value)==null?void 0:x.next()})],"toggle-color":n.decision==="approved"?"green":n.decision==="declined"?"red":"grey",options:[{label:"Decline",value:"declined",icon:"sym_o_close"},{label:"Approve",value:"approved",icon:"sym_o_check"}]},null,8,["modelValue","onUpdate:modelValue","toggle-color"])]),_:2},1024)]),_:2},1024)):(q(),w(T,{key:1,class:"justify-center"},{default:t(()=>[a(de,{header:"",class:Oe(n.decision==="approved"?"green-6":n.decision==="declined"?"red-6":"grey-6")},{default:t(()=>{var C;return[p(I((C=d.value.status)==null?void 0:C.toUpperCase()),1)]}),_:2},1032,["class"])]),_:2},1024))]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"]),It,d.value.type==="task"&&d.value.status===P(A).Pending?(q(),w(T,{key:1,class:"full-width items-end justify-end",disable:!v(d.value).value},{default:t(()=>[a($,{dense:"",class:"q-pr-md",icon:y.value===g.value?"sym_o_check":y.value===b.value?"sym_o_close":"sym_o_check_circle",color:"primary",label:"Submit Decision",onClick:S[4]||(S[4]=n=>o(d.value))},null,8,["icon"])]),_:1},8,["disable"])):F("",!0)],64))}});var Tt=ge(qt,[["__scopeId","data-v-cacf8ed6"]]);const Pe=e=>(Ie("data-v-1f509306"),e=e(),qe(),e),wt=Pe(()=>ve("br",null,null,-1)),Dt=Pe(()=>ve("br",null,null,-1)),Pt=Z({__name:"CoreFinanceCard",props:{propData:{type:Object,default:null}},setup(e){const c=ee(),u=e,d=_(()=>u.propData),r=_(()=>{var s,l;return(l=(s=d.value)==null?void 0:s.metadata)==null?void 0:l.requestFinanceCore}),y=(s,l,v,o,h)=>{s.status=l,s.read=!0;let i="";if(s.content){const B=s.content.indexOf("asked to update ")+16;i=s.content.substring(B)}const n=`${(i.charAt(0).toUpperCase()+i.slice(1)).replace(/<\/?strong>/g,"")} has been ${l} by ${c.loggedUser.fullName}`,x={Parameter:`${l===A.Declined?"Decline":"Approve"} Update Core Finance`,Data:{...s,activity:{action:v,description:n}},LoggedUser:c.loggedUser};se("NTF | Notifications Actions",x),ie({message:o,type:h,position:"top-right"})},g=s=>{y(s,A.Declined,"Request Update Finance Declined","Core Finance Update Declined","negative")},b=s=>{y(s,A.Approved,"Update Finance","Core Finance Update Approved","positive")};return(s,l)=>(q(),j(R,null,[r.value.price||r.value.priceType?(q(),w(V,{key:0},{default:t(()=>[a(V,{class:"bg-blue-3 q-py-sm"},{default:t(()=>[r.value.price?(q(),w(K,{key:0,horizontal:""},{default:t(()=>[a(T,null,{default:t(()=>[a(m,null,{default:t(()=>[p(" Price ")]),_:1}),a(m,{side:""},{default:t(()=>[p(I(P(O)(r.value.price.oldValue||0))+" \xBB "+I(P(O)(r.value.price.newValue||0)),1)]),_:1})]),_:1})]),_:1})):F("",!0),r.value.priceType?(q(),w(K,{key:1,horizontal:""},{default:t(()=>[a(T,null,{default:t(()=>[a(m,null,{default:t(()=>[p(" Type ")]),_:1}),a(m,{side:""},{default:t(()=>[p(I(r.value.priceType.oldValue)+" \xBB "+I(r.value.priceType.newValue),1)]),_:1})]),_:1})]),_:1})):F("",!0)]),_:1})]),_:1})):F("",!0),r.value.itemLocations?(q(),w(V,{key:1},{default:t(()=>[a(V,{class:"bg-blue-3"},{default:t(()=>[a(K,null,{default:t(()=>[p(" Item Locations ")]),_:1}),(q(!0),j(R,null,X(Object.entries(r.value.itemLocations),([v,o])=>(q(),w(T,{key:v},{default:t(()=>[a(m,null,{default:t(()=>[a(ue,{rounded:"",label:o.abbr},null,8,["label"])]),_:2},1024),a(m,null,{default:t(()=>[p(I(o.oldPrice),1)]),_:2},1024),a(m,null,{default:t(()=>[p(I(o.newPrice),1)]),_:2},1024),a(m,null,{default:t(()=>[p(I(o.sapProductNumber),1)]),_:2},1024)]),_:2},1024))),128)),wt]),_:1})]),_:1})):F("",!0),r.value.itemUnicable?(q(),w(V,{key:2},{default:t(()=>[a(V,{class:"bg-blue-3"},{default:t(()=>[a(K,null,{default:t(()=>[p(" Item Unicable ")]),_:1}),(q(!0),j(R,null,X(Object.entries(r.value.itemUnicable),([v,o])=>(q(),w(T,{key:v},{default:t(()=>[a(m,null,{default:t(()=>[p(I(o.type),1)]),_:2},1024),a(m,null,{default:t(()=>[p(I(o.oldPrice),1)]),_:2},1024),a(m,null,{default:t(()=>[p(I(o.newPrice),1)]),_:2},1024)]),_:2},1024))),128)),Dt]),_:1})]),_:1})):F("",!0),d.value.type==="task"&&d.value.status===P(A).Pending?(q(),w(T,{key:3,class:"q-gutter-x-md full-width items-end justify-end"},{default:t(()=>[a($,{dense:"",icon:"sym_o_close",color:"red-6",label:"Declined",class:"q-pr-md",onClick:l[0]||(l[0]=v=>g(d.value))}),a($,{dense:"",icon:"sym_o_check",color:"green-6",label:"Approve",class:"q-pr-md",onClick:l[1]||(l[1]=v=>b(d.value))})]),_:1})):F("",!0)],64))}});var Bt=ge(Pt,[["__scopeId","data-v-1f509306"]]);const Qt=Z({__name:"FinanceCard",props:{propData:{type:Object,default:null}},setup(e){const c=ee(),u=e,d=_(()=>u.propData),r=g=>{g.status=A.Declined,g.read=!0;const s={Parameter:g.title==="Request to Update Finance"?"Decline Update Finance":"Decline Credit Services",Data:g,LoggedUser:c.loggedUser};se("NTF | Notifications Actions",s),ie({message:"Task Declined",type:"negative",position:"top-right"})},y=g=>{g.status=A.Done,g.read=!0;const s={Parameter:g.title==="Request to Update Finance"?"Approve Update Finance":"Approve Credit Services",Data:g,LoggedUser:c.loggedUser};se("NTF | Notifications Actions",s),ie({message:"Task Approved",type:"positive",position:"top-right"})};return(g,b)=>d.value.type==="task"&&d.value.status===P(A).Pending?(q(),w(T,{key:0,class:"q-gutter-x-md full-width"},{default:t(()=>[a($,{dense:"",icon:"sym_o_close",color:"red-6",label:"Decline",onClick:b[0]||(b[0]=s=>r(d.value))}),a($,{dense:"",icon:"sym_o_check",color:"green-6",label:"Approve",onClick:b[1]||(b[1]=s=>y(d.value))})]),_:1})):F("",!0)}});var At=ge(Qt,[["__scopeId","data-v-c3c8415e"]]);const $t=["innerHTML"],Ft=Z({__name:"NotificationsList",setup(e){const c=Te(),u=ee(),d=_(()=>c.notificationComponents.map(({name:l,props:v})=>({component:y[l],props:v}))),r=l=>{l.title==="Request Credit Note"?c.notificationComponents=[{name:"CreditLinesCarousel",props:{propData:l}}]:l.title==="Request to Update Finance"&&l.type==="task"?c.notificationComponents=[{name:"FinanceCard",props:{propData:l}}]:l.title==="Request to Update Core Finance"?c.notificationComponents=[{name:"CoreFinanceCard",props:{propData:l}}]:c.notificationComponents=[]},y={CreditLinesCarousel:Tt,CoreFinanceCard:Bt,FinanceCard:At},g=l=>{switch(l){case"approved":return"sym_o_check";case"done":return"sym_o_check";case"declined":return"sym_o_close";case"partiallyApproved":return"sym_o_close";default:return"sym_o_pending"}},b=l=>{switch(l){case"approved":return"green";case"done":return"green";case"declined":return"grey";case"partiallyApproved":return"orange-6";default:return"blue-6"}},s=l=>c.users.find(o=>o.userId===(l.content&&o.fullName&&l.content.startsWith(o.fullName)?l.senderId:l.recipientId))||{color:"grey",initials:"NA"};return(l,v)=>(q(),w(Xe,{bordered:"",class:"rounded-borders q-ma-md"},{default:t(()=>[(q(!0),j(R,null,X(P(u).loggedUser.notifications,(o,h)=>(q(),w(_t,{key:h,"expand-separator":"","hide-expand-icon":"",group:"notifications",onBeforeShow:i=>r(o)},{header:t(()=>[a(m,{avatar:""},{default:t(()=>[a(je,{size:"sm","text-color":"white",style:Re({backgroundColor:s(o).color})},{default:t(()=>[p(I(s(o).initials),1)]),_:2},1032,["style"])]),_:2},1024),a(m,null,{default:t(()=>[p(I(o.title),1)]),_:2},1024),a(m,{side:""},{default:t(()=>[p(I(new Date(o.timestampUnix*1e3).toLocaleDateString("en-GB"))+" ",1),a(ue,{align:"bottom",rounded:"",color:b(o.status)},{default:t(()=>[a(J,{name:g(o.status)},null,8,["name"]),p(" "+I(P(ye)(o.type)),1)]),_:2},1032,["color"])]),_:2},1024)]),default:t(()=>[a(V,null,{default:t(()=>[a(lt,null,{default:t(()=>[a(Ze),a(nt,{dense:"",class:"text-white q-pa-sm",color:b(o.status),label:P(ye)(o.status)},{default:t(()=>[a(J,{name:g(o.status)},null,8,["name"])]),_:2},1032,["color","label"])]),_:2},1024),a(K,null,{default:t(()=>[ve("div",{innerHTML:o.content},null,8,$t),(q(!0),j(R,null,X(d.value,(i,S)=>(q(),w(ze(i.component),Ee(i.props,{key:S}),null,16))),128))]),_:2},1024)]),_:2},1024)]),_:2},1032,["onBeforeShow"]))),128))]),_:1}))}});const Ut=Z({__name:"NotificationsPage",setup(e){const c=Te(),u=ee();return He(()=>{u.readSettings(),c.readAllUsers()}),(d,r)=>(q(),w(Ye,{view:"hHh lpR fFf"},{default:t(()=>[a(We,null,{default:t(()=>[a(Ge,{class:"text-white bg-primary"},{default:t(()=>[a(J,{name:"sym_o_notifications",size:"md"}),a(Me,null,{default:t(()=>[p(" Notifications ")]),_:1})]),_:1})]),_:1}),a(Je,{style:{"background-color":"var(--primary-white)"}},{default:t(()=>[a(Ke,null,{default:t(()=>[a(Ft)]),_:1})]),_:1})]),_:1}))}});var ea=ge(Ut,[["__scopeId","data-v-6a60d745"]]);export{ea as default};
