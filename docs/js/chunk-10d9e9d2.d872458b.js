(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10d9e9d2"],{"005d":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"min-height":"768px"}},[a("v-container",[t.useFloatSideNav?a("v-layout",{attrs:{wrap:"","align-center":"","justify-space-between":"",row:"","fill-height":""}},[a("v-flex",{staticClass:"float-left-nav",attrs:{md4:""}},[a("v-custom-float-left-nav",{attrs:{sideNavData:t.sideNavData,sideNavTitle:t.sideNavTitle}})],1),a("v-flex",{staticClass:"right-application-box",staticStyle:{"z-index":"2"},attrs:{xs12:"",md12:"",lg8:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-custom-subpage-top-nav",{attrs:{tabItems:t.tabItems}}),a("br")],1),t._l(t.tools,function(e,s){return a("v-flex",{key:"k2"+s,attrs:{xs12:""}},[a(t.usedComponent,{tag:"component",attrs:{tooldata:e}}),a("br")],1)})],2)],1):a("v-layout",{attrs:{wrap:""}},[a("v-flex",{staticClass:"right-application-box",staticStyle:{"z-index":"2"},attrs:{xs12:"",md12:"",lg12:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-custom-subpage-top-nav",{attrs:{tabItems:t.tabItems}}),a("br")],1),t._l(t.tools,function(e,s){return a("v-flex",{key:"k2"+s,attrs:{xs12:""}},[a(t.usedComponent,{tag:"component",attrs:{tooldata:e}}),a("br"),t.usedExtraComponentes?a("div",[t._l(t.usedExtraComponentes,function(t,s){return a(t,{key:"k3"+s,tag:"component",attrs:{tooldata:e}})}),a("br")],2):t._e()],1)})],2)],1)],1)],1)},i=[],o=(a("7f7f"),{props:["toolsData","usedComponent","usedExtraComponentes","routerPushPath","useFloatSideNav","sideNavTitle"],components:{"v-custom-subpage-top-nav":function(){return a.e("chunk-1340f546").then(a.bind(null,"e1e2"))},"v-custom-float-left-nav":function(){return a.e("chunk-03a8cd28").then(a.bind(null,"909b"))}},data:function(){return{tabItems:[],sideNavData:[],tools:[],sectionName:null,itemName:null,query:null}},mounted:function(){this.sideNavData=this.toolsData,this.getTabItems(),this.fetchData(),this.getCardItems(),this.routerPushPath&&!this.sectionName&&this.$router.push({path:this.routerPushPath})},watch:{$route:function(){this.fetchData(),this.tools=[],this.getTabItems(),this.getCardItems(),this.sectionName||this.$router.push({path:this.routerPushPath})}},methods:{getTabItems:function(){var t=localStorage.getItem("userGroup")?localStorage.getItem("userGroup"):[];this.tabItems=[];for(var e=0;e<this.sideNavData.length;e++)this.isUserGroupNotAllow(this.sideNavData[e].userGroup,t)||this.tabItems.push({name:this.sideNavData[e].name,sectionName:this.sideNavData[e].sectionName,href:this.sideNavData[e].href})},getCardItems:function(){for(var t=0;t<this.sideNavData.length;t++)if(this.sideNavData[t].subItems)for(var e=0;e<this.sideNavData[t].subItems.length;e++)this.sideNavData[t].subItems[e].component&&this.isShowTool(this.sideNavData[t].subItems[e].sectionName,this.sideNavData[t].subItems[e].itemName,this.sideNavData[t].subItems[e].userGroup)&&this.tools.push(this.sideNavData[t].subItems[e])},fetchData:function(){this.$route.params.sectionName?this.sectionName=this.$route.params.sectionName:this.sectionName=null,this.$route.params.itemName?this.itemName=this.$route.params.itemName:this.itemName=null,this.$route.query&&(this.query=this.$route.query)},isUserGroupNotAllow:function(t,e){if(t){if(e===[])return!1;if(t.length&&e.length){for(var a=0;a<t.length;a++)for(var s=0;s<e.length;s++)if(t[a]===e[s])return!1;return!0}if(t.length){for(a=0;a<t.length;a++)if(t[a]===e)return!1;return!0}if(!e.length)return t!==e;for(a=0;a<e.length;a++)if(e[a]===t)return!1}},isShowTool:function(t,e,a){var s=!0,i=localStorage.getItem("userGroup")?localStorage.getItem("userGroup"):[];return s=!this.isUserGroupNotAllow(a,i),!(t!==this.sectionName||null!==this.itemName||!s)||!(t!==this.sectionName||this.itemName!==e||!s)}}}),n=o,r=(a("e7ff"),a("2877")),u=a("6544"),l=a.n(u),h=a("a523"),m=a("0e8f"),c=a("a722"),f=Object(r["a"])(n,s,i,!1,null,null,null);e["default"]=f.exports;l()(f,{VContainer:h["a"],VFlex:m["a"],VLayout:c["a"]})},b866:function(t,e,a){var s=a("bddd");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var i=a("499e").default;i("7d229ae0",s,!0,{sourceMap:!1,shadowMode:!1})},bddd:function(t,e,a){e=t.exports=a("24fb")(!1),e.push([t.i,"@media only screen and (max-width:1200px){.float-left-nav{display:none}}",""])},e7ff:function(t,e,a){"use strict";var s=a("b866"),i=a.n(s);i.a}}]);
//# sourceMappingURL=chunk-10d9e9d2.d872458b.js.map