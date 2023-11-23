import{Q as w,a as D}from"./QToolbar.be4cd49a.js";import{L as S,u as h,F as p,G as v,H as t,I as l,Q as c,M as Q,O as B,P as a,N as x,_ as I,R as _,y as C,h as H,U as T,aL as j,aM as q,w as R,a0 as $,a3 as E,T as z}from"./index.9129b366.js";import{Q as A,a as J}from"./QBadge.5603394d.js";import{Q as N,a as F,b,c as k}from"./QList.72c9e931.js";import{Q as M,b as i,s as V,c as K,a as W,q as G}from"./QToggle.e0a28452.js";import{Q as X}from"./QPage.aaa69243.js";import"./QResizeObserver.7a97c980.js";const Y=S({__name:"GroupListCard",setup(U){const e=h();return(y,s)=>(p(),v(M,{style:{width:"16rem"}},{default:t(()=>[l(i,null,{default:t(()=>[l(w,null,{default:t(()=>[c("Groups")]),_:1})]),_:1}),l(N,null,{default:t(()=>[(p(!0),Q(x,null,B(a(e).groups,(u,d)=>{var f;return p(),v(F,{key:d,clickable:"",onClick:g=>{a(e).selectedGroup={...u,id:d},a(e).selectedLayout={id:"",name:""}},class:"bg-grey-2 menu",active:((f=a(e).selectedGroup)==null?void 0:f.id)===d,"active-class":"menu-active"},{default:t(()=>[l(b,null,{default:t(()=>[l(k,{class:"text-h5"},{default:t(()=>[c(_(u.name),1)]),_:2},1024)]),_:2},1024),l(b,{side:""},{default:t(()=>[l(A,{rounded:"",color:"green"},{default:t(()=>[c(_(a(e).groupSummary[d].hasAccessTrue),1)]),_:2},1024),l(A,{rounded:"",color:"red"},{default:t(()=>[c(_(a(e).groupSummary[d].hasAccessFalse),1)]),_:2},1024),l(A,{rounded:"",color:"grey"},{default:t(()=>[c(_(a(e).groupSummary[d].hasAccessNull),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick","active"])}),128))]),_:1})]),_:1}))}});var Z=I(Y,[["__scopeId","data-v-0e888d41"]]);const ee=S({__name:"LayoutsListCard",setup(U){const e=h(),y=(L,r)=>{var n;e.selectedLayout.id=L,e.selectedLayout.name=r;const o=(n=e.selectedGroup)==null?void 0:n.layouts[L];e.selectedGroupLayout=o!=null?o:{showInMenu:!1,hasAccess:null,create:!1,read:!1,update:!1,delete:!1,finance:!1}},s=C(!0),u=C(!0),d=C(!0),f=C(""),g=H(()=>Object.values(e.groups).flatMap(r=>Object.entries(r.layouts||{})).filter(([r,o])=>{var m;return!!((e.layouts&&((m=e.layouts[r])==null?void 0:m.name)||"").toLowerCase().includes(f.value.toLowerCase())&&(o.hasAccess===!0&&s.value||o.hasAccess===!1&&u.value||(o.hasAccess===void 0||o.hasAccess===null)&&d.value))}).map(([r,o])=>{var m;const n=e.layouts&&((m=e.layouts[r])==null?void 0:m.name)||"";return{id:r,layout:o,layoutName:n,badgeColor:o.hasAccess===!0?"green":o.hasAccess===!1?"red":"grey"}}).reduce((r,{id:o,layout:n,layoutName:m,badgeColor:P})=>({...r,[o]:{layout:n,layoutName:m,badgeColor:P}}),{})),O=L=>{q("ADM | Open Layout",{LayoutName:L})};return(L,r)=>(p(),v(M,{style:{width:"20rem"}},{default:t(()=>[l(i,null,{default:t(()=>[l(w,null,{default:t(()=>[c("Layouts")]),_:1})]),_:1}),l(W,null,{default:t(()=>[l(V,{modelValue:s.value,"onUpdate:modelValue":r[0]||(r[0]=o=>s.value=o),label:"Has Access",color:"green"},null,8,["modelValue"]),l(V,{modelValue:u.value,"onUpdate:modelValue":r[1]||(r[1]=o=>u.value=o),label:"No Access",color:"red"},null,8,["modelValue"]),l(V,{modelValue:d.value,"onUpdate:modelValue":r[2]||(r[2]=o=>d.value=o),label:"Undefined",color:"grey"},null,8,["modelValue"]),l(K,{modelValue:f.value,"onUpdate:modelValue":r[3]||(r[3]=o=>f.value=o),label:"Search",outlined:"","clear-icon":"close",clearable:"",icon:"search",dense:"",type:"search",class:"q-ma-md"},null,8,["modelValue"])]),_:1}),l(N,null,{default:t(()=>[(p(!0),Q(x,null,B(g.value,(o,n)=>(p(),v(F,{key:n,class:"bg-grey-2 menu",clickable:"",onClick:m=>y(n,a(e).layouts&&a(e).layouts[n]?a(e).layouts[n].name:""),active:a(e).selectedLayout.id===n,"active-class":"menu-active"},{default:t(()=>[l(b,null,{default:t(()=>[l(k,{class:"text-h5"},{default:t(()=>[c(_(a(e).layouts&&a(e).layouts[n]?a(e).layouts[n].name:""),1)]),_:2},1024)]),_:2},1024),l(b,{side:""},{default:t(()=>[l(A,{rounded:"",color:g.value[n].badgeColor},null,8,["color"]),l(T,{dense:"",icon:"open_in_new",onClick:j(m=>O(a(e).layouts&&a(e).layouts[n]?a(e).layouts[n].name:""),["stop"])},null,8,["onClick"])]),_:2},1024)]),_:2},1032,["onClick","active"]))),128))]),_:1})]),_:1}))}});var le=I(ee,[["__scopeId","data-v-959ae4f6"]]);const ae=S({__name:"GroupLayoutOptionsCard",setup(U){const e=h();return R(()=>e.selectedGroupLayout.hasAccess,y=>{y||(e.selectedGroupLayout.showInMenu=!1,e.selectedGroup&&e.selectedGroup.id&&e.selectedLayout&&e.selectedLayout.name&&e.updateGroupMenu(e.selectedGroup.id,e.selectedLayout.id,!1,e.selectedLayout.name))}),(y,s)=>$((p(),v(M,{style:{width:"20rem"}},{default:t(()=>[l(i,null,{default:t(()=>[l(w,null,{default:t(()=>[c("Group Layout Options")]),_:1})]),_:1}),l(i,null,{default:t(()=>[l(V,{modelValue:a(e).selectedGroupLayout.hasAccess,"onUpdate:modelValue":s[0]||(s[0]=u=>a(e).selectedGroupLayout.hasAccess=u),label:"Has Access"},null,8,["modelValue"])]),_:1}),l(i,null,{default:t(()=>[l(V,{modelValue:a(e).selectedGroupLayout.showInMenu,"onUpdate:modelValue":[s[1]||(s[1]=u=>a(e).selectedGroupLayout.showInMenu=u),s[2]||(s[2]=u=>{var d;return a(e).updateGroupMenu((d=a(e).selectedGroup)==null?void 0:d.id,a(e).selectedLayout.id,u,a(e).selectedLayout.name)})],label:"Show in Menu",disable:!a(e).selectedGroupLayout.hasAccess},null,8,["modelValue","disable"])]),_:1}),l(i,null,{default:t(()=>[l(G,{modelValue:a(e).selectedGroupLayout.create,"onUpdate:modelValue":s[3]||(s[3]=u=>a(e).selectedGroupLayout.create=u),label:"Create"},null,8,["modelValue"]),l(G,{modelValue:a(e).selectedGroupLayout.read,"onUpdate:modelValue":s[4]||(s[4]=u=>a(e).selectedGroupLayout.read=u),label:"Read"},null,8,["modelValue"]),l(G,{modelValue:a(e).selectedGroupLayout.update,"onUpdate:modelValue":s[5]||(s[5]=u=>a(e).selectedGroupLayout.update=u),label:"Update"},null,8,["modelValue"]),l(G,{modelValue:a(e).selectedGroupLayout.delete,"onUpdate:modelValue":s[6]||(s[6]=u=>a(e).selectedGroupLayout.delete=u),label:"Delete"},null,8,["modelValue"])]),_:1}),l(i,null,{default:t(()=>[l(G,{modelValue:a(e).selectedGroupLayout.finance,"onUpdate:modelValue":s[7]||(s[7]=u=>a(e).selectedGroupLayout.finance=u),label:"Finance"},null,8,["modelValue"])]),_:1})]),_:1},512)),[[E,a(e).selectedLayout.id!==""]])}});const te=S({__name:"AccessControlEditorPage",setup(U){const e=h();return z(()=>{console.log("Access Control Editor \xBB onBeforeMount"),e.readSettings()}),(y,s)=>(p(),Q(x,null,[l(J,null,{default:t(()=>[l(D,null,{default:t(()=>[l(w,null,{default:t(()=>{var u;return[c("Access Control Editor \xBB "+_((u=a(e).selectedGroup)==null?void 0:u.name)+" \xBB "+_(a(e).selectedLayout.name),1)]}),_:1}),l(T,{dense:"",icon:"save",label:"Save",onClick:s[0]||(s[0]=u=>a(e).saveGroup()),align:"right"})]),_:1})]),_:1}),l(X,{class:"flex"},{default:t(()=>{var u;return[l(Z),$(l(le,null,null,512),[[E,((u=a(e).selectedGroup)==null?void 0:u.id)!==""]]),l(ae),l(M,null,{default:t(()=>[l(i,null,{default:t(()=>[l(k,{class:"text-h6"},{default:t(()=>[c("Menu Preview")]),_:1})]),_:1}),l(i,null,{default:t(()=>[l(N,null,{default:t(()=>{var d;return[(p(!0),Q(x,null,B((d=a(e).selectedGroup)==null?void 0:d.menu,(f,g)=>(p(),v(F,{key:g,clickable:"",class:"bg-grey-2 menu"},{default:t(()=>[l(b,null,{default:t(()=>[l(k,{class:"text-h5"},{default:t(()=>[c(_(f.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]}),_:1})]),_:1})]),_:1})]}),_:1})],64))}});var pe=I(te,[["__scopeId","data-v-30e2eaf4"]]);export{pe as default};
