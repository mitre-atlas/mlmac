(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{504:function(t,e,n){"use strict";n.r(e);var r=n(597),o=n(484),l=n(3),h=n(16),c=(n(52),n(57),n(64),n(288),n(8),n(88),n(35),n(53),n(21),n(22),n(24),n(32),n(25),n(33),n(131)),d=n(44),f=n(90);function m(t,e){var n=e.minX,r=e.maxX,o=e.minY,l=e.maxY,h=t.length,c=Math.max.apply(Math,Object(f.a)(t)),d=Math.min.apply(Math,Object(f.a)(t)),m=(r-n)/(h-1),y=(l-o)/(c-d||1);return t.map((function(t,e){return{x:n+e*m,y:l-(t-d)*y,value:t}}))}function y(t,e){var n=e.minX,r=e.maxX,o=e.minY,l=e.maxY,h=t.length,c=Math.max.apply(Math,Object(f.a)(t)),d=Math.min.apply(Math,Object(f.a)(t));d>0&&(d=0),c<0&&(c=0);var m=r/h,y=(l-o)/(c-d||1),v=l-Math.abs(d*y);return t.map((function(t,e){var r=Math.abs(y*t);return{x:n+e*m,y:v-r+ +(t<0)*r,height:r,value:t}}))}n(77);function v(t){return parseInt(t,10)}function x(t,e,n){return v(t.x+n.x)===v(2*e.x)&&v(t.y+n.y)===v(2*e.y)}function w(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function S(t,e,n){var r=t.x-e.x,o=t.y-e.y,l=Math.sqrt(r*r+o*o),h=r/l,c=o/l;return{x:e.x+h*n,y:e.y+c*n}}function M(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:75,o=t.shift(),l=t[t.length-1];return(n?"M".concat(o.x," ").concat(r-o.x+2," L").concat(o.x," ").concat(o.y):"M".concat(o.x," ").concat(o.y))+t.map((function(n,r){var l=t[r+1],h=t[r-1]||o,c=l&&x(l,n,h);if(!l||c)return"L".concat(n.x," ").concat(n.y);var d=Math.min(w(h,n),w(l,n)),f=d/2<e?d/2:e,m=S(h,n,f),y=S(l,n,f);return"L".concat(m.x," ").concat(m.y,"S").concat(n.x," ").concat(n.y," ").concat(y.x," ").concat(y.y)})).join("")+(n?"L".concat(l.x," ").concat(r-o.x+2," Z"):"")}function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var L=Object(d.a)(c.a).extend({name:"VSparkline",inheritAttrs:!1,props:{autoDraw:Boolean,autoDrawDuration:{type:Number,default:2e3},autoDrawEasing:{type:String,default:"ease"},autoLineWidth:{type:Boolean,default:!1},color:{type:String,default:"primary"},fill:{type:Boolean,default:!1},gradient:{type:Array,default:function(){return[]}},gradientDirection:{type:String,validator:function(t){return["top","bottom","left","right"].includes(t)},default:"top"},height:{type:[String,Number],default:75},labels:{type:Array,default:function(){return[]}},labelSize:{type:[Number,String],default:7},lineWidth:{type:[String,Number],default:4},padding:{type:[String,Number],default:8},showLabels:Boolean,smooth:{type:[Boolean,Number,String],default:!1},type:{type:String,default:"trend",validator:function(t){return["trend","bar"].includes(t)}},value:{type:Array,default:function(){return[]}},width:{type:[Number,String],default:300}},data:function(){return{lastLength:0}},computed:{parsedPadding:function(){return Number(this.padding)},parsedWidth:function(){return Number(this.width)},parsedHeight:function(){return parseInt(this.height,10)},parsedLabelSize:function(){return parseInt(this.labelSize,10)||7},totalHeight:function(){var t=this.parsedHeight;return this.hasLabels&&(t+=1.5*parseInt(this.labelSize,10)),t},totalWidth:function(){var t=this.parsedWidth;return"bar"===this.type&&(t=Math.max(this.value.length*this._lineWidth,t)),t},totalValues:function(){return this.value.length},_lineWidth:function(){if(this.autoLineWidth&&"trend"!==this.type){var t=this.parsedPadding*(this.totalValues+1);return(this.parsedWidth-t)/this.totalValues}return parseFloat(this.lineWidth)||4},boundary:function(){if("bar"===this.type)return{minX:0,maxX:this.totalWidth,minY:0,maxY:this.parsedHeight};var t=this.parsedPadding;return{minX:t,maxX:this.totalWidth-t,minY:t,maxY:this.parsedHeight-t}},hasLabels:function(){return Boolean(this.showLabels||this.labels.length>0||this.$scopedSlots.label)},parsedLabels:function(){for(var t=[],e=this._values,n=e.length,i=0;t.length<n;i++){var r=e[i],o=this.labels[i];o||(o="object"===Object(h.a)(r)?r.value:r),t.push({x:r.x,value:String(o)})}return t},normalizedValues:function(){return this.value.map((function(t){return"number"==typeof t?t:t.value}))},_values:function(){return"trend"===this.type?m(this.normalizedValues,this.boundary):y(this.normalizedValues,this.boundary)},textY:function(){var t=this.parsedHeight;return"trend"===this.type&&(t-=4),t},_radius:function(){return!0===this.smooth?8:Number(this.smooth)}},watch:{value:{immediate:!0,handler:function(){var t=this;this.$nextTick((function(){if(t.autoDraw&&"bar"!==t.type&&t.$refs.path){var path=t.$refs.path,e=path.getTotalLength();t.fill?(path.style.transformOrigin="bottom center",path.style.transition="none",path.style.transform="scaleY(0)",path.getBoundingClientRect(),path.style.transition="transform ".concat(t.autoDrawDuration,"ms ").concat(t.autoDrawEasing),path.style.transform="scaleY(1)"):(path.style.transition="none",path.style.strokeDasharray=e+" "+e,path.style.strokeDashoffset=Math.abs(e-(t.lastLength||0)).toString(),path.getBoundingClientRect(),path.style.transition="stroke-dashoffset ".concat(t.autoDrawDuration,"ms ").concat(t.autoDrawEasing),path.style.strokeDashoffset="0"),t.lastLength=e}}))}}},methods:{genGradient:function(){var t=this,e=this.gradientDirection,n=this.gradient.slice();n.length||n.push("");var r=Math.max(n.length-1,1),o=n.reverse().map((function(e,n){return t.$createElement("stop",{attrs:{offset:n/r,"stop-color":e||"currentColor"}})}));return this.$createElement("defs",[this.$createElement("linearGradient",{attrs:{id:this._uid,gradientUnits:"userSpaceOnUse",x1:"left"===e?"100%":"0",y1:"top"===e?"100%":"0",x2:"right"===e?"100%":"0",y2:"bottom"===e?"100%":"0"}},o)])},genG:function(t){return this.$createElement("g",{style:{fontSize:"8",textAnchor:"middle",dominantBaseline:"mathematical",fill:"currentColor"}},t)},genPath:function(){var t=m(this.normalizedValues,this.boundary);return this.$createElement("path",{attrs:{d:M(t,this._radius,this.fill,this.parsedHeight),fill:this.fill?"url(#".concat(this._uid,")"):"none",stroke:this.fill?"none":"url(#".concat(this._uid,")")},ref:"path"})},genLabels:function(t){var e=this,n=this.parsedLabels.map((function(n,i){return e.$createElement("text",{attrs:{x:n.x+t+e._lineWidth/2,y:e.textY+.75*e.parsedLabelSize,"font-size":Number(e.labelSize)||7}},[e.genLabel(n,i)])}));return this.genG(n)},genLabel:function(t,e){return this.$scopedSlots.label?this.$scopedSlots.label({index:e,value:t.value}):t.value},genBars:function(){if(this.value&&!(this.totalValues<2)){var t=y(this.normalizedValues,this.boundary),e=(Math.abs(t[0].x-t[1].x)-this._lineWidth)/2;return this.$createElement("svg",{attrs:{display:"block",viewBox:"0 0 ".concat(this.totalWidth," ").concat(this.totalHeight)}},[this.genGradient(),this.genClipPath(t,e,this._lineWidth,"sparkline-bar-"+this._uid),this.hasLabels?this.genLabels(e):void 0,this.$createElement("g",{attrs:{"clip-path":"url(#sparkline-bar-".concat(this._uid,"-clip)"),fill:"url(#".concat(this._uid,")")}},[this.$createElement("rect",{attrs:{x:0,y:0,width:this.totalWidth,height:this.height}})])])}},genClipPath:function(t,e,n,r){var o=this,l="number"==typeof this.smooth?this.smooth:this.smooth?2:0;return this.$createElement("clipPath",{attrs:{id:"".concat(r,"-clip")}},t.map((function(t){return o.$createElement("rect",{attrs:{x:t.x+e,y:t.y,width:n,height:t.height,rx:l,ry:l}},[o.autoDraw?o.$createElement("animate",{attrs:{attributeName:"height",from:0,to:t.height,dur:"".concat(o.autoDrawDuration,"ms"),fill:"freeze"}}):void 0])})))},genTrend:function(){return this.$createElement("svg",this.setTextColor(this.color,{attrs:_(_({},this.$attrs),{},{display:"block","stroke-width":this._lineWidth||1,viewBox:"0 0 ".concat(this.width," ").concat(this.totalHeight)})}),[this.genGradient(),this.hasLabels&&this.genLabels(-this._lineWidth/2),this.genPath()])}},render:function(t){if(!(this.totalValues<2))return"trend"===this.type?this.genTrend():this.genBars()}}),O=(n(27),n(205),n(59),n(43),n(283),n(71),n(0).a.extend({data:function(){return{names:["Purple Parrots","Blue Barracudas","Orange Iguanas","Red Jaguars","Silver Snakes","Green Monkeys"],headers:[{text:"Rank",value:"rank",filterable:!1},{text:"Name",value:"name"},{text:"Score",value:"score",filterable:!1},{text:"Queries",value:"queries",filterable:!1},{text:"Last submission",value:"lastSubmission",filterable:!1},{text:"Show queries",value:"data-table-expand",filterable:!1}],numModels:12,end:Date.now(),start:(new Date).setDate(0),search:""}},computed:{numItems:function(){return this.names.length},randomScores:function(){return Array.from({length:this.numItems},(function(){return Math.floor(100*Math.random())})).sort().reverse()},items:function(){var t=this,e=this.names.map((function(e){return{name:e,lastSubmission:new Date(t.start+Math.random()*(t.end-t.start)),numCorrect:Math.floor(Math.random()*t.numModels),queries:Math.floor(100*Math.random()),rank:0,sparklineValues:Array.from({length:10},(function(){return Math.floor(100*Math.random())})),color:e.split(" ")[0].toLowerCase()}}));return e.sort((function(a,b){if(a.numCorrect>b.numCorrect)return-1;if(a.numCorrect===b.numCorrect){if(a.queries<b.queries)return-1;if(a.queries===b.queries)return a.lastSubmission.getTime()-b.lastSubmission.getTime()}return 1})),e.map((function(t,i){return t.rank=i+1,t}))}}})),D=n(75),component=Object(D.a)(O,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e(r.a,{attrs:{dark:"",headers:t.headers,items:t.items,"show-expand":"","item-key":"name",search:t.search},scopedSlots:t._u([{key:"item.rank",fn:function(n){var r=n.item;return[t._v("\n    "+t._s(r.rank)+"\n    "),1===r.rank?e("span",[e(o.a,{attrs:{right:"",small:""}},[t._v(" mdi-crown ")])],1):t._e()]}},{key:"item.lastSubmission",fn:function(e){var n=e.item;return[t._v("\n    "+t._s(n.lastSubmission.toLocaleString(void 0,{dateStyle:"short",timeStyle:"short"}))+"\n  ")]}},{key:"item.score",fn:function(e){var n=e.item;return[t._v("\n    "+t._s(n.numCorrect)+" / "+t._s(t.numModels)+"\n  ")]}},{key:"expanded-item",fn:function(t){var n=t.headers,r=t.item;return[e("td",{attrs:{colspan:n.length}},[e(L,{attrs:{"auto-draw":"",smooth:"",value:r.sparklineValues,width:"500",color:r.color}})],1)]}}])})}),[],!1,null,null,null);e.default=component.exports}}]);