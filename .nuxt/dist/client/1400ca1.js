(window.webpackJsonp=window.webpackJsonp||[]).push([[18,4],{1360:function(t,r,e){"use strict";e.r(r);var n={name:"IBreadcrumb"},c=e(31),component=Object(c.a)(n,(function(){var t=this._self._c;return t("div",{staticClass:"container"},[t("div",{staticClass:"b-wrapper"},[t("a-breadcrumb",{attrs:{separator:">"}},[this._t("default")],2)],1)])}),[],!1,null,null,null);r.default=component.exports},1428:function(t,r,e){"use strict";e.r(r);e(61),e(52),e(41),e(73),e(49),e(74);var n=e(34),c=e(25),o=(e(48),e(32),e(84),e(75)),l=e(1360);function m(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,e)}return r}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(r){Object(n.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}var h={name:"AboutChairman",components:{MainLayout:e(346).a,IBreadcrumb:l.default},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function r(){var e;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=t.store,t.params,r.next=3,e.dispatch("fetchFrdkChairmans");case 3:case"end":return r.stop()}}),r)})))()},computed:d(d({},Object(o.d)(["chairmans","chairman"])),{},{single:function(){return this.chairmans[0]?this.chairmans[0]:{}},others:function(){var t=this;return this.chairmans.filter((function(i){return i.id!==t.single.id}))||[]},itemContent:function(){return this.single.translations&&this.single.translations[this.$i18n.localeProperties.code]||{}}}),methods:{getItem:function(t){return t.translations&&t.translations[this.$i18n.localeProperties.code]||{}}}},v=e(31),component=Object(v.a)(h,(function(){var t=this,r=t._self._c;return r("div",[r("main-layout",[r("i-breadcrumb",[r("a-breadcrumb-item",[r("router-link",{attrs:{to:"/"}},[t._v(" "+t._s(t.$t("main")))])],1),t._v(" "),r("a-breadcrumb-item",[t._v(t._s(t.$t("aboutFond")))]),t._v(" "),r("a-breadcrumb-item",[t._v(t._s(t.$t("chairman")))])],1),t._v(" "),r("img",{staticClass:"page-avatar",attrs:{src:t.single.image}}),t._v(" "),r("div",{staticClass:"page-content min-height",domProps:{innerHTML:t._s(t.itemContent.content)}}),t._v(" "),r("div",[r("h2",{staticClass:"section-title"},[t._v(t._s(t.$t("chairman_zam")))]),t._v(" "),r("div",{staticClass:"chairmans"},t._l(t.others,(function(e){return r("router-link",{key:e.id,attrs:{to:"/about/chairman/".concat(e.id)}},[r("div",{staticClass:"chairman"},[r("img",{staticClass:"chairman__avatar",attrs:{src:e.image,alt:""}}),t._v(" "),r("p",{staticClass:"chairman__name"},[t._v(t._s(t.getItem(e).name))]),t._v(" "),r("div",{staticClass:"chairman__date"},[r("span",[t._v(t._s(e.year_reign))])])])])})),1)])],1)],1)}),[],!1,null,null,null);r.default=component.exports;installComponents(component,{IBreadcrumb:e(1360).default})}}]);