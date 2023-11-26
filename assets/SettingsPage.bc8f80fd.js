import{Q as b,a as _,b as u,c as s}from"./QCardActions.fdb521cd.js";import{Q as z}from"./QPage.cf5438ca.js";import{$ as K,X as Z,L as V,u as N,F as d,G as r,H as a,_ as T,I as t,Q as c,P as l,a0 as y,U as i,M as A,O as U,N as P,R as E,a1 as H,a2 as X,K as S,a3 as w,a4 as $,h as I,a5 as W,y as j,a6 as C,T as J,a7 as Y,a8 as ee}from"./index.6cbc1c32.js";import{c as k,Q as G,a as h,b as x}from"./QList.f87a6b82.js";import{Q as B,a as le}from"./QBanner.048d5fd6.js";import{g as te,c as oe,Q as M,a as ne,b as O,d as R,e as ae}from"./QSeparator.902ea310.js";import"./QBtnGroup.95ab99ad.js";function L(p){if(p===!1)return 0;if(p===!0||p===void 0)return 1;const e=parseInt(p,10);return isNaN(e)?0:e}var Q=K({name:"close-popup",beforeMount(p,{value:e}){const v={depth:L(e),handler(o){v.depth!==0&&setTimeout(()=>{const n=te(p);n!==void 0&&oe(n,o,v.depth)})},handlerKey(o){Z(o,13)===!0&&v.handler(o)}};p.__qclosepopup=v,p.addEventListener("click",v.handler),p.addEventListener("keyup",v.handlerKey)},updated(p,{value:e,oldValue:v}){e!==v&&(p.__qclosepopup.depth=L(e))},beforeUnmount(p){const e=p.__qclosepopup;p.removeEventListener("click",e.handler),p.removeEventListener("keyup",e.handlerKey),delete p.__qclosepopup}});const q=p=>(H("data-v-12b6b4fe"),p=p(),X(),p),de=q(()=>S("div",{class:"text-h6"},"Groups",-1)),re=q(()=>S("br",null,null,-1)),ie=q(()=>S("br",null,null,-1)),se=V({__name:"GroupsListEditor",setup(p){const e=N();return(v,o)=>(d(),r(b,{style:{width:"24rem"}},{default:a(()=>[t(u,null,{default:a(()=>[t(_,null,{default:a(()=>[de,t(M),t(ne,{dense:"",icon:"add"},{default:a(()=>[t(b,{style:{width:"24rem"}},{default:a(()=>[t(u,null,{default:a(()=>[t(k,{class:"text-h5"},{default:a(()=>[c("Create new Group")]),_:1})]),_:1}),t(u,null,{default:a(()=>[t(k,{class:"text-body1"},{default:a(()=>[c("A new Group will be created with the following name.")]),_:1}),t(s,{modelValue:l(e).groupName,"onUpdate:modelValue":o[0]||(o[0]=n=>l(e).groupName=n),label:"Group Name",clearable:""},null,8,["modelValue"])]),_:1}),t(_,{align:"right"},{default:a(()=>[y(t(i,{dense:"",label:"Cancel"},null,512),[[Q]]),y(t(i,{dense:"",label:"Create Group",color:"primary",disable:!l(e).groupName,onClick:o[1]||(o[1]=n=>l(e).addGroup())},null,8,["disable"]),[[Q]])]),_:1})]),_:1})]),_:1}),l(e).editMode.fieldName!=="groups"?(d(),r(i,{key:0,dense:"",icon:"edit",onClick:o[2]||(o[2]=n=>l(e).enterEditMode("groups"))})):(d(),r(i,{key:1,dense:"",icon:"close",onClick:o[3]||(o[3]=n=>l(e).cancelEditMode("groups"))}))]),_:1})]),_:1}),t(G,null,{default:a(()=>[(d(!0),A(P,null,U(l(e).groups,(n,g)=>(d(),r(h,{key:g,onClick:m=>l(e).selectedGroup={...n,id:g},class:"bg-grey-2 menu"},{default:a(()=>[l(e).editMode.fieldName==="groups"?(d(),r(x,{key:0},{default:a(()=>[t(s,{modelValue:n.name,"onUpdate:modelValue":m=>n.name=m,label:"Group Name"},null,8,["modelValue","onUpdate:modelValue"]),re,t(i,{icon:"save",label:"Rename",dense:"",color:"primary",onClick:m=>l(e).renameGroup(n.name)},null,8,["onClick"]),ie,t(i,{outline:"",icon:"delete_forever",color:"red",label:"Delete",dense:"",onClick:m=>l(e).removeGroup(g,n.name)},null,8,["onClick"])]),_:2},1024)):(d(),r(x,{key:1},{default:a(()=>[t(k,{class:"text-h5"},{default:a(()=>[c(E(n.name),1)]),_:2},1024)]),_:2},1024))]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1}))}});var F=T(se,[["__scopeId","data-v-12b6b4fe"]]);const ue=S("div",{class:"text-h6"},"Web API",-1),me=S("h5",null," Web API is used in some FileMaker scripts to comunicate with the Web via its API. ",-1),pe=V({__name:"WebAPICard",setup(p){const e=N();return(v,o)=>(d(),r(b,{style:{width:"32rem"}},{default:a(()=>[t(u,null,{default:a(()=>[t(_,null,{default:a(()=>[ue,t(M),l(e).editMode.fieldName!=="webAPI"?(d(),r(i,{key:0,icon:"edit",dense:"",onClick:o[0]||(o[0]=n=>l(e).enterEditMode("webAPI"))})):(d(),r(i,{key:1,icon:"close",dense:"",onClick:o[1]||(o[1]=n=>l(e).cancelEditMode("webAPI"))})),y(t(i,{icon:"save",dense:"",onClick:o[2]||(o[2]=n=>l(e).saveSettings("webAPI"))},null,512),[[w,l(e).showSaveButtonOn==="webAPI"]])]),_:1}),me]),_:1}),y(t(u,null,{default:a(()=>[t(B,{rounded:"",class:"bg-orange text-white"},{avatar:a(()=>[t($,{name:"warning"})]),default:a(()=>[c(" This credentials has to be provided by the Web Admin. ")]),_:1})]),_:1},512),[[w,l(e).showSaveButtonOn==="webAPI"]]),t(u,null,{default:a(()=>[t(s,{modelValue:l(e).webAPI.endpoint,"onUpdate:modelValue":o[3]||(o[3]=n=>l(e).webAPI.endpoint=n),readonly:l(e).editMode.fieldName!=="webAPI",label:"Endpoint"},null,8,["modelValue","readonly"]),t(s,{modelValue:l(e).webAPI.grantType,"onUpdate:modelValue":o[4]||(o[4]=n=>l(e).webAPI.grantType=n),readonly:l(e).editMode.fieldName!=="webAPI",label:"Grant Type"},null,8,["modelValue","readonly"]),t(s,{modelValue:l(e).webAPI.clientId,"onUpdate:modelValue":o[5]||(o[5]=n=>l(e).webAPI.clientId=n),readonly:l(e).editMode.fieldName!=="webAPI",label:"Client ID"},null,8,["modelValue","readonly"]),t(s,{modelValue:l(e).webAPI.clientSecret,"onUpdate:modelValue":o[6]||(o[6]=n=>l(e).webAPI.clientSecret=n),type:l(e).editMode.fieldName==="webAPI"?"text":"password",readonly:l(e).editMode.fieldName!=="webAPI",label:"Client Secret"},null,8,["modelValue","type","readonly"])]),_:1})]),_:1}))}}),fe=S("div",{class:"text-h6"},"Service DAPI",-1),ve=S("b",null,"local",-1),ce=S("br",null,null,-1),ye=V({__name:"ServiceDAPICard",setup(p){const e=N(),v=I(()=>e.editMode.fieldName==="serviceDAPI"),o=I(()=>e.editMode.fieldName!=="serviceDAPI"),n=I(()=>e.showSaveButtonOn==="serviceDAPI");return(g,m)=>(d(),r(b,{style:{width:"32rem"}},{default:a(()=>[t(u,null,{default:a(()=>[t(_,null,{default:a(()=>[fe,t(M),o.value?(d(),r(i,{key:0,icon:"edit",dense:"",onClick:m[0]||(m[0]=f=>l(e).enterEditMode("serviceDAPI"))})):(d(),r(i,{key:1,icon:"close",dense:"",onClick:m[1]||(m[1]=f=>l(e).cancelEditMode("serviceDAPI"))})),y(t(i,{icon:"save",dense:"",onClick:m[2]||(m[2]=f=>l(e).saveLocalAccount("serviceDAPI"))},null,512),[[w,n.value]])]),_:1}),t(k,{header:""},{default:a(()=>[c(" ServiceDAPI is a "),ve,c(" account that is used for the web to communicate to FileMaker via its Data API")]),_:1})]),_:1}),y(t(u,null,{default:a(()=>[t(B,{rounded:"",class:"bg-orange text-white"},{avatar:a(()=>[t($,{name:"warning"})]),default:a(()=>[c(" Notify the Web Admin about this changes. If you change the credentials, they will need to update them in their system. ")]),_:1})]),_:1},512),[[w,l(e).showSaveButtonOn==="serviceDAPI"]]),t(u,null,{default:a(()=>[t(s,{modelValue:l(e).serviceDAPI.accountName,"onUpdate:modelValue":m[3]||(m[3]=f=>l(e).serviceDAPI.accountName=f),readonly:o.value,label:"Account Name"},null,8,["modelValue","readonly"]),t(s,{modelValue:l(e).serviceDAPI.password,"onUpdate:modelValue":m[4]||(m[4]=f=>l(e).serviceDAPI.password=f),type:l(e).editMode.fieldName==="serviceDAPI"?"text":"password",readonly:o.value,label:"Password"},null,8,["modelValue","type","readonly"])]),_:1}),t(u,null,{default:a(()=>[t(k,{header:""},{default:a(()=>[c("Privilege Set")]),_:1}),y(t(B,{rounded:"",class:"bg-orange text-white"},{avatar:a(()=>[t($,{name:"warning"})]),default:a(()=>[c(" The Privilege Set Name has to match with the actual name in FileMaker Security. ")]),_:1},512),[[w,v.value]]),t(s,{modelValue:l(e).serviceDAPI.privilegeSet,"onUpdate:modelValue":m[5]||(m[5]=f=>l(e).serviceDAPI.privilegeSet=f),label:"Privilege Set Name",readonly:o.value},null,8,["modelValue","readonly"]),t(k,{caption:""},{default:a(()=>[c("This Privilege Set contains the minimun permissions that the Service DAPI needs in order to perform its duty")]),_:1})]),_:1}),t(u,null,{default:a(()=>[t(x,null,{default:a(()=>[t(k,{class:"text-h6"},{default:a(()=>[c(" Account Files ")]),_:1})]),_:1}),ce,t(x,null,{default:a(()=>[y(t(B,{rounded:"",class:"bg-orange text-white"},{avatar:a(()=>[t($,{name:"warning"})]),default:a(()=>[c(" This FileNames are hardcoded in FileMaker scripts, don't mess with them before contacting the Dev Team. ")]),_:1},512),[[w,l(e).editMode.fieldName==="serviceDAPI"]])]),_:1}),y(t(h,null,{default:a(()=>[t(x,null,{default:a(()=>[t(O,{modelValue:l(e).serviceDAPI.files,"onUpdate:modelValue":m[6]||(m[6]=f=>l(e).serviceDAPI.files=f),options:l(e).fileOptions,multiple:"",label:"Files"},null,8,["modelValue","options"])]),_:1})]),_:1},512),[[w,v.value]]),y(t(G,{dense:""},{default:a(()=>[(d(!0),A(P,null,U(l(e).serviceDAPI.files,(f,D)=>(d(),r(h,{key:D},{default:a(()=>[t(R,{"text-color":"white",color:"blue"},{default:a(()=>[t(W,{size:"sm","text-color":"white",icon:"description",color:"blue"}),c(" "+E(f),1)]),_:2},1024)]),_:2},1024))),128))]),_:1},512),[[w,o.value]])]),_:1})]),_:1}))}}),Se=S("div",{class:"text-h6"},"Service Script",-1),we=S("b",null,"local",-1),be=S("br",null,null,-1),ke=V({__name:"ServiceScriptCard",setup(p){const e=N(),v=I(()=>e.editMode.fieldName==="serviceScript"),o=I(()=>e.editMode.fieldName!=="serviceScript"),n=I(()=>e.showSaveButtonOn==="serviceScript");return(g,m)=>(d(),r(b,{style:{width:"32rem"}},{default:a(()=>[t(u,null,{default:a(()=>[t(_,null,{default:a(()=>[Se,t(M),o.value?(d(),r(i,{key:0,icon:"edit",dense:"",onClick:m[0]||(m[0]=f=>l(e).enterEditMode("serviceScript"))})):(d(),r(i,{key:1,icon:"close",dense:"",onClick:m[1]||(m[1]=f=>l(e).cancelEditMode("serviceScript"))})),y(t(i,{icon:"save",dense:"",onClick:m[2]||(m[2]=f=>l(e).saveLocalAccount("serviceScript"))},null,512),[[w,n.value]])]),_:1}),t(k,{header:""},{default:a(()=>[c(" ServiceScript is a "),we,c(" account that is used internally by some FileMaker scripts ")]),_:1})]),_:1}),t(u,null,{default:a(()=>[t(s,{modelValue:l(e).serviceScript.accountName,"onUpdate:modelValue":m[3]||(m[3]=f=>l(e).serviceScript.accountName=f),readonly:o.value,label:"Account Name"},null,8,["modelValue","readonly"]),t(s,{modelValue:l(e).serviceScript.password,"onUpdate:modelValue":m[4]||(m[4]=f=>l(e).serviceScript.password=f),type:l(e).editMode.fieldName==="serviceScript"?"text":"password",readonly:o.value,label:"Password"},null,8,["modelValue","type","readonly"])]),_:1}),t(u,null,{default:a(()=>[t(k,{header:""},{default:a(()=>[c("Privilege Set")]),_:1}),y(t(B,{rounded:"",class:"bg-orange text-white"},{avatar:a(()=>[t($,{name:"warning"})]),default:a(()=>[c(" The Privilege Set Name has to match with the actual name in FileMaker Security. ")]),_:1},512),[[w,v.value]]),t(s,{modelValue:l(e).serviceScript.privilegeSet,"onUpdate:modelValue":m[5]||(m[5]=f=>l(e).serviceScript.privilegeSet=f),label:"Privilege Set Name",readonly:o.value},null,8,["modelValue","readonly"]),t(k,{caption:""},{default:a(()=>[c("This Privilege Set contains the minimun permissions that the Service Script needs in order to perform its duty")]),_:1})]),_:1}),t(u,null,{default:a(()=>[t(x,null,{default:a(()=>[t(k,{class:"text-h6"},{default:a(()=>[c(" Account Files ")]),_:1})]),_:1}),be,t(x,null,{default:a(()=>[y(t(B,{rounded:"",class:"bg-orange text-white"},{avatar:a(()=>[t($,{name:"warning"})]),default:a(()=>[c(" This FileNames are hardcoded in FileMaker scripts, don't mess with them before contacting the Dev Team. ")]),_:1},512),[[w,v.value]])]),_:1}),y(t(h,null,{default:a(()=>[t(x,null,{default:a(()=>[t(O,{modelValue:l(e).serviceScript.files,"onUpdate:modelValue":m[6]||(m[6]=f=>l(e).serviceScript.files=f),options:l(e).fileOptions,multiple:"",label:"Files"},null,8,["modelValue","options"])]),_:1})]),_:1},512),[[w,v.value]]),y(t(G,{dense:""},{default:a(()=>[(d(!0),A(P,null,U(l(e).serviceScript.files,(f,D)=>(d(),r(h,{key:D},{default:a(()=>[t(R,{"text-color":"white",color:"blue"},{default:a(()=>[t(W,{size:"sm","text-color":"white",icon:"description",color:"blue"}),c(" "+E(f),1)]),_:2},1024)]),_:2},1024))),128))]),_:1},512),[[w,o.value]])]),_:1})]),_:1}))}}),_e=S("div",{class:"text-h6"},"Smartsheet",-1),Ve=S("h5",null," Smartsheet Token needed to perform some operations on the Smartsheet API ",-1),Ne=V({__name:"SmartsheetCard",setup(p){const e=N();return(v,o)=>(d(),r(b,{style:{width:"24rem"}},{default:a(()=>[t(u,null,{default:a(()=>[t(_,null,{default:a(()=>[_e,t(M),l(e).editMode.fieldName!=="smartsheet"?(d(),r(i,{key:0,icon:"edit",dense:"",onClick:o[0]||(o[0]=n=>l(e).enterEditMode("smartsheet"))})):(d(),r(i,{key:1,icon:"close",dense:"",onClick:o[1]||(o[1]=n=>l(e).cancelEditMode("smartsheet"))})),y(t(i,{icon:"save",dense:"",onClick:o[2]||(o[2]=n=>l(e).saveSettings("smartsheet"))},null,512),[[w,l(e).showSaveButtonOn==="smartsheet"]])]),_:1}),Ve]),_:1}),t(u,null,{default:a(()=>[t(s,{modelValue:l(e).smartsheet,"onUpdate:modelValue":o[3]||(o[3]=n=>l(e).smartsheet=n),type:l(e).editMode.fieldName==="smartsheet"?"text":"password",label:"Token",readonly:l(e).editMode.fieldName!=="smartsheet"},null,8,["modelValue","type","readonly"])]),_:1})]),_:1}))}}),Ce=S("div",{class:"text-h6"},"MonkeyBreadSoftware",-1),Me=S("div",{class:"text-h5"},"Server",-1),ge=S("br",null,null,-1),xe=S("div",{class:"text-h5"},"Client",-1),$e=V({__name:"MonkeyBreadSoftwareCard",setup(p){const e=N();return(v,o)=>(d(),r(b,{style:{width:"32rem"}},{default:a(()=>[t(u,null,{default:a(()=>[t(_,null,{default:a(()=>[Ce,t(M),l(e).editMode.fieldName!=="monkeyBreadSoftware"?(d(),r(i,{key:0,icon:"edit",dense:"",onClick:o[0]||(o[0]=n=>l(e).enterEditMode("monkeyBreadSoftware"))})):(d(),r(i,{key:1,icon:"close",dense:"",onClick:o[1]||(o[1]=n=>l(e).cancelEditMode("monkeyBreadSoftware"))})),y(t(i,{icon:"save",dense:"",onClick:o[2]||(o[2]=n=>l(e).saveSettings("monkeyBreadSoftware"))},null,512),[[w,l(e).showSaveButtonOn==="monkeyBreadSoftware"]])]),_:1})]),_:1}),t(u,null,{default:a(()=>[t(b,null,{default:a(()=>[Me,t(s,{modelValue:l(e).monkeyBreadSoftware.server.licenseeName,"onUpdate:modelValue":o[3]||(o[3]=n=>l(e).monkeyBreadSoftware.server.licenseeName=n),label:"Licensee Name",readonly:l(e).editMode.fieldName!=="monkeyBreadSoftware"},null,8,["modelValue","readonly"]),t(s,{modelValue:l(e).monkeyBreadSoftware.server.component,"onUpdate:modelValue":o[4]||(o[4]=n=>l(e).monkeyBreadSoftware.server.component=n),label:"Component",readonly:l(e).editMode.fieldName!=="monkeyBreadSoftware"},null,8,["modelValue","readonly"]),t(s,{modelValue:l(e).monkeyBreadSoftware.server.licenseType,"onUpdate:modelValue":o[5]||(o[5]=n=>l(e).monkeyBreadSoftware.server.licenseType=n),label:"License Type",readonly:l(e).editMode.fieldName!=="monkeyBreadSoftware"},null,8,["modelValue","readonly"]),t(s,{modelValue:l(e).monkeyBreadSoftware.server.expiration,"onUpdate:modelValue":o[6]||(o[6]=n=>l(e).monkeyBreadSoftware.server.expiration=n),label:"Expiration",readonly:l(e).editMode.fieldName!=="monkeyBreadSoftware"},null,8,["modelValue","readonly"]),t(s,{modelValue:l(e).monkeyBreadSoftware.server.serialNumber,"onUpdate:modelValue":o[7]||(o[7]=n=>l(e).monkeyBreadSoftware.server.serialNumber=n),type:l(e).editMode.fieldName==="monkeyBreadSoftware"?"text":"password",label:"Serial Number",readonly:l(e).editMode.fieldName!=="monkeyBreadSoftware"},null,8,["modelValue","type","readonly"])]),_:1}),ge,t(b,null,{default:a(()=>[xe,t(s,{modelValue:l(e).monkeyBreadSoftware.client.licenseeName,"onUpdate:modelValue":o[8]||(o[8]=n=>l(e).monkeyBreadSoftware.client.licenseeName=n),label:"Licensee Name",readonly:l(e).editMode.fieldName!=="monkeyBreadSoftware"},null,8,["modelValue","readonly"]),t(s,{modelValue:l(e).monkeyBreadSoftware.client.component,"onUpdate:modelValue":o[9]||(o[9]=n=>l(e).monkeyBreadSoftware.client.component=n),label:"Component",readonly:l(e).editMode.fieldName!=="monkeyBreadSoftware"},null,8,["modelValue","readonly"]),t(s,{modelValue:l(e).monkeyBreadSoftware.client.licenseType,"onUpdate:modelValue":o[10]||(o[10]=n=>l(e).monkeyBreadSoftware.client.licenseType=n),label:"License Type",readonly:l(e).editMode.fieldName!=="monkeyBreadSoftware"},null,8,["modelValue","readonly"]),t(s,{modelValue:l(e).monkeyBreadSoftware.client.expiration,"onUpdate:modelValue":o[11]||(o[11]=n=>l(e).monkeyBreadSoftware.client.expiration=n),label:"Expiration",readonly:l(e).editMode.fieldName!=="monkeyBreadSoftware"},null,8,["modelValue","readonly"]),t(s,{modelValue:l(e).monkeyBreadSoftware.client.serialNumber,"onUpdate:modelValue":o[12]||(o[12]=n=>l(e).monkeyBreadSoftware.client.serialNumber=n),type:l(e).editMode.fieldName==="monkeyBreadSoftware"?"text":"password",label:"Serial Number",readonly:l(e).editMode.fieldName!=="monkeyBreadSoftware"},null,8,["modelValue","type","readonly"])]),_:1})]),_:1})]),_:1}))}}),Ae=S("div",{class:"text-h6"},"360Works",-1),Pe=V({__name:"ThreeSixtyWorksCard",setup(p){const e=N();return(v,o)=>(d(),r(b,{style:{width:"24rem"}},{default:a(()=>[t(u,null,{default:a(()=>[t(_,null,{default:a(()=>[Ae,t(M),l(e).editMode.fieldName!=="threeSixtyWorks"?(d(),r(i,{key:0,icon:"edit",dense:"",onClick:o[0]||(o[0]=n=>l(e).enterEditMode("threeSixtyWorks"))})):(d(),r(i,{key:1,icon:"close",dense:"",onClick:o[1]||(o[1]=n=>l(e).cancelEditMode("threeSixtyWorks"))})),y(t(i,{icon:"save",dense:"",onClick:o[2]||(o[2]=n=>l(e).saveSettings("threeSixtyWorks"))},null,512),[[w,l(e).showSaveButtonOn==="threeSixtyWorks"]])]),_:1})]),_:1}),t(u,null,{default:a(()=>[t(s,{modelValue:l(e).threeSixtyWorks,"onUpdate:modelValue":o[3]||(o[3]=n=>l(e).threeSixtyWorks=n),type:l(e).editMode.fieldName==="threeSixtyWorks"?"text":"password",label:"Token",readonly:l(e).editMode.fieldName!=="threeSixtyWorks"},null,8,["modelValue","type","readonly"])]),_:1})]),_:1}))}}),Ie=S("div",{class:"text-h6"},"Reports Web Server",-1),Be=S("div",{class:"text-h6"},"Admin Web Server",-1),he=V({__name:"WebServersCard",setup(p){const e=N();return(v,o)=>(d(),A(P,null,[t(b,{style:{width:"32rem"}},{default:a(()=>[t(u,null,{default:a(()=>[t(_,null,{default:a(()=>[Ie,t(M),l(e).editMode.fieldName!=="webServerReports"?(d(),r(i,{key:0,icon:"edit",dense:"",onClick:o[0]||(o[0]=n=>l(e).enterEditMode("webServerReports"))})):(d(),r(i,{key:1,icon:"close",dense:"",onClick:o[1]||(o[1]=n=>l(e).cancelEditMode("webServerReports"))})),y(t(i,{icon:"save",dense:"",onClick:o[2]||(o[2]=n=>l(e).saveSettings("webServerReports"))},null,512),[[w,l(e).showSaveButtonOn==="webServerReports"]])]),_:1})]),_:1}),t(u,null,{default:a(()=>[t(s,{modelValue:l(e).webServerReports,"onUpdate:modelValue":o[3]||(o[3]=n=>l(e).webServerReports=n),label:"URL",rules:[n=>!!n&&/^(ftp|http|https):\/\/[^ ]+$/.test(n)||"Invalid URL"],readonly:l(e).editMode.fieldName!=="webServerReports"},null,8,["modelValue","rules","readonly"])]),_:1})]),_:1}),t(b,{style:{width:"32rem"}},{default:a(()=>[t(u,null,{default:a(()=>[t(_,null,{default:a(()=>[Be,t(M),l(e).editMode.fieldName!=="webServerAdmin"?(d(),r(i,{key:0,icon:"edit",dense:"",onClick:o[4]||(o[4]=n=>l(e).enterEditMode("webServerAdmin"))})):(d(),r(i,{key:1,icon:"close",dense:"",onClick:o[5]||(o[5]=n=>l(e).cancelEditMode("webServerAdmin"))})),y(t(i,{icon:"save",dense:"",onClick:o[6]||(o[6]=n=>l(e).saveSettings("webServerAdmin"))},null,512),[[w,l(e).showSaveButtonOn==="webServerAdmin"]])]),_:1})]),_:1}),t(u,null,{default:a(()=>[t(s,{modelValue:l(e).webServerAdmin,"onUpdate:modelValue":o[7]||(o[7]=n=>l(e).webServerAdmin=n),label:"URL",rules:[n=>!!n&&/^(ftp|http|https):\/\/[^ ]+$/.test(n)||"Invalid URL"],readonly:l(e).editMode.fieldName!=="webServerAdmin"},null,8,["modelValue","rules","readonly"])]),_:1})]),_:1})],64))}}),Ue=S("div",{class:"text-h6"},"User Creation Notification",-1),Ee=V({__name:"UserCreationNotificationCard",setup(p){const e=N();return(v,o)=>(d(),r(b,{style:{width:"24rem"}},{default:a(()=>[t(u,null,{default:a(()=>[t(_,null,{default:a(()=>[Ue,t(M),l(e).editMode.fieldName!=="userCreationNotification"?(d(),r(i,{key:0,icon:"edit",dense:"",onClick:o[0]||(o[0]=n=>l(e).enterEditMode("userCreationNotification"))})):(d(),r(i,{key:1,icon:"close",dense:"",onClick:o[1]||(o[1]=n=>l(e).cancelEditMode("userCreationNotification"))})),y(t(i,{icon:"save",dense:"",onClick:o[2]||(o[2]=n=>l(e).saveSettings("userCreationNotification"))},null,512),[[w,l(e).showSaveButtonOn==="userCreationNotification"]])]),_:1})]),_:1}),c(" userCreationNotification: "+E(l(e).userCreationNotification)+" ",1),t(u,null,{default:a(()=>[t(u,null,{default:a(()=>[t(k,{class:"text-h6"},{default:a(()=>[c("To")]),_:1}),t(s,{modelValue:l(e).userCreationNotification.toName,"onUpdate:modelValue":o[3]||(o[3]=n=>l(e).userCreationNotification.toName=n),label:"Name",readonly:l(e).editMode.fieldName!=="userCreationNotification"},null,8,["modelValue","readonly"]),t(s,{modelValue:l(e).userCreationNotification.toEmail,"onUpdate:modelValue":o[4]||(o[4]=n=>l(e).userCreationNotification.toEmail=n),label:"Email",type:"email","lazy-rules":"",rules:[n=>!!n&&/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(n)||"Invalid email"],readonly:l(e).editMode.fieldName!=="userCreationNotification"},null,8,["modelValue","rules","readonly"])]),_:1}),t(u,null,{default:a(()=>[t(k,{class:"text-h6"},{default:a(()=>[c("Carbon Copy")]),_:1}),t(s,{modelValue:l(e).userCreationNotification.ccName,"onUpdate:modelValue":o[5]||(o[5]=n=>l(e).userCreationNotification.ccName=n),label:"Name",readonly:l(e).editMode.fieldName!=="userCreationNotification"},null,8,["modelValue","readonly"]),t(s,{modelValue:l(e).userCreationNotification.ccEmail,"onUpdate:modelValue":o[6]||(o[6]=n=>l(e).userCreationNotification.ccEmail=n),label:"Email",type:"email","lazy-rules":"",rules:[n=>!!n&&/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(n)||"Invalid email"],readonly:l(e).editMode.fieldName!=="userCreationNotification"},null,8,["modelValue","rules","readonly"])]),_:1})]),_:1})]),_:1}))}}),De=S("div",{class:"text-h6"},"SAP",-1),Ge=V({__name:"SAPCard",setup(p){const e=N();return(v,o)=>(d(),r(b,{style:{width:"40rem"}},{default:a(()=>[t(u,null,{default:a(()=>[t(_,null,{default:a(()=>[De,t(M),l(e).editMode.fieldName!=="sap"?(d(),r(i,{key:0,icon:"edit",dense:"",onClick:o[0]||(o[0]=n=>l(e).enterEditMode("sap"))})):(d(),r(i,{key:1,icon:"close",dense:"",onClick:o[1]||(o[1]=n=>l(e).cancelEditMode("sap"))})),y(t(i,{icon:"save",dense:"",onClick:o[2]||(o[2]=n=>l(e).saveSettings("sap"))},null,512),[[w,l(e).showSaveButtonOn==="sap"]])]),_:1})]),_:1}),t(u,null,{default:a(()=>[t(s,{modelValue:l(e).sap.endpoint,"onUpdate:modelValue":o[3]||(o[3]=n=>l(e).sap.endpoint=n),label:"URL",type:"url",rules:[n=>!!n&&/^(ftp|http|https):\/\/[^ ]+$/.test(n)||"Invalid URL"],readonly:l(e).editMode.fieldName!=="sap"},null,8,["modelValue","rules","readonly"]),t(s,{modelValue:l(e).sap.username,"onUpdate:modelValue":o[4]||(o[4]=n=>l(e).sap.username=n),label:"Username",type:"text",readonly:l(e).editMode.fieldName!=="sap"},null,8,["modelValue","readonly"]),t(s,{modelValue:l(e).sap.password,"onUpdate:modelValue":o[5]||(o[5]=n=>l(e).sap.password=n),label:"Password",type:l(e).editMode.fieldName==="sap"?"text":"password",readonly:l(e).editMode.fieldName!=="sap"},null,8,["modelValue","type","readonly"])]),_:1})]),_:1}))}}),qe=S("div",{class:"text-h6"},"SQL Server (ODBC)",-1),Le=V({__name:"ODBCCard",setup(p){const e=N();return(v,o)=>(d(),r(b,{style:{width:"32rem"}},{default:a(()=>[t(u,null,{default:a(()=>[t(_,null,{default:a(()=>[qe,t(M),l(e).editMode.fieldName!=="sqlServer"?(d(),r(i,{key:0,icon:"edit",dense:"",onClick:o[0]||(o[0]=n=>l(e).enterEditMode("sqlServer"))})):(d(),r(i,{key:1,icon:"close",dense:"",onClick:o[1]||(o[1]=n=>l(e).cancelEditMode("sqlServer"))})),y(t(i,{icon:"save",dense:"",onClick:o[2]||(o[2]=n=>l(e).saveSettings("sqlServer"))},null,512),[[w,l(e).showSaveButtonOn==="sqlServer"]])]),_:1})]),_:1}),t(u,null,{default:a(()=>[t(s,{modelValue:l(e).sqlServer.filePath,"onUpdate:modelValue":o[3]||(o[3]=n=>l(e).sqlServer.filePath=n),label:"File Path",readonly:l(e).editMode.fieldName!=="sqlServer"},null,8,["modelValue","readonly"]),t(ae),t(s,{modelValue:l(e).sqlServer.server,"onUpdate:modelValue":o[4]||(o[4]=n=>l(e).sqlServer.server=n),label:"Server",readonly:l(e).editMode.fieldName!=="sqlServer"},null,8,["modelValue","readonly"]),t(s,{modelValue:l(e).sqlServer.dsnName,"onUpdate:modelValue":o[5]||(o[5]=n=>l(e).sqlServer.dsnName=n),label:"DSN Name",readonly:l(e).editMode.fieldName!=="sqlServer"},null,8,["modelValue","readonly"]),t(s,{modelValue:l(e).sqlServer.username,"onUpdate:modelValue":o[6]||(o[6]=n=>l(e).sqlServer.username=n),label:"Username",readonly:l(e).editMode.fieldName!=="sqlServer"},null,8,["modelValue","readonly"]),t(s,{modelValue:l(e).sqlServer.password,"onUpdate:modelValue":o[7]||(o[7]=n=>l(e).sqlServer.password=n),label:"Password",type:l(e).editMode.fieldName==="sqlServer"?"text":"password",readonly:l(e).editMode.fieldName!=="sqlServer"},null,8,["modelValue","type","readonly"])]),_:1})]),_:1}))}}),Qe=S("div",{class:"text-h6"},"SendGrid",-1),Te=V({__name:"SendGridCard",setup(p){const e=N();return(v,o)=>(d(),r(b,{style:{width:"32rem"}},{default:a(()=>[t(u,null,{default:a(()=>[t(_,null,{default:a(()=>[Qe,t(M),l(e).editMode.fieldName!=="sendGrid"?(d(),r(i,{key:0,icon:"edit",dense:"",onClick:o[0]||(o[0]=n=>l(e).enterEditMode("sendGrid"))})):(d(),r(i,{key:1,icon:"close",dense:"",onClick:o[1]||(o[1]=n=>l(e).cancelEditMode("sendGrid"))})),y(t(i,{icon:"save",dense:"",onClick:o[2]||(o[2]=n=>l(e).saveSettings("sendGrid"))},null,512),[[w,l(e).showSaveButtonOn==="sendGrid"]])]),_:1})]),_:1}),t(u,null,{default:a(()=>[t(s,{modelValue:l(e).sendGrid.endpoint,"onUpdate:modelValue":o[3]||(o[3]=n=>l(e).sendGrid.endpoint=n),type:"text",label:"Endpoint",readonly:l(e).editMode.fieldName!=="sendGrid"},null,8,["modelValue","readonly"]),t(s,{modelValue:l(e).sendGrid.apiKey,"onUpdate:modelValue":o[4]||(o[4]=n=>l(e).sendGrid.apiKey=n),type:l(e).editMode.fieldName==="sendGrid"?"text":"password",label:"API Key",readonly:l(e).editMode.fieldName!=="sendGrid"},null,8,["modelValue","type","readonly"])]),_:1})]),_:1}))}});const We=V({__name:"SettingsMenuDrawer",setup(p){const e=N(),v=[{label:"Groups",icon:"groups"},{label:"Local Accounts",icon:"manage_accounts"},{label:"Credentials",icon:"badge"},{label:"Plugins",icon:"extension"},{label:"Configurations",icon:"settings"},{label:"Integrations",icon:"integration_instructions"}],o=j("Groups"),n=g=>{switch(e.cards=[],o.value=g,g){case"Groups":e.cards.push(C(F));break;case"Local Accounts":e.cards.push(C(ye),C(ke));break;case"Credentials":e.cards.push(C(pe),C(Ge),C(Le));break;case"Plugins":e.cards.push(C($e),C(Pe));break;case"Configurations":e.cards.push(C(he),C(Ee));break;case"Integrations":e.cards.push(C(Ne),C(Te));break}};return(g,m)=>(d(),r(le,{"model-value":"",width:320,bordered:"",side:"left"},{default:a(()=>[t(b,null,{default:a(()=>[t(u,null,{default:a(()=>[t(G,{class:"q-mb-md"},{default:a(()=>[(d(),A(P,null,U(v,f=>t(h,{key:f.label,label:f.label,icon:f.icon,clickable:"",onClick:D=>n(f.label),active:o.value===f.label,"active-class":"menu-active"},{default:a(()=>[t(x,{avatar:""},{default:a(()=>[t($,{name:f.icon},null,8,["name"])]),_:2},1024),t(x,null,{default:a(()=>[t(k,{class:"text-h4"},{default:a(()=>[c(E(f.label),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["label","icon","onClick","active"])),64))]),_:1})]),_:1})]),_:1})]),_:1}))}});var Oe=T(We,[["__scopeId","data-v-4c9f2735"]]);const je=V({__name:"SettingsPage",setup(p){const e=N();return J(()=>{e.readSettings(),e.cards.push(C(F))}),(v,o)=>(d(),A(P,null,[t(Oe),t(z,{class:"row"},{default:a(()=>[(d(!0),A(P,null,U(l(e).cards,(n,g)=>(d(),r(b,{key:g},{default:a(()=>[(d(),r(Y,null,[(d(),r(ee(n)))],1024))]),_:2},1024))),128))]),_:1})],64))}});export{je as default};