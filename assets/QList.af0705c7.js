import{a as s,d as l,h as r,f as c,j as m,ap as I,aq as E,t as h,Z as $,O as j,ar as A}from"./index.c03bf45e.js";var F=s({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:a}){const n=l(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>r(e.tag,{class:n.value},c(a.default))}});const f={dark:{type:Boolean,default:null}};function q(e,a){return l(()=>e.dark===null?a.dark.isActive:e.dark)}const K={name:String};function R(e={}){return(a,n,u)=>{a[n](r("input",{class:"hidden"+(u||""),...e.value}))}}function N(e){return l(()=>e.name||e.for)}var P=s({name:"QCard",props:{...f,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:a}){const{proxy:{$q:n}}=m(),u=q(e,n),i=l(()=>"q-card"+(u.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>r(e.tag,{class:i.value},c(a.default))}}),z=s({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:a}){const n=l(()=>parseInt(e.lines,10)),u=l(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),i=l(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>r("div",{style:i.value,class:u.value},c(a.default))}}),O=s({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:a}){const n=l(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>r("div",{class:n.value},c(a.default))}}),T=s({name:"QItem",props:{...f,...I,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:a,emit:n}){const{proxy:{$q:u}}=m(),i=q(e,u),{hasLink:b,linkAttrs:y,linkClass:_,linkTag:B,navigateOnClick:C}=E(),d=h(null),v=h(null),k=l(()=>e.clickable===!0||b.value===!0||e.tag==="label"),o=l(()=>e.disable!==!0&&k.value===!0),x=l(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(i.value===!0?" q-item--dark":"")+(b.value===!0&&e.active===null?_.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(o.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),Q=l(()=>{if(e.insetLevel===void 0)return null;const t=u.lang.rtl===!0?"Right":"Left";return{["padding"+t]:16+e.insetLevel*56+"px"}});function S(t){o.value===!0&&(v.value!==null&&(t.qKeyEvent!==!0&&document.activeElement===d.value?v.value.focus():document.activeElement===v.value&&d.value.focus()),C(t))}function L(t){if(o.value===!0&&$(t,13)===!0){j(t),t.qKeyEvent=!0;const g=new MouseEvent("click",t);g.qKeyEvent=!0,d.value.dispatchEvent(g)}n("keyup",t)}function w(){const t=A(a.default,[]);return o.value===!0&&t.unshift(r("div",{class:"q-focus-helper",tabindex:-1,ref:v})),t}return()=>{const t={ref:d,class:x.value,style:Q.value,role:"listitem",onClick:S,onKeyup:L};return o.value===!0?(t.tabindex=e.tabindex||"0",Object.assign(t,y.value)):k.value===!0&&(t["aria-disabled"]="true"),r(B.value,t,w())}}}),W=s({name:"QList",props:{...f,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:a}){const n=m(),u=q(e,n.proxy.$q),i=l(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(u.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>r(e.tag,{class:i.value},c(a.default))}});export{P as Q,q as a,K as b,N as c,F as d,z as e,W as f,T as g,O as h,R as i,f as u};
