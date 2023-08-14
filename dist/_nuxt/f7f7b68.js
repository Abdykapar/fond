(window.webpackJsonp=window.webpackJsonp||[]).push([[29,3,5,6,8,9,11,12,15],{1361:function(t,e,n){"use strict";n.r(e);n(701);var r=n(3),l=n.n(r),o={name:"ICard",props:{item:{type:Object,default:function(){return{}}},link:{type:String,default:""}},computed:{itemContent:function(){return this.item.translations&&this.item.translations[this.$i18n.localeProperties.code]||{}},getLink:function(){return this.link?this.link:"/news/".concat(this.item.id)}},methods:{format:function(t){return l()(t).format("DD/MM/YYYY")}}},c=n(31),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("nuxt-link",{attrs:{to:t.localePath("".concat(t.getLink))}},[e("div",{staticClass:"i-card"},[e("div",{staticClass:"i-card__img-wrapper"},[e("img",{staticClass:"i-card__img",attrs:{src:t.item.image,alt:""}})]),t._v(" "),e("div",{staticClass:"i-card__content"},[e("router-link",{attrs:{to:t.localePath("".concat(t.getLink))}},[e("h3",{staticClass:"i-card__title"},[t._v("\n            "+t._s(t.itemContent.title)+"\n          ")])]),t._v(" "),e("p",{staticClass:"i-card__text",domProps:{innerHTML:t._s(t.itemContent.content)}}),t._v(" "),e("span",{staticClass:"i-card__date"},[t._v(t._s(t.format(t.item.updated_at)))])],1)])])}),[],!1,null,null,null);e.default=component.exports},1362:function(t,e,n){"use strict";n.r(e);n(701),n(58);var r={name:"NewsList",components:{ICard:n(1361).default},props:{title:{type:String,default:"news"},allBtnData:{type:Object,default:function(){return{title:"allNews",link:"/news"}}},showAll:{type:Boolean,default:!1},news:{type:Array,default:function(){return[]}}},computed:{filteredNews:function(){return this.showAll?this.news:this.news.slice(0,3)}}},l=n(31),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("client-only",[e("h2",{staticClass:"section-title"},[t._v(t._s(t.$t(t.title)))]),t._v(" "),e("div",{staticClass:"news-list"},t._l(t.filteredNews,(function(t){return e("i-card",{key:t.id,attrs:{item:t}})})),1),t._v(" "),e("div",{staticClass:"section__show-all"},[e("router-link",{staticClass:"section__show-all__btn",attrs:{to:t.allBtnData.link}},[t._v(t._s(t.$t(t.allBtnData.title)))])],1)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ICard:n(1361).default})},1363:function(t,e,n){var content=n(1370);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("20ba7c24",content,!0,{sourceMap:!1})},1364:function(t,e,n){var content=n(1372);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("6aaae338",content,!0,{sourceMap:!1})},1365:function(t,e,n){"use strict";n.r(e);var r={name:"ImageCard",props:{item:{type:Object,default:function(){return{}}},withContent:{type:Boolean,default:!0},withoutLink:{type:Boolean,default:!1}},computed:{itemContent:function(){return this.item.translations&&this.item.translations[this.$i18n.localeProperties.code]||{}}}},l=(n(1369),n(31)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",[t.withoutLink?e("div",{staticClass:"image-card",style:"background-image: url('".concat(t.item.image,"')")},[t.withContent?e("div",{staticClass:"image-card__content"},[e("p",{staticClass:"image-card__text"},[t._v("\n          "+t._s(t.itemContent.title)+"\n        ")])]):t._e()]):e("router-link",{attrs:{to:"/gallery/".concat(t.item.id)}},[e("div",{staticClass:"image-card",style:"background-image: url('".concat(t.item.image,"')")},[t.withContent?e("div",{staticClass:"image-card__content"},[e("p",{staticClass:"image-card__text"},[t._v("\n            "+t._s(t.itemContent.title)+"\n          ")])]):t._e()])])],1)}),[],!1,null,null,null);e.default=component.exports},1369:function(t,e,n){"use strict";n(1363)},1370:function(t,e,n){var r=n(65)(!1);r.push([t.i,".image-card{max-width:346px;height:418px;background-repeat:no-repeat;background-size:cover;display:flex;flex-direction:column;justify-content:flex-end;transition:all 300ms ease-in-out}@media(max-width: 840px){.image-card{width:175px;height:211px}}.image-card:hover{transform:scale(1.025)}.image-card__content{height:257px;background:linear-gradient(180deg, rgba(0, 100, 176, 0) 0%, #0064b0 100%);padding:25px 20px;display:grid;align-items:flex-end}@media(max-width: 840px){.image-card__content{padding:11px 10px;height:129px}}.image-card__text{font-weight:700;font-size:18.1607px;line-height:23px;text-align:center;color:#fff}@media(max-width: 840px){.image-card__text{font-size:14px;line-height:18px}}",""]),t.exports=r},1371:function(t,e,n){"use strict";n(1364)},1372:function(t,e,n){var r=n(65)(!1);r.push([t.i,".i-card2{display:grid;row-gap:10px}.link{word-break:break-all}",""]),t.exports=r},1375:function(t,e,n){var content=n(1390);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("56610d52",content,!0,{sourceMap:!1})},1376:function(t,e,n){var content=n(1392);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("45b2748e",content,!0,{sourceMap:!1})},1377:function(t,e,n){var content=n(1394);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("558b9b9f",content,!0,{sourceMap:!1})},1379:function(t,e,n){"use strict";n.r(e);n(701);var r={name:"ICard2",props:{item:{type:Object,default:function(){return{}}}},computed:{itemContent:function(){return this.item.translations&&this.item.translations[this.$i18n.localeProperties.code]||{}}}},l=(n(1371),n(31)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"i-card2"},[e("a",{staticClass:"link size-2 primary-color",attrs:{href:t.item.link,target:"_blank"}},[t._v("\n      "+t._s(t.item.link)+"\n    ")]),t._v(" "),e("p",{staticClass:"size-3 gray-color"},[t._v("\n      "+t._s(t.itemContent.content)+"\n    ")])])}),[],!1,null,null,null);e.default=component.exports},1384:function(t,e,n){"use strict";n.r(e);n(701),n(41),n(76),n(52),n(48),n(73),n(49),n(74);var r=n(34),l=(n(58),n(32),n(59),n(60),n(1399),n(347),n(77),n(75)),o=n(31);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"MediaList",components:{PlayBtn:Object(o.a)({},(function(){var t=this,e=t._self._c;return e("svg",t._g({attrs:{width:"40",height:"39",viewBox:"0 0 40 39",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},t.$listeners),[e("path",{attrs:{d:"M20 38.25C9.414 38.25.833 29.856.833 19.5S9.414.75 20 .75c10.586 0 19.167 8.394 19.167 18.75S30.586 38.25 20 38.25zm-2.641-25.472a.78.78 0 00-1.083.238.737.737 0 00-.11.385v12.198c0 .136.039.27.11.385a.76.76 0 00.296.276.781.781 0 00.787-.038l9.351-6.098a.737.737 0 000-1.249l-9.353-6.097h.002z",fill:"#fff","fill-opacity":".6"}})])}),[],!1,null,null,null).exports},props:{showAll:{type:Boolean,default:!1}},computed:{filteredMedia:function(){return this.showAll?this.$store.state.media:this.$store.state.media.slice(0,3)}},methods:d(d({},Object(l.c)(["SET_MEDIA"])),{},{getThumbnail:function(link){var t=this.getCode(link);return"http://img.youtube.com/vi/".concat(t,"/0.jpg")},getCode:function(link){return new URL(link).searchParams.get("v")},itemContent:function(t){return t.translations&&this.$i18n.localeProperties.code&&t.translations[this.$i18n.localeProperties.code]||{}},onClickVideo:function(t){var e=this,n=this.filteredMedia.map((function(i,n){return n===t?d(d({},e.filteredMedia[t]),{},{clicked:!0}):i}));this.SET_MEDIA(n)}})},m=(n(1393),Object(o.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("h2",{staticClass:"section-title"},[t._v(t._s(t.$t("media")))]),t._v(" "),e("div",{staticClass:"media-list"},t._l(t.filteredMedia,(function(n,i){return e("div",{key:n.id,staticClass:"media-card"},[n.clicked?e("iframe",{attrs:{id:"player",type:"text/html",width:"347",height:"266",allow:"autoplay",src:"http://www.youtube.com/embed/".concat(t.getCode(n.link),"?autoplay=1&enable_js=1"),frameborder:"0"}}):e("div",{staticClass:"media-img-wrapper"},[e("div",{staticClass:"media-play",on:{click:function(e){return t.onClickVideo(i)}}},[e("PlayBtn")],1),t._v(" "),e("img",{staticClass:"media-img",attrs:{src:t.getThumbnail(n.link)}})]),t._v(" "),e("p",{staticClass:"media-text"},[t._v(t._s(t.itemContent(n).description))])])})),0),t._v(" "),t.showAll?t._e():e("div",{staticClass:"section__show-all"},[e("router-link",{staticClass:"section__show-all__btn",attrs:{to:"/media"}},[t._v(t._s(t.$t("allMedia")))])],1)])}),[],!1,null,null,null));e.default=m.exports},1385:function(t,e,n){"use strict";n.r(e);n(52),n(41),n(48),n(32),n(73),n(49),n(74);var r=n(34),l=(n(58),n(75));function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"HomeSlider",computed:c(c({},Object(l.d)(["news"])),{},{sliderNews:function(){return this.news.slice(0,3)}}),methods:{onChange:function(){console.log("change")},getContent:function(t){return t.translations&&this.$i18n.localeProperties.code&&t.translations[this.$i18n.localeProperties.code]?t.translations[this.$i18n.localeProperties.code].title:""}}},f=(n(1389),n(31)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container container--big"},[e("client-only",[e("a-carousel",{attrs:{"after-change":t.onChange}},t._l(t.sliderNews,(function(n){return e("div",{key:n.id,staticClass:"slide"},[e("img",{staticClass:"slide__img",attrs:{src:n.slider,title:""}}),t._v(" "),e("div",{staticClass:"slide__content"},[e("p",{staticClass:"slide__text"},[t._v("\n              "+t._s(t.getContent(n))+"\n            ")])])])})),0)],1)],1)}),[],!1,null,"5ffe3287",null);e.default=component.exports},1386:function(t,e,n){"use strict";n.r(e);n(58);var r={name:"LinksList",components:{ICard2:n(1379).default},props:{data:{type:Array,default:null}},computed:{links:function(){return this.data?this.data:this.$store.state.links},filteredLinks:function(){return this.links.slice(0,3)}}},l=(n(1391),n(31)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("h2",{staticClass:"section-title"},[t._v(t._s(t.$t("links")))]),t._v(" "),e("div",{staticClass:"links-list"},t._l(t.filteredLinks,(function(t){return e("i-card-2",{key:t.id,attrs:{item:t}})})),1),t._v(" "),e("div",{staticClass:"section__show-all"},[e("router-link",{staticClass:"section__show-all__btn",attrs:{to:"/links"}},[t._v(t._s(t.$t("allLinks")))])],1)])}),[],!1,null,null,null);e.default=component.exports},1388:function(t,e,n){var content=n(1398);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("ee36c406",content,!0,{sourceMap:!1})},1389:function(t,e,n){"use strict";n(1375)},1390:function(t,e,n){var r=n(65)(!1);r.push([t.i,".ant-carousel[data-v-5ffe3287] .slick-slide{text-align:center;overflow:hidden}.ant-carousel[data-v-5ffe3287] .slick-slide h3{color:#fff}.ant-carousel[data-v-5ffe3287] .slick-dots-bottom{bottom:35px}.ant-carousel[data-v-5ffe3287] .slick-dots li button{width:13px;height:13px;border-radius:50%;background:rgba(255,255,255,.4);margin:0 7px}.ant-carousel[data-v-5ffe3287] .slick-dots li.slick-active button{background:#fff}",""]),t.exports=r},1391:function(t,e,n){"use strict";n(1376)},1392:function(t,e,n){var r=n(65)(!1);r.push([t.i,".links-list{display:grid;row-gap:35px}@media(max-width: 840px){.links-list{row-gap:15px}}",""]),t.exports=r},1393:function(t,e,n){"use strict";n(1377)},1394:function(t,e,n){var r=n(65)(!1);r.push([t.i,'.media-list{display:grid;row-gap:35px;column-gap:28px;grid-template-columns:repeat(3, 1fr)}@media(max-width: 840px){.media-list{row-gap:15px}}.media-card{width:347px;cursor:pointer}.media-play{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.2)}.media-img-wrapper{position:relative}.media-img{width:100%;height:266px}.media-text{font-family:"Cera Pro";font-style:normal;font-weight:700;font-size:18.1607px;line-height:23px;text-align:center;color:#000;margin-top:20px}',""]),t.exports=r},1397:function(t,e,n){"use strict";n(1388)},1398:function(t,e,n){var r=n(65)(!1);r.push([t.i,".image-list{display:grid;grid-template-columns:repeat(3, 1fr);column-gap:27px;row-gap:18px}@media(max-width: 840px){.image-list{column-gap:8px;overflow-y:hidden;overflow-x:auto}}",""]),t.exports=r},1400:function(t,e,n){"use strict";n.r(e);n(52),n(41),n(48),n(32),n(73),n(49),n(74);var r=n(34),l=(n(58),n(75));function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"ImageList",components:{ImageCard:n(1365).default},computed:c(c({},Object(l.d)(["gallery"])),{},{filteredGallery:function(){return this.gallery.slice(0,3)}})},f=(n(1397),n(31)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("h2",{staticClass:"section-title"},[t._v(t._s(t.$t("gallery")))]),t._v(" "),e("div",{staticClass:"image-list"},t._l(t.filteredGallery,(function(t){return e("image-card",{key:t.id,attrs:{item:t}})})),1),t._v(" "),e("div",{staticClass:"section__show-all"},[e("router-link",{staticClass:"section__show-all__btn",attrs:{to:"/gallery"}},[t._v(t._s(t.$t("allPhotos")))])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ImageCard:n(1365).default})},1421:function(t,e,n){"use strict";n.r(e);n(52),n(41),n(48),n(32),n(73),n(49),n(74);var r=n(34),l=n(25),o=(n(84),n(75)),c=n(1400),d=n(1362),f=n(703),m=n(1385),h=n(1386),_=n(702),v=n(1384);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var y={name:"IndexPage",components:{Header:f.default,HomeSlider:m.default,NewsList:d.default,LinksList:h.default,ImageList:c.default,IFooter:_.default,MediaList:v.default},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,e.next=3,n.dispatch("fetchGallery");case 3:return e.next=5,n.dispatch("fetchLinks");case 5:return e.next=7,n.dispatch("fetchNews");case 7:return e.next=9,n.dispatch("fetchMedia");case 9:case"end":return e.stop()}}),e)})))()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.d)(["news"]))},x=y,O=n(31),component=Object(O.a)(x,(function(){var t=this,e=t._self._c;return e("div",[e("Header"),t._v(" "),e("HomeSlider"),t._v(" "),e("NewsList",{attrs:{news:t.news}}),t._v(" "),e("LinksList"),t._v(" "),e("ImageList"),t._v(" "),e("MediaList"),t._v(" "),e("IFooter")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HomeSlider:n(1385).default,NewsList:n(1362).default,LinksList:n(1386).default,ImageList:n(1400).default,MediaList:n(1384).default,IFooter:n(702).default})}}]);