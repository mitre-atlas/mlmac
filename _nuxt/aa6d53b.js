(window.webpackJsonp=window.webpackJsonp||[]).push([[33,10,25],{561:function(t,e,n){"use strict";n.r(e);var r=n(227),o=(n(10),n(12),n(11),n(3),n(15),n(9),n(16),n(2)),l=n(104);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var h={name:"ApiKey",computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)(["apiKey"])),methods:{copyText:function(){navigator.clipboard.writeText(this.apiKey)}}},d=h,f=n(85),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("span",[e("span",{staticClass:"text-body-1"},[t._v("API Key:")]),t._v(" "),e("code",[t._v(t._s(t.apiKey))]),t._v(" "),e(r.a,{attrs:{right:""},on:{click:t.copyText}},[t._v(" mdi-content-copy ")])],1)}),[],!1,null,null,null);e.default=component.exports},615:function(t,e,n){"use strict";n.r(e);var r=n(246),o=n(229),l=n(99),c=n(506),h=n(135),d=n(227),f=n(83),y=n(522),m=n(2),v=n(20),O=(n(25),n(42),n(73),n(332),n(3),n(86),n(36),n(52),n(10),n(12),n(11),n(15),n(9),n(16),n(40)),x=n(8),w=n(46);function _(t,e){var n=e.minX,r=e.maxX,o=e.minY,l=e.maxY,c=t.length,h=Math.max.apply(Math,Object(w.a)(t)),d=Math.min.apply(Math,Object(w.a)(t)),f=(r-n)/(c-1),y=(l-o)/(h-d||1);return t.map((function(t,e){return{x:n+e*f,y:l-(t-d)*y,value:t}}))}function j(t,e){var n=e.minX,r=e.maxX,o=e.minY,l=e.maxY,c=t.length,h=Math.max.apply(Math,Object(w.a)(t)),d=Math.min.apply(Math,Object(w.a)(t));d>0&&(d=0),h<0&&(h=0);var f=r/c,y=(l-o)/(h-d||1),m=l-Math.abs(d*y);return t.map((function(t,e){var r=Math.abs(y*t);return{x:n+e*f,y:m-r+ +(t<0)*r,height:r,value:t}}))}n(88);function S(t){return parseInt(t,10)}function D(t,e,n){return S(t.x+n.x)===S(2*e.x)&&S(t.y+n.y)===S(2*e.y)}function P(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function L(t,e,n){var r=t.x-e.x,o=t.y-e.y,l=Math.sqrt(r*r+o*o),c=r/l,h=o/l;return{x:e.x+c*n,y:e.y+h*n}}function $(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:75,o=t.shift(),l=t[t.length-1];return(n?"M".concat(o.x," ").concat(r-o.x+2," L").concat(o.x," ").concat(o.y):"M".concat(o.x," ").concat(o.y))+t.map((function(n,r){var l=t[r+1],c=t[r-1]||o,h=l&&D(l,n,c);if(!l||h)return"L".concat(n.x," ").concat(n.y);var d=Math.min(P(c,n),P(l,n)),f=d/2<e?d/2:e,y=L(c,n,f),m=L(l,n,f);return"L".concat(y.x," ").concat(y.y,"S").concat(n.x," ").concat(n.y," ").concat(m.x," ").concat(m.y)})).join("")+(n?"L".concat(l.x," ").concat(r-o.x+2," Z"):"")}function M(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function E(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?M(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):M(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var k=Object(x.a)(O.a).extend({name:"VSparkline",inheritAttrs:!1,props:{autoDraw:Boolean,autoDrawDuration:{type:Number,default:2e3},autoDrawEasing:{type:String,default:"ease"},autoLineWidth:{type:Boolean,default:!1},color:{type:String,default:"primary"},fill:{type:Boolean,default:!1},gradient:{type:Array,default:function(){return[]}},gradientDirection:{type:String,validator:function(t){return["top","bottom","left","right"].includes(t)},default:"top"},height:{type:[String,Number],default:75},labels:{type:Array,default:function(){return[]}},labelSize:{type:[Number,String],default:7},lineWidth:{type:[String,Number],default:4},padding:{type:[String,Number],default:8},showLabels:Boolean,smooth:{type:[Boolean,Number,String],default:!1},type:{type:String,default:"trend",validator:function(t){return["trend","bar"].includes(t)}},value:{type:Array,default:function(){return[]}},width:{type:[Number,String],default:300}},data:function(){return{lastLength:0}},computed:{parsedPadding:function(){return Number(this.padding)},parsedWidth:function(){return Number(this.width)},parsedHeight:function(){return parseInt(this.height,10)},parsedLabelSize:function(){return parseInt(this.labelSize,10)||7},totalHeight:function(){var t=this.parsedHeight;return this.hasLabels&&(t+=1.5*parseInt(this.labelSize,10)),t},totalWidth:function(){var t=this.parsedWidth;return"bar"===this.type&&(t=Math.max(this.value.length*this._lineWidth,t)),t},totalValues:function(){return this.value.length},_lineWidth:function(){if(this.autoLineWidth&&"trend"!==this.type){var t=this.parsedPadding*(this.totalValues+1);return(this.parsedWidth-t)/this.totalValues}return parseFloat(this.lineWidth)||4},boundary:function(){if("bar"===this.type)return{minX:0,maxX:this.totalWidth,minY:0,maxY:this.parsedHeight};var t=this.parsedPadding;return{minX:t,maxX:this.totalWidth-t,minY:t,maxY:this.parsedHeight-t}},hasLabels:function(){return Boolean(this.showLabels||this.labels.length>0||this.$scopedSlots.label)},parsedLabels:function(){for(var t=[],e=this._values,n=e.length,i=0;t.length<n;i++){var r=e[i],o=this.labels[i];o||(o="object"===Object(v.a)(r)?r.value:r),t.push({x:r.x,value:String(o)})}return t},normalizedValues:function(){return this.value.map((function(t){return"number"==typeof t?t:t.value}))},_values:function(){return"trend"===this.type?_(this.normalizedValues,this.boundary):j(this.normalizedValues,this.boundary)},textY:function(){var t=this.parsedHeight;return"trend"===this.type&&(t-=4),t},_radius:function(){return!0===this.smooth?8:Number(this.smooth)}},watch:{value:{immediate:!0,handler:function(){var t=this;this.$nextTick((function(){if(t.autoDraw&&"bar"!==t.type&&t.$refs.path){var path=t.$refs.path,e=path.getTotalLength();t.fill?(path.style.transformOrigin="bottom center",path.style.transition="none",path.style.transform="scaleY(0)",path.getBoundingClientRect(),path.style.transition="transform ".concat(t.autoDrawDuration,"ms ").concat(t.autoDrawEasing),path.style.transform="scaleY(1)"):(path.style.transition="none",path.style.strokeDasharray=e+" "+e,path.style.strokeDashoffset=Math.abs(e-(t.lastLength||0)).toString(),path.getBoundingClientRect(),path.style.transition="stroke-dashoffset ".concat(t.autoDrawDuration,"ms ").concat(t.autoDrawEasing),path.style.strokeDashoffset="0"),t.lastLength=e}}))}}},methods:{genGradient:function(){var t=this,e=this.gradientDirection,n=this.gradient.slice();n.length||n.push("");var r=Math.max(n.length-1,1),o=n.reverse().map((function(e,n){return t.$createElement("stop",{attrs:{offset:n/r,"stop-color":e||"currentColor"}})}));return this.$createElement("defs",[this.$createElement("linearGradient",{attrs:{id:this._uid,gradientUnits:"userSpaceOnUse",x1:"left"===e?"100%":"0",y1:"top"===e?"100%":"0",x2:"right"===e?"100%":"0",y2:"bottom"===e?"100%":"0"}},o)])},genG:function(t){return this.$createElement("g",{style:{fontSize:"8",textAnchor:"middle",dominantBaseline:"mathematical",fill:"currentColor"}},t)},genPath:function(){var t=_(this.normalizedValues,this.boundary);return this.$createElement("path",{attrs:{d:$(t,this._radius,this.fill,this.parsedHeight),fill:this.fill?"url(#".concat(this._uid,")"):"none",stroke:this.fill?"none":"url(#".concat(this._uid,")")},ref:"path"})},genLabels:function(t){var e=this,n=this.parsedLabels.map((function(n,i){return e.$createElement("text",{attrs:{x:n.x+t+e._lineWidth/2,y:e.textY+.75*e.parsedLabelSize,"font-size":Number(e.labelSize)||7}},[e.genLabel(n,i)])}));return this.genG(n)},genLabel:function(t,e){return this.$scopedSlots.label?this.$scopedSlots.label({index:e,value:t.value}):t.value},genBars:function(){if(this.value&&!(this.totalValues<2)){var t=j(this.normalizedValues,this.boundary),e=(Math.abs(t[0].x-t[1].x)-this._lineWidth)/2;return this.$createElement("svg",{attrs:{display:"block",viewBox:"0 0 ".concat(this.totalWidth," ").concat(this.totalHeight)}},[this.genGradient(),this.genClipPath(t,e,this._lineWidth,"sparkline-bar-"+this._uid),this.hasLabels?this.genLabels(e):void 0,this.$createElement("g",{attrs:{"clip-path":"url(#sparkline-bar-".concat(this._uid,"-clip)"),fill:"url(#".concat(this._uid,")")}},[this.$createElement("rect",{attrs:{x:0,y:0,width:this.totalWidth,height:this.height}})])])}},genClipPath:function(t,e,n,r){var o=this,l="number"==typeof this.smooth?this.smooth:this.smooth?2:0;return this.$createElement("clipPath",{attrs:{id:"".concat(r,"-clip")}},t.map((function(t){return o.$createElement("rect",{attrs:{x:t.x+e,y:t.y,width:n,height:t.height,rx:l,ry:l}},[o.autoDraw?o.$createElement("animate",{attrs:{attributeName:"height",from:0,to:t.height,dur:"".concat(o.autoDrawDuration,"ms"),fill:"freeze"}}):void 0])})))},genTrend:function(){return this.$createElement("svg",this.setTextColor(this.color,{attrs:E(E({},this.$attrs),{},{display:"block","stroke-width":this._lineWidth||1,viewBox:"0 0 ".concat(this.width," ").concat(this.totalHeight)})}),[this.genGradient(),this.hasLabels&&this.genLabels(-this._lineWidth/2),this.genPath()])}},render:function(t){if(!(this.totalValues<2))return"trend"===this.type?this.genTrend():this.genBars()}}),W=n(21),z=(n(248),n(51),n(104));function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function A(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var B={name:"Status",data:function(){return{numModels:12,show:!1,lastUpdatedDate:(new Date).toLocaleString()}},mounted:function(){this.$store.state.isUserAuthenticated&&this.$store.dispatch("updateStatus")},computed:A(A({},Object(z.b)(["githubInfo","queries","totalQueries"])),{},{value:function(){for(var t=Array(this.numModels).fill(0),e=0,n=Object.entries(this.queries);e<n.length;e++){var r=Object(W.a)(n[e],2),o=r[0],l=r[1];t[parseInt(o)]=l}return t},labels:function(){return Object(w.a)(Array(this.numModels).keys()).map((function(t){return t.toString()}))}}),methods:{refresh:function(){this.$store.dispatch("updateStatus"),this.lastUpdatedDate=(new Date).toLocaleString()}}},N=n(85),component=Object(N.a)(B,(function(){var t=this,e=t._self._c;return e(o.a,[e(l.d,[e("span",{staticClass:"text-h6"},[t._v(t._s(t.githubInfo.username))]),t._v(" "),e(y.a),t._v(" "),e("ApiKey")],1),t._v(" "),e(l.c,{staticClass:"text-center"},[e("div",{staticClass:"text-h4 font-weight-thin"},[t._v("\n      "+t._s(t.totalQueries)+" total queries\n    ")])]),t._v(" "),e(l.c,[e(f.a,{attrs:{color:"rgba(0, 0, 0, .12)"}},[e(k,{attrs:{type:"bar",value:t.value,labels:t.labels,"label-size":"5"}})],1),t._v(" "),e("span",{staticClass:"text-caption grey--text font-weight-light"},[t._v(t._s("Last updated at ".concat(t.lastUpdatedDate)))])],1),t._v(" "),e(l.a,[e(r.a,{attrs:{text:""},on:{click:t.refresh}},[e(d.a,{attrs:{left:""}},[t._v(" mdi-refresh ")]),t._v("\n      Refresh stats\n    ")],1),t._v(" "),e(y.a),t._v(" "),e(r.a,{attrs:{text:""},on:{click:function(e){t.show=!t.show}}},[e("span",[t._v("Show query data")]),t._v(" "),e(d.a,{attrs:{right:""}},[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),t._v(" "),e(h.a,[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[e(c.a),t._v(" "),e(l.c,[e("pre",[t._v(t._s(t.queries))])])],1)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ApiKey:n(561).default})},782:function(t,e,n){"use strict";n.r(e);var r=n(526),o={name:"StatusPage",beforeRouteEnter:function(t,e,n){n((function(t){t.$store.getters.isUserAuthenticated||(alert("Please login to view this page. Click OK to return to the homepage."),t.$router.push("/"))}))}},l=n(85),component=Object(l.a)(o,(function(){var t=this._self._c;return t(r.a,[t("Status")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Status:n(615).default})}}]);