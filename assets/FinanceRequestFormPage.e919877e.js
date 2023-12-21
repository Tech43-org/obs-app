import{Q as N}from"./QToolbarTitle.57db756d.js";import{Q as B}from"./QToolbar.4b047536.js";import{Q as I}from"./QHeader.6755a62c.js";import{Q as g,b as q,a as v}from"./use-form.aee44101.js";import{Q}from"./QSpace.d5aa16c5.js";import{Q as U}from"./QChip.37129d69.js";import{a as y,Q as h,b as O}from"./QList.813d9784.js";import{Q as m}from"./QInput.62713b3e.js";import{_ as T,k as D,u as M,a as P,f as $,R as w,$ as z,W as j,B as x,o as f,m as b,w as t,n as e,s as u,a5 as p,t as o,p as s,i as A,a1 as H,a2 as E,q as S,a9 as W,Q as F,bh as G,aU as J,a3 as K,a4 as X}from"./index.481c2d9a.js";import{Q as Y}from"./QSelect.0f167acb.js";import{Q as Z}from"./QPage.af9410ed.js";import{Q as ee,a as ae}from"./QLayout.03322efe.js";import{Q as te,a as le}from"./QFile.cdadb7f8.js";const ne=c=>(K("data-v-ce703aba"),c=c(),X(),c),se={class:"row"},ue={class:"text-h6 q-px-sm"},ie=ne(()=>p("br",null,null,-1)),oe={class:"ellipsis"},re=D({__name:"FinanceRequestFormPage",setup(c){const _=M(),V=P(),l=$(),R=w(),i=w();z(()=>{_.readSettings(),V.readAllUsers(),l.readFinanceRequestData()});async function k(d){i.value&&URL.revokeObjectURL(i.value),i.value=URL.createObjectURL(d);const a=await G(i.value);l.financeRequest.file&&R.value&&(l.financeRequest.file.base64=a,l.financeRequest.file.name=R.value.name)}j(()=>{i.value&&URL.revokeObjectURL(i.value)});const C=x(()=>!l.financeRequest.newValue||!l.financeRequest.userRecipient),r=x(()=>{const d=l.financeRequest.fieldType;return d==="number"?{type:"number",rules:[a=>!!a||"Required",a=>/^\d*\.?\d*$/.test(a.toString())||"Only numbers are allowed"]}:d==="date"?{type:"date",rules:[a=>!!a||"Required"]}:{type:"text",rules:[a=>!!a||"Required"]}});return(d,a)=>(f(),b(ee,{view:"hHh lpR fFf"},{default:t(()=>[e(I,null,{default:t(()=>[e(B,{class:"bg-primary"},{default:t(()=>[e(N,null,{default:t(()=>[u(" Finance Request Form ")]),_:1})]),_:1})]),_:1}),e(ae,null,{default:t(()=>[e(Z,null,{default:t(()=>[e(g,null,{default:t(()=>[p("div",se,[e(q,{header:""},{default:t(()=>[u(o(s(l).financeRequest.itemCode),1)]),_:1}),e(Q),p("span",null,[e(U,{color:"blue-5","text-color":"white"},{default:t(()=>[u(o(s(l).financeRequest.customerRecipient),1)]),_:1})])]),e(y,null,{default:t(()=>[e(q,null,{default:t(()=>[u(o(s(l).financeRequest.itemDescription),1)]),_:1})]),_:1})]),_:1}),e(g,{style:{"min-height":"460px"}},{default:t(()=>[e(v,null,{default:t(()=>[e(q,null,{default:t(()=>[u("Requester")]),_:1}),e(m,{modelValue:s(_).loggedUser.fullName,"onUpdate:modelValue":a[0]||(a[0]=n=>s(_).loggedUser.fullName=n),readonly:"",dense:""},null,8,["modelValue"]),e(q,null,{default:t(()=>[u("Request to")]),_:1}),e(h,null,{default:t(()=>[(f(!0),A(E,null,H(s(V).userDeptHeads,(n,L)=>(f(),b(y,{key:L,clickable:"",onClick:de=>s(l).financeRequest.userRecipient=n,active:s(l).financeRequest.userRecipient===n,"active-class":"menu-active",dense:""},{default:t(()=>[e(O,{avatar:""},{default:t(()=>[e(y,{class:"items-center q-mx-sm q-px-xs"},{default:t(()=>[e(S,{size:"sm","text-color":"white",style:J({backgroundColor:n.color})},{default:t(()=>[u(o(n.initials),1)]),_:2},1032,["style"]),p("span",ue,o(n.fullName),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick","active"]))),128))]),_:1}),ie,e(m,{modelValue:s(l).financeRequest.fieldName,"onUpdate:modelValue":a[1]||(a[1]=n=>s(l).financeRequest.fieldName=n),label:"Field",disable:"",outlined:"",dense:""},null,8,["modelValue"]),e(v,{horizontal:"",class:"q-gutter-md"},{default:t(()=>[e(m,{modelValue:s(l).financeRequest.originalValue,"onUpdate:modelValue":a[2]||(a[2]=n=>s(l).financeRequest.originalValue=n),label:"Original Value",type:r.value.type,disable:"",outlined:"",dense:"","input-style":r.value.type==="number"?"text-align: right":""},null,8,["modelValue","type","input-style"]),e(Q),s(l).financeRequest.fieldOptions?(f(),b(Y,{key:0,modelValue:s(l).financeRequest.newValue,"onUpdate:modelValue":a[3]||(a[3]=n=>s(l).financeRequest.newValue=n),options:s(l).financeRequest.fieldOptions,label:"New Value","emit-value":"",outlined:"",dense:"",style:{"min-width":"200px"}},null,8,["modelValue","options"])):(f(),b(m,{key:1,modelValue:s(l).financeRequest.newValue,"onUpdate:modelValue":a[4]||(a[4]=n=>s(l).financeRequest.newValue=n),label:"New Value",type:r.value.type,rules:r.value.rules,outlined:"",dense:"","input-style":r.value.type==="number"?"text-align: right":""},null,8,["modelValue","type","rules","input-style"]))]),_:1}),e(v,null,{default:t(()=>[e(s(te),{modelValue:R.value,"onUpdate:modelValue":[a[5]||(a[5]=n=>R.value=n),k],label:"Attach File",outlined:"",clearable:"",dense:""},{file:t(({file:n})=>[e(U,{size:"sm",color:"primary text-white"},{default:t(()=>[e(S,null,{default:t(()=>[e(W,{name:"description"})]),_:1}),p("div",oe,o(n.name),1)]),_:2},1024)]),_:1},8,["modelValue"]),e(m,{modelValue:s(l).financeRequest.requestMessage,"onUpdate:modelValue":a[6]||(a[6]=n=>s(l).financeRequest.requestMessage=n),label:"Request Message",type:"textarea",autogrow:"",outlined:"",dense:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(le,{style:{"background-color":"var(--primary-white)"},class:"text-white"},{default:t(()=>[e(y,null,{default:t(()=>[e(F,{color:"primary",type:"cancel",label:"Cancel",onClick:a[7]||(a[7]=n=>s(l).cancelFinanceRequest())}),e(Q),e(F,{color:"primary",type:"submit",label:"Submit Request",onClick:a[8]||(a[8]=n=>s(l).sendFinanceRequest()),disable:C.value},null,8,["disable"])]),_:1})]),_:1})]),_:1}))}});var Ue=T(re,[["__scopeId","data-v-ce703aba"]]);export{Ue as default};
