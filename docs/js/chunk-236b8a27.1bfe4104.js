(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-236b8a27"],{"163b":function(t,e,i){"use strict";i("c5f6");var a=i("8bbf"),o=i.n(a);e.a=o.a.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var i=this;this.clearDelay();var a=parseInt(this[t+"Delay"],10);this[t+"Timeout"]=setTimeout(e||function(){i.isActive={open:!0,close:!1}[t]},a)}}})},"79bd":function(t,e,i){"use strict";i.r(e);var a={data:function(){return{cardItems:[{activeText:"openbiox",activeHref:"https://github.com/openbiox/openbiox",disactiveSrc:"https://s2.ax1x.com/2019/04/23/EE42Ux.jpg"},{activeText:"XenaShiny",activeHref:"https://github.com/openbiox/XenaShiny",disactiveSrc:"https://s2.ax1x.com/2019/04/23/EE45xe.jpg"},{activeText:"playcloud",activeHref:"https://github.com/openbiox/playcloud",disactiveSrc:"https://s2.ax1x.com/2019/04/23/EE4R56.jpg"},{activeText:"Cookbook-for-R",activeHref:"https://github.com/openbiox/Cookbook-for-R-Chinese",disactiveSrc:"https://s2.ax1x.com/2019/04/23/EE4fPK.jpg"},{activeText:"TCGA-Tool-Kit",activeHref:"https://github.com/openbiox/TCGA-Tool-Kit",disactiveSrc:"https://s2.ax1x.com/2019/04/23/EE442D.jpg"},{activeText:"scRNA-seq",activeHref:"https://github.com/openbiox/scRNA-seq-OnlineFlow",disactiveSrc:"https://s2.ax1x.com/2019/04/23/EE4h8O.jpg"},{activeText:"metapip",activeHref:"https://github.com/openbiox/metapip",disactiveSrc:"https://s2.ax1x.com/2019/04/23/EE47qA.jpg"},{activeText:"ENCODE-Challenge",activeHref:"https://github.com/openbiox/ENCODE-Challenge",disactiveSrc:"https://s2.ax1x.com/2019/04/23/EE4oKH.jpg"},{activeText:"disease-kb",activeHref:"https://github.com/openbiox/openbiox-disease-kb",disactiveSrc:"https://s2.ax1x.com/2019/04/23/EE4Trd.jpg"}]}}},o=i("2877"),s=i("6544"),c=i.n(s),r=i("8336"),n=i("b0af"),l=i("0e8f"),v=i("ce87"),u=i("d903"),d=i("604c"),h=i("a722"),p=i("0789"),x=Object(o.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-item-group",[i("v-layout",{attrs:{wrap:""}},t._l(t.cardItems,function(e,a){return i("v-flex",{key:a,attrs:{xs4:"",md4:""}},[i("v-hover",{scopedSlots:t._u([{key:"default",fn:function(a){var o=a.hover;return i("v-item",{scopedSlots:t._u([{key:"default",fn:function(a){var s=a.active,c=a.toggle;return i("v-card",{staticClass:"d-flex align-center",class:"elevation-"+(o?24:2),staticStyle:{margin:"2px","margin-bottom":"-1.5px"},attrs:{color:s?"gray":"",dark:"",height:"98%"},on:{click:c}},[i("v-scroll-y-transition",[s&&e.activeText?i("div",{staticClass:"text-xs-center"},[e.activeHref?i("v-btn",{staticClass:"without-text-transform",attrs:{color:"info",round:"",large:"",href:e.activeHref,target:"_blank"}},[t._v(t._s(e.activeText))]):i("div",[t._v(t._s(e.activeText))])],1):s&&e.activeSrc?i("div",[i("img",{attrs:{src:e.activeSrc}})]):e.disactiveText?i("div",{staticClass:"text-xs-center"},[e.disactiveHref?i("v-btn",{staticClass:"without-text-transform",attrs:{color:"info",round:"",href:e.disactiveHref,large:"",flat:"",target:"_blank"}},[t._v(t._s(e.disactiveText))]):i("div",[t._v(t._s(e.disactiveText))])],1):e.disactiveSrc?i("div",[i("img",{attrs:{src:e.disactiveSrc,width:"100%",height:"362px"}})]):t._e()])],1)}}],null,!0)})}}],null,!0)})],1)}),1)],1)},[],!1,null,null,null);e.default=x.exports;c()(x,{VBtn:r.a,VCard:n.a,VFlex:l.a,VHover:v.a,VItem:u.a,VItemGroup:d.b,VLayout:h.a,VScrollYTransition:p.d})},ce87:function(t,e,i){"use strict";var a=i("163b"),o=i("98a1"),s=i("58df"),c=i("d9bd");e.a=Object(s.a)(a.a,o.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){if(!this.$scopedSlots.default&&void 0===this.value)return Object(c.c)("v-hover is missing a default scopedSlot or bound value",this),null;var t=void 0;return this.$scopedSlots.default?t=this.$scopedSlots.default({hover:this.isActive}):this.$slots.default&&1===this.$slots.default.length&&(t=this.$slots.default[0]),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(c.c)("v-hover should only contain a single element",this),t)}})}}]);