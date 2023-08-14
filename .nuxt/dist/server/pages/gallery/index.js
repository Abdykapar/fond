exports.ids = [26,2,5,6];
exports.modules = {

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(114);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("f90cc3b0", content, true, context)
};

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCard_vue_vue_type_style_index_0_id_5b082c48_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCard_vue_vue_type_style_index_0_id_5b082c48_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCard_vue_vue_type_style_index_0_id_5b082c48_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCard_vue_vue_type_style_index_0_id_5b082c48_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCard_vue_vue_type_style_index_0_id_5b082c48_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".image-card{max-width:346px;height:418px;background-repeat:no-repeat;background-size:cover;display:flex;flex-direction:column;justify-content:flex-end;transition:all 300ms ease-in-out}@media(max-width: 840px){.image-card{width:175px;height:211px}}.image-card:hover{transform:scale(1.025)}.image-card__content{height:257px;background:linear-gradient(180deg, rgba(0, 100, 176, 0) 0%, #0064b0 100%);padding:25px 20px;display:grid;align-items:flex-end}@media(max-width: 840px){.image-card__content{padding:11px 10px;height:129px}}.image-card__text{font-weight:700;font-size:18.1607px;line-height:23px;text-align:center;color:#fff}@media(max-width: 840px){.image-card__text{font-size:14px;line-height:18px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/IPagination.vue?vue&type=template&id=366b903c&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "pagination"
  }, [_vm.totalCount > _vm.PER_PAGE ? _c('a-pagination', {
    attrs: {
      "page-size": _vm.PER_PAGE,
      "total": _vm.totalCount,
      "show-less-items": ""
    },
    on: {
      "change": _vm.onChange
    },
    model: {
      value: _vm.current,
      callback: function ($$v) {
        _vm.current = $$v;
      },
      expression: "current"
    }
  }) : _vm._e()], 1);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/IPagination.vue?vue&type=template&id=366b903c&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/IPagination.vue?vue&type=script&lang=js&
var IPaginationvue_type_script_lang_js_ = __webpack_require__(93);

// CONCATENATED MODULE: ./components/IPagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_IPaginationvue_type_script_lang_js_ = (IPaginationvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/IPagination.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(113)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_IPaginationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4177950d"
  
)

/* harmony default export */ var IPagination = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IPagination_vue_vue_type_style_index_0_id_366b903c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(100);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IPagination_vue_vue_type_style_index_0_id_366b903c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IPagination_vue_vue_type_style_index_0_id_366b903c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IPagination_vue_vue_type_style_index_0_id_366b903c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IPagination_vue_vue_type_style_index_0_id_366b903c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".pagination{display:flex;justify-content:flex-end;margin:20px 0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(140);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("6049467a", content, true, context)
};

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7f32aa9a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(134);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7f32aa9a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7f32aa9a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7f32aa9a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7f32aa9a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".gallery-grid{display:grid;column-gap:27px;row-gap:18px;grid-template-columns:repeat(3, 347px)}@media(max-width: 840px){.gallery-grid{grid-template-columns:repeat(2, 175px);column-gap:8px;justify-content:center;row-gap:20px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/gallery/index.vue?vue&type=template&id=7f32aa9a&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_c('i-header'), _vm._ssrNode(" "), _c('i-breadcrumb', [_c('a-breadcrumb-item', [_c('router-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v(" " + _vm._s(_vm.$t('main')) + " ")])], 1), _vm._v(" "), _c('a-breadcrumb-item', [_vm._v(_vm._s(_vm.$t('gallery')))])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"gallery-grid container\">", "</div>", _vm._l(_vm.gallery, function (item) {
    return _c('image-card', {
      key: item.id,
      attrs: {
        "item": item
      }
    });
  }), 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"container\">", "</div>", [_c('i-pagination', {
    attrs: {
      "item-type": "gallery"
    }
  })], 1), _vm._ssrNode(" "), _c('i-footer')], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/gallery/index.vue?vue&type=template&id=7f32aa9a&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(8);

// EXTERNAL MODULE: ./components/IPagination.vue + 3 modules
var IPagination = __webpack_require__(107);

// EXTERNAL MODULE: ./components/IBreadcrumb.vue + 4 modules
var IBreadcrumb = __webpack_require__(91);

// EXTERNAL MODULE: ./components/IFooter.vue + 16 modules
var IFooter = __webpack_require__(34);

// EXTERNAL MODULE: ./components/IHeader.vue + 5 modules
var IHeader = __webpack_require__(35);

