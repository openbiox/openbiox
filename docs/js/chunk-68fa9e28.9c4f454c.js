(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68fa9e28"],{"0251":function(t,e,i){e=t.exports=i("24fb")(!1),e.push([t.i,".v-item-group{-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;position:relative;-webkit-transition:.3s cubic-bezier(.25,.8,.5,1);transition:.3s cubic-bezier(.25,.8,.5,1)}.v-item-group>*{cursor:pointer;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}",""])},"0832":function(t,e,i){var n=i("d182");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("499e").default;a("4beca0b8",n,!0,{sourceMap:!1,shadowMode:!1})},"1c65":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-layout",{attrs:{"align-center":""}},[i("v-item-group",{staticClass:"shrink mr-4",attrs:{mandatory:"",tag:"v-flex"},model:{value:t.window,callback:function(e){t.window=e},expression:"window"}},t._l(t.length,function(e){return i("v-item",{key:e,scopedSlots:t._u([{key:"default",fn:function(e){var n=e.active,a=e.toggle;return i("div",{},[i("v-btn",{attrs:{"input-value":n,icon:""},on:{click:a}},[i("v-icon",[t._v("mdi-record")])],1)],1)}}],null,!0)})}),1),i("v-flex",[i("v-window",{staticClass:"elevation-3",attrs:{vertical:""},model:{value:t.window,callback:function(e){t.window=e},expression:"window"}},t._l(t.length,function(e){return i("v-window-item",{key:e},[i("v-card",{attrs:{flat:""}},[i("v-card-text",[i("v-layout",{attrs:{"align-center":"","mb-3":""}},[i("v-avatar",{staticClass:"mr-3",attrs:{color:"grey"}}),i("strong",{staticClass:"title"},[t._v("Title "+t._s(e))]),i("v-spacer"),i("v-btn",{attrs:{icon:""}},[i("v-icon",[t._v("mdi-account")])],1)],1),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])],1)],1)],1)}),1)],1)],1)},a=[],r={data:function(){return{length:3,window:0}}},o=r,s=i("2877"),u=i("6544"),l=i.n(u),c=i("8212"),d=i("8336"),v=i("b0af"),h=i("99d9"),f=i("0e8f"),m=i("132d"),p=i("d903"),w=i("604c"),g=i("a722"),b=i("9910"),y=i("f665"),x=i("1e6c"),V=Object(s["a"])(o,n,a,!1,null,null,null);e["default"]=V.exports;l()(V,{VAvatar:c["a"],VBtn:d["a"],VCard:v["a"],VCardText:h["b"],VFlex:f["a"],VIcon:m["a"],VItem:p["a"],VItemGroup:w["b"],VLayout:g["a"],VSpacer:b["a"],VWindow:y["a"],VWindowItem:x["a"]})},"1e6c":function(t,e,i){"use strict";var n=i("3e79e"),a=i("2464"),r=i("c341"),o=i("80d2"),s=i("58df");e["a"]=Object(s["a"])(n["a"],Object(a["a"])("windowGroup","v-window-item","v-window")).extend({name:"v-window-item",directives:{Touch:r["a"]},props:{reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{done:null,isActive:!1,wasCancelled:!1}},computed:{computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},mounted:function(){this.$el.addEventListener("transitionend",this.onTransitionEnd,!1)},beforeDestroy:function(){this.$el.removeEventListener("transitionend",this.onTransitionEnd,!1)},methods:{genDefaultSlot:function(){return this.$slots.default},onAfterEnter:function(){var t=this;this.wasCancelled?this.wasCancelled=!1:requestAnimationFrame(function(){t.windowGroup.internalHeight=void 0,t.windowGroup.isActive=!1})},onBeforeEnter:function(){this.windowGroup.isActive=!0},onLeave:function(t){this.windowGroup.internalHeight=Object(o["c"])(t.clientHeight)},onEnterCancelled:function(){this.wasCancelled=!0},onEnter:function(t,e){var i=this,n=this.windowGroup.isBooted;n&&(this.done=e),requestAnimationFrame(function(){if(!i.computedTransition)return e();i.windowGroup.internalHeight=Object(o["c"])(t.clientHeight),!n&&setTimeout(e,100)})},onTransitionEnd:function(t){"transform"===t.propertyName&&t.target===this.$el&&this.done&&(this.done(),this.done=null)}},render:function(t){var e=t("div",{staticClass:"v-window-item",directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.showLazyContent(this.genDefaultSlot()));return t("transition",{props:{name:this.computedTransition},on:{afterEnter:this.onAfterEnter,beforeEnter:this.onBeforeEnter,leave:this.onLeave,enter:this.onEnter,enterCancelled:this.onEnterCancelled}},[e])}})},"20d6":function(t,e,i){"use strict";var n=i("5ca1"),a=i("0a49")(6),r="findIndex",o=!0;r in[]&&Array(1)[r](function(){o=!1}),n(n.P+n.F*o,"Array",{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),i("9c6c")(r)},"3e79e":function(t,e,i){"use strict";var n=i("2b0e");e["a"]=n["a"].extend().extend({name:"bootable",props:{lazy:Boolean},data:function(){return{isBooted:!1}},computed:{hasContent:function(){return this.isBooted||!this.lazy||this.isActive}},watch:{isActive:function(){this.isBooted=!0}},methods:{showLazyContent:function(t){return this.hasContent?t:void 0}}})},"4c2f":function(t,e,i){e=t.exports=i("24fb")(!1),e.push([t.i,".v-avatar{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative;text-align:center;vertical-align:middle}.v-avatar,.v-avatar .v-icon,.v-avatar .v-image,.v-avatar img{border-radius:50%;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.v-avatar .v-icon,.v-avatar .v-image,.v-avatar img{height:inherit;width:inherit}.v-avatar--tile,.v-avatar--tile .v-icon,.v-avatar--tile .v-image,.v-avatar--tile img{border-radius:0}",""])},"4fa4":function(t,e,i){var n=i("4c2f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("499e").default;a("04444c84",n,!0,{sourceMap:!1,shadowMode:!1})},"58db":function(t,e,i){var n=i("0251");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("499e").default;a("1a12272a",n,!0,{sourceMap:!1,shadowMode:!1})},"604c":function(t,e,i){"use strict";i("20d6"),i("ac6a"),i("6762"),i("2fdb"),i("c5f6"),i("58db");var n=i("2b0e");function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return n["a"].extend({name:"proxyable",model:{prop:t,event:e},props:a({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:a({},t,function(t){this.internalLazyValue=t})})}var o=r(),s=o,u=i("6a18"),l=i("58df"),c=i("d9bd");i.d(e,"a",function(){return v});var d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},v=Object(l["a"])(s,u["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return d({},this.themeClasses)},selectedItems:function(){var t=this;return this.items.filter(function(e,i){return t.toggleMethod(t.getValue(e,i))})},selectedValues:function(){return Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.internalValue===e};var e=this.internalValue;return Array.isArray(e)?function(t){return e.includes(t)}:function(){return!1}}},watch:{internalValue:function(){this.$nextTick(this.updateItemsState)}},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(c["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{getValue:function(t,e){return null==t.value||""===t.value?e:t.value},onClick:function(t,e){this.updateInternalValue(this.getValue(t,e))},register:function(t){var e=this,i=this.items.push(t)-1;t.$on("change",function(){return e.onClick(t,i)}),this.mandatory&&null==this.internalLazyValue&&this.updateMandatory(),this.updateItem(t,i)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),i=this.getValue(t,e);this.items.splice(e,1);var n=this.selectedValues.indexOf(i);if(!(n<0)){if(!this.mandatory)return this.updateInternalValue(i);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter(function(t){return t!==i}):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var i=this.getValue(t,e);t.isActive=this.toggleMethod(i)},updateItemsState:function(){if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=t?this.items.length-1:0;this.updateInternalValue(this.getValue(this.items[e],e))}},updateMultiple:function(t){var e=Array.isArray(this.internalValue)?this.internalValue:[],i=e.slice(),n=i.findIndex(function(e){return e===t});this.mandatory&&n>-1&&i.length-1<1||null!=this.max&&n<0&&i.length+1>this.max||(n>-1?i.splice(n,1):i.push(t),this.internalValue=i)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t("div",{staticClass:"v-item-group",class:this.classes},this.$slots.default)}});e["b"]=v.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}})},8212:function(t,e,i){"use strict";i("c5f6"),i("4fa4");var n=i("b64a"),a=i("80d2"),r=i("58df"),o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t};e["a"]=Object(r["a"])(n["a"]).extend({name:"v-avatar",functional:!0,props:{color:String,size:{type:[Number,String],default:48},tile:Boolean},render:function(t,e){var i=e.data,r=e.props,s=e.children;i.staticClass=("v-avatar "+(i.staticClass||"")).trim(),r.tile&&(i.staticClass+=" v-avatar--tile");var u=Object(a["c"])(r.size);return i.style=o({height:u,width:u},i.style),t("div",n["a"].options.methods.setBackgroundColor(r.color,i),s)}})},c341:function(t,e,i){"use strict";i("ac6a");var n=i("80d2"),a=function(t){var e=t.touchstartX,i=t.touchendX,n=t.touchstartY,a=t.touchendY,r=.5,o=16;t.offsetX=i-e,t.offsetY=a-n,Math.abs(t.offsetY)<r*Math.abs(t.offsetX)&&(t.left&&i<e-o&&t.left(t),t.right&&i>e+o&&t.right(t)),Math.abs(t.offsetX)<r*Math.abs(t.offsetY)&&(t.up&&a<n-o&&t.up(t),t.down&&a>n+o&&t.down(t))};function r(t,e){var i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function o(t,e){var i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),a(e)}function s(t,e){var i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function u(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return r(t,e)},touchend:function(t){return o(t,e)},touchmove:function(t){return s(t,e)}}}function l(t,e,i){var a=e.value,r=a.parent?t.parentElement:t,o=a.options||{passive:!0};if(r){var s=u(e.value);r._touchHandlers=Object(r._touchHandlers),r._touchHandlers[i.context._uid]=s,Object(n["r"])(s).forEach(function(t){r.addEventListener(t,s[t],o)})}}function c(t,e,i){var a=e.value.parent?t.parentElement:t;if(a&&a._touchHandlers){var r=a._touchHandlers[i.context._uid];Object(n["r"])(r).forEach(function(t){a.removeEventListener(t,r[t])}),delete a._touchHandlers[i.context._uid]}}e["a"]={inserted:l,unbind:c}},d182:function(t,e,i){e=t.exports=i("24fb")(!1),e.push([t.i,".v-window__container{position:relative;-webkit-transition:.3s cubic-bezier(.25,.8,.5,1);transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window__container--is-active{overflow:hidden}.v-window-x-reverse-transition-enter-active,.v-window-x-reverse-transition-leave-active,.v-window-x-transition-enter-active,.v-window-x-transition-leave-active,.v-window-y-reverse-transition-enter-active,.v-window-y-reverse-transition-leave-active,.v-window-y-transition-enter-active,.v-window-y-transition-leave-active{-webkit-transition:.3s cubic-bezier(.25,.8,.5,1);transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window-x-reverse-transition-leave,.v-window-x-reverse-transition-leave-to,.v-window-x-transition-leave,.v-window-x-transition-leave-to,.v-window-y-reverse-transition-leave,.v-window-y-reverse-transition-leave-to,.v-window-y-transition-leave,.v-window-y-transition-leave-to{position:absolute!important;top:0;width:100%}.v-window-x-transition-enter{-webkit-transform:translateX(100%);transform:translateX(100%)}.v-window-x-reverse-transition-enter,.v-window-x-transition-leave-to{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.v-window-x-reverse-transition-leave-to{-webkit-transform:translateX(100%);transform:translateX(100%)}.v-window-y-transition-enter{-webkit-transform:translateY(100%);transform:translateY(100%)}.v-window-y-reverse-transition-enter,.v-window-y-transition-leave-to{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.v-window-y-reverse-transition-leave-to{-webkit-transform:translateY(100%);transform:translateY(100%)}",""])},d903:function(t,e,i){"use strict";var n=i("2464"),a=i("58df"),r=i("d9bd");function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}e["a"]=Object(a["a"])(Object(n["a"])("itemGroup","v-item","v-item-group")).extend({name:"v-item",props:{value:{required:!1}},render:function(){if(!this.$scopedSlots.default)return Object(r["c"])("v-item is missing a default scopedSlot",this),null;var t=void 0;return this.$scopedSlots.default&&(t=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(t.data=this._b(t.data||{},t.tag,{class:o({},this.activeClass,this.isActive)}),t):(Object(r["c"])("v-item should only contain a single element",this),t)}})},f665:function(t,e,i){"use strict";i("20d6"),i("0832");var n=i("604c"),a=i("c341");e["a"]=n["a"].extend({name:"v-window",provide:function(){return{windowGroup:this}},directives:{Touch:a["a"]},props:{mandatory:{type:Boolean,default:!0},reverse:{type:Boolean,default:void 0},touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{internalHeight:void 0,isActive:!1,isBooted:!1,isReverse:!1}},computed:{computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=this.internalReverse===!this.$vuetify.rtl?"-reverse":"";return"v-window-"+t+e+"-transition"},internalIndex:function(){var t=this;return this.items.findIndex(function(e,i){return t.internalValue===t.getValue(e,i)})},internalReverse:function(){return void 0!==this.reverse?this.reverse:this.isReverse}},watch:{internalIndex:"updateReverse"},mounted:function(){var t=this;this.$nextTick(function(){return t.isBooted=!0})},methods:{genContainer:function(){return this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight}},this.$slots.default)},next:function(){this.isReverse=!1;var t=(this.internalIndex+1)%this.items.length,e=this.items[t];this.internalValue=this.getValue(e,t)},prev:function(){this.isReverse=!0;var t=(this.internalIndex+this.items.length-1)%this.items.length,e=this.items[t];this.internalValue=this.getValue(e,t)},updateReverse:function(t,e){this.isReverse=t<e}},render:function(t){var e={staticClass:"v-window",directives:[]};if(!this.touchless){var i=this.touch||{left:this.next,right:this.prev};e.directives.push({name:"touch",value:i})}return t("div",e,[this.genContainer()])}})}}]);
//# sourceMappingURL=chunk-68fa9e28.9c4f454c.js.map