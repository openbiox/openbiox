(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-236c2f9b"],{"163b":function(e,t,a){"use strict";a("c5f6");var s=a("2b0e");t["a"]=s["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(e,t){var a=this;this.clearDelay();var s=parseInt(this[e+"Delay"],10);this[e+"Timeout"]=setTimeout(t||function(){a.isActive={open:!0,close:!1}[e]},s)}}})},"7ef0":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{"align-start":"","justify-space-around":"",row:"",wrap:""}},e._l(e.img,function(t,s){return a("v-flex",{key:s,attrs:{xs12:"",md6:""}},[a("v-hover",{scopedSlots:e._u([{key:"default",fn:function(s){var o=s.hover;return a("v-card",{class:"elevation-"+(o?12:4)},[a("a",{attrs:{href:t.href,target:"_blank"}},[a("v-img",{staticClass:"white--text",attrs:{"aspect-ratio":16/9,src:t.src,height:"350",width:"100%"}})],1),a("v-card-title",[a("div",[a("span",{staticClass:"custom-card-span-text"},[e._v(e._s(t.span))])])])],1)}}],null,!0)})],1)}),1)},o=[],n={props:["img"],data:function(){return{}}},i=n,r=a("2877"),l=a("6544"),u=a.n(l),c=a("b0af"),d=a("12b2"),h=a("0e8f"),f=a("ce87"),v=a("adda"),p=a("a722"),m=Object(r["a"])(i,s,o,!1,null,null,null);t["default"]=m.exports;u()(m,{VCard:c["a"],VCardTitle:d["a"],VFlex:h["a"],VHover:f["a"],VImg:v["a"],VLayout:p["a"]})},ce87:function(e,t,a){"use strict";var s=a("163b"),o=a("98a1"),n=a("58df"),i=a("d9bd");t["a"]=Object(n["a"])(s["a"],o["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){if(!this.$scopedSlots.default&&void 0===this.value)return Object(i["c"])("v-hover is missing a default scopedSlot or bound value",this),null;var e=void 0;return this.$scopedSlots.default?e=this.$scopedSlots.default({hover:this.isActive}):this.$slots.default&&1===this.$slots.default.length&&(e=this.$slots.default[0]),Array.isArray(e)&&1===e.length&&(e=e[0]),e&&!Array.isArray(e)&&e.tag?(this.disabled||(e.data=e.data||{},this._g(e.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),e):(Object(i["c"])("v-hover should only contain a single element",this),e)}})}}]);
//# sourceMappingURL=chunk-236c2f9b.801b726c.js.map