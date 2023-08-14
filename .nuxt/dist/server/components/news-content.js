exports.ids = [11,3,8,12,13];
exports.modules = {

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(116);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("122af1a8", content, true, context)
};

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NewsGallery.vue?vue&type=template&id=70f0d9a7&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "container"
  }, [_vm._ssrNode("<h2 class=\"section-title\">" + _vm._ssrEscape(_vm._s(_vm.$t('gallery'))) + "</h2> "), _vm._ssrNode("<div class=\"gallery\">", "</div>", [_vm._l(_vm.filteredImages, function (img, index) {
    return [index === _vm.filteredImages.length - 1 && _vm.images.length > 5 && !_vm.showAll ? _vm._ssrNode("<div class=\"gallery__img__wrapper\">", "</div>", [_c('ImageModal', {
      attrs: {
        "img": img.image
      }
    }), _vm._ssrNode(" <button class=\"gallery__btn\"><svg width=\"45\" height=\"45\" viewBox=\"0 0 45 45\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20.625 20.625V9.375H24.375V20.625H35.625V24.375H24.375V35.625H20.625V24.375H9.375V20.625H20.625Z\" fill=\"white\"></path></svg></button>")], 2) : _c('ImageModal', {
      key: img.id + 'else',
      attrs: {
        "img": img.image
      }
    })];
  })], 2)], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/NewsGallery.vue?vue&type=template&id=70f0d9a7&

// EXTERNAL MODULE: ./components/ImageModal.vue + 4 modules
var ImageModal = __webpack_require__(98);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NewsGallery.vue?vue&type=script&lang=js&

/* harmony default export */ var NewsGalleryvue_type_script_lang_js_ = ({
  name: 'NewsGallery',
  components: {
    ImageModal: ImageModal["default"]
  },
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      showAll: false
    };
  },

  computed: {
    filteredImages() {
      if (this.showAll) return this.images;
      return this.images.slice(0, 5);
    }

  }
});
// CONCATENATED MODULE: ./components/NewsGallery.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_NewsGalleryvue_type_script_lang_js_ = (NewsGalleryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/NewsGallery.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(115)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_NewsGalleryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "ed13f9ae"
  
)

/* harmony default export */ var NewsGallery = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ImageModal: __webpack_require__(98).default})


/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(129);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("5d485e0e", content, true, context)
};

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsGallery_vue_vue_type_style_index_0_id_70f0d9a7_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(101);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsGallery_vue_vue_type_style_index_0_id_70f0d9a7_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsGallery_vue_vue_type_style_index_0_id_70f0d9a7_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsGallery_vue_vue_type_style_index_0_id_70f0d9a7_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsGallery_vue_vue_type_style_index_0_id_70f0d9a7_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".gallery{display:grid;grid-template-columns:repeat(5, 212px);gap:9px}@media(max-width: 840px){.gallery{grid-template-columns:repeat(2, 212px)}}.gallery__img{height:170px;width:100%;object-fit:contain}.gallery__img__wrapper{position:relative}.gallery__img__wrapper::after{position:absolute;content:\"\";left:0;top:0;bottom:0;right:0;background:rgba(0,0,0,.53);z-index:1}.gallery__btn{border:none;outline:none;background:inherit;position:absolute;top:50%;z-index:2;left:50%;transform:translate(-50%, -50%);cursor:pointer}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/news/NewsContent.vue?vue&type=template&id=ec191d5c&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"n-content\">", "</div>", [_vm._ssrNode("<h2 class=\"n-content__title\">" + _vm._ssrEscape("\n          " + _vm._s(_vm.itemContent.title) + "\n        ") + "</h2> <div class=\"img__wrapper\"><img" + _vm._ssrAttr("src", _vm.singleNews.image) + " class=\"n-content__img\"></div> "), _c('client-only', [_c('p', {
    staticClass: "n-content__p",
    domProps: {
      "innerHTML": _vm._s(_vm.itemContent.content)
    }
  })]), _vm._ssrNode(" <div class=\"n-content__date\"><span>" + _vm._ssrEscape(_vm._s(_vm.format)) + "</span></div>")], 2)]), _vm._ssrNode(" "), _c('news-gallery', {
    attrs: {
      "images": _vm.singleNews.gallery
    }
  }), _vm._ssrNode(" "), _c('news-list', {
    attrs: {
      "all-btn-data": _vm.allBtnData,
      "news": _vm.filteredNews,
      "title": _vm.otherTitle
    }
  })], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/news/NewsContent.vue?vue&type=template&id=ec191d5c&

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(89);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./components/NewsGallery.vue + 4 modules
var NewsGallery = __webpack_require__(106);

