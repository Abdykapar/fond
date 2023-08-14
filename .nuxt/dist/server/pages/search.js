exports.ids = [32,1,3,4,9,13];
exports.modules = {

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ICard2_vue_vue_type_style_index_0_id_24de7a16_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ICard2_vue_vue_type_style_index_0_id_24de7a16_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ICard2_vue_vue_type_style_index_0_id_24de7a16_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ICard2_vue_vue_type_style_index_0_id_24de7a16_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ICard2_vue_vue_type_style_index_0_id_24de7a16_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".i-card2{display:grid;row-gap:10px}.link{word-break:break-all}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(123);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("56610d52", content, true, context)
};

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(125);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("45b2748e", content, true, context)
};

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ICard2.vue?vue&type=template&id=24de7a16&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "i-card2"
  }, [_vm._ssrNode("<a" + _vm._ssrAttr("href", _vm.item.link) + " target=\"_blank\" class=\"link size-2 primary-color\">" + _vm._ssrEscape("\n      " + _vm._s(_vm.item.link) + "\n    ") + "</a> <p class=\"size-3 gray-color\">" + _vm._ssrEscape("\n      " + _vm._s(_vm.itemContent.content) + "\n    ") + "</p>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ICard2.vue?vue&type=template&id=24de7a16&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ICard2.vue?vue&type=script&lang=js&
/* harmony default export */ var ICard2vue_type_script_lang_js_ = ({
  name: 'ICard2',
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    itemContent() {
      if (!this.item.translations) return {};
      return this.item.translations[this.$i18n.localeProperties.code] || {};
    }

  }
});
// CONCATENATED MODULE: ./components/ICard2.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ICard2vue_type_script_lang_js_ = (ICard2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/ICard2.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(104)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ICard2vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5bb573ff"
  
)

/* harmony default export */ var ICard2 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/HomeSlider.vue?vue&type=template&id=5ffe3287&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "container container--big"
  }, [_c('client-only', [_c('a-carousel', {
    attrs: {
      "after-change": _vm.onChange
    }
  }, _vm._l(_vm.sliderNews, function (item) {
    return _c('div', {
      key: item.id,
      staticClass: "slide"
    }, [_c('img', {
      staticClass: "slide__img",
      attrs: {
        "src": item.slider,
        "title": ""
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "slide__content"
    }, [_c('p', {
      staticClass: "slide__text"
    }, [_vm._v("\n              " + _vm._s(_vm.getContent(item)) + "\n            ")])])]);
  }), 0)], 1)], 1);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/home/HomeSlider.vue?vue&type=template&id=5ffe3287&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/HomeSlider.vue?vue&type=script&lang=js&

/* harmony default export */ var HomeSlidervue_type_script_lang_js_ = ({
  name: 'HomeSlider',
  computed: { ...Object(external_vuex_["mapState"])(['news']),

    sliderNews() {
      return this.news.slice(0, 3);
    }

  },
  methods: {
    onChange() {
      console.log('change');
    },

    getContent(item) {
      if (!item.translations || !this.$i18n.localeProperties.code) return '';
      return item.translations[this.$i18n.localeProperties.code] ? item.translations[this.$i18n.localeProperties.code].title : '';
    }

  }
});
// CONCATENATED MODULE: ./components/home/HomeSlider.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_HomeSlidervue_type_script_lang_js_ = (HomeSlidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/home/HomeSlider.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(122)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_HomeSlidervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5ffe3287",
  "79397eba"
  
)

/* harmony default export */ var HomeSlider = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LinksList.vue?vue&type=template&id=4f31f471&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "container"
  }, [_vm._ssrNode("<h2 class=\"section-title\">" + _vm._ssrEscape(_vm._s(_vm.$t('links'))) + "</h2> "), _vm._ssrNode("<div class=\"links-list\">", "</div>", _vm._l(_vm.filteredLinks, function (item) {
    return _c('i-card-2', {
      key: item.id,
      attrs: {
        "item": item
      }
    });
  }), 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"section__show-all\">", "</div>", [_c('router-link', {
    staticClass: "section__show-all__btn",
    attrs: {
      "to": "/links"
    }
  }, [_vm._v(_vm._s(_vm.$t('allLinks')))])], 1)], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LinksList.vue?vue&type=template&id=4f31f471&

// EXTERNAL MODULE: ./components/ICard2.vue + 4 modules
var ICard2 = __webpack_require__(112);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LinksList.vue?vue&type=script&lang=js&

/* harmony default export */ var LinksListvue_type_script_lang_js_ = ({
  name: 'LinksList',
  components: {
    ICard2: ICard2["default"]
  },
  props: {
    data: {
      type: Array,
      default: null
    }
  },
  computed: {
    links() {
      return this.data ? this.data : this.$store.state.links;
    },

    filteredLinks() {
      return this.links.slice(0, 3);
    }

  }
});
// CONCATENATED MODULE: ./components/LinksList.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LinksListvue_type_script_lang_js_ = (LinksListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/LinksList.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(124)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LinksListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7b1512a1"
  
)

