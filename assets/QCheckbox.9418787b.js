import{D as I,k as n,l as a,aG as N,aN as v,I as R,m as M,aF as H,n as K,Y as _,h as V,a4 as q}from"./index.c0f6129f.js";import{d as L,u as G}from"./QList.291bd828.js";import{j as Y,n as J}from"./QCardActions.e06cbccf.js";function U(l,i){const e=I(null),s=n(()=>l.disable===!0?null:a("span",{ref:e,class:"no-outline",tabindex:-1}));function o(u){const c=i.value;u!==void 0&&u.type.indexOf("key")===0?c!==null&&document.activeElement!==c&&c.contains(document.activeElement)===!0&&c.focus():e.value!==null&&(u===void 0||c!==null&&c.contains(u.target)===!0)&&e.value.focus()}return{refocusTargetEl:s,refocusTarget:o}}var W={xs:30,sm:35,md:40,lg:50,xl:60};const C={...G,...H,...Y,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:l=>l==="tf"||l==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},S=["update:modelValue"];function y(l,i){const{props:e,slots:s,emit:o,proxy:u}=K(),{$q:c}=u,$=L(e,c),k=I(null),{refocusTargetEl:h,refocusTarget:w}=U(e,k),O=N(e,W),f=n(()=>e.val!==void 0&&Array.isArray(e.modelValue)),m=n(()=>{const t=v(e.val);return f.value===!0?e.modelValue.findIndex(d=>v(d)===t):-1}),r=n(()=>f.value===!0?m.value>-1:v(e.modelValue)===v(e.trueValue)),g=n(()=>f.value===!0?m.value===-1:v(e.modelValue)===v(e.falseValue)),x=n(()=>r.value===!1&&g.value===!1),T=n(()=>e.disable===!0?-1:e.tabindex||0),B=n(()=>`q-${l} cursor-pointer no-outline row inline no-wrap items-center`+(e.disable===!0?" disabled":"")+($.value===!0?` q-${l}--dark`:"")+(e.dense===!0?` q-${l}--dense`:"")+(e.leftLabel===!0?" reverse":"")),Q=n(()=>{const t=r.value===!0?"truthy":g.value===!0?"falsy":"indet",d=e.color!==void 0&&(e.keepColor===!0||(l==="toggle"?r.value===!0:g.value!==!0))?` text-${e.color}`:"";return`q-${l}__inner relative-position non-selectable q-${l}__inner--${t}${d}`}),j=n(()=>{const t={type:"checkbox"};return e.name!==void 0&&Object.assign(t,{".checked":r.value,"^checked":r.value===!0?"checked":void 0,name:e.name,value:f.value===!0?e.val:e.trueValue}),t}),A=J(j),E=n(()=>{const t={tabindex:T.value,role:l==="toggle"?"switch":"checkbox","aria-label":e.label,"aria-checked":x.value===!0?"mixed":r.value===!0?"true":"false"};return e.disable===!0&&(t["aria-disabled"]="true"),t});function b(t){t!==void 0&&(_(t),w(t)),e.disable!==!0&&o("update:modelValue",F(),t)}function F(){if(f.value===!0){if(r.value===!0){const t=e.modelValue.slice();return t.splice(m.value,1),t}return e.modelValue.concat([e.val])}if(r.value===!0){if(e.toggleOrder!=="ft"||e.toggleIndeterminate===!1)return e.falseValue}else if(g.value===!0){if(e.toggleOrder==="ft"||e.toggleIndeterminate===!1)return e.trueValue}else return e.toggleOrder!=="ft"?e.trueValue:e.falseValue;return e.indeterminateValue}function P(t){(t.keyCode===13||t.keyCode===32)&&_(t)}function z(t){(t.keyCode===13||t.keyCode===32)&&b(t)}const D=i(r,x);return Object.assign(u,{toggle:b}),()=>{const t=D();e.disable!==!0&&A(t,"unshift",` q-${l}__native absolute q-ma-none q-pa-none`);const d=[a("div",{class:Q.value,style:O.value,"aria-hidden":"true"},t)];h.value!==null&&d.push(h.value);const p=e.label!==void 0?R(s.default,[e.label]):M(s.default);return p!==void 0&&d.push(a("div",{class:`q-${l}__label q-anchor--skip`},p)),a("div",{ref:k,class:B.value,...E.value,onClick:b,onKeydown:P,onKeyup:z},d)}}var le=V({name:"QToggle",props:{...C,icon:String,iconColor:String},emits:S,setup(l){function i(e,s){const o=n(()=>(e.value===!0?l.checkedIcon:s.value===!0?l.indeterminateIcon:l.uncheckedIcon)||l.icon),u=n(()=>e.value===!0?l.iconColor:null);return()=>[a("div",{class:"q-toggle__track"}),a("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},o.value!==void 0?[a(q,{name:o.value,color:u.value})]:void 0)]}return y("toggle",i)}});const X=a("div",{key:"svg",class:"q-checkbox__bg absolute"},[a("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[a("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),a("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var ne=V({name:"QCheckbox",props:C,emits:S,setup(l){function i(e,s){const o=n(()=>(e.value===!0?l.checkedIcon:s.value===!0?l.indeterminateIcon:l.uncheckedIcon)||null);return()=>o.value!==null?[a("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[a(q,{class:"q-checkbox__icon",name:o.value})])]:[X]}return y("checkbox",i)}});export{le as Q,ne as a,W as o,U as u};
