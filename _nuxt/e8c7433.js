(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{279:function(t,e,n){var content=n(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("6f33bda3",content,!0,{sourceMap:!1})},291:function(t,e,n){var content=n(428);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("3174b02c",content,!0,{sourceMap:!1})},314:function(t,e,n){"use strict";var r=n(488),o=n(495),c=n(489),l={name:"DefaultLayout",data:function(){return{}}},d=n(84),component=Object(d.a)(l,(function(){var t=this._self._c;return t(r.a,[t("app-bar"),this._v(" "),t(c.a,[t(o.a,{staticClass:"pa-0",attrs:{fluid:""}},[t("Nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{AppBar:n(478).default})},323:function(t,e,n){n(324),t.exports=n(325)},360:function(t,e,n){"use strict";n.r(e),e.default=function(t){var e=t.store,n=t.redirect;e.state.isUserAuthenticated||n("https://api.mlmac.io:8080/github/auth")}},368:function(t,e,n){"use strict";n(279)},369:function(t,e,n){var r=n(22)((function(i){return i[1]}));r.push([t.i,"h1[data-v-6ffeedc3]{font-size:20px}",""]),r.locals={},t.exports=r},427:function(t,e,n){"use strict";n(291)},428:function(t,e,n){var r=n(22)((function(i){return i[1]}));r.push([t.i,".v-application a[data-v-3223b5c4]{color:unset}",""]),r.locals={},t.exports=r},429:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return c})),n.d(e,"mutations",(function(){return l})),n.d(e,"actions",(function(){return d}));var r=n(14),o=(n(72),n(31),n(4),"mlmac-token"),c=function(){return{isUserAuthenticated:!1,userToken:"",name:"",created:"",total_queries:-1,queries:-1}},l={setUserToken:function(t,e){t.userToken=e,t.isUserAuthenticated=!0,console.log("set user token")},setStatus:function(t,e){t.name=e.name,t.created=new Date(e.created),t.total_queries=e.total_queries,t.queries=e.queries,console.log("set status",e)}},d={login:function(t,e){var n=this,r=t.commit;t.dispatch,t.redirect;return new Promise((function(t,c){var l=n.$cookies.get(o);l?(console.log("store - token restored from cookie"),e=l):void 0!==e?(console.log("store - token provided, sat as cookie",e),n.$cookies.set(o,e)):(console.log("store - no cookie found and no token provided, redirect"),c("User needs to authenticate")),r("setUserToken",e),n.$http.setToken(e,"Bearer"),console.log("after set token $http",n.$http),t("Logged in")}))},updateStatus:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.commit,n.next=3,e.$http.$get("https://api.mlmac.io:8080/status");case 3:o=n.sent,r("setStatus",o);case 5:case"end":return n.stop()}}),n)})))()}}},478:function(t,e,n){"use strict";n.r(e);var r=n(493),o=n(490),c=n(491),l=n(233),d=n(480),f=n(210),v=n(212),_=n(213),m=n(139),h=n(215),k=n(44),x=n(494),w=n(492),y=(n(31),n(14)),$=(n(72),n(0).a.extend({data:function(){return{links:[{name:"Overview",route:"/#overview",items:[]},{name:"Competition Details",route:"/#details",items:[]}],drawer:!1,details:{}}},fetch:function(){var t=this;return Object(y.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("competition-details").only("toc").fetch();case 2:n=e.sent,r=n.toc,t.links[1].items=r;case 5:case"end":return e.stop()}}),e)})))()},methods:{login:function(){this.$store.dispatch("login").catch((function(){window.location.href="https://api.mlmac.io:8080/github/auth"}))}}})),O=(n(427),n(84)),component=Object(O.a)($,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e(r.a,{attrs:{app:"","clipped-left":""}},[e(o.a,{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),e(c.a,[e("nuxt-link",{attrs:{to:"/"}},[t._v("MLMAC")])],1),t._v(" "),e(w.a),t._v(" "),t._l(t.links,(function(link){return e(l.a,{key:link.name,attrs:{text:"",nuxt:"",to:link.route}},[t._v(t._s(link.name))])}))],2),t._v(" "),e(x.a,{attrs:{app:"",bottom:"",clipped:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[e(m.a,[e(k.a,[e(l.a,{on:{click:t.login}},[e(f.a,{attrs:{left:""}},[t._v(" mdi-github ")]),t._v("Login")],1)],1)],1),t._v(" "),e(m.a,{attrs:{"two-line":""}},[e(h.a,[e(f.a,{attrs:{dark:""}},[t._v(" mdi-account-circle ")])],1),t._v(" "),e(k.a,[e(k.c,[t._v("Username")]),t._v(" "),e(k.b,[t._v("Status")])],1)],1)]},proxy:!0},{key:"append",fn:function(){return[e(d.a),t._v(" "),e(v.a,{attrs:{nav:""}},[e(m.a,{attrs:{nuxt:"",to:"/#organizers"}},[e(k.c,[t._v("Organizers")])],1),t._v(" "),e(m.a,{attrs:{nuxt:"",to:"/terms"}},[e(k.c,[t._v("Terms of Service")])],1)],1)]},proxy:!0}]),model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[t._v(" "),e(d.a),t._v(" "),e(v.a,{attrs:{nav:""}},t._l(t.links,(function(link){return e("div",{key:link.route},["items"in link&&link.items.length>0?e(_.a,{attrs:{value:!0},scopedSlots:t._u([{key:"activator",fn:function(){return[e(k.c,[t._v(t._s(link.name))])]},proxy:!0}],null,!0)},[t._v(" "),e(v.a,{attrs:{nav:""}},t._l(link.items,(function(n,i){return e(m.a,{key:i,attrs:{nuxt:"",to:"/#".concat(n.id)}},[e(k.a,[e(k.c,{staticClass:"ml-5"},[t._v(t._s(n.text))])],1)],1)})),1)],1):e(m.a,{attrs:{nuxt:"",to:link.route}},[e(k.a,[e(k.c,[t._v(t._s(link.name))])],1)],1)],1)})),0)],1)],1)}),[],!1,null,"3223b5c4",null);e.default=component.exports},94:function(t,e,n){"use strict";var r=n(488),o={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},c=(n(368),n(84)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e(r.a,{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"6ffeedc3",null);e.a=component.exports}},[[323,32,7,33]]]);