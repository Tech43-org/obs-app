import{Q as b,a as _,b as y}from"./use-form.9499128c.js";import{Q as ve}from"./QPage.073bf4a7.js";import{k as x,u as M,o as r,m as u,w as n,_ as j,n as e,s as d,p as l,a0 as k,Q as m,i as B,a1 as R,a2 as T,t as Z,a3 as ne,a4 as ae,a5 as s,B as E,x as he,R as q,H as we,J as ge,C as D,a6 as Se,D as be,a7 as ke,a8 as V,a9 as P,q as oe,aa as C,$ as Ve,K as Ce,v as xe}from"./index.5b426327.js";import{Q as K,a as v,b as Q}from"./QList.a91a229a.js";import{Q as Me}from"./QDrawer.98676597.js";import{Q as $}from"./QSpace.d9232132.js";import{Q as c}from"./QInput.6ea1b68e.js";import{Q as N}from"./QCardActions.da561849.js";import{Q as Ae,C as le}from"./ClosePopup.b93eb197.js";import{Q as G}from"./QBanner.43a8181a.js";import{Q as Ne}from"./QToolbarTitle.c658a8d7.js";import{Q as $e}from"./QToolbar.0aae9903.js";import{Q as U}from"./QSeparator.b5aa69cd.js";import{Q as I}from"./QBadge.de30930e.js";import{Q as Ie}from"./QSelect.f4f28485.js";import{Q as Be}from"./QChip.c76d578e.js";import"./touch.3df10340.js";import"./QBtnGroup.5047c3f3.js";const J=i=>(ne("data-v-33ab44ae"),i=i(),ae(),i),Pe=J(()=>s("div",{class:"text-h6"},"Groups",-1)),De=J(()=>s("br",null,null,-1)),Ue=J(()=>s("br",null,null,-1)),Ee=x({__name:"GroupsListEditor",setup(i){const t=M();return(g,a)=>(r(),u(b,{style:{width:"24rem"}},{default:n(()=>[e(_,null,{default:n(()=>[e(N,null,{default:n(()=>[Pe,e($),e(Ae,{dense:"",icon:"sym_o_add"},{default:n(()=>[e(b,{style:{width:"24rem"}},{default:n(()=>[e(_,null,{default:n(()=>[e(y,{class:"text-h5"},{default:n(()=>[d("Create new Group")]),_:1})]),_:1}),e(_,null,{default:n(()=>[e(y,{class:"text-body1"},{default:n(()=>[d("A new Group will be created with the following name.")]),_:1}),e(c,{modelValue:l(t).groupName,"onUpdate:modelValue":a[0]||(a[0]=o=>l(t).groupName=o),label:"Group Name",clearable:""},null,8,["modelValue"])]),_:1}),e(N,{align:"right"},{default:n(()=>[k(e(m,{dense:"",label:"Cancel"},null,512),[[le]]),k(e(m,{dense:"",label:"Create Group",color:"primary",disable:!l(t).groupName,onClick:a[1]||(a[1]=o=>l(t).addGroup())},null,8,["disable"]),[[le]])]),_:1})]),_:1})]),_:1}),l(t).editMode.fieldName!=="groups"?(r(),u(m,{key:0,dense:"",icon:"sym_o_edit",onClick:a[2]||(a[2]=o=>l(t).enterEditMode("groups"))})):(r(),u(m,{key:1,dense:"",icon:"sym_o_close",onClick:a[3]||(a[3]=o=>l(t).cancelEditMode("groups"))}))]),_:1})]),_:1}),e(K,null,{default:n(()=>[(r(!0),B(T,null,R(l(t).groups,(o,S)=>(r(),u(v,{key:S,onClick:f=>l(t).selectedGroup={...o,id:S},class:"bg-grey-2 menu"},{default:n(()=>[l(t).editMode.fieldName==="groups"?(r(),u(Q,{key:0},{default:n(()=>[e(c,{modelValue:o.name,"onUpdate:modelValue":f=>o.name=f,label:"Group Name"},null,8,["modelValue","onUpdate:modelValue"]),De,e(m,{icon:"sym_o_save",label:"Rename",dense:"",color:"primary",onClick:f=>l(t).renameGroup(o.name)},null,8,["onClick"]),Ue,e(m,{outline:"",icon:"sym_o_delete_forever",color:"red",label:"Delete",dense:"",onClick:f=>l(t).removeGroup(S,o.name)},null,8,["onClick"])]),_:2},1024)):(r(),u(Q,{key:1},{default:n(()=>[e(y,{class:"text-h5"},{default:n(()=>[d(Z(o.name),1)]),_:2},1024)]),_:2},1024))]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1}))}});var se=j(Ee,[["__scopeId","data-v-33ab44ae"]]);const Qe={ratio:[String,Number]};function Te(i,t){return E(()=>{const g=Number(i.ratio||(t!==void 0?t.value:void 0));return isNaN(g)!==!0&&g>0?{paddingBottom:`${100/g}%`}:null})}const qe=16/9;var O=he({name:"QImg",props:{...Qe,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:qe},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(i,{slots:t,emit:g}){const a=q(i.initialRatio),o=Te(i,a);let S=null,f=!1;const h=[q(null),q(H())],A=q(0),z=q(!1),L=q(!1),re=E(()=>`q-img q-img--${i.noNativeMenu===!0?"no-":""}menu`),ue=E(()=>({width:i.width,height:i.height})),me=E(()=>`q-img__image ${i.imgClass!==void 0?i.imgClass+" ":""}q-img__image--with${i.noTransition===!0?"out":""}-transition`),ce=E(()=>({...i.imgStyle,objectFit:i.fit,objectPosition:i.position}));we(()=>X(),Y);function X(){return i.src||i.srcset||i.sizes?{src:i.src,srcset:i.srcset,sizes:i.sizes}:null}function H(){return i.placeholderSrc!==void 0?{src:i.placeholderSrc}:null}function Y(w){S!==null&&(clearTimeout(S),S=null),L.value=!1,w===null?(z.value=!1,h[A.value^1].value=H()):z.value=!0,h[A.value].value=w}function _e({target:w}){f!==!0&&(S!==null&&(clearTimeout(S),S=null),a.value=w.naturalHeight===0?.5:w.naturalWidth/w.naturalHeight,ee(w,1))}function ee(w,F){f===!0||F===1e3||(w.complete===!0?fe(w):S=setTimeout(()=>{S=null,ee(w,F+1)},50))}function fe(w){f!==!0&&(A.value=A.value^1,h[A.value].value=null,z.value=!1,L.value=!1,g("load",w.currentSrc||w.src))}function pe(w){S!==null&&(clearTimeout(S),S=null),z.value=!1,L.value=!0,h[A.value].value=null,h[A.value^1].value=H(),g("error",w)}function te(w){const F=h[w].value,W={key:"img_"+w,class:me.value,style:ce.value,crossorigin:i.crossorigin,decoding:i.decoding,referrerpolicy:i.referrerpolicy,height:i.height,width:i.width,loading:i.loading,fetchpriority:i.fetchpriority,"aria-hidden":"true",draggable:i.draggable,...F};return A.value===w?(W.class+=" q-img__image--waiting",Object.assign(W,{onLoad:_e,onError:pe})):W.class+=" q-img__image--loaded",D("div",{class:"q-img__container absolute-full",key:"img"+w},D("img",W))}function ye(){return z.value!==!0?D("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},be(t[L.value===!0?"error":"default"])):D("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},t.loading!==void 0?t.loading():i.noSpinner===!0?void 0:[D(ke,{color:i.spinnerColor,size:i.spinnerSize})])}return Y(X()),ge(()=>{f=!0,S!==null&&(clearTimeout(S),S=null)}),()=>{const w=[];return o.value!==null&&w.push(D("div",{key:"filler",style:o.value})),L.value!==!0&&(h[0].value!==null&&w.push(te(0)),h[1].value!==null&&w.push(te(1))),w.push(D(Se,{name:"q-transition--fade"},ye)),D("div",{class:re.value,style:ue.value,role:"img","aria-label":i.alt},w)}}}),Ge="/webnew/admin/assets/host-dialog-edited.e208d98f.png",Oe="/webnew/admin/assets/login-dialog.a54a38aa.png",Re="/webnew/admin/assets/security-dialog-edited.e2d8b23a.png",ze="/webnew/admin/assets/security-set-password.f223a2b1.png",Le="/webnew/admin/assets/verify-access.7f5a4773.png",Fe="/webnew/admin/assets/log-devops-edited.e06e88e4.png";const We=s("div",{class:"text-h6"},"Service DAPI",-1),Ze=s("b",null,"local",-1),Ke=s("br",null,null,-1),de=x({__name:"ServiceDAPICard",setup(i){const t=M(),g=E(()=>t.editMode.fieldName==="serviceDAPI"),a=E(()=>t.editMode.fieldName!=="serviceDAPI"),o=E(()=>t.showSaveButtonOn==="serviceDAPI");return(S,f)=>(r(),u(b,{style:{width:"26rem"}},{default:n(()=>[e(_,null,{default:n(()=>[e(N,null,{default:n(()=>[We,e($),a.value?(r(),u(m,{key:0,icon:"sym_o_edit",dense:"",onClick:f[0]||(f[0]=h=>l(t).enterEditMode("serviceDAPI"))})):(r(),u(m,{key:1,icon:"sym_o_close",dense:"",onClick:f[1]||(f[1]=h=>l(t).cancelEditMode("serviceDAPI"))})),k(e(m,{icon:"sym_o_save",dense:"",onClick:f[2]||(f[2]=h=>l(t).saveLocalAccount("serviceDAPI"))},null,512),[[V,o.value]])]),_:1}),e(y,{header:""},{default:n(()=>[d(" ServiceDAPI is a "),Ze,d(" account that is used for the web to communicate to FileMaker via its Data API")]),_:1})]),_:1}),k(e(_,null,{default:n(()=>[e(G,{rounded:"",class:"bg-orange text-white"},{avatar:n(()=>[e(P,{name:"sym_o_warning"})]),default:n(()=>[d(" Notify the Web Admin about this changes. If you change the credentials, they will need to update them in their system. ")]),_:1})]),_:1},512),[[V,l(t).showSaveButtonOn==="serviceDAPI"]]),e(_,null,{default:n(()=>[e(c,{modelValue:l(t).serviceDAPI.accountName,"onUpdate:modelValue":f[3]||(f[3]=h=>l(t).serviceDAPI.accountName=h),readonly:a.value,label:"Account Name"},null,8,["modelValue","readonly"]),e(c,{modelValue:l(t).serviceDAPI.password,"onUpdate:modelValue":f[4]||(f[4]=h=>l(t).serviceDAPI.password=h),type:l(t).editMode.fieldName==="serviceDAPI"?"text":"password",readonly:a.value,label:"Password"},null,8,["modelValue","type","readonly"])]),_:1}),e(_,null,{default:n(()=>[e(y,{header:""},{default:n(()=>[d("Privilege Set")]),_:1}),k(e(G,{rounded:"",class:"bg-orange text-white"},{avatar:n(()=>[e(P,{name:"sym_o_warning"})]),default:n(()=>[d(" The Privilege Set Name has to match with the actual name in FileMaker Security. ")]),_:1},512),[[V,g.value]]),e(c,{modelValue:l(t).serviceDAPI.privilegeSet,"onUpdate:modelValue":f[5]||(f[5]=h=>l(t).serviceDAPI.privilegeSet=h),label:"Privilege Set Name",readonly:a.value},null,8,["modelValue","readonly"]),e(y,{caption:""},{default:n(()=>[d("This Privilege Set contains the minimum permissions that the Service DAPI needs in order to perform its duty")]),_:1})]),_:1}),e(_,null,{default:n(()=>[e(Q,null,{default:n(()=>[e(y,{class:"text-h6"},{default:n(()=>[d(" Account Files ")]),_:1})]),_:1}),Ke,e(Q,null,{default:n(()=>[k(e(G,{rounded:"",class:"bg-orange text-white"},{avatar:n(()=>[e(P,{name:"sym_o_warning"})]),default:n(()=>[d(" This FileNames are hardcoded in FileMaker scripts, don't mess with them before contacting the Dev Team. ")]),_:1},512),[[V,l(t).editMode.fieldName==="serviceDAPI"]])]),_:1}),k(e(v,null,{default:n(()=>[e(Q,null,{default:n(()=>[e(Ie,{modelValue:l(t).serviceDAPI.files,"onUpdate:modelValue":f[6]||(f[6]=h=>l(t).serviceDAPI.files=h),options:l(t).fileOptions,multiple:"",label:"Files"},null,8,["modelValue","options"])]),_:1})]),_:1},512),[[V,g.value]]),k(e(K,{dense:""},{default:n(()=>[(r(!0),B(T,null,R(l(t).serviceDAPI.files,(h,A)=>(r(),u(v,{key:A},{default:n(()=>[e(Be,{"text-color":"white",color:"blue"},{default:n(()=>[e(oe,{size:"sm","text-color":"white",icon:"sym_o_description",color:"blue"}),d(" "+Z(h),1)]),_:2},1024)]),_:2},1024))),128))]),_:1},512),[[V,a.value]])]),_:1})]),_:1}))}});const p=i=>(ne("data-v-33855d2a"),i=i(),ae(),i),He={class:"row"},je=["innerHTML"],Je=p(()=>s("input",{type:"checkbox"},null,-1)),Xe=p(()=>s("br",null,null,-1)),Ye=p(()=>s("input",{type:"checkbox"},null,-1)),et=p(()=>s("kbd",null,"Shift",-1)),tt=p(()=>s("kbd",null,"Command",-1)),lt=p(()=>s("kbd",null,"O",-1)),nt=p(()=>s("kbd",null,"Control",-1)),at=p(()=>s("kbd",null,"Shift",-1)),ot=p(()=>s("kbd",null,"O",-1)),st=p(()=>s("br",null,null,-1)),dt=p(()=>s("input",{type:"checkbox"},null,-1)),it=p(()=>s("kbd",null,"Option",-1)),rt=p(()=>s("kbd",null,"Shift",-1)),ut=p(()=>s("b",null,"current",-1)),mt=p(()=>s("br",null,null,-1)),ct=p(()=>s("input",{type:"checkbox"},null,-1)),_t=p(()=>s("p",null," Only edit the Name and Password, don't mess with other settings. ",-1)),ft=p(()=>s("p",null," Click on the pencil icon next to the password to open the Password Dialog ",-1)),pt=p(()=>s("br",null,null,-1)),yt=p(()=>s("input",{type:"checkbox"},null,-1)),vt=p(()=>s("p",null,[d(" Is recommended to "),s("b",null,"temporarily"),d(" type the password in some plain text editor, and copy-paste it into FileMaker's password dialog. ")],-1)),ht=p(()=>s("br",null,null,-1)),wt=p(()=>s("input",{type:"checkbox"},null,-1)),gt=p(()=>s("p",null," After making changes, FileMaker will ask you to input your new credentials ",-1)),St=p(()=>s("br",null,null,-1)),bt=p(()=>s("input",{type:"checkbox"},null,-1)),kt=p(()=>s("p",null," Make sure to store the credentials in a safe place, if you loose the credentials, you won't be able to access the file anymore. ",-1)),Vt=p(()=>s("p",null,[d(" If you decide to store the credentials electronically, don't use consumer-oriented password managers like 1Password, opt for enterprise grade solutions like "),s("a",{href:"https://azure.microsoft.com/en-us/products/key-vault",target:"_blank"},[s("b",null,"Azure Key Vault"),s("i",{class:"material-icons"},"open_in_new")])],-1)),Ct=p(()=>s("br",null,null,-1)),xt=p(()=>s("input",{type:"checkbox"},null,-1)),Mt=p(()=>s("p",null," Register this action in the Activity, so in case of need access to backups files, you can track which credentials were used in each backup. ",-1)),At=x({__name:"ChangeAdminCredentialsCard",setup(i){const t=M(),g=()=>{t.cards=[C(ie),C(de)]},a=[{title:"Admin and Guest Accounts",url:"https://help.claris.com/en/pro-help/content/about-the-admin-and-guest-accounts.html"},{title:"Creating and editing account access",url:"https://help.claris.com/en/pro-help/content/creating-editing-accounts.html"},{title:"Editing FileMaker file accounts",url:"https://help.claris.com/en/pro-help/content/editing-filemaker-file-accounts.html"}],o=q(["Don't use the default Admin name","Don't repeat the same password in different files","Use strong passwords","Keep the credentials in a safe place","Don't share the credentials with anyone","Don't use the Admin Full Access account for regular use","Don't store the credentials in the OS keychain"]);return(S,f)=>(r(),u(b,{class:"bg-green-3",style:{width:"calc(100vw - 340px)"}},{default:n(()=>[e($e,{class:"bg-green"},{default:n(()=>[e(m,{class:"q-px-md",dense:"",icon:"sym_o_arrow_back",label:"Back",color:"green-8","text-color":"white",onClick:g}),e(Ne,{class:"text-white"},{default:n(()=>[e(oe,{icon:"sym_o_school"}),d("How to change Admin Credentials")]),_:1})]),_:1}),s("div",He,[e(b,{style:{width:"44%"}},{default:n(()=>[e(v,null,{default:n(()=>[e(y,{class:"text-h2"},{default:n(()=>[d("Guidelines to manage Credentials")]),_:1})]),_:1}),e(G,{rounded:"",class:"bg-blue text-white"},{default:n(()=>[s("ul",null,[(r(!0),B(T,null,R(o.value,(h,A)=>(r(),B("li",{key:A,innerHTML:h},null,8,je))),128))])]),_:1})]),_:1}),e(b,{style:{width:"44%"}},{default:n(()=>[e(v,null,{default:n(()=>[e(y,{class:"text-h2"},{default:n(()=>[d("External References")]),_:1})]),_:1}),e(_,null,{default:n(()=>[(r(),B(T,null,R(a,(h,A)=>e(K,{key:A},{default:n(()=>[e(v,{clickable:"",href:h.url,target:"_blank"},{default:n(()=>[d(Z(h.title),1)]),_:2},1032,["href"])]),_:2},1024)),64))]),_:1})]),_:1})]),e(b,null,{default:n(()=>[e(_,null,{default:n(()=>[e(y,{class:"text-h2"},{default:n(()=>[d("Steps to Change the Credentials")]),_:1})]),_:1}),e(v,{class:"items-center"},{default:n(()=>[Je,e(y,{header:""},{default:n(()=>[d("Open FileMaker Pro Advanced in your computer")]),_:1})]),_:1}),Xe,e(U),e(v,{class:"items-center"},{default:n(()=>[Ye,e(y,{header:""},{default:n(()=>[d("Select the server where the file is hosted from "),e(I,null,{default:n(()=>[d("File > Hosts")]),_:1}),d(" or via shorcuts pressing "),e(I,null,{default:n(()=>[et,d(" + "),tt,d(" + "),lt]),_:1}),d(" on Mac or "),e(I,null,{default:n(()=>[nt,d(" + "),at,d(" + "),ot]),_:1}),d(" on Windows to open the host dialog ")]),_:1})]),_:1}),e(v,null,{default:n(()=>[d(" Some files are not displayed in the list, if you can't find the file you are looking for, click on the top right icon to manually enter the filename ")]),_:1}),e(v,null,{default:n(()=>[e(O,{src:Ge,style:{"max-width":"512px"}})]),_:1}),st,e(U),e(v,{class:"items-center"},{default:n(()=>[dt,e(y,{header:""},{default:n(()=>[d("Select the file and press "),e(I,null,{default:n(()=>[d("OK")]),_:1}),d(" while maintaining pressed the "),e(I,null,{default:n(()=>[it]),_:1}),d(" key on Mac or the "),e(I,null,{default:n(()=>[rt]),_:1}),d(" key on Windows")]),_:1})]),_:1}),e(v,{class:"items-center"},{default:n(()=>[e(y,null,{default:n(()=>[d(" Enter the "),ut,d(" credentials for the Full Access account and press "),e(I,null,{default:n(()=>[d("Sign in")]),_:1})]),_:1})]),_:1}),e(v,null,{default:n(()=>[e(O,{src:Oe,style:{"max-width":"360px"}})]),_:1}),mt,e(U),e(v,{class:"items-center"},{default:n(()=>[ct,e(y,{header:""},{default:n(()=>[d(" Open the Security dialog from "),e(I,null,{default:n(()=>[d("File > Manage > Security")]),_:1})]),_:1})]),_:1}),e(v,null,{default:n(()=>[e(y,null,{default:n(()=>[_t,s("p",null,[e(P,{name:"sym_o_warning",color:"red",size:"xs"}),d(" Account names are NOT case sensitive, but passwords are. ")]),ft,e(P,{name:"sym_o_edit"})]),_:1})]),_:1}),e(v,null,{default:n(()=>[e(O,{src:Re,style:{"max-width":"512px"}})]),_:1}),pt,e(U),e(v,{class:"items-center"},{default:n(()=>[yt,e(y,{header:""},{default:n(()=>[d("Set the new password")]),_:1})]),_:1}),e(v,null,{default:n(()=>[e(y,null,{default:n(()=>[vt,s("p",null,[d("Press "),e(I,null,{default:n(()=>[d("Set password")]),_:1}),d(" to save the changes")])]),_:1})]),_:1}),e(v,null,{default:n(()=>[e(O,{src:ze,style:{"max-width":"360px"}})]),_:1}),ht,e(U),e(v,{class:"items-center"},{default:n(()=>[wt,e(y,{header:""},{default:n(()=>[d("Confirm the changes")]),_:1})]),_:1}),e(v,null,{default:n(()=>[e(y,null,{default:n(()=>[gt,s("p",null,[d(" Manually type the Account name and the password and press "),e(I,null,{default:n(()=>[d("Verify")]),_:1}),d(" to save the changes ")])]),_:1})]),_:1}),e(v,null,{default:n(()=>[e(O,{src:Le,style:{"max-width":"360px"}})]),_:1}),St,e(U),e(v,{class:"items-center"},{default:n(()=>[bt,e(y,{header:""},{default:n(()=>[d("Store the Credentials in a safe place")]),_:1})]),_:1}),e(v,null,{default:n(()=>[e(y,null,{default:n(()=>[kt,Vt]),_:1})]),_:1}),Ct,e(U),e(v,{class:"items-center"},{default:n(()=>[xt,e(y,{header:""},{default:n(()=>[d("Record the Activity")]),_:1})]),_:1}),e(v,null,{default:n(()=>[e(y,null,{default:n(()=>[Mt]),_:1})]),_:1}),e(v,null,{default:n(()=>[e(O,{src:Fe,style:{"max-width":"360px"}})]),_:1})]),_:1})]),_:1}))}});var Nt=j(At,[["__scopeId","data-v-33855d2a"]]);const $t=s("div",{class:"text-h6"},"Admin [Full Access]",-1),It=s("b",null,"local",-1),Bt=s("b",null,"Admin",-1),ie=x({__name:"AdminFullAccessCard",setup(i){const t=M(),g=()=>{t.cards=[C(Nt)]};return(a,o)=>(r(),u(b,{style:{width:"26rem"}},{default:n(()=>[e(_,null,{default:n(()=>[e(N,null,{default:n(()=>[$t]),_:1}),e(y,{header:""},{default:n(()=>[d(" This is the mandatory Full Access account that each file needs to have, is a "),It,d(" account that is used only in some exceptional circustances to manage the file settings, backups, deployments, etc.")]),_:1}),e(y,{header:""},{default:n(()=>[d(" The default name for this account in each file is "),Bt,d(", the actual name and password is not listed in this section or stored in the solution for security purposes, those credentials has to be keept in a safe place.")]),_:1}),e(G,{rounded:"",class:"bg-red-6 text-white"},{avatar:n(()=>[e(P,{name:"sym_o_warning",size:"sm"})]),default:n(()=>[d(" If you loose the Admin Full Access credentials, you won't be able to access the file anymore. ")]),_:1})]),_:1}),e(_,null,{default:n(()=>[e(G,{rounded:"",class:"bg-orange text-white"},{avatar:n(()=>[e(P,{name:"sym_o_warning",size:"sm"})]),default:n(()=>[d(" If you update the credentials, keep in mind the old backups will maintain the old credentials ")]),_:1})]),_:1}),e(_,null,{default:n(()=>[e(Q,null,{default:n(()=>[e(m,{onClick:g,icon:"sym_o_school",label:"Learn how to change Admin Credentials",color:"green"})]),_:1})]),_:1})]),_:1}))}}),Pt=s("div",{class:"text-h6"},"Smartsheet",-1),Dt=s("h5",null," Smartsheet Token needed to perform some operations on the Smartsheet API ",-1),Ut=x({__name:"SmartsheetCard",setup(i){const t=M();return(g,a)=>(r(),u(b,{style:{width:"24rem"}},{default:n(()=>[e(_,null,{default:n(()=>[e(N,null,{default:n(()=>[Pt,e($),l(t).editMode.fieldName!=="smartsheet"?(r(),u(m,{key:0,icon:"sym_o_edit",dense:"",onClick:a[0]||(a[0]=o=>l(t).enterEditMode("smartsheet"))})):(r(),u(m,{key:1,icon:"sym_o_close",dense:"",onClick:a[1]||(a[1]=o=>l(t).cancelEditMode("smartsheet"))})),k(e(m,{icon:"sym_o_save",dense:"",onClick:a[2]||(a[2]=o=>l(t).saveSettings("smartsheet"))},null,512),[[V,l(t).showSaveButtonOn==="smartsheet"]])]),_:1}),Dt]),_:1}),e(_,null,{default:n(()=>[e(c,{modelValue:l(t).smartsheet,"onUpdate:modelValue":a[3]||(a[3]=o=>l(t).smartsheet=o),type:l(t).editMode.fieldName==="smartsheet"?"text":"password",label:"Token",readonly:l(t).editMode.fieldName!=="smartsheet"},null,8,["modelValue","type","readonly"])]),_:1})]),_:1}))}}),Et=s("div",{class:"text-h6"},"SendGrid",-1),Qt=x({__name:"SendGridCard",setup(i){const t=M();return(g,a)=>(r(),u(b,{style:{width:"32rem"}},{default:n(()=>[e(_,null,{default:n(()=>[e(N,null,{default:n(()=>[Et,e($),l(t).editMode.fieldName!=="sendGrid"?(r(),u(m,{key:0,icon:"sym_o_edit",dense:"",onClick:a[0]||(a[0]=o=>l(t).enterEditMode("sendGrid"))})):(r(),u(m,{key:1,icon:"sym_o_close",dense:"",onClick:a[1]||(a[1]=o=>l(t).cancelEditMode("sendGrid"))})),k(e(m,{icon:"sym_o_save",dense:"",onClick:a[2]||(a[2]=o=>l(t).saveSettings("sendGrid"))},null,512),[[V,l(t).showSaveButtonOn==="sendGrid"]])]),_:1})]),_:1}),e(_,null,{default:n(()=>[e(c,{modelValue:l(t).sendGrid.endpoint,"onUpdate:modelValue":a[3]||(a[3]=o=>l(t).sendGrid.endpoint=o),type:"text",label:"Endpoint",readonly:l(t).editMode.fieldName!=="sendGrid"},null,8,["modelValue","readonly"]),e(c,{modelValue:l(t).sendGrid.apiKey,"onUpdate:modelValue":a[4]||(a[4]=o=>l(t).sendGrid.apiKey=o),type:l(t).editMode.fieldName==="sendGrid"?"text":"password",label:"API Key",readonly:l(t).editMode.fieldName!=="sendGrid"},null,8,["modelValue","type","readonly"])]),_:1})]),_:1}))}}),Tt=s("div",{class:"text-h6"},"MonkeyBreadSoftware",-1),qt=s("div",{class:"text-h5"},"Server",-1),Gt=s("br",null,null,-1),Ot=s("div",{class:"text-h5"},"Client",-1),Rt=x({__name:"MonkeyBreadSoftwareCard",setup(i){const t=M();return(g,a)=>(r(),u(b,{style:{width:"32rem"}},{default:n(()=>[e(_,null,{default:n(()=>[e(N,null,{default:n(()=>[Tt,e($),l(t).editMode.fieldName!=="monkeyBreadSoftware"?(r(),u(m,{key:0,icon:"sym_o_edit",dense:"",onClick:a[0]||(a[0]=o=>l(t).enterEditMode("monkeyBreadSoftware"))})):(r(),u(m,{key:1,icon:"sym_o_close",dense:"",onClick:a[1]||(a[1]=o=>l(t).cancelEditMode("monkeyBreadSoftware"))})),k(e(m,{icon:"sym_o_save",dense:"",onClick:a[2]||(a[2]=o=>l(t).saveSettings("monkeyBreadSoftware"))},null,512),[[V,l(t).showSaveButtonOn==="monkeyBreadSoftware"]])]),_:1})]),_:1}),e(_,null,{default:n(()=>[e(b,null,{default:n(()=>[qt,e(c,{modelValue:l(t).monkeyBreadSoftware.server.licenseeName,"onUpdate:modelValue":a[3]||(a[3]=o=>l(t).monkeyBreadSoftware.server.licenseeName=o),label:"Licensee Name",readonly:l(t).editMode.fieldName!=="monkeyBreadSoftware"},null,8,["modelValue","readonly"]),e(c,{modelValue:l(t).monkeyBreadSoftware.server.component,"onUpdate:modelValue":a[4]||(a[4]=o=>l(t).monkeyBreadSoftware.server.component=o),label:"Component",readonly:l(t).editMode.fieldName!=="monkeyBreadSoftware"},null,8,["modelValue","readonly"]),e(c,{modelValue:l(t).monkeyBreadSoftware.server.licenseType,"onUpdate:modelValue":a[5]||(a[5]=o=>l(t).monkeyBreadSoftware.server.licenseType=o),label:"License Type",readonly:l(t).editMode.fieldName!=="monkeyBreadSoftware"},null,8,["modelValue","readonly"]),e(c,{modelValue:l(t).monkeyBreadSoftware.server.expiration,"onUpdate:modelValue":a[6]||(a[6]=o=>l(t).monkeyBreadSoftware.server.expiration=o),label:"Expiration",readonly:l(t).editMode.fieldName!=="monkeyBreadSoftware"},null,8,["modelValue","readonly"]),e(c,{modelValue:l(t).monkeyBreadSoftware.server.serialNumber,"onUpdate:modelValue":a[7]||(a[7]=o=>l(t).monkeyBreadSoftware.server.serialNumber=o),type:l(t).editMode.fieldName==="monkeyBreadSoftware"?"text":"password",label:"Serial Number",readonly:l(t).editMode.fieldName!=="monkeyBreadSoftware"},null,8,["modelValue","type","readonly"])]),_:1}),Gt,e(b,null,{default:n(()=>[Ot,e(c,{modelValue:l(t).monkeyBreadSoftware.client.licenseeName,"onUpdate:modelValue":a[8]||(a[8]=o=>l(t).monkeyBreadSoftware.client.licenseeName=o),label:"Licensee Name",readonly:l(t).editMode.fieldName!=="monkeyBreadSoftware"},null,8,["modelValue","readonly"]),e(c,{modelValue:l(t).monkeyBreadSoftware.client.component,"onUpdate:modelValue":a[9]||(a[9]=o=>l(t).monkeyBreadSoftware.client.component=o),label:"Component",readonly:l(t).editMode.fieldName!=="monkeyBreadSoftware"},null,8,["modelValue","readonly"]),e(c,{modelValue:l(t).monkeyBreadSoftware.client.licenseType,"onUpdate:modelValue":a[10]||(a[10]=o=>l(t).monkeyBreadSoftware.client.licenseType=o),label:"License Type",readonly:l(t).editMode.fieldName!=="monkeyBreadSoftware"},null,8,["modelValue","readonly"]),e(c,{modelValue:l(t).monkeyBreadSoftware.client.expiration,"onUpdate:modelValue":a[11]||(a[11]=o=>l(t).monkeyBreadSoftware.client.expiration=o),label:"Expiration",readonly:l(t).editMode.fieldName!=="monkeyBreadSoftware"},null,8,["modelValue","readonly"]),e(c,{modelValue:l(t).monkeyBreadSoftware.client.serialNumber,"onUpdate:modelValue":a[12]||(a[12]=o=>l(t).monkeyBreadSoftware.client.serialNumber=o),type:l(t).editMode.fieldName==="monkeyBreadSoftware"?"text":"password",label:"Serial Number",readonly:l(t).editMode.fieldName!=="monkeyBreadSoftware"},null,8,["modelValue","type","readonly"])]),_:1})]),_:1})]),_:1}))}}),zt=s("div",{class:"text-h6"},"360Works",-1),Lt=x({__name:"ThreeSixtyWorksCard",setup(i){const t=M();return(g,a)=>(r(),u(b,{style:{width:"24rem"}},{default:n(()=>[e(_,null,{default:n(()=>[e(N,null,{default:n(()=>[zt,e($),l(t).editMode.fieldName!=="threeSixtyWorks"?(r(),u(m,{key:0,icon:"sym_o_edit",dense:"",onClick:a[0]||(a[0]=o=>l(t).enterEditMode("threeSixtyWorks"))})):(r(),u(m,{key:1,icon:"sym_o_close",dense:"",onClick:a[1]||(a[1]=o=>l(t).cancelEditMode("threeSixtyWorks"))})),k(e(m,{icon:"sym_o_save",dense:"",onClick:a[2]||(a[2]=o=>l(t).saveSettings("threeSixtyWorks"))},null,512),[[V,l(t).showSaveButtonOn==="threeSixtyWorks"]])]),_:1})]),_:1}),e(_,null,{default:n(()=>[e(c,{modelValue:l(t).threeSixtyWorks,"onUpdate:modelValue":a[3]||(a[3]=o=>l(t).threeSixtyWorks=o),type:l(t).editMode.fieldName==="threeSixtyWorks"?"text":"password",label:"Token",readonly:l(t).editMode.fieldName!=="threeSixtyWorks"},null,8,["modelValue","type","readonly"])]),_:1})]),_:1}))}}),Ft=s("div",{class:"text-h6"},"Reports Web Server",-1),Wt=s("div",{class:"text-h6"},"Admin Web Server",-1),Zt=x({__name:"WebServersCard",setup(i){const t=M();return(g,a)=>(r(),B(T,null,[e(b,{style:{width:"32rem"}},{default:n(()=>[e(_,null,{default:n(()=>[e(N,null,{default:n(()=>[Ft,e($),l(t).editMode.fieldName!=="webServerReports"?(r(),u(m,{key:0,icon:"sym_o_edit",dense:"",onClick:a[0]||(a[0]=o=>l(t).enterEditMode("webServerReports"))})):(r(),u(m,{key:1,icon:"sym_o_close",dense:"",onClick:a[1]||(a[1]=o=>l(t).cancelEditMode("webServerReports"))})),k(e(m,{icon:"sym_o_save",dense:"",onClick:a[2]||(a[2]=o=>l(t).saveSettings("webServerReports"))},null,512),[[V,l(t).showSaveButtonOn==="webServerReports"]])]),_:1})]),_:1}),e(_,null,{default:n(()=>[e(c,{modelValue:l(t).webServerReports,"onUpdate:modelValue":a[3]||(a[3]=o=>l(t).webServerReports=o),label:"URL",rules:[o=>!!o&&/^(ftp|http|https):\/\/[^ ]+$/.test(o)||"Invalid URL"],readonly:l(t).editMode.fieldName!=="webServerReports"},null,8,["modelValue","rules","readonly"])]),_:1})]),_:1}),e(b,{style:{width:"32rem"}},{default:n(()=>[e(_,null,{default:n(()=>[e(N,null,{default:n(()=>[Wt,e($),l(t).editMode.fieldName!=="webServerAdmin"?(r(),u(m,{key:0,icon:"sym_o_edit",dense:"",onClick:a[4]||(a[4]=o=>l(t).enterEditMode("webServerAdmin"))})):(r(),u(m,{key:1,icon:"sym_o_close",dense:"",onClick:a[5]||(a[5]=o=>l(t).cancelEditMode("webServerAdmin"))})),k(e(m,{icon:"sym_o_save",dense:"",onClick:a[6]||(a[6]=o=>l(t).saveSettings("webServerAdmin"))},null,512),[[V,l(t).showSaveButtonOn==="webServerAdmin"]])]),_:1})]),_:1}),e(_,null,{default:n(()=>[e(c,{modelValue:l(t).webServerAdmin,"onUpdate:modelValue":a[7]||(a[7]=o=>l(t).webServerAdmin=o),label:"URL",rules:[o=>!!o&&/^(ftp|http|https):\/\/[^ ]+$/.test(o)||"Invalid URL"],readonly:l(t).editMode.fieldName!=="webServerAdmin"},null,8,["modelValue","rules","readonly"])]),_:1})]),_:1})],64))}}),Kt=s("div",{class:"text-h6"},"Contact Data",-1),Ht=x({__name:"ContactDataCard",setup(i){const t=M();return(g,a)=>(r(),u(b,{style:{width:"24rem"}},{default:n(()=>[e(_,null,{default:n(()=>[e(N,null,{default:n(()=>[Kt,e($),l(t).editMode.fieldName!=="contactData"?(r(),u(m,{key:0,icon:"sym_o_edit",dense:"",onClick:a[0]||(a[0]=o=>l(t).enterEditMode("contactData"))})):(r(),u(m,{key:1,icon:"sym_o_close",dense:"",onClick:a[1]||(a[1]=o=>l(t).cancelEditMode("contactData"))})),k(e(m,{icon:"sym_o_save",dense:"",onClick:a[2]||(a[2]=o=>l(t).saveSettings("contactData"))},null,512),[[V,l(t).showSaveButtonOn==="contactData"]])]),_:1})]),_:1}),e(_,null,{default:n(()=>[e(_,null,{default:n(()=>[e(y,{class:"text-h6"},{default:n(()=>[d("From")]),_:1}),e(c,{modelValue:l(t).contactData.fromName,"onUpdate:modelValue":a[3]||(a[3]=o=>l(t).contactData.fromName=o),label:"Name",readonly:l(t).editMode.fieldName!=="contactData"},null,8,["modelValue","readonly"]),e(c,{modelValue:l(t).contactData.fromEmail,"onUpdate:modelValue":a[4]||(a[4]=o=>l(t).contactData.fromEmail=o),label:"Email",type:"email","lazy-rules":"",rules:[o=>!!o&&/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(o)||"Invalid email"],readonly:l(t).editMode.fieldName!=="contactData"},null,8,["modelValue","rules","readonly"])]),_:1}),e(_,null,{default:n(()=>[e(y,{class:"text-h6"},{default:n(()=>[d("To")]),_:1}),e(c,{modelValue:l(t).contactData.toName,"onUpdate:modelValue":a[5]||(a[5]=o=>l(t).contactData.toName=o),label:"Name",readonly:l(t).editMode.fieldName!=="contactData"},null,8,["modelValue","readonly"]),e(c,{modelValue:l(t).contactData.toEmail,"onUpdate:modelValue":a[6]||(a[6]=o=>l(t).contactData.toEmail=o),label:"Email",type:"email","lazy-rules":"",rules:[o=>!!o&&/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(o)||"Invalid email"],readonly:l(t).editMode.fieldName!=="contactData"},null,8,["modelValue","rules","readonly"])]),_:1}),e(_,null,{default:n(()=>[e(y,{class:"text-h6"},{default:n(()=>[d("Carbon Copy")]),_:1}),e(c,{modelValue:l(t).contactData.ccName,"onUpdate:modelValue":a[7]||(a[7]=o=>l(t).contactData.ccName=o),label:"Name",readonly:l(t).editMode.fieldName!=="contactData"},null,8,["modelValue","readonly"]),e(c,{modelValue:l(t).contactData.ccEmail,"onUpdate:modelValue":a[8]||(a[8]=o=>l(t).contactData.ccEmail=o),label:"Email",type:"email","lazy-rules":"",rules:[o=>!!o&&/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(o)||"Invalid email"],readonly:l(t).editMode.fieldName!=="contactData"},null,8,["modelValue","rules","readonly"])]),_:1})]),_:1})]),_:1}))}}),jt=s("div",{class:"text-h6"},"SAP",-1),Jt=x({__name:"SAPCard",setup(i){const t=M();return(g,a)=>(r(),u(b,{style:{width:"40rem"}},{default:n(()=>[e(_,null,{default:n(()=>[e(N,null,{default:n(()=>[jt,e($),l(t).editMode.fieldName!=="sap"?(r(),u(m,{key:0,icon:"sym_o_edit",dense:"",onClick:a[0]||(a[0]=o=>l(t).enterEditMode("sap"))})):(r(),u(m,{key:1,icon:"sym_o_close",dense:"",onClick:a[1]||(a[1]=o=>l(t).cancelEditMode("sap"))})),k(e(m,{icon:"sym_o_save",dense:"",onClick:a[2]||(a[2]=o=>l(t).saveSettings("sap"))},null,512),[[V,l(t).showSaveButtonOn==="sap"]])]),_:1})]),_:1}),e(_,null,{default:n(()=>[e(c,{modelValue:l(t).sap.endpoint,"onUpdate:modelValue":a[3]||(a[3]=o=>l(t).sap.endpoint=o),label:"URL",type:"url",rules:[o=>!!o&&/^(ftp|http|https):\/\/[^ ]+$/.test(o)||"Invalid URL"],readonly:l(t).editMode.fieldName!=="sap"},null,8,["modelValue","rules","readonly"]),e(c,{modelValue:l(t).sap.username,"onUpdate:modelValue":a[4]||(a[4]=o=>l(t).sap.username=o),label:"Username",type:"text",readonly:l(t).editMode.fieldName!=="sap"},null,8,["modelValue","readonly"]),e(c,{modelValue:l(t).sap.password,"onUpdate:modelValue":a[5]||(a[5]=o=>l(t).sap.password=o),label:"Password",type:l(t).editMode.fieldName==="sap"?"text":"password",readonly:l(t).editMode.fieldName!=="sap"},null,8,["modelValue","type","readonly"])]),_:1})]),_:1}))}}),Xt=s("div",{class:"text-h6"},"SQL Server (ODBC)",-1),Yt=x({__name:"ODBCCard",setup(i){const t=M();return(g,a)=>(r(),u(b,{style:{width:"32rem"}},{default:n(()=>[e(_,null,{default:n(()=>[e(N,null,{default:n(()=>[Xt,e($),l(t).editMode.fieldName!=="sqlServer"?(r(),u(m,{key:0,icon:"sym_o_edit",dense:"",onClick:a[0]||(a[0]=o=>l(t).enterEditMode("sqlServer"))})):(r(),u(m,{key:1,icon:"sym_o_close",dense:"",onClick:a[1]||(a[1]=o=>l(t).cancelEditMode("sqlServer"))})),k(e(m,{icon:"sym_o_save",dense:"",onClick:a[2]||(a[2]=o=>l(t).saveSettings("sqlServer"))},null,512),[[V,l(t).showSaveButtonOn==="sqlServer"]])]),_:1})]),_:1}),e(_,null,{default:n(()=>[e(c,{modelValue:l(t).sqlServer.filePath,"onUpdate:modelValue":a[3]||(a[3]=o=>l(t).sqlServer.filePath=o),label:"File Path",readonly:l(t).editMode.fieldName!=="sqlServer"},null,8,["modelValue","readonly"]),e(U),e(c,{modelValue:l(t).sqlServer.server,"onUpdate:modelValue":a[4]||(a[4]=o=>l(t).sqlServer.server=o),label:"Server",readonly:l(t).editMode.fieldName!=="sqlServer"},null,8,["modelValue","readonly"]),e(c,{modelValue:l(t).sqlServer.dsnName,"onUpdate:modelValue":a[5]||(a[5]=o=>l(t).sqlServer.dsnName=o),label:"DSN Name",readonly:l(t).editMode.fieldName!=="sqlServer"},null,8,["modelValue","readonly"]),e(c,{modelValue:l(t).sqlServer.username,"onUpdate:modelValue":a[6]||(a[6]=o=>l(t).sqlServer.username=o),label:"Username",readonly:l(t).editMode.fieldName!=="sqlServer"},null,8,["modelValue","readonly"]),e(c,{modelValue:l(t).sqlServer.password,"onUpdate:modelValue":a[7]||(a[7]=o=>l(t).sqlServer.password=o),label:"Password",type:l(t).editMode.fieldName==="sqlServer"?"text":"password",readonly:l(t).editMode.fieldName!=="sqlServer"},null,8,["modelValue","type","readonly"])]),_:1})]),_:1}))}}),el=s("div",{class:"text-h6"},"Web API",-1),tl=s("h5",null," Web API is used in some FileMaker scripts to comunicate with the Web via its API. ",-1),ll=x({__name:"WebAPICard",setup(i){const t=M();return(g,a)=>(r(),u(b,{style:{width:"32rem"}},{default:n(()=>[e(_,null,{default:n(()=>[e(N,null,{default:n(()=>[el,e($),l(t).editMode.fieldName!=="webAPI"?(r(),u(m,{key:0,icon:"sym_o_edit",dense:"",onClick:a[0]||(a[0]=o=>l(t).enterEditMode("webAPI"))})):(r(),u(m,{key:1,icon:"sym_o_close",dense:"",onClick:a[1]||(a[1]=o=>l(t).cancelEditMode("webAPI"))})),k(e(m,{icon:"sym_o_save",dense:"",onClick:a[2]||(a[2]=o=>l(t).saveSettings("webAPI"))},null,512),[[V,l(t).showSaveButtonOn==="webAPI"]])]),_:1}),tl]),_:1}),k(e(_,null,{default:n(()=>[e(G,{rounded:"",class:"bg-orange text-white"},{avatar:n(()=>[e(P,{name:"sym_o_warning"})]),default:n(()=>[d(" This credentials has to be provided by the Web Admin. ")]),_:1})]),_:1},512),[[V,l(t).showSaveButtonOn==="webAPI"]]),e(_,null,{default:n(()=>[e(c,{modelValue:l(t).webAPI.endpoint,"onUpdate:modelValue":a[3]||(a[3]=o=>l(t).webAPI.endpoint=o),readonly:l(t).editMode.fieldName!=="webAPI",label:"Endpoint"},null,8,["modelValue","readonly"]),e(c,{modelValue:l(t).webAPI.grantType,"onUpdate:modelValue":a[4]||(a[4]=o=>l(t).webAPI.grantType=o),readonly:l(t).editMode.fieldName!=="webAPI",label:"Grant Type"},null,8,["modelValue","readonly"]),e(c,{modelValue:l(t).webAPI.clientId,"onUpdate:modelValue":a[5]||(a[5]=o=>l(t).webAPI.clientId=o),readonly:l(t).editMode.fieldName!=="webAPI",label:"Client ID"},null,8,["modelValue","readonly"]),e(c,{modelValue:l(t).webAPI.clientSecret,"onUpdate:modelValue":a[6]||(a[6]=o=>l(t).webAPI.clientSecret=o),type:l(t).editMode.fieldName==="webAPI"?"text":"password",readonly:l(t).editMode.fieldName!=="webAPI",label:"Client Secret"},null,8,["modelValue","type","readonly"])]),_:1})]),_:1}))}});const nl=x({__name:"SettingsMenuDrawer",setup(i){const t=M(),g=[{label:"Groups",icon:"sym_o_groups"},{label:"Local Accounts",icon:"sym_o_manage_accounts"},{label:"Credentials",icon:"sym_o_badge"},{label:"Plugins",icon:"sym_o_extension"},{label:"Configurations",icon:"sym_o_settings"},{label:"Integrations",icon:"sym_o_integration_instructions"}],a=o=>{switch(t.cards=[],t.selectedMenuElement=o,o){case"Groups":t.cards.push(C(se));break;case"Local Accounts":t.cards.push(C(ie),C(de));break;case"Credentials":t.cards.push(C(ll),C(Jt),C(Yt));break;case"Plugins":t.cards.push(C(Rt),C(Lt));break;case"Configurations":t.cards.push(C(Zt),C(Ht));break;case"Integrations":t.cards.push(C(Ut),C(Qt));break}};return(o,S)=>(r(),u(Me,{"model-value":"",width:320,side:"left"},{default:n(()=>[e(b,null,{default:n(()=>[e(_,null,{default:n(()=>[e(K,{class:"q-mb-md"},{default:n(()=>[(r(),B(T,null,R(g,f=>e(v,{key:f.label,label:f.label,icon:f.icon,clickable:"",onClick:h=>a(f.label),active:l(t).selectedMenuElement===f.label,"active-class":"menu-active"},{default:n(()=>[e(Q,{avatar:""},{default:n(()=>[e(P,{name:f.icon},null,8,["name"])]),_:2},1024),e(Q,null,{default:n(()=>[e(y,{class:"text-h4"},{default:n(()=>[d(Z(f.label),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["label","icon","onClick","active"])),64))]),_:1})]),_:1})]),_:1})]),_:1}))}});var al=j(nl,[["__scopeId","data-v-09f3e706"]]);const kl=x({__name:"SettingsPage",setup(i){const t=M();return Ve(()=>{t.loggedUser.userId||(t.readSettings(),t.cards=[C(se)]),t.toolbar=null}),(g,a)=>(r(),B(T,null,[e(al),e(ve,{class:"row"},{default:n(()=>[(r(!0),B(T,null,R(l(t).cards,(o,S)=>(r(),u(b,{key:S},{default:n(()=>[(r(),u(Ce,null,[(r(),u(xe(o)))],1024))]),_:2},1024))),128))]),_:1})],64))}});export{kl as default};
