import{Q as y,a as M}from"./QToolbar.a134ff33.js";import{N as L,u as G,F as c,G as f,H as a,I as l,Y as d,L as C,X as S,P as t,W as Q,_ as B,Z as n,w as U,a0 as k,a3 as w,O as $,Q as T,K as N}from"./index.98bb2068.js";import{Q as v,a as E}from"./QBadge.2c7b1294.js";import{Q as F}from"./QPage.548f4734.js";import{Q as b,a as p,f as x,e as _}from"./QToggle.db13b9dd.js";import{b as A,a as h,Q as V,c as I}from"./QList.b5d1b5a3.js";import{_ as D}from"./MainMenuList.0c0adcc7.js";import"./QResizeObserver.b1b7d677.js";const H=L({__name:"GroupListCard",setup(g){const e=G();return(m,o)=>(c(),f(b,{style:{width:"16rem"}},{default:a(()=>[l(p,null,{default:a(()=>[l(y,null,{default:a(()=>[d("Groups")]),_:1})]),_:1}),l(A,null,{default:a(()=>[(c(!0),C(Q,null,S(t(e).groups,(u,s)=>{var i;return c(),f(h,{key:s,clickable:"",onClick:r=>{t(e).selectedGroup={...u,id:s},t(e).selectedLayout={id:"",name:""}},class:"bg-grey-2 menu",active:((i=t(e).selectedGroup)==null?void 0:i.id)===s,"active-class":"menu-active"},{default:a(()=>[l(V,null,{default:a(()=>[l(I,{class:"text-h5"},{default:a(()=>[d(n(u.name),1)]),_:2},1024)]),_:2},1024),l(V,{side:""},{default:a(()=>[l(v,{rounded:"",color:"green"},{default:a(()=>[d(n(t(e).groupSummary[s].hasAccessTrue),1)]),_:2},1024),l(v,{rounded:"",color:"red"},{default:a(()=>[d(n(t(e).groupSummary[s].hasAccessFalse),1)]),_:2},1024),l(v,{rounded:"",color:"grey"},{default:a(()=>[d(n(t(e).groupSummary[s].hasAccessNull),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick","active"])}),128))]),_:1})]),_:1}))}});var O=B(H,[["__scopeId","data-v-0e888d41"]]);const P=L({__name:"LayoutsListCard",setup(g){const e=G(),m=(o,u)=>{var i;e.selectedLayout.id=o,e.selectedLayout.name=u;const s=(i=e.selectedGroup)==null?void 0:i.layouts[o];e.selectedGroupLayout=s!=null?s:{showInMenu:!1,hasAccess:null,create:!1,read:!1,update:!1,delete:!1,finance:!1}};return(o,u)=>(c(),f(b,{style:{width:"20rem"}},{default:a(()=>[l(p,null,{default:a(()=>[l(y,null,{default:a(()=>[d("Layouts")]),_:1})]),_:1}),l(A,null,{default:a(()=>{var s;return[(c(!0),C(Q,null,S((s=t(e).selectedGroup)==null?void 0:s.layouts,(i,r)=>(c(),f(h,{key:r,class:"bg-grey-2 menu",clickable:"",onClick:W=>m(r,t(e).layouts&&t(e).layouts[r]?t(e).layouts[r].name:""),active:t(e).selectedLayout.id===r,"active-class":"menu-active"},{default:a(()=>[l(V,null,{default:a(()=>[l(I,{class:"text-h5"},{default:a(()=>[d(n(t(e).layouts&&t(e).layouts[r]?t(e).layouts[r].name:""),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick","active"]))),128))]}),_:1})]),_:1}))}});var K=B(P,[["__scopeId","data-v-305cd50f"]]);const R=L({__name:"GroupLayoutOptionsCard",setup(g){const e=G();return U(()=>e.selectedGroupLayout.hasAccess,m=>{m||(e.selectedGroupLayout.showInMenu=!1,e.selectedGroup&&e.selectedGroup.id&&e.selectedLayout&&e.selectedLayout.name&&e.updateGroupMenu(e.selectedGroup.id,e.selectedLayout.id,!1,e.selectedLayout.name))}),(m,o)=>k((c(),f(b,{style:{width:"20rem"}},{default:a(()=>[l(p,null,{default:a(()=>[l(y,null,{default:a(()=>[d("Group Layout Options")]),_:1})]),_:1}),l(p,null,{default:a(()=>[l(x,{modelValue:t(e).selectedGroupLayout.hasAccess,"onUpdate:modelValue":o[0]||(o[0]=u=>t(e).selectedGroupLayout.hasAccess=u),label:"Has Access"},null,8,["modelValue"])]),_:1}),l(p,null,{default:a(()=>[l(x,{modelValue:t(e).selectedGroupLayout.showInMenu,"onUpdate:modelValue":[o[1]||(o[1]=u=>t(e).selectedGroupLayout.showInMenu=u),o[2]||(o[2]=u=>{var s;return t(e).updateGroupMenu((s=t(e).selectedGroup)==null?void 0:s.id,t(e).selectedLayout.id,u,t(e).selectedLayout.name)})],label:"Show in Menu",disable:!t(e).selectedGroupLayout.hasAccess},null,8,["modelValue","disable"])]),_:1}),l(p,null,{default:a(()=>[l(_,{modelValue:t(e).selectedGroupLayout.create,"onUpdate:modelValue":o[3]||(o[3]=u=>t(e).selectedGroupLayout.create=u),label:"Create"},null,8,["modelValue"]),l(_,{modelValue:t(e).selectedGroupLayout.read,"onUpdate:modelValue":o[4]||(o[4]=u=>t(e).selectedGroupLayout.read=u),label:"Read"},null,8,["modelValue"]),l(_,{modelValue:t(e).selectedGroupLayout.update,"onUpdate:modelValue":o[5]||(o[5]=u=>t(e).selectedGroupLayout.update=u),label:"Update"},null,8,["modelValue"]),l(_,{modelValue:t(e).selectedGroupLayout.delete,"onUpdate:modelValue":o[6]||(o[6]=u=>t(e).selectedGroupLayout.delete=u),label:"Delete"},null,8,["modelValue"])]),_:1}),l(p,null,{default:a(()=>[l(_,{modelValue:t(e).selectedGroupLayout.finance,"onUpdate:modelValue":o[7]||(o[7]=u=>t(e).selectedGroupLayout.finance=u),label:"Finance"},null,8,["modelValue"])]),_:1})]),_:1},512)),[[w,t(e).selectedLayout.id!==""]])}}),te=L({__name:"AccessControlEditorPage",setup(g){const e=G();return $(()=>{console.log("Access Control Editor \xBB onBeforeMount"),e.readSettings()}),(m,o)=>(c(),C(Q,null,[l(E,null,{default:a(()=>[l(M,null,{default:a(()=>[l(y,null,{default:a(()=>{var u;return[d("Access Control Editor \xBB "+n((u=t(e).selectedGroup)==null?void 0:u.name)+" \xBB "+n(t(e).selectedLayout.name),1)]}),_:1}),l(T,{dense:"",icon:"save",label:"Save",onClick:o[0]||(o[0]=u=>t(e).saveGroup()),align:"right"})]),_:1})]),_:1}),l(F,{class:"flex"},{default:a(()=>{var u,s;return[l(O),k(l(K,null,null,512),[[w,((u=t(e).selectedGroup)==null?void 0:u.id)!==""]]),l(R),l(D),N("pre",null,"groupMenu: "+n((s=t(e).selectedGroup)==null?void 0:s.menu),1)]}),_:1})],64))}});export{te as default};
