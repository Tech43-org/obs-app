import{i as c,r as n,o as r,k as _,w as a,_ as v,l as t,Q as i,u as d,j as p,b4 as m,a6 as f}from"./index.8cd1fc12.js";import{Q as y}from"./QSpace.0f37ca39.js";import{Q as b}from"./QBtnGroup.64a1b5cc.js";import{Q as k}from"./QToolbar.ce4cdfe6.js";const g=c({__name:"ActivityToolbar",setup(l){return(s,o)=>{const e=n("router-link");return r(),_(k,{inset:""},{default:a(()=>[t(y),t(b,{class:"q-gutter-x-md"},{default:a(()=>[t(e,{to:"/activity/audit","active-class":"active-link"},{default:a(()=>[t(i,{dense:"",label:"Audit",icon:"analytics"})]),_:1}),t(e,{to:"/activity/admin","active-class":"active-link"},{default:a(()=>[t(i,{dense:"",label:"Admin",icon:"admin_panel_settings"})]),_:1}),t(e,{to:"/activity/service-dapi","active-class":"active-link"},{default:a(()=>[t(i,{dense:"",label:"Service DAPI",icon:"api"})]),_:1}),t(e,{to:"/activity/service-script","active-class":"active-link"},{default:a(()=>[t(i,{dense:"",label:"Service Script",icon:"settings"})]),_:1}),t(e,{to:"/activity/fm-users","active-class":"active-link"},{default:a(()=>[t(i,{dense:"",label:"Users",icon:"group"})]),_:1})]),_:1})]),_:1})}}});var Q=v(g,[["__scopeId","data-v-d2ed8ea8"]]);const T=c({__name:"ActivityPage",setup(l){const s=d(),o=p(),e=m();return f(()=>{s.readSettings(),s.toolbar=Q,o.path==="/activity"&&e.push("/activity/audit")}),(S,x)=>{const u=n("router-view");return r(),_(u)}}});export{T as default};
