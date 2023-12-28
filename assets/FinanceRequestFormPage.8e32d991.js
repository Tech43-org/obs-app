import{Q as N}from"./QToolbarTitle.ffdf3e96.js";import{_ as B,k as I,u as O,a as M,f as T,R as g,$ as h,W as D,B as U,o as m,m as q,w as a,n as e,s as u,Q as x,p as s,a5 as p,t as o,i as P,a1 as $,a2 as z,q as S,a9 as j,bi as A,aU as H,a3 as E,a4 as W}from"./index.4cec3370.js";import{Q as v}from"./QSpace.ce523312.js";import{a as b,Q as G,b as J}from"./QList.f840ab66.js";import{Q as K}from"./QToolbar.adfeb41a.js";import{Q as X}from"./QHeader.f786c7d6.js";import{Q as w,b as y,a as V}from"./use-form.4654facc.js";import{Q as F}from"./QChip.25f01887.js";import{Q as f}from"./QInput.ee2a8792.js";import{Q as Y}from"./QSelect.30511050.js";import{Q as Z}from"./QPage.f5027371.js";import{Q as ee,a as le}from"./QLayout.635febcb.js";import{Q as te}from"./QFile.4f3fb586.js";const ae=c=>(E("data-v-15be21cf"),c=c(),W(),c),ne={class:"row"},se={class:"text-h6 q-px-sm"},ue=ae(()=>p("br",null,null,-1)),ie={class:"ellipsis"},oe=I({__name:"FinanceRequestFormPage",setup(c){const _=O(),Q=M(),t=T(),R=g(),i=g();h(()=>{_.readSettings(),Q.readAllUsers(),t.readFinanceRequestData()});async function k(d){i.value&&URL.revokeObjectURL(i.value),i.value=URL.createObjectURL(d);const l=await A(i.value);t.financeRequest.file&&R.value&&(t.financeRequest.file.base64=l,t.financeRequest.file.name=R.value.name)}D(()=>{i.value&&URL.revokeObjectURL(i.value)});const C=U(()=>!t.financeRequest.newValue||!t.financeRequest.userRecipient),r=U(()=>{const d=t.financeRequest.fieldType;return d==="number"?{type:"number",rules:[l=>!!l||"Required",l=>/^\d*\.?\d*$/.test(l.toString())||"Only numbers are allowed"]}:d==="date"?{type:"date",rules:[l=>!!l||"Required"]}:{type:"text",rules:[l=>!!l||"Required"]}});return(d,l)=>(m(),q(ee,{view:"hHh lpR fFf"},{default:a(()=>[e(X,null,{default:a(()=>[e(K,{class:"bg-primary"},{default:a(()=>[e(N,null,{default:a(()=>[u(" Request Update ")]),_:1}),e(b,null,{default:a(()=>[e(x,{color:"primary",type:"cancel",label:"Cancel",onClick:l[0]||(l[0]=n=>s(t).cancelFinanceRequest())}),e(v),e(x,{color:"primary",type:"submit",label:"Submit Request",onClick:l[1]||(l[1]=n=>s(t).sendFinanceRequest()),disable:C.value},null,8,["disable"])]),_:1})]),_:1})]),_:1}),e(le,null,{default:a(()=>[e(Z,null,{default:a(()=>[e(w,null,{default:a(()=>[p("div",ne,[e(y,{header:""},{default:a(()=>[u(o(s(t).financeRequest.itemCode),1)]),_:1}),e(v),p("span",null,[e(F,{color:"blue-5","text-color":"white"},{default:a(()=>[u(o(s(t).financeRequest.customerRecipient),1)]),_:1})])]),e(b,null,{default:a(()=>[e(y,null,{default:a(()=>[u(o(s(t).financeRequest.itemDescription),1)]),_:1})]),_:1})]),_:1}),e(w,{style:{"min-height":"460px"}},{default:a(()=>[e(V,null,{default:a(()=>[e(y,null,{default:a(()=>[u("Requester")]),_:1}),e(f,{modelValue:s(_).loggedUser.fullName,"onUpdate:modelValue":l[2]||(l[2]=n=>s(_).loggedUser.fullName=n),readonly:"",dense:""},null,8,["modelValue"]),e(y,null,{default:a(()=>[u("Request to")]),_:1}),e(G,null,{default:a(()=>[(m(!0),P(z,null,$(s(Q).userDeptHeads,(n,L)=>(m(),q(b,{key:L,clickable:"",onClick:re=>s(t).financeRequest.userRecipient=n,active:s(t).financeRequest.userRecipient===n,"active-class":"menu-active",dense:""},{default:a(()=>[e(J,{avatar:""},{default:a(()=>[e(b,{class:"items-center q-mx-sm q-px-xs"},{default:a(()=>[e(S,{size:"sm","text-color":"white",style:H({backgroundColor:n.color})},{default:a(()=>[u(o(n.initials),1)]),_:2},1032,["style"]),p("span",se,o(n.fullName),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick","active"]))),128))]),_:1}),ue,e(f,{modelValue:s(t).financeRequest.fieldName,"onUpdate:modelValue":l[3]||(l[3]=n=>s(t).financeRequest.fieldName=n),label:"Field",disable:"",outlined:"",dense:""},null,8,["modelValue"]),e(V,{horizontal:"",class:"q-gutter-md"},{default:a(()=>[e(f,{modelValue:s(t).financeRequest.originalValue,"onUpdate:modelValue":l[4]||(l[4]=n=>s(t).financeRequest.originalValue=n),modelModifiers:{number:!0},label:"Original Value",type:r.value.type,disable:"",outlined:"",dense:"","input-style":r.value.type==="number"?"text-align: right":""},null,8,["modelValue","type","input-style"]),e(v),s(t).financeRequest.fieldOptions?(m(),q(Y,{key:0,modelValue:s(t).financeRequest.newValue,"onUpdate:modelValue":l[5]||(l[5]=n=>s(t).financeRequest.newValue=n),modelModifiers:{number:!0},options:s(t).financeRequest.fieldOptions,label:"New Value","emit-value":"",outlined:"",dense:"",style:{"min-width":"200px"}},null,8,["modelValue","options"])):(m(),q(f,{key:1,modelValue:s(t).financeRequest.newValue,"onUpdate:modelValue":l[6]||(l[6]=n=>s(t).financeRequest.newValue=n),label:"New Value",type:r.value.type,rules:r.value.rules,outlined:"",dense:"","input-style":r.value.type==="number"?"text-align: right":""},null,8,["modelValue","type","rules","input-style"]))]),_:1}),e(V,null,{default:a(()=>[e(s(te),{modelValue:R.value,"onUpdate:modelValue":[l[7]||(l[7]=n=>R.value=n),k],label:"Attach File",outlined:"",clearable:"",dense:""},{file:a(({file:n})=>[e(F,{size:"sm",color:"primary text-white"},{default:a(()=>[e(S,null,{default:a(()=>[e(j,{name:"description"})]),_:1}),p("div",ie,o(n.name),1)]),_:2},1024)]),_:1},8,["modelValue"]),e(f,{modelValue:s(t).financeRequest.requestMessage,"onUpdate:modelValue":l[8]||(l[8]=n=>s(t).financeRequest.requestMessage=n),label:"Request Message",type:"textarea",autogrow:"",outlined:"",dense:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});var ge=B(oe,[["__scopeId","data-v-15be21cf"]]);export{ge as default};
