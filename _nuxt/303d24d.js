(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{221:function(t,e,n){"use strict";e.a=function(t){var e=t.store,n=t.$cookies,r=t.$http;if(!e.getters.isUserAuthenticated){var o=n.get("mlmac-token");o&&(e.commit("setUserToken",o),r.setToken(o,"Bearer"),e.dispatch("getGitHubInfo"),e.dispatch("updateStatus"))}}},280:function(t,e,n){var content=n(370);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("6f33bda3",content,!0,{sourceMap:!1})},292:function(t,e,n){var content=n(429);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("5d368978",content,!0,{sourceMap:!1})},315:function(t,e,n){"use strict";var r=n(490),o=n(497),c=n(491),l={name:"DefaultLayout",data:function(){return{}}},f=n(84),component=Object(f.a)(l,(function(){var t=this._self._c;return t(r.a,[t("app-bar"),this._v(" "),t(c.a,[t(o.a,{staticClass:"pa-0",attrs:{fluid:""}},[t("Nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{AppBar:n(479).default})},324:function(t,e,n){n(325),t.exports=n(326)},361:function(t,e,n){"use strict";n.r(e),e.default=function(t){var e=t.store,n=t.redirect;e.state.isUserAuthenticated||n("https://api.mlmac.io:8080/github/auth")}},369:function(t,e,n){"use strict";n(280)},370:function(t,e,n){var r=n(22)((function(i){return i[1]}));r.push([t.i,"h1[data-v-6ffeedc3]{font-size:20px}",""]),r.locals={},t.exports=r},428:function(t,e,n){"use strict";n(292)},429:function(t,e,n){var r=n(22)((function(i){return i[1]}));r.push([t.i,".v-application a[data-v-39675b79]{color:unset}",""]),r.locals={},t.exports=r},430:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return c})),n.d(e,"mutations",(function(){return l})),n.d(e,"getters",(function(){return f})),n.d(e,"actions",(function(){return d}));var r=n(13),o=(n(72),n(31),n(3),"mlmac-token"),c=function(){return{isUserAuthenticated:!1,userToken:"",name:"",created:"",total_queries:-1,queries:-1,githubUsername:"",githubAvatarUrl:""}},l={setUserToken:function(t,e){t.userToken=e,t.isUserAuthenticated=!0,console.log("set user token",t.isUserAuthenticated)},setStatus:function(t,e){t.name=e.name,t.created=new Date(e.created),t.total_queries=e.total_queries,t.queries=e.queries,console.log("set status",e)},setGitHubInfo:function(t,e){t.githubUsername=e.login,t.githubAvatarUrl=e.avatar_url}},f={isUserAuthenticated:function(t){return t.isUserAuthenticated}},d={login:function(t,e){var n=this,r=t.commit;return new Promise((function(t,c){var l=n.$cookies.get(o);l?(console.log("store - token restored from cookie"),e=l):void 0!==e?(console.log("store - token provided, sat as cookie",e),n.$cookies.set(o,e)):(console.log("store - no cookie found and no token provided, redirect"),c(new Error("User needs to authenticate"))),r("setUserToken",e),n.$http.setToken(e,"Bearer"),t("Logged in")}))},updateStatus:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.commit,n.next=3,e.$http.$get("https://api.mlmac.io:8080/status");case 3:o=n.sent,r("setStatus",o);case 5:case"end":return n.stop()}}),n)})))()},getGitHubInfo:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.commit,n.next=3,e.$http.$get("https://api.mlmac.io:8080/github_info");case 3:o=n.sent,r("setGitHubInfo",o);case 5:case"end":return n.stop()}}),n)})))()}}},479:function(t,e,n){"use strict";n.r(e);var r=n(495),o=n(492),c=n(493),l=n(234),f=n(481),d=n(210),v=n(182),h=n(212),m=n(213),_=n(140),k=n(215),x=n(39),w=n(496),y=n(494),O=(n(31),n(11),n(12),n(9),n(3),n(15),n(10),n(16),n(2)),U=n(13),j=(n(72),n(0)),A=n(104);function $(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var P=j.a.extend({data:function(){return{links:[{name:"Overview",route:"/#overview",items:[]},{name:"Competition Details",route:"/#details",items:[]}],authLinks:[{name:"Submit Answers",route:"/submit",items:[]}],drawer:!1,details:{}}},fetch:function(){var t=this;return Object(U.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("competition-details").only("toc").fetch();case 2:n=e.sent,r=n.toc,t.links[1].items=r;case 5:case"end":return e.stop()}}),e)})))()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?$(Object(source),!0).forEach((function(e){Object(O.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):$(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(A.b)(["isUserAuthenticated"])),methods:{login:function(){var t=this;this.$store.dispatch("login").then((function(){t.$store.dispatch("getGitHubInfo")})).catch((function(){window.location.href="https://api.mlmac.io:8080/github/auth"}))}}}),S=P,L=(n(428),n(84)),component=Object(L.a)(S,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e(r.a,{attrs:{app:"","clipped-left":""}},[e(o.a,{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),e(c.a,[e("nuxt-link",{attrs:{to:"/"}},[t._v("MLMAC")])],1),t._v(" "),e(y.a),t._v(" "),t._l(t.links,(function(link){return e(l.a,{key:link.name,attrs:{text:"",nuxt:"",to:link.route}},[t._v("\n      "+t._s(link.name)+"\n    ")])})),t._v(" "),t.isUserAuthenticated?e("div",t._l(t.authLinks,(function(link){return e(l.a,{key:link.name,attrs:{text:"",nuxt:"",to:link.route}},[t._v("\n        "+t._s(link.name)+"\n      ")])})),1):t._e()],2),t._v(" "),e(w.a,{attrs:{app:"",bottom:"",clipped:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[t.isUserAuthenticated?e(_.a,{attrs:{"two-line":""}},[e(k.a,[e(v.a,{attrs:{dark:"",src:t.$store.state.githubAvatarUrl}})],1),t._v(" "),e(x.a,[e(x.c,[t._v("\n            "+t._s(t.$store.state.githubUsername))]),t._v(" "),e(x.b,[t._v(t._s(t.$store.state.total_queries)+" total\n            queries")])],1)],1):e(_.a,[e(x.a,[e(l.a,{on:{click:t.login}},[e(d.a,{attrs:{left:""}},[t._v(" mdi-github ")]),t._v("\n            Login\n          ")],1)],1)],1)]},proxy:!0},{key:"append",fn:function(){return[e(f.a),t._v(" "),e(h.a,{attrs:{nav:""}},[e(_.a,{attrs:{nuxt:"",to:"/#organizers"}},[e(x.c,[t._v("Organizers")])],1),t._v(" "),e(_.a,{attrs:{nuxt:"",to:"/terms"}},[e(x.c,[t._v("Terms of Service")])],1)],1)]},proxy:!0}]),model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[t._v(" "),e(f.a),t._v(" "),e(h.a,{attrs:{nav:""}},[t._l(t.links,(function(link){return e("div",{key:link.route},["items"in link&&link.items.length>0?e(m.a,{attrs:{value:!0},scopedSlots:t._u([{key:"activator",fn:function(){return[e(x.c,[t._v(t._s(link.name))])]},proxy:!0}],null,!0)},[t._v(" "),e(h.a,{attrs:{nav:""}},t._l(link.items,(function(n,i){return e(_.a,{key:i,attrs:{nuxt:"",to:"/#".concat(n.id)}},[e(x.a,[e(x.c,{staticClass:"ml-5"},[t._v(t._s(n.text))])],1)],1)})),1)],1):e(_.a,{attrs:{nuxt:"",to:link.route}},[e(x.a,[e(x.c,[t._v(t._s(link.name))])],1)],1)],1)})),t._v(" "),t.isUserAuthenticated?e("div",t._l(t.authLinks,(function(link){return e(_.a,{key:link.route,attrs:{nuxt:"",to:link.route}},[e(x.a,[e(x.c,[t._v(t._s(link.name))])],1)],1)})),1):t._e()],2)],1)],1)}),[],!1,null,"39675b79",null);e.default=component.exports},94:function(t,e,n){"use strict";var r=n(490),o={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},c=(n(369),n(84)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e(r.a,{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"6ffeedc3",null);e.a=component.exports}},[[324,32,7,33]]]);