/* harmony default export */ var LinksList = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeSlider_vue_vue_type_style_index_0_id_5ffe3287_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(108);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeSlider_vue_vue_type_style_index_0_id_5ffe3287_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeSlider_vue_vue_type_style_index_0_id_5ffe3287_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeSlider_vue_vue_type_style_index_0_id_5ffe3287_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeSlider_vue_vue_type_style_index_0_id_5ffe3287_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".ant-carousel[data-v-5ffe3287] .slick-slide{text-align:center;overflow:hidden}.ant-carousel[data-v-5ffe3287] .slick-slide h3{color:#fff}.ant-carousel[data-v-5ffe3287] .slick-dots-bottom{bottom:35px}.ant-carousel[data-v-5ffe3287] .slick-dots li button{width:13px;height:13px;border-radius:50%;background:rgba(255,255,255,.4);margin:0 7px}.ant-carousel[data-v-5ffe3287] .slick-dots li.slick-active button{background:#fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LinksList_vue_vue_type_style_index_0_id_4f31f471_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(109);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LinksList_vue_vue_type_style_index_0_id_4f31f471_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LinksList_vue_vue_type_style_index_0_id_4f31f471_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LinksList_vue_vue_type_style_index_0_id_4f31f471_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LinksList_vue_vue_type_style_index_0_id_4f31f471_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".links-list{display:grid;row-gap:35px}@media(max-width: 840px){.links-list{row-gap:15px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(144);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("15cadcd1", content, true, context)
};

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_id_7a150d6a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(136);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_id_7a150d6a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_id_7a150d6a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_id_7a150d6a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_id_7a150d6a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".search__label{font-weight:400;font-size:16px;line-height:20px;color:#0064b0;margin:20px 0 10px}.search__text{font-weight:500;font-size:36px;line-height:45px;color:#000;position:relative;padding-left:15px}.search__text::before{content:\"-\";position:absolute;left:0;top:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/search.vue?vue&type=template&id=7a150d6a&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_c('i-header'), _vm._ssrNode(" "), _c('HomeSlider'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<p class=\"search__label\">" + _vm._ssrEscape(_vm._s(_vm.$t('searchResult'))) + "</p> <p class=\"search__text\">" + _vm._ssrEscape(_vm._s(_vm.$route.query.query)) + "</p> "), _vm.searchResult.news && _vm.searchResult.news.length ? [_c('NewsList', {
    attrs: {
      "news": _vm.searchResult.news
    }
  })] : _vm._e(), _vm._ssrNode(" "), _vm.searchResult.links && _vm.searchResult.links.length ? [_c('LinksList', {
    attrs: {
      "data": _vm.searchResult.links
    }
  })] : _vm._e(), _vm._ssrNode(" "), _vm.searchResult.history_of_creation && _vm.searchResult.history_of_creation.length ? [_vm._ssrNode("<h2 class=\"section-title\">" + _vm._ssrEscape(_vm._s(_vm.$t('historyCreation'))) + "</h2> "), _vm._ssrNode("<div class=\"news-list\">", "</div>", [_c('i-card', {
    attrs: {
      "item": _vm.searchResult.history_of_creation[0],
      "link": "/about/history"
    }
  })], 1)] : _vm._e(), _vm._ssrNode(" "), _vm.searchResult.about_us && _vm.searchResult.about_us.length ? [_vm._ssrNode("<h2 class=\"section-title\">" + _vm._ssrEscape(_vm._s(_vm.$t('aboutFond'))) + "</h2> "), _vm._ssrNode("<div class=\"news-list\">", "</div>", [_c('i-card', {
    attrs: {
      "item": _vm.searchResult.about_us[0],
      "link": "/about/about-us"
    }
  })], 1)] : _vm._e(), _vm._ssrNode(" "), _vm.searchResult.organizational_structure && _vm.searchResult.organizational_structure.length ? [_vm._ssrNode("<h2 class=\"section-title\">" + _vm._ssrEscape(_vm._s(_vm.$t('orgStructure'))) + "</h2> "), _vm._ssrNode("<div class=\"news-list\">", "</div>", [_c('i-card', {
    attrs: {
      "item": _vm.searchResult.organizational_structure[0],
      "link": "/about/organization"
    }
  })], 1)] : _vm._e()], 2), _vm._ssrNode(" "), _c('i-footer')], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/search.vue?vue&type=template&id=7a150d6a&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(8);

// EXTERNAL MODULE: ./components/NewsList.vue + 4 modules
var NewsList = __webpack_require__(94);

// EXTERNAL MODULE: ./components/IHeader.vue + 5 modules
var IHeader = __webpack_require__(35);

// EXTERNAL MODULE: ./components/home/HomeSlider.vue + 4 modules
var HomeSlider = __webpack_require__(117);

// EXTERNAL MODULE: ./components/IFooter.vue + 16 modules
var IFooter = __webpack_require__(34);

