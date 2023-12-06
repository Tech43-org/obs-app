import{u as p,c as y}from"./QList.fd90aac6.js";import{s as c,z as s,A as f,B as v,C as h}from"./index.49fc7c04.js";var x=c({name:"QCard",props:{...p,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:a}){const{proxy:{$q:r}}=h(),n=y(e,r),u=s(()=>"q-card"+(n.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>f(e.tag,{class:u.value},v(a.default))}}),B=c({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:a}){const r=s(()=>parseInt(e.lines,10)),n=s(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(r.value===1?" ellipsis":"")),u=s(()=>e.lines!==void 0&&r.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":r.value}:null);return()=>f("div",{style:u.value,class:n.value},v(a.default))}}),_=c({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:a}){const r=s(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>f(e.tag,{class:r.value},v(a.default))}});let d,i=0;const t=new Array(256);for(let e=0;e<256;e++)t[e]=(e+256).toString(16).substring(1);const g=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return a=>{const r=new Uint8Array(a);return e.getRandomValues(r),r}}return a=>{const r=[];for(let n=a;n>0;n--)r.push(Math.floor(Math.random()*256));return r}})(),m=4096;function F(){(d===void 0||i+16>m)&&(i=0,d=g(m));const e=Array.prototype.slice.call(d,i,i+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,t[e[0]]+t[e[1]]+t[e[2]]+t[e[3]]+"-"+t[e[4]]+t[e[5]]+"-"+t[e[6]]+t[e[7]]+"-"+t[e[8]]+t[e[9]]+"-"+t[e[10]]+t[e[11]]+t[e[12]]+t[e[13]]+t[e[14]]+t[e[15]]}let o=[],l=[];function b(e){l=l.filter(a=>a!==e)}function k(e){b(e),l.push(e)}function C(e){b(e),l.length===0&&o.length!==0&&(o[o.length-1](),o=[])}function S(e){l.length===0?e():o.push(e)}function Q(e){o=o.filter(a=>a!==e)}export{x as Q,_ as a,B as b,S as c,C as d,k as e,Q as r,F as u};
