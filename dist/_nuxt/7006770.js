(window.webpackJsonp=window.webpackJsonp||[]).push([[22,4,5],{1360:function(t,e,r){"use strict";r.r(e);var n={name:"IBreadcrumb"},c=r(31),component=Object(c.a)(n,(function(){var t=this._self._c;return t("div",{staticClass:"container"},[t("div",{staticClass:"b-wrapper"},[t("a-breadcrumb",{attrs:{separator:">"}},[this._t("default")],2)],1)])}),[],!1,null,null,null);e.default=component.exports},1361:function(t,e,r){"use strict";r.r(e);r(701);var n=r(3),c=r.n(n),o={name:"ICard",props:{item:{type:Object,default:function(){return{}}},link:{type:String,default:""}},computed:{itemContent:function(){return this.item.translations&&this.item.translations[this.$i18n.localeProperties.code]||{}},getLink:function(){return this.link?this.link:"/news/".concat(this.item.id)}},methods:{format:function(t){return c()(t).format("DD/MM/YYYY")}}},l=r(31),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("nuxt-link",{attrs:{to:t.localePath("".concat(t.getLink))}},[e("div",{staticClass:"i-card"},[e("div",{staticClass:"i-card__img-wrapper"},[e("img",{staticClass:"i-card__img",attrs:{src:t.item.image,alt:""}})]),t._v(" "),e("div",{staticClass:"i-card__content"},[e("router-link",{attrs:{to:t.localePath("".concat(t.getLink))}},[e("h3",{staticClass:"i-card__title"},[t._v("\n            "+t._s(t.itemContent.title)+"\n          ")])]),t._v(" "),e("p",{staticClass:"i-card__text",domProps:{innerHTML:t._s(t.itemContent.content)}}),t._v(" "),e("span",{staticClass:"i-card__date"},[t._v(t._s(t.format(t.item.updated_at)))])],1)])])}),[],!1,null,null,null);e.default=component.exports},1431:function(t,e,r){"use strict";r.r(e);r(52),r(41),r(48),r(32),r(73),r(49),r(74);var n=r(34),c=r(25),o=(r(84),r(75)),l=r(1360),d=r(1361),f=r(702);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={name:"ActivityEvent",components:{IHeader:r(703).default,IBreadcrumb:l.default,IFooter:f.default,ICard:d.default},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,e.next=3,r.dispatch("fetchActivityEvents");case 3:case"end":return e.stop()}}),e)})))()},computed:v(v({},Object(o.d)(["events"])),{},{single:function(){return this.events[0]||{}},itemContent:function(){return this.single.translations&&this.single.translations[this.$i18n.localeProperties.code]||{}}})},h=r(31),component=Object(h.a)(_,(function(){var t=this,e=t._self._c;return e("div",[e("i-header"),t._v(" "),e("i-breadcrumb",[e("a-breadcrumb-item",[t._v(t._s(t.$t("activity")))]),t._v(" "),e("a-breadcrumb-item",[t._v(t._s(t.$t("event")))])],1),t._v(" "),e("div",{staticClass:"grid container"},t._l(t.events,(function(t){return e("i-card",{key:t.id,attrs:{link:"/activity/event/",item:t}})})),1),t._v(" "),e("i-footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IHeader:r(703).default,IBreadcrumb:r(1360).default,ICard:r(1361).default,IFooter:r(702).default})}}]);