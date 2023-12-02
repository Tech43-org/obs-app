import{Q as w,a as i,b as x,c as q}from"./QInput.84fa1fd2.js";import{Q as I,a as C}from"./QItem.ce6630f1.js";import{Q as N}from"./QList.06b714be.js";import{Q as z}from"./QPage.33feaf67.js";import{i as A,u as Q,o as m,k as f,w as t,l,p as c,g as $,$ as B,m as a,a0 as T,_ as F,t as _,N as k,z as R,W as O,Q as P,aN as W,aO as Z,F as J,Z as D,a3 as H,a6 as K}from"./index.efca5f7a.js";import{Q as U}from"./QToolbarTitle.fb334878.js";import{Q as S}from"./QBadge.9fab0acb.js";import{Q as b,a as V}from"./QCheckbox.886c3bf1.js";import{Q as X}from"./QCardActions.43375e64.js";import{Q as Y}from"./QToolbar.9438ef17.js";const ee=A({__name:"GroupListCard",setup(h){const e=Q();return(y,o)=>(m(),f(w,{style:{width:"16rem"}},{default:t(()=>[l(i,null,{default:t(()=>[l(U,null,{default:t(()=>[c("Groups")]),_:1})]),_:1}),l(N,null,{default:t(()=>[(m(!0),$(T,null,B(a(e).groups,(s,n)=>{var p;return m(),f(I,{key:n,clickable:"",onClick:G=>{a(e).selectedGroup={...s,id:n},a(e).selectedLayout={id:"",name:""}},class:"bg-grey-2 menu",active:((p=a(e).selectedGroup)==null?void 0:p.id)===n,"active-class":"menu-active"},{default:t(()=>[l(C,null,{default:t(()=>[l(x,{class:"text-h5"},{default:t(()=>[c(_(s.name),1)]),_:2},1024)]),_:2},1024),l(C,{side:""},{default:t(()=>[l(S,{rounded:"",color:"green"},{default:t(()=>[c(_(a(e).groupSummary[n].hasAccessTrue),1)]),_:2},1024),l(S,{rounded:"",color:"red"},{default:t(()=>[c(_(a(e).groupSummary[n].hasAccessFalse),1)]),_:2},1024),l(S,{rounded:"",color:"grey"},{default:t(()=>[c(_(a(e).groupSummary[n].hasAccessNull),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick","active"])}),128))]),_:1})]),_:1}))}});var le=F(ee,[["__scopeId","data-v-0e888d41"]]);const ae={class:"sticky-top"},te=A({__name:"LayoutsListCard",setup(h){const e=Q(),y=(v,d)=>{var u;e.selectedLayout.id=v,e.selectedLayout.name=d;const r=(u=e.selectedGroup)==null?void 0:u.layouts[v];e.selectedGroupLayout=r!=null?r:{showInMenu:!1,hasAccess:null,create:!1,read:!1,update:!1,delete:!1,finance:!1}},o=k(!0),s=k(!0),n=k(!0),p=k(""),G=R(()=>{var d;return Object.entries(((d=e.selectedGroup)==null?void 0:d.layouts)||{}).filter(([r,u])=>{var E;const L=e.layouts&&((E=e.layouts[r])==null?void 0:E.name)||"",g=p.value?L.toLowerCase().includes(p.value.toLowerCase()):!0,M=u.hasAccess===!0&&o.value||u.hasAccess===!1&&s.value||u.hasAccess===null&&n.value;return g&&M}).map(([r,u])=>{var g;const L=e.layouts&&((g=e.layouts[r])==null?void 0:g.name)||"";return{id:r,layout:u,layoutName:L,badgeColor:u.hasAccess===!0?"green":u.hasAccess===!1?"red":"grey"}}).reduce((r,{id:u,layout:L,layoutName:g,badgeColor:M})=>({...r,[u]:{layout:L,layoutName:g,badgeColor:M}}),{})}),j=v=>{Z("ADM | Open Layout",{LayoutName:v})};return(v,d)=>(m(),f(w,{class:"card",style:{width:"20rem"}},{default:t(()=>[O("div",ae,[l(i,null,{default:t(()=>[l(U,null,{default:t(()=>[c("Layouts")]),_:1})]),_:1}),l(X,null,{default:t(()=>[l(b,{modelValue:o.value,"onUpdate:modelValue":d[0]||(d[0]=r=>o.value=r),label:"Has Access",color:"green"},null,8,["modelValue"]),l(b,{modelValue:s.value,"onUpdate:modelValue":d[1]||(d[1]=r=>s.value=r),label:"No Access",color:"red"},null,8,["modelValue"]),l(b,{modelValue:n.value,"onUpdate:modelValue":d[2]||(d[2]=r=>n.value=r),label:"Undefined",color:"grey"},null,8,["modelValue"]),l(q,{modelValue:p.value,"onUpdate:modelValue":d[3]||(d[3]=r=>p.value=r),label:"Search",outlined:"","clear-icon":"close",clearable:"",icon:"search",dense:"",type:"search",class:"q-ma-md"},null,8,["modelValue"])]),_:1})]),l(N,{class:"scrollable-list"},{default:t(()=>[(m(!0),$(T,null,B(G.value,(r,u)=>(m(),f(I,{key:u,class:"bg-grey-2 menu",clickable:"",onClick:L=>y(u,a(e).layouts&&a(e).layouts[u]?a(e).layouts[u].name:""),active:a(e).selectedLayout.id===u,"active-class":"menu-active"},{default:t(()=>[l(C,null,{default:t(()=>[l(x,{class:"text-h5"},{default:t(()=>[c(_(a(e).layouts&&a(e).layouts[u]?a(e).layouts[u].name:""),1)]),_:2},1024)]),_:2},1024),l(C,{side:""},{default:t(()=>[l(S,{rounded:"",color:G.value[u].badgeColor},null,8,["color"]),l(P,{dense:"",icon:"open_in_new",onClick:W(L=>j(a(e).layouts&&a(e).layouts[u]?a(e).layouts[u].name:""),["stop"])},null,8,["onClick"])]),_:2},1024)]),_:2},1032,["onClick","active"]))),128))]),_:1})]),_:1}))}});var se=F(te,[["__scopeId","data-v-2672cf34"]]);const oe=A({__name:"GroupLayoutOptionsCard",setup(h){const e=Q();return J(()=>e.selectedGroupLayout.hasAccess,y=>{y||(e.selectedGroupLayout.showInMenu=!1,e.selectedGroup&&e.selectedGroup.id&&e.selectedLayout&&e.selectedLayout.name&&e.updateGroupMenu(e.selectedGroup.id,e.selectedLayout.id,!1,e.selectedLayout.name))}),(y,o)=>D((m(),f(w,{style:{width:"20rem"}},{default:t(()=>[l(i,null,{default:t(()=>[l(U,null,{default:t(()=>[c("Group Layout Options")]),_:1})]),_:1}),l(i,null,{default:t(()=>[l(b,{modelValue:a(e).selectedGroupLayout.hasAccess,"onUpdate:modelValue":o[0]||(o[0]=s=>a(e).selectedGroupLayout.hasAccess=s),label:"Has Access"},null,8,["modelValue"])]),_:1}),l(i,null,{default:t(()=>[l(b,{modelValue:a(e).selectedGroupLayout.showInMenu,"onUpdate:modelValue":[o[1]||(o[1]=s=>a(e).selectedGroupLayout.showInMenu=s),o[2]||(o[2]=s=>{var n;return a(e).updateGroupMenu((n=a(e).selectedGroup)==null?void 0:n.id,a(e).selectedLayout.id,s,a(e).selectedLayout.name)})],label:"Show in Menu",disable:!a(e).selectedGroupLayout.hasAccess},null,8,["modelValue","disable"])]),_:1}),l(i,null,{default:t(()=>[l(V,{modelValue:a(e).selectedGroupLayout.create,"onUpdate:modelValue":o[3]||(o[3]=s=>a(e).selectedGroupLayout.create=s),label:"Create"},null,8,["modelValue"]),l(V,{modelValue:a(e).selectedGroupLayout.read,"onUpdate:modelValue":o[4]||(o[4]=s=>a(e).selectedGroupLayout.read=s),label:"Read"},null,8,["modelValue"]),l(V,{modelValue:a(e).selectedGroupLayout.update,"onUpdate:modelValue":o[5]||(o[5]=s=>a(e).selectedGroupLayout.update=s),label:"Update"},null,8,["modelValue"]),l(V,{modelValue:a(e).selectedGroupLayout.delete,"onUpdate:modelValue":o[6]||(o[6]=s=>a(e).selectedGroupLayout.delete=s),label:"Delete"},null,8,["modelValue"])]),_:1}),l(i,null,{default:t(()=>[l(V,{modelValue:a(e).selectedGroupLayout.finance,"onUpdate:modelValue":o[7]||(o[7]=s=>a(e).selectedGroupLayout.finance=s),label:"Finance"},null,8,["modelValue"])]),_:1})]),_:1},512)),[[H,a(e).selectedLayout.id!==""]])}}),ue=A({__name:"AccessControlEditorToolbar",setup(h){const e=Q();return(y,o)=>(m(),f(Y,{inset:""},{default:t(()=>[l(U,null,{default:t(()=>{var s;return[c(_((s=a(e).selectedGroup)==null?void 0:s.name)+" \xBB "+_(a(e).selectedLayout.name),1)]}),_:1}),l(P,{dense:"",icon:"save",label:"Save",onClick:o[0]||(o[0]=s=>a(e).saveGroup()),align:"right"})]),_:1}))}});const re={class:"scrollable-card"},ne=A({__name:"AccessControlEditorPage",setup(h){const e=Q();return K(()=>{e.readSettings(),e.toolbar=ue}),(y,o)=>(m(),f(z,{class:"flex"},{default:t(()=>{var s;return[l(le),O("div",re,[D(l(se,null,null,512),[[H,(s=a(e).selectedGroup)==null?void 0:s.name]])]),l(oe),l(w,null,{default:t(()=>[l(i,null,{default:t(()=>[l(x,{class:"text-h6"},{default:t(()=>[c("Menu Preview")]),_:1})]),_:1}),l(i,null,{default:t(()=>[l(N,null,{default:t(()=>{var n;return[(m(!0),$(T,null,B((n=a(e).selectedGroup)==null?void 0:n.menu,(p,G)=>(m(),f(I,{key:G,clickable:"",class:"bg-grey-2 menu"},{default:t(()=>[l(C,null,{default:t(()=>[l(x,{class:"text-h5"},{default:t(()=>[c(_(p.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]}),_:1})]),_:1})]),_:1})]}),_:1}))}});var ge=F(ne,[["__scopeId","data-v-af95d248"]]);export{ge as default};
