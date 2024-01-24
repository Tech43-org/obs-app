import{z as a,s as f,A as o,B as E,ab as L,ac as S,O as m,C as A,ad as I,ae as K,W as Q}from"./index.47b229d6.js";const R={dark:{type:Boolean,default:null}};function w(e,n){return a(()=>e.dark===null?n.dark.isActive:e.dark)}var j=f({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:n}){const s=a(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>o("div",{class:s.value},E(n.default))}}),D=f({name:"QItem",props:{...R,...L,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:n,emit:s}){const{proxy:{$q:c}}=A(),b=w(e,c),{hasLink:r,linkAttrs:k,linkClass:q,linkTag:y,navigateOnClick:h}=S(),l=m(null),i=m(null),v=a(()=>e.clickable===!0||r.value===!0||e.tag==="label"),u=a(()=>e.disable!==!0&&v.value===!0),g=a(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(b.value===!0?" q-item--dark":"")+(r.value===!0&&e.active===null?q.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(u.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),B=a(()=>{if(e.insetLevel===void 0)return null;const t=c.lang.rtl===!0?"Right":"Left";return{["padding"+t]:16+e.insetLevel*56+"px"}});function _(t){u.value===!0&&(i.value!==null&&(t.qKeyEvent!==!0&&document.activeElement===l.value?i.value.focus():document.activeElement===i.value&&l.value.focus()),h(t))}function C(t){if(u.value===!0&&I(t,[13,32])===!0){K(t),t.qKeyEvent=!0;const d=new MouseEvent("click",t);d.qKeyEvent=!0,l.value.dispatchEvent(d)}s("keyup",t)}function x(){const t=Q(n.default,[]);return u.value===!0&&t.unshift(o("div",{class:"q-focus-helper",tabindex:-1,ref:i})),t}return()=>{const t={ref:l,class:g.value,style:B.value,role:"listitem",onClick:_,onKeyup:C};return u.value===!0?(t.tabindex=e.tabindex||"0",Object.assign(t,k.value)):v.value===!0&&(t["aria-disabled"]="true"),o(y.value,t,x())}}});export{D as Q,j as a,w as b,R as u};