// EXTERNAL MODULE: ./components/LinksList.vue + 4 modules
var LinksList = __webpack_require__(118);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/search.vue?vue&type=script&lang=js&






/* harmony default export */ var searchvue_type_script_lang_js_ = ({
  name: 'ISearch',
  components: {
    IHeader: IHeader["default"],
    HomeSlider: HomeSlider["default"],
    IFooter: IFooter["default"],
    NewsList: NewsList["default"],
    LinksList: LinksList["default"]
  },

  async asyncData({
    store,
    route
  }) {
    await store.dispatch('fetchNews');
    await store.dispatch('fetchSearch', route.query.query);
  },

  computed: { ...Object(external_vuex_["mapState"])(['searchResult'])
  }
});
// CONCATENATED MODULE: ./pages/search.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_searchvue_type_script_lang_js_ = (searchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/search.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(143)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_searchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "39442d54"
  
)

/* harmony default export */ var search = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IHeader: __webpack_require__(35).default,HomeSlider: __webpack_require__(117).default,NewsList: __webpack_require__(94).default,LinksList: __webpack_require__(118).default,ICard: __webpack_require__(92).default,IFooter: __webpack_require__(34).default})


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ICard.vue?vue&type=template&id=0439d170&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('nuxt-link', {
    attrs: {
      "to": _vm.localePath(`${_vm.getLink}`)
    }
  }, [_c('div', {
    staticClass: "i-card"
  }, [_c('div', {
    staticClass: "i-card__img-wrapper"
  }, [_c('img', {
    staticClass: "i-card__img",
    attrs: {
      "src": _vm.item.image,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "i-card__content"
  }, [_c('router-link', {
    attrs: {
      "to": _vm.localePath(`${_vm.getLink}`)
    }
  }, [_c('h3', {
    staticClass: "i-card__title"
  }, [_vm._v("\n            " + _vm._s(_vm.itemContent.title) + "\n          ")])]), _vm._v(" "), _c('p', {
    staticClass: "i-card__text",
    domProps: {
      "innerHTML": _vm._s(_vm.itemContent.content)
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "i-card__date"
  }, [_vm._v(_vm._s(_vm.format(_vm.item.updated_at)))])], 1)])]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ICard.vue?vue&type=template&id=0439d170&

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(89);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ICard.vue?vue&type=script&lang=js&

/* harmony default export */ var ICardvue_type_script_lang_js_ = ({
  name: 'ICard',
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    link: {
      type: String,
      default: ''
    }
  },
  computed: {
    itemContent() {
      if (!this.item.translations) return {};
      return this.item.translations[this.$i18n.localeProperties.code] || {};
    },

    getLink() {
      return this.link ? this.link : `/news/${this.item.id}`;
    }

  },
  methods: {
    format(date) {
      return external_moment_default()(date).format('DD/MM/YYYY');
    }

  }
});
// CONCATENATED MODULE: ./components/ICard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ICardvue_type_script_lang_js_ = (ICardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/ICard.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ICardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "9f40247a"
  
)

/* harmony default export */ var ICard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NewsList.vue?vue&type=template&id=45a3be30&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "container"
  }, [_c('client-only', [_c('h2', {
    staticClass: "section-title"
  }, [_vm._v(_vm._s(_vm.$t(_vm.title)))]), _vm._v(" "), _c('div', {
    staticClass: "news-list"
  }, _vm._l(_vm.filteredNews, function (item) {
    return _c('i-card', {
      key: item.id,
      attrs: {
        "item": item
      }
    });
  }), 1), _vm._v(" "), _c('div', {
    staticClass: "section__show-all"
  }, [_c('router-link', {
    staticClass: "section__show-all__btn",
    attrs: {
      "to": _vm.allBtnData.link
    }
  }, [_vm._v(_vm._s(_vm.$t(_vm.allBtnData.title)))])], 1)])], 1);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/NewsList.vue?vue&type=template&id=45a3be30&

// EXTERNAL MODULE: ./components/ICard.vue + 4 modules
var ICard = __webpack_require__(92);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NewsList.vue?vue&type=script&lang=js&

/* harmony default export */ var NewsListvue_type_script_lang_js_ = ({
  name: 'NewsList',
  components: {
    ICard: ICard["default"]
  },
  props: {
    title: {
      type: String,
      default: 'news'
    },
    allBtnData: {
      type: Object,
      default: () => ({
        title: 'allNews',
        link: '/news'
      })
    },
    showAll: {
      type: Boolean,
      default: false
    },
    news: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    filteredNews() {
      return this.showAll ? this.news : this.news.slice(0, 3);
    }

  }
});
// CONCATENATED MODULE: ./components/NewsList.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_NewsListvue_type_script_lang_js_ = (NewsListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/NewsList.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_NewsListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4d1d5b52"
  
)

/* harmony default export */ var NewsList = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ICard: __webpack_require__(92).default})


/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(105);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("6aaae338", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=search.js.map