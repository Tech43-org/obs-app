import{Q as f,a as v}from"./QLayout.92e3678e.js";import{i as u,j as g,u as y,c as b,r as d,o as s,k as o,w as t,l as e,Q as a,m as i,n as Q,p as h,t as k,q as m,_ as x,K as A}from"./index.c0b7552c.js";import{Q as C}from"./QToolbarTitle.9a0effc2.js";import{Q as S}from"./QBtnGroup.63b104a5.js";import{Q as w}from"./QToolbar.1f4622ac.js";import{Q as B}from"./QHeader.37dd14b2.js";import{O as D}from"./OBSLogo.6618e238.js";const H=u({__name:"AdminDashboardHeader",setup(p){const l=g(),_=y(),r=b();return(c,q)=>{const n=d("router-link");return s(),o(B,null,{default:t(()=>[e(w,{class:"bg-primary"},{default:t(()=>[e(a,{dense:"",onClick:i(r).showMenu},{default:t(()=>[e(Q,{rounded:""},{default:t(()=>[e(D,{dense:"",rounded:"",class:"bg-grey-3 q-pa-xs",style:{width:"100%",height:"100%"}})]),_:1})]),_:1},8,["onClick"]),e(C,null,{default:t(()=>[h("Admin Dashboard \xBB "+k(i(l).name),1)]),_:1}),e(S,{class:"q-gutter-x-md"},{default:t(()=>[e(n,{to:"/settings","active-class":"active-link"},{default:t(()=>[e(a,{dense:"",label:"Settings",icon:"sym_o_settings"})]),_:1}),e(n,{to:"/access-control-editor","active-class":"active-link"},{default:t(()=>[e(a,{dense:"",label:"Access Control Editor",icon:"sym_o_admin_panel_settings"})]),_:1}),e(n,{to:"/users","active-class":"active-link"},{default:t(()=>[e(a,{dense:"",label:"Users",icon:"sym_o_group"})]),_:1}),e(n,{to:"/activity","active-class":"active-link"},{default:t(()=>[e(a,{dense:"",label:"Activity",icon:"sym_o_visibility"})]),_:1})]),_:1})]),_:1}),(s(),o(m(i(_).toolbar)))]),_:1})}}});var T=x(H,[["__scopeId","data-v-732c2212"]]);const j=u({__name:"MainLayout",setup(p){return(l,_)=>{const r=d("router-view");return s(),o(f,{view:"hHh lpR fFf"},{default:t(()=>[e(T),e(v,null,{default:t(()=>[(s(),o(A,null,[e(r,null,{default:t(({Component:c})=>[(s(),o(m(c)))]),_:1})],1024))]),_:1})]),_:1})}}});export{j as default};