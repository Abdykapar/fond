import Vue from 'vue'

export default () => {
  Vue.filter('truncate', function (text, length, suffix) {
    if (text && text.length > length) {
      return text.substring(0, length) + suffix
    } else {
      return text
    }
  })
}
