(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44c50dab","chunk-39c7caae"],{"0066":function(e,t,i){var r=i("ef5b");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var l=i("499e").default;l("aaff6982",r,!0,{sourceMap:!1,shadowMode:!1})},"0e8f":function(e,t,i){"use strict";i("db6d");var r=i("e8f2");t["a"]=Object(r["a"])("flex")},"0fec":function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("v-custom-carousel"),i("v-container",[i("v-layout",{attrs:{"align-start":"","justify-space-around":"",row:"",wrap:""}},[i("v-flex",{attrs:{xs12:"",md6:""}},[i("div",[i("h1",{staticClass:"display-2 font-weight-bold blue-color"},[e._v("\n            "+e._s(e.homeAboutTitle)+"\n          ")]),i("br"),i("div",{staticClass:"content-p",domProps:{innerHTML:e._s(e.homeAboutHtml)}})])]),i("v-flex",{attrs:{xs12:"",md6:""}},[i("div",[i("v-custom-introduction-card",{attrs:{src:e.customIntroductionCards[0].src,height:e.customIntroductionCards[0].height,title:e.customIntroductionCards[0].title,subtitle:e.customIntroductionCards[0].subtitle,detail:e.customIntroductionCards[0].detail}})],1)]),i("v-flex",{attrs:{xs12:"",md12:""}},[i("br")])],1),i("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var r=t.hover;return i("v-parallax",{class:"elevation-"+(r?24:2),attrs:{height:"350",src:"https://s2.ax1x.com/2019/04/22/EAKu59.jpg"}},[i("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[i("h1",{staticClass:"display-2 font-weight-bold"},[e._v("Inventing, Optimizing, Sharing")])])],1)}}])}),i("v-custom-timeline"),i("v-custom-item-cards"),i("br"),i("v-layout",{attrs:{"align-start":"","justify-space-around":"",row:"",wrap:""}},[i("v-flex",{attrs:{xs12:"",mb12:""}},[i("div",[i("v-custom-introduction-card",{attrs:{src:e.customIntroductionCards[1].src,height:e.customIntroductionCards[1].height,title:e.customIntroductionCards[1].title,subtitle:e.customIntroductionCards[1].subtitle,detail:e.customIntroductionCards[1].detail}})],1)])],1),i("v-custom-member-comments"),i("br"),i("v-custom-chip")],1)],1)},l=[],o={components:{"v-custom-carousel":function(){return Promise.all([i.e("chunk-c7b6ee90"),i.e("chunk-79fd5e0e"),i.e("chunk-cbdae7cc")]).then(i.bind(null,"5502"))},"v-custom-timeline":function(){return i.e("chunk-2acc42a5").then(i.bind(null,"1728"))},"v-custom-introduction-card":function(){return i.e("chunk-6fe467e2").then(i.bind(null,"2635"))},"v-custom-item-cards":function(){return i.e("chunk-23dd8946").then(i.bind(null,"79bd"))},"v-custom-member-comments":function(){return Promise.all([i.e("chunk-d56a3cc2"),i.e("chunk-93d1ee90")]).then(i.bind(null,"8789"))},"v-custom-chip":function(){return i.e("chunk-28188c94").then(i.bind(null,"6cd2"))}},data:function(){return{homeAboutTitle:"About the openbiox",homeAboutHtml:'<p><a href="https://github.com/openbiox">openbiox</a> is a community-driven global bioinformatics innovation collaboration group. It was founded in March 2019 and consist of undergraduate, master, doctoral, and postdoctoral students from well-known universities and research institutes around the world.</p><p>As of April 2019, openbiox had a total of 69 members, completed the formation of at least 11 project teams, and launched more than 10 bioinformatics innovation practice projects, with project funds exceeding 13,000 yuan and web/computing servers.</p>',customIntroductionCards:[{tag:"GA4GH",src:"https://s2.ax1x.com/2019/04/22/EAuPOO.jpg",title:"We have a responsibility to enable this future for everyone.",subtitle:"Ewan Birney, GA4GH Chair",detail:'Detail from <a href="https://www.ga4gh.org/news/sAhZCeJjS96QHhVPIYwwWA.article">sharing data saves lives\' infographic on the GA4GH website</a>. This shows just a few examples of genomic-medicine programmes that were active in 2017.',height:"350px"},{tag:"GeneTest",src:"https://s2.ax1x.com/2019/04/23/EEhI7q.jpg",title:"GLOBAL GENETIC TESTING MARKET FORECAST 2018-2026.",subtitle:"Genetic Testing Market by Type (Predisposition Testing, Diagnostic Testing, Newborn Screening, Prenatal Testing) by Application (Cancer Genetic, Prenatal Genetic, Pharmacogenomics, Predisposition) & by Geography.",detail:'Detail from <a href="https://www.inkwoodresearch.com/reports/genetic-testing-market/#report-summary">inkwoodresearch</a>.<p>The Global Genetic testing market is anticipated to grow at a CAGR of 13.56% between 2018 and 2026. Genetic testing includes observing the DNA, a chemical databank that transports directives for the body’s utilities. Genetic testing can reveal changes or alterations in the genes that may cause illness or disease. </p>',height:"700px"}]}}},s=o,f=(i("7235"),i("2877")),x=i("6544"),a=i.n(x),n=i("a523"),d=i("0e8f"),m=i("ce87"),b=i("a722"),p=(i("c5f6"),i("fd71"),i("2b0e")),c=p["a"].extend({name:"translatable",props:{height:Number},data:function(){return{elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}},computed:{imgHeight:function(){return this.objHeight()}},beforeDestroy:function(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions:function(){var e=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=e.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners:function(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight:function(){throw new Error("Not implemented !")},translate:function(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}}),g=i("58df"),u=Object(g["a"])(c).extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String},data:function(){return{isBooted:!1}},computed:{styles:function(){return{display:"block",opacity:this.isBooted?1:0,transform:"translate(-50%, "+this.parallax+"px)"}}},watch:{parallax:function(){this.isBooted=!0}},mounted:function(){this.init()},methods:{init:function(){var e=this,t=this.$refs.img;t&&(t.complete?(this.translate(),this.listeners()):t.addEventListener("load",function(){e.translate(),e.listeners()},!1))},objHeight:function(){return this.$refs.img.naturalHeight}},render:function(e){var t={staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,alt:this.alt},ref:"img"},i=e("div",{staticClass:"v-parallax__image-container"},[e("img",t)]),r=e("div",{staticClass:"v-parallax__content"},this.$slots.default);return e("div",{staticClass:"v-parallax",style:{height:this.height+"px"},on:this.$listeners},[i,r])}}),w=Object(f["a"])(s,r,l,!1,null,null,null);t["default"]=w.exports;a()(w,{VContainer:n["a"],VFlex:d["a"],VHover:m["a"],VLayout:b["a"],VParallax:u})},"163b":function(e,t,i){"use strict";i("c5f6");var r=i("2b0e");t["a"]=r["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(e,t){var i=this;this.clearDelay();var r=parseInt(this[e+"Delay"],10);this[e+"Timeout"]=setTimeout(t||function(){i.isActive={open:!0,close:!1}[e]},r)}}})},"58df":function(e,t,i){"use strict";i.d(t,"a",function(){return l});var r=i("2b0e");function l(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return r["a"].extend({mixins:t})}},7235:function(e,t,i){"use strict";var r=i("0066"),l=i.n(r);l.a},9589:function(e,t,i){t=e.exports=i("24fb")(!1),t.push([e.i,".container{-webkit-box-flex:1;-ms-flex:1 1 100%;flex:1 1 100%;margin:auto;padding:24px;width:100%}@media only screen and (min-width:960px){.container{max-width:900px}}@media only screen and (min-width:1264px){.container{max-width:1185px}}@media only screen and (min-width:1904px){.container{max-width:1785px}}@media only screen and (max-width:959px){.container{padding:16px}}.container.fluid{max-width:100%}.container.fill-height{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex}.container.fill-height>.layout{height:100%;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}.container.grid-list-xs .layout .flex{padding:1px}.container.grid-list-xs .layout:only-child{margin:-1px}.container.grid-list-xs .layout:not(:only-child){margin:auto -1px}.container.grid-list-xs :not(:only-child) .layout:first-child{margin-top:-1px}.container.grid-list-xs :not(:only-child) .layout:last-child{margin-bottom:-1px}.container.grid-list-sm .layout .flex{padding:2px}.container.grid-list-sm .layout:only-child{margin:-2px}.container.grid-list-sm .layout:not(:only-child){margin:auto -2px}.container.grid-list-sm :not(:only-child) .layout:first-child{margin-top:-2px}.container.grid-list-sm :not(:only-child) .layout:last-child{margin-bottom:-2px}.container.grid-list-md .layout .flex{padding:4px}.container.grid-list-md .layout:only-child{margin:-4px}.container.grid-list-md .layout:not(:only-child){margin:auto -4px}.container.grid-list-md :not(:only-child) .layout:first-child{margin-top:-4px}.container.grid-list-md :not(:only-child) .layout:last-child{margin-bottom:-4px}.container.grid-list-lg .layout .flex{padding:8px}.container.grid-list-lg .layout:only-child{margin:-8px}.container.grid-list-lg .layout:not(:only-child){margin:auto -8px}.container.grid-list-lg :not(:only-child) .layout:first-child{margin-top:-8px}.container.grid-list-lg :not(:only-child) .layout:last-child{margin-bottom:-8px}.container.grid-list-xl .layout .flex{padding:12px}.container.grid-list-xl .layout:only-child{margin:-12px}.container.grid-list-xl .layout:not(:only-child){margin:auto -12px}.container.grid-list-xl :not(:only-child) .layout:first-child{margin-top:-12px}.container.grid-list-xl :not(:only-child) .layout:last-child{margin-bottom:-12px}.layout{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-wrap:nowrap;flex-wrap:nowrap;min-width:0}.layout.row{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.layout.row.reverse{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.layout.column{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.layout.column.reverse{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.layout.column>.flex{max-width:100%}.layout.wrap{-ms-flex-wrap:wrap;flex-wrap:wrap}@media (min-width:0){.flex.xs1{-ms-flex-preferred-size:8.333333333333332%;flex-basis:8.333333333333332%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:8.333333333333332%}.flex.order-xs1{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.flex.xs2{-ms-flex-preferred-size:16.666666666666664%;flex-basis:16.666666666666664%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:16.666666666666664%}.flex.order-xs2{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.flex.xs3{-ms-flex-preferred-size:25%;flex-basis:25%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:25%}.flex.order-xs3{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.flex.xs4{-ms-flex-preferred-size:33.33333333333333%;flex-basis:33.33333333333333%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:33.33333333333333%}.flex.order-xs4{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.flex.xs5{-ms-flex-preferred-size:41.66666666666667%;flex-basis:41.66666666666667%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:41.66666666666667%}.flex.order-xs5{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.flex.xs6{-ms-flex-preferred-size:50%;flex-basis:50%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:50%}.flex.order-xs6{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}.flex.xs7{-ms-flex-preferred-size:58.333333333333336%;flex-basis:58.333333333333336%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:58.333333333333336%}.flex.order-xs7{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}.flex.xs8{-ms-flex-preferred-size:66.66666666666666%;flex-basis:66.66666666666666%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:66.66666666666666%}.flex.order-xs8{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}.flex.xs9{-ms-flex-preferred-size:75%;flex-basis:75%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:75%}.flex.order-xs9{-webkit-box-ordinal-group:10;-ms-flex-order:9;order:9}.flex.xs10{-ms-flex-preferred-size:83.33333333333334%;flex-basis:83.33333333333334%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:83.33333333333334%}.flex.order-xs10{-webkit-box-ordinal-group:11;-ms-flex-order:10;order:10}.flex.xs11{-ms-flex-preferred-size:91.66666666666666%;flex-basis:91.66666666666666%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:91.66666666666666%}.flex.order-xs11{-webkit-box-ordinal-group:12;-ms-flex-order:11;order:11}.flex.xs12{-ms-flex-preferred-size:100%;flex-basis:100%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:100%}.flex.order-xs12{-webkit-box-ordinal-group:13;-ms-flex-order:12;order:12}.flex.offset-xs0{margin-left:0}.flex.offset-xs1{margin-left:8.333333333333332%}.flex.offset-xs2{margin-left:16.666666666666664%}.flex.offset-xs3{margin-left:25%}.flex.offset-xs4{margin-left:33.33333333333333%}.flex.offset-xs5{margin-left:41.66666666666667%}.flex.offset-xs6{margin-left:50%}.flex.offset-xs7{margin-left:58.333333333333336%}.flex.offset-xs8{margin-left:66.66666666666666%}.flex.offset-xs9{margin-left:75%}.flex.offset-xs10{margin-left:83.33333333333334%}.flex.offset-xs11{margin-left:91.66666666666666%}.flex.offset-xs12{margin-left:100%}}@media (min-width:600px){.flex.sm1{-ms-flex-preferred-size:8.333333333333332%;flex-basis:8.333333333333332%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:8.333333333333332%}.flex.order-sm1{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.flex.sm2{-ms-flex-preferred-size:16.666666666666664%;flex-basis:16.666666666666664%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:16.666666666666664%}.flex.order-sm2{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.flex.sm3{-ms-flex-preferred-size:25%;flex-basis:25%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:25%}.flex.order-sm3{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.flex.sm4{-ms-flex-preferred-size:33.33333333333333%;flex-basis:33.33333333333333%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:33.33333333333333%}.flex.order-sm4{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.flex.sm5{-ms-flex-preferred-size:41.66666666666667%;flex-basis:41.66666666666667%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:41.66666666666667%}.flex.order-sm5{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.flex.sm6{-ms-flex-preferred-size:50%;flex-basis:50%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:50%}.flex.order-sm6{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}.flex.sm7{-ms-flex-preferred-size:58.333333333333336%;flex-basis:58.333333333333336%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:58.333333333333336%}.flex.order-sm7{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}.flex.sm8{-ms-flex-preferred-size:66.66666666666666%;flex-basis:66.66666666666666%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:66.66666666666666%}.flex.order-sm8{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}.flex.sm9{-ms-flex-preferred-size:75%;flex-basis:75%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:75%}.flex.order-sm9{-webkit-box-ordinal-group:10;-ms-flex-order:9;order:9}.flex.sm10{-ms-flex-preferred-size:83.33333333333334%;flex-basis:83.33333333333334%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:83.33333333333334%}.flex.order-sm10{-webkit-box-ordinal-group:11;-ms-flex-order:10;order:10}.flex.sm11{-ms-flex-preferred-size:91.66666666666666%;flex-basis:91.66666666666666%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:91.66666666666666%}.flex.order-sm11{-webkit-box-ordinal-group:12;-ms-flex-order:11;order:11}.flex.sm12{-ms-flex-preferred-size:100%;flex-basis:100%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:100%}.flex.order-sm12{-webkit-box-ordinal-group:13;-ms-flex-order:12;order:12}.flex.offset-sm0{margin-left:0}.flex.offset-sm1{margin-left:8.333333333333332%}.flex.offset-sm2{margin-left:16.666666666666664%}.flex.offset-sm3{margin-left:25%}.flex.offset-sm4{margin-left:33.33333333333333%}.flex.offset-sm5{margin-left:41.66666666666667%}.flex.offset-sm6{margin-left:50%}.flex.offset-sm7{margin-left:58.333333333333336%}.flex.offset-sm8{margin-left:66.66666666666666%}.flex.offset-sm9{margin-left:75%}.flex.offset-sm10{margin-left:83.33333333333334%}.flex.offset-sm11{margin-left:91.66666666666666%}.flex.offset-sm12{margin-left:100%}}@media (min-width:960px){.flex.md1{-ms-flex-preferred-size:8.333333333333332%;flex-basis:8.333333333333332%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:8.333333333333332%}.flex.order-md1{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.flex.md2{-ms-flex-preferred-size:16.666666666666664%;flex-basis:16.666666666666664%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:16.666666666666664%}.flex.order-md2{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.flex.md3{-ms-flex-preferred-size:25%;flex-basis:25%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:25%}.flex.order-md3{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.flex.md4{-ms-flex-preferred-size:33.33333333333333%;flex-basis:33.33333333333333%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:33.33333333333333%}.flex.order-md4{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.flex.md5{-ms-flex-preferred-size:41.66666666666667%;flex-basis:41.66666666666667%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:41.66666666666667%}.flex.order-md5{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.flex.md6{-ms-flex-preferred-size:50%;flex-basis:50%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:50%}.flex.order-md6{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}.flex.md7{-ms-flex-preferred-size:58.333333333333336%;flex-basis:58.333333333333336%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:58.333333333333336%}.flex.order-md7{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}.flex.md8{-ms-flex-preferred-size:66.66666666666666%;flex-basis:66.66666666666666%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:66.66666666666666%}.flex.order-md8{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}.flex.md9{-ms-flex-preferred-size:75%;flex-basis:75%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:75%}.flex.order-md9{-webkit-box-ordinal-group:10;-ms-flex-order:9;order:9}.flex.md10{-ms-flex-preferred-size:83.33333333333334%;flex-basis:83.33333333333334%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:83.33333333333334%}.flex.order-md10{-webkit-box-ordinal-group:11;-ms-flex-order:10;order:10}.flex.md11{-ms-flex-preferred-size:91.66666666666666%;flex-basis:91.66666666666666%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:91.66666666666666%}.flex.order-md11{-webkit-box-ordinal-group:12;-ms-flex-order:11;order:11}.flex.md12{-ms-flex-preferred-size:100%;flex-basis:100%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:100%}.flex.order-md12{-webkit-box-ordinal-group:13;-ms-flex-order:12;order:12}.flex.offset-md0{margin-left:0}.flex.offset-md1{margin-left:8.333333333333332%}.flex.offset-md2{margin-left:16.666666666666664%}.flex.offset-md3{margin-left:25%}.flex.offset-md4{margin-left:33.33333333333333%}.flex.offset-md5{margin-left:41.66666666666667%}.flex.offset-md6{margin-left:50%}.flex.offset-md7{margin-left:58.333333333333336%}.flex.offset-md8{margin-left:66.66666666666666%}.flex.offset-md9{margin-left:75%}.flex.offset-md10{margin-left:83.33333333333334%}.flex.offset-md11{margin-left:91.66666666666666%}.flex.offset-md12{margin-left:100%}}@media (min-width:1264px){.flex.lg1{-ms-flex-preferred-size:8.333333333333332%;flex-basis:8.333333333333332%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:8.333333333333332%}.flex.order-lg1{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.flex.lg2{-ms-flex-preferred-size:16.666666666666664%;flex-basis:16.666666666666664%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:16.666666666666664%}.flex.order-lg2{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.flex.lg3{-ms-flex-preferred-size:25%;flex-basis:25%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:25%}.flex.order-lg3{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.flex.lg4{-ms-flex-preferred-size:33.33333333333333%;flex-basis:33.33333333333333%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:33.33333333333333%}.flex.order-lg4{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.flex.lg5{-ms-flex-preferred-size:41.66666666666667%;flex-basis:41.66666666666667%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:41.66666666666667%}.flex.order-lg5{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.flex.lg6{-ms-flex-preferred-size:50%;flex-basis:50%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:50%}.flex.order-lg6{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}.flex.lg7{-ms-flex-preferred-size:58.333333333333336%;flex-basis:58.333333333333336%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:58.333333333333336%}.flex.order-lg7{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}.flex.lg8{-ms-flex-preferred-size:66.66666666666666%;flex-basis:66.66666666666666%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:66.66666666666666%}.flex.order-lg8{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}.flex.lg9{-ms-flex-preferred-size:75%;flex-basis:75%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:75%}.flex.order-lg9{-webkit-box-ordinal-group:10;-ms-flex-order:9;order:9}.flex.lg10{-ms-flex-preferred-size:83.33333333333334%;flex-basis:83.33333333333334%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:83.33333333333334%}.flex.order-lg10{-webkit-box-ordinal-group:11;-ms-flex-order:10;order:10}.flex.lg11{-ms-flex-preferred-size:91.66666666666666%;flex-basis:91.66666666666666%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:91.66666666666666%}.flex.order-lg11{-webkit-box-ordinal-group:12;-ms-flex-order:11;order:11}.flex.lg12{-ms-flex-preferred-size:100%;flex-basis:100%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:100%}.flex.order-lg12{-webkit-box-ordinal-group:13;-ms-flex-order:12;order:12}.flex.offset-lg0{margin-left:0}.flex.offset-lg1{margin-left:8.333333333333332%}.flex.offset-lg2{margin-left:16.666666666666664%}.flex.offset-lg3{margin-left:25%}.flex.offset-lg4{margin-left:33.33333333333333%}.flex.offset-lg5{margin-left:41.66666666666667%}.flex.offset-lg6{margin-left:50%}.flex.offset-lg7{margin-left:58.333333333333336%}.flex.offset-lg8{margin-left:66.66666666666666%}.flex.offset-lg9{margin-left:75%}.flex.offset-lg10{margin-left:83.33333333333334%}.flex.offset-lg11{margin-left:91.66666666666666%}.flex.offset-lg12{margin-left:100%}}@media (min-width:1904px){.flex.xl1{-ms-flex-preferred-size:8.333333333333332%;flex-basis:8.333333333333332%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:8.333333333333332%}.flex.order-xl1{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.flex.xl2{-ms-flex-preferred-size:16.666666666666664%;flex-basis:16.666666666666664%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:16.666666666666664%}.flex.order-xl2{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.flex.xl3{-ms-flex-preferred-size:25%;flex-basis:25%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:25%}.flex.order-xl3{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.flex.xl4{-ms-flex-preferred-size:33.33333333333333%;flex-basis:33.33333333333333%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:33.33333333333333%}.flex.order-xl4{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.flex.xl5{-ms-flex-preferred-size:41.66666666666667%;flex-basis:41.66666666666667%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:41.66666666666667%}.flex.order-xl5{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.flex.xl6{-ms-flex-preferred-size:50%;flex-basis:50%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:50%}.flex.order-xl6{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}.flex.xl7{-ms-flex-preferred-size:58.333333333333336%;flex-basis:58.333333333333336%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:58.333333333333336%}.flex.order-xl7{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}.flex.xl8{-ms-flex-preferred-size:66.66666666666666%;flex-basis:66.66666666666666%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:66.66666666666666%}.flex.order-xl8{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}.flex.xl9{-ms-flex-preferred-size:75%;flex-basis:75%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:75%}.flex.order-xl9{-webkit-box-ordinal-group:10;-ms-flex-order:9;order:9}.flex.xl10{-ms-flex-preferred-size:83.33333333333334%;flex-basis:83.33333333333334%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:83.33333333333334%}.flex.order-xl10{-webkit-box-ordinal-group:11;-ms-flex-order:10;order:10}.flex.xl11{-ms-flex-preferred-size:91.66666666666666%;flex-basis:91.66666666666666%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:91.66666666666666%}.flex.order-xl11{-webkit-box-ordinal-group:12;-ms-flex-order:11;order:11}.flex.xl12{-ms-flex-preferred-size:100%;flex-basis:100%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:100%}.flex.order-xl12{-webkit-box-ordinal-group:13;-ms-flex-order:12;order:12}.flex.offset-xl0{margin-left:0}.flex.offset-xl1{margin-left:8.333333333333332%}.flex.offset-xl2{margin-left:16.666666666666664%}.flex.offset-xl3{margin-left:25%}.flex.offset-xl4{margin-left:33.33333333333333%}.flex.offset-xl5{margin-left:41.66666666666667%}.flex.offset-xl6{margin-left:50%}.flex.offset-xl7{margin-left:58.333333333333336%}.flex.offset-xl8{margin-left:66.66666666666666%}.flex.offset-xl9{margin-left:75%}.flex.offset-xl10{margin-left:83.33333333333334%}.flex.offset-xl11{margin-left:91.66666666666666%}.flex.offset-xl12{margin-left:100%}}.child-flex>*,.flex{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;max-width:100%}.align-start{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.align-end{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.align-center{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.align-baseline{-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline}.align-self-start{-ms-flex-item-align:start;align-self:flex-start}.align-self-end{-ms-flex-item-align:end;align-self:flex-end}.align-self-center{-ms-flex-item-align:center;align-self:center}.align-self-baseline{-ms-flex-item-align:baseline;align-self:baseline}.align-content-start{-ms-flex-line-pack:start;align-content:flex-start}.align-content-end{-ms-flex-line-pack:end;align-content:flex-end}.align-content-center{-ms-flex-line-pack:center;align-content:center}.align-content-space-between{-ms-flex-line-pack:justify;align-content:space-between}.align-content-space-around{-ms-flex-line-pack:distribute;align-content:space-around}.justify-start{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.justify-end{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.justify-center{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.justify-space-around{-ms-flex-pack:distribute;justify-content:space-around}.justify-space-between{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.justify-self-start{justify-self:flex-start}.justify-self-end{justify-self:flex-end}.justify-self-center{justify-self:center}.justify-self-baseline{justify-self:baseline}.grow,.spacer{-webkit-box-flex:1!important;-ms-flex-positive:1!important;flex-grow:1!important}.grow{-ms-flex-negative:0!important;flex-shrink:0!important}.shrink{-webkit-box-flex:0!important;-ms-flex-positive:0!important;flex-grow:0!important;-ms-flex-negative:1!important;flex-shrink:1!important}.scroll-y{overflow-y:auto}.fill-height{height:100%}.hide-overflow{overflow:hidden!important}.show-overflow{overflow:visible!important}.ellipsis,.no-wrap{white-space:nowrap}.ellipsis{overflow:hidden;text-overflow:ellipsis}.d-flex{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}.d-inline-flex{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}.d-flex>*,.d-inline-flex>*{-webkit-box-flex:1!important;-ms-flex:1 1 auto!important;flex:1 1 auto!important}.d-block{display:block!important}.d-inline-block{display:inline-block!important}.d-inline{display:inline!important}.d-none{display:none!important}",""])},"98a1":function(e,t,i){"use strict";i.d(t,"b",function(){return o});var r=i("2b0e");function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"input";return r["a"].extend({name:"toggleable",model:{prop:t,event:i},props:l({},t,{required:!1}),data:function(){return{isActive:!!this[t]}},watch:(e={},l(e,t,function(e){this.isActive=!!e}),l(e,"isActive",function(e){!!e!==this[t]&&this.$emit(i,e)}),e)})}var s=o();t["a"]=s},"9e44":function(e,t,i){t=e.exports=i("24fb")(!1),t.push([e.i,".v-parallax{position:relative;overflow:hidden;z-index:0}.v-parallax__image-container{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;contain:strict}.v-parallax__image{position:absolute;bottom:0;left:50%;min-width:100%;min-height:100%;display:none;-webkit-transform:translate(-50%);transform:translate(-50%);will-change:transform;-webkit-transition:opacity .3s cubic-bezier(.25,.8,.5,1);transition:opacity .3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-parallax__content{color:#fff;height:100%;z-index:2;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0 1rem}",""])},a523:function(e,t,i){"use strict";i("db6d");var r=i("e8f2");t["a"]=Object(r["a"])("container")},a722:function(e,t,i){"use strict";i("db6d");var r=i("e8f2");t["a"]=Object(r["a"])("layout")},ce87:function(e,t,i){"use strict";var r=i("163b"),l=i("98a1"),o=i("58df"),s=i("d9bd");t["a"]=Object(o["a"])(r["a"],l["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){if(!this.$scopedSlots.default&&void 0===this.value)return Object(s["c"])("v-hover is missing a default scopedSlot or bound value",this),null;var e=void 0;return this.$scopedSlots.default?e=this.$scopedSlots.default({hover:this.isActive}):this.$slots.default&&1===this.$slots.default.length&&(e=this.$slots.default[0]),Array.isArray(e)&&1===e.length&&(e=e[0]),e&&!Array.isArray(e)&&e.tag?(this.disabled||(e.data=e.data||{},this._g(e.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),e):(Object(s["c"])("v-hover should only contain a single element",this),e)}})},db6d:function(e,t,i){var r=i("9589");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var l=i("499e").default;l("db6151b0",r,!0,{sourceMap:!1,shadowMode:!1})},e8f2:function(e,t,i){"use strict";i.d(t,"a",function(){return r});i("f559"),i("ac6a"),i("456d");function r(e){return{name:"v-"+e,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,i){var r=i.props,l=i.data,o=i.children;l.staticClass=(e+" "+(l.staticClass||"")).trim();var s=l.attrs;if(s){l.attrs={};var f=Object.keys(s).filter(function(e){if("slot"===e)return!1;var t=s[e];return e.startsWith("data-")?(l.attrs[e]=t,!1):t||"string"===typeof t});f.length&&(l.staticClass+=" "+f.join(" "))}return r.id&&(l.domProps=l.domProps||{},l.domProps.id=r.id),t(r.tag,l,o)}}}},ef5b:function(e,t,i){t=e.exports=i("24fb")(!1),t.push([e.i,".carton-row{min-height:400px}.flag-text{font-size:300px}.chart-flex{min-height:400px;height:100%}.chart-flex-margin{margin-top:70px}",""])},fd71:function(e,t,i){var r=i("9e44");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var l=i("499e").default;l("06ea0ac6",r,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=chunk-44c50dab.5f460502.js.map