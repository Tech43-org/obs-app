import{c as z,u as D}from"./QList.a91a229a.js";import{R as F,aN as R,B as l,aS as u,C as d,X as T,D as E,aM as N,E as K,ae as k}from"./index.5b426327.js";import{u as L,o as M}from"./option-sizes.a3e65d15.js";import{c as X,e as G}from"./use-form.9499128c.js";const W={...D,...N,...X,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:a=>a==="tf"||a==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},Y=["update:modelValue"];function Z(a,h){const{props:e,slots:f,emit:V,proxy:v}=K(),{$q:x}=v,C=z(e,x),m=F(null),{refocusTargetEl:g,refocusTarget:S}=L(e,m),I=R(e,M),n=l(()=>e.val!==void 0&&Array.isArray(e.modelValue)),i=l(()=>{const t=u(e.val);return n.value===!0?e.modelValue.findIndex(o=>u(o)===t):-1}),r=l(()=>n.value===!0?i.value>-1:u(e.modelValue)===u(e.trueValue)),s=l(()=>n.value===!0?i.value===-1:u(e.modelValue)===u(e.falseValue)),b=l(()=>r.value===!1&&s.value===!1),q=l(()=>e.disable===!0?-1:e.tabindex||0),$=l(()=>`q-${a} cursor-pointer no-outline row inline no-wrap items-center`+(e.disable===!0?" disabled":"")+(C.value===!0?` q-${a}--dark`:"")+(e.dense===!0?` q-${a}--dense`:"")+(e.leftLabel===!0?" reverse":"")),y=l(()=>{const t=r.value===!0?"truthy":s.value===!0?"falsy":"indet",o=e.color!==void 0&&(e.keepColor===!0||(a==="toggle"?r.value===!0:s.value!==!0))?` text-${e.color}`:"";return`q-${a}__inner relative-position non-selectable q-${a}__inner--${t}${o}`}),_=l(()=>{const t={type:"checkbox"};return e.name!==void 0&&Object.assign(t,{".checked":r.value,"^checked":r.value===!0?"checked":void 0,name:e.name,value:n.value===!0?e.val:e.trueValue}),t}),B=G(_),O=l(()=>{const t={tabindex:q.value,role:a==="toggle"?"switch":"checkbox","aria-label":e.label,"aria-checked":b.value===!0?"mixed":r.value===!0?"true":"false"};return e.disable===!0&&(t["aria-disabled"]="true"),t});function c(t){t!==void 0&&(k(t),S(t)),e.disable!==!0&&V("update:modelValue",w(),t)}function w(){if(n.value===!0){if(r.value===!0){const t=e.modelValue.slice();return t.splice(i.value,1),t}return e.modelValue.concat([e.val])}if(r.value===!0){if(e.toggleOrder!=="ft"||e.toggleIndeterminate===!1)return e.falseValue}else if(s.value===!0){if(e.toggleOrder==="ft"||e.toggleIndeterminate===!1)return e.trueValue}else return e.toggleOrder!=="ft"?e.trueValue:e.falseValue;return e.indeterminateValue}function A(t){(t.keyCode===13||t.keyCode===32)&&k(t)}function P(t){(t.keyCode===13||t.keyCode===32)&&c(t)}const j=h(r,b);return Object.assign(v,{toggle:c}),()=>{const t=j();e.disable!==!0&&B(t,"unshift",` q-${a}__native absolute q-ma-none q-pa-none`);const o=[d("div",{class:y.value,style:I.value,"aria-hidden":"true"},t)];g.value!==null&&o.push(g.value);const p=e.label!==void 0?T(f.default,[e.label]):E(f.default);return p!==void 0&&o.push(d("div",{class:`q-${a}__label q-anchor--skip`},p)),d("div",{ref:m,class:$.value,...O.value,onClick:c,onKeydown:A,onKeyup:P},o)}}export{Y as a,Z as b,W as u};
