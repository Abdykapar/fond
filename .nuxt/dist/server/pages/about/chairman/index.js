exports.ids = [16,2];
exports.modules = {

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about/chairman/index.vue?vue&type=template&id=4f1a7d4b&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_c('main-layout', [_c('i-breadcrumb', [_c('a-breadcrumb-item', [_c('router-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v(" " + _vm._s(_vm.$t('main')))])], 1), _vm._v(" "), _c('a-breadcrumb-item', [_vm._v(_vm._s(_vm.$t('aboutFond')))]), _vm._v(" "), _c('a-breadcrumb-item', [_vm._v(_vm._s(_vm.$t('chairman')))])], 1), _vm._v(" "), _c('img', {
    staticClass: "page-avatar",
    attrs: {
      "src": _vm.single.image
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "page-content min-height",
    domProps: {
      "innerHTML": _vm._s(_vm.itemContent.content)
    }
  }), _vm._v(" "), _c('div', [_c('h2', {
    staticClass: "section-title"
  }, [_vm._v(_vm._s(_vm.$t('chairman_zam')))]), _vm._v(" "), _c('div', {
    staticClass: "chairmans"
  }, _vm._l(_vm.others, function (item) {
    return _c('router-link', {
      key: item.id,
      attrs: {
        "to": `/about/chairman/${item.id}`
      }
    }, [_c('div', {
      staticClass: "chairman"
    }, [_c('img', {
      staticClass: "chairman__avatar",
      attrs: {
        "src": item.image,
        "alt": ""
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "chairman__name"
    }, [_vm._v(_vm._s(_vm.getItem(item).name))]), _vm._v(" "), _c('div', {
      staticClass: "chairman__date"
    }, [_c('span', [_vm._v(_vm._s(item.year_reign))])])])]);
  }), 1)])], 1)], 1);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/about/chairman/index.vue?vue&type=template&id=4f1a7d4b&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(8);

// EXTERNAL MODULE: ./components/IBreadcrumb.vue + 4 modules
var IBreadcrumb = __webpack_require__(91);

// EXTERNAL MODULE: ./layouts/MainLayout.vue + 4 modules
var MainLayout = __webpack_require__(18);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about/chairman/index.vue?vue&type=script&lang=js&



/* harmony default export */ var chairmanvue_type_script_lang_js_ = ({
  name: 'AboutChairman',
  components: {
    MainLayout: MainLayout["a" /* default */],
    IBreadcrumb: IBreadcrumb["default"]
  },

  async asyncData({
    store,
    params
  }) {
    await store.dispatch('fetchFrdkChairmans');
  },

  computed: { ...Object(external_vuex_["mapState"])(['chairmans', 'chairman']),

    single() {
      return this.chairmans[0] ? this.chairmans[0] : {};
    },

    others() {
      return this.chairmans.filter(i => i.id !== this.single.id) || [];
    },

    itemContent() {
      if (!this.single.translations) return {};
      return this.single.translations[this.$i18n.localeProperties.code] || {};
    }

  },
  methods: {
    getItem(item) {
      if (!item.translations) return {};
      return item.translations[this.$i18n.localeProperties.code] || {};
    }

  }
});
// CONCATENATED MODULE: ./pages/about/chairman/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var about_chairmanvue_type_script_lang_js_ = (chairmanvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/about/chairman/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  about_chairmanvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "629e7da8"
  
)

/* harmony default export */ var chairman = __webpack_exports__["default"] = (component.exports);

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