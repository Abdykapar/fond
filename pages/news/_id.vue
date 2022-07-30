<template>
  <div>
    <i-header />
    <i-breadcrumb>
      <a-breadcrumb-item>
        <router-link to="/"> {{ $t('main') }} </router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item>
        <router-link to="/news"> {{ $t('news') }}</router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item>{{
        itemContent.title | truncate(100, '...')
      }}</a-breadcrumb-item>
    </i-breadcrumb>
    <news-content :news="news" :single-news="singleNews" />
    <i-footer />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import IBreadcrumb from '@/components/IBreadcrumb.vue'
import IFooter from '@/components/IFooter.vue'
import IHeader from '@/components/IHeader.vue'
import NewsContent from '@/components/news/NewsContent.vue'
export default {
  name: 'SingleNews',
  components: { IHeader, IFooter, IBreadcrumb, NewsContent },
  async asyncData({ store, params }) {
    await store.dispatch('fetchSingleNews', params.id)
    await store.dispatch('fetchNews')
  },
  computed: {
    ...mapState(['singleNews', 'news']),
    itemContent() {
      if (!this.singleNews.translations) return {}
      return (
        this.singleNews.translations[this.$i18n.localeProperties.code] || {}
      )
    },
  },
  created() {
    this.fetchSingleNews(this.$route.params.id)
  },
  methods: {
    ...mapActions(['fetchSingleNews']),
  },
}
</script>

<style></style>
