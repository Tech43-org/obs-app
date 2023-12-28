import{H as V,aK as B,I as R,E as _,T as C,aL as p,x as M,aM as w,aN as A,B as f,ao as P,C as m,a9 as x,aO as I,aP as H,ae as T}from"./index.f190ceab.js";import{u as z,c as D}from"./QList.a3910935.js";const $={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},j=["beforeShow","show","beforeHide","hide"];function K({showing:e,canShow:b,hideOnRouteChange:n,handleShow:u,handleHide:h,processOnMount:k}){const g=_(),{props:a,emit:o,proxy:c}=g;let i;function q(t){e.value===!0?s(t):S(t)}function S(t){if(a.disable===!0||t!==void 0&&t.qAnchorHandled===!0||b!==void 0&&b(t)!==!0)return;const d=a["onUpdate:modelValue"]!==void 0;d===!0&&(o("update:modelValue",!0),i=t,C(()=>{i===t&&(i=void 0)})),(a.modelValue===null||d===!1)&&v(t)}function v(t){e.value!==!0&&(e.value=!0,o("beforeShow",t),u!==void 0?u(t):o("show",t))}function s(t){if(a.disable===!0)return;const d=a["onUpdate:modelValue"]!==void 0;d===!0&&(o("update:modelValue",!1),i=t,C(()=>{i===t&&(i=void 0)})),(a.modelValue===null||d===!1)&&y(t)}function y(t){e.value!==!1&&(e.value=!1,o("beforeHide",t),h!==void 0?h(t):o("hide",t))}function l(t){a.disable===!0&&t===!0?a["onUpdate:modelValue"]!==void 0&&o("update:modelValue",!1):t===!0!==e.value&&(t===!0?v:y)(i)}V(()=>a.modelValue,l),n!==void 0&&B(g)===!0&&V(()=>c.$route.fullPath,()=>{n.value===!0&&e.value===!0&&s()}),k===!0&&R(()=>{l(a.modelValue)});const r={show:S,hide:s,toggle:q};return Object.assign(c,r),r}function N(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),p.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const L={xs:8,sm:10,md:14,lg:20,xl:24};var O=M({name:"QChip",props:{...z,...w,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:b,emit:n}){const{proxy:{$q:u}}=_(),h=D(e,u),k=A(e,L),g=f(()=>e.selected===!0||e.icon!==void 0),a=f(()=>e.selected===!0?e.iconSelected||u.iconSet.chip.selected:e.icon),o=f(()=>e.iconRemove||u.iconSet.chip.remove),c=f(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),i=f(()=>{const l=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(l?` text-${l} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(c.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(h.value===!0?" q-chip--dark q-dark":"")}),q=f(()=>{const l=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},r={...l,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||u.lang.label.remove};return{chip:l,remove:r}});function S(l){l.keyCode===13&&v(l)}function v(l){e.disable||(n("update:selected",!e.selected),n("click",l))}function s(l){(l.keyCode===void 0||l.keyCode===13)&&(T(l),e.disable===!1&&(n("update:modelValue",!1),n("remove")))}function y(){const l=[];c.value===!0&&l.push(m("div",{class:"q-focus-helper"})),g.value===!0&&l.push(m(x,{class:"q-chip__icon q-chip__icon--left",name:a.value}));const r=e.label!==void 0?[m("div",{class:"ellipsis"},[e.label])]:void 0;return l.push(m("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},I(b.default,r))),e.iconRight&&l.push(m(x,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&l.push(m(x,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:o.value,...q.value.remove,onClick:s,onKeyup:s})),l}return()=>{if(e.modelValue===!1)return;const l={class:i.value,style:k.value};return c.value===!0&&Object.assign(l,q.value.chip,{onClick:v,onKeyup:S}),P("div",l,y(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[H,e.ripple]])}}});export{O as Q,j as a,K as b,N as c,$ as u};
