exports.ids = [3];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=i-card.js.map