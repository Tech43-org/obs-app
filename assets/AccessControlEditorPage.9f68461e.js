import{a as U,b as I,c as C,Q as S}from"./QList.22f6341c.js";import{Q as w,b as m,c as R,a as j}from"./QCardActions.fd816d3a.js";import{Q as q}from"./QPage.a156f831.js";import{G as A,u as Q,J as p,K as f,L as t,M as l,P as c,T as N,Z as $,N as a,$ as B,_ as T,R as _,y as k,h as J,V as F,Q as P,aM as K,aN as Y,w as Z,Y as E,a2 as D,a5 as z}from"./index.4edde7b0.js";import{Q as M}from"./QToolbarTitle.42ee18bd.js";import{Q as x}from"./QBadge.d5bb22cd.js";import{Q as b,a as V}from"./QCheckbox.796b368c.js";import{Q as W}from"./QToolbar.85a20717.js";const X=A({__name:"GroupListCard",setup(h){const e=Q();return(y,u)=>(p(),f(w,{style:{width:"16rem"}},{default:t(()=>[l(m,null,{default:t(()=>[l(M,null,{default:t(()=>[c("Groups")]),_:1})]),_:1}),l(U,null,{default:t(()=>[(p(!0),N(B,null,$(a(e).groups,(s,n)=>{var i;return p(),f(I,{key:n,clickable:"",onClick:G=>{a(e).selectedGroup={...s,id:n},a(e).selectedLayout={id:"",name:""}},class:"bg-grey-2 menu",active:((i=a(e).selectedGroup)==null?void 0:i.id)===n,"active-class":"menu-active"},{default:t(()=>[l(C,null,{default:t(()=>[l(S,{class:"text-h5"},{default:t(()=>[c(_(s.name),1)]),_:2},1024)]),_:2},1024),l(C,{side:""},{default:t(()=>[l(x,{rounded:"",color:"green"},{default:t(()=>[c(_(a(e).groupSummary[n].hasAccessTrue),1)]),_:2},1024),l(x,{rounded:"",color:"red"},{default:t(()=>[c(_(a(e).groupSummary[n].hasAccessFalse),1)]),_:2},1024),l(x,{rounded:"",color:"grey"},{default:t(()=>[c(_(a(e).groupSummary[n].hasAccessNull),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick","active"])}),128))]),_:1})]),_:1}))}});var ee=T(X,[["__scopeId","data-v-0e888d41"]]);const le={class:"sticky-top"},ae=A({__name:"LayoutsListCard",setup(h){const e=Q(),y=(v,d)=>{var o;e.selectedLayout.id=v,e.selectedLayout.name=d;const r=(o=e.selectedGroup)==null?void 0:o.layouts[v];e.selectedGroupLayout=r!=null?r:{showInMenu:!1,hasAccess:null,create:!1,read:!1,update:!1,delete:!1,finance:!1}},u=k(!0),s=k(!0),n=k(!0),i=k(""),G=J(()=>{var d;return Object.entries(((d=e.selectedGroup)==null?void 0:d.layouts)||{}).filter(([r,o])=>{var L;return!!((e.layouts&&((L=e.layouts[r])==null?void 0:L.name)||"").toLowerCase().includes(i.value.toLowerCase())&&(o.hasAccess===!0&&u.value||o.hasAccess===!1&&s.value||o.hasAccess===null&&n.value))}).map(([r,o])=>{var L;const g=e.layouts&&((L=e.layouts[r])==null?void 0:L.name)||"";return{id:r,layout:o,layoutName:g,badgeColor:o.hasAccess===!0?"green":o.hasAccess===!1?"red":"grey"}}).reduce((r,{id:o,layout:g,layoutName:L,badgeColor:H})=>({...r,[o]:{layout:g,layoutName:L,badgeColor:H}}),{})}),O=v=>{Y("ADM | Open Layout",{LayoutName:v})};return(v,d)=>(p(),f(w,{class:"card",style:{width:"20rem"}},{default:t(()=>[F("div",le,[l(m,null,{default:t(()=>[l(M,null,{default:t(()=>[c("Layouts")]),_:1})]),_:1}),l(j,null,{default:t(()=>[l(b,{modelValue:u.value,"onUpdate:modelValue":d[0]||(d[0]=r=>u.value=r),label:"Has Access",color:"green"},null,8,["modelValue"]),l(b,{modelValue:s.value,"onUpdate:modelValue":d[1]||(d[1]=r=>s.value=r),label:"No Access",color:"red"},null,8,["modelValue"]),l(b,{modelValue:n.value,"onUpdate:modelValue":d[2]||(d[2]=r=>n.value=r),label:"Undefined",color:"grey"},null,8,["modelValue"]),l(R,{modelValue:i.value,"onUpdate:modelValue":d[3]||(d[3]=r=>i.value=r),label:"Search",outlined:"","clear-icon":"close",clearable:"",icon:"search",dense:"",type:"search",class:"q-ma-md"},null,8,["modelValue"])]),_:1})]),l(U,{class:"scrollable-list"},{default:t(()=>[(p(!0),N(B,null,$(G.value,(r,o)=>(p(),f(I,{key:o,class:"bg-grey-2 menu",clickable:"",onClick:g=>y(o,a(e).layouts&&a(e).layouts[o]?a(e).layouts[o].name:""),active:a(e).selectedLayout.id===o,"active-class":"menu-active"},{default:t(()=>[l(C,null,{default:t(()=>[l(S,{class:"text-h5"},{default:t(()=>[c(_(a(e).layouts&&a(e).layouts[o]?a(e).layouts[o].name:""),1)]),_:2},1024)]),_:2},1024),l(C,{side:""},{default:t(()=>[l(x,{rounded:"",color:G.value[o].badgeColor},null,8,["color"]),l(P,{dense:"",icon:"open_in_new",onClick:K(g=>O(a(e).layouts&&a(e).layouts[o]?a(e).layouts[o].name:""),["stop"])},null,8,["onClick"])]),_:2},1024)]),_:2},1032,["onClick","active"]))),128))]),_:1})]),_:1}))}});var te=T(ae,[["__scopeId","data-v-40629d54"]]);const se=A({__name:"GroupLayoutOptionsCard",setup(h){const e=Q();return Z(()=>e.selectedGroupLayout.hasAccess,y=>{y||(e.selectedGroupLayout.showInMenu=!1,e.selectedGroup&&e.selectedGroup.id&&e.selectedLayout&&e.selectedLayout.name&&e.updateGroupMenu(e.selectedGroup.id,e.selectedLayout.id,!1,e.selectedLayout.name))}),(y,u)=>E((p(),f(w,{style:{width:"20rem"}},{default:t(()=>[l(m,null,{default:t(()=>[l(M,null,{default:t(()=>[c("Group Layout Options")]),_:1})]),_:1}),l(m,null,{default:t(()=>[l(b,{modelValue:a(e).selectedGroupLayout.hasAccess,"onUpdate:modelValue":u[0]||(u[0]=s=>a(e).selectedGroupLayout.hasAccess=s),label:"Has Access"},null,8,["modelValue"])]),_:1}),l(m,null,{default:t(()=>[l(b,{modelValue:a(e).selectedGroupLayout.showInMenu,"onUpdate:modelValue":[u[1]||(u[1]=s=>a(e).selectedGroupLayout.showInMenu=s),u[2]||(u[2]=s=>{var n;return a(e).updateGroupMenu((n=a(e).selectedGroup)==null?void 0:n.id,a(e).selectedLayout.id,s,a(e).selectedLayout.name)})],label:"Show in Menu",disable:!a(e).selectedGroupLayout.hasAccess},null,8,["modelValue","disable"])]),_:1}),l(m,null,{default:t(()=>[l(V,{modelValue:a(e).selectedGroupLayout.create,"onUpdate:modelValue":u[3]||(u[3]=s=>a(e).selectedGroupLayout.create=s),label:"Create"},null,8,["modelValue"]),l(V,{modelValue:a(e).selectedGroupLayout.read,"onUpdate:modelValue":u[4]||(u[4]=s=>a(e).selectedGroupLayout.read=s),label:"Read"},null,8,["modelValue"]),l(V,{modelValue:a(e).selectedGroupLayout.update,"onUpdate:modelValue":u[5]||(u[5]=s=>a(e).selectedGroupLayout.update=s),label:"Update"},null,8,["modelValue"]),l(V,{modelValue:a(e).selectedGroupLayout.delete,"onUpdate:modelValue":u[6]||(u[6]=s=>a(e).selectedGroupLayout.delete=s),label:"Delete"},null,8,["modelValue"])]),_:1}),l(m,null,{default:t(()=>[l(V,{modelValue:a(e).selectedGroupLayout.finance,"onUpdate:modelValue":u[7]||(u[7]=s=>a(e).selectedGroupLayout.finance=s),label:"Finance"},null,8,["modelValue"])]),_:1})]),_:1},512)),[[D,a(e).selectedLayout.id!==""]])}}),ue=A({__name:"AccessControlEditorToolbar",setup(h){const e=Q();return(y,u)=>(p(),f(W,{inset:""},{default:t(()=>[l(M,null,{default:t(()=>{var s;return[c(_((s=a(e).selectedGroup)==null?void 0:s.name)+" \xBB "+_(a(e).selectedLayout.name),1)]}),_:1}),l(P,{dense:"",icon:"save",label:"Save",onClick:u[0]||(u[0]=s=>a(e).saveGroup()),align:"right"})]),_:1}))}});const oe={class:"scrollable-card"},re=A({__name:"AccessControlEditorPage",setup(h){const e=Q();return z(()=>{e.readSettings(),e.toolbar=ue}),(y,u)=>(p(),f(q,{class:"flex"},{default:t(()=>{var s;return[l(ee),F("div",oe,[E(l(te,null,null,512),[[D,(s=a(e).selectedGroup)==null?void 0:s.name]])]),l(se),l(w,null,{default:t(()=>[l(m,null,{default:t(()=>[l(S,{class:"text-h6"},{default:t(()=>[c("Menu Preview")]),_:1})]),_:1}),l(m,null,{default:t(()=>[l(U,null,{default:t(()=>{var n;return[(p(!0),N(B,null,$((n=a(e).selectedGroup)==null?void 0:n.menu,(i,G)=>(p(),f(I,{key:G,clickable:"",class:"bg-grey-2 menu"},{default:t(()=>[l(C,null,{default:t(()=>[l(S,{class:"text-h5"},{default:t(()=>[c(_(i.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]}),_:1})]),_:1})]),_:1})]}),_:1}))}});var ye=T(re,[["__scopeId","data-v-af95d248"]]);export{ye as default};
