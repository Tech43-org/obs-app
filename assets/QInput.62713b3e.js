import{y as Ce,H as D,I as ue,J as ae,ap as we,E as G,R as P,B as k,aq as Me,ar as he,as as Se,ae as qe,T as Q,at as Re,au as Fe,S as Ve,C as M,ak as J,a9 as ie,a7 as Ae,D as ee,a6 as _e,av as Ee,ag as Be,x as Te,al as se}from"./index.481c2d9a.js";import{u as $e,c as Oe}from"./QList.813d9784.js";import{u as pe,c as Ie,d as Pe}from"./use-form.aee44101.js";function De({validate:e,resetValidation:t,requiresQForm:u}){const s=Ce(we,!1);if(s!==!1){const{props:f,proxy:d}=G();Object.assign(d,{validate:e,resetValidation:t}),D(()=>f.disable,c=>{c===!0?(typeof t=="function"&&t(),s.unbindComponent(d)):s.bindComponent(d)}),ue(()=>{f.disable!==!0&&s.bindComponent(d)}),ae(()=>{f.disable!==!0&&s.unbindComponent(d)})}else u===!0&&console.error("Parent QForm not found on useFormChild()!")}const de=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,fe=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,ce=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,te=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,le=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,oe={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>de.test(e),hexaColor:e=>fe.test(e),hexOrHexaColor:e=>ce.test(e),rgbColor:e=>te.test(e),rgbaColor:e=>le.test(e),rgbOrRgbaColor:e=>te.test(e)||le.test(e),hexOrRgbColor:e=>de.test(e)||te.test(e),hexaOrRgbaColor:e=>fe.test(e)||le.test(e),anyColor:e=>ce.test(e)||te.test(e)||le.test(e)},je=[!0,!1,"ondemand"],ze={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>je.includes(e)}};function Ne(e,t){const{props:u,proxy:s}=G(),f=P(!1),d=P(null),c=P(null);De({validate:T,resetValidation:_});let y=0,B;const q=k(()=>u.rules!==void 0&&u.rules!==null&&u.rules.length!==0),x=k(()=>u.disable!==!0&&q.value===!0),p=k(()=>u.error===!0||f.value===!0),U=k(()=>typeof u.errorMessage=="string"&&u.errorMessage.length!==0?u.errorMessage:d.value);D(()=>u.modelValue,()=>{N()}),D(()=>u.reactiveRules,I=>{I===!0?B===void 0&&(B=D(()=>u.rules,()=>{N(!0)})):B!==void 0&&(B(),B=void 0)},{immediate:!0}),D(e,I=>{I===!0?c.value===null&&(c.value=!1):c.value===!1&&(c.value=!0,x.value===!0&&u.lazyRules!=="ondemand"&&t.value===!1&&O())});function _(){y++,t.value=!1,c.value=null,f.value=!1,d.value=null,O.cancel()}function T(I=u.modelValue){if(x.value!==!0)return!0;const F=++y,H=t.value!==!0?()=>{c.value=!0}:()=>{},z=(S,C)=>{S===!0&&H(),f.value=S,d.value=C||null,t.value=!1},j=[];for(let S=0;S<u.rules.length;S++){const C=u.rules[S];let E;if(typeof C=="function"?E=C(I,oe):typeof C=="string"&&oe[C]!==void 0&&(E=oe[C](I)),E===!1||typeof E=="string")return z(!0,E),!1;E!==!0&&E!==void 0&&j.push(E)}return j.length===0?(z(!1),!0):(t.value=!0,Promise.all(j).then(S=>{if(S===void 0||Array.isArray(S)===!1||S.length===0)return F===y&&z(!1),!0;const C=S.find(E=>E===!1||typeof E=="string");return F===y&&z(C!==void 0,C),C===void 0},S=>(F===y&&(console.error(S),z(!0)),!1)))}function N(I){x.value===!0&&u.lazyRules!=="ondemand"&&(c.value===!0||u.lazyRules!==!0&&I!==!0)&&O()}const O=Me(T,0);return ae(()=>{B!==void 0&&B(),O.cancel()}),Object.assign(s,{resetValidation:_,validate:T}),he(s,"hasError",()=>p.value),{isDirtyModel:c,hasRules:q,hasError:p,errorMessage:U,validate:T,resetValidation:_}}const ve=/^on[A-Z]/;function Le(e,t){const u={listeners:P({}),attributes:P({})};function s(){const f={},d={};for(const c in e)c!=="class"&&c!=="style"&&ve.test(c)===!1&&(f[c]=e[c]);for(const c in t.props)ve.test(c)===!0&&(d[c]=t.props[c]);u.attributes.value=f,u.listeners.value=d}return Se(s),s(),u}let W=[],X=[];function be(e){X=X.filter(t=>t!==e)}function ut(e){be(e),X.push(e)}function it(e){be(e),X.length===0&&W.length!==0&&(W[W.length-1](),W=[])}function ke(e){X.length===0?e():W.push(e)}function Ke(e){W=W.filter(t=>t!==e)}function ye(e,t){return e===void 0?t===!0?`f_${pe()}`:void 0:e}function re(e){return e!=null&&(""+e).length!==0}const Ze={...$e,...ze,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Ue=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function He({requiredForAttr:e=!0,tagProp:t}={}){const{props:u,attrs:s,proxy:f,vnode:d}=G(),c=Oe(u,f.$q);return{requiredForAttr:e,tag:t===!0?k(()=>u.tag):{value:"label"},isDark:c,editable:k(()=>u.disable!==!0&&u.readonly!==!0),innerLoading:P(!1),focused:P(!1),hasPopupOpen:!1,splitAttrs:Le(s,d),targetUid:P(ye(u.for,e)),rootRef:P(null),targetRef:P(null),controlRef:P(null)}}function Qe(e){const{props:t,emit:u,slots:s,attrs:f,proxy:d}=G(),{$q:c}=d;let y=null;e.hasValue===void 0&&(e.hasValue=k(()=>re(t.modelValue))),e.emitValue===void 0&&(e.emitValue=l=>{u("update:modelValue",l)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:o,onFocusout:a}),Object.assign(e,{clearValue:i,onControlFocusin:o,onControlFocusout:a,focus:C}),e.computedCounter===void 0&&(e.computedCounter=k(()=>{if(t.counter!==!1){const l=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,h=t.maxlength!==void 0?t.maxlength:t.maxValues;return l+(h!==void 0?" / "+h:"")}}));const{isDirtyModel:B,hasRules:q,hasError:x,errorMessage:p,resetValidation:U}=Ne(e.focused,e.innerLoading),_=e.floatingLabel!==void 0?k(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):k(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),T=k(()=>t.bottomSlots===!0||t.hint!==void 0||q.value===!0||t.counter===!0||t.error!==null),N=k(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),O=k(()=>`q-field row no-wrap items-start q-field--${N.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(_.value===!0?" q-field--float":"")+(F.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(x.value===!0?" q-field--error":"")+(x.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&T.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),I=k(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(x.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),F=k(()=>t.labelSlot===!0||t.label!==void 0),H=k(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&x.value!==!0?` text-${t.labelColor}`:"")),z=k(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:_.value,modelValue:t.modelValue,emitValue:e.emitValue})),j=k(()=>{const l={for:e.targetUid.value};return t.disable===!0?l["aria-disabled"]="true":t.readonly===!0&&(l["aria-readonly"]="true"),l});D(()=>t.for,l=>{e.targetUid.value=ye(l,e.requiredForAttr)});function S(){const l=document.activeElement;let h=e.targetRef!==void 0&&e.targetRef.value;h&&(l===null||l.id!==e.targetUid.value)&&(h.hasAttribute("tabindex")===!0||(h=h.querySelector("[tabindex]")),h&&h!==l&&h.focus({preventScroll:!0}))}function C(){ke(S)}function E(){Ke(S);const l=document.activeElement;l!==null&&e.rootRef.value.contains(l)&&l.blur()}function o(l){y!==null&&(clearTimeout(y),y=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,u("focus",l))}function a(l,h){y!==null&&clearTimeout(y),y=setTimeout(()=>{y=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,u("blur",l)),h!==void 0&&h())})}function i(l){qe(l),c.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),u("update:modelValue",null),u("clear",t.modelValue),Q(()=>{U(),c.platform.is.mobile!==!0&&(B.value=!1)})}function r(){const l=[];return s.prepend!==void 0&&l.push(M("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:J},s.prepend())),l.push(M("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},g())),x.value===!0&&t.noErrorIcon===!1&&l.push(w("error",[M(ie,{name:c.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?l.push(w("inner-loading-append",s.loading!==void 0?s.loading():[M(Ae,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&l.push(w("inner-clearable-append",[M(ie,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||c.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:i})])),s.append!==void 0&&l.push(M("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:J},s.append())),e.getInnerAppend!==void 0&&l.push(w("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&l.push(e.getControlChild()),l}function g(){const l=[];return t.prefix!==void 0&&t.prefix!==null&&l.push(M("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&l.push(e.getShadowControl()),e.getControl!==void 0?l.push(e.getControl()):s.rawControl!==void 0?l.push(s.rawControl()):s.control!==void 0&&l.push(M("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},s.control(z.value))),F.value===!0&&l.push(M("div",{class:H.value},ee(s.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&l.push(M("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),l.concat(ee(s.default))}function v(){let l,h;x.value===!0?p.value!==null?(l=[M("div",{role:"alert"},p.value)],h=`q--slot-error-${p.value}`):(l=ee(s.error),h="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(l=[M("div",t.hint)],h=`q--slot-hint-${t.hint}`):(l=ee(s.hint),h="q--slot-hint"));const L=t.counter===!0||s.counter!==void 0;if(t.hideBottomSpace===!0&&L===!1&&l===void 0)return;const b=M("div",{key:h,class:"q-field__messages col"},l);return M("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:J},[t.hideBottomSpace===!0?b:M(_e,{name:"q-transition--field-message"},()=>b),L===!0?M("div",{class:"q-field__counter"},s.counter!==void 0?s.counter():e.computedCounter.value):null])}function w(l,h){return h===null?null:M("div",{key:l,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},h)}let m=!1;return Re(()=>{m=!0}),Fe(()=>{m===!0&&t.autofocus===!0&&d.focus()}),ue(()=>{Ve.value===!0&&e.requiredForAttr===!0&&t.for===void 0&&(e.targetUid.value=`f_${pe()}`),t.autofocus===!0&&d.focus()}),ae(()=>{y!==null&&clearTimeout(y)}),Object.assign(d,{focus:C,blur:E}),function(){const h=e.getControl===void 0&&s.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...j.value}:j.value;return M(e.tag.value,{ref:e.rootRef,class:[O.value,f.class],style:f.style,...h},[s.before!==void 0?M("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:J},s.before()):null,M("div",{class:"q-field__inner relative-position col self-stretch"},[M("div",{ref:e.controlRef,class:I.value,tabindex:-1,...e.controlEvents},r()),T.value===!0?v():null]),s.after!==void 0?M("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:J},s.after()):null])}}const ge={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},ne={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},xe=Object.keys(ne);xe.forEach(e=>{ne[e].regex=new RegExp(ne[e].pattern)});const We=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+xe.join("")+"])|(.)","g"),me=/[.*+?^${}()|[\]\\]/g,V=String.fromCharCode(1),Ye={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Je(e,t,u,s){let f,d,c,y,B,q;const x=P(null),p=P(_());function U(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}D(()=>e.type+e.autogrow,N),D(()=>e.mask,o=>{if(o!==void 0)O(p.value,!0);else{const a=C(p.value);N(),e.modelValue!==a&&t("update:modelValue",a)}}),D(()=>e.fillMask+e.reverseFillMask,()=>{x.value===!0&&O(p.value,!0)}),D(()=>e.unmaskedValue,()=>{x.value===!0&&O(p.value)});function _(){if(N(),x.value===!0){const o=j(C(e.modelValue));return e.fillMask!==!1?E(o):o}return e.modelValue}function T(o){if(o<f.length)return f.slice(-o);let a="",i=f;const r=i.indexOf(V);if(r>-1){for(let g=o-i.length;g>0;g--)a+=V;i=i.slice(0,r)+a+i.slice(r)}return i}function N(){if(x.value=e.mask!==void 0&&e.mask.length!==0&&U(),x.value===!1){y=void 0,f="",d="";return}const o=ge[e.mask]===void 0?e.mask:ge[e.mask],a=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",i=a.replace(me,"\\$&"),r=[],g=[],v=[];let w=e.reverseFillMask===!0,m="",l="";o.replace(We,(A,n,R,Z,K)=>{if(Z!==void 0){const $=ne[Z];v.push($),l=$.negate,w===!0&&(g.push("(?:"+l+"+)?("+$.pattern+"+)?(?:"+l+"+)?("+$.pattern+"+)?"),w=!1),g.push("(?:"+l+"+)?("+$.pattern+")?")}else if(R!==void 0)m="\\"+(R==="\\"?"":R),v.push(R),r.push("([^"+m+"]+)?"+m+"?");else{const $=n!==void 0?n:K;m=$==="\\"?"\\\\\\\\":$.replace(me,"\\\\$&"),v.push($),r.push("([^"+m+"]+)?"+m+"?")}});const h=new RegExp("^"+r.join("")+"("+(m===""?".":"[^"+m+"]")+"+)?"+(m===""?"":"["+m+"]*")+"$"),L=g.length-1,b=g.map((A,n)=>n===0&&e.reverseFillMask===!0?new RegExp("^"+i+"*"+A):n===L?new RegExp("^"+A+"("+(l===""?".":l)+"+)?"+(e.reverseFillMask===!0?"$":i+"*")):new RegExp("^"+A));c=v,y=A=>{const n=h.exec(e.reverseFillMask===!0?A:A.slice(0,v.length+1));n!==null&&(A=n.slice(1).join(""));const R=[],Z=b.length;for(let K=0,$=A;K<Z;K++){const Y=b[K].exec($);if(Y===null)break;$=$.slice(Y.shift().length),R.push(...Y)}return R.length!==0?R.join(""):A},f=v.map(A=>typeof A=="string"?A:V).join(""),d=f.split(V).join(a)}function O(o,a,i){const r=s.value,g=r.selectionEnd,v=r.value.length-g,w=C(o);a===!0&&N();const m=j(w),l=e.fillMask!==!1?E(m):m,h=p.value!==l;r.value!==l&&(r.value=l),h===!0&&(p.value=l),document.activeElement===r&&Q(()=>{if(l===d){const b=e.reverseFillMask===!0?d.length:0;r.setSelectionRange(b,b,"forward");return}if(i==="insertFromPaste"&&e.reverseFillMask!==!0){const b=r.selectionEnd;let A=g-1;for(let n=B;n<=A&&n<b;n++)f[n]!==V&&A++;F.right(r,A);return}if(["deleteContentBackward","deleteContentForward"].indexOf(i)>-1){const b=e.reverseFillMask===!0?g===0?l.length>m.length?1:0:Math.max(0,l.length-(l===d?0:Math.min(m.length,v)+1))+1:g;r.setSelectionRange(b,b,"forward");return}if(e.reverseFillMask===!0)if(h===!0){const b=Math.max(0,l.length-(l===d?0:Math.min(m.length,v+1)));b===1&&g===1?r.setSelectionRange(b,b,"forward"):F.rightReverse(r,b)}else{const b=l.length-v;r.setSelectionRange(b,b,"backward")}else if(h===!0){const b=Math.max(0,f.indexOf(V),Math.min(m.length,g)-1);F.right(r,b)}else{const b=g-1;F.right(r,b)}});const L=e.unmaskedValue===!0?C(l):l;String(e.modelValue)!==L&&(e.modelValue!==null||L!=="")&&u(L,!0)}function I(o,a,i){const r=j(C(o.value));a=Math.max(0,f.indexOf(V),Math.min(r.length,a)),B=a,o.setSelectionRange(a,i,"forward")}const F={left(o,a){const i=f.slice(a-1).indexOf(V)===-1;let r=Math.max(0,a-1);for(;r>=0;r--)if(f[r]===V){a=r,i===!0&&a++;break}if(r<0&&f[a]!==void 0&&f[a]!==V)return F.right(o,0);a>=0&&o.setSelectionRange(a,a,"backward")},right(o,a){const i=o.value.length;let r=Math.min(i,a+1);for(;r<=i;r++)if(f[r]===V){a=r;break}else f[r-1]===V&&(a=r);if(r>i&&f[a-1]!==void 0&&f[a-1]!==V)return F.left(o,i);o.setSelectionRange(a,a,"forward")},leftReverse(o,a){const i=T(o.value.length);let r=Math.max(0,a-1);for(;r>=0;r--)if(i[r-1]===V){a=r;break}else if(i[r]===V&&(a=r,r===0))break;if(r<0&&i[a]!==void 0&&i[a]!==V)return F.rightReverse(o,0);a>=0&&o.setSelectionRange(a,a,"backward")},rightReverse(o,a){const i=o.value.length,r=T(i),g=r.slice(0,a+1).indexOf(V)===-1;let v=Math.min(i,a+1);for(;v<=i;v++)if(r[v-1]===V){a=v,a>0&&g===!0&&a--;break}if(v>i&&r[a-1]!==void 0&&r[a-1]!==V)return F.leftReverse(o,i);o.setSelectionRange(a,a,"forward")}};function H(o){t("click",o),q=void 0}function z(o){if(t("keydown",o),Ee(o)===!0||o.altKey===!0)return;const a=s.value,i=a.selectionStart,r=a.selectionEnd;if(o.shiftKey||(q=void 0),o.keyCode===37||o.keyCode===39){o.shiftKey&&q===void 0&&(q=a.selectionDirection==="forward"?i:r);const g=F[(o.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(o.preventDefault(),g(a,q===i?r:i),o.shiftKey){const v=a.selectionStart;a.setSelectionRange(Math.min(q,v),Math.max(q,v),"forward")}}else o.keyCode===8&&e.reverseFillMask!==!0&&i===r?(F.left(a,i),a.setSelectionRange(a.selectionStart,r,"backward")):o.keyCode===46&&e.reverseFillMask===!0&&i===r&&(F.rightReverse(a,r),a.setSelectionRange(i,a.selectionEnd,"forward"))}function j(o){if(o==null||o==="")return"";if(e.reverseFillMask===!0)return S(o);const a=c;let i=0,r="";for(let g=0;g<a.length;g++){const v=o[i],w=a[g];if(typeof w=="string")r+=w,v===w&&i++;else if(v!==void 0&&w.regex.test(v))r+=w.transform!==void 0?w.transform(v):v,i++;else return r}return r}function S(o){const a=c,i=f.indexOf(V);let r=o.length-1,g="";for(let v=a.length-1;v>=0&&r>-1;v--){const w=a[v];let m=o[r];if(typeof w=="string")g=w+g,m===w&&r--;else if(m!==void 0&&w.regex.test(m))do g=(w.transform!==void 0?w.transform(m):m)+g,r--,m=o[r];while(i===v&&m!==void 0&&w.regex.test(m));else return g}return g}function C(o){return typeof o!="string"||y===void 0?typeof o=="number"?y(""+o):o:y(o)}function E(o){return d.length-o.length<=0?o:e.reverseFillMask===!0&&o.length!==0?d.slice(0,-o.length)+o:o+d.slice(o.length)}return{innerValue:p,hasMask:x,moveCursorForPaste:I,updateMaskValue:O,onMaskedKeydown:z,onMaskedClick:H}}function Xe(e,t){function u(){const s=e.modelValue;try{const f="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(s)===s&&("length"in s?Array.from(s):[s]).forEach(d=>{f.items.add(d)}),{files:f.files}}catch{return{files:void 0}}}return t===!0?k(()=>{if(e.type==="file")return u()}):k(u)}const Ge=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,et=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,tt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,lt=/[a-z0-9_ -]$/i;function nt(e){return function(u){if(u.type==="compositionend"||u.type==="change"){if(u.target.qComposing!==!0)return;u.target.qComposing=!1,e(u)}else u.type==="compositionupdate"&&u.target.qComposing!==!0&&typeof u.data=="string"&&(Be.is.firefox===!0?lt.test(u.data)===!1:Ge.test(u.data)===!0||et.test(u.data)===!0||tt.test(u.data)===!0)===!0&&(u.target.qComposing=!0)}}var st=Te({name:"QInput",inheritAttrs:!1,props:{...Ze,...Ye,...Ie,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Ue,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:u}){const{proxy:s}=G(),{$q:f}=s,d={};let c=NaN,y,B,q=null,x;const p=P(null),U=Pe(e),{innerValue:_,hasMask:T,moveCursorForPaste:N,updateMaskValue:O,onMaskedKeydown:I,onMaskedClick:F}=Je(e,t,m,p),H=Xe(e,!0),z=k(()=>re(_.value)),j=nt(v),S=He(),C=k(()=>e.type==="textarea"||e.autogrow===!0),E=k(()=>C.value===!0||["text","search","url","tel","password"].includes(e.type)),o=k(()=>{const n={...S.splitAttrs.listeners.value,onInput:v,onPaste:g,onChange:h,onBlur:L,onFocus:se};return n.onCompositionstart=n.onCompositionupdate=n.onCompositionend=j,T.value===!0&&(n.onKeydown=I,n.onClick=F),e.autogrow===!0&&(n.onAnimationend=w),n}),a=k(()=>{const n={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:U.value,...S.splitAttrs.attributes.value,id:S.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return C.value===!1&&(n.type=e.type),e.autogrow===!0&&(n.rows=1),n});D(()=>e.type,()=>{p.value&&(p.value.value=e.modelValue)}),D(()=>e.modelValue,n=>{if(T.value===!0){if(B===!0&&(B=!1,String(n)===c))return;O(n)}else _.value!==n&&(_.value=n,e.type==="number"&&d.hasOwnProperty("value")===!0&&(y===!0?y=!1:delete d.value));e.autogrow===!0&&Q(l)}),D(()=>e.autogrow,n=>{n===!0?Q(l):p.value!==null&&u.rows>0&&(p.value.style.height="auto")}),D(()=>e.dense,()=>{e.autogrow===!0&&Q(l)});function i(){ke(()=>{const n=document.activeElement;p.value!==null&&p.value!==n&&(n===null||n.id!==S.targetUid.value)&&p.value.focus({preventScroll:!0})})}function r(){p.value!==null&&p.value.select()}function g(n){if(T.value===!0&&e.reverseFillMask!==!0){const R=n.target;N(R,R.selectionStart,R.selectionEnd)}t("paste",n)}function v(n){if(!n||!n.target)return;if(e.type==="file"){t("update:modelValue",n.target.files);return}const R=n.target.value;if(n.target.qComposing===!0){d.value=R;return}if(T.value===!0)O(R,!1,n.inputType);else if(m(R),E.value===!0&&n.target===document.activeElement){const{selectionStart:Z,selectionEnd:K}=n.target;Z!==void 0&&K!==void 0&&Q(()=>{n.target===document.activeElement&&R.indexOf(n.target.value)===0&&n.target.setSelectionRange(Z,K)})}e.autogrow===!0&&l()}function w(n){t("animationend",n),l()}function m(n,R){x=()=>{q=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==n&&c!==n&&(c=n,R===!0&&(B=!0),t("update:modelValue",n),Q(()=>{c===n&&(c=NaN)})),x=void 0},e.type==="number"&&(y=!0,d.value=n),e.debounce!==void 0?(q!==null&&clearTimeout(q),d.value=n,q=setTimeout(x,e.debounce)):x()}function l(){requestAnimationFrame(()=>{const n=p.value;if(n!==null){const R=n.parentNode.style,{scrollTop:Z}=n,{overflowY:K,maxHeight:$}=f.platform.is.firefox===!0?{}:window.getComputedStyle(n),Y=K!==void 0&&K!=="scroll";Y===!0&&(n.style.overflowY="hidden"),R.marginBottom=n.scrollHeight-1+"px",n.style.height="1px",n.style.height=n.scrollHeight+"px",Y===!0&&(n.style.overflowY=parseInt($,10)<n.scrollHeight?"auto":"hidden"),R.marginBottom="",n.scrollTop=Z}})}function h(n){j(n),q!==null&&(clearTimeout(q),q=null),x!==void 0&&x(),t("change",n.target.value)}function L(n){n!==void 0&&se(n),q!==null&&(clearTimeout(q),q=null),x!==void 0&&x(),y=!1,B=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{p.value!==null&&(p.value.value=_.value!==void 0?_.value:"")})}function b(){return d.hasOwnProperty("value")===!0?d.value:_.value!==void 0?_.value:""}ae(()=>{L()}),ue(()=>{e.autogrow===!0&&l()}),Object.assign(S,{innerValue:_,fieldClass:k(()=>`q-${C.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:k(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:p,emitValue:m,hasValue:z,floatingLabel:k(()=>z.value===!0&&(e.type!=="number"||isNaN(_.value)===!1)||re(e.displayValue)),getControl:()=>M(C.value===!0?"textarea":"input",{ref:p,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...a.value,...o.value,...e.type!=="file"?{value:b()}:H.value}),getShadowControl:()=>M("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(C.value===!0?"":" text-no-wrap")},[M("span",{class:"invisible"},b()),M("span",e.shadowText)])});const A=Qe(S);return Object.assign(s,{focus:i,select:r,getNativeElement:()=>p.value}),he(s,"nativeEl",()=>p.value),A}});export{st as Q,ut as a,ke as b,Ue as c,Qe as d,He as e,re as f,nt as g,Xe as h,it as r,Ze as u};
