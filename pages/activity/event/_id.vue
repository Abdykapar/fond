<template>
  <div>
    <i-header />
    <i-breadcrumb>
      <a-breadcrumb-item>Деятельность</a-breadcrumb-item>
      <a-breadcrumb-item>Мероприятие</a-breadcrumb-item>
      <a-breadcrumb-item>{{
        itemContent.title | truncate(100, '...')
      }}</a-breadcrumb-item>
    </i-breadcrumb>
    <news-content />
    <i-footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import IBreadcrumb from '@/components/IBreadcrumb.vue'
import IFooter from '@/components/IFooter.vue'
import IHeader from '@/components/IHeader.vue'
import NewsContent from '@/components/news/NewsContent.vue'
export default {
  name: 'ActivitySingleEvent',
  components: { IHeader, IFooter, IBreadcrumb, NewsContent },
  async asyncData({ store, params }) {
    await store.dispatch('fetchSingleNews', params.id)
    await store.dispatch('fetchNews')
  },
  computed: {
    ...mapState(['singleNews']),
    itemContent() {
      if (!this.singleNews.translations) return {}
      return this.singleNews.translations[
        Object.keys(this.singleNews.translations)[0]
      ]
    },
  },
}
</script>

<style></style>
