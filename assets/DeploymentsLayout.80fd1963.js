import{Q as c,a as d}from"./QLayout.1e10a2d9.js";import{i as l,c as m,o,k as s,w as e,l as t,Q as i,m as f,n as y,p as g,_ as v,h as Q,u as S,a as h,$ as x,r as D,K as w,q as C}from"./index.18e7b13f.js";import{Q as k}from"./QToolbarTitle.66ac37f5.js";import{Q as B}from"./QToolbar.b96e205f.js";import{Q as H}from"./QHeader.bab0505c.js";import{O as b}from"./OBSLogo.14ff5cc4.js";const T=l({__name:"DeploymentsHeader",setup(u){const a=m();return(r,n)=>(o(),s(H,null,{default:e(()=>[t(B,{class:"bg-primary"},{default:e(()=>[t(i,{dense:"",onClick:f(a).showMenu},{default:e(()=>[t(y,{rounded:""},{default:e(()=>[t(b,{dense:"",rounded:"",class:"bg-grey-3 q-pa-xs",style:{width:"100%",height:"100%"}})]),_:1})]),_:1},8,["onClick"]),t(k,null,{default:e(()=>[g("Deployments")]),_:1})]),_:1})]),_:1}))}});var A=v(T,[["__scopeId","data-v-6c04387e"]]);const V=l({__name:"DeploymentsLayout",setup(u){const a=Q(),r=S(),n=h();return x(()=>{r.loggedUser.userId||(r.readSettings(),n.readAllUsers()),a.injectDeployments()}),(L,M)=>{const _=D("router-view");return o(),s(c,{view:"hHh lpR fFf"},{default:e(()=>[t(A),t(d,null,{default:e(()=>[(o(),s(w,null,[t(_,null,{default:e(({Component:p})=>[(o(),s(C(p)))]),_:1})],1024))]),_:1})]),_:1})}}});export{V as default};