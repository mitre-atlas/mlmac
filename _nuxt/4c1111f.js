(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{625:function(e,t,r){"use strict";r.r(t);var n=r(0).a.extend({middleware:function(e){var t=e.store,r=e.redirect,n=e.route;if(!t.state.isUserAuthenticated&&!("user"in n.query))return r("https://api.mlmac.io:8080/github/auth");!t.state.isUserAuthenticated&&n.query.user&&t.commit("setUserToken",n.query.user)},data:function(){return{}}}),o=r(85),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[e._v("Logged in - "+e._s(e.$store.state))])}),[],!1,null,null,null);t.default=component.exports}}]);