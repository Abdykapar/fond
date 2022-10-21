<template>
  <div>
    <i-header />
    <i-breadcrumb>
      <a-breadcrumb-item>
        <router-link to="/"> {{ $t('main') }} </router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item>{{ $t('news') }}</a-breadcrumb-item>
    </i-breadcrumb>
    <client-only>
      <div class="grid container">
        <i-card v-for="item in news" :key="item.id" :item="item" />
        <i-pagination />
      </div>
    </client-only>
    <i-footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import IBreadcrumb from '../../components/IBreadcrumb.vue'
import ICard from '../../components/ICard.vue'
import IFooter from '../../components/IFooter.vue'
import IHeader from '../../components/IHeader.vue'
import IPagination from '../../components/IPagination.vue'
export default {
  name: 'INews',
  components: { IHeader, IBreadcrumb, IFooter, ICard, IPagination },
  async asyncData({ store, route }) {
    await store.dispatch('fetchNews', route.query.page || 1)
  },
  computed: {
    ...mapState(['news', 'totalCount']),
  },
}
</script>

<style lang="scss"></style>
