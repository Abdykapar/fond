<template>
  <div>
    <i-header />
    <i-breadcrumb>
      <a-breadcrumb-item>
        <router-link to="/"> {{ $t('main') }} </router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item>{{ $t('links') }}</a-breadcrumb-item>
    </i-breadcrumb>
    <div class="grid container">
      <i-card-2 v-for="item in links" :key="item.id" :item="item" />
      <i-pagination item-type="links" />
    </div>
    <i-footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import IPagination from '../../components/IPagination.vue'
import IBreadcrumb from '@/components/IBreadcrumb.vue'
import IFooter from '@/components/IFooter.vue'
import IHeader from '@/components/IHeader.vue'
import ICard2 from '@/components/ICard2.vue'
export default {
  name: 'ILinks',
  components: { IHeader, IBreadcrumb, IFooter, ICard2, IPagination },
  async asyncData({ store, route }) {
    await store.dispatch('fetchLinks', route.query.page || 1)
  },
  computed: {
    ...mapState(['links']),
  },
}
</script>

<style lang="scss">
.grid {
  display: grid;
  row-gap: 15px;
}
</style>
