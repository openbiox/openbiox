(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29f45726","chunk-2d228c54"],{"16e4":function(t,e,n){e=t.exports=n("24fb")(!1),e.push([t.i,'.theme--light.v-overflow-btn .v-input__control:before,.theme--light.v-overflow-btn .v-input__slot:before{background-color:rgba(0,0,0,.12)!important}.theme--light.v-overflow-btn.v-text-field--outline .v-input__control:before,.theme--light.v-overflow-btn.v-text-field--outline .v-input__slot:before{background-color:transparent!important}.theme--light.v-overflow-btn--editable.v-input--is-focused .v-input__append-inner,.theme--light.v-overflow-btn--editable.v-select--is-menu-active .v-input__append-inner,.theme--light.v-overflow-btn--editable:hover .v-input__append-inner,.theme--light.v-overflow-btn--segmented .v-input__append-inner{border-left:1px solid rgba(0,0,0,.12)}.theme--light.v-overflow-btn.v-input--is-focused .v-input__slot,.theme--light.v-overflow-btn.v-select--is-menu-active .v-input__slot,.theme--light.v-overflow-btn:hover .v-input__slot{background:#fff}.theme--dark.v-overflow-btn .v-input__control:before,.theme--dark.v-overflow-btn .v-input__slot:before{background-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-overflow-btn.v-text-field--outline .v-input__control:before,.theme--dark.v-overflow-btn.v-text-field--outline .v-input__slot:before{background-color:transparent!important}.theme--dark.v-overflow-btn--editable.v-input--is-focused .v-input__append-inner,.theme--dark.v-overflow-btn--editable.v-select--is-menu-active .v-input__append-inner,.theme--dark.v-overflow-btn--editable:hover .v-input__append-inner,.theme--dark.v-overflow-btn--segmented .v-input__append-inner{border-left:1px solid hsla(0,0%,100%,.12)}.theme--dark.v-overflow-btn.v-input--is-focused .v-input__slot,.theme--dark.v-overflow-btn.v-select--is-menu-active .v-input__slot,.theme--dark.v-overflow-btn:hover .v-input__slot{background:#424242}.v-overflow-btn{margin-top:12px;padding-top:0}.v-overflow-btn:not(.v-overflow-btn--editable)>.v-input__control>.v-input__slot{cursor:pointer}.v-overflow-btn .v-select__slot{height:48px}.v-overflow-btn .v-select__slot input{margin-left:16px;cursor:pointer}.v-overflow-btn .v-select__selection--comma:first-child{margin-left:16px}.v-overflow-btn .v-input__slot{-webkit-transition:.3s cubic-bezier(.25,.8,.5,1);transition:.3s cubic-bezier(.25,.8,.5,1)}.v-overflow-btn .v-input__slot:after{content:none}.v-overflow-btn .v-label{margin-left:16px;top:calc(50% - 10px)}.v-overflow-btn .v-input__append-inner{width:48px;height:48px;-ms-flex-item-align:auto;align-self:auto;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:0;padding:0;-ms-flex-negative:0;flex-shrink:0}.v-overflow-btn .v-input__append-outer,.v-overflow-btn .v-input__prepend-outer{margin-top:12px;margin-bottom:12px}.v-overflow-btn .v-input__control:before{height:1px;top:-1px;content:"";left:0;position:absolute;-webkit-transition:.3s cubic-bezier(.25,.8,.5,1);transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-overflow-btn.v-input--is-focused .v-input__slot,.v-overflow-btn.v-select--is-menu-active .v-input__slot{-webkit-box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-overflow-btn .v-select__selections{width:0}.v-overflow-btn--segmented .v-select__selections{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.v-overflow-btn--segmented .v-select__selections .v-btn{border-radius:0;margin:0;margin-right:-16px;height:48px;width:100%}.v-overflow-btn--segmented .v-select__selections .v-btn__content{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start}.v-overflow-btn--segmented .v-select__selections .v-btn__content:before{background-color:transparent}.v-overflow-btn--editable .v-select__slot input{cursor:text}.v-overflow-btn--editable .v-input__append-inner,.v-overflow-btn--editable .v-input__append-inner *{cursor:pointer}',""])},8038:function(t,e,n){var i=n("16e4");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("499e").default;a("10a61170",i,!0,{sourceMap:!1,shadowMode:!1})},8460:function(t,e,n){var i=n("b83d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("499e").default;a("e0d70000",i,!0,{sourceMap:!1,shadowMode:!1})},"891e":function(t,e,n){"use strict";n("6b54"),n("c5f6"),n("5df3"),n("1c4c"),n("8460");var i=n("9d26"),a=n("0d3d"),o=n("58df"),r=n("b64a"),s=n("6a18"),l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};function p(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}e["a"]=Object(o["a"])(r["a"],s["a"]).extend({name:"v-pagination",directives:{Resize:a["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},totalVisible:[Number,String],nextIcon:{type:String,default:"$vuetify.icons.next"},prevIcon:{type:String,default:"$vuetify.icons.prev"},value:{type:Number,default:0}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return l({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10)||this.maxButtons;if(this.length<=t)return this.range(1,this.length);var e=t%2===0?1:0,n=Math.floor(t/2),i=this.length-n+1+e;if(this.value>n&&this.value<i){var a=this.value-n+2,o=this.value+n-2-e;return[1,"..."].concat(p(this.range(a,o)),["...",this.length])}if(this.value===n){var r=this.value+n-1-e;return[].concat(p(this.range(1,r)),["...",this.length])}if(this.value===i){var s=this.value-n+1;return[1,"..."].concat(p(this.range(s,this.length)))}return[].concat(p(this.range(1,n)),["..."],p(this.range(i,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout(function(){return t.selected=t.value},100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){var n=[];t=t>0?t:1;for(var i=t;i<=e;i++)n.push(i);return n},genIcon:function(t,e,n,a){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":n},attrs:{type:"button"},on:n?{}:{click:a}},[t(i["a"],[e])])])},genItem:function(t,e){var n=this,i=e===this.value&&(this.color||"primary");return t("button",this.setBackgroundColor(i,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button"},on:{click:function(){return n.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map(function(n,i){return t("li",{key:i},[isNaN(Number(n))?t("span",{class:"v-pagination__more"},[n.toString()]):e.genItem(t,n)])})}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next)];return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}})},"8a62":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-breadcrumbs",{attrs:{items:t.navItems,divider:">"}}),n("v-toolbar",{attrs:{dense:"",flat:""}},[n("v-overflow-btn",{staticClass:"pa-0",attrs:{multiple:"",label:"Select year",items:t.dropdown_years,"hide-details":""},model:{value:t.year,callback:function(e){t.year=e},expression:"year"}}),n("v-divider",{attrs:{vertical:""}}),n("v-overflow-btn",{staticClass:"pa-0",attrs:{items:t.dropdown_month,label:"Select month","hide-details":"",multiple:""},model:{value:t.month,callback:function(e){t.month=e},expression:"month"}}),n("v-divider",{staticClass:"mr-2",attrs:{vertical:""}}),n("v-overflow-btn",{staticClass:"pa-0",attrs:{items:t.dropdown_types,label:"Select types","hide-details":"",multiple:""},model:{value:t.types,callback:function(e){t.types=e},expression:"types"}})],1),n("br"),n("h1",[t._v("2019")]),n("v-divider"),n("br"),t._l(t.items,function(e){return n("v-card",{key:e.id,staticClass:"mx-auto",staticStyle:{margin:"40px"},attrs:{color:e.color,dark:"","max-width":"100%"}},[n("v-card-title",[n("span",{staticClass:"headline"},[t._v(t._s(e.title))])]),n("v-divider"),n("v-card-text",{staticClass:"headline font-weight-bold"},[t._v('"'+t._s(e.text)+'"')]),n("v-card-actions",[n("v-list-tile",{staticClass:"grow"},[n("v-list-tile-avatar",{attrs:{color:"grey darken-3"}},[n("v-img",{staticClass:"elevation-6",attrs:{src:e.avatar}})],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.author))]),n("v-list-tile-title",[t._v(t._s(e.date))])],1)],1)],1)],1)}),n("div",{staticClass:"text-xs-center"},[n("v-pagination",{attrs:{length:1},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],2)},a=[],o=n("db33"),r={data:function(){return{dropdown_years:[2019],dropdown_month:[1,2,3,4,5,6,7,8,9,10,11,12],dropdown_types:["News","Events"],year:null,month:null,types:null,page:1,items:o,navItems:[{text:"Home",disabled:!1,href:"/"},{text:"News & Events",disabled:!0,href:"/news_events"}]}}},s=r,l=n("2877"),p=n("6544"),v=n.n(p),c=n("2bc5"),d=n("b0af"),u=n("99d9"),b=n("12b2"),h=n("a523"),g=n("ce7e"),f=n("adda"),m=n("ba95"),x=n("c954"),_=n("5d23"),w=n("de8e"),k=n("891e"),y=n("71d9"),V=Object(l["a"])(s,i,a,!1,null,null,null);e["default"]=V.exports;v()(V,{VBreadcrumbs:c["a"],VCard:d["a"],VCardActions:u["a"],VCardText:u["b"],VCardTitle:b["a"],VContainer:h["a"],VDivider:g["a"],VImg:f["a"],VListTile:m["a"],VListTileAvatar:x["a"],VListTileContent:_["a"],VListTileTitle:_["b"],VOverflowBtn:w["a"],VPagination:k["a"],VToolbar:y["a"]})},b83d:function(t,e,n){e=t.exports=n("24fb")(!1),e.push([t.i,".theme--light.v-pagination .v-pagination__item{background:#fff;color:#000;width:auto;min-width:34px;padding:0 5px}.theme--light.v-pagination .v-pagination__item--active{color:#fff}.theme--light.v-pagination .v-pagination__navigation{background:#fff}.theme--light.v-pagination .v-pagination__navigation .v-icon{color:rgba(0,0,0,.54)}.theme--dark.v-pagination .v-pagination__item{background:#424242;color:#fff;width:auto;min-width:34px;padding:0 5px}.theme--dark.v-pagination .v-pagination__item--active{color:#fff}.theme--dark.v-pagination .v-pagination__navigation{background:#424242}.theme--dark.v-pagination .v-pagination__navigation .v-icon{color:#fff}.v-pagination{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;list-style-type:none;margin:0;max-width:100%;padding:0}.v-pagination,.v-pagination>li{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.v-pagination>li{display:-webkit-box;display:-ms-flexbox;display:flex}.v-pagination--circle .v-pagination__item,.v-pagination--circle .v-pagination__more,.v-pagination--circle .v-pagination__navigation{border-radius:50%}.v-pagination--disabled{pointer-events:none;opacity:.6}.v-pagination__item{-webkit-box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);border-radius:4px;font-size:14px;background:transparent;height:34px;width:34px;margin:.3rem;text-decoration:none;-webkit-transition:.3s cubic-bezier(0,0,.2,1);transition:.3s cubic-bezier(0,0,.2,1)}.v-pagination__item--active{-webkit-box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-pagination__navigation{-webkit-box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-decoration:none;height:2rem;border-radius:4px;width:2rem;margin:.3rem 10px}.v-pagination__navigation .v-icon{font-size:2rem;-webkit-transition:.2s cubic-bezier(.4,0,.6,1);transition:.2s cubic-bezier(.4,0,.6,1);vertical-align:middle}.v-pagination__navigation--disabled{opacity:.6;pointer-events:none}.v-pagination__more{margin:.3rem;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:2rem;width:2rem}",""])},baaf:function(t,e,n){"use strict";var i=n("c6a6");e["a"]=i["a"]},db33:function(t){t.exports=[{id:1,title:"News",text:"We announce that openbiox is officially established today.",author:"Jianfeng",avatar:"https://s2.ax1x.com/2019/05/28/VeMMxP.png",color:"blue darken-1",date:"2019/03/03"},{id:1,title:"Events",text:"We held the first offline hacker time (Shiny application) at Shanghai, China.",author:"Jianfeng",avatar:"https://s2.ax1x.com/2019/05/28/VeMMxP.png",color:"red darken-1",date:"2019/04/21"},{id:2,title:"News",text:"Now, the forum of openbiox is availbe here: community.openbiox.org. We are sharing bioinformatics resources and ideas.",author:"Jianfeng",avatar:"https://s2.ax1x.com/2019/05/28/VeMMxP.png",color:"blue darken-1",date:"2019/05/22"}]},de8e:function(t,e,n){"use strict";n("7514"),n("8038");var i=n("b974"),a=n("baaf"),o=n("8654"),r=n("afdd"),s=n("d9bd");e["a"]=a["a"].extend({name:"v-overflow-btn",props:{segmented:Boolean,editable:Boolean,transition:i["a"].options.props.transition},computed:{classes:function(){return Object.assign(a["a"].options.computed.classes.call(this),{"v-overflow-btn":!0,"v-overflow-btn--segmented":this.segmented,"v-overflow-btn--editable":this.editable})},isAnyValueAllowed:function(){return this.editable||a["a"].options.computed.isAnyValueAllowed.call(this)},isSingle:function(){return!0},computedItems:function(){return this.segmented?this.allItems:this.filteredItems},$_menuProps:function(){var t=a["a"].options.computed.$_menuProps.call(this);return t.transition=t.transition||"v-menu-transition",t}},methods:{genSelections:function(){return this.editable?a["a"].options.methods.genSelections.call(this):i["a"].options.methods.genSelections.call(this)},genCommaSelection:function(t,e,n){return this.segmented?this.genSegmentedBtn(t):i["a"].options.methods.genCommaSelection.call(this,t,e,n)},genInput:function(){var t=o["a"].options.methods.genInput.call(this);return t.data.domProps.value=this.editable?this.internalSearch:"",t.data.attrs.readonly=!this.isAnyValueAllowed,t},genLabel:function(){if(this.editable&&this.isFocused)return null;var t=o["a"].options.methods.genLabel.call(this);return t?(t.data.style={},t):t},genSegmentedBtn:function(t){var e=this,n=this.getValue(t),i=this.computedItems.find(function(t){return e.getValue(t)===n})||t;return i.text&&i.callback?this.$createElement(r["a"],{props:{flat:!0},on:{click:function(t){t.stopPropagation(),i.callback(t)}}},[i.text]):(Object(s["c"])("When using 'segmented' prop without a selection slot, items must contain both a text and callback property",this),null)}}})}}]);
//# sourceMappingURL=chunk-29f45726.21bf6b09.js.map