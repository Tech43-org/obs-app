import{G as c,I as n,J as r,K as _,L as a,_ as v,M as t,Q as i,u as p,H as d,a_ as m,a5 as f}from"./index.4edde7b0.js";import{Q as y}from"./QSpace.281e33fb.js";import{Q as b}from"./QBtnGroup.2dcc4813.js";import{Q as k}from"./QToolbar.85a20717.js";const g=c({__name:"ActivityToolbar",setup(l){return(s,o)=>{const e=n("router-link");return r(),_(k,{inset:""},{default:a(()=>[t(y),t(b,{class:"q-gutter-x-md"},{default:a(()=>[t(e,{to:"/activity/audit","active-class":"active-link"},{default:a(()=>[t(i,{dense:"",label:"Audit",icon:"analytics"})]),_:1}),t(e,{to:"/activity/admin","active-class":"active-link"},{default:a(()=>[t(i,{dense:"",label:"Admin",icon:"admin_panel_settings"})]),_:1}),t(e,{to:"/activity/service-dapi","active-class":"active-link"},{default:a(()=>[t(i,{dense:"",label:"Service DAPI",icon:"api"})]),_:1}),t(e,{to:"/activity/service-script","active-class":"active-link"},{default:a(()=>[t(i,{dense:"",label:"Service Script",icon:"settings"})]),_:1}),t(e,{to:"/activity/fm-users","active-class":"active-link"},{default:a(()=>[t(i,{dense:"",label:"Users",icon:"groups_2"})]),_:1})]),_:1})]),_:1})}}});var Q=v(g,[["__scopeId","data-v-cbd9091c"]]);const w=c({__name:"ActivityPage",setup(l){const s=p(),o=d(),e=m();return f(()=>{s.toolbar=Q,o.path==="/activity"&&e.push("/activity/audit")}),(x,A)=>{const u=n("router-view");return r(),_(u)}}});export{w as default};
