(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39c7caae"],{"0066":function(t,e,i){var n=i("ef5b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("499e").default;a("aaff6982",n,!0,{sourceMap:!1,shadowMode:!1})},"0fec":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-custom-carousel"),i("v-container",[i("v-layout",{attrs:{"align-start":"","justify-space-around":"",row:"",wrap:""}},[i("v-flex",{attrs:{xs12:"",md6:""}},[i("div",[i("h1",{staticClass:"display-2 font-weight-bold blue-color"},[t._v("\n            "+t._s(t.homeAboutTitle)+"\n          ")]),i("br"),i("div",{staticClass:"content-p",domProps:{innerHTML:t._s(t.homeAboutHtml)}})])]),i("v-flex",{attrs:{xs12:"",md6:""}},[i("div",[i("v-custom-introduction-card",{attrs:{src:t.customIntroductionCards[0].src,height:t.customIntroductionCards[0].height,title:t.customIntroductionCards[0].title,subtitle:t.customIntroductionCards[0].subtitle,detail:t.customIntroductionCards[0].detail}})],1)]),i("v-flex",{attrs:{xs12:"",md12:""}},[i("br")])],1),i("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return i("v-parallax",{class:"elevation-"+(n?24:2),attrs:{height:"350",src:"https://s2.ax1x.com/2019/04/22/EAKu59.jpg"}},[i("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[i("h1",{staticClass:"display-2 font-weight-bold"},[t._v("Inventing, Optimizing, Sharing")])])],1)}}])}),i("v-custom-timeline"),i("v-custom-item-cards"),i("br"),i("v-layout",{attrs:{"align-start":"","justify-space-around":"",row:"",wrap:""}},[i("v-flex",{attrs:{xs12:"",mb12:""}},[i("div",[i("v-custom-introduction-card",{attrs:{src:t.customIntroductionCards[1].src,height:t.customIntroductionCards[1].height,title:t.customIntroductionCards[1].title,subtitle:t.customIntroductionCards[1].subtitle,detail:t.customIntroductionCards[1].detail}})],1)])],1),i("v-custom-member-comments"),i("br"),i("v-custom-chip")],1)],1)},a=[],o={components:{"v-custom-carousel":function(){return Promise.all([i.e("chunk-c7b6ee90"),i.e("chunk-79fd5e0e"),i.e("chunk-cbdae7cc")]).then(i.bind(null,"5502"))},"v-custom-timeline":function(){return i.e("chunk-2acc42a5").then(i.bind(null,"1728"))},"v-custom-introduction-card":function(){return i.e("chunk-6fe467e2").then(i.bind(null,"2635"))},"v-custom-item-cards":function(){return i.e("chunk-23dd8946").then(i.bind(null,"79bd"))},"v-custom-member-comments":function(){return Promise.all([i.e("chunk-d56a3cc2"),i.e("chunk-93d1ee90")]).then(i.bind(null,"8789"))},"v-custom-chip":function(){return i.e("chunk-28188c94").then(i.bind(null,"6cd2"))}},data:function(){return{homeAboutTitle:"About the openbiox",homeAboutHtml:'<p><a href="https://github.com/openbiox">openbiox</a> is a community-driven global bioinformatics innovation collaboration group. It was founded in March 2019 and consist of undergraduate, master, doctoral, and postdoctoral students from well-known universities and research institutes around the world.</p><p>As of April 2019, openbiox had a total of 69 members, completed the formation of at least 11 project teams, and launched more than 10 bioinformatics innovation practice projects, with project funds exceeding 13,000 yuan and web/computing servers.</p>',customIntroductionCards:[{tag:"GA4GH",src:"https://s2.ax1x.com/2019/04/22/EAuPOO.jpg",title:"We have a responsibility to enable this future for everyone.",subtitle:"Ewan Birney, GA4GH Chair",detail:'Detail from <a href="https://www.ga4gh.org/news/sAhZCeJjS96QHhVPIYwwWA.article">sharing data saves lives\' infographic on the GA4GH website</a>. This shows just a few examples of genomic-medicine programmes that were active in 2017.',height:"350px"},{tag:"GeneTest",src:"https://s2.ax1x.com/2019/04/23/EEhI7q.jpg",title:"GLOBAL GENETIC TESTING MARKET FORECAST 2018-2026.",subtitle:"Genetic Testing Market by Type (Predisposition Testing, Diagnostic Testing, Newborn Screening, Prenatal Testing) by Application (Cancer Genetic, Prenatal Genetic, Pharmacogenomics, Predisposition) & by Geography.",detail:'Detail from <a href="https://www.inkwoodresearch.com/reports/genetic-testing-market/#report-summary">inkwoodresearch</a>.<p>The Global Genetic testing market is anticipated to grow at a CAGR of 13.56% between 2018 and 2026. Genetic testing includes observing the DNA, a chemical databank that transports directives for the body’s utilities. Genetic testing can reveal changes or alterations in the genes that may cause illness or disease. </p>',height:"700px"}]}}},s=o,r=(i("7235"),i("2877")),l=i("6544"),c=i.n(l),u=i("a523"),d=i("0e8f"),h=i("ce87"),p=i("a722"),m=(i("c5f6"),i("fd71"),i("2b0e")),f=m["a"].extend({name:"translatable",props:{height:Number},data:function(){return{elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}},computed:{imgHeight:function(){return this.objHeight()}},beforeDestroy:function(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions:function(){var t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners:function(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight:function(){throw new Error("Not implemented !")},translate:function(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}}),v=i("58df"),g=Object(v["a"])(f).extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String},data:function(){return{isBooted:!1}},computed:{styles:function(){return{display:"block",opacity:this.isBooted?1:0,transform:"translate(-50%, "+this.parallax+"px)"}}},watch:{parallax:function(){this.isBooted=!0}},mounted:function(){this.init()},methods:{init:function(){var t=this,e=this.$refs.img;e&&(e.complete?(this.translate(),this.listeners()):e.addEventListener("load",function(){t.translate(),t.listeners()},!1))},objHeight:function(){return this.$refs.img.naturalHeight}},render:function(t){var e={staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,alt:this.alt},ref:"img"},i=t("div",{staticClass:"v-parallax__image-container"},[t("img",e)]),n=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:this.height+"px"},on:this.$listeners},[i,n])}}),b=Object(r["a"])(s,n,a,!1,null,null,null);e["default"]=b.exports;c()(b,{VContainer:u["a"],VFlex:d["a"],VHover:h["a"],VLayout:p["a"],VParallax:g})},"163b":function(t,e,i){"use strict";i("c5f6");var n=i("2b0e");e["a"]=n["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var i=this;this.clearDelay();var n=parseInt(this[t+"Delay"],10);this[t+"Timeout"]=setTimeout(e||function(){i.isActive={open:!0,close:!1}[t]},n)}}})},7235:function(t,e,i){"use strict";var n=i("0066"),a=i.n(n);a.a},"9e44":function(t,e,i){e=t.exports=i("24fb")(!1),e.push([t.i,".v-parallax{position:relative;overflow:hidden;z-index:0}.v-parallax__image-container{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;contain:strict}.v-parallax__image{position:absolute;bottom:0;left:50%;min-width:100%;min-height:100%;display:none;-webkit-transform:translate(-50%);transform:translate(-50%);will-change:transform;-webkit-transition:opacity .3s cubic-bezier(.25,.8,.5,1);transition:opacity .3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-parallax__content{color:#fff;height:100%;z-index:2;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0 1rem}",""])},ce87:function(t,e,i){"use strict";var n=i("163b"),a=i("98a1"),o=i("58df"),s=i("d9bd");e["a"]=Object(o["a"])(n["a"],a["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){if(!this.$scopedSlots.default&&void 0===this.value)return Object(s["c"])("v-hover is missing a default scopedSlot or bound value",this),null;var t=void 0;return this.$scopedSlots.default?t=this.$scopedSlots.default({hover:this.isActive}):this.$slots.default&&1===this.$slots.default.length&&(t=this.$slots.default[0]),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(s["c"])("v-hover should only contain a single element",this),t)}})},ef5b:function(t,e,i){e=t.exports=i("24fb")(!1),e.push([t.i,".carton-row{min-height:400px}.flag-text{font-size:300px}.chart-flex{min-height:400px;height:100%}.chart-flex-margin{margin-top:70px}",""])},fd71:function(t,e,i){var n=i("9e44");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("499e").default;a("06ea0ac6",n,!0,{sourceMap:!1,shadowMode:!1})}}]);