import{h as i,i as d,w as e,Q as _,o as c,j as t,k as o,l as r,t as n,m as u,_ as p,n as y,p as m,q as f,r as B,b as g,s as v}from"./index.b93d94bd.js";const L=i({__name:"BaseLabelDataLeft",props:{label:{type:[String,Number],default:void 0,required:!1},data:{type:[String,Number],default:void 0,required:!1}},setup(a){const l=a;return(s,b)=>(c(),d(_,null,{default:e(()=>[t(u,{class:"label"},{default:e(()=>[t(o,null,{default:e(()=>[r(n(l.label),1)]),_:1})]),_:1}),t(u,{class:"data"},{default:e(()=>[t(o,null,{default:e(()=>[r(n(l.data),1)]),_:1})]),_:1})]),_:1}))}});var x=p(L,[["__scopeId","data-v-3f03f3b3"]]);const S=i({__name:"BasePrimaryButton",props:{label:{type:String,default:""}},setup(a){const l=a;return(s,b)=>(c(),d(_,{dense:""},{default:e(()=>[t(u,null,{default:e(()=>[t(y,m(s.$attrs,{unelevated:"",color:"primary"}),{default:e(()=>[r(n(l.label),1)]),_:1},16)]),_:1})]),_:1}))}});const h={__name:"BaseField",props:{colLabel:{type:String,default:"col-4",required:!1},colValue:{type:String,default:"col-8",required:!1},textLabel:{type:String,default:""},modelValue:{type:[String,Number,Boolean,void 0,null],default:""}},setup(a){return(l,s)=>(c(),d(_,null,{default:e(()=>[t(u,{class:f(["labelClass",a.colLabel])},{default:e(()=>[t(o,null,{default:e(()=>[r(n(a.textLabel),1)]),_:1})]),_:1},8,["class"]),t(u,{class:f(a.colValue)},{default:e(()=>[t(B,m(l.$attrs,{borderless:!0,dense:!0,square:!0,"item-aligned":!0,"hide-bottom-space":""}),{default:e(()=>[r(n(a.modelValue),1)]),_:1},16)]),_:1},8,["class"])]),_:1}))}};var q=p(h,[["__scopeId","data-v-7c33692e"]]);const C={BaseInput:v,BaseField:q,BaseLabelDataLeft:x,BasePrimaryButton:S};var Q=g(async({app:a})=>{Object.entries(C).forEach(([l,s])=>{a.component(l,s)})});export{Q as default};
