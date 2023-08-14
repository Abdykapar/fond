exports.ids = [8];
exports.modules = {

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
//# sourceMappingURL=image-modal.js.map