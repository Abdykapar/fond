exports.ids = [31,2,3,5];
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

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/news/index.vue?vue&type=template&id=71c2bc08&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_c('i-header'), _vm._ssrNode(" "), _c('i-breadcrumb', [_c('a-breadcrumb-item', [_c('router-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v(" " + _vm._s(_vm.$t('main')) + " ")])], 1), _vm._v(" "), _c('a-breadcrumb-item', [_vm._v(_vm._s(_vm.$t('news')))])], 1), _vm._ssrNode(" "), _c('client-only', [_c('div', {
    staticClass: "grid container"
  }, [_vm._l(_vm.news, function (item) {
    return _c('i-card', {
      key: item.id,
      attrs: {
        "item": item
      }
    });
  }), _vm._v(" "), _c('i-pagination')], 2)]), _vm._ssrNode(" "), _c('i-footer')], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/news/index.vue?vue&type=template&id=71c2bc08&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(8);

// EXTERNAL MODULE: ./components/IBreadcrumb.vue + 4 modules
var IBreadcrumb = __webpack_require__(91);

// EXTERNAL MODULE: ./components/ICard.vue + 4 modules
var ICard = __webpack_require__(92);

// EXTERNAL MODULE: ./components/IFooter.vue + 16 modules
var IFooter = __webpack_require__(34);

// EXTERNAL MODULE: ./components/IHeader.vue + 5 modules
var IHeader = __webpack_require__(35);

// EXTERNAL MODULE: ./components/IPagination.vue + 3 modules
var IPagination = __webpack_require__(107);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/news/index.vue?vue&type=script&lang=js&






/* harmony default export */ var newsvue_type_script_lang_js_ = ({
  name: 'INews',
  components: {
    IHeader: IHeader["default"],
    IBreadcrumb: IBreadcrumb["default"],
    IFooter: IFooter["default"],
    ICard: ICard["default"],
    IPagination: IPagination["default"]
  },

  async asyncData({
    store,
    route
  }) {
    await store.dispatch('fetchNews', route.query.page || 1);
  },

  computed: { ...Object(external_vuex_["mapState"])(['news', 'totalCount'])
  }
});
// CONCATENATED MODULE: ./pages/news/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_newsvue_type_script_lang_js_ = (newsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/news/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_newsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "95ca9f78"
  
)

/* harmony default export */ var news = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IHeader: __webpack_require__(35).default,IBreadcrumb: __webpack_require__(91).default,ICard: __webpack_require__(92).default,IPagination: __webpack_require__(107).default,IFooter: __webpack_require__(34).default})


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

/***/ })

};;
//# sourceMappingURL=index.js.map