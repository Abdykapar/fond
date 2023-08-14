exports.ids = [22,2];
exports.modules = {

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(146);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("0a81e637", content, true, context)
};

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4073c40a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(137);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4073c40a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4073c40a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4073c40a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4073c40a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".org__content{text-align:center}.logos{display:grid;grid-template-columns:repeat(4, 1fr);row-gap:30px}@media(max-width: 840px){.logos{grid-template-columns:repeat(2, 1fr);row-gap:16px;column-gap:18px}}.logo__img{width:186px;height:186px;border-radius:50%;object-fit:cover}@media(max-width: 840px){.logo__img{width:164px;height:164px}}.logo__title{font-weight:500;font-size:20px;line-height:155.7%;color:#000;margin-top:26px}@media(max-width: 840px){.logo__title{font-size:14px;line-height:155.7%;margin-top:10px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/organizations/index.vue?vue&type=template&id=4073c40a&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_c('main-layout', [_c('i-breadcrumb', [_c('a-breadcrumb-item', [_vm._v(_vm._s(_vm.$t('activity')))]), _vm._v(" "), _c('a-breadcrumb-item', [_vm._v(_vm._s(_vm.$t('internationalCoop')))])], 1), _vm._v(" "), _c('div', {
    staticClass: "org__content container"
  }, [_c('h2', {
    staticClass: "section-title"
  }, [_vm._v(_vm._s(_vm.$t('orgs')))]), _vm._v(" "), _c('div', {
    staticClass: "logos"
  }, _vm._l(_vm.orgs, function (item) {
    return _c('router-link', {
      key: item.id,
      attrs: {
        "to": `/activity/organizations/${item.id}`
      }
    }, [_c('div', {
      staticClass: "logo"
    }, [_c('img', {
      staticClass: "logo__img",
      attrs: {
        "src": item.image
      }
    }), _vm._v(" "), _c('h3', {
      staticClass: "logo__title"
    }, [_vm._v(_vm._s(_vm.getContent(item)))])])]);
  }), 1)])], 1)], 1);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/activity/organizations/index.vue?vue&type=template&id=4073c40a&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(8);

// EXTERNAL MODULE: ./layouts/MainLayout.vue + 4 modules
var MainLayout = __webpack_require__(18);

// EXTERNAL MODULE: ./components/IBreadcrumb.vue + 4 modules
var IBreadcrumb = __webpack_require__(91);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/organizations/index.vue?vue&type=script&lang=js&



/* harmony default export */ var organizationsvue_type_script_lang_js_ = ({
  name: 'IOrganizations',
  components: {
    MainLayout: MainLayout["a" /* default */],
    IBreadcrumb: IBreadcrumb["default"]
  },

  async asyncData({
    store
  }) {
    await store.dispatch('fetchActivityOrgs');
  },

  computed: { ...Object(external_vuex_["mapState"])(['orgs'])
  },
  methods: {
    getContent(item) {
      if (!item.translations) return '';
      return item.translations[this.$i18n.localeProperties.code] ? item.translations[this.$i18n.localeProperties.code].title : '';
    }

  }
});
// CONCATENATED MODULE: ./pages/activity/organizations/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var activity_organizationsvue_type_script_lang_js_ = (organizationsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/activity/organizations/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(145)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  activity_organizationsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "b1bfcb5e"
  
)

/* harmony default export */ var organizations = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IBreadcrumb: __webpack_require__(91).default})


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

/***/ })

};;
//# sourceMappingURL=index.js.map