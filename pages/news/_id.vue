<template>
  <div>
    <i-header />
    <i-breadcrumb>
      <a-breadcrumb-item>
        <router-link to="/"> Главная </router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item>Новости</a-breadcrumb-item>
    </i-breadcrumb>
    <news-content />
    <i-footer />
  </div>
</template>

<script>
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
}
</script>

<style></style>
