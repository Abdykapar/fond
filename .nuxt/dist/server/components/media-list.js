exports.ids = [10];
exports.modules = {

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(127);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("558b9b9f", content, true, context)
};

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MediaList.vue?vue&type=template&id=72114930&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "container"
  }, [_vm._ssrNode("<h2 class=\"section-title\">" + _vm._ssrEscape(_vm._s(_vm.$t('media'))) + "</h2> "), _vm._ssrNode("<div class=\"media-list\">", "</div>", _vm._l(_vm.filteredMedia, function (m, i) {
    return _vm._ssrNode("<div class=\"media-card\">", "</div>", [!m.clicked ? _vm._ssrNode("<div class=\"media-img-wrapper\">", "</div>", [_vm._ssrNode("<div class=\"media-play\">", "</div>", [_c('PlayBtn')], 1), _vm._ssrNode(" <img" + _vm._ssrAttr("src", _vm.getThumbnail(m.link)) + " class=\"media-img\">")], 2) : _vm._ssrNode("<iframe id=\"player\" type=\"text/html\" width=\"347\" height=\"266\" allow=\"autoplay\"" + _vm._ssrAttr("src", `http://www.youtube.com/embed/${_vm.getCode(m.link)}?autoplay=1&enable_js=1`) + " frameborder=\"0\"></iframe>"), _vm._ssrNode(" <p class=\"media-text\">" + _vm._ssrEscape(_vm._s(_vm.itemContent(m).description)) + "</p>")], 2);
  }), 0), _vm._ssrNode(" "), !_vm.showAll ? _vm._ssrNode("<div class=\"section__show-all\">", "</div>", [_c('router-link', {
    staticClass: "section__show-all__btn",
    attrs: {
      "to": "/media"
    }
  }, [_vm._v(_vm._s(_vm.$t('allMedia')))])], 1) : _vm._e()], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MediaList.vue?vue&type=template&id=72114930&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MediaList.vue?vue&type=script&lang=js&
var MediaListvue_type_script_lang_js_ = __webpack_require__(99);

// CONCATENATED MODULE: ./components/MediaList.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MediaListvue_type_script_lang_js_ = (MediaListvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/MediaList.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(126)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MediaListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "247fd7cc"
  
)

/* harmony default export */ var MediaList = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaList_vue_vue_type_style_index_0_id_72114930_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(110);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaList_vue_vue_type_style_index_0_id_72114930_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaList_vue_vue_type_style_index_0_id_72114930_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaList_vue_vue_type_style_index_0_id_72114930_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaList_vue_vue_type_style_index_0_id_72114930_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".media-list{display:grid;row-gap:35px;column-gap:28px;grid-template-columns:repeat(3, 1fr)}@media(max-width: 840px){.media-list{row-gap:15px}}.media-card{width:347px;cursor:pointer}.media-play{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.2)}.media-img-wrapper{position:relative}.media-img{width:100%;height:266px}.media-text{font-family:\"Cera Pro\";font-style:normal;font-weight:700;font-size:18.1607px;line-height:23px;text-align:center;color:#000;margin-top:20px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib!./node_modules/svg-to-vue-component/loader.js!./static/icon/play-btn.svg?vue&type=template&id=e755be88&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('svg', _vm._g({
    attrs: {
      "width": "40",
      "height": "39",
      "viewBox": "0 0 40 39",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, _vm.$listeners), [_vm._ssrNode("<path d=\"M20 38.25C9.414 38.25.833 29.856.833 19.5S9.414.75 20 .75c10.586 0 19.167 8.394 19.167 18.75S30.586 38.25 20 38.25zm-2.641-25.472a.78.78 0 00-1.083.238.737.737 0 00-.11.385v12.198c0 .136.039.27.11.385a.76.76 0 00.296.276.781.781 0 00.787-.038l9.351-6.098a.737.737 0 000-1.249l-9.353-6.097h.002z\" fill=\"#fff\" fill-opacity=\".6\"></path>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./static/icon/play-btn.svg?vue&type=template&id=e755be88&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./static/icon/play-btn.svg

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "10a68a4c"
  
)

/* harmony default export */ var play_btn = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_icon_play_btn_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(130);


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'MediaList',
  components: {
    PlayBtn: _static_icon_play_btn_svg__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]
  },
  props: {
    showAll: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    filteredMedia() {
      return this.showAll ? this.$store.state.media : this.$store.state.media.slice(0, 3);
    }

  },
  methods: { ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])(['SET_MEDIA']),

    getThumbnail(link) {
      const v = this.getCode(link);
      return `http://img.youtube.com/vi/${v}/0.jpg`;
    },

    getCode(link) {
      const url = new URL(link);
      const searchParams = url.searchParams;
      return searchParams.get('v');
    },

    itemContent(item) {
      if (!item.translations || !this.$i18n.localeProperties.code) return {};
      return item.translations[this.$i18n.localeProperties.code] || {};
    },

    onClickVideo(index) {
      const m = this.filteredMedia.map((i, ind) => {
        if (ind === index) return { ...this.filteredMedia[index],
          clicked: true
        };
        return i;
      });
      this.SET_MEDIA(m);
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(19)["URL"]))

/***/ })

};;
//# sourceMappingURL=media-list.js.map