(function(A){function t(t){for(var a,o,s=t[0],i=t[1],c=t[2],l=0,g=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&g.push(n[o][0]),n[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(A[a]=i[a]);u&&u(t);while(g.length)g.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var A,t=0;t<r.length;t++){for(var e=r[t],a=!0,o=1;o<e.length;o++){var i=e[o];0!==n[i]&&(a=!1)}a&&(r.splice(t--,1),A=s(s.s=e[0]))}return A}var a={},n={app:0},r=[];function o(A){return s.p+"js/"+({about:"about"}[A]||A)+"."+{about:"7c65acd0"}[A]+".js"}function s(t){if(a[t])return a[t].exports;var e=a[t]={i:t,l:!1,exports:{}};return A[t].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.e=function(A){var t=[],e=n[A];if(0!==e)if(e)t.push(e[2]);else{var a=new Promise((function(t,a){e=n[A]=[t,a]}));t.push(e[2]=a);var r,i=document.createElement("script");i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=o(A);var c=new Error;r=function(t){i.onerror=i.onload=null,clearTimeout(l);var e=n[A];if(0!==e){if(e){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;c.message="Loading chunk "+A+" failed.\n("+a+": "+r+")",c.name="ChunkLoadError",c.type=a,c.request=r,e[1](c)}n[A]=void 0}};var l=setTimeout((function(){r({type:"timeout",target:i})}),12e4);i.onerror=i.onload=r,document.head.appendChild(i)}return Promise.all(t)},s.m=A,s.c=a,s.d=function(A,t,e){s.o(A,t)||Object.defineProperty(A,t,{enumerable:!0,get:e})},s.r=function(A){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},s.t=function(A,t){if(1&t&&(A=s(A)),8&t)return A;if(4&t&&"object"===typeof A&&A&&A.__esModule)return A;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:A}),2&t&&"string"!=typeof A)for(var a in A)s.d(e,a,function(t){return A[t]}.bind(null,a));return e},s.n=function(A){var t=A&&A.__esModule?function(){return A["default"]}:function(){return A};return s.d(t,"a",t),t},s.o=function(A,t){return Object.prototype.hasOwnProperty.call(A,t)},s.p="/",s.oe=function(A){throw console.error(A),A};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;r.push([0,"chunk-vendors"]),e()})({0:function(A,t,e){A.exports=e("56d7")},"56d7":function(A,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),n=(e("8aa50"),function(){var A=this,t=A.$createElement,a=A._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("v-img",{staticClass:"mr-2",attrs:{"max-height":"40","max-width":"40",contain:"",src:e("a70b")}}),a("v-toolbar-title",[A._v("Data Bank - ( Prototype )")]),a("v-spacer"),a("v-menu",{attrs:{left:"",bottom:""},scopedSlots:A._u([{key:"activator",fn:function(t){var e=t.on;return[a("v-btn",A._g({attrs:{icon:""}},e),[a("v-icon",[A._v("mdi-dots-vertical")])],1)]}}])},[a("v-list",A._l(1,(function(t){return a("v-list-item",{key:t,attrs:{dense:""}},[a("v-list-item-title",[A._v("Logout")])],1)})),1)],1)],1),a("v-content",[a("HelloWorld")],1)],1)}),r=[],o=function(){var A=this,t=A.$createElement,a=A._self._c||t;return a("v-container",[a("v-row",{attrs:{dense:"",justify:"center"}},[a("v-col",{attrs:{cols:"6"}},[a("v-card",{attrs:{flat:""}},[a("v-row",{attrs:{cols:"12"}},[a("v-col",{attrs:{cols:"5"}},[a("v-card-title",{staticClass:"headline"},[A._v(" Cloud Storage ")])],1),a("v-spacer"),a("v-col",{staticClass:"mr-4",attrs:{cols:"3"}},[a("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:A._u([{key:"activator",fn:function(t){var e=t.on;return[a("v-btn",A._g({staticClass:"ma-4",attrs:{dense:"",color:"primary"}},e),[A._v("Create New Folder")])]}}]),model:{value:A.dialog,callback:function(t){A.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[A._v("Create New Folder")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Folder Name"},model:{value:A.editedItem.name,callback:function(t){A.$set(A.editedItem,"name",t)},expression:"editedItem.name"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:A.close}},[A._v("Cancel")]),a("v-btn",{attrs:{text:""},on:{click:A.save}},[A._v("Save")])],1)],1)],1)],1)],1),a("v-row",{staticClass:"px-2 py-1",attrs:{dense:""}},A._l(A.items,(function(t,n){return a("v-col",{key:n,attrs:{cols:"4"}},[a("v-menu",{attrs:{transition:"slide-x-transition"},scopedSlots:A._u([{key:"activator",fn:function(n){var r=n.on;return[a("v-tooltip",{attrs:{bottom:""},scopedSlots:A._u([{key:"activator",fn:function(n){var o=n.on;return[a("v-card",A._g({attrs:{color:t.color}},Object.assign({},o,r)),[a("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[a("div",[a("v-card-title",{staticClass:"headline",domProps:{textContent:A._s(t.name)}}),a("v-card-subtitle",{domProps:{textContent:A._s(t.artist)}})],1),a("v-avatar",{staticClass:"ma-3",attrs:{size:"100",tile:""}},[a("v-img",{attrs:{src:e("e7fb"),contain:""}})],1)],1)])]}}],null,!0)},[a("span",[A._v(" "+A._s(t.name)+" ")])])]}}],null,!0)},[a("v-list",A._l(A.items2,(function(t,e){return a("v-list-item",{key:e,attrs:{dense:""}},[a("v-list-item-title",[A._v(A._s(t.title))])],1)})),1)],1)],1)})),1)],1)],1)],1)],1)},s=[],i=(e("d3b7"),e("96cf"),e("1da1")),c="/api",l={name:"HelloWorld",data:function(){return{dialog:!1,editedIndex:-1,items:[{name:"1",src:"..assets\folder-icon.png",artist:"0 documents"}],items2:[{title:"Open Folder"},{title:"Rename Folder"}],editedItem:{name:""},defaultItem:{name:""}}},watch:{dialog:function(A){A||this.close}},created:function(){var A=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=A.items,t.next=3,fetch(c).then((function(A){return console.log("agi1"),A.json()})).then((function(A){console.log(A),e=A}));case 3:A.items=e,console.log(e);case 5:case"end":return t.stop()}}),t)})))()},methods:{close:function(){var A=this;this.dialog=!1,setTimeout((function(){A.editedItem=Object.assign({},A.defaultItem),A.editedIndex=-1}),300)},save:function(){this.editedIndex>-1&&Object.assign(this.items[this.editedIndex],this.editedItem),this.close()}}},u=l,g=e("2877"),d=e("6544"),C=e.n(d),B=e("8212"),E=e("8336"),v=e("b0af"),f=e("99d9"),m=e("62ad"),I=e("a523"),w=e("169a"),p=e("adda"),Q=e("8860"),J=e("da13"),k=e("5d23"),b=e("e449"),D=e("0fd9"),h=e("2fa4"),M=e("8654"),y=e("3a2f"),T=Object(g["a"])(u,o,s,!1,null,null,null),S=T.exports;C()(T,{VAvatar:B["a"],VBtn:E["a"],VCard:v["a"],VCardActions:f["a"],VCardSubtitle:f["b"],VCardText:f["c"],VCardTitle:f["d"],VCol:m["a"],VContainer:I["a"],VDialog:w["a"],VImg:p["a"],VList:Q["a"],VListItem:J["a"],VListItemTitle:k["a"],VMenu:b["a"],VRow:D["a"],VSpacer:h["a"],VTextField:M["a"],VTooltip:y["a"]});var x={name:"App",components:{HelloWorld:S},data:function(){return{}}},j=x,R=e("7496"),H=e("40dc"),P=e("a75b"),V=e("132d"),X=e("2a7f"),O=Object(g["a"])(j,n,r,!1,null,null,null),Y=O.exports;C()(O,{VApp:R["a"],VAppBar:H["a"],VBtn:E["a"],VContent:P["a"],VIcon:V["a"],VImg:p["a"],VList:Q["a"],VListItem:J["a"],VListItemTitle:k["a"],VMenu:b["a"],VSpacer:h["a"],VToolbarTitle:X["a"]});var N=e("8c4f"),F=function(){var A=this,t=A.$createElement,a=A._self._c||t;return a("div",{staticClass:"home"},[a("img",{attrs:{alt:"Vue logo",src:e("a70b")}}),a("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},L=[],z={name:"Home",components:{HelloWorld:S}},U=z,G=Object(g["a"])(U,F,L,!1,null,null,null),W=G.exports;a["a"].use(N["a"]);var _=[{path:"/",name:"Home",component:W},{path:"/about",name:"About",component:function(){return e.e("about").then(e.bind(null,"f820"))}}],q=new N["a"]({mode:"history",base:"/",routes:_}),Z=q,K=e("f309");a["a"].use(K["a"]);var $=new K["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:Z,vuetify:$,render:function(A){return A(Y)}}).$mount("#app")},a70b:function(A,t,e){A.exports=e.p+"img/nia-logo.d82653ed.png"},e7fb:function(A,t){A.exports="data:image/png;base64,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"}});
//# sourceMappingURL=app.d61825f0.js.map