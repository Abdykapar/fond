<template>
  <div>
    <i-header />
    <i-breadcrumb>
      <a-breadcrumb-item>
        <router-link to="/"> Главная </router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item>Ссылки</a-breadcrumb-item>
    </i-breadcrumb>
    <div class="grid container">
      <i-card-2 v-for="item in links" :key="item.id" :item="item" />
    </div>
    <i-footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import IBreadcrumb from '@/components/IBreadcrumb.vue'
import IFooter from '@/components/IFooter.vue'
import IHeader from '@/components/IHeader.vue'
import ICard2 from '@/components/ICard2.vue'
export default {
  name: 'ILinks',
  components: { IHeader, IBreadcrumb, IFooter, ICard2 },
  async asyncData({ store }) {
    await store.dispatch('fetchLinks')
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
