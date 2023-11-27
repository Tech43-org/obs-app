import{Q as k}from"./QDrawer.53294512.js";import{Q as D}from"./QPage.a156f831.js";import{G as U,a as y,u as C,y as Q,w as L,J as v,K as g,L as t,N as l,M as a,P as c,Q as w,a3 as x,R as _,V as $,aP as A,e as E,T as B,Z as q,$ as P,_ as z,O as j,aQ as O,aR as G,aS as Z,a5 as F}from"./index.4edde7b0.js";import{Q as I}from"./QToolbarTitle.42ee18bd.js";import{Q as S,b as h,c as b,a as J}from"./QList.22f6341c.js";import{b as p,c as f,Q as N,a as R}from"./QCardActions.fd816d3a.js";import{a as M,b as H}from"./QSeparator.b177360e.js";import{Q as T}from"./QBanner.9c14168f.js";import{Q as K}from"./QBadge.d5bb22cd.js";import{u as W,A as Y}from"./ActivityTable.dc3dda27.js";import{Q as X}from"./QSpace.281e33fb.js";import{Q as ee}from"./QToolbar.85a20717.js";import"./QBtnGroup.2dcc4813.js";import"./QCheckbox.796b368c.js";const ae=$("br",null,null,-1),le=U({__name:"UserCreateDrawer",setup(V){const e=y(),i=C(),s=Q({subject:"",body:""});L(()=>({givenName:e.user.givenName,surname:e.user.surname}),d=>{s.value.subject=`Onboarding ${d.givenName} ${d.surname}`,s.value.body=`Please add ${d.givenName} to the Active Directory.
Name: ${d.givenName}
Surname: ${d.surname}

Thanks

This email has been sent from FileMaker by ${i.loggedUser.fullName}`},{immediate:!0});const m=()=>{e.user={givenName:"",surname:"",status:"Pending",groupId:null}};return(d,r)=>(v(),g(k,{modelValue:l(e).createMode,"onUpdate:modelValue":r[5]||(r[5]=n=>l(e).createMode=n),onBeforeShow:r[6]||(r[6]=n=>m()),width:384,bordered:"",overlay:"",side:"right"},{default:t(()=>[a(N,null,{default:t(()=>[a(p,null,{default:t(()=>[a(I,null,{default:t(()=>[c(" Create User ")]),_:1}),a(S,{class:"text-body2"},{default:t(()=>[c(" A new User will be created and, an email request to add him/her to Active Directory will be send ")]),_:1}),ae,a(w,{dense:"",label:"Create User and Send Request",icon:"person_add",color:"primary",onClick:r[0]||(r[0]=n=>l(e).createUser(s.value)),disable:!l(e).user.givenName||!l(e).user.surname},null,8,["disable"])]),_:1}),a(p,null,{default:t(()=>[a(f,{modelValue:l(e).user.givenName,"onUpdate:modelValue":r[1]||(r[1]=n=>l(e).user.givenName=n),label:"Name",rules:[n=>!!n||"Name is required"]},null,8,["modelValue","rules"]),a(f,{modelValue:l(e).user.surname,"onUpdate:modelValue":r[2]||(r[2]=n=>l(e).user.surname=n),label:"Surname",rules:[n=>!!n||"Surname is required"]},null,8,["modelValue","rules"])]),_:1})]),_:1}),a(N,{class:"bg-blue-2"},{default:t(()=>[a(p,null,{default:t(()=>[a(h,{style:{"background-color":"hsl(200, 50%, 90%)"}},{default:t(()=>[a(b,{avatar:""},{default:t(()=>[a(x,{name:"mail"})]),_:1}),a(b,null,{default:t(()=>[c(_(l(i).contactData),1)]),_:1})]),_:1}),a(f,{modelValue:s.value.subject,"onUpdate:modelValue":r[3]||(r[3]=n=>s.value.subject=n),label:"Subject"},null,8,["modelValue"]),a(f,{modelValue:s.value.body,"onUpdate:modelValue":r[4]||(r[4]=n=>s.value.body=n),label:"Body",type:"textarea",autogrow:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}}),te=U({__name:"UserUpdateDrawer",setup(V){const e=y(),i=C(),s=Q({subject:"",body:""}),m=Q(320),d=()=>{e.user=JSON.parse(JSON.stringify(e.selectedUser))},r=()=>{if(e.selectedUser.status!=="Inactive"&&e.user.status==="Inactive"){e.user.groupId=null;const n=e.user.email;e.user.email=null,m.value=720,s.value.subject=`Deauthorize ${e.user.givenName} ${e.user.surname}`,s.value.body=`Please remove ${e.user.givenName} from the Active Directory.
Name: ${e.user.givenName}
Surname: ${e.user.surname}
Email: ${n}
 
Thanks
 
This email has been sent from FileMaker by ${i.loggedUser.fullName}`}else m.value=320};return(n,o)=>(v(),g(k,{modelValue:l(e).editMode,"onUpdate:modelValue":o[11]||(o[11]=u=>l(e).editMode=u),onBeforeShow:o[12]||(o[12]=u=>d()),onBeforeHide:o[13]||(o[13]=u=>m.value=320),width:m.value,bordered:"",overlay:"",side:"right",class:"row"},{default:t(()=>[a(N,{class:"col"},{default:t(()=>[a(p,{horizontal:""},{default:t(()=>[a(I,null,{default:t(()=>[c(" Edit User ")]),_:1}),a(w,{dense:"",label:"Save Changes",icon:"save",color:"primary",onClick:o[0]||(o[0]=u=>l(e).updateUser(s.value)),disable:l(e).user.status==="Active"&&!l(e).user.groupId},null,8,["disable"])]),_:1}),a(p,null,{default:t(()=>[a(f,{modelValue:l(e).user.givenName,"onUpdate:modelValue":o[1]||(o[1]=u=>l(e).user.givenName=u),label:"Name"},null,8,["modelValue"]),a(f,{modelValue:l(e).user.surname,"onUpdate:modelValue":o[2]||(o[2]=u=>l(e).user.surname=u),label:"Surname"},null,8,["modelValue"]),a(f,{modelValue:l(e).user.loginName,"onUpdate:modelValue":o[3]||(o[3]=u=>l(e).user.loginName=u),label:"Login"},null,8,["modelValue"]),a(f,{modelValue:l(e).user.email,"onUpdate:modelValue":o[4]||(o[4]=u=>l(e).user.email=u),label:"Email",type:"email",rules:[u=>!u||/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(u)||"Invalid email"]},null,8,["modelValue","rules"]),a(f,{modelValue:l(e).user.note,"onUpdate:modelValue":o[5]||(o[5]=u=>l(e).user.note=u),label:"Note",type:"textarea"},null,8,["modelValue"])]),_:1}),a(p,{style:{"background-color":"rgb(197, 198, 198)","border-radius":"4%"}},{default:t(()=>[a(M,{modelValue:l(e).user.status,"onUpdate:modelValue":[o[6]||(o[6]=u=>l(e).user.status=u),o[7]||(o[7]=u=>r())],label:"Status",options:l(e).statusOptions},null,8,["modelValue","options"]),a(M,{modelValue:l(e).user.groupId,"onUpdate:modelValue":o[8]||(o[8]=u=>l(e).user.groupId=u),"emit-value":"","map-options":"",label:"Group",clearable:"",disable:l(e).user.status!=="Active",options:l(i).groupsOptions},null,8,["modelValue","disable","options"])]),_:1}),l(e).user.status==="Active"&&(l(e).user.groupId===null||l(e).user.groupId==="")?(v(),g(p,{key:0},{default:t(()=>[a(T,{class:"bg-orange text-white",rounded:""},{avatar:t(()=>[a(x,{name:"warning"})]),default:t(()=>[c(" Select a Group before saving changes ")]),_:1})]),_:1})):A("",!0)]),_:1}),l(e).selectedUser.status!=="Inactive"&&l(e).user.status==="Inactive"?(v(),g(N,{key:0,class:"col"},{default:t(()=>[a(p,null,{default:t(()=>[a(T,{class:"bg-red text-white",rounded:""},{avatar:t(()=>[a(x,{name:"warning"})]),default:t(()=>[c(" You are going to inactivate this user, the email and the group associated will be removed and an email to unauthorized the user will be sent. ")]),_:1})]),_:1}),a(N,{class:"bg-blue-2"},{default:t(()=>[a(p,null,{default:t(()=>[a(h,{style:{"background-color":"hsl(200, 50%, 90%)"}},{default:t(()=>[a(b,{avatar:""},{default:t(()=>[a(x,{name:"mail"})]),_:1}),a(b,null,{default:t(()=>[c(_(l(i).contactData),1)]),_:1})]),_:1}),a(f,{modelValue:s.value.subject,"onUpdate:modelValue":o[9]||(o[9]=u=>s.value.subject=u),label:"Subject"},null,8,["modelValue"]),a(f,{modelValue:s.value.body,"onUpdate:modelValue":o[10]||(o[10]=u=>s.value.body=u),label:"Body",type:"textarea",autogrow:"",hint:"The email can be personalized before sending it."},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})):A("",!0)]),_:1},8,["modelValue","width"]))}});const se=U({__name:"UsersList",setup(V){const e=y(),i=E(),s=m=>{e.selectedUser=m,e.editMode=!1,e.createMode=!1,i.readActivity(W.value)};return(m,d)=>(v(),g(N,{style:{width:"100%"}},{default:t(()=>[a(J,null,{default:t(()=>[(v(!0),B(P,null,q(l(e).filterUsers,r=>(v(),g(h,{key:r.userId,clickable:"",onClick:n=>s(r),class:"bg-grey-2 menu",active:l(e).selectedUser===r,"active-class":"menu-active"},{default:t(()=>[a(b,{avatar:""},{default:t(()=>[a(j,{style:O({backgroundColor:r.color}),class:"text-white"},{default:t(()=>[c(_(r.initials),1)]),_:2},1032,["style"])]),_:2},1024),a(b,null,{default:t(()=>[a(S,{class:"text-h4"},{default:t(()=>[c(_(r.givenName),1)]),_:2},1024),a(S,{class:"text-h5"},{default:t(()=>[c(_(r.surname),1)]),_:2},1024)]),_:2},1024),a(b,{side:"",top:""},{default:t(()=>[a(K,{rounded:"",color:r.status==="Active"?"green":r.status==="Pending"?"orange":"grey"},null,8,["color"])]),_:2},1024)]),_:2},1032,["onClick","active"]))),128))]),_:1})]),_:1}))}});var re=z(se,[["__scopeId","data-v-140edce8"]]);const oe=U({__name:"UserAvatar",setup(V){const e=y();return(i,s)=>(v(),g(j,G({style:{backgroundColor:l(e).selectedUser.color},class:"text-white"},i.$attrs),{default:t(()=>[c(_(l(e).selectedUser.initials),1)]),_:1},16,["style"]))}}),ue=U({__name:"UserInfoCard",setup(V){const e=y(),i=C();return(s,m)=>(v(),g(N,{style:{width:"16rem"}},{default:t(()=>[a(p,{class:"row"},{default:t(()=>[a(X),a(H,{dark:"",size:"md",label:l(e).selectedUser.status,color:l(e).selectedUser.status==="Active"?"green":l(e).selectedUser.status==="Pending"?"orange":"grey"},null,8,["label","color"])]),_:1}),a(p,{class:"column items-center q-pa-none"},{default:t(()=>[a(oe,{size:"100px"})]),_:1}),a(p,null,{default:t(()=>[a(S,{class:"text-h3 text-center"},{default:t(()=>{var d;return[c(_((d=l(e).selectedUser)==null?void 0:d.givenName),1)]}),_:1}),a(S,{class:"text-h4 text-center"},{default:t(()=>{var d;return[c(_((d=l(e).selectedUser)==null?void 0:d.surname),1)]}),_:1})]),_:1}),a(p,{class:"bg-blue-2"},{default:t(()=>[a(b,{avatar:""},{default:t(()=>[a(S,null,{default:t(()=>[c("Group")]),_:1}),a(S,{class:"text-h4"},{default:t(()=>[c(_(l(e).selectedUser.groupId?l(i).groups[l(e).selectedUser.groupId].name:"No Group"),1)]),_:1})]),_:1})]),_:1})]),_:1}))}}),ne=U({__name:"UsersSearch",setup(V){const e=y();return(i,s)=>(v(),g(f,{modelValue:l(e).searchTerm,"onUpdate:modelValue":s[1]||(s[1]=m=>l(e).searchTerm=m),type:"search",placeholder:"Search\u2026",filled:""},{append:t(()=>[a(x,{name:l(e).searchTerm?"close":"search",class:Z({"cursor-pointer":l(e).searchTerm}),onClick:s[0]||(s[0]=m=>l(e).searchTerm?l(e).searchTerm="":null)},null,8,["name","class"])]),_:1},8,["modelValue"]))}}),de=U({__name:"UsersToolbar",setup(V){const e=y();return(i,s)=>(v(),g(ee,null,{default:t(()=>[a(I,null,{default:t(()=>[c("Users \xBB "+_(l(e).selectedUser.givenName)+" "+_(l(e).selectedUser.surname),1)]),_:1}),a(R,null,{default:t(()=>[a(w,{icon:l(e).createMode?"close":"add",label:l(e).createMode?"Cancel Create":"Create User",onClick:s[0]||(s[0]=m=>{(l(e).createMode=!l(e).createMode)&&(l(e).editMode=!1)})},null,8,["icon","label"]),a(w,{icon:l(e).editMode?"close":"edit",label:l(e).editMode?"Cancel Edit":"Edit User",onClick:s[1]||(s[1]=m=>{(l(e).editMode=!l(e).editMode)&&(l(e).createMode=!1)})},null,8,["icon","label"])]),_:1})]),_:1}))}});const ie={class:"fixed-search"},me={class:"row items-start"},ce={style:{width:"300px"}},pe={class:"col"},fe=U({__name:"UsersPage",setup(V){const e=y(),i=C(),s=Q(!0);return F(()=>{i.readSettings(),e.readAllUsers(),i.toolbar=de}),(m,d)=>(v(),B(P,null,[a(le),a(te),a(k,{modelValue:s.value,"onUpdate:modelValue":d[0]||(d[0]=r=>s.value=r),side:"left",width:320},{default:t(()=>[$("div",ie,[a(ne)]),a(re)]),_:1},8,["modelValue"]),a(D,{class:"row-container"},{default:t(()=>[$("div",me,[$("div",ce,[a(ue)]),$("div",pe,[a(Y,{showSelections:!1})])])]),_:1})],64))}});var ke=z(fe,[["__scopeId","data-v-0716756d"]]);export{ke as default};
