(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3f0a6618","chunk-2d21710c","chunk-2d208c56"],{"0a96":function(t,e,o){(t.exports=o("24fb")(!1)).push([t.i,"#footer[data-v-306574b2]{width:100%;text-align:center}.without-text-transform[data-v-306574b2]{text-transform:none!important}",""])},a5e1:function(t){t.exports=["Community","Wiki"]},a8ce:function(t,e,o){(t.exports=o("24fb")(!1)).push([t.i,".theme--light.v-footer{background:#f5f5f5;color:rgba(0,0,0,.87)}.theme--dark.v-footer{background:#212121;color:#fff}.v-footer{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:0!important;-ms-flex:0 1 auto!important;flex:0 1 auto!important;min-height:36px;-webkit-transition:.2s cubic-bezier(.4,0,.2,1);transition:.2s cubic-bezier(.4,0,.2,1)}.v-footer--absolute,.v-footer--fixed{bottom:0;left:0;width:100%;z-index:3}.v-footer--inset{z-index:2}.v-footer--absolute{position:absolute}.v-footer--fixed{position:fixed}",""])},bff7:function(t,e,o){"use strict";o.r(e);var i=o("c4af"),n=o("a5e1"),r={name:"BaseFooter",components:{"v-custom-license":function(){return Promise.all([o.e("chunk-59291143"),o.e("chunk-14a78c08"),o.e("chunk-586f77db"),o.e("chunk-26f065ae"),o.e("chunk-4c089cdb")]).then(o.bind(null,"1d95"))}},data:function(){return{msg:"Welcome to Your Vue.js App",links:i,externalSite:n}},methods:{isExternalSite:function(t){for(var e in this.externalSite)if(t===this.externalSite[e])return!0;return!1}}},a=(o("d106"),o("2877")),s=o("6544"),c=o.n(s),u=o("8336"),f=o("0e8f"),l=(o("d263"),o("c5f6"),o("e93b"),o("c6f7")),h=o("b64a"),p=o("6a18"),d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t},m={name:"v-footer",mixins:[Object(l.a)(null,["height","inset"]),h.a,p.a],props:{height:{default:32,type:[Number,String]},inset:Boolean},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},computedMarginBottom:function(){if(this.app)return this.$vuetify.application.bottom},computedPaddingLeft:function(){return this.app&&this.inset?this.$vuetify.application.left:0},computedPaddingRight:function(){return this.app&&this.inset?this.$vuetify.application.right:0},styles:function(){var t={height:isNaN(this.height)?this.height:this.height+"px"};return this.computedPaddingLeft&&(t.paddingLeft=this.computedPaddingLeft+"px"),this.computedPaddingRight&&(t.paddingRight=this.computedPaddingRight+"px"),this.computedMarginBottom&&(t.marginBottom=this.computedMarginBottom+"px"),t}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){return t("footer",this.setBackgroundColor(this.color,{staticClass:"v-footer",class:d({"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--inset":this.inset},this.themeClasses),style:this.styles,ref:"content"}),this.$slots.default)}},b=o("a722"),x=Object(a.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-footer",{attrs:{height:"auto",color:"grey darken-3"}},[o("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[o("v-custom-license"),t._l(t.links,function(e,i,n){return o("div",{key:n,staticClass:"nav-div"},[t.isExternalSite(e)?o("v-btn",{staticClass:"without-text-transform",attrs:{dark:"",flat:"",round:"",target:"_blank",color:"white",href:i}},[t._v(t._s(e))]):o("router-link",{attrs:{to:i}},[o("v-btn",{staticClass:"without-text-transform",attrs:{dark:"",flat:"",round:"",color:"white"}},[t._v(t._s(e))])],1)],1)}),o("v-flex",{attrs:{dark:"","lighten-2":"","py-3":"","text-xs-center":"","white--text":"",xs12:""}},[t._v("openbiox is intended for research purposes only\n      "),o("br"),o("strong",[t._v("©2019 openbiox")])])],2)],1)},[],!1,null,"306574b2",null);e.default=x.exports;c()(x,{VBtn:u.a,VFlex:f.a,VFooter:m,VLayout:b.a})},c4af:function(t){t.exports={"/home":"Home","/members":"Members","/projects":"Projects","https://community.openbiox.org":"Community","/wiki":"Wiki","/contact":"Contact Us"}},d106:function(t,e,o){"use strict";var i=o("e4ea");o.n(i).a},e4ea:function(t,e,o){var i=o("0a96");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,o("499e").default)("22a4a17a",i,!0,{sourceMap:!1,shadowMode:!1})},e93b:function(t,e,o){var i=o("a8ce");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,o("499e").default)("71496004",i,!0,{sourceMap:!1,shadowMode:!1})}}]);