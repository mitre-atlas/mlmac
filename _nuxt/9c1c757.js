(window.webpackJsonp=window.webpackJsonp||[]).push([[16,15],{536:function(e,t,n){"use strict";var o=n(106),r=n(1);t.a=r.a.extend({name:"rippleable",directives:{ripple:o.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}})},541:function(e,t,n){"use strict";n.d(t,"b",(function(){return h}));n(3),n(85),n(12);var o=n(534),r=n(536),l=n(239),c=n(14);function h(e){e.preventDefault()}t.a=Object(c.a)(o.a,r.a,l.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var e=this,t=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return e.valueComparator(n,t)})):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel:function(){var label=o.a.options.methods.genLabel.call(this);return label?(label.data.on={click:h},label):label},genInput:function(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:h},ref:"input"})},onClick:function(e){this.onChange(),this.$emit("click",e)},onChange:function(){var e=this;if(this.isInteractive){var t=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!e.valueComparator(n,t)}))).length===n&&input.push(t)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(input,t)?null:t:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(e){this.isFocused=!0,this.$emit("focus",e)},onBlur:function(e){this.isFocused=!1,this.$emit("blur",e)},onKeydown:function(e){}}})},542:function(e,t,n){"use strict";n(13),n(12),n(16),n(17);var o=n(2),r=(n(3),n(33),n(10),n(29),n(68),n(513),n(41),n(514),n(515),n(516),n(517),n(518),n(519),n(520),n(521),n(522),n(523),n(524),n(525),n(526),n(51),n(42),n(9),n(63),n(321),n(1)),l=n(96),c=n(0);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=["sm","md","lg","xl"],m=f.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),v=f.reduce((function(e,t){return e["offset"+Object(c.E)(t)]={type:[String,Number],default:null},e}),{}),y=f.reduce((function(e,t){return e["order"+Object(c.E)(t)]={type:[String,Number],default:null},e}),{}),S={col:Object.keys(m),offset:Object.keys(v),order:Object.keys(y)};function I(e,t,n){var o=e;if(null!=n&&!1!==n){if(t){var r=t.replace(e,"");o+="-".concat(r)}return"col"!==e||""!==n&&!0!==n?(o+="-".concat(n)).toLowerCase():o.toLowerCase()}}var x=new Map;t.a=r.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},v),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var n=t.props,data=t.data,r=t.children,c=(t.parent,"");for(var h in n)c+=String(n[h]);var d=x.get(c);return d||function(){var e,t;for(t in d=[],S)S[t].forEach((function(e){var o=n[e],r=I(t,e,o);r&&d.push(r)}));var r=d.some((function(e){return e.startsWith("col-")}));d.push((e={col:!r||!n.cols},Object(o.a)(e,"col-".concat(n.cols),n.cols),Object(o.a)(e,"offset-".concat(n.offset),n.offset),Object(o.a)(e,"order-".concat(n.order),n.order),Object(o.a)(e,"align-self-".concat(n.alignSelf),n.alignSelf),e)),x.set(c,d)}(),e(n.tag,Object(l.a)(data,{class:d}),r)}})},544:function(e,t,n){var content=n(545);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(21).default)("361e3f58",content,!0,{sourceMap:!1})},545:function(e,t,n){var o=n(20)((function(i){return i[1]}));o.push([e.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),o.locals={},e.exports=o},546:function(e,t,n){var content=n(547);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(21).default)("59931a20",content,!0,{sourceMap:!1})},547:function(e,t,n){var o=n(20)((function(i){return i[1]}));o.push([e.i,".theme--light.v-radio--is-disabled label{color:rgba(0,0,0,.38)}.theme--dark.v-radio--is-disabled label{color:hsla(0,0%,100%,.5)}.v-radio{align-items:center;display:flex;height:auto;outline:none}.v-radio--is-disabled{pointer-events:none;cursor:default}.v-input--radio-group.v-input--radio-group--row .v-radio{margin-right:16px}",""]),o.locals={},e.exports=o},551:function(e,t,n){"use strict";n.r(t);n(10),n(13),n(16),n(9),n(17);var o=n(2),r=(n(73),n(3),n(12),n(69),n(105),n(228),n(42),n(58),n(544),n(548)),l=n(555),c=n(96),h=n(0);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m=f(f({},r.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1}),v=r.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,n){return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:r.a.options.props.menuProps.type,default:function(){return m}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return f(f({},r.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var n=Object(h.r)(t,e.itemText),text=null!=n?String(n):"";return e.filter(t,String(e.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=r.a.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),f(f({},m),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(i){return e.valueComparator(e.getValue(i),e.getValue(e.internalValue))}))},listData:function(){var data=r.a.options.computed.listData.call(this);return data.props=f(f({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var n=this;if(e!==t){if(!this.autoSelectFirst){var o=t[this.$refs.menu.listIndex];o?this.setMenuIndex(e.findIndex((function(i){return i===o}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===e.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&e.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===h.x.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===h.x.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==h.x.backspace&&e!==h.x.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var o=e!==this.selectedItems.length-1?e:e-1;this.selectedItems[o]?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=o}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,r.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(h.p)(this.$refs.menu,"activeTile.id"),autocomplete:Object(h.p)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=r.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?r.a.options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,n=t.value;t.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[h.x.home,h.x.end].includes(t)||r.a.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){r.a.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){r.a.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){r.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,n;if(-1!==this.selectedIndex){var o=this.selectedItems[this.selectedIndex],r=this.getText(o);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",r),null===(n=e.clipboardData)||void 0===n||n.setData("text/vnd.vuetify.autocomplete.item+plain",r),e.preventDefault()}}}}),y=n(542),S=n(504),I=n(737),x=(n(319),n(53),n(41),n(1).a.extend({data:function(){return{modelNames:["GPT-2","DistilGPT-2","MiniLM","XLNet","GPT-J","GPT Neo","Bloom 350m","Bloom 2b5","GPT-2 XL"].sort(),numChoices:12,choices:Array(12)}},computed:{modelNumberChoices:function(){return Array.from(Array(this.numChoices)).map((function(e,i){return i}))},items:function(){var e=this.modelNames.map((function(e){return{text:e,value:e.toLowerCase()}}));return e.push({divider:!0}),e.push({text:"Not listed",value:"none"}),e}}})),O=n(84),component=Object(O.a)(x,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t(S.a,[t(I.a,e._l(e.modelNumberChoices,(function(n){return t(y.a,{key:n,attrs:{cols:"4"}},[t(v,{attrs:{clearable:"",filled:"",rounded:"",solo:"",items:e.items,prefix:"Model ".concat(n," is"),placeholder:"________"},model:{value:e.choices[n-1],callback:function(t){e.$set(e.choices,n-1,t)},expression:"choices[num - 1]"}})],1)})),1)],1)}),[],!1,null,null,null);t.default=component.exports},552:function(e,t,n){"use strict";n.r(t);var o=n(740),r=(n(10),n(13),n(12),n(3),n(16),n(9),n(17),n(129)),l=n(2),c=(n(30),n(546),n(549)),h=n(127),d=n(534),f=n(108),m=n(43),v=n(150),y=n(536),S=n(34),I=n(541),x=n(0),O=n(14),w=n(96),C=["title"];function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function j(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var D=Object(O.a)(f.a,m.a,y.a,Object(v.a)("radioGroup"),S.a).extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:Boolean,value:{default:null}},data:function(){return{isFocused:!1}},computed:{classes:function(){return j(j({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses),this.groupClasses)},computedColor:function(){return I.a.options.computed.computedColor.call(this)},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},computedId:function(){return d.a.options.computed.computedId.call(this)},hasLabel:d.a.options.computed.hasLabel,hasState:function(){return(this.radioGroup||{}).hasState},isDisabled:function(){return this.disabled||!!this.radioGroup&&this.radioGroup.isDisabled},isReadonly:function(){return this.readonly||!!this.radioGroup&&this.radioGroup.isReadonly},computedName:function(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||"radio-".concat(this.radioGroup._uid)},rippleState:function(){return I.a.options.computed.rippleState.call(this)},validationState:function(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput:function(e){return I.a.options.methods.genInput.call(this,"radio",e)},genLabel:function(){return this.hasLabel?this.$createElement(c.a,{on:{click:I.b},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},Object(x.s)(this,"label")||this.label):null},genRadio:function(){var e=this.attrs$,t=(e.title,Object(r.a)(e,C));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(h.a,this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput(j({name:this.computedName,value:this.value},t)),this.genRipple(this.setTextColor(this.rippleState))])},onFocus:function(e){this.isFocused=!0,this.$emit("focus",e)},onBlur:function(e){this.isFocused=!1,this.$emit("blur",e)},onChange:function(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:function(){}},render:function(e){return e("div",{staticClass:"v-radio",class:this.classes,on:Object(w.c)({click:this.onChange},this.listeners$),attrs:{title:this.attrs$.title}},[this.genRadio(),this.genLabel()])}}),P=(n(73),n(53),n(41),n(1).a.extend({data:function(){return{modelNames:["GPT-2","DistilGPT-2","MiniLM","XLNet","GPT-J","GPT Neo","Bloom 350m","Bloom 2b5","GPT-2 XL","None"],numChoices:12}},computed:{modelNumberChoices:function(){return Array.from(Array(this.numChoices)).map((function(e,i){return i+1}))},headers:function(){for(var e=[{text:"Model Name",value:"name"}],i=1;i<=this.numChoices;i++){var t={text:"".concat(i),value:"".concat(i)};e.push(t)}return e},items:function(){var e=this;return this.modelNames.map((function(t){for(var n={name:t},i=1;i<=e.numChoices;i++)n["".concat(i)]=!1;return n}))}}})),T=n(84),component=Object(T.a)(P,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t(o.a,{attrs:{headers:e.headers,items:e.items,"hide-default-footer":"",caption:"What is the correct model pairing?"},scopedSlots:e._u([e._l(e.modelNumberChoices,(function(i){return{key:"item.".concat(i),fn:function(e){e.item;return[t(D,{attrs:{value:"i"}})]}}}))],null,!0)})}),[],!1,null,null,null);t.default=component.exports},554:function(e,t,n){"use strict";n.r(t);var o=n(740),r=n(565),l=(n(73),n(53),n(41),n(1).a.extend({data:function(){return{modelNames:["GPT-2","DistilGPT-2","MiniLM","XLNet","GPT-J","GPT Neo","Bloom 350m","Bloom 2b5","GPT-2 XL","None"],numChoices:12}},computed:{modelNumberChoices:function(){return Array.from(Array(this.numChoices)).map((function(e,i){return i+1}))},headers:function(){for(var e=[{text:"Model Name",value:"name"}],i=1;i<=this.numChoices;i++){var t={text:"".concat(i),value:"".concat(i)};e.push(t)}return e},items:function(){var e=this;return this.modelNames.map((function(t){for(var n={name:t},i=1;i<=e.numChoices;i++)n["".concat(i)]=!1;return n}))}}})),c=n(84),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t(o.a,{attrs:{headers:e.headers,items:e.items,"hide-default-footer":"",caption:"What is the correct model pairing?"},scopedSlots:e._u([e._l(e.modelNumberChoices,(function(i){return{key:"item.".concat(i),fn:function(n){var o=n.item;return[t(r.a,{model:{value:o[i],callback:function(t){e.$set(o,i,t)},expression:"item[i]"}})]}}}))],null,!0)})}),[],!1,null,null,null);t.default=component.exports},591:function(e,t,n){"use strict";n.r(t);var o=n(738),r=n(754),l=n(742),c=n(1).a.extend({data:function(){return{title:"Rules",tabColor:"blue",rules:[{name:"blue",text:"Given L number of model's past outputs and M number of model queries, The Blue team must connect the fine-tuned models to pre-trained models. E.g, An “AI bot with zero chills”: Given L number of past replies to other Twitter users and M number of live interactions with the bot. Can you guess which pre-trained language model this bot was fine-tuned from? "},{name:"green",text:"The green team will be aligned with the Blue team to develop NN watermarks. Watermarks can be developed using inherent subnetworks of NN E.g. Using winning tickets from the Lottery Ticket Hypothesis.  Given the different levels of access to fine-tuned models and a set of watermarks from pre-trained models, Green Team would assist Blue Team in building signatures of fine-tuned models. They will maintain a labeled dataset in which different pairs of previously collected fine-tuned models have been tagged with their source; Blue Team can use that data to build techniques to predict respective pre-trained models from a fine-tuned models signature. We won't have a red team and green teams in the first iteration of the competition; we will inform the blue team what constraints were put on the hypothetical red team."},{name:"red",text:"The red team will need to fine-tune models to reach at least a certain threshold of accuracy on the test set. The red team must be restricted in the data they can access (i.e., only the data for the fine-tuning set). Otherwise, they could randomize all the weights and call that a “fine-tuned” model (even if it has garbage performance). They won't be allowed to simply randomize the weights and then re-train with a new random seed or task. We will have computational limitations on the red team. We won't have a red team and green teams in the first iteration of the competition, we will inform the blue team what constraints were put on the hypothetical red team. Modifications that aren't fine-tuning won't be considered, for example, adding in “fake” layers that just copy the previous layer's output (such that the nonlinearities never activate)."}]}}}),h=n(84),component=Object(h.a)(c,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t(l.a,[t(o.a,[e._v("Checkboxes")]),e._v(" "),t(o.a,[e._v("Radio Buttons")]),e._v(" "),t(o.a,[e._v("Dropdown Selection")]),e._v(" "),t(r.a,[t("ModelSelectionTable")],1),e._v(" "),t(r.a,[t("ModelSelectionTableRadio")],1),e._v(" "),t(r.a,[t("ModelSelectionMatch")],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ModelSelectionTable:n(554).default,ModelSelectionTableRadio:n(552).default,ModelSelectionMatch:n(551).default})}}]);