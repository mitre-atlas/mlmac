(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{539:function(e,t,n){"use strict";n.r(t);var o=n(631),r=n(543),c=(n(70),n(58),n(47),n(0).a.extend({data:function(){return{modelNames:["GPT-2","DistilGPT-2","MiniLM","XLNet","GPT-J","GPT Neo","Bloom 350m","Bloom 2b5","GPT-2 XL","None"],numChoices:12}},computed:{modelNumberChoices:function(){return Array.from(Array(this.numChoices)).map((function(e,i){return i+1}))},headers:function(){for(var e=[{text:"Model Name",value:"name"}],i=1;i<=this.numChoices;i++){var t={text:"".concat(i),value:"".concat(i)};e.push(t)}return e},items:function(){var e=this;return this.modelNames.map((function(t){for(var n={name:t},i=1;i<=e.numChoices;i++)n["".concat(i)]=!1;return n}))}}})),m=n(84),component=Object(m.a)(c,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t(o.a,{attrs:{headers:e.headers,items:e.items,"hide-default-footer":"",caption:"What is the correct model pairing?"},scopedSlots:e._u([e._l(e.modelNumberChoices,(function(i){return{key:"item.".concat(i),fn:function(n){var o=n.item;return[t(r.a,{model:{value:o[i],callback:function(t){e.$set(o,i,t)},expression:"item[i]"}})]}}}))],null,!0)})}),[],!1,null,null,null);t.default=component.exports}}]);