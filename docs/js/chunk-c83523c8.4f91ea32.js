(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-c83523c8"],{"0ad5":function(t,e,i){"use strict";var a=i("3787");i.n(a).a},"287e":function(t,e,i){(t.exports=i("24fb")(!1)).push([t.i,'.is-active{color:#1453c7;padding-left:10px;border-left:solid #1453c7}.v-custom-btn:active{background:#f5f4f4;-webkit-transition-duration:50;transition-duration:50}.ripple{position:relative;overflow:hidden}.ripple:after{content:"";display:block;position:absolute;width:100%;height:100%;top:0;left:0;pointer-events:none;background-image:radial-gradient(circle,#666 10%,transparent 10.01%);background-repeat:no-repeat;background-position:50%;-webkit-transform:scale(10);transform:scale(10);opacity:0;-webkit-transition:opacity .8s,-webkit-transform .5s;transition:opacity .8s,-webkit-transform .5s;transition:transform .5s,opacity .8s;transition:transform .5s,opacity .8s,-webkit-transform .5s}.ripple:active:after{-webkit-transform:scale(0);transform:scale(0);opacity:.3;-webkit-transition:0s;transition:0s}',""])},3787:function(t,e,i){var a=i("287e");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i("499e").default)("4132f194",a,!0,{sourceMap:!1,shadowMode:!1})},"57ce":function(t,e,i){"use strict";i.r(e);var a={data:function(){return{pageName:document.pageName,sectionName:null,itemName:null,query:null}},watch:{$route:function(){this.updatePageName(),this.fetchData()}},mounted:function(){this.fetchData()},methods:{isPageActive:function(t,e,i){return this.pageName===t||this.sectionName===e&&this.itemName===i?"is-active":null},updatePageName:function(){this.pageName=document.pageName},fetchData:function(){this.$route.params.sectionName?this.sectionName=this.$route.params.sectionName:this.sectionName=null,this.$route.params.itemName?this.itemName=this.$route.params.itemName:this.itemName=null,this.$route.query&&(this.query=this.$route.query)}},props:["sideNavData"]},s=(i("0ad5"),i("2877")),n=i("6544"),o=i.n(n),r=i("132d"),l=i("56b0"),c=i("ba95"),u=i("40fe"),m=i("5d23"),v=Object(s.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.sideNavData,function(e,a){return i("v-list-group",{key:a,attrs:{"prepend-icon":e.icon,value:e.sectionName&&e.sectionName===t.sectionName||"openbiox"==e.name,stateless:""}},[i("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[i("v-list-tile-title",[t._v(t._s(e.name))])],1),t._l(e.subItems,function(e,a){return i("div",{key:a},[!e.subItems&&e.useRoutes?i("div",{staticClass:"v-custom-btn ripple nav-div"},[i("router-link",{attrs:{to:e.href}},[i("v-list-tile",[i("v-list-tile-action",[i("v-icon",[t._v(t._s(e.icon))])],1),i("v-list-tile-content",[e.name&&e.sectionName&&e.itemName?i("v-list-tile-title",{class:t.isPageActive(e.name,e.sectionName,e.itemName)},[t._v(t._s(e.name))]):i("v-list-tile-title",{class:t.isPageActive(e.name,"","","")},[t._v(t._s(e.name))])],1)],1)],1)],1):e.subItems||e.useRoutes?i("v-list-group",{attrs:{"sub-group":""}},[i("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[i("v-list-tile-title",[t._v(t._s(e.name))])],1),t._l(e.subItems,function(a,s){return i("v-list-tile",{key:s,staticClass:"v-custom-btn ripple",attrs:{target:a.target,href:a.href}},[e.useRoutes&&e.sectionName&&e.itemName?i("router-link",{attrs:{to:a.href}},[i("v-list-tile-title",{staticStyle:{"margin-left":"80px"}},[t._v(t._s(a.name))]),a.icon?i("v-list-tile-action",[i("v-icon",[t._v(t._s(a.icon))])],1):t._e()],1):i("v-list-tile-title",{staticStyle:{"margin-left":"80px"}},[t._v(t._s(a.name))]),a.icon?i("v-list-tile-action",[i("v-icon",[t._v(t._s(a.icon))])],1):t._e()],1)})],2):i("div",{staticClass:"v-custom-btn ripple nav-div"},[i("v-list-tile",{attrs:{href:e.href,target:e.target}},[i("v-list-tile-action",[i("v-icon",[t._v(t._s(e.icon))])],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v(t._s(e.name))])],1)],1)],1)],1)})],2)}),1)},[],!1,null,null,null);e.default=v.exports;o()(v,{VIcon:r.a,VListGroup:l.a,VListTile:c.a,VListTileAction:u.a,VListTileContent:m.a,VListTileTitle:m.b})}}]);