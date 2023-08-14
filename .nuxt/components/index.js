export const IBreadcrumb = () => import('../../components/IBreadcrumb.vue' /* webpackChunkName: "components/i-breadcrumb" */).then(c => wrapFunctional(c.default || c))
export const ICard = () => import('../../components/ICard.vue' /* webpackChunkName: "components/i-card" */).then(c => wrapFunctional(c.default || c))
export const ICard2 = () => import('../../components/ICard2.vue' /* webpackChunkName: "components/i-card2" */).then(c => wrapFunctional(c.default || c))
export const IDonation = () => import('../../components/IDonation.vue' /* webpackChunkName: "components/i-donation" */).then(c => wrapFunctional(c.default || c))
export const IFooter = () => import('../../components/IFooter.vue' /* webpackChunkName: "components/i-footer" */).then(c => wrapFunctional(c.default || c))
export const IHeader = () => import('../../components/IHeader.vue' /* webpackChunkName: "components/i-header" */).then(c => wrapFunctional(c.default || c))
export const IPagination = () => import('../../components/IPagination.vue' /* webpackChunkName: "components/i-pagination" */).then(c => wrapFunctional(c.default || c))
export const ImageCard = () => import('../../components/ImageCard.vue' /* webpackChunkName: "components/image-card" */).then(c => wrapFunctional(c.default || c))
export const ImageList = () => import('../../components/ImageList.vue' /* webpackChunkName: "components/image-list" */).then(c => wrapFunctional(c.default || c))
export const ImageModal = () => import('../../components/ImageModal.vue' /* webpackChunkName: "components/image-modal" */).then(c => wrapFunctional(c.default || c))
export const LinksList = () => import('../../components/LinksList.vue' /* webpackChunkName: "components/links-list" */).then(c => wrapFunctional(c.default || c))
export const MediaList = () => import('../../components/MediaList.vue' /* webpackChunkName: "components/media-list" */).then(c => wrapFunctional(c.default || c))
export const NewsGallery = () => import('../../components/NewsGallery.vue' /* webpackChunkName: "components/news-gallery" */).then(c => wrapFunctional(c.default || c))
export const NewsList = () => import('../../components/NewsList.vue' /* webpackChunkName: "components/news-list" */).then(c => wrapFunctional(c.default || c))
export const HomeSlider = () => import('../../components/home/HomeSlider.vue' /* webpackChunkName: "components/home-slider" */).then(c => wrapFunctional(c.default || c))
export const NewsContent = () => import('../../components/news/NewsContent.vue' /* webpackChunkName: "components/news-content" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
