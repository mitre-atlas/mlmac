(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{584:function(t,e,r){"use strict";r.r(e);var n=r(216),o=r(241),c=r(528),l=r(508),v=r(486),h=r(232),f=r(214),d=r(186),_=r(82),w=r(499),y=r(751),O=(r(10),r(13),r(12),r(16),r(9),r(17),r(49)),m=r(19),j=r(2),x=(r(322),r(239),r(73),r(3),r(51),r(85),r(101));function D(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function P(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?D(Object(source),!0).forEach((function(e){Object(j.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):D(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var k={name:"Status",data:function(){return{numModels:11,show:!1,lastUpdatedDate:(new Date).toLocaleString()}},mounted:function(){},computed:P(P({},Object(x.b)(["apiKey","githubInfo","queries","totalQueries"])),{},{value:function(){for(var t=Array(this.numModels).fill(0),e=0,r=Object.entries(this.queries);e<r.length;e++){var n=Object(m.a)(r[e],2),o=n[0],c=n[1];t[parseInt(o)]=c}return t},labels:function(){return Object(O.a)(Array(this.numModels).keys()).map((function(t){return t.toString()}))}}),methods:{refresh:function(){this.$store.dispatch("updateStatus"),this.lastUpdatedDate=(new Date).toLocaleString()},copyText:function(){navigator.clipboard.writeText(this.apiKey)}}},S=r(84),component=Object(S.a)(k,(function(){var t=this,e=t._self._c;return e(c.a,[e(l.d,[e(n.a,{attrs:{size:"36"}},[e(d.a,{attrs:{left:"",dark:"",src:t.githubInfo.avatarUrl}})],1),t._v(" "),e("span",{staticClass:"text-h6"},[t._v(t._s(t.githubInfo.username))]),t._v(" "),e(w.a),t._v(" "),e("span",[e("span",{staticClass:"text-body-1"},[t._v("API Key:")]),t._v(" "),e("code",[t._v(t._s(t.apiKey))])]),t._v(" "),e(f.a,{attrs:{right:""},on:{click:t.copyText}},[t._v(" mdi-content-copy ")])],1),t._v(" "),e(l.c,{staticClass:"text-center"},[e("div",{staticClass:"text-h4 font-weight-thin"},[t._v("\n      "+t._s(t.totalQueries)+" total queries\n    ")])]),t._v(" "),e(l.c,[e(_.a,{attrs:{color:"rgba(0, 0, 0, .12)"}},[e(y.a,{attrs:{type:"bar",value:t.value,labels:t.labels,"label-size":"5"}})],1),t._v(" "),e("span",{staticClass:"text-caption grey--text font-weight-light"},[t._v(t._s("Last updated at ".concat(t.lastUpdatedDate)))])],1),t._v(" "),e(l.a,[e(o.a,{attrs:{text:""},on:{click:t.refresh}},[e(f.a,{attrs:{left:""}},[t._v(" mdi-refresh ")]),t._v("\n      Refresh stats\n    ")],1),t._v(" "),e(w.a),t._v(" "),e(o.a,{attrs:{text:""},on:{click:function(e){t.show=!t.show}}},[e("span",[t._v("Show query data")]),t._v(" "),e(f.a,{attrs:{right:""}},[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),t._v(" "),e(h.a,[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[e(v.a),t._v(" "),e(l.c,[e("pre",[t._v(t._s(t.queries))])])],1)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);