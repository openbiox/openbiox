(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2fb1caba","chunk-6e136e2f","chunk-5d006672","chunk-5f3d7ea0","chunk-2d0bd3d4","chunk-2d208c56","chunk-84afb25c"],{"0a49":function(t,e,i){var n=i("9b43"),o=i("626a"),a=i("4bf8"),r=i("9def"),s=i("cd1c");t.exports=function(t,e){var i=1==t,l=2==t,c=3==t,h=4==t,d=6==t,v=5==t||d,u=e||s;return function(e,s,p){for(var f,b,g=a(e),m=o(g),x=n(s,p,3),_=r(m.length),w=0,y=i?u(e,_):l?u(e,0):void 0;_>w;w++)if((v||w in m)&&(b=x(f=m[w],w,g),t))if(i)y[w]=b;else if(b)switch(t){case 3:return!0;case 5:return f;case 6:return w;case 2:y.push(f)}else if(h)return!1;return d?-1:c||h?h:y}}},"0e8f":function(t,e,i){"use strict";i("db6d");var n=i("e8f2");e.a=Object(n.a)("flex")},"14ec":function(t,e,i){"use strict";i("6762"),i("2fdb"),i("f7dc");var n=i("80d2"),o=i("8bbf"),a=i.n(o);e.a=a.a.extend().extend({name:"overlayable",props:{hideOverlay:Boolean},data:function(){return{overlay:null,overlayOffset:0,overlayTimeout:void 0,overlayTransitionDuration:650}},watch:{hideOverlay:function(t){t?this.removeOverlay():this.genOverlay()}},beforeDestroy:function(){this.removeOverlay()},methods:{genOverlay:function(){var t=this;if(!this.isActive||this.hideOverlay||this.isActive&&this.overlayTimeout||this.overlay)return clearTimeout(this.overlayTimeout),this.overlay&&this.overlay.classList.add("v-overlay--active");this.overlay=document.createElement("div"),this.overlay.className="v-overlay",this.absolute&&(this.overlay.className+=" v-overlay--absolute"),this.hideScroll();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");return e&&e.insertBefore(this.overlay,e.firstChild),this.overlay.clientHeight,requestAnimationFrame(function(){t.overlay&&(t.overlay.className+=" v-overlay--active",void 0!==t.activeZIndex&&(t.overlay.style.zIndex=String(t.activeZIndex-1)))}),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(!this.overlay)return e&&this.showScroll();this.overlay.classList.remove("v-overlay--active"),this.overlayTimeout=window.setTimeout(function(){try{t.overlay&&t.overlay.parentNode&&t.overlay.parentNode.removeChild(t.overlay),t.overlay=null,e&&t.showScroll()}catch(t){}clearTimeout(t.overlayTimeout),t.overlayTimeout=void 0},this.overlayTransitionDuration)},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[n.q.up,n.q.pageup],i=[n.q.down,n.q.pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return["auto","scroll"].includes(e.overflowY)&&t.scrollHeight>t.clientHeight},shouldScroll:function(t,e){return 0===t.scrollTop&&e<0||t.scrollTop+t.clientHeight===t.scrollHeight&&e>0},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=t.path||this.composedPath(t),i=t.deltaY;if("keydown"===t.type&&e[0]===document.body){var n=this.$refs.dialog,o=window.getSelection().anchorNode;return!(n&&this.hasScrollbar(n)&&this.isInside(o,n))||this.shouldScroll(n,i)}for(var a=0;a<e.length;a++){var r=e[a];if(r===document)return!0;if(r===document.documentElement)return!0;if(r===this.$refs.content)return!0;if(this.hasScrollbar(r))return this.shouldScroll(r,i)}return!0},composedPath:function(t){if(t.composedPath)return t.composedPath();for(var e=[],i=t.target;i;){if(e.push(i),"HTML"===i.tagName)return e.push(document),e.push(window),e;i=i.parentElement}return e},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(n.a)(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})},"2a7f":function(t,e,i){"use strict";i.d(e,"b",function(){return r}),i.d(e,"a",function(){return s});var n=i("80d2"),o=i("71d9"),a=i("706c"),r=Object(n.f)("v-toolbar__title"),s=Object(n.f)("v-toolbar__items");o.a,a.a},"2ac2":function(t){t.exports={"/home":"Home","/members":"Members","/projects":"Projects","/news_events":"News & Events","https://community.openbiox.org":"Community","/wiki":"Wiki","/contact":"Contact Us"}},"2ace":function(t,e,i){(t.exports=i("24fb")(!1)).push([t.i,"@media (max-width:962px){.main-nav-button{display:none}}.main-nav-button-activated{background:#434242}",""])},"4be3":function(t,e,i){(t.exports=i("24fb")(!1)).push([t.i,".theme--light.v-navigation-drawer{background-color:#fff}.theme--light.v-navigation-drawer:not(.v-navigation-drawer--floating) .v-navigation-drawer__border{background-color:rgba(0,0,0,.12)}.theme--light.v-navigation-drawer .v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-navigation-drawer{background-color:#424242}.theme--dark.v-navigation-drawer:not(.v-navigation-drawer--floating) .v-navigation-drawer__border{background-color:hsla(0,0%,100%,.12)}.theme--dark.v-navigation-drawer .v-divider{border-color:hsla(0,0%,100%,.12)}.v-navigation-drawer{-webkit-transition:none;transition:none;display:block;left:0;max-width:100%;overflow-y:auto;overflow-x:hidden;pointer-events:auto;top:0;will-change:transform;z-index:3;-webkit-overflow-scrolling:touch}.v-navigation-drawer[data-booted=true]{-webkit-transition:.2s cubic-bezier(.4,0,.2,1);transition:.2s cubic-bezier(.4,0,.2,1);-webkit-transition-property:width,-webkit-transform;transition-property:width,-webkit-transform;transition-property:transform,width;transition-property:transform,width,-webkit-transform}.v-navigation-drawer__border{position:absolute;right:0;top:0;height:100%;width:1px}.v-navigation-drawer.v-navigation-drawer--right:after{left:0;right:auto}.v-navigation-drawer--right{left:auto;right:0}.v-navigation-drawer--right>.v-navigation-drawer__border{right:auto;left:0}.v-navigation-drawer--absolute{position:absolute}.v-navigation-drawer--fixed{position:fixed}.v-navigation-drawer--floating:after{display:none}.v-navigation-drawer--mini-variant{overflow:hidden}.v-navigation-drawer--mini-variant .v-list__group__header__prepend-icon{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%}.v-navigation-drawer--mini-variant .v-list__tile__action,.v-navigation-drawer--mini-variant .v-list__tile__avatar{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;min-width:48px}.v-navigation-drawer--mini-variant .v-list__tile:after,.v-navigation-drawer--mini-variant .v-list__tile__content{opacity:0}.v-navigation-drawer--mini-variant .v-divider,.v-navigation-drawer--mini-variant .v-list--group,.v-navigation-drawer--mini-variant .v-subheader{display:none!important}.v-navigation-drawer--is-mobile,.v-navigation-drawer--temporary{z-index:6}.v-navigation-drawer--is-mobile:not(.v-navigation-drawer--close),.v-navigation-drawer--temporary:not(.v-navigation-drawer--close){-webkit-box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.v-navigation-drawer .v-list{background:inherit}.v-navigation-drawer>.v-list .v-list__tile{-webkit-transition:none;transition:none;font-weight:500}.v-navigation-drawer>.v-list .v-list__tile--active .v-list__tile__title{color:inherit}.v-navigation-drawer>.v-list .v-list--group .v-list__tile{font-weight:400}.v-navigation-drawer>.v-list .v-list--group__header--active:after{background:transparent}.v-navigation-drawer>.v-list:not(.v-list--dense) .v-list__tile{font-size:14px}",""])},"5aa4":function(t,e,i){"use strict";var n=i("e856");i.n(n).a},"6acd":function(t,e,i){(t.exports=i("24fb")(!1)).push([t.i,".theme--light.v-toolbar{background-color:#f5f5f5;color:rgba(0,0,0,.87)}.theme--dark.v-toolbar{background-color:#212121;color:#fff}.application--is-rtl .v-toolbar__title:not(:first-child){margin-left:0;margin-right:20px}.v-toolbar{-webkit-transition:none;transition:none;-webkit-box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);position:relative;width:100%;will-change:padding-left,padding-right}.v-toolbar[data-booted=true]{-webkit-transition:.2s cubic-bezier(.4,0,.2,1);transition:.2s cubic-bezier(.4,0,.2,1)}.v-toolbar .v-text-field--box,.v-toolbar .v-text-field--enclosed{margin:0}.v-toolbar .v-text-field--box .v-text-field__details,.v-toolbar .v-text-field--enclosed .v-text-field__details{display:none}.v-toolbar .v-tabs{width:100%}.v-toolbar__title{font-size:20px;font-weight:500;letter-spacing:.02em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.v-toolbar__title:not(:first-child){margin-left:20px}.v-toolbar__content,.v-toolbar__extension{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;padding:0 24px}@media only screen and (max-width:959px){.v-toolbar__content,.v-toolbar__extension{padding:0 16px}}.v-toolbar__content .v-btn--icon,.v-toolbar__extension .v-btn--icon{margin:6px}.v-toolbar__content>:first-child,.v-toolbar__extension>:first-child{margin-left:0}.v-toolbar__content>:first-child.v-btn--icon,.v-toolbar__extension>:first-child.v-btn--icon{margin-left:-6px}.v-toolbar__content>:first-child.v-menu .v-menu__activator .v-btn,.v-toolbar__content>:first-child.v-tooltip span .v-btn,.v-toolbar__extension>:first-child.v-menu .v-menu__activator .v-btn,.v-toolbar__extension>:first-child.v-tooltip span .v-btn{margin-left:0}.v-toolbar__content>:first-child.v-menu .v-menu__activator .v-btn--icon,.v-toolbar__content>:first-child.v-tooltip span .v-btn--icon,.v-toolbar__extension>:first-child.v-menu .v-menu__activator .v-btn--icon,.v-toolbar__extension>:first-child.v-tooltip span .v-btn--icon{margin-left:-6px}.v-toolbar__content>:last-child,.v-toolbar__extension>:last-child{margin-right:0}.v-toolbar__content>:last-child.v-btn--icon,.v-toolbar__extension>:last-child.v-btn--icon{margin-right:-6px}.v-toolbar__content>:last-child.v-menu .v-menu__activator .v-btn,.v-toolbar__content>:last-child.v-tooltip span .v-btn,.v-toolbar__extension>:last-child.v-menu .v-menu__activator .v-btn,.v-toolbar__extension>:last-child.v-tooltip span .v-btn{margin-right:0}.v-toolbar__content>:last-child.v-menu .v-menu__activator .v-btn--icon,.v-toolbar__content>:last-child.v-tooltip span .v-btn--icon,.v-toolbar__extension>:last-child.v-menu .v-menu__activator .v-btn--icon,.v-toolbar__extension>:last-child.v-tooltip span .v-btn--icon{margin-right:-6px}.v-toolbar__content>.v-list,.v-toolbar__extension>.v-list{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;max-height:100%}.v-toolbar__content>.v-list:first-child,.v-toolbar__extension>.v-list:first-child{margin-left:-24px}@media only screen and (max-width:959px){.v-toolbar__content>.v-list:first-child,.v-toolbar__extension>.v-list:first-child{margin-left:-16px}}.v-toolbar__content>.v-list:last-child,.v-toolbar__extension>.v-list:last-child{margin-right:-24px}@media only screen and (max-width:959px){.v-toolbar__content>.v-list:last-child,.v-toolbar__extension>.v-list:last-child{margin-right:-16px}}.v-toolbar__extension>.v-toolbar__title{margin-left:72px}.v-toolbar__items{display:-webkit-box;display:-ms-flexbox;display:flex;height:inherit;max-width:100%;padding:0}.v-toolbar__items .v-btn{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-item-align:center;align-self:center}.v-toolbar__items .v-tooltip,.v-toolbar__items .v-tooltip>span{height:inherit}.v-toolbar__items .v-btn:not(.v-btn--floating):not(.v-btn--icon),.v-toolbar__items .v-menu,.v-toolbar__items .v-menu__activator{height:inherit;margin:0}.v-toolbar .v-btn-toggle,.v-toolbar .v-overflow-btn{-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12);box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-toolbar .v-input{margin:0}.v-toolbar .v-overflow-btn .v-input__control:before,.v-toolbar .v-overflow-btn .v-input__slot:before{display:none}.v-toolbar--card{border-radius:2px 2px 0 0;-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12);box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-toolbar--fixed{position:fixed;z-index:2}.v-toolbar--absolute,.v-toolbar--fixed{top:0;left:0}.v-toolbar--absolute{position:absolute;z-index:2}.v-toolbar--floating{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;margin:16px;width:auto}.v-toolbar--clipped{z-index:3}",""])},"6de2":function(t,e,i){var n=i("4be3");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i("499e").default)("0f423f04",n,!0,{sourceMap:!1,shadowMode:!1})},"706c":function(t,e,i){"use strict";var n=i("afdd"),o=i("9d26"),a=i("8bbf"),r=i.n(a);e.a=r.a.extend({name:"v-toolbar-side-icon",functional:!0,render:function(t,e){var i=e.slots,a=e.listeners,r=e.props,s=e.data,l=s.staticClass?s.staticClass+" v-toolbar__side-icon":"v-toolbar__side-icon",c=Object.assign(s,{staticClass:l,props:Object.assign(r,{icon:!0}),on:a}),h=i().default;return t(n.a,c,h||[t(o.a,"$vuetify.icons.menu")])}})},"71d9":function(t,e,i){"use strict";i("d263"),i("c5f6"),i("ae8d");var n=i("c6f7"),o=i("b64a"),a=i("6a18"),r=i("b57a");var s={inserted:function(t,e){var i=e.value,n=e.options||{passive:!0},o=e.arg?document.querySelector(e.arg):window;o&&(o.addEventListener("scroll",i,n),t._onScroll={callback:i,options:n,target:o})},unbind:function(t){if(t._onScroll){var e=t._onScroll,i=e.callback,n=e.options;e.target.removeEventListener("scroll",i,n),delete t._onScroll}}},l=i("d9bd"),c=i("58df"),h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t};e.a=Object(c.a)(Object(n.a)("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","manualScroll"]),o.a,r.a,a.a).extend({name:"v-toolbar",directives:{Scroll:s},props:{card:Boolean,clippedLeft:Boolean,clippedRight:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{type:[Number,String],validator:function(t){return!isNaN(parseInt(t))}},flat:Boolean,floating:Boolean,height:{type:[Number,String],validator:function(t){return!isNaN(parseInt(t))}},invertedScroll:Boolean,manualScroll:Boolean,prominent:Boolean,scrollOffScreen:Boolean,scrollToolbarOffScreen:Boolean,scrollTarget:String,scrollThreshold:{type:Number,default:300},tabs:Boolean},data:function(){return{activeTimeout:null,currentScroll:0,heights:{mobileLandscape:48,mobile:56,desktop:64,dense:48},isActive:!0,isExtended:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return this.scrollToolbarOffScreen?(Object(l.d)("scrollToolbarOffScreen","scrollOffScreen",this),!0):this.scrollOffScreen||this.invertedScroll},computedContentHeight:function(){return this.height?parseInt(this.height):this.dense?this.heights.dense:this.prominent||this.$vuetify.breakpoint.mdAndUp?this.heights.desktop:this.$vuetify.breakpoint.smAndDown&&this.$vuetify.breakpoint.width>this.$vuetify.breakpoint.height?this.heights.mobileLandscape:this.heights.mobile},computedExtensionHeight:function(){return this.tabs?48:this.extensionHeight?parseInt(this.extensionHeight):this.computedContentHeight},computedHeight:function(){return this.isExtended?this.computedContentHeight+this.computedExtensionHeight:this.computedContentHeight},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},classes:function(){return h({"v-toolbar":!0,"elevation-0":this.flat||!this.isActive&&!this.tabs&&this.canScroll,"v-toolbar--absolute":this.absolute,"v-toolbar--card":this.card,"v-toolbar--clipped":this.clippedLeft||this.clippedRight,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--fixed":!this.absolute&&(this.app||this.fixed),"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.prominent},this.themeClasses)},computedPaddingLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedPaddingRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedTransform:function(){return this.isActive?0:this.canScroll?-this.computedContentHeight:-this.computedHeight},currentThreshold:function(){return Math.abs(this.currentScroll-this.savedScroll)},styles:function(){return{marginTop:this.computedMarginTop+"px",paddingRight:this.computedPaddingRight+"px",paddingLeft:this.computedPaddingLeft+"px",transform:"translateY("+this.computedTransform+"px)"}}},watch:{currentThreshold:function(t){this.invertedScroll?this.isActive=this.currentScroll>this.scrollThreshold:t<this.scrollThreshold||!this.isBooted||(this.isActive=this.isScrollingUp,this.savedScroll=this.currentScroll)},isActive:function(){this.savedScroll=0},invertedScroll:function(t){this.isActive=!t},manualScroll:function(t){this.isActive=!t},isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll}},created:function(){(this.invertedScroll||this.manualScroll)&&(this.isActive=!1)},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget))},methods:{onScroll:function(){this.canScroll&&!this.manualScroll&&"undefined"!=typeof window&&(this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.previousScroll=this.currentScroll)},updateApplication:function(){return this.invertedScroll||this.manualScroll?0:this.computedHeight}},render:function(t){this.isExtended=this.extended||!!this.$slots.extension;var e=[],i=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return i.directives=[{arg:this.scrollTarget,name:"scroll",value:this.onScroll}],e.push(t("div",{staticClass:"v-toolbar__content",style:{height:this.computedContentHeight+"px"},ref:"content"},this.$slots.default)),this.isExtended&&e.push(t("div",{staticClass:"v-toolbar__extension",style:{height:this.computedExtensionHeight+"px"}},this.$slots.extension)),t("nav",i,e)}})},"98a1":function(t,e,i){"use strict";i.d(e,"b",function(){return r});var n=i("8bbf"),o=i.n(n);function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function r(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"input";return o.a.extend({name:"toggleable",model:{prop:e,event:i},props:a({},e,{required:!1}),data:function(){return{isActive:!!this[e]}},watch:(t={},a(t,e,function(t){this.isActive=!!t}),a(t,"isActive",function(t){!!t!==this[e]&&this.$emit(i,t)}),t)})}var s=r();e.a=s},9910:function(t,e,i){"use strict";i.d(e,"a",function(){return l});var n=i("80d2"),o=i("a523"),a=i("549c"),r=i("0e8f"),s=i("a722"),l=Object(n.f)("spacer","div","v-spacer");o.a,a.a,r.a,s.a},"9d26":function(t,e,i){"use strict";var n=i("132d");e.a=n.a},a523:function(t,e,i){"use strict";i("db6d");var n=i("e8f2");e.a=Object(n.a)("container")},a5e1:function(t){t.exports=["Community","Wiki"]},a722:function(t,e,i){"use strict";i("db6d");var n=i("e8f2");e.a=Object(n.a)("layout")},ae8d:function(t,e,i){var n=i("6acd");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i("499e").default)("68a47ea4",n,!0,{sourceMap:!1,shadowMode:!1})},afdd:function(t,e,i){"use strict";var n=i("8336");e.a=n.a},c341:function(t,e,i){"use strict";i("ac6a");var n=i("80d2"),o=function(t){var e=t.touchstartX,i=t.touchendX,n=t.touchstartY,o=t.touchendY;t.offsetX=i-e,t.offsetY=o-n,Math.abs(t.offsetY)<.5*Math.abs(t.offsetX)&&(t.left&&i<e-16&&t.left(t),t.right&&i>e+16&&t.right(t)),Math.abs(t.offsetX)<.5*Math.abs(t.offsetY)&&(t.up&&o<n-16&&t.up(t),t.down&&o>n+16&&t.down(t))};function a(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return function(t,e){var i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}(t,e)},touchend:function(t){return function(t,e){var i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),o(e)}(t,e)},touchmove:function(t){return function(t,e){var i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}(t,e)}}}e.a={inserted:function(t,e,i){var o=e.value,r=o.parent?t.parentElement:t,s=o.options||{passive:!0};if(r){var l=a(e.value);r._touchHandlers=Object(r._touchHandlers),r._touchHandlers[i.context._uid]=l,Object(n.r)(l).forEach(function(t){r.addEventListener(t,l[t],s)})}},unbind:function(t,e,i){var o=e.value.parent?t.parentElement:t;if(o&&o._touchHandlers){var a=o._touchHandlers[i.context._uid];Object(n.r)(a).forEach(function(t){o.removeEventListener(t,a[t])}),delete o._touchHandlers[i.context._uid]}}}},c584:function(t,e,i){"use strict";function n(){return!1}e.a={inserted:function(t,e){var i=function(i){return function(t,e,i){i.args=i.args||{};var o=i.args.closeConditional||n;if(t&&!1!==o(t)&&!("isTrusted"in t&&!t.isTrusted||"pointerType"in t&&!t.pointerType)){var a=(i.args.include||function(){return[]})();a.push(e),!a.some(function(e){return e.contains(t.target)})&&setTimeout(function(){o(t)&&i.value&&i.value(t)},0)}}(i,t,e)};(document.querySelector("[data-app]")||document.body).addEventListener("click",i,!0),t._clickOutside=i},unbind:function(t){if(t._clickOutside){var e=document.querySelector("[data-app]")||document.body;e&&e.removeEventListener("click",t._clickOutside,!0),delete t._clickOutside}}}},c69d:function(t,e,i){"use strict";i("5df3"),i("1c4c");var n=i("58df");function o(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}e.a=Object(n.a)().extend({name:"dependent",data:function(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive:function(t){if(!t)for(var e=this.getOpenDependents(),i=0;i<e.length;i++)e[i].isActive=!1}},methods:{getOpenDependents:function(){return this.closeDependents?function t(e){for(var i=[],n=0;n<e.length;n++){var a=e[n];a.isActive&&a.isDependent?i.push(a):i.push.apply(i,o(t(a.$children)))}return i}(this.$children):[]},getOpenDependentElements:function(){for(var t=[],e=this.getOpenDependents(),i=0;i<e.length;i++)t.push.apply(t,o(e[i].getClickableDependentElements()));return t},getClickableDependentElements:function(){var t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay),t.push.apply(t,o(this.getOpenDependentElements())),t}}})},c6f7:function(t,e,i){"use strict";i.d(e,"a",function(){return a});var n=i("c22b"),o=i("58df");function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(o.a)(Object(n.b)(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unbind(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.bind(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){(arguments.length>0&&void 0!==arguments[0]&&arguments[0]||this.app)&&this.$vuetify.application.unbind(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},cd1c:function(t,e,i){var n=i("e853");t.exports=function(t,e){return new(n(t))(e)}},e361:function(t,e,i){"use strict";i.r(e);var n=i("2ac2"),o=i("a5e1"),a={name:"b-nav",components:{"v-custom-side-bar":function(){return Promise.all([i.e("chunk-29f1ee98"),i.e("chunk-fa089650")]).then(i.bind(null,"bf72"))}},data:function(){return{sideNav:!1,pageName:document.pageName,links:n,externalSite:o}},computed:{token:function(){return this.$store.state.permission.token}},watch:{$route:function(){this.updatePageName()}},methods:{isPageActive:function(t){return this.pageName===t?"main-nav-button main-nav-button-activated":"main-nav-button"},updatePageName:function(){this.pageName=document.pageName},isExternalSite:function(t){for(var e in this.externalSite)if(t===this.externalSite[e])return!0;return!1}}},r=(i("5aa4"),i("2877")),s=i("6544"),l=i.n(s),c=i("8336"),h=i("f774"),d=i("9910"),v=i("71d9"),u=i("706c"),p=i("2a7f"),f=Object(r.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"nav-div"},[i("v-navigation-drawer",{staticClass:"gray lighten-5 elevation-4",attrs:{"enable-resize-watcher":"","disable-route-watcher":"",app:"",clipped:"","hide-overlay":""},model:{value:t.sideNav,callback:function(e){t.sideNav=e},expression:"sideNav"}},[i("v-custom-side-bar",{attrs:{app:""}})],1),i("v-toolbar",{attrs:{fixed:"",app:"","clipped-left":"",dark:""}},[i("v-toolbar-side-icon",{attrs:{dark:""},on:{click:function(e){e.stopPropagation(),t.sideNav=!t.sideNav}}}),i("v-toolbar-title",{staticStyle:{"margin-right":"15px"}},[i("a",{staticStyle:{color:"white"},attrs:{href:"/"}},[i("span",[t._v("openbiox")])])]),t._l(t.links,function(e,n,o){return i("div",{key:o},[t.isExternalSite(e)?i("v-btn",{staticClass:"without-text-transform",class:t.isPageActive(e),staticStyle:{color:"white"},attrs:{dark:"",flat:"",round:"",target:"_blank",href:n}},[t._v(t._s(e))]):i("router-link",{attrs:{to:n}},[i("v-btn",{staticClass:"without-text-transform",class:t.isPageActive(e),staticStyle:{color:"white"},attrs:{dark:"",flat:"",round:""}},[t._v(t._s(e))])],1)],1)}),i("v-spacer")],2)],1)},[],!1,null,null,null);e.default=f.exports;l()(f,{VBtn:c.a,VNavigationDrawer:h.a,VSpacer:d.a,VToolbar:v.a,VToolbarSideIcon:u.a,VToolbarTitle:p.b})},e775:function(t,e,i){(t.exports=i("24fb")(!1)).push([t.i,'.v-overlay{position:fixed;top:0;left:0;right:0;bottom:0;pointer-events:none;-webkit-transition:.3s cubic-bezier(.25,.8,.5,1);transition:.3s cubic-bezier(.25,.8,.5,1);z-index:5}.v-overlay--absolute{position:absolute}.v-overlay:before{background-color:#212121;bottom:0;content:"";height:100%;left:0;opacity:0;position:absolute;right:0;top:0;-webkit-transition:inherit;transition:inherit;-webkit-transition-delay:.15s;transition-delay:.15s;width:100%}.v-overlay--active{pointer-events:auto;-ms-touch-action:none;touch-action:none}.v-overlay--active:before{opacity:.46}',""])},e853:function(t,e,i){var n=i("d3f4"),o=i("1169"),a=i("2b4c")("species");t.exports=function(t){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)||(e=void 0),n(e)&&null===(e=e[a])&&(e=void 0)),void 0===e?Array:e}},e856:function(t,e,i){var n=i("2ace");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i("499e").default)("7a7e0666",n,!0,{sourceMap:!1,shadowMode:!1})},f774:function(t,e,i){"use strict";i("d263"),i("c5f6"),i("6de2");var n=i("c6f7"),o=i("c69d"),a=i("14ec"),r=i("b57a"),s=i("6a18"),l=i("c584"),c=i("0d3d"),h=i("c341"),d=i("80d2"),v=i("58df"),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t};e.a=Object(v.a)(Object(n.a)("left",["miniVariant","right","width"]),o.a,a.a,r.a,s.a).extend({name:"v-navigation-drawer",directives:{ClickOutside:l.a,Resize:c.a,Touch:h.a},props:{clipped:Boolean,disableRouteWatcher:Boolean,disableResizeWatcher:Boolean,height:{type:[Number,String],default:"100%"},floating:Boolean,miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:80},mobileBreakPoint:{type:[Number,String],default:1264},permanent:Boolean,right:Boolean,stateless:Boolean,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:300},value:{required:!1}},data:function(){return{isActive:!1,touchArea:{left:0,right:0}}},computed:{applicationProperty:function(){return this.right?"right":"left"},calculatedTransform:function(){return this.isActive?0:this.right?this.calculatedWidth:-this.calculatedWidth},calculatedWidth:function(){return parseInt(this.miniVariant?this.miniVariantWidth:this.width)},classes:function(){return u({"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--mini-variant":this.miniVariant,"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary},this.themeClasses)},hasApp:function(){return this.app&&!this.isMobile&&!this.temporary},isMobile:function(){return!this.stateless&&!this.permanent&&!this.temporary&&this.$vuetify.breakpoint.width<parseInt(this.mobileBreakPoint,10)},marginTop:function(){if(!this.hasApp)return 0;var t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},maxHeight:function(){if(!this.hasApp)return null;var t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},reactsToClick:function(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile:function(){return!(this.disableResizeWatcher||this.stateless||this.permanent||this.temporary)},reactsToRoute:function(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},resizeIsDisabled:function(){return this.disableResizeWatcher||this.stateless},showOverlay:function(){return this.isActive&&(this.isMobile||this.temporary)},styles:function(){var t={height:Object(d.c)(this.height),marginTop:this.marginTop+"px",maxHeight:null!=this.maxHeight?"calc(100% - "+ +this.maxHeight+"px)":void 0,transform:"translateX("+this.calculatedTransform+"px)",width:this.calculatedWidth+"px"};return t}},watch:{$route:function(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},isActive:function(t){this.$emit("input",t),this.callUpdate()},isMobile:function(t,e){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=e&&!this.resizeIsDisabled&&this.reactsToMobile&&(this.isActive=!t,this.callUpdate())},permanent:function(t){t&&(this.isActive=!0),this.callUpdate()},showOverlay:function(t){t?this.genOverlay():this.removeOverlay()},temporary:function(){this.callUpdate()},value:function(t){if(!this.permanent){if(null==t)return this.init();t!==this.isActive&&(this.isActive=t)}}},beforeMount:function(){this.init()},methods:{calculateTouchArea:function(){if(this.$el.parentNode){var t=this.$el.parentNode.getBoundingClientRect();this.touchArea={left:t.left+50,right:t.right-50}}},closeConditional:function(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genDirectives:function(){var t=this,e=[{name:"click-outside",value:function(){return t.isActive=!1},args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return!this.touchless&&e.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),e},init:function(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},swipeRight:function(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},swipeLeft:function(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},updateApplication:function(){return!this.isActive||this.temporary||this.isMobile?0:this.calculatedWidth}},render:function(t){var e=this;return t("aside",{class:this.classes,style:this.styles,directives:this.genDirectives(),on:{click:function(){e.miniVariant&&e.$emit("update:miniVariant",!1)},transitionend:function(t){if(t.target===t.currentTarget){e.$emit("transitionend",t);var i=document.createEvent("UIEvents");i.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(i)}}}},[this.$slots.default,t("div",{class:"v-navigation-drawer__border"})])}})},f7dc:function(t,e,i){var n=i("e775");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i("499e").default)("238d2978",n,!0,{sourceMap:!1,shadowMode:!1})}}]);