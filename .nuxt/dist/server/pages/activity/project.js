exports.ids = [23,2];
exports.modules = {

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/project.vue?vue&type=template&id=0f418ee4&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_c('main-layout', [_c('i-breadcrumb', [_c('a-breadcrumb-item', [_vm._v(_vm._s(_vm.$t('activity')))]), _vm._v(" "), _c('a-breadcrumb-item', [_vm._v(_vm._s(_vm.$t('projectActivities')))])], 1), _vm._v(" "), _c('div', {
    staticClass: "single__content container"
  }, [_c('img', {
    staticClass: "single__img",
    attrs: {
      "src": _vm.single.image
    }
  }), _vm._v(" "), _c('h2', {
    staticClass: "single__title"
  }, [_vm._v(_vm._s(_vm.itemContent.title))]), _vm._v(" "), _c('div', {
    staticClass: "page-content",
    domProps: {
      "innerHTML": _vm._s(_vm.itemContent.content)
    }
  })])], 1)], 1);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/activity/project.vue?vue&type=template&id=0f418ee4&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(8);

// EXTERNAL MODULE: ./layouts/MainLayout.vue + 4 modules
var MainLayout = __webpack_require__(18);

// EXTERNAL MODULE: ./components/IBreadcrumb.vue + 4 modules
var IBreadcrumb = __webpack_require__(91);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/project.vue?vue&type=script&lang=js&



/* harmony default export */ var projectvue_type_script_lang_js_ = ({
  name: 'ActivityProject',
  components: {
    MainLayout: MainLayout["a" /* default */],
    IBreadcrumb: IBreadcrumb["default"]
  },

  async asyncData({
    store
  }) {
    await store.dispatch('fetchActivityProjects');
  },

  computed: { ...Object(external_vuex_["mapState"])(['projects']),

    single() {
      return this.projects[0] || {};
    },

    itemContent() {
      if (!this.single.translations) return {};
      return this.single.translations[this.$i18n.localeProperties.code] || {};
    }

  }
});
// CONCATENATED MODULE: ./pages/activity/project.vue?vue&type=script&lang=js&
 /* harmony default export */ var activity_projectvue_type_script_lang_js_ = (projectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/activity/project.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  activity_projectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "a07e0872"
  
)

/* harmony default export */ var project = __webpack_exports__["default"] = (component.exports);

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
//# sourceMappingURL=project.js.map