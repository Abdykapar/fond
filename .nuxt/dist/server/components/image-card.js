exports.ids = [6];
exports.modules = {

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
//# sourceMappingURL=image-card.js.map