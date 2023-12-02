import{Q as b,a as _,b as u,c as i}from"./QCardActions.c476ad17.js";import{Q as z}from"./QPage.a2b5b2cb.js";import{W as K,X as Z,G as V,u as M,J as d,K as r,L as o,_ as T,M as t,P as c,N as l,Y as y,Q as s,T as A,Z as h,$ as P,R as U,a0 as J,a1 as X,V as S,a2 as w,a3 as $,h as I,O as W,y as Y,a4 as N,a5 as j,a6 as H,S as ee}from"./index.9253ad38.js";import{Q as k,a as G,b as D,c as C}from"./QList.91bc2f16.js";import{Q as le}from"./QDrawer.fd2da52c.js";import{Q as g}from"./QSpace.1e9103d6.js";import{g as te,c as ae,Q as ne,a as O,b as R,d as oe}from"./QSeparator.80a45315.js";import{Q as B}from"./QBanner.3913f3ae.js";import"./QBtnGroup.2a648bc8.js";function q(p){if(p===!1)return 0;if(p===!0||p===void 0)return 1;const e=parseInt(p,10);return isNaN(e)?0:e}var L=K({name:"close-popup",beforeMount(p,{value:e}){const v={depth:q(e),handler(a){v.depth!==0&&setTimeout(()=>{const n=te(p);n!==void 0&&ae(n,a,v.depth)})},handlerKey(a){Z(a,13)===!0&&v.handler(a)}};p.__qclosepopup=v,p.addEventListener("click",v.handler),p.addEventListener("keyup",v.handlerKey)},updated(p,{value:e,oldValue:v}){e!==v&&(p.__qclosepopup.depth=q(e))},beforeUnmount(p){const e=p.__qclosepopup;p.removeEventListener("click",e.handler),p.removeEventListener("keyup",e.handlerKey),delete p.__qclosepopup}});const Q=p=>(J("data-v-12b6b4fe"),p=p(),X(),p),de=Q(()=>S("div",{class:"text-h6"},"Groups",-1)),re=Q(()=>S("br",null,null,-1)),se=Q(()=>S("br",null,null,-1)),ie=V({__name:"GroupsListEditor",setup(p){const e=M();return(v,a)=>(d(),r(b,{style:{width:"24rem"}},{default:o(()=>[t(u,null,{default:o(()=>[t(_,null,{default:o(()=>[de,t(g),t(ne,{dense:"",icon:"add"},{default:o(()=>[t(b,{style:{width:"24rem"}},{default:o(()=>[t(u,null,{default:o(()=>[t(k,{class:"text-h5"},{default:o(()=>[c("Create new Group")]),_:1})]),_:1}),t(u,null,{default:o(()=>[t(k,{class:"text-body1"},{default:o(()=>[c("A new Group will be created with the following name.")]),_:1}),t(i,{modelValue:l(e).groupName,"onUpdate:modelValue":a[0]||(a[0]=n=>l(e).groupName=n),label:"Group Name",clearable:""},null,8,["modelValue"])]),_:1}),t(_,{align:"right"},{default:o(()=>[y(t(s,{dense:"",label:"Cancel"},null,512),[[L]]),y(t(s,{dense:"",label:"Create Group",color:"primary",disable:!l(e).groupName,onClick:a[1]||(a[1]=n=>l(e).addGroup())},null,8,["disable"]),[[L]])]),_:1})]),_:1})]),_:1}),l(e).editMode.fieldName!=="groups"?(d(),r(s,{key:0,dense:"",icon:"edit",onClick:a[2]||(a[2]=n=>l(e).enterEditMode("groups"))})):(d(),r(s,{key:1,dense:"",icon:"close",onClick:a[3]||(a[3]=n=>l(e).cancelEditMode("groups"))}))]),_:1})]),_:1}),t(G,null,{default:o(()=>[(d(!0),A(P,null,h(l(e).groups,(n,x)=>(d(),r(D,{key:x,onClick:m=>l(e).selectedGroup={...n,id:x},class:"bg-grey-2 menu"},{default:o(()=>[l(e).editMode.fieldName==="groups"?(d(),r(C,{key:0},{default:o(()=>[t(i,{modelValue:n.name,"onUpdate:modelValue":m=>n.name=m,label:"Group Name"},null,8,["modelValue","onUpdate:modelValue"]),re,t(s,{icon:"save",label:"Rename",dense:"",color:"primary",onClick:m=>l(e).renameGroup(n.name)},null,8,["onClick"]),se,t(s,{outline:"",icon:"delete_forever",color:"red",label:"Delete",dense:"",onClick:m=>l(e).removeGroup(x,n.name)},null,8,["onClick"])]),_:2},1024)):(d(),r(C,{key:1},{default:o(()=>[t(k,{class:"text-h5"},{default:o(()=>[c(U(n.name),1)]),_:2},1024)]),_:2},1024))]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1}))}});var F=T(ie,[["__scopeId","data-v-12b6b4fe"]]);const ue=S("div",{class:"text-h6"},"Web API",-1),me=S("h5",null," Web API is used in some FileMaker scripts to comunicate with the Web via its API. ",-1),pe=V({__name:"WebAPICard",setup(p){const e=M();return(v,a)=>(d(),r(b,{style:{width:"32rem"}},{default:o(()=>[t(u,null,{default:o(()=>[t(_,null,{default:o(()=>[ue,t(g),l(e).editMode.fieldName!=="webAPI"?(d(),r(s,{key:0,icon:"edit",dense:"",onClick:a[0]||(a[0]=n=>l(e).enterEditMode("webAPI"))})):(d(),r(s,{key:1,icon:"close",dense:"",onClick:a[1]||(a[1]=n=>l(e).cancelEditMode("webAPI"))})),y(t(s,{icon:"save",dense:"",onClick:a[2]||(a[2]=n=>l(e).saveSettings("webAPI"))},null,512),[[w,l(e).showSaveButtonOn==="webAPI"]])]),_:1}),me]),_:1}),y(t(u,null,{default:o(()=>[t(B,{rounded:"",class:"bg-orange text-white"},{avatar:o(()=>[t($,{name:"warning"})]),default:o(()=>[c(" This credentials has to be provided by the Web Admin. ")]),_:1})]),_:1},512),[[w,l(e).showSaveButtonOn==="webAPI"]]),t(u,null,{default:o(()=>[t(i,{modelValue:l(e).webAPI.endpoint,"onUpdate:modelValue":a[3]||(a[3]=n=>l(e).webAPI.endpoint=n),readonly:l(e).editMode.fieldName!=="webAPI",label:"Endpoint"},null,8,["modelValue","readonly"]),t(i,{modelValue:l(e).webAPI.grantType,"onUpdate:modelValue":a[4]||(a[4]=n=>l(e).webAPI.grantType=n),readonly:l(e).editMode.fieldName!=="webAPI",label:"Grant Type"},null,8,["modelValue","readonly"]),t(i,{modelValue:l(e).webAPI.clientId,"onUpdate:modelValue":a[5]||(a[5]=n=>l(e).webAPI.clientId=n),readonly:l(e).editMode.fieldName!=="webAPI",label:"Client ID"},null,8,["modelValue","readonly"]),t(i,{modelValue:l(e).webAPI.clientSecret,"onUpdate:modelValue":a[6]||(a[6]=n=>l(e).webAPI.clientSecret=n),type:l(e).editMode.fieldName==="webAPI"?"text":"password",readonly:l(e).editMode.fieldName!=="webAPI",label:"Client Secret"},null,8,["modelValue","type","readonly"])]),_:1})]),_:1}))}}),fe=S("div",{class:"text-h6"},"Service DAPI",-1),ve=S("b",null,"local",-1),ce=S("br",null,null,-1),ye=V({__name:"ServiceDAPICard",setup(p){const e=M(),v=I(()=>e.editMode.fieldName==="serviceDAPI"),a=I(()=>e.editMode.fieldName!=="serviceDAPI"),n=I(()=>e.showSaveButtonOn==="serviceDAPI");return(x,m)=>(d(),r(b,{style:{width:"32rem"}},{default:o(()=>[t(u,null,{default:o(()=>[t(_,null,{default:o(()=>[fe,t(g),a.value?(d(),r(s,{key:0,icon:"edit",dense:"",onClick:m[0]||(m[0]=f=>l(e).enterEditMode("serviceDAPI"))})):(d(),r(s,{key:1,icon:"close",dense:"",onClick:m[1]||(m[1]=f=>l(e).cancelEditMode("serviceDAPI"))})),y(t(s,{icon:"save",dense:"",onClick:m[2]||(m[2]=f=>l(e).saveLocalAccount("serviceDAPI"))},null,512),[[w,n.value]])]),_:1}),t(k,{header:""},{default:o(()=>[c(" ServiceDAPI is a "),ve,c(" account that is used for the web to communicate to FileMaker via its Data API")]),_:1})]),_:1}),y(t(u,null,{default:o(()=>[t(B,{rounded:"",class:"bg-orange text-white"},{avatar:o(()=>[t($,{name:"warning"})]),default:o(()=>[c(" Notify the Web Admin about this changes. If you change the credentials, they will need to update them in their system. ")]),_:1})]),_:1},512),[[w,l(e).showSaveButtonOn==="serviceDAPI"]]),t(u,null,{default:o(()=>[t(i,{modelValue:l(e).serviceDAPI.accountName,"onUpdate:modelValue":m[3]||(m[3]=f=>l(e).serviceDAPI.accountName=f),readonly:a.value,label:"Account Name"},null,8,["modelValue","readonly"]),t(i,{modelValue:l(e).serviceDAPI.password,"onUpdate:modelValue":m[4]||(m[4]=f=>l(e).serviceDAPI.password=f),type:l(e).editMode.fieldName==="serviceDAPI"?"text":"password",readonly:a.value,label:"Password"},null,8,["modelValue","type","readonly"])]),_:1}),t(u,null,{default:o(()=>[t(k,{header:""},{default:o(()=>[c("Privilege Set")]),_:1}),y(t(B,{rounded:"",class:"bg-orange text-white"},{avatar:o(()=>[t($,{name:"warning"})]),default:o(()=>[c(" The Privilege Set Name has to match with the actual name in FileMaker Security. ")]),_:1},512),[[w,v.value]]),t(i,{modelValue:l(e).serviceDAPI.privilegeSet,"onUpdate:modelValue":m[5]||(m[5]=f=>l(e).serviceDAPI.privilegeSet=f),label:"Privilege Set Name",readonly:a.value},null,8,["modelValue","readonly"]),t(k,{caption:""},{default:o(()=>[c("This Privilege Set contains the minimun permissions that the Service DAPI needs in order to perform its duty")]),_:1})]),_:1}),t(u,null,{default:o(()=>[t(C,null,{default:o(()=>[t(k,{class:"text-h6"},{default:o(()=>[c(" Account Files ")]),_:1})]),_:1}),ce,t(C,null,{default:o(()=>[y(t(B,{rounded:"",class:"bg-orange text-white"},{avatar:o(()=>[t($,{name:"warning"})]),default:o(()=>[c(" This FileNames are hardcoded in FileMaker scripts, don't mess with them before contacting the Dev Team. ")]),_:1},512),[[w,l(e).editMode.fieldName==="serviceDAPI"]])]),_:1}),y(t(D,null,{default:o(()=>[t(C,null,{default:o(()=>[t(O,{modelValue:l(e).serviceDAPI.files,"onUpdate:modelValue":m[6]||(m[6]=f=>l(e).serviceDAPI.files=f),options:l(e).fileOptions,multiple:"",label:"Files"},null,8,["modelValue","options"])]),_:1})]),_:1},512),[[w,v.value]]),y(t(G,{dense:""},{default:o(()=>[(d(!0),A(P,null,h(l(e).serviceDAPI.files,(f,E)=>(d(),r(D,{key:E},{default:o(()=>[t(R,{"text-color":"white",color:"blue"},{default:o(()=>[t(W,{size:"sm","text-color":"white",icon:"description",color:"blue"}),c(" "+U(f),1)]),_:2},1024)]),_:2},1024))),128))]),_:1},512),[[w,a.value]])]),_:1})]),_:1}))}}),Se=S("div",{class:"text-h6"},"Service Script",-1),we=S("b",null,"local",-1),be=S("br",null,null,-1),ke=V({__name:"ServiceScriptCard",setup(p){const e=M(),v=I(()=>e.editMode.fieldName==="serviceScript"),a=I(()=>e.editMode.fieldName!=="serviceScript"),n=I(()=>e.showSaveButtonOn==="serviceScript");return(x,m)=>(d(),r(b,{style:{width:"32rem"}},{default:o(()=>[t(u,null,{default:o(()=>[t(_,null,{default:o(()=>[Se,t(g),a.value?(d(),r(s,{key:0,icon:"edit",dense:"",onClick:m[0]||(m[0]=f=>l(e).enterEditMode("serviceScript"))})):(d(),r(s,{key:1,icon:"close",dense:"",onClick:m[1]||(m[1]=f=>l(e).cancelEditMode("serviceScript"))})),y(t(s,{icon:"save",dense:"",onClick:m[2]||(m[2]=f=>l(e).saveLocalAccount("serviceScript"))},null,512),[[w,n.value]])]),_:1}),t(k,{header:""},{default:o(()=>[c(" ServiceScript is a "),we,c(" account that is used internally by some FileMaker scripts ")]),_:1})]),_:1}),t(u,null,{default:o(()=>[t(i,{modelValue:l(e).serviceScript.accountName,"onUpdate:modelValue":m[3]||(m[3]=f=>l(e).serviceScript.accountName=f),readonly:a.value,label:"Account Name"},null,8,["modelValue","readonly"]),t(i,{modelValue:l(e).serviceScript.password,"onUpdate:modelValue":m[4]||(m[4]=f=>l(e).serviceScript.password=f),type:l(e).editMode.fieldName==="serviceScript"?"text":"password",readonly:a.value,label:"Password"},null,8,["modelValue","type","readonly"])]),_:1}),t(u,null,{default:o(()=>[t(k,{header:""},{default:o(()=>[c("Privilege Set")]),_:1}),y(t(B,{rounded:"",class:"bg-orange text-white"},{avatar:o(()=>[t($,{name:"warning"})]),default:o(()=>[c(" The Privilege Set Name has to match with the actual name in FileMaker Security. ")]),_:1},512),[[w,v.value]]),t(i,{modelValue:l(e).serviceScript.privilegeSet,"onUpdate:modelValue":m[5]||(m[5]=f=>l(e).serviceScript.privilegeSet=f),label:"Privilege Set Name",readonly:a.value},null,8,["modelValue","readonly"]),t(k,{caption:""},{default:o(()=>[c("This Privilege Set contains the minimun permissions that the Service Script needs in order to perform its duty")]),_:1})]),_:1}),t(u,null,{default:o(()=>[t(C,null,{default:o(()=>[t(k,{class:"text-h6"},{default:o(()=>[c(" Account Files ")]),_:1})]),_:1}),be,t(C,null,{default:o(()=>[y(t(B,{rounded:"",class:"bg-orange text-white"},{avatar:o(()=>[t($,{name:"warning"})]),default:o(()=>[c(" This FileNames are hardcoded in FileMaker scripts, don't mess with them before contacting the Dev Team. ")]),_:1},512),[[w,v.value]])]),_:1}),y(t(D,null,{default:o(()=>[t(C,null,{default:o(()=>[t(O,{modelValue:l(e).serviceScript.files,"onUpdate:modelValue":m[6]||(m[6]=f=>l(e).serviceScript.files=f),options:l(e).fileOptions,multiple:"",label:"Files"},null,8,["modelValue","options"])]),_:1})]),_:1},512),[[w,v.value]]),y(t(G,{dense:""},{default:o(()=>[(d(!0),A(P,null,h(l(e).serviceScript.files,(f,E)=>(d(),r(D,{key:E},{default:o(()=>[t(R,{"text-color":"white",color:"blue"},{default:o(()=>[t(W,{size:"sm","text-color":"white",icon:"description",color:"blue"}),c(" "+U(f),1)]),_:2},1024)]),_:2},1024))),128))]),_:1},512),[[w,a.value]])]),_:1})]),_:1}))}}),_e=S("div",{class:"text-h6"},"Smartsheet",-1),Ve=S("h5",null," Smartsheet Token needed to perform some operations on the Smartsheet API ",-1),Me=V({__name:"SmartsheetCard",setup(p){const e=M();return(v,a)=>(d(),r(b,{style:{width:"24rem"}},{default:o(()=>[t(u,null,{default:o(()=>[t(_,null,{default:o(()=>[_e,t(g),l(e).editMode.fieldName!=="smartsheet"?(d(),r(s,{key:0,icon:"edit",dense:"",onClick:a[0]||(a[0]=n=>l(e).enterEditMode("smartsheet"))})):(d(),r(s,{key:1,icon:"close",dense:"",onClick:a[1]||(a[1]=n=>l(e).cancelEditMode("smartsheet"))})),y(t(s,{icon:"save",dense:"",onClick:a[2]||(a[2]=n=>l(e).saveSettings("smartsheet"))},null,512),[[w,l(e).showSaveButtonOn==="smartsheet"]])]),_:1}),Ve]),_:1}),t(u,null,{default:o(()=>[t(i,{modelValue:l(e).smartsheet,"onUpdate:modelValue":a[3]||(a[3]=n=>l(e).smartsheet=n),type:l(e).editMode.fieldName==="smartsheet"?"text":"password",label:"Token",readonly:l(e).editMode.fieldName!=="smartsheet"},null,8,["modelValue","type","readonly"])]),_:1})]),_:1}))}}),Ne=S("div",{class:"text-h6"},"MonkeyBreadSoftware",-1),ge=S("div",{class:"text-h5"},"Server",-1),xe=S("br",null,null,-1),Ce=S("div",{class:"text-h5"},"Client",-1),$e=V({__name:"MonkeyBreadSoftwareCard",setup(p){const e=M();return(v,a)=>(d(),r(b,{style:{width:"32rem"}},{default:o(()=>[t(u,null,{default:o(()=>[t(_,null,{default:o(()=>[Ne,t(g),l(e).editMode.fieldName!=="monkeyBreadSoftware"?(d(),r(s,{key:0,icon:"edit",dense:"",onClick:a[0]||(a[0]=n=>l(e).enterEditMode("monkeyBreadSoftware"))})):(d(),r(s,{key:1,icon:"close",dense:"",onClick:a[1]||(a[1]=n=>l(e).cancelEditMode("monkeyBreadSoftware"))})),y(t(s,{icon:"save",dense:"",onClick:a[2]||(a[2]=n=>l(e).saveSettings("monkeyBreadSoftware"))},null,512),[[w,l(e).showSaveButtonOn==="monkeyBreadSoftware"]])]),_:1})]),_:1}),t(u,null,{default:o(()=>[t(b,null,{default:o(()=>[ge,t(i,{modelValue:l(e).monkeyBreadSoftware.server.licenseeName,"onUpdate:modelValue":a[3]||(a[3]=n=>l(e).monkeyBreadSoftware.server.licenseeName=n),label:"Licensee Name",readonly:l(e).editMode.fieldName!=="monkeyBreadSoftware"},null,8,["modelValue","readonly"]),t(i,{modelValue:l(e).monkeyBreadSoftware.server.component,"onUpdate:modelValue":a[4]||(a[4]=n=>l(e).monkeyBreadSoftware.server.component=n),label:"Component",readonly:l(e).editMode.fieldName!=="monkeyBreadSoftware"},null,8,["modelValue","readonly"]),t(i,{modelValue:l(e).monkeyBreadSoftware.server.licenseType,"onUpdate:modelValue":a[5]||(a[5]=n=>l(e).monkeyBreadSoftware.server.licenseType=n),label:"License Type",readonly:l(e).editMode.fieldName!=="monkeyBreadSoftware"},null,8,["modelValue","readonly"]),t(i,{modelValue:l(e).monkeyBreadSoftware.server.expiration,"onUpdate:modelValue":a[6]||(a[6]=n=>l(e).monkeyBreadSoftware.server.expiration=n),label:"Expiration",readonly:l(e).editMode.fieldName!=="monkeyBreadSoftware"},null,8,["modelValue","readonly"]),t(i,{modelValue:l(e).monkeyBreadSoftware.server.serialNumber,"onUpdate:modelValue":a[7]||(a[7]=n=>l(e).monkeyBreadSoftware.server.serialNumber=n),type:l(e).editMode.fieldName==="monkeyBreadSoftware"?"text":"password",label:"Serial Number",readonly:l(e).editMode.fieldName!=="monkeyBreadSoftware"},null,8,["modelValue","type","readonly"])]),_:1}),xe,t(b,null,{default:o(()=>[Ce,t(i,{modelValue:l(e).monkeyBreadSoftware.client.licenseeName,"onUpdate:modelValue":a[8]||(a[8]=n=>l(e).monkeyBreadSoftware.client.licenseeName=n),label:"Licensee Name",readonly:l(e).editMode.fieldName!=="monkeyBreadSoftware"},null,8,["modelValue","readonly"]),t(i,{modelValue:l(e).monkeyBreadSoftware.client.component,"onUpdate:modelValue":a[9]||(a[9]=n=>l(e).monkeyBreadSoftware.client.component=n),label:"Component",readonly:l(e).editMode.fieldName!=="monkeyBreadSoftware"},null,8,["modelValue","readonly"]),t(i,{modelValue:l(e).monkeyBreadSoftware.client.licenseType,"onUpdate:modelValue":a[10]||(a[10]=n=>l(e).monkeyBreadSoftware.client.licenseType=n),label:"License Type",readonly:l(e).editMode.fieldName!=="monkeyBreadSoftware"},null,8,["modelValue","readonly"]),t(i,{modelValue:l(e).monkeyBreadSoftware.client.expiration,"onUpdate:modelValue":a[11]||(a[11]=n=>l(e).monkeyBreadSoftware.client.expiration=n),label:"Expiration",readonly:l(e).editMode.fieldName!=="monkeyBreadSoftware"},null,8,["modelValue","readonly"]),t(i,{modelValue:l(e).monkeyBreadSoftware.client.serialNumber,"onUpdate:modelValue":a[12]||(a[12]=n=>l(e).monkeyBreadSoftware.client.serialNumber=n),type:l(e).editMode.fieldName==="monkeyBreadSoftware"?"text":"password",label:"Serial Number",readonly:l(e).editMode.fieldName!=="monkeyBreadSoftware"},null,8,["modelValue","type","readonly"])]),_:1})]),_:1})]),_:1}))}}),Ae=S("div",{class:"text-h6"},"360Works",-1),Pe=V({__name:"ThreeSixtyWorksCard",setup(p){const e=M();return(v,a)=>(d(),r(b,{style:{width:"24rem"}},{default:o(()=>[t(u,null,{default:o(()=>[t(_,null,{default:o(()=>[Ae,t(g),l(e).editMode.fieldName!=="threeSixtyWorks"?(d(),r(s,{key:0,icon:"edit",dense:"",onClick:a[0]||(a[0]=n=>l(e).enterEditMode("threeSixtyWorks"))})):(d(),r(s,{key:1,icon:"close",dense:"",onClick:a[1]||(a[1]=n=>l(e).cancelEditMode("threeSixtyWorks"))})),y(t(s,{icon:"save",dense:"",onClick:a[2]||(a[2]=n=>l(e).saveSettings("threeSixtyWorks"))},null,512),[[w,l(e).showSaveButtonOn==="threeSixtyWorks"]])]),_:1})]),_:1}),t(u,null,{default:o(()=>[t(i,{modelValue:l(e).threeSixtyWorks,"onUpdate:modelValue":a[3]||(a[3]=n=>l(e).threeSixtyWorks=n),type:l(e).editMode.fieldName==="threeSixtyWorks"?"text":"password",label:"Token",readonly:l(e).editMode.fieldName!=="threeSixtyWorks"},null,8,["modelValue","type","readonly"])]),_:1})]),_:1}))}}),Ie=S("div",{class:"text-h6"},"Reports Web Server",-1),Be=S("div",{class:"text-h6"},"Admin Web Server",-1),De=V({__name:"WebServersCard",setup(p){const e=M();return(v,a)=>(d(),A(P,null,[t(b,{style:{width:"32rem"}},{default:o(()=>[t(u,null,{default:o(()=>[t(_,null,{default:o(()=>[Ie,t(g),l(e).editMode.fieldName!=="webServerReports"?(d(),r(s,{key:0,icon:"edit",dense:"",onClick:a[0]||(a[0]=n=>l(e).enterEditMode("webServerReports"))})):(d(),r(s,{key:1,icon:"close",dense:"",onClick:a[1]||(a[1]=n=>l(e).cancelEditMode("webServerReports"))})),y(t(s,{icon:"save",dense:"",onClick:a[2]||(a[2]=n=>l(e).saveSettings("webServerReports"))},null,512),[[w,l(e).showSaveButtonOn==="webServerReports"]])]),_:1})]),_:1}),t(u,null,{default:o(()=>[t(i,{modelValue:l(e).webServerReports,"onUpdate:modelValue":a[3]||(a[3]=n=>l(e).webServerReports=n),label:"URL",rules:[n=>!!n&&/^(ftp|http|https):\/\/[^ ]+$/.test(n)||"Invalid URL"],readonly:l(e).editMode.fieldName!=="webServerReports"},null,8,["modelValue","rules","readonly"])]),_:1})]),_:1}),t(b,{style:{width:"32rem"}},{default:o(()=>[t(u,null,{default:o(()=>[t(_,null,{default:o(()=>[Be,t(g),l(e).editMode.fieldName!=="webServerAdmin"?(d(),r(s,{key:0,icon:"edit",dense:"",onClick:a[4]||(a[4]=n=>l(e).enterEditMode("webServerAdmin"))})):(d(),r(s,{key:1,icon:"close",dense:"",onClick:a[5]||(a[5]=n=>l(e).cancelEditMode("webServerAdmin"))})),y(t(s,{icon:"save",dense:"",onClick:a[6]||(a[6]=n=>l(e).saveSettings("webServerAdmin"))},null,512),[[w,l(e).showSaveButtonOn==="webServerAdmin"]])]),_:1})]),_:1}),t(u,null,{default:o(()=>[t(i,{modelValue:l(e).webServerAdmin,"onUpdate:modelValue":a[7]||(a[7]=n=>l(e).webServerAdmin=n),label:"URL",rules:[n=>!!n&&/^(ftp|http|https):\/\/[^ ]+$/.test(n)||"Invalid URL"],readonly:l(e).editMode.fieldName!=="webServerAdmin"},null,8,["modelValue","rules","readonly"])]),_:1})]),_:1})],64))}}),he=S("div",{class:"text-h6"},"Contact Data",-1),Ue=V({__name:"ContactDataCard",setup(p){const e=M();return(v,a)=>(d(),r(b,{style:{width:"24rem"}},{default:o(()=>[c(" settingsStore.loggedUser "+U(l(e).loggedUser)+" ",1),t(u,null,{default:o(()=>[t(_,null,{default:o(()=>[he,t(g),l(e).editMode.fieldName!=="contactData"?(d(),r(s,{key:0,icon:"edit",dense:"",onClick:a[0]||(a[0]=n=>l(e).enterEditMode("contactData"))})):(d(),r(s,{key:1,icon:"close",dense:"",onClick:a[1]||(a[1]=n=>l(e).cancelEditMode("contactData"))})),y(t(s,{icon:"save",dense:"",onClick:a[2]||(a[2]=n=>l(e).saveSettings("contactData"))},null,512),[[w,l(e).showSaveButtonOn==="contactData"]])]),_:1})]),_:1}),t(u,null,{default:o(()=>[t(u,null,{default:o(()=>[t(k,{class:"text-h6"},{default:o(()=>[c("To")]),_:1}),t(i,{modelValue:l(e).contactData.toName,"onUpdate:modelValue":a[3]||(a[3]=n=>l(e).contactData.toName=n),label:"Name",readonly:l(e).editMode.fieldName!=="contactData"},null,8,["modelValue","readonly"]),t(i,{modelValue:l(e).contactData.toEmail,"onUpdate:modelValue":a[4]||(a[4]=n=>l(e).contactData.toEmail=n),label:"Email",type:"email","lazy-rules":"",rules:[n=>!!n&&/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(n)||"Invalid email"],readonly:l(e).editMode.fieldName!=="contactData"},null,8,["modelValue","rules","readonly"])]),_:1}),t(u,null,{default:o(()=>[t(k,{class:"text-h6"},{default:o(()=>[c("Carbon Copy")]),_:1}),t(i,{modelValue:l(e).contactData.ccName,"onUpdate:modelValue":a[5]||(a[5]=n=>l(e).contactData.ccName=n),label:"Name",readonly:l(e).editMode.fieldName!=="contactData"},null,8,["modelValue","readonly"]),t(i,{modelValue:l(e).contactData.ccEmail,"onUpdate:modelValue":a[6]||(a[6]=n=>l(e).contactData.ccEmail=n),label:"Email",type:"email","lazy-rules":"",rules:[n=>!!n&&/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(n)||"Invalid email"],readonly:l(e).editMode.fieldName!=="contactData"},null,8,["modelValue","rules","readonly"])]),_:1})]),_:1})]),_:1}))}}),Ee=S("div",{class:"text-h6"},"SAP",-1),Ge=V({__name:"SAPCard",setup(p){const e=M();return(v,a)=>(d(),r(b,{style:{width:"40rem"}},{default:o(()=>[t(u,null,{default:o(()=>[t(_,null,{default:o(()=>[Ee,t(g),l(e).editMode.fieldName!=="sap"?(d(),r(s,{key:0,icon:"edit",dense:"",onClick:a[0]||(a[0]=n=>l(e).enterEditMode("sap"))})):(d(),r(s,{key:1,icon:"close",dense:"",onClick:a[1]||(a[1]=n=>l(e).cancelEditMode("sap"))})),y(t(s,{icon:"save",dense:"",onClick:a[2]||(a[2]=n=>l(e).saveSettings("sap"))},null,512),[[w,l(e).showSaveButtonOn==="sap"]])]),_:1})]),_:1}),t(u,null,{default:o(()=>[t(i,{modelValue:l(e).sap.endpoint,"onUpdate:modelValue":a[3]||(a[3]=n=>l(e).sap.endpoint=n),label:"URL",type:"url",rules:[n=>!!n&&/^(ftp|http|https):\/\/[^ ]+$/.test(n)||"Invalid URL"],readonly:l(e).editMode.fieldName!=="sap"},null,8,["modelValue","rules","readonly"]),t(i,{modelValue:l(e).sap.username,"onUpdate:modelValue":a[4]||(a[4]=n=>l(e).sap.username=n),label:"Username",type:"text",readonly:l(e).editMode.fieldName!=="sap"},null,8,["modelValue","readonly"]),t(i,{modelValue:l(e).sap.password,"onUpdate:modelValue":a[5]||(a[5]=n=>l(e).sap.password=n),label:"Password",type:l(e).editMode.fieldName==="sap"?"text":"password",readonly:l(e).editMode.fieldName!=="sap"},null,8,["modelValue","type","readonly"])]),_:1})]),_:1}))}}),Qe=S("div",{class:"text-h6"},"SQL Server (ODBC)",-1),qe=V({__name:"ODBCCard",setup(p){const e=M();return(v,a)=>(d(),r(b,{style:{width:"32rem"}},{default:o(()=>[t(u,null,{default:o(()=>[t(_,null,{default:o(()=>[Qe,t(g),l(e).editMode.fieldName!=="sqlServer"?(d(),r(s,{key:0,icon:"edit",dense:"",onClick:a[0]||(a[0]=n=>l(e).enterEditMode("sqlServer"))})):(d(),r(s,{key:1,icon:"close",dense:"",onClick:a[1]||(a[1]=n=>l(e).cancelEditMode("sqlServer"))})),y(t(s,{icon:"save",dense:"",onClick:a[2]||(a[2]=n=>l(e).saveSettings("sqlServer"))},null,512),[[w,l(e).showSaveButtonOn==="sqlServer"]])]),_:1})]),_:1}),t(u,null,{default:o(()=>[t(i,{modelValue:l(e).sqlServer.filePath,"onUpdate:modelValue":a[3]||(a[3]=n=>l(e).sqlServer.filePath=n),label:"File Path",readonly:l(e).editMode.fieldName!=="sqlServer"},null,8,["modelValue","readonly"]),t(oe),t(i,{modelValue:l(e).sqlServer.server,"onUpdate:modelValue":a[4]||(a[4]=n=>l(e).sqlServer.server=n),label:"Server",readonly:l(e).editMode.fieldName!=="sqlServer"},null,8,["modelValue","readonly"]),t(i,{modelValue:l(e).sqlServer.dsnName,"onUpdate:modelValue":a[5]||(a[5]=n=>l(e).sqlServer.dsnName=n),label:"DSN Name",readonly:l(e).editMode.fieldName!=="sqlServer"},null,8,["modelValue","readonly"]),t(i,{modelValue:l(e).sqlServer.username,"onUpdate:modelValue":a[6]||(a[6]=n=>l(e).sqlServer.username=n),label:"Username",readonly:l(e).editMode.fieldName!=="sqlServer"},null,8,["modelValue","readonly"]),t(i,{modelValue:l(e).sqlServer.password,"onUpdate:modelValue":a[7]||(a[7]=n=>l(e).sqlServer.password=n),label:"Password",type:l(e).editMode.fieldName==="sqlServer"?"text":"password",readonly:l(e).editMode.fieldName!=="sqlServer"},null,8,["modelValue","type","readonly"])]),_:1})]),_:1}))}}),Le=S("div",{class:"text-h6"},"SendGrid",-1),Te=V({__name:"SendGridCard",setup(p){const e=M();return(v,a)=>(d(),r(b,{style:{width:"32rem"}},{default:o(()=>[t(u,null,{default:o(()=>[t(_,null,{default:o(()=>[Le,t(g),l(e).editMode.fieldName!=="sendGrid"?(d(),r(s,{key:0,icon:"edit",dense:"",onClick:a[0]||(a[0]=n=>l(e).enterEditMode("sendGrid"))})):(d(),r(s,{key:1,icon:"close",dense:"",onClick:a[1]||(a[1]=n=>l(e).cancelEditMode("sendGrid"))})),y(t(s,{icon:"save",dense:"",onClick:a[2]||(a[2]=n=>l(e).saveSettings("sendGrid"))},null,512),[[w,l(e).showSaveButtonOn==="sendGrid"]])]),_:1})]),_:1}),t(u,null,{default:o(()=>[t(i,{modelValue:l(e).sendGrid.endpoint,"onUpdate:modelValue":a[3]||(a[3]=n=>l(e).sendGrid.endpoint=n),type:"text",label:"Endpoint",readonly:l(e).editMode.fieldName!=="sendGrid"},null,8,["modelValue","readonly"]),t(i,{modelValue:l(e).sendGrid.apiKey,"onUpdate:modelValue":a[4]||(a[4]=n=>l(e).sendGrid.apiKey=n),type:l(e).editMode.fieldName==="sendGrid"?"text":"password",label:"API Key",readonly:l(e).editMode.fieldName!=="sendGrid"},null,8,["modelValue","type","readonly"])]),_:1})]),_:1}))}});const We=V({__name:"SettingsMenuDrawer",setup(p){const e=M(),v=[{label:"Groups",icon:"groups"},{label:"Local Accounts",icon:"manage_accounts"},{label:"Credentials",icon:"badge"},{label:"Plugins",icon:"extension"},{label:"Configurations",icon:"settings"},{label:"Integrations",icon:"integration_instructions"}],a=Y("Groups"),n=x=>{switch(e.cards=[],a.value=x,x){case"Groups":e.cards.push(N(F));break;case"Local Accounts":e.cards.push(N(ye),N(ke));break;case"Credentials":e.cards.push(N(pe),N(Ge),N(qe));break;case"Plugins":e.cards.push(N($e),N(Pe));break;case"Configurations":e.cards.push(N(De),N(Ue));break;case"Integrations":e.cards.push(N(Me),N(Te));break}};return(x,m)=>(d(),r(le,{"model-value":"",width:320,side:"left"},{default:o(()=>[t(b,null,{default:o(()=>[t(u,null,{default:o(()=>[t(G,{class:"q-mb-md"},{default:o(()=>[(d(),A(P,null,h(v,f=>t(D,{key:f.label,label:f.label,icon:f.icon,clickable:"",onClick:E=>n(f.label),active:a.value===f.label,"active-class":"menu-active"},{default:o(()=>[t(C,{avatar:""},{default:o(()=>[t($,{name:f.icon},null,8,["name"])]),_:2},1024),t(C,null,{default:o(()=>[t(k,{class:"text-h4"},{default:o(()=>[c(U(f.label),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["label","icon","onClick","active"])),64))]),_:1})]),_:1})]),_:1})]),_:1}))}});var Oe=T(We,[["__scopeId","data-v-059b4f1d"]]);const He=V({__name:"SettingsPage",setup(p){const e=M();return j(()=>{e.readSettings(),e.cards=[N(F)],e.toolbar=null}),(v,a)=>(d(),A(P,null,[t(Oe),t(z,{class:"row"},{default:o(()=>[(d(!0),A(P,null,h(l(e).cards,(n,x)=>(d(),r(b,{key:x},{default:o(()=>[(d(),r(H,null,[(d(),r(ee(n)))],1024))]),_:2},1024))),128))]),_:1})],64))}});export{He as default};