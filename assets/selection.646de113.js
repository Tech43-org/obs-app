import{F as g,aK as A,G as H,C as S,R as y,aL as T}from"./index.eba84135.js";const w={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},x=["beforeShow","show","beforeHide","hide"];function P({showing:o,canShow:s,hideOnRouteChange:n,handleShow:r,handleHide:d,processOnMount:M}){const f=S(),{props:l,emit:t,proxy:c}=f;let u;function R(e){o.value===!0?i(e):m(e)}function m(e){if(l.disable===!0||e!==void 0&&e.qAnchorHandled===!0||s!==void 0&&s(e)!==!0)return;const a=l["onUpdate:modelValue"]!==void 0;a===!0&&(t("update:modelValue",!0),u=e,y(()=>{u===e&&(u=void 0)})),(l.modelValue===null||a===!1)&&p(e)}function p(e){o.value!==!0&&(o.value=!0,t("beforeShow",e),r!==void 0?r(e):t("show",e))}function i(e){if(l.disable===!0)return;const a=l["onUpdate:modelValue"]!==void 0;a===!0&&(t("update:modelValue",!1),u=e,y(()=>{u===e&&(u=void 0)})),(l.modelValue===null||a===!1)&&v(e)}function v(e){o.value!==!1&&(o.value=!1,t("beforeHide",e),d!==void 0?d(e):t("hide",e))}function V(e){l.disable===!0&&e===!0?l["onUpdate:modelValue"]!==void 0&&t("update:modelValue",!1):e===!0!==o.value&&(e===!0?p:v)(u)}g(()=>l.modelValue,V),n!==void 0&&A(f)===!0&&g(()=>c.$route.fullPath,()=>{n.value===!0&&o.value===!0&&i()}),M===!0&&H(()=>{V(l.modelValue)});const b={show:m,hide:i,toggle:R};return Object.assign(c,b),b}function h(){if(window.getSelection!==void 0){const o=window.getSelection();o.empty!==void 0?o.empty():o.removeAllRanges!==void 0&&(o.removeAllRanges(),T.is.mobile!==!0&&o.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}export{x as a,P as b,h as c,w as u};