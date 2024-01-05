import{u as m,b as v}from"./QItem.a88d67c3.js";import{x as d,B as o,C as i,D as c,E as b}from"./index.1092cc0f.js";var h=d({name:"QCard",props:{...m,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:r}){const{proxy:{$q:a}}=b(),n=v(e,a),l=o(()=>"q-card"+(n.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>i(e.tag,{class:l.value},c(r.default))}}),w=d({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:r}){const a=o(()=>parseInt(e.lines,10)),n=o(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(a.value===1?" ellipsis":"")),l=o(()=>e.lines!==void 0&&a.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":a.value}:null);return()=>i("div",{style:l.value,class:n.value},c(r.default))}}),x=d({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:r}){const a=o(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>i(e.tag,{class:a.value},c(r.default))}});let u,s=0;const t=new Array(256);for(let e=0;e<256;e++)t[e]=(e+256).toString(16).substring(1);const y=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return r=>{const a=new Uint8Array(r);return e.getRandomValues(a),a}}return r=>{const a=[];for(let n=r;n>0;n--)a.push(Math.floor(Math.random()*256));return a}})(),f=4096;function g(){(u===void 0||s+16>f)&&(s=0,u=y(f));const e=Array.prototype.slice.call(u,s,s+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,t[e[0]]+t[e[1]]+t[e[2]]+t[e[3]]+"-"+t[e[4]]+t[e[5]]+"-"+t[e[6]]+t[e[7]]+"-"+t[e[8]]+t[e[9]]+"-"+t[e[10]]+t[e[11]]+t[e[12]]+t[e[13]]+t[e[14]]+t[e[15]]}const B={name:String};function _(e={}){return(r,a,n)=>{r[a](i("input",{class:"hidden"+(n||""),...e.value}))}}function S(e){return o(()=>e.name||e.for)}export{h as Q,x as a,w as b,B as c,S as d,_ as e,g as u};
