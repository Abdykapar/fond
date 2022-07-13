<template>
  <div>
    <i-header />
    <i-breadcrumb>
      <a-breadcrumb-item>{{ $t('activity') }}</a-breadcrumb-item>
      <a-breadcrumb-item>{{ $t('event') }}</a-breadcrumb-item>
      <a-breadcrumb-item>{{
        itemContent.title | truncate(100, '...')
      }}</a-breadcrumb-item>
    </i-breadcrumb>
    <news-content
      :single-news="event"
      other-title="allEvent"
      :all-btn-data="allBtnData"
    />
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
    await store.dispatch('fetchActivityEvent', params.id)
  },
  computed: {
    ...mapState(['event']),
    itemContent() {
      if (!this.event.translations) return {}
      return this.event.translations[this.$i18n.localeProperties.code] || {}
    },
    allBtnData() {
      return {
        title: 'allEvent',
        link: '/activity/event',
      }
    },
  },
}
</script>

<style></style>
