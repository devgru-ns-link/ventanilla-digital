(function(e){function t(t){for(var r,a,s=t[0],o=t[1],u=t[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==i[s]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i={app:0},c=[];function s(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-2d0d79be":"24394427","chunk-2d22d746":"b6e7550b","chunk-4f0acfb5":"df8de894","chunk-75322c28":"1ff185ac","chunk-ec1d8060":"7cd9cbde"}[e]+".js"}function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n={"chunk-4f0acfb5":1,"chunk-75322c28":1,"chunk-ec1d8060":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0d79be":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-4f0acfb5":"7201d4ac","chunk-75322c28":"c8116691","chunk-ec1d8060":"e95425ce"}[e]+".css",i=o.p+r,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=c[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===i))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||i,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],f.parentNode.removeChild(f),n(c)},f.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){a[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}i[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/digital-window/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2612:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return s}));var r=n("be3b");function a(e){return Object(r["a"])({url:"/token/",public:!0,method:"POST",data:e})}function i(e){return Object(r["a"])({url:"/accounts/register/",public:!0,method:"POST",data:e})}function c(e){return Object(r["a"])({url:"/accounts/verify-registration/",public:!0,method:"POST",data:e})}function s(e){return Object(r["a"])({url:"/users/".concat(e,"/"),method:"GET"})}},"452c":function(e,t,n){},"47d9":function(e,t,n){e.exports=n.p+"img/estudiante.cd4f0a1d.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},i=[],c={created:function(){this.$store.dispatch("verifyToken")}},s=c,o=(n("5c0b"),n("b0a0"),n("2877")),u=Object(o["a"])(s,a,i,!1,null,null,null),l=u.exports,d=(n("d3b7"),n("8c4f"));n("bb51");r["a"].use(d["a"]);var f=[{path:"/",name:"Default",component:function(){return n.e("chunk-4f0acfb5").then(n.bind(null,"7b3d"))},redirect:"/home",children:[{path:"/home",name:"Home",component:function(){return Promise.resolve().then(n.bind(null,"bb51"))}},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}}]},{path:"/login",name:"Login",component:function(){return n.e("chunk-ec1d8060").then(n.bind(null,"a55b"))}},{path:"/register",name:"Register",component:function(){return n.e("chunk-75322c28").then(n.bind(null,"73cf"))}},{path:"/verify-user",name:"EmailVerification",component:function(){return n.e("chunk-2d0d79be").then(n.bind(null,"7818"))}}],m=new d["a"]({routes:f}),p=m,b=(n("96cf"),n("1da1")),v=n("2f62"),h=n("57e0"),g=n("2612"),_=n("be3b");function C(e){return Object(_["a"])({url:"/students/".concat(e,"/"),method:"GET"})}r["a"].use(v["a"]);var y=new v["a"].Store({state:{isLogued:!1,user:{},student:{}},mutations:{SET_LOGIN:function(e,t){e.isLogued=t},SET_USER:function(e,t){e.user=t},SET_STUDENT:function(e,t){e.student=t}},actions:{login:function(e,t){var n=e.commit;return new Promise(function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(r,a){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(g["c"])(t);case 3:i=e.sent,Object(h["d"])(i.access),n("SET_LOGIN",!0),r(i),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),a(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}())},logout:function(){return new Promise((function(e,t){Object(h["c"])(),e()}))},verifyToken:function(e){var t=e.commit;return new Promise(function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(n,r){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=Object(h["b"])(),a=Object(h["a"])(a),console.log(a),!a){e.next=10;break}return e.next=6,Object(g["b"])(a.id);case 6:i=e.sent,console.log(i),t("SET_LOGIN",!0),t("SET_USER",i);case 10:n(a);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},getStudent:function(e){var t=e.commit,n=e.state;return new Promise(function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(r,a){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C(n.user.enrrollment);case 3:i=e.sent,console.log(i),t("SET_STUDENT",i),r(),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),a(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}())}},modules:{}}),O=n("289d"),j=n("5530"),k=n("4c93"),w=n("7bb1");Object(w["c"])("required",Object(j["a"])(Object(j["a"])({},k["d"]),{},{message:"Este campo es requerido"})),Object(w["c"])("email",Object(j["a"])(Object(j["a"])({},k["b"]),{},{message:"Ingrese un email válido"})),Object(w["c"])("confirmed",Object(j["a"])(Object(j["a"])({},k["a"]),{},{message:"Las contraseñas no coinciden"})),Object(w["c"])("length",Object(j["a"])(Object(j["a"])({},k["c"]),{},{message:"This field must have 2 options"})),r["a"].use(O["a"]),r["a"].config.productionTip=!1,new r["a"]({router:p,store:y,render:function(e){return e(l)},el:"#app",components:{App:l},template:"<App/>"}).$mount("#app")},"57e0":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return d}));var r=n("a78e"),a=n.n(r),i=n("04e1"),c=n.n(i),s="Access-Token";function o(){return a.a.get(s)}function u(e){return a.a.set(s,e)}function l(e){return a.a.remove(s)}function d(e){return c()(e)}},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"8c7c":function(e,t,n){},"9c0c":function(e,t,n){},"9f40":function(e,t,n){e.exports=n.p+"img/seguimiento.ae8f45fb.jpg"},b0a0:function(e,t,n){"use strict";var r=n("452c"),a=n.n(r);a.a},b622e:function(e,t,n){"use strict";var r=n("8c7c"),a=n.n(r);a.a},ba10:function(e,t,n){e.exports=n.p+"img/Studying-pana.7eb4ee07.svg"},bb51:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),e._m(1),n("div",{staticClass:"container carousel"},[n("b-carousel",{attrs:{"indicator-inside":!1},scopedSlots:e._u([{key:"indicators",fn:function(t){return[n("span",{staticClass:"al image"},[n("img",{attrs:{src:e.getImgUrl(t.i),title:t.i}})])]}}])},e._l(6,(function(t,r){return n("b-carousel-item",{key:r},[n("span",{staticClass:"image"},[n("img",{attrs:{src:e.getImgUrl(r)}})])])})),1)],1),n("section",{staticClass:"section",attrs:{id:"about"}},[e._m(2),n("div",{staticClass:"columns is-centered"},[n("div",{staticClass:"column"},[n("div",{staticClass:"card box cta"},[e._m(3),n("div",{staticClass:"card-content"},[n("div",{staticClass:"media"},[n("div",{staticClass:"media-content"},[n("p",{staticClass:"title is-4 text"},[e._v("Constancia de estudios")]),n("p",{staticClass:"hide"},[e._v("La constancia de estudios es un documento que válida tu participación como estudiante en la institución, es requerida en trámites como becas.")]),n("router-link",{staticClass:"button is-primary",attrs:{tag:"a",to:"/register"}},[n("strong",[e._v("Solicitar")])])],1)])])])]),n("div",{staticClass:"column"},[n("div",{staticClass:"card box cta"},[e._m(4),n("div",{staticClass:"card-content"},[n("div",{staticClass:"media"},[n("div",{staticClass:"media-content"},[n("p",{staticClass:"title is-4"},[e._v("Horario")]),n("p",{staticClass:"hide"},[e._v("El horario es una herramienta que te ayudará a organizarte para tus clases, además de que es muy útil para presentar como evidencia a quién lo solicite.")]),n("router-link",{staticClass:"button is-primary",attrs:{tag:"a",to:"/register"}},[n("strong",[e._v("Solicitar")])])],1)])])])]),n("div",{staticClass:"column"},[n("div",{staticClass:"card box cta"},[e._m(5),n("div",{staticClass:"card-content"},[n("div",{staticClass:"media"},[n("div",{staticClass:"media-content"},[n("p",{staticClass:"title is-4"},[e._v("Seguimiento académico")]),n("p",{staticClass:"hide"},[e._v("El seguimiento escolar es un documento que te ayudará a ver tu historial académico, es útil para ver tu progreso escolar.")]),n("router-link",{staticClass:"button is-primary",attrs:{tag:"a",to:"/register"}},[n("strong",[e._v("Solicitar")])])],1)])])])])])])])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"hero is-default is-bold"},[r("div",{staticClass:"hero-body"},[r("div",{staticClass:"container has-text-centered"},[r("div",{staticClass:"columns is-vcentered"},[r("div",{staticClass:"column is-5"},[r("figure",{staticClass:"is-4by3"},[r("img",{attrs:{src:n("ba10"),alt:"Description"}})])]),r("div",{staticClass:"column is-6 is-offset-1"},[r("h1",{staticClass:"title is-2"},[e._v("Servicios Escolares")]),r("h2",{staticClass:"subtitle is-4"},[e._v("Instituto Tecnológico de Mérida")]),r("br"),r("p",{staticClass:"has-text-centered"},[e._v(" Bienvenido a la "),r("b",[e._v("#VentanillaDigitalITM")])]),r("br"),r("p",[r("b",[e._v("Ventanilla Digital ITM")]),e._v(" es un manera de realizar tus trámites escolares, de una manera "),r("b",[e._v("sencilla, rápida y remota")])])])])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"box cta"},[n("p",{staticClass:"has-text-centered"},[n("span",{staticClass:"tag is-primary"},[e._v("Ventanilla Digital")]),e._v(" Una iniciativa especial para la solución de problemas generados por el coronavirus Covid-19 ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container has-text-centered"},[n("h2",{staticClass:"title"},[e._v("Trámites")]),n("p",[e._v("Selecciona el trámite que deseas realizar")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card-image"},[r("figure",{staticClass:"image img"},[r("img",{attrs:{src:n("47d9"),alt:"Placeholder image"}})])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card-image"},[r("figure",{staticClass:"image"},[r("img",{attrs:{src:n("f544"),alt:"Placeholder image"}})])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card-image"},[r("figure",{staticClass:"image"},[r("img",{attrs:{src:n("9f40"),alt:"Placeholder image"}})])])}],i={methods:{getImgUrl:function(e){return"https://picsum.photos/id/43".concat(e,"/1230/500")}}},c=i,s=(n("b622e"),n("2877")),o=Object(s["a"])(c,r,a,!1,null,"4b8fc090",null);t["default"]=o.exports},be3b:function(e,t,n){"use strict";n("d3b7");var r=n("bc3a"),a=n.n(r),i=n("57e0"),c=a.a.create({baseURL:"https://digital-window.herokuapp.com/api/v1",mode:"cors",credentials:"same-origin",timeout:2e4});c.interceptors.request.use((function(e){return e.public||(e.headers.Authorization="Bearer "+Object(i["b"])()),e})),c.interceptors.response.use((function(e){return e.data}),(function(e){return console.log(e.response.data),Promise.reject(e.response.data)})),t["a"]=c},f544:function(e,t,n){e.exports=n.p+"img/horario.45a9cc88.jpg"}});
//# sourceMappingURL=app.e3951072.js.map