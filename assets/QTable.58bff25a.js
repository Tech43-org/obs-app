import{s as $,A as a,B as A,W as ct,a9 as ge,C as z,z as u,O as H,F as E,$ as dt,G as vt,au as ft,at as bt,H as gt,J as mt,L as Be,V as Ve,aM as St,aN as ht,b5 as be,b6 as Oe,b7 as yt,R as $e,b8 as _t,ar as N,Q as Z}from"./index.eba84135.js";import{Q as wt}from"./QSeparator.148594bc.js";import{Q as qt}from"./QList.ef5710ec.js";import{u as me,b as Se}from"./QItem.b9b983b6.js";import{h as Ct,i as Pt,j as De,Q as kt}from"./QSelect.01340515.js";import{u as xt,a as Rt,b as Tt}from"./use-checkbox.94ae39a8.js";import{u as Bt,a as Ot,b as Ft}from"./use-fullscreen.5e0f0623.js";var Mt=$({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:l,emit:n}){const v=z(),{proxy:{$q:i}}=v,b=s=>{n("click",s)};return()=>{if(e.props===void 0)return a("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:b},A(l.default));let s,d;const c=v.vnode.key;if(c){if(s=e.props.colsMap[c],s===void 0)return}else s=e.props.col;if(s.sortable===!0){const r=s.align==="right"?"unshift":"push";d=ct(l.default,[]),d[r](a(ge,{class:s.__iconClass,name:i.iconSet.table.arrowUp}))}else d=A(l.default);const y={class:s.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:s.headerStyle,onClick:r=>{s.sortable===!0&&e.props.sort(s),b(r)}};return a("th",y,d)}}});const Lt=a("div",{key:"svg",class:"q-checkbox__bg absolute"},[a("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[a("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),a("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var fe=$({name:"QCheckbox",props:xt,emits:Rt,setup(e){function l(n,v){const i=u(()=>(n.value===!0?e.checkedIcon:v.value===!0?e.indeterminateIcon:e.uncheckedIcon)||null);return()=>i.value!==null?[a("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[a(ge,{class:"q-checkbox__icon",name:i.value})])]:[Lt]}return Tt("checkbox",l)}}),dl=$({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:l}){const n=z(),v=u(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return a("td",{class:v.value},A(l.default));const i=n.vnode.key,b=(e.props.colsMap!==void 0?e.props.colsMap[i]:null)||e.props.col;if(b===void 0)return;const{row:s}=e.props;return a("td",{class:v.value+b.__tdClass(s),style:b.__tdStyle(s)},A(l.default))}}}),vl=$({name:"QTr",props:{props:Object,noHover:Boolean},setup(e,{slots:l}){const n=u(()=>"q-tr"+(e.props===void 0||e.props.header===!0?"":" "+e.props.__trClass)+(e.noHover===!0?" q-tr--no-hover":""));return()=>a("tr",{class:n.value},A(l.default))}});const Vt=["horizontal","vertical","cell","none"];var $t=$({name:"QMarkupTable",props:{...me,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>Vt.includes(e)}},setup(e,{slots:l}){const n=z(),v=Se(e,n.proxy.$q),i=u(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(v.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>a("div",{class:i.value},[a("table",{class:"q-table"},A(l.default))])}});function je(e,l){return a("div",e,[a("table",{class:"q-table"},l)])}const Dt={list:qt,table:$t},jt=["list","table","__qtable"];var Qt=$({name:"QVirtualScroll",props:{...Ct,type:{type:String,default:"list",validator:e=>jt.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:l,attrs:n}){let v;const i=H(null),b=u(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:s,localResetVirtualScroll:d,padVirtualScroll:c,onVirtualScrollEvt:y}=Pt({virtualScrollLength:b,getVirtualScrollTarget:C,getVirtualScrollEl:q}),r=u(()=>{if(b.value===0)return[];const O=(F,x)=>({index:s.value.from+x,item:F});return e.itemsFn===void 0?e.items.slice(s.value.from,s.value.to).map(O):e.itemsFn(s.value.from,s.value.to-s.value.from).map(O)}),m=u(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),w=u(()=>e.scrollTarget!==void 0?{}:{tabindex:0});E(b,()=>{d()}),E(()=>e.scrollTarget,()=>{S(),_()});function q(){return i.value.$el||i.value}function C(){return v}function _(){v=mt(q(),e.scrollTarget),v.addEventListener("scroll",y,Be.passive)}function S(){v!==void 0&&(v.removeEventListener("scroll",y,Be.passive),v=void 0)}function B(){let O=c(e.type==="list"?"div":"tbody",r.value.map(l.default));return l.before!==void 0&&(O=l.before().concat(O)),Ve(l.after,O)}return dt(()=>{d()}),vt(()=>{_()}),ft(()=>{_()}),bt(()=>{S()}),gt(()=>{S()}),()=>{if(l.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?je({ref:i,class:"q-table__middle "+m.value},B()):a(Dt[e.type],{...n,ref:i,class:[n.class,m.value],...w.value},B)}}});const At={xs:2,sm:4,md:6,lg:10,xl:14};function Fe(e,l,n){return{transform:l===!0?`translateX(${n.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var Et=$({name:"QLinearProgress",props:{...me,...St,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:l}){const{proxy:n}=z(),v=Se(e,n.$q),i=ht(e,At),b=u(()=>e.indeterminate===!0||e.query===!0),s=u(()=>e.reverse!==e.query),d=u(()=>({...i.value!==null?i.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),c=u(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),y=u(()=>Fe(e.buffer!==void 0?e.buffer:1,s.value,n.$q)),r=u(()=>`with${e.instantFeedback===!0?"out":""}-transition`),m=u(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${r.value} q-linear-progress__track--${v.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),w=u(()=>Fe(b.value===!0?1:e.value,s.value,n.$q)),q=u(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${r.value} q-linear-progress__model--${b.value===!0?"in":""}determinate`),C=u(()=>({width:`${e.value*100}%`})),_=u(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${r.value}`);return()=>{const S=[a("div",{class:m.value,style:y.value}),a("div",{class:q.value,style:w.value})];return e.stripe===!0&&b.value===!1&&S.push(a("div",{class:_.value,style:C.value})),a("div",{class:c.value,style:d.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},Ve(l.default,S))}}});function Nt(e,l){return new Date(e)-new Date(l)}const Ht={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function zt(e,l,n,v){const i=u(()=>{const{sortBy:d}=l.value;return d&&n.value.find(c=>c.name===d)||null}),b=u(()=>e.sortMethod!==void 0?e.sortMethod:(d,c,y)=>{const r=n.value.find(q=>q.name===c);if(r===void 0||r.field===void 0)return d;const m=y===!0?-1:1,w=typeof r.field=="function"?q=>r.field(q):q=>q[r.field];return d.sort((q,C)=>{let _=w(q),S=w(C);return r.rawSort!==void 0?r.rawSort(_,S,q,C)*m:_==null?-1*m:S==null?1*m:r.sort!==void 0?r.sort(_,S,q,C)*m:be(_)===!0&&be(S)===!0?(_-S)*m:Oe(_)===!0&&Oe(S)===!0?Nt(_,S)*m:typeof _=="boolean"&&typeof S=="boolean"?(_-S)*m:([_,S]=[_,S].map(B=>(B+"").toLocaleString().toLowerCase()),_<S?-1*m:_===S?0:m)})});function s(d){let c=e.columnSortOrder;if(yt(d)===!0)d.sortOrder&&(c=d.sortOrder),d=d.name;else{const m=n.value.find(w=>w.name===d);m!==void 0&&m.sortOrder&&(c=m.sortOrder)}let{sortBy:y,descending:r}=l.value;y!==d?(y=d,r=c==="da"):e.binaryStateSort===!0?r=!r:r===!0?c==="ad"?y=null:r=!1:c==="ad"?r=!0:y=null,v({sortBy:y,descending:r,page:1})}return{columnToSort:i,computedSortMethod:b,sort:s}}const pt={filter:[String,Object],filterMethod:Function};function It(e,l){const n=u(()=>e.filterMethod!==void 0?e.filterMethod:(v,i,b,s)=>{const d=i?i.toLowerCase():"";return v.filter(c=>b.some(y=>{const r=s(y,c)+"";return(r==="undefined"||r==="null"?"":r.toLowerCase()).indexOf(d)!==-1}))});return E(()=>e.filter,()=>{$e(()=>{l({page:1},!0)})},{deep:!0}),{computedFilterMethod:n}}function Ut(e,l){for(const n in l)if(l[n]!==e[n])return!1;return!0}function Me(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const Wt={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function Gt(e,l){const{props:n,emit:v}=e,i=H(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:n.rowsPerPageOptions.length!==0?n.rowsPerPageOptions[0]:5},n.pagination)),b=u(()=>{const r=n["onUpdate:pagination"]!==void 0?{...i.value,...n.pagination}:i.value;return Me(r)}),s=u(()=>b.value.rowsNumber!==void 0);function d(r){c({pagination:r,filter:n.filter})}function c(r={}){$e(()=>{v("request",{pagination:r.pagination||b.value,filter:r.filter||n.filter,getCellValue:l})})}function y(r,m){const w=Me({...b.value,...r});if(Ut(b.value,w)===!0){s.value===!0&&m===!0&&d(w);return}if(s.value===!0){d(w);return}n.pagination!==void 0&&n["onUpdate:pagination"]!==void 0?v("update:pagination",w):i.value=w}return{innerPagination:i,computedPagination:b,isServerSide:s,requestServerInteraction:c,setPagination:y}}function Kt(e,l,n,v,i,b){const{props:s,emit:d,proxy:{$q:c}}=e,y=u(()=>v.value===!0?n.value.rowsNumber||0:b.value),r=u(()=>{const{page:x,rowsPerPage:R}=n.value;return(x-1)*R}),m=u(()=>{const{page:x,rowsPerPage:R}=n.value;return x*R}),w=u(()=>n.value.page===1),q=u(()=>n.value.rowsPerPage===0?1:Math.max(1,Math.ceil(y.value/n.value.rowsPerPage))),C=u(()=>m.value===0?!0:n.value.page>=q.value),_=u(()=>(s.rowsPerPageOptions.includes(l.value.rowsPerPage)?s.rowsPerPageOptions:[l.value.rowsPerPage].concat(s.rowsPerPageOptions)).map(R=>({label:R===0?c.lang.table.allRows:""+R,value:R})));E(q,(x,R)=>{if(x===R)return;const p=n.value.page;x&&!p?i({page:1}):x<p&&i({page:x})});function S(){i({page:1})}function B(){const{page:x}=n.value;x>1&&i({page:x-1})}function O(){const{page:x,rowsPerPage:R}=n.value;m.value>0&&x*R<y.value&&i({page:x+1})}function F(){i({page:q.value})}return s["onUpdate:pagination"]!==void 0&&d("update:pagination",{...n.value}),{firstRowIndex:r,lastRowIndex:m,isFirstPage:w,isLastPage:C,pagesNumber:q,computedRowsPerPageOptions:_,computedRowsNumber:y,firstPage:S,prevPage:B,nextPage:O,lastPage:F}}const Jt={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},Xt=["update:selected","selection"];function Yt(e,l,n,v){const i=u(()=>{const C={};return e.selected.map(v.value).forEach(_=>{C[_]=!0}),C}),b=u(()=>e.selection!=="none"),s=u(()=>e.selection==="single"),d=u(()=>e.selection==="multiple"),c=u(()=>n.value.length!==0&&n.value.every(C=>i.value[v.value(C)]===!0)),y=u(()=>c.value!==!0&&n.value.some(C=>i.value[v.value(C)]===!0)),r=u(()=>e.selected.length);function m(C){return i.value[C]===!0}function w(){l("update:selected",[])}function q(C,_,S,B){l("selection",{rows:_,added:S,keys:C,evt:B});const O=s.value===!0?S===!0?_:[]:S===!0?e.selected.concat(_):e.selected.filter(F=>C.includes(v.value(F))===!1);l("update:selected",O)}return{hasSelectionMode:b,singleSelection:s,multipleSelection:d,allRowsSelected:c,someRowsSelected:y,rowsSelectedNumber:r,isRowSelected:m,clearSelection:w,updateSelection:q}}function Le(e){return Array.isArray(e)?e.slice():[]}const Zt={expanded:Array},el=["update:expanded"];function tl(e,l){const n=H(Le(e.expanded));E(()=>e.expanded,s=>{n.value=Le(s)});function v(s){return n.value.includes(s)}function i(s){e.expanded!==void 0?l("update:expanded",s):n.value=s}function b(s,d){const c=n.value.slice(),y=c.indexOf(s);d===!0?y===-1&&(c.push(s),i(c)):y!==-1&&(c.splice(y,1),i(c))}return{isRowExpanded:v,setExpanded:i,updateExpanded:b}}const ll={visibleColumns:Array};function al(e,l,n){const v=u(()=>{if(e.columns!==void 0)return e.columns;const d=e.rows[0];return d!==void 0?Object.keys(d).map(c=>({name:c,label:c.toUpperCase(),field:c,align:be(d[c])?"right":"left",sortable:!0})):[]}),i=u(()=>{const{sortBy:d,descending:c}=l.value;return(e.visibleColumns!==void 0?v.value.filter(r=>r.required===!0||e.visibleColumns.includes(r.name)===!0):v.value).map(r=>{const m=r.align||"right",w=`text-${m}`;return{...r,align:m,__iconClass:`q-table__sort-icon q-table__sort-icon--${m}`,__thClass:w+(r.headerClasses!==void 0?" "+r.headerClasses:"")+(r.sortable===!0?" sortable":"")+(r.name===d?` sorted ${c===!0?"sort-desc":""}`:""),__tdStyle:r.style!==void 0?typeof r.style!="function"?()=>r.style:r.style:()=>null,__tdClass:r.classes!==void 0?typeof r.classes!="function"?()=>w+" "+r.classes:q=>w+" "+r.classes(q):()=>w}})}),b=u(()=>{const d={};return i.value.forEach(c=>{d[c.name]=c}),d}),s=u(()=>e.tableColspan!==void 0?e.tableColspan:i.value.length+(n.value===!0?1:0));return{colList:v,computedCols:i,computedColsMap:b,computedColspan:s}}const ee="q-table__bottom row items-center",Qe={};De.forEach(e=>{Qe[e]={}});var fl=$({name:"QTable",props:{rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...Qe,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...me,...Bt,...ll,...pt,...Wt,...Zt,...Jt,...Ht},emits:["request","virtualScroll",...Ot,...el,...Xt],setup(e,{slots:l,emit:n}){const v=z(),{proxy:{$q:i}}=v,b=Se(e,i),{inFullscreen:s,toggleFullscreen:d}=Ft(),c=u(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),y=H(null),r=H(null),m=u(()=>e.grid!==!0&&e.virtualScroll===!0),w=u(()=>" q-table__card"+(b.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),q=u(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":w.value)+(b.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(s.value===!0?" fullscreen scroll":"")),C=u(()=>q.value+(e.loading===!0?" q-table--loading":""));E(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+q.value,()=>{m.value===!0&&r.value!==null&&r.value.reset()});const{innerPagination:_,computedPagination:S,isServerSide:B,requestServerInteraction:O,setPagination:F}=Gt(v,j),{computedFilterMethod:x}=It(e,F),{isRowExpanded:R,setExpanded:p,updateExpanded:Ae}=tl(e,n),te=u(()=>{let t=e.rows;if(B.value===!0||t.length===0)return t;const{sortBy:o,descending:f}=S.value;return e.filter&&(t=x.value(t,e.filter,M.value,j)),pe.value!==null&&(t=Ie.value(e.rows===t?t.slice():t,o,f)),t}),he=u(()=>te.value.length),V=u(()=>{let t=te.value;if(B.value===!0)return t;const{rowsPerPage:o}=S.value;return o!==0&&(U.value===0&&e.rows!==t?t.length>W.value&&(t=t.slice(0,W.value)):t=t.slice(U.value,W.value)),t}),{hasSelectionMode:D,singleSelection:Ee,multipleSelection:ye,allRowsSelected:Ne,someRowsSelected:_e,rowsSelectedNumber:le,isRowSelected:ae,clearSelection:He,updateSelection:I}=Yt(e,n,V,c),{colList:ze,computedCols:M,computedColsMap:we,computedColspan:qe}=al(e,S,D),{columnToSort:pe,computedSortMethod:Ie,sort:ne}=zt(e,S,ze,F),{firstRowIndex:U,lastRowIndex:W,isFirstPage:re,isLastPage:oe,pagesNumber:G,computedRowsPerPageOptions:Ue,computedRowsNumber:K,firstPage:ie,prevPage:se,nextPage:ue,lastPage:ce}=Kt(v,_,S,B,F,he),We=u(()=>V.value.length===0),Ge=u(()=>{const t={};return De.forEach(o=>{t[o]=e[o]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function Ke(){m.value===!0&&r.value.reset()}function Je(){if(e.grid===!0)return st();const t=e.hideHeader!==!0?Re:null;if(m.value===!0){const f=l["top-row"],g=l["bottom-row"],h={default:k=>Pe(k.item,l.body,k.index)};if(f!==void 0){const k=a("tbody",f({cols:M.value}));h.before=t===null?()=>k:()=>[t()].concat(k)}else t!==null&&(h.before=t);return g!==void 0&&(h.after=()=>a("tbody",g({cols:M.value}))),a(Qt,{ref:r,class:e.tableClass,style:e.tableStyle,...Ge.value,scrollTarget:e.virtualScrollTarget,items:V.value,type:"__qtable",tableColspan:qe.value,onVirtualScroll:Ye},h)}const o=[Ze()];return t!==null&&o.unshift(t()),je({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},o)}function Xe(t,o){if(r.value!==null){r.value.scrollTo(t,o);return}t=parseInt(t,10);const f=y.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(f!==null){const g=y.value.querySelector(".q-table__middle.scroll"),h=f.offsetTop-e.virtualScrollStickySizeStart,k=h<g.scrollTop?"decrease":"increase";g.scrollTop=h,n("virtualScroll",{index:t,from:0,to:_.value.rowsPerPage-1,direction:k})}}function Ye(t){n("virtualScroll",t)}function Ce(){return[a(Et,{class:"q-table__linear-progress",color:e.color,dark:b.value,indeterminate:!0,trackColor:"transparent"})]}function Pe(t,o,f){const g=c.value(t),h=ae(g);if(o!==void 0)return o(ke({key:g,row:t,pageIndex:f,__trClass:h?"selected":""}));const k=l["body-cell"],P=M.value.map(T=>{const X=l[`body-cell-${T.name}`],Y=X!==void 0?X:k;return Y!==void 0?Y(et({key:g,row:t,pageIndex:f,col:T})):a("td",{class:T.__tdClass(t),style:T.__tdStyle(t)},j(T,t))});if(D.value===!0){const T=l["body-selection"],X=T!==void 0?T(tt({key:g,row:t,pageIndex:f})):[a(fe,{modelValue:h,color:e.color,dark:b.value,dense:e.dense,"onUpdate:modelValue":(Y,ut)=>{I([g],[t],Y,ut)}})];P.unshift(a("td",{class:"q-table--col-auto-width"},X))}const L={key:g,class:{selected:h}};return e.onRowClick!==void 0&&(L.class["cursor-pointer"]=!0,L.onClick=T=>{n("RowClick",T,t,f)}),e.onRowDblclick!==void 0&&(L.class["cursor-pointer"]=!0,L.onDblclick=T=>{n("RowDblclick",T,t,f)}),e.onRowContextmenu!==void 0&&(L.class["cursor-pointer"]=!0,L.onContextmenu=T=>{n("RowContextmenu",T,t,f)}),a("tr",L,P)}function Ze(){const t=l.body,o=l["top-row"],f=l["bottom-row"];let g=V.value.map((h,k)=>Pe(h,t,k));return o!==void 0&&(g=o({cols:M.value}).concat(g)),f!==void 0&&(g=g.concat(f({cols:M.value}))),a("tbody",g)}function ke(t){return de(t),t.cols=t.cols.map(o=>N({...o},"value",()=>j(o,t.row))),t}function et(t){return de(t),N(t,"value",()=>j(t.col,t.row)),t}function tt(t){return de(t),t}function de(t){Object.assign(t,{cols:M.value,colsMap:we.value,sort:ne,rowIndex:U.value+t.pageIndex,color:e.color,dark:b.value,dense:e.dense}),D.value===!0&&N(t,"selected",()=>ae(t.key),(o,f)=>{I([t.key],[t.row],o,f)}),N(t,"expand",()=>R(t.key),o=>{Ae(t.key,o)})}function j(t,o){const f=typeof t.field=="function"?t.field(o):o[t.field];return t.format!==void 0?t.format(f,o):f}const Q=u(()=>({pagination:S.value,pagesNumber:G.value,isFirstPage:re.value,isLastPage:oe.value,firstPage:ie,prevPage:se,nextPage:ue,lastPage:ce,inFullscreen:s.value,toggleFullscreen:d}));function lt(){const t=l.top,o=l["top-left"],f=l["top-right"],g=l["top-selection"],h=D.value===!0&&g!==void 0&&le.value>0,k="q-table__top relative-position row items-center";if(t!==void 0)return a("div",{class:k},[t(Q.value)]);let P;if(h===!0?P=g(Q.value).slice():(P=[],o!==void 0?P.push(a("div",{class:"q-table__control"},[o(Q.value)])):e.title&&P.push(a("div",{class:"q-table__control"},[a("div",{class:["q-table__title",e.titleClass]},e.title)]))),f!==void 0&&(P.push(a("div",{class:"q-table__separator col"})),P.push(a("div",{class:"q-table__control"},[f(Q.value)]))),P.length!==0)return a("div",{class:k},P)}const xe=u(()=>_e.value===!0?null:Ne.value);function Re(){const t=at();return e.loading===!0&&l.loading===void 0&&t.push(a("tr",{class:"q-table__progress"},[a("th",{class:"relative-position",colspan:qe.value},Ce())])),a("thead",t)}function at(){const t=l.header,o=l["header-cell"];if(t!==void 0)return t(ve({header:!0})).slice();const f=M.value.map(g=>{const h=l[`header-cell-${g.name}`],k=h!==void 0?h:o,P=ve({col:g});return k!==void 0?k(P):a(Mt,{key:g.name,props:P},()=>g.label)});if(Ee.value===!0&&e.grid!==!0)f.unshift(a("th",{class:"q-table--col-auto-width"}," "));else if(ye.value===!0){const g=l["header-selection"],h=g!==void 0?g(ve({})):[a(fe,{color:e.color,modelValue:xe.value,dark:b.value,dense:e.dense,"onUpdate:modelValue":Te})];f.unshift(a("th",{class:"q-table--col-auto-width"},h))}return[a("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},f)]}function ve(t){return Object.assign(t,{cols:M.value,sort:ne,colsMap:we.value,color:e.color,dark:b.value,dense:e.dense}),ye.value===!0&&N(t,"selected",()=>xe.value,Te),t}function Te(t){_e.value===!0&&(t=!1),I(V.value.map(c.value),V.value,t)}const J=u(()=>{const t=[e.iconFirstPage||i.iconSet.table.firstPage,e.iconPrevPage||i.iconSet.table.prevPage,e.iconNextPage||i.iconSet.table.nextPage,e.iconLastPage||i.iconSet.table.lastPage];return i.lang.rtl===!0?t.reverse():t});function nt(){if(e.hideBottom===!0)return;if(We.value===!0){if(e.hideNoData===!0)return;const f=e.loading===!0?e.loadingLabel||i.lang.table.loading:e.filter?e.noResultsLabel||i.lang.table.noResults:e.noDataLabel||i.lang.table.noData,g=l["no-data"],h=g!==void 0?[g({message:f,icon:i.iconSet.table.warning,filter:e.filter})]:[a(ge,{class:"q-table__bottom-nodata-icon",name:i.iconSet.table.warning}),f];return a("div",{class:ee+" q-table__bottom--nodata"},h)}const t=l.bottom;if(t!==void 0)return a("div",{class:ee},[t(Q.value)]);const o=e.hideSelectedBanner!==!0&&D.value===!0&&le.value>0?[a("div",{class:"q-table__control"},[a("div",[(e.selectedRowsLabel||i.lang.table.selectedRecords)(le.value)])])]:[];if(e.hidePagination!==!0)return a("div",{class:ee+" justify-end"},ot(o));if(o.length!==0)return a("div",{class:ee},o)}function rt(t){F({page:1,rowsPerPage:t.value})}function ot(t){let o;const{rowsPerPage:f}=S.value,g=e.paginationLabel||i.lang.table.pagination,h=l.pagination,k=e.rowsPerPageOptions.length>1;if(t.push(a("div",{class:"q-table__separator col"})),k===!0&&t.push(a("div",{class:"q-table__control"},[a("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||i.lang.table.recordsPerPage]),a(kt,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:f,options:Ue.value,displayValue:f===0?i.lang.table.allRows:f,dark:b.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":rt})])),h!==void 0)o=h(Q.value);else if(o=[a("span",f!==0?{class:"q-table__bottom-item"}:{},[f?g(U.value+1,Math.min(W.value,K.value),K.value):g(1,he.value,K.value)])],f!==0&&G.value>1){const P={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(P.size="sm"),G.value>2&&o.push(a(Z,{key:"pgFirst",...P,icon:J.value[0],disable:re.value,onClick:ie})),o.push(a(Z,{key:"pgPrev",...P,icon:J.value[1],disable:re.value,onClick:se}),a(Z,{key:"pgNext",...P,icon:J.value[2],disable:oe.value,onClick:ue})),G.value>2&&o.push(a(Z,{key:"pgLast",...P,icon:J.value[3],disable:oe.value,onClick:ce}))}return t.push(a("div",{class:"q-table__control"},o)),t}function it(){const t=e.gridHeader===!0?[a("table",{class:"q-table"},[Re()])]:e.loading===!0&&l.loading===void 0?Ce():void 0;return a("div",{class:"q-table__middle"},t)}function st(){const t=l.item!==void 0?l.item:o=>{const f=o.cols.map(h=>a("div",{class:"q-table__grid-item-row"},[a("div",{class:"q-table__grid-item-title"},[h.label]),a("div",{class:"q-table__grid-item-value"},[h.value])]));if(D.value===!0){const h=l["body-selection"],k=h!==void 0?h(o):[a(fe,{modelValue:o.selected,color:e.color,dark:b.value,dense:e.dense,"onUpdate:modelValue":(P,L)=>{I([o.key],[o.row],P,L)}})];f.unshift(a("div",{class:"q-table__grid-item-row"},k),a(wt,{dark:b.value}))}const g={class:["q-table__grid-item-card"+w.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(g.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(g.onClick=h=>{n("RowClick",h,o.row,o.pageIndex)}),e.onRowDblclick!==void 0&&(g.onDblclick=h=>{n("RowDblclick",h,o.row,o.pageIndex)})),a("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(o.selected===!0?" q-table__grid-item--selected":"")},[a("div",g,f)])};return a("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},V.value.map((o,f)=>t(ke({key:c.value(o),row:o,pageIndex:f}))))}return Object.assign(v.proxy,{requestServerInteraction:O,setPagination:F,firstPage:ie,prevPage:se,nextPage:ue,lastPage:ce,isRowSelected:ae,clearSelection:He,isRowExpanded:R,setExpanded:p,sort:ne,resetVirtualScroll:Ke,scrollTo:Xe,getCellValue:j}),_t(v.proxy,{filteredSortedRows:()=>te.value,computedRows:()=>V.value,computedRowsNumber:()=>K.value}),()=>{const t=[lt()],o={ref:y,class:C.value};return e.grid===!0?t.push(it()):Object.assign(o,{class:[o.class,e.cardClass],style:e.cardStyle}),t.push(Je(),nt()),e.loading===!0&&l.loading!==void 0&&t.push(l.loading()),a("div",o,t)}}});export{fe as Q,Mt as a,vl as b,dl as c,fl as d};