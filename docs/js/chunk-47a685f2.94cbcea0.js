(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-47a685f2"],{"654b":function(t,e,i){(t.exports=i("24fb")(!1)).push([t.i,"#base-side-nav{position:absolute;width:100%;z-index:2;top:275px}@media only screen and (max-width:1100px){.docs-left-nav{display:none}}body,html{width:100%;margin:0 auto;padding:0 auto}",""])},"909b":function(t,e,i){"use strict";i.r(e);var a={props:["sideNavData","sideNavTitle"],data:function(){return{}},created:function(){window.addEventListener("scroll",this.fixSideNav,!0)},methods:{fixSideNav:function(){var t=document.getElementById("base-side-nav");(document.documentElement.scrollTop||document.body.scrollTop)>=275&&t?(t.style.position="fixed",t.style.top="80px"):t&&(t.style.position="absolute",t.style.top="275px")}}},s=(i("91c0"),i("2877")),n=i("6544"),o=i.n(n),d=i("ce7e"),l=i("8860"),r=i("ba95"),c=i("5d23"),u=i("f774"),v=Object(s.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"base-side-nav"}},[e("v-navigation-drawer",{staticClass:"elevation-4 docs-left-nav",staticStyle:{"min-height":"400px"},attrs:{value:"true","disable-route-watcher":""}},[e("v-list",[e("v-list-tile",[e("v-list-tile-title",[this._v(this._s(this.sideNavTitle))])],1),e("v-divider"),e("b-sidebar-list-group",{attrs:{sideNavData:this.sideNavData}})],1)],1)],1)},[],!1,null,null,null);e.default=v.exports;o()(v,{VDivider:d.a,VList:l.a,VListTile:r.a,VListTileTitle:c.b,VNavigationDrawer:u.a})},"91b4":function(t,e,i){var a=i("654b");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i("499e").default)("6c91440a",a,!0,{sourceMap:!1,shadowMode:!1})},"91c0":function(t,e,i){"use strict";var a=i("91b4");i.n(a).a}}]);