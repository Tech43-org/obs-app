import{Q as D}from"./QToolbarTitle.e4dc3fb6.js";import{_ as A,l as B,u as M,a as T,f as z,r as g,a1 as I,E as q,Y as O,o as b,q as v,w as a,s as e,x as o,Q as U,t as n,a7 as f,y as i,v as F,aV as h,ab as j,aU as w,bj as H}from"./index.019e11b5.js";import{Q as S}from"./QSpace.9f6a112b.js";import{Q as x,a as N}from"./QItem.44ad7d0f.js";import{Q as $}from"./QToolbar.596401b5.js";import{Q as E}from"./QHeader.9dd9d550.js";import{Q as c,b as m,a as s}from"./use-form.5d0e830d.js";import{Q as P}from"./QChip.67e150a2.js";import{Q as d}from"./QInput.bff96581.js";import{Q as Y}from"./QSelect.aa243a20.js";import{Q as G}from"./QPage.8967ee87.js";import{Q as J,a as K}from"./QLayout.4252664c.js";import{Q as W}from"./QFile.40f0311e.js";import"./uid.42677368.js";const X={class:"row"},Z={class:"row items-center"},ee={class:"text-h6"},ae={class:"ellipsis"},le=B({__name:"FinanceRequestFormPage",setup(te){const V=M(),y=T(),l=z(),p=g(),r=g();I(()=>{V.readSettings(),y.readAllUsers(),l.readFinanceRequestData()});const C=q(()=>{switch(l.financeRequest.fieldName){case"Finance_Penalty":return"Penalty";case"Finance_Price":return"Price";case"Finance_Discount":return"Discount";case"Finance_SAP_ProductNumber":return"SAP Number";default:return""}}),_=q(()=>{switch(l.financeRequest.fieldName){case"Finance_Price":return"\u20AC";case"Finance_SAP_ProductNumber":return"#";default:return""}}),R=q(()=>{switch(l.financeRequest.fieldName){case"Finance_Penalty":return"%";case"Finance_Discount":return"%";default:return""}});async function k(Q){r.value&&URL.revokeObjectURL(r.value),r.value=URL.createObjectURL(Q);const u=await H(r.value);l.financeRequest.file&&p.value&&(l.financeRequest.file.base64=u,l.financeRequest.file.name=p.value.name)}O(()=>{r.value&&URL.revokeObjectURL(r.value)});const L=q(()=>!l.financeRequest.newValue||!l.financeRequest.userRecipient);return(Q,u)=>(b(),v(J,{view:"hHh lpR fFf"},{default:a(()=>[e(E,null,{default:a(()=>[e($,{class:"bg-primary"},{default:a(()=>[e(D,null,{default:a(()=>[o(" Request Finance ")]),_:1}),e(x,null,{default:a(()=>[e(U,{color:"primary",type:"cancel",label:"Cancel",onClick:u[0]||(u[0]=t=>n(l).cancelFinanceRequest())}),e(S),e(U,{color:"primary",type:"submit",label:"Submit Request",onClick:u[1]||(u[1]=t=>n(l).sendFinanceRequest()),disable:L.value},null,8,["disable"])]),_:1})]),_:1})]),_:1}),e(K,null,{default:a(()=>[e(G,null,{default:a(()=>[e(c,null,{default:a(()=>[f("div",X,[e(m,{header:""},{default:a(()=>[o(i(n(l).financeRequest.itemCode),1)]),_:1}),e(S),f("span",null,[e(P,{color:"blue-5","text-color":"white"},{default:a(()=>[o(i(n(l).financeRequest.customerRecipient),1)]),_:1})])]),e(x,null,{default:a(()=>[e(m,null,{default:a(()=>[o(i(n(l).financeRequest.itemDescription),1)]),_:1})]),_:1})]),_:1}),f("div",Z,[e(c,{class:"col"},{default:a(()=>[e(s,null,{default:a(()=>[e(m,null,{default:a(()=>[o("Requester")]),_:1}),e(d,{modelValue:n(V).loggedUser.fullName,"onUpdate:modelValue":u[2]||(u[2]=t=>n(V).loggedUser.fullName=t),readonly:"",dense:""},null,8,["modelValue"])]),_:1})]),_:1}),e(c,{class:"col"},{default:a(()=>[e(s,null,{default:a(()=>[e(m,null,{default:a(()=>[o("Request to")]),_:1}),e(Y,{modelValue:n(l).financeRequest.userRecipient,"onUpdate:modelValue":u[3]||(u[3]=t=>n(l).financeRequest.userRecipient=t),options:n(y).userDeptHeads,"option-value":"fullName","option-label":"fullName",dense:""},{option:a(t=>[e(x,null,{default:a(()=>[e(N,{avatar:""},{default:a(()=>[e(F,{size:"sm","text-color":"white",style:h({backgroundColor:t.opt.color})},{default:a(()=>[o(i(t.opt.initials),1)]),_:2},1032,["style"])]),_:2},1024),e(N,null,{default:a(()=>[f("span",ee,i(t.opt.fullName),1)]),_:2},1024)]),_:2},1024)]),_:1},8,["modelValue","options"])]),_:1})]),_:1})]),e(c,{class:"row items-center"},{default:a(()=>[e(s,{class:"col-8"},{default:a(()=>[e(d,{modelValue:n(l).financeRequest.requestMessage,"onUpdate:modelValue":u[4]||(u[4]=t=>n(l).financeRequest.requestMessage=t),label:"Request Message",type:"textarea",autogrow:"",outlined:"",dense:""},null,8,["modelValue"])]),_:1}),e(s,{class:"col-4"},{default:a(()=>[e(n(W),{modelValue:p.value,"onUpdate:modelValue":[u[5]||(u[5]=t=>p.value=t),k],label:"Select Attachment",outlined:"",clearable:"",dense:""},{file:a(({file:t})=>[e(P,{size:"sm",color:"primary text-white"},{default:a(()=>[e(F,null,{default:a(()=>[e(j,{name:"sym_o_description"})]),_:1}),f("div",ae,i(t.name),1)]),_:2},1024)]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(c,null,{default:a(()=>[e(s,{horizontal:"",class:"items-center"},{default:a(()=>[e(s,{class:"col-4 q-py-md"},{default:a(()=>[e(m,{header:""},{default:a(()=>[o(i(C.value),1)]),_:1})]),_:1}),n(l).financeRequest.fieldType==="Number"?(b(),v(s,{key:0,horizontal:""},{default:a(()=>[e(s,{class:"col-6 q-py-md"},{default:a(()=>[e(d,{modelValue:n(l).financeRequest.originalValue,"onUpdate:modelValue":u[6]||(u[6]=t=>n(l).financeRequest.originalValue=t),modelModifiers:{number:!0},label:"Original Value",type:"number",outlined:"",dense:"","input-class":"text-right",prefix:_.value,suffix:R.value,disable:""},null,8,["modelValue","prefix","suffix"])]),_:1}),e(s,{class:"col-6 q-py-md"},{default:a(()=>[e(d,{modelValue:n(l).financeRequest.newValue,"onUpdate:modelValue":u[7]||(u[7]=t=>n(l).financeRequest.newValue=t),modelModifiers:{number:!0},label:"New Value",type:"number",outlined:"",dense:"",prefix:_.value,suffix:R.value,"input-class":"text-right"},null,8,["modelValue","prefix","suffix"])]),_:1})]),_:1})):w("",!0),n(l).financeRequest.fieldType==="Text"?(b(),v(s,{key:1,horizontal:""},{default:a(()=>[e(s,{class:"col-6 q-py-md"},{default:a(()=>[e(d,{modelValue:n(l).financeRequest.originalValue,"onUpdate:modelValue":u[8]||(u[8]=t=>n(l).financeRequest.originalValue=t),label:"Original Value",outlined:"",dense:"",prefix:_.value,suffix:R.value,disable:""},null,8,["modelValue","prefix","suffix"])]),_:1}),e(s,{class:"col-6 q-py-md"},{default:a(()=>[e(d,{modelValue:n(l).financeRequest.newValue,"onUpdate:modelValue":u[9]||(u[9]=t=>n(l).financeRequest.newValue=t),label:"New Value",outlined:"",dense:"",prefix:_.value,suffix:R.value},null,8,["modelValue","prefix","suffix"])]),_:1})]),_:1})):w("",!0)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});var Ve=A(le,[["__scopeId","data-v-401ea2b8"]]);export{Ve as default};