// EXTERNAL MODULE: ./components/NewsList.vue + 4 modules
var NewsList = __webpack_require__(94);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/news/NewsContent.vue?vue&type=script&lang=js&



/* harmony default export */ var NewsContentvue_type_script_lang_js_ = ({
  name: 'NewsContent',
  components: {
    NewsGallery: NewsGallery["default"],
    NewsList: NewsList["default"]
  },
  props: {
    news: {
      type: Array,
      default: () => []
    },
    singleNews: {
      type: Object,
      default: () => ({})
    },
    otherTitle: {
      type: String,
      default: 'otherNews'
    },
    allBtnData: {
      type: Object,
      default: () => ({
        title: 'allNews',
        link: '/news'
      })
    }
  },
  computed: {
    itemContent() {
      if (!this.singleNews.translations || !this.$i18n.localeProperties.code) return {};
      return this.singleNews.translations[this.$i18n.localeProperties.code] || {};
    },

    format() {
      return external_moment_default()(this.singleNews.updated_at).format('DD/MM/YYYY');
    },

    filteredNews() {
      return this.news.filter(i => i.id !== this.singleNews.id);
    }

  }
});
// CONCATENATED MODULE: ./components/news/NewsContent.vue?vue&type=script&lang=js&
 /* harmony default export */ var news_NewsContentvue_type_script_lang_js_ = (NewsContentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/news/NewsContent.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(128)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  news_NewsContentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1e46e670"
  
)

/* harmony default export */ var NewsContent = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {NewsGallery: __webpack_require__(106).default,NewsList: __webpack_require__(94).default})


/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsContent_vue_vue_type_style_index_0_id_ec191d5c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(111);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsContent_vue_vue_type_style_index_0_id_ec191d5c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsContent_vue_vue_type_style_index_0_id_ec191d5c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsContent_vue_vue_type_style_index_0_id_ec191d5c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsContent_vue_vue_type_style_index_0_id_ec191d5c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".img__wrapper{width:100%;text-align:center}.n-content__title{font-weight:500;font-size:36px;line-height:45px;text-align:center;color:#000;padding:20px 0 30px}@media(max-width: 840px){.n-content__title{font-size:20px;line-height:25px}}.n-content__img{max-height:408px}@media(max-width: 840px){.n-content__img{width:100%;height:auto;max-height:unset}}.n-content__p{margin:30px 0 19px;font-weight:400;font-size:24px;line-height:37px;color:#000}@media(max-width: 840px){.n-content__p{font-size:16px;line-height:20px}}.n-content__date{font-weight:500;font-size:16px;line-height:20px;color:#969696;display:flex;justify-content:flex-end}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


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

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ImageModal.vue?vue&type=template&id=629f9596&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_vm._ssrNode("<img" + _vm._ssrAttr("src", _vm.img) + " class=\"gallery__img\"> "), _c('client-only', [_c('b-modal', {
    model: {
      value: _vm.isImageModalActive,
      callback: function ($$v) {
        _vm.isImageModalActive = $$v;
      },
      expression: "isImageModalActive"
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.img
    }
  })])], 1)], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ImageModal.vue?vue&type=template&id=629f9596&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ImageModal.vue?vue&type=script&lang=js&
/* harmony default export */ var ImageModalvue_type_script_lang_js_ = ({
  name: 'ImageModal',
  props: {
    img: String
  },

  data() {
    return {
      isImageModalActive: false
    };
  },

  methods: {
    onShowModal() {
      console.log('show modal');
      this.isImageModalActive = true;
    }

  }
});
// CONCATENATED MODULE: ./components/ImageModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ImageModalvue_type_script_lang_js_ = (ImageModalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/ImageModal.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ImageModalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "9562eb50"
  
)

/* harmony default export */ var ImageModal = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=news-content.js.map