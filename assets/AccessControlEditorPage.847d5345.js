import{Q as C}from"./QToolbarTitle.a2769184.js";import{Q as w,a as i,b as I}from"./use-form.529a0437.js";import{Q as $,a as T,b as V}from"./QList.787d9bda.js";import{Q as R}from"./QPage.946ceea8.js";import{k as Q,u as A,o as p,m as f,w as t,n as l,s as m,i as N,a1 as F,p as a,a2 as E,_ as O,t as _,R as h,B as j,a5 as D,Q as H,aQ as q,aR as z,H as J,a0 as M,a8 as B,$ as K}from"./index.bcbedc49.js";import{Q as x}from"./QBadge.e0a15c82.js";import{Q as b}from"./QToggle.28d2c34e.js";import{Q as W}from"./QInput.9a72a7b2.js";import{Q as X}from"./QCardActions.82b5af09.js";import{Q as G}from"./QCheckbox.104a0fca.js";import{Q as Y}from"./QToolbar.39c8e191.js";const Z=Q({__name:"GroupListCard",setup(k){const e=A();return(d,o)=>(p(),f(w,{style:{width:"16rem"}},{default:t(()=>[l(i,null,{default:t(()=>[l(C,null,{default:t(()=>[m("Groups")]),_:1})]),_:1}),l($,null,{default:t(()=>[(p(!0),N(E,null,F(a(e).groups,(s,n)=>{var y;return p(),f(T,{key:n,clickable:"",onClick:S=>a(e).selectGroup(n),class:"bg-grey-2 menu",active:((y=a(e).selectedGroup)==null?void 0:y.id)===n,"active-class":"menu-active"},{default:t(()=>[l(V,null,{default:t(()=>[l(I,{class:"text-h5"},{default:t(()=>[m(_(s.name),1)]),_:2},1024)]),_:2},1024),l(V,{side:""},{default:t(()=>[l(x,{rounded:"",color:"green"},{default:t(()=>[m(_(a(e).groupSummary[n].hasAccessTrue),1)]),_:2},1024),l(x,{rounded:"",color:"red"},{default:t(()=>[m(_(a(e).groupSummary[n].hasAccessFalse),1)]),_:2},1024),l(x,{rounded:"",color:"grey"},{default:t(()=>[m(_(a(e).groupSummary[n].hasAccessNull),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick","active"])}),128))]),_:1})]),_:1}))}});var ee=O(Z,[["__scopeId","data-v-1f3304a3"]]);const le={class:"sticky-top"},ae=Q({__name:"LayoutsListCard",setup(k){const e=A(),d=h(!0),o=h(!0),s=h(!0),n=h(""),y=j(()=>{var c;return Object.entries(((c=e.selectedGroup)==null?void 0:c.layouts)||{}).filter(([r,u])=>{var P;const v=e.layouts&&((P=e.layouts[r])==null?void 0:P.name)||"",L=n.value?v.toLowerCase().includes(n.value.toLowerCase()):!0,U=u.hasAccess===!0&&d.value||u.hasAccess===!1&&o.value||u.hasAccess===null&&s.value;return L&&U}).map(([r,u])=>{var L;const v=e.layouts&&((L=e.layouts[r])==null?void 0:L.name)||"";return{id:r,layout:u,layoutName:v,badgeColor:u.hasAccess===!0?"green":u.hasAccess===!1?"red":"grey"}}).reduce((r,{id:u,layout:v,layoutName:L,badgeColor:U})=>({...r,[u]:{layout:v,layoutName:L,badgeColor:U}}),{})}),S=g=>{z("ADM | Open Layout",{LayoutName:g})};return(g,c)=>(p(),f(w,{class:"card",style:{width:"20rem"}},{default:t(()=>[D("div",le,[l(i,null,{default:t(()=>[l(C,null,{default:t(()=>{var r;return[m("Layouts on "+_((r=a(e).selectedGroup)==null?void 0:r.name),1)]}),_:1})]),_:1}),l(X,null,{default:t(()=>[l(b,{modelValue:d.value,"onUpdate:modelValue":c[0]||(c[0]=r=>d.value=r),label:"Has Access",color:"green"},null,8,["modelValue"]),l(b,{modelValue:o.value,"onUpdate:modelValue":c[1]||(c[1]=r=>o.value=r),label:"No Access",color:"red"},null,8,["modelValue"]),l(b,{modelValue:s.value,"onUpdate:modelValue":c[2]||(c[2]=r=>s.value=r),label:"Undefined",color:"grey"},null,8,["modelValue"]),l(W,{modelValue:n.value,"onUpdate:modelValue":c[3]||(c[3]=r=>n.value=r),label:"Search",outlined:"","clear-icon":"sym_o_close",clearable:"",icon:"sym_o_search",dense:"",type:"search",class:"q-ma-md"},null,8,["modelValue"])]),_:1})]),l($,{class:"scrollable-list"},{default:t(()=>[(p(!0),N(E,null,F(y.value,(r,u)=>(p(),f(T,{key:u,class:"bg-grey-2 menu",clickable:"",onClick:v=>a(e).selectLayout(u,a(e).layouts&&a(e).layouts[u]?a(e).layouts[u].name:""),active:a(e).selectedLayout.id===u,"active-class":"menu-active"},{default:t(()=>[l(V,null,{default:t(()=>[l(I,{class:"text-h5"},{default:t(()=>[m(_(a(e).layouts&&a(e).layouts[u]?a(e).layouts[u].name:""),1)]),_:2},1024)]),_:2},1024),l(V,{side:""},{default:t(()=>[l(x,{rounded:"",color:y.value[u].badgeColor},null,8,["color"]),l(H,{dense:"",icon:"sym_o_open_in_new",onClick:q(v=>S(a(e).layouts&&a(e).layouts[u]?a(e).layouts[u].name:""),["stop"])},null,8,["onClick"])]),_:2},1024)]),_:2},1032,["onClick","active"]))),128))]),_:1})]),_:1}))}});var te=O(ae,[["__scopeId","data-v-499a0ea5"]]);const se=Q({__name:"GroupLayoutOptionsCard",setup(k){const e=A();return J(()=>e.selectedGroupLayout.hasAccess,d=>{d||(e.selectedGroupLayout.showInMenu=!1,e.selectedGroup&&e.selectedGroup.id&&e.selectedLayout&&e.selectedLayout.name&&e.updateGroupMenu(e.selectedGroup.id,e.selectedLayout.id,!1,e.selectedLayout.name))}),(d,o)=>M((p(),f(w,{style:{width:"20rem"}},{default:t(()=>[l(i,null,{default:t(()=>[l(C,null,{default:t(()=>[m("Group Layout Options")]),_:1})]),_:1}),l(i,null,{default:t(()=>[l(b,{modelValue:a(e).selectedGroupLayout.hasAccess,"onUpdate:modelValue":o[0]||(o[0]=s=>a(e).selectedGroupLayout.hasAccess=s),label:"Has Access"},null,8,["modelValue"])]),_:1}),l(i,null,{default:t(()=>[l(b,{modelValue:a(e).selectedGroupLayout.showInMenu,"onUpdate:modelValue":[o[1]||(o[1]=s=>a(e).selectedGroupLayout.showInMenu=s),o[2]||(o[2]=s=>{var n;return a(e).updateGroupMenu((n=a(e).selectedGroup)==null?void 0:n.id,a(e).selectedLayout.id,s,a(e).selectedLayout.name)})],label:"Show in Menu",disable:!a(e).selectedGroupLayout.hasAccess},null,8,["modelValue","disable"])]),_:1}),l(i,null,{default:t(()=>[l(G,{modelValue:a(e).selectedGroupLayout.create,"onUpdate:modelValue":o[3]||(o[3]=s=>a(e).selectedGroupLayout.create=s),label:"Create"},null,8,["modelValue"]),l(G,{modelValue:a(e).selectedGroupLayout.read,"onUpdate:modelValue":o[4]||(o[4]=s=>a(e).selectedGroupLayout.read=s),label:"Read"},null,8,["modelValue"]),l(G,{modelValue:a(e).selectedGroupLayout.update,"onUpdate:modelValue":o[5]||(o[5]=s=>a(e).selectedGroupLayout.update=s),label:"Update"},null,8,["modelValue"]),l(G,{modelValue:a(e).selectedGroupLayout.delete,"onUpdate:modelValue":o[6]||(o[6]=s=>a(e).selectedGroupLayout.delete=s),label:"Delete"},null,8,["modelValue"])]),_:1}),l(i,null,{default:t(()=>[l(G,{modelValue:a(e).selectedGroupLayout.finance,"onUpdate:modelValue":o[7]||(o[7]=s=>a(e).selectedGroupLayout.finance=s),label:"Finance"},null,8,["modelValue"])]),_:1})]),_:1},512)),[[B,a(e).selectedLayout.id!==""]])}}),oe=Q({__name:"AccessControlEditorToolbar",setup(k){const e=A();return(d,o)=>(p(),f(Y,{inset:""},{default:t(()=>[l(C,null,{default:t(()=>{var s;return[m(_((s=a(e).selectedGroup)==null?void 0:s.name)+" \xBB "+_(a(e).selectedLayout.name),1)]}),_:1}),l(H,{dense:"",icon:"sym_o_save",label:"Save",onClick:o[0]||(o[0]=s=>a(e).saveGroup()),align:"right"})]),_:1}))}});const ue={class:"scrollable-card"},re=Q({__name:"AccessControlEditorPage",setup(k){const e=A();return K(()=>{var d;e.toolbar=oe,(d=e.selectedGroup)!=null&&d.id||e.selectGroup(Object.keys(e.groups)[0])}),(d,o)=>(p(),f(R,{class:"flex"},{default:t(()=>{var s,n;return[l(ee),D("div",ue,[M(l(te,null,null,512),[[B,(s=a(e).selectedGroup)==null?void 0:s.name]])]),l(se),M(l(w,null,{default:t(()=>[l(i,null,{default:t(()=>[l(C,null,{default:t(()=>[m("Menu Preview")]),_:1})]),_:1}),l(i,null,{default:t(()=>[l($,null,{default:t(()=>{var y;return[(p(!0),N(E,null,F((y=a(e).selectedGroup)==null?void 0:y.menu,(S,g)=>(p(),f(T,{key:g,clickable:"",class:"bg-grey-2 menu"},{default:t(()=>[l(V,null,{default:t(()=>[l(I,{class:"text-h5"},{default:t(()=>[m(_(S.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]}),_:1})]),_:1})]),_:1},512),[[B,(n=a(e).selectedGroup)==null?void 0:n.name]])]}),_:1}))}});var ge=O(re,[["__scopeId","data-v-0e506bc1"]]);export{ge as default};
