import{f as u,h as c,j as o,a4 as s}from"./index.f7f23956.js";import{f as i,g,h as m}from"./QCheckbox.3777a59d.js";var d=u({name:"QToggle",props:{...i,icon:String,iconColor:String},emits:g,setup(e){function a(n,l){const t=c(()=>(n.value===!0?e.checkedIcon:l.value===!0?e.indeterminateIcon:e.uncheckedIcon)||e.icon),r=c(()=>n.value===!0?e.iconColor:null);return()=>[o("div",{class:"q-toggle__track"}),o("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},t.value!==void 0?[o(s,{name:t.value,color:r.value})]:void 0)]}return m("toggle",a)}});export{d as Q};