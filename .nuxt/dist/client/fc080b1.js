(window.webpackJsonp=window.webpackJsonp||[]).push([[17,4],{1360:function(t,e,r){"use strict";r.r(e);var n={name:"IBreadcrumb"},c=r(31),component=Object(c.a)(n,(function(){var t=this._self._c;return t("div",{staticClass:"container"},[t("div",{staticClass:"b-wrapper"},[t("a-breadcrumb",{attrs:{separator:">"}},[this._t("default")],2)],1)])}),[],!1,null,null,null);e.default=component.exports},1434:function(t,e,r){"use strict";r.r(e);r(61),r(52),r(41),r(73),r(49),r(74);var n=r(34),c=r(25),o=(r(48),r(32),r(84),r(75)),l=r(1360);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={name:"AboutChairman",components:{MainLayout:r(346).a,IBreadcrumb:l.default},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,n=t.params,e.next=3,r.dispatch("fetchFrdkChairman",n.id);case 3:return e.next=5,r.dispatch("fetchFrdkChairmans");case 5:case"end":return e.stop()}}),e)})))()},computed:d(d({},Object(o.d)(["chairmans","chairman"])),{},{single:function(){return this.chairman},others:function(){var t=this;return this.chairmans.filter((function(i){return i.id!==t.single.id}))||[]},itemContent:function(){return this.single.translations&&this.single.translations[this.$i18n.localeProperties.code]||{}}}),methods:{getItem:function(t){return t.translations&&t.translations[this.$i18n.localeProperties.code]||{}}}},f=r(31),component=Object(f.a)(h,(function(){var t=this,e=t._self._c;return e("div",[e("main-layout",[e("i-breadcrumb",[e("a-breadcrumb-item",[e("router-link",{attrs:{to:"/"}},[t._v(" "+t._s(t.$t("main")))])],1),t._v(" "),e("a-breadcrumb-item",[t._v(t._s(t.$t("aboutFond")))]),t._v(" "),e("a-breadcrumb-item",[t._v(t._s(t.$t("chairman")))])],1),t._v(" "),e("img",{staticClass:"page-avatar",attrs:{src:t.single.image}}),t._v(" "),e("div",{staticClass:"page-content min-height",domProps:{innerHTML:t._s(t.itemContent.content)}}),t._v(" "),e("div",[e("h2",{staticClass:"section-title"},[t._v(t._s(t.$t("chairman_zam")))]),t._v(" "),e("div",{staticClass:"chairmans"},t._l(t.others,(function(r){return e("router-link",{key:r.id,attrs:{to:"/about/chairman/".concat(r.id)}},[e("div",{staticClass:"chairman"},[e("img",{staticClass:"chairman__avatar",attrs:{src:r.image,alt:""}}),t._v(" "),e("p",{staticClass:"chairman__name"},[t._v(t._s(t.getItem(r).name))]),t._v(" "),e("div",{staticClass:"chairman__date"},[e("span",[t._v(t._s(r.year_reign))])])])])})),1)])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IBreadcrumb:r(1360).default})}}]);