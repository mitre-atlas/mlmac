(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{225:function(t,e,r){"use strict";e.a=function(t){var e=t.store,r=t.$cookies,n=t.$http;if(!e.getters.isUserAuthenticated){var o=r.get("mlmac-token");o&&(e.commit("setUserToken",o),n.setToken(o,"Bearer"),e.dispatch("getGitHubInfo"),e.dispatch("updateStatus"))}}},281:function(t,e,r){var content=r(371);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("6f33bda3",content,!0,{sourceMap:!1})},293:function(t,e,r){var content=r(432);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("4d2c18ae",content,!0,{sourceMap:!1})},316:function(t,e,r){"use strict";var n=r(495),o=r(502),c=r(496),l={name:"DefaultLayout",data:function(){return{}}},f=r(84),component=Object(f.a)(l,(function(){var t=this._self._c;return t(n.a,[t("app-bar"),this._v(" "),t(c.a,[t(o.a,{staticClass:"pa-0",attrs:{fluid:""}},[t("Nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{AppBar:r(482).default})},325:function(t,e,r){r(326),t.exports=r(327)},362:function(t,e,r){"use strict";r.r(e),e.default=function(t){var e=t.store,r=t.redirect;e.state.isUserAuthenticated||r("https://api.mlmac.io:8080/github/auth")}},370:function(t,e,r){"use strict";r(281)},371:function(t,e,r){var n=r(21)((function(i){return i[1]}));n.push([t.i,"h1[data-v-6ffeedc3]{font-size:20px}",""]),n.locals={},t.exports=n},431:function(t,e,r){"use strict";r(293)},432:function(t,e,r){var n=r(21)((function(i){return i[1]}));n.push([t.i,".v-application a[data-v-1b7249a0]{color:unset}",""]),n.locals={},t.exports=n},433:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return c})),r.d(e,"mutations",(function(){return l})),r.d(e,"getters",(function(){return f})),r.d(e,"actions",(function(){return d}));var n=r(15),o=(r(74),r(30),r(3),"mlmac-token"),c=function(){return{isUserAuthenticated:!1,userToken:"",name:"",created:"",total_queries:-1,queries:-1,githubUsername:"",githubAvatarUrl:""}},l={setUserToken:function(t,e){t.userToken=e,t.isUserAuthenticated=!0},setStatus:function(t,e){t.name=e.name,t.created=new Date(e.created),t.total_queries=e.total_queries,t.queries=e.queries},setGitHubInfo:function(t,e){t.githubUsername=e.login,t.githubAvatarUrl=e.avatar_url},logout:function(t){t.isUserAuthenticated=!1,t.userToken="",t.name="",t.created="",t.total_queries=-1,t.queries=-1,t.githubUsername="",t.githubAvatarUrl=""}},f={isUserAuthenticated:function(t){return t.isUserAuthenticated},githubInfo:function(t){return{username:t.githubUsername,avatarUrl:t.githubAvatarUrl}},totalQueries:function(t){return t.total_queries}},d={login:function(t,e){var r=this,n=t.commit;return new Promise((function(t,c){var l=r.$cookies.get(o);l?(console.log("store - token restored from cookie"),e=l):void 0!==e?(console.log("store - token provided, sat as cookie",e),r.$cookies.set(o,e)):(console.log("store - no cookie found and no token provided, redirect"),c(new Error("User needs to authenticate"))),n("setUserToken",e),r.$http.setToken(e,"Bearer"),t("Logged in")}))},updateStatus:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.next=3,e.$http.$get("https://api.mlmac.io:8080/status");case 3:o=r.sent,n("setStatus",o);case 5:case"end":return r.stop()}}),r)})))()},getGitHubInfo:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.next=3,e.$http.$get("https://api.mlmac.io:8080/github_info");case 3:o=r.sent,n("setGitHubInfo",o);case 5:case"end":return r.stop()}}),r)})))()},logout:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.next=3,e.$http.$get("https://api.mlmac.io:8080/logout");case 3:o=r.sent,console.log("logout",o),n("logout");case 6:case"end":return r.stop()}}),r)})))()}}},482:function(t,e,r){"use strict";r.r(e);var n=r(500),o=r(497),c=r(498),l=r(216),f=r(238),d=r(484),v=r(214),h=r(186),m=r(217),_=r(218),k=r(144),x=r(220),w=r(39),y=r(487),O=r(501),U=r(499),A=(r(30),r(11),r(14),r(13),r(3),r(16),r(10),r(17),r(2)),j=r(15),$=(r(74),r(1)),I=r(104);function L(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var P=$.a.extend({data:function(){return{links:[{name:"Overview",route:"/#overview",items:[]},{name:"Competition Details",route:"/#details",items:[]}],authLinks:[{name:"API Docs",route:"/api",items:[]},{name:"Submit Answers",route:"/submit",items:[]}],drawer:!1,details:{}}},fetch:function(){var t=this;return Object(j.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("competition-details").only("toc").fetch();case 2:r=e.sent,n=r.toc,t.links[1].items=n;case 5:case"end":return e.stop()}}),e)})))()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?L(Object(source),!0).forEach((function(e){Object(A.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):L(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(I.b)(["isUserAuthenticated","githubInfo","totalQueries"])),methods:{login:function(){var t=this;this.$store.dispatch("login").then((function(){t.$store.dispatch("getGitHubInfo")})).catch((function(){window.location.href="https://api.mlmac.io:8080/github/auth"}))}}}),S=P,T=(r(431),r(84)),component=Object(T.a)(S,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e(n.a,{attrs:{app:"","clipped-left":""}},[e(o.a,{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),e(c.a,[e("nuxt-link",{attrs:{to:"/"}},[t._v("MLMAC")])],1),t._v(" "),e(U.a),t._v(" "),t._l(t.links,(function(link){return e(f.a,{key:link.name,attrs:{text:"",nuxt:"",to:link.route}},[t._v("\n      "+t._s(link.name)+"\n    ")])})),t._v(" "),t.isUserAuthenticated?e("div",[t._l(t.authLinks,(function(link){return e(f.a,{key:link.name,attrs:{text:"",nuxt:"",to:link.route}},[t._v("\n        "+t._s(link.name)+"\n      ")])})),t._v(" "),e(y.a,{attrs:{bottom:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(r){var n=r.on,o=r.attrs;return[e(f.a,t._g(t._b({attrs:{dark:"",text:"",large:""}},"v-btn",o,!1),n),[e(l.a,{attrs:{size:"36"}},[e(h.a,{attrs:{dark:"",src:t.githubInfo.avatarUrl}})],1),t._v(" "),e(v.a,{attrs:{right:""}},[t._v("mdi-menu-down")])],1)]}}],null,!1,1590692296)},[t._v(" "),e(m.a,[e(k.a,[e(w.c,[t._v("Logged in as "+t._s(t.githubInfo.username))])],1),t._v(" "),e(d.a),t._v(" "),t.isUserAuthenticated?e(f.a,{attrs:{block:""},on:{click:function(e){return t.$store.dispatch("logout")}}},[t._v("\n            Logout\n          ")]):t._e()],1)],1)],2):t._e()],2),t._v(" "),e(O.a,{attrs:{app:"",bottom:"",clipped:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[t.isUserAuthenticated?e(k.a,{attrs:{"two-line":""}},[e(x.a,[e(h.a,{attrs:{dark:"",src:t.githubInfo.avatarUrl}})],1),t._v(" "),e(w.a,[e(w.c,[t._v(" "+t._s(t.githubInfo.username))]),t._v(" "),e(w.b,[t._v(t._s(t.totalQueries)+" total queries")])],1)],1):e(k.a,[e(w.a,[e(f.a,{on:{click:t.login}},[e(v.a,{attrs:{left:""}},[t._v(" mdi-github ")]),t._v("\n            Login\n          ")],1)],1)],1)]},proxy:!0},{key:"append",fn:function(){return[e(d.a),t._v(" "),e(m.a,{attrs:{nav:""}},[e(k.a,{attrs:{nuxt:"",to:"/#organizers"}},[e(w.c,[t._v("Organizers")])],1),t._v(" "),e(k.a,{attrs:{nuxt:"",to:"/terms"}},[e(w.c,[t._v("Terms of Service")])],1),t._v(" "),t.isUserAuthenticated?e(f.a,{attrs:{block:""},on:{click:function(e){return t.$store.dispatch("logout")}}},[t._v("\n          Logout\n        ")]):t._e()],1)]},proxy:!0}]),model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[t._v(" "),e(d.a),t._v(" "),e(m.a,{attrs:{nav:""}},[t._l(t.links,(function(link){return e("div",{key:link.route},["items"in link&&link.items.length>0?e(_.a,{attrs:{value:!0},scopedSlots:t._u([{key:"activator",fn:function(){return[e(w.c,[t._v(t._s(link.name))])]},proxy:!0}],null,!0)},[t._v(" "),e(m.a,{attrs:{nav:""}},t._l(link.items,(function(r,i){return e(k.a,{key:i,attrs:{nuxt:"",to:"/#".concat(r.id)}},[e(w.a,[e(w.c,{staticClass:"ml-5"},[t._v(t._s(r.text))])],1)],1)})),1)],1):e(k.a,{attrs:{nuxt:"",to:link.route}},[e(w.a,[e(w.c,[t._v(t._s(link.name))])],1)],1)],1)})),t._v(" "),t.isUserAuthenticated?e("div",t._l(t.authLinks,(function(link){return e(k.a,{key:link.route,attrs:{nuxt:"",to:link.route}},[e(w.a,[e(w.c,[t._v(t._s(link.name))])],1)],1)})),1):t._e()],2)],1)],1)}),[],!1,null,"1b7249a0",null);e.default=component.exports},94:function(t,e,r){"use strict";var n=r(495),o={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},c=(r(370),r(84)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e(n.a,{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"6ffeedc3",null);e.a=component.exports}},[[325,32,7,33]]]);