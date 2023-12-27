import{Q as h}from"./QToolbarTitle.c5038441.js";import{Q as w,a as v,b as I}from"./use-form.9d7bef12.js";import{Q as $,a as T,b as G}from"./QList.26d4ea01.js";import{Q as D}from"./QPage.10afa0e7.js";import{k as C,u as A,o as m,m as f,w as t,n as a,s as _,i as N,a1 as U,p as l,a2 as F,_ as E,t as i,R as k,B as j,a5 as P,Q as H,aQ as R,aR as q,H as z,a0 as M,a8 as B,$ as J}from"./index.fb7f185a.js";import{Q as S}from"./QBadge.0214fed9.js";import{Q as b}from"./QToggle.bafc14f5.js";import{Q as K}from"./QInput.f91b8724.js";import{Q as W}from"./QCardActions.fb7af797.js";import{Q as X}from"./QToolbar.1a88aaf8.js";import"./use-checkbox.23dfdacf.js";import"./option-sizes.54472383.js";const Y=C({__name:"GroupListCard",setup(Q){const e=A();return(c,n)=>(m(),f(w,{style:{width:"16rem"}},{default:t(()=>[a(v,null,{default:t(()=>[a(h,null,{default:t(()=>[_("Groups")]),_:1})]),_:1}),a($,null,{default:t(()=>[(m(!0),N(F,null,U(l(e).groups,(o,r)=>{var p;return m(),f(T,{key:r,clickable:"",onClick:V=>l(e).selectGroup(r),class:"bg-grey-2 menu",active:((p=l(e).selectedGroup)==null?void 0:p.id)===r,"active-class":"menu-active"},{default:t(()=>[a(G,null,{default:t(()=>[a(I,{class:"text-h5"},{default:t(()=>[_(i(o.name),1)]),_:2},1024)]),_:2},1024),a(G,{side:""},{default:t(()=>[a(S,{rounded:"",color:"green"},{default:t(()=>[_(i(l(e).groupSummary[r].hasAccessTrue),1)]),_:2},1024),a(S,{rounded:"",color:"red"},{default:t(()=>[_(i(l(e).groupSummary[r].hasAccessFalse),1)]),_:2},1024),a(S,{rounded:"",color:"grey"},{default:t(()=>[_(i(l(e).groupSummary[r].hasAccessNull),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick","active"])}),128))]),_:1})]),_:1}))}});var Z=E(Y,[["__scopeId","data-v-1f3304a3"]]);const ee={class:"sticky-top"},ae=C({__name:"LayoutsListCard",setup(Q){const e=A(),c=k(!0),n=k(!0),o=k(!0),r=k(""),p=j(()=>{var d;return Object.entries(((d=e.selectedGroup)==null?void 0:d.layouts)||{}).filter(([u,s])=>{var O;const y=e.layouts&&((O=e.layouts[u])==null?void 0:O.name)||"",g=r.value?y.toLowerCase().includes(r.value.toLowerCase()):!0,x=s.hasAccess===!0&&c.value||s.hasAccess===!1&&n.value||s.hasAccess===null&&o.value;return g&&x}).map(([u,s])=>{var g;const y=e.layouts&&((g=e.layouts[u])==null?void 0:g.name)||"";return{id:u,layout:s,layoutName:y,badgeColor:s.hasAccess===!0?"green":s.hasAccess===!1?"red":"grey"}}).reduce((u,{id:s,layout:y,layoutName:g,badgeColor:x})=>({...u,[s]:{layout:y,layoutName:g,badgeColor:x}}),{})}),V=L=>{q("ADM | Open Layout",{LayoutName:L})};return(L,d)=>(m(),f(w,{class:"card",style:{width:"20rem"}},{default:t(()=>[P("div",ee,[a(v,null,{default:t(()=>[a(h,null,{default:t(()=>{var u;return[_("Layouts on "+i((u=l(e).selectedGroup)==null?void 0:u.name),1)]}),_:1})]),_:1}),a(W,null,{default:t(()=>[a(b,{modelValue:c.value,"onUpdate:modelValue":d[0]||(d[0]=u=>c.value=u),label:"Has Access",color:"green"},null,8,["modelValue"]),a(b,{modelValue:n.value,"onUpdate:modelValue":d[1]||(d[1]=u=>n.value=u),label:"No Access",color:"red"},null,8,["modelValue"]),a(b,{modelValue:o.value,"onUpdate:modelValue":d[2]||(d[2]=u=>o.value=u),label:"Undefined",color:"grey"},null,8,["modelValue"]),a(K,{modelValue:r.value,"onUpdate:modelValue":d[3]||(d[3]=u=>r.value=u),label:"Search",outlined:"","clear-icon":"sym_o_close",clearable:"",icon:"sym_o_search",dense:"",type:"search",class:"q-ma-md"},null,8,["modelValue"])]),_:1})]),a($,{class:"scrollable-list"},{default:t(()=>[(m(!0),N(F,null,U(p.value,(u,s)=>(m(),f(T,{key:s,class:"bg-grey-2 menu",clickable:"",onClick:y=>l(e).selectLayout(s,l(e).layouts&&l(e).layouts[s]?l(e).layouts[s].name:""),active:l(e).selectedLayout.id===s,"active-class":"menu-active"},{default:t(()=>[a(G,null,{default:t(()=>[a(I,{class:"text-h5"},{default:t(()=>[_(i(l(e).layouts&&l(e).layouts[s]?l(e).layouts[s].name:""),1)]),_:2},1024)]),_:2},1024),a(G,{side:""},{default:t(()=>[a(S,{rounded:"",color:p.value[s].badgeColor},null,8,["color"]),a(H,{dense:"",icon:"sym_o_open_in_new",onClick:R(y=>V(l(e).layouts&&l(e).layouts[s]?l(e).layouts[s].name:""),["stop"])},null,8,["onClick"])]),_:2},1024)]),_:2},1032,["onClick","active"]))),128))]),_:1})]),_:1}))}});var te=E(ae,[["__scopeId","data-v-f4d8676e"]]);const le=C({__name:"GroupLayoutOptionsCard",setup(Q){const e=A();return z(()=>e.selectedGroupLayout.hasAccess,c=>{c||(e.selectedGroupLayout.showInMenu=!1,e.selectedGroup&&e.selectedGroup.id&&e.selectedLayout&&e.selectedLayout.name&&e.updateGroupMenu(e.selectedGroup.id,e.selectedLayout.id,!1,e.selectedLayout.name))}),(c,n)=>M((m(),f(w,{style:{width:"20rem"}},{default:t(()=>[a(v,null,{default:t(()=>[a(h,null,{default:t(()=>[_("Group Layout Options")]),_:1})]),_:1}),a(v,null,{default:t(()=>[a(b,{modelValue:l(e).selectedGroupLayout.hasAccess,"onUpdate:modelValue":n[0]||(n[0]=o=>l(e).selectedGroupLayout.hasAccess=o),label:"Has Access"},null,8,["modelValue"])]),_:1}),a(v,null,{default:t(()=>[a(b,{modelValue:l(e).selectedGroupLayout.showInMenu,"onUpdate:modelValue":[n[1]||(n[1]=o=>l(e).selectedGroupLayout.showInMenu=o),n[2]||(n[2]=o=>{var r;return l(e).updateGroupMenu((r=l(e).selectedGroup)==null?void 0:r.id,l(e).selectedLayout.id,o,l(e).selectedLayout.name)})],label:"Show in Menu",disable:!l(e).selectedGroupLayout.hasAccess},null,8,["modelValue","disable"])]),_:1})]),_:1},512)),[[B,l(e).selectedLayout.id!==""]])}}),se=C({__name:"AccessControlEditorToolbar",setup(Q){const e=A();return(c,n)=>(m(),f(X,{inset:""},{default:t(()=>[a(h,null,{default:t(()=>{var o;return[_(i((o=l(e).selectedGroup)==null?void 0:o.name)+" \xBB "+i(l(e).selectedLayout.name),1)]}),_:1}),a(H,{dense:"",icon:"sym_o_save",label:"Save",onClick:n[0]||(n[0]=o=>l(e).saveGroup()),align:"right"})]),_:1}))}});const oe={class:"scrollable-card"},ue=C({__name:"AccessControlEditorPage",setup(Q){const e=A();return J(()=>{var c;e.toolbar=se,(c=e.selectedGroup)!=null&&c.id||e.selectGroup(Object.keys(e.groups)[0])}),(c,n)=>(m(),f(D,{class:"flex"},{default:t(()=>{var o,r;return[a(Z),P("div",oe,[M(a(te,null,null,512),[[B,(o=l(e).selectedGroup)==null?void 0:o.name]])]),a(le),M(a(w,null,{default:t(()=>[a(v,null,{default:t(()=>[a(h,null,{default:t(()=>[_("Menu Preview")]),_:1})]),_:1}),a(v,null,{default:t(()=>[a($,null,{default:t(()=>{var p;return[(m(!0),N(F,null,U((p=l(e).selectedGroup)==null?void 0:p.menu,(V,L)=>(m(),f(T,{key:L,clickable:"",class:"bg-grey-2 menu"},{default:t(()=>[a(G,null,{default:t(()=>[a(I,{class:"text-h5"},{default:t(()=>[_(i(V.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]}),_:1})]),_:1})]),_:1},512),[[B,(r=l(e).selectedGroup)==null?void 0:r.name]])]}),_:1}))}});var Le=E(ue,[["__scopeId","data-v-0e506bc1"]]);export{Le as default};