// EXTERNAL MODULE: ./components/ImageCard.vue + 4 modules
var ImageCard = __webpack_require__(97);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/gallery/index.vue?vue&type=script&lang=js&






/* harmony default export */ var galleryvue_type_script_lang_js_ = ({
  name: 'IGallery',
  components: {
    IHeader: IHeader["default"],
    IBreadcrumb: IBreadcrumb["default"],
    IFooter: IFooter["default"],
    ImageCard: ImageCard["default"],
    IPagination: IPagination["default"]
  },

  async asyncData({
    store,
    route
  }) {
    await store.dispatch('fetchGallery', route.query.page);
  },

  computed: { ...Object(external_vuex_["mapState"])(['gallery'])
  }
});
// CONCATENATED MODULE: ./pages/gallery/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_galleryvue_type_script_lang_js_ = (galleryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/gallery/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(139)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_galleryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3dc43617"
  
)

/* harmony default export */ var gallery = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IHeader: __webpack_require__(35).default,IBreadcrumb: __webpack_require__(91).default,ImageCard: __webpack_require__(97).default,IPagination: __webpack_require__(107).default,IFooter: __webpack_require__(34).default})


/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/IBreadcrumb.vue?vue&type=template&id=58337a7c&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "container"
  }, [_vm._ssrNode("<div class=\"b-wrapper\">", "</div>", [_c('a-breadcrumb', {
    attrs: {
      "separator": ">"
    }
  }, [_vm._t("default")], 2)], 1)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/IBreadcrumb.vue?vue&type=template&id=58337a7c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/IBreadcrumb.vue?vue&type=script&lang=js&
/* harmony default export */ var IBreadcrumbvue_type_script_lang_js_ = ({
  name: 'IBreadcrumb'
});
// CONCATENATED MODULE: ./components/IBreadcrumb.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_IBreadcrumbvue_type_script_lang_js_ = (IBreadcrumbvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/IBreadcrumb.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_IBreadcrumbvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4c2130f6"
  
)

/* harmony default export */ var IBreadcrumb = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URLSearchParams) {/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_0__);

const PER_PAGE_NEWS = 6;
const PER_PAGE_LINKS = 8;
const PER_PAGE_GALLERY = 12;
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'IPagination',
  props: {
    itemType: {
      type: String,
      default: 'news'
    }
  },

  data() {
    return {
      current: 1
    };
  },

  computed: { ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['totalCount']),

    PER_PAGE() {
      return this.itemType === 'news' ? PER_PAGE_NEWS : this.itemType === 'links' ? PER_PAGE_LINKS : PER_PAGE_GALLERY;
    }

  },

  created() {
    this.current = +this.$route.query.page || 1;
  },

  methods: {
    onChange(data) {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set('page', data);
      window.location.search = searchParams.toString();
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(19)["URLSearchParams"]))

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(103);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("20ba7c24", content, true, context)
};

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ImageCard.vue?vue&type=template&id=5b082c48&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_vm.withoutLink ? _vm._ssrNode("<div class=\"image-card\"" + _vm._ssrStyle(null, `background-image: url('${_vm.item.image}')`, null) + ">", "</div>", [_vm._ssrNode(_vm.withContent ? "<div class=\"image-card__content\"><p class=\"image-card__text\">" + _vm._ssrEscape("\n          " + _vm._s(_vm.itemContent.title) + "\n        ") + "</p></div>" : "<!---->")], 2) : _c('router-link', {
    attrs: {
      "to": `/gallery/${_vm.item.id}`
    }
  }, [_c('div', {
    staticClass: "image-card",
    style: `background-image: url('${_vm.item.image}')`
  }, [_vm.withContent ? _c('div', {
    staticClass: "image-card__content"
  }, [_c('p', {
    staticClass: "image-card__text"
  }, [_vm._v("\n            " + _vm._s(_vm.itemContent.title) + "\n          ")])]) : _vm._e()])])], 1);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ImageCard.vue?vue&type=template&id=5b082c48&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ImageCard.vue?vue&type=script&lang=js&
/* harmony default export */ var ImageCardvue_type_script_lang_js_ = ({
  name: 'ImageCard',
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    withContent: {
      type: Boolean,
      default: true
    },
    withoutLink: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    itemContent() {
      if (!this.item.translations) return {};
      return this.item.translations[this.$i18n.localeProperties.code] || {};
    }

  }
});
// CONCATENATED MODULE: ./components/ImageCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ImageCardvue_type_script_lang_js_ = (ImageCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/ImageCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(102)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ImageCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "011eebb5"
  
)

/* harmony default export */ var ImageCard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map