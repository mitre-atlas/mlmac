(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{238:function(t,e,r){"use strict";var n=r(1),o=r(323);e.a=function(t){var e=t.app,r=t.$config;r.analytics_id&&n.a.use(o.a,{config:{id:r.analytics_id,params:{send_page_view:!1}}},e.router)}},294:function(t,e,r){var content=r(419);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("6f33bda3",content,!0,{sourceMap:!1})},302:function(t,e,r){var content=r(431);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("a6f87fe4",content,!0,{sourceMap:!1})},304:function(t,e,r){var content=r(483);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("cf1de9ca",content,!0,{sourceMap:!1})},326:function(t,e,r){"use strict";var n=r(518),o=r(526),c=r(519),l={name:"DefaultLayout",data:function(){return{}}},f=(r(430),r(85)),component=Object(f.a)(l,(function(){var t=this._self._c;return t(n.a,[t("app-bar"),this._v(" "),t(c.a,[t(o.a,{staticClass:"pa-0",attrs:{fluid:""}},[t("Nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{AppBar:r(502).default})},379:function(t,e,r){r(380),t.exports=r(381)},418:function(t,e,r){"use strict";r(294)},419:function(t,e,r){var n=r(18)((function(i){return i[1]}));n.push([t.i,"h1[data-v-6ffeedc3]{font-size:20px}",""]),n.locals={},t.exports=n},430:function(t,e,r){"use strict";r(302)},431:function(t,e,r){var n=r(18)((function(i){return i[1]}));n.push([t.i,"body{background-color:#121212}",""]),n.locals={},t.exports=n},482:function(t,e,r){"use strict";r(304)},483:function(t,e,r){var n=r(18)((function(i){return i[1]}));n.push([t.i,".v-application a[data-v-4b6f3a18]{color:unset}",""]),n.locals={},t.exports=n},484:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return v})),r.d(e,"getters",(function(){return m})),r.d(e,"mutations",(function(){return d})),r.d(e,"actions",(function(){return h}));r(10),r(12),r(11),r(15),r(9),r(16);var n=r(17),o=r(2);r(74),r(32),r(3);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f="mlmac-token",v=function(){return{isUserAuthenticated:!1,userToken:"",name:"",created:"",total_queries:-1,queries:{},githubUsername:"",githubAvatarUrl:""}},m={isUserAuthenticated:function(t){return t.isUserAuthenticated},githubInfo:function(t){return{username:t.githubUsername,avatarUrl:t.githubAvatarUrl}},totalQueries:function(t){return t.total_queries},queries:function(t){return t.queries},apiKey:function(t){return t.userToken}},d={setUserToken:function(t,e){void 0!==e&&(t.userToken=e,t.isUserAuthenticated=!0)},setStatus:function(t,e){t.name=e.name,t.created=new Date(e.created),t.total_queries=e.total_queries,t.queries=l(l({},t.queries),e.queries)},setGitHubInfo:function(t,e){t.githubUsername=e.login,t.githubAvatarUrl=e.avatar_url},logout:function(t){t.isUserAuthenticated=!1,t.userToken="",t.name="",t.created="",t.total_queries=-1,t.queries={},t.githubUsername="",t.githubAvatarUrl=""}},h={login:function(t,e){var r=this,n=t.commit;return new Promise((function(t,o){var c=r.$cookies.get(f);c?e=c:void 0!==e?r.$cookies.set(f,e,{sameSite:!0}):o(new Error("User needs to authenticate")),e&&(n("setUserToken",e),r.$http.setToken(e,"Bearer")),t("Logged in")}))},updateStatus:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.next=3,e.$http.$get("https://api.mlmac.io:8080/status");case 3:o=r.sent,n("setStatus",o);case 5:case"end":return r.stop()}}),r)})))()},getGitHubInfo:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.next=3,e.$http.$get("https://api.mlmac.io:8080/github_info");case 3:o=r.sent,n("setGitHubInfo",o);case 5:case"end":return r.stop()}}),r)})))()},logout:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.next=3,e.$http.$get("https://api.mlmac.io:8080/logout");case 3:n("logout"),e.$cookies.remove(f);case 5:case"end":return r.stop()}}),r)})))()}}},502:function(t,e,r){"use strict";r.r(e);var n=r(525),o=r(520),c=r(521),l=r(230),f=r(246),v=r(229),m=r(99),d=r(523),h=r(506),_=r(227),k=r(197),w=r(231),y=r(232),O=r(151),x=r(41),j=r(130),A=r(510),U=r(524),P=r(522),S=r(507),L=(r(32),r(10),r(12),r(11),r(3),r(15),r(9),r(16),r(2)),$=r(17),D=(r(74),r(1)),I=r(104);function N(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var R=D.a.extend({data:function(){return{links:[{name:"Overview",route:"/#overview",icon:"mdi-earth",items:[]},{name:"Details",route:"/#details",icon:"mdi-format-list-bulleted",items:[]},{name:"Organizers",route:"/#organizers",icon:"mdi-account-multiple-outline",items:[]},{name:"Terms of Service",route:"/terms",icon:"mdi-file-document-outline",items:[]}],barLinks:[{name:"Starter Kit",href:"https://github.com/mitre-atlas/mlmac-starter-kit/blob/main/mlmac_starter_kit.ipynb",icon:"mdi-language-python",items:[]},{name:"API Docs",route:"/api",icon:"mdi-api",items:[]},{name:"Results",route:"/results",icon:"mdi-checkbox-marked-outline",items:[]}],authLinks:[{name:"View Query Stats",route:"/status",icon:"mdi-chart-box-outline",items:[]},{name:"Submit Answers",route:"/submit",icon:"mdi-send",items:[]}],drawer:!1,details:{},dialog:!1}},fetch:function(){var t=this;return Object($.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("competition-details").only("toc").fetch();case 2:r=e.sent,n=r.toc,t.links[1].items=n;case 5:case"end":return e.stop()}}),e)})))()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?N(Object(source),!0).forEach((function(e){Object(L.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):N(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(I.b)(["apiKey","isUserAuthenticated","githubInfo","totalQueries"])),methods:{login:function(){var t=this;this.$store.dispatch("login").then((function(){t.$store.dispatch("getGitHubInfo"),t.$store.dispatch("updateStatus")})).catch((function(){window.location.href="https://api.mlmac.io:8080/github/auth"}))}}}),M=R,C=(r(482),r(85)),component=Object(C.a)(M,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e(n.a,{attrs:{app:"","clipped-left":""}},[e(o.a,{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),e(c.a,[e("nuxt-link",{attrs:{to:"/"}},[t._v("MLMAC")])],1),t._v(" "),e(P.a),t._v(" "),t._l(t.barLinks,(function(link){return e(f.a,{key:link.name,attrs:{text:"",nuxt:"route"in link,to:"route"in link&&link.route,href:"href"in link&&link.href,target:"href"in link&&"_blank"}},["icon"in link?e(_.a,{attrs:{left:""}},[t._v("\n        "+t._s(link.icon)+"\n      ")]):t._e(),t._v("\n      "+t._s(link.name)+"\n    ")],1)})),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isUserAuthenticated,expression:"isUserAuthenticated"}]},[e(f.a,{attrs:{nuxt:"",to:"/submit"}},[e(_.a,{attrs:{left:""}},[t._v(" mdi-send ")]),t._v("\n        Submit Answers\n      ")],1),t._v(" "),e(d.a,{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(r){var n=r.on,o=r.attrs;return[e(f.a,t._g(t._b({attrs:{icon:"",dark:""}},"v-btn",o,!1),n),[e(_.a,{attrs:{dark:""}},[t._v(" mdi-help-circle-outline ")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),e(v.a,[e(m.d,{staticClass:"text-h5"},[t._v(" Questions? ")]),t._v(" "),e(m.c,[t._v("\n            Join the\n            "),e("a",{staticClass:"blue--text",attrs:{href:"https://join.slack.com/t/mitreatlas/shared_invite/zt-1c84p6wkh-ghNhhnPIFML8e33LcSA18g"}},[t._v("#mlmac channel at mitreatlas.slack.com")])]),t._v(" "),e(m.a,[e(P.a),t._v(" "),e(f.a,{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" OK ")])],1)],1)],1),t._v(" "),e(A.a,{attrs:{bottom:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(r){var n=r.on,o=r.attrs;return[e(f.a,t._g(t._b({attrs:{dark:"",text:"",large:""}},"v-btn",o,!1),n),[e(l.a,{attrs:{size:"36"}},[e(k.a,{attrs:{dark:"",src:t.githubInfo.avatarUrl}})],1),t._v(" "),e(_.a,{attrs:{right:""}},[t._v("mdi-menu-down")])],1)]}}])},[t._v(" "),e(w.a,[e(O.a,{attrs:{nuxt:"",to:"/status"}},[e(j.a,[e(_.a,[t._v("mdi-chart-box-outline")])],1),t._v(" "),e(x.c,[t._v("\n              "+t._s(t.githubInfo.username)+"'s stats\n            ")])],1),t._v(" "),e(h.a),t._v(" "),e(O.a,{attrs:{nuxt:"",to:"/"},on:{click:function(e){return t.$store.dispatch("logout")}}},[e(j.a,[e(_.a,[t._v("mdi-logout")])],1),t._v(" "),e(x.c,[t._v(" Logout")])],1)],1)],1)],1),t._v(" "),e(f.a,{directives:[{name:"show",rawName:"v-show",value:!t.isUserAuthenticated,expression:"!isUserAuthenticated"}],attrs:{color:"primary"},on:{click:t.login}},[e(_.a,{attrs:{left:""}},[t._v(" mdi-github ")]),t._v("\n      Register / Login\n    ")],1)],2),t._v(" "),e(U.a,{attrs:{app:"",bottom:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(w.a,{attrs:{nav:""}},[e(S.a,[t._v(" Challenge Info ")]),t._v(" "),t._l(t.links,(function(link){return e("div",{key:link.route},["items"in link&&link.items.length>0?e(y.a,{attrs:{value:!0},scopedSlots:t._u([{key:"activator",fn:function(){return["icon"in link?e(j.a,[e(_.a,[t._v("\n                "+t._s(link.icon)+"\n              ")])],1):t._e(),t._v(" "),e(x.c,[t._v(t._s(link.name))])]},proxy:!0}],null,!0)},[t._v(" "),e(w.a,{attrs:{nav:"",dense:""}},t._l(link.items,(function(r,i){return e(O.a,{key:i,attrs:{nuxt:"",to:"/#".concat(r.id)}},[e(x.a,[e(x.b,{staticClass:"ml-10"},[t._v(t._s(r.text))])],1)],1)})),1)],1):e(O.a,{attrs:{nuxt:"",to:link.route}},["icon"in link?e(j.a,[e(_.a,[t._v("\n              "+t._s(link.icon)+"\n            ")])],1):t._e(),t._v(" "),e(x.a,[e(x.c,[t._v(t._s(link.name))])],1)],1)],1)})),t._v(" "),e("div",[e(h.a),t._v(" "),e(S.a,[t._v(" Resources ")]),t._v(" "),t._l(t.barLinks,(function(link){return e(O.a,{key:link.icon,attrs:{nuxt:"route"in link,to:"route"in link&&link.route,href:"href"in link&&link.href,target:"href"in link&&"_blank"}},["icon"in link?e(j.a,[e(_.a,[t._v("\n              "+t._s(link.icon)+"\n            ")])],1):t._e(),t._v(" "),e(x.a,[e(x.c,[t._v(t._s(link.name))])],1)],1)})),t._v(" "),e(O.a,{attrs:{href:"https://join.slack.com/t/mitreatlas/shared_invite/zt-1c84p6wkh-ghNhhnPIFML8e33LcSA18g"}},[e(j.a,[e(_.a,[t._v("mdi-slack")])],1),t._v(" "),e(x.a,[e(x.c,[t._v("#mlmac on Slack")])],1)],1)],2),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isUserAuthenticated,expression:"isUserAuthenticated"}]},[e(h.a),t._v(" "),e(S.a,[t._v(" Actions ")]),t._v(" "),t._l(t.authLinks,(function(link){return e(O.a,{key:link.route,attrs:{nuxt:"route"in link,to:"route"in link&&link.route,href:"href"in link&&link.href,target:"href"in link&&"_blank"}},["icon"in link?e(j.a,[e(_.a,[t._v("\n              "+t._s(link.icon)+"\n            ")])],1):t._e(),t._v(" "),e(x.a,[e(x.c,[t._v(t._s(link.name))])],1)],1)}))],2)],2)],1)],1)}),[],!1,null,"4b6f3a18",null);e.default=component.exports},96:function(t,e,r){"use strict";var n=r(518),o={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},c=(r(418),r(85)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e(n.a,{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"6ffeedc3",null);e.a=component.exports}},[[379,34,7,35]]]);