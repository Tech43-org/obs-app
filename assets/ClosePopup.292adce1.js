import{x,ay as B,R as g,B as s,az as p,H as m,I as P,C as i,a9 as Q,D as H,Q as d,E as I,al as L,af as M,ad as V}from"./index.fb7f185a.js";import{Q as O}from"./QBtnGroup.49f4f836.js";import{d as E,e as R,g as j,f as K}from"./QSelect.4e287e76.js";import{u as z}from"./use-form.9d7bef12.js";const N=Object.keys(B),T=e=>N.reduce((o,t)=>{const a=e[t];return a!==void 0&&(o[t]=a),o},{});var F=x({name:"QBtnDropdown",props:{...B,...E,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","beforeShow","show","beforeHide","hide"],setup(e,{slots:o,emit:t}){const{proxy:a}=I(),r=g(e.modelValue),l=g(null),c=z(),f=s(()=>{const n={"aria-expanded":r.value===!0?"true":"false","aria-haspopup":"true","aria-controls":c,"aria-label":e.toggleAriaLabel||a.$q.lang.label[r.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(n["aria-disabled"]="true"),n}),y=s(()=>"q-btn-dropdown__arrow"+(r.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),b=s(()=>p(e)),h=s(()=>T(e));m(()=>e.modelValue,n=>{l.value!==null&&l.value[n?"show":"hide"]()}),m(()=>e.split,u);function q(n){r.value=!0,t("beforeShow",n)}function C(n){t("show",n),t("update:modelValue",!0)}function S(n){r.value=!1,t("beforeHide",n)}function D(n){t("hide",n),t("update:modelValue",!1)}function _(n){t("click",n)}function A(n){L(n),u(),t("click",n)}function k(n){l.value!==null&&l.value.toggle(n)}function w(n){l.value!==null&&l.value.show(n)}function u(n){l.value!==null&&l.value.hide(n)}return Object.assign(a,{show:w,hide:u,toggle:k}),P(()=>{e.modelValue===!0&&w()}),()=>{const n=[i(Q,{class:y.value,name:e.dropdownIcon||a.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&n.push(i(R,{ref:l,id:c,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:q,onShow:C,onBeforeHide:S,onHide:D},o.default)),e.split===!1?i(d,{class:"q-btn-dropdown q-btn-dropdown--simple",...h.value,...f.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:_},{default:()=>H(o.label,[]).concat(n),loading:o.loading}):i(O,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square,...b.value,glossy:e.glossy,stretch:e.stretch},()=>[i(d,{class:"q-btn-dropdown--current",...h.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:A},{default:o.label,loading:o.loading}),i(d,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...f.value,...b.value,disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple},()=>n)])}}});function v(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const o=parseInt(e,10);return isNaN(o)?0:o}var J=M({name:"close-popup",beforeMount(e,{value:o}){const t={depth:v(o),handler(a){t.depth!==0&&setTimeout(()=>{const r=j(e);r!==void 0&&K(r,a,t.depth)})},handlerKey(a){V(a,13)===!0&&t.handler(a)}};e.__qclosepopup=t,e.addEventListener("click",t.handler),e.addEventListener("keyup",t.handlerKey)},updated(e,{value:o,oldValue:t}){o!==t&&(e.__qclosepopup.depth=v(o))},beforeUnmount(e){const o=e.__qclosepopup;e.removeEventListener("click",o.handler),e.removeEventListener("keyup",o.handlerKey),delete e.__qclosepopup}});export{J as C,F as Q};
