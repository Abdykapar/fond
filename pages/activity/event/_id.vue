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
    <news-content :single-news="event" :all-btn-data="allBtnData" />
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
      return this.event.translations[Object.keys(this.event.translations)[0]]
    },
    allBtnData() {
      return {
        title: 'Все мероприятия',
        link: '/activity/event',
      }
    },
  },
}
</script>

<style></style>
