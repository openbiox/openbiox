(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3244bbba","chunk-c83523c8","chunk-84afb25c"],{"0789":function(t,e,i){"use strict";i.d(e,"b",function(){return a}),i.d(e,"c",function(){return s}),i.d(e,"d",function(){return o}),i.d(e,"e",function(){return c}),i.d(e,"f",function(){return l}),i.d(e,"a",function(){return u});var n=i("80d2"),r=i("163e"),a=(Object(n.g)("bottom-sheet-transition"),Object(n.g)("carousel-transition"),Object(n.g)("carousel-reverse-transition"),Object(n.g)("tab-transition"),Object(n.g)("tab-reverse-transition"),Object(n.g)("menu-transition"),Object(n.g)("fab-transition","center center","out-in")),s=(Object(n.g)("dialog-transition"),Object(n.g)("dialog-bottom-transition"),Object(n.g)("fade-transition")),o=(Object(n.g)("scale-transition"),Object(n.g)("scroll-x-transition"),Object(n.g)("scroll-x-reverse-transition"),Object(n.g)("scroll-y-transition")),c=(Object(n.g)("scroll-y-reverse-transition"),Object(n.g)("slide-x-transition")),l=(Object(n.g)("slide-x-reverse-transition"),Object(n.g)("slide-y-transition")),u=(Object(n.g)("slide-y-reverse-transition"),Object(n.d)("expand-transition",Object(r.a)()));Object(n.d)("expand-x-transition",Object(r.a)("",!0)),Object(n.d)("row-expand-transition",Object(r.a)("datatable__expand-col--expanded"))},"0a49":function(t,e,i){var n=i("9b43"),r=i("626a"),a=i("4bf8"),s=i("9def"),o=i("cd1c");t.exports=function(t,e){var i=1==t,c=2==t,l=3==t,u=4==t,f=6==t,v=5==t||f,d=e||o;return function(e,o,b){for(var m,p,g=a(e),h=r(g),y=n(o,b,3),_=s(h.length),j=0,w=i?d(e,_):c?d(e,0):void 0;_>j;j++)if((v||j in h)&&(p=y(m=h[j],j,g),t))if(i)w[j]=p;else if(p)switch(t){case 3:return!0;case 5:return m;case 6:return j;case 2:w.push(m)}else if(u)return!1;return f?-1:l||u?u:w}}},"0ad5":function(t,e,i){"use strict";var n=i("3787");i.n(n).a},"163e":function(t,e,i){"use strict";var n=i("80d2");function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?"width":"height";return{beforeEnter:function(t){t._parent=t.parentNode,t._initialStyle=r({transition:t.style.transition,visibility:t.style.visibility,overflow:t.style.overflow},e,t.style[e])},enter:function(i){var r=i._initialStyle;i.style.setProperty("transition","none","important"),i.style.visibility="hidden";var a=i["offset"+Object(n.t)(e)]+"px";i.style.visibility=r.visibility,i.style.overflow="hidden",i.style[e]=0,i.offsetHeight,i.style.transition=r.transition,t&&i._parent&&i._parent.classList.add(t),requestAnimationFrame(function(){i.style[e]=a})},afterEnter:a,enterCancelled:a,leave:function(t){t._initialStyle=r({overflow:t.style.overflow},e,t.style[e]),t.style.overflow="hidden",t.style[e]=t["offset"+Object(n.t)(e)]+"px",t.offsetHeight,requestAnimationFrame(function(){return t.style[e]=0})},afterLeave:i,leaveCancelled:i};function i(e){t&&e._parent&&e._parent.classList.remove(t),a(e)}function a(t){t.style.overflow=t._initialStyle.overflow,t.style[e]=t._initialStyle[e],delete t._initialStyle}}},"287e":function(t,e,i){(t.exports=i("24fb")(!1)).push([t.i,'.is-active{color:#1453c7;padding-left:10px;border-left:solid #1453c7}.v-custom-btn:active{background:#f5f4f4;-webkit-transition-duration:50;transition-duration:50}.ripple{position:relative;overflow:hidden}.ripple:after{content:"";display:block;position:absolute;width:100%;height:100%;top:0;left:0;pointer-events:none;background-image:radial-gradient(circle,#666 10%,transparent 10.01%);background-repeat:no-repeat;background-position:50%;-webkit-transform:scale(10);transform:scale(10);opacity:0;-webkit-transition:opacity .8s,-webkit-transform .5s;transition:opacity .8s,-webkit-transform .5s;transition:transform .5s,opacity .8s;transition:transform .5s,opacity .8s,-webkit-transform .5s}.ripple:active:after{-webkit-transform:scale(0);transform:scale(0);opacity:.3;-webkit-transition:0s;transition:0s}',""])},3787:function(t,e,i){var n=i("287e");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i("499e").default)("4132f194",n,!0,{sourceMap:!1,shadowMode:!1})},"57ce":function(t,e,i){"use strict";i.r(e);var n={data:function(){return{pageName:document.pageName,sectionName:null,itemName:null,query:null}},watch:{$route:function(){this.updatePageName(),this.fetchData()}},mounted:function(){this.fetchData()},methods:{isPageActive:function(t,e,i){return this.pageName===t||this.sectionName===e&&this.itemName===i?"is-active":null},updatePageName:function(){this.pageName=document.pageName},fetchData:function(){this.$route.params.sectionName?this.sectionName=this.$route.params.sectionName:this.sectionName=null,this.$route.params.itemName?this.itemName=this.$route.params.itemName:this.itemName=null,this.$route.query&&(this.query=this.$route.query)}},props:["sideNavData"]},r=(i("0ad5"),i("2877")),a=i("6544"),s=i.n(a),o=i("132d"),c=i("56b0"),l=i("ba95"),u=i("40fe"),f=i("5d23"),v=Object(r.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.sideNavData,function(e,n){return i("v-list-group",{key:n,attrs:{"prepend-icon":e.icon,value:e.sectionName&&e.sectionName===t.sectionName||"openbiox"==e.name,stateless:""}},[i("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[i("v-list-tile-title",[t._v(t._s(e.name))])],1),t._l(e.subItems,function(e,n){return i("div",{key:n},[!e.subItems&&e.useRoutes?i("div",{staticClass:"v-custom-btn ripple nav-div"},[i("router-link",{attrs:{to:e.href}},[i("v-list-tile",[i("v-list-tile-action",[i("v-icon",[t._v(t._s(e.icon))])],1),i("v-list-tile-content",[e.name&&e.sectionName&&e.itemName?i("v-list-tile-title",{class:t.isPageActive(e.name,e.sectionName,e.itemName)},[t._v(t._s(e.name))]):i("v-list-tile-title",{class:t.isPageActive(e.name,"","","")},[t._v(t._s(e.name))])],1)],1)],1)],1):e.subItems||e.useRoutes?i("v-list-group",{attrs:{"sub-group":""}},[i("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[i("v-list-tile-title",[t._v(t._s(e.name))])],1),t._l(e.subItems,function(n,r){return i("v-list-tile",{key:r,staticClass:"v-custom-btn ripple",attrs:{target:n.target,href:n.href}},[e.useRoutes&&e.sectionName&&e.itemName?i("router-link",{attrs:{to:n.href}},[i("v-list-tile-title",{staticStyle:{"margin-left":"80px"}},[t._v(t._s(n.name))]),n.icon?i("v-list-tile-action",[i("v-icon",[t._v(t._s(n.icon))])],1):t._e()],1):i("v-list-tile-title",{staticStyle:{"margin-left":"80px"}},[t._v(t._s(n.name))]),n.icon?i("v-list-tile-action",[i("v-icon",[t._v(t._s(n.icon))])],1):t._e()],1)})],2):i("div",{staticClass:"v-custom-btn ripple nav-div"},[i("v-list-tile",{attrs:{href:e.href,target:e.target}},[i("v-list-tile-action",[i("v-icon",[t._v(t._s(e.icon))])],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v(t._s(e.name))])],1)],1)],1)],1)})],2)}),1)},[],!1,null,null,null);e.default=v.exports;s()(v,{VIcon:o.a,VListGroup:c.a,VListTile:l.a,VListTileAction:u.a,VListTileContent:f.a,VListTileTitle:f.b})},"58df":function(t,e,i){"use strict";i.d(e,"a",function(){return a});var n=i("8bbf"),r=i.n(n);function a(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return r.a.extend({mixins:e})}},"94ab":function(t,e,i){"use strict";i.d(e,"a",function(){return c}),i.d(e,"b",function(){return l});var n=i("8bbf"),r=i.n(n),a=i("d9bd");function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function o(t,e){return function(){return Object(a.c)("The "+t+" component must be used inside a "+e)}}function c(t,e,i){var n=e&&i?{register:o(e,i),unregister:o(e,i)}:null;return r.a.extend({name:"registrable-inject",inject:s({},t,{default:n})})}function l(t){return r.a.extend({name:"registrable-provide",methods:{register:null,unregister:null},provide:function(){return s({},t,{register:this.register,unregister:this.unregister})}})}},"98a1":function(t,e,i){"use strict";i.d(e,"b",function(){return s});var n=i("8bbf"),r=i.n(n);function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function s(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"input";return r.a.extend({name:"toggleable",model:{prop:e,event:i},props:a({},e,{required:!1}),data:function(){return{isActive:!!this[e]}},watch:(t={},a(t,e,function(t){this.isActive=!!t}),a(t,"isActive",function(t){!!t!==this[e]&&this.$emit(i,t)}),t)})}var o=s();e.a=o},"9d26":function(t,e,i){"use strict";var n=i("132d");e.a=n.a},cd1c:function(t,e,i){var n=i("e853");t.exports=function(t,e){return new(n(t))(e)}},e853:function(t,e,i){var n=i("d3f4"),r=i("1169"),a=i("2b4c")("species");t.exports=function(t){var e;return r(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!r(e.prototype)||(e=void 0),n(e)&&null===(e=e[a])&&(e=void 0)),void 0===e?Array:e}}}]);