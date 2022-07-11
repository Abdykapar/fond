<template>
  <div>
    <i-header />
    <i-breadcrumb>
      <a-breadcrumb-item>Деятельность</a-breadcrumb-item>
      <a-breadcrumb-item>Мероприятие</a-breadcrumb-item>
    </i-breadcrumb>
    <div class="grid container">
      <i-card
        v-for="item in events"
        :key="item.id"
        link="/activity/event/"
        :item="item"
      />
    </div>
    <i-footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import IBreadcrumb from '@/components/IBreadcrumb.vue'
import ICard from '@/components/ICard.vue'
import IFooter from '@/components/IFooter.vue'
import IHeader from '@/components/IHeader.vue'
export default {
  name: 'ActivityEvent',
  components: { IHeader, IBreadcrumb, IFooter, ICard },
  async asyncData({ store }) {
    await store.dispatch('fetchActivityEvents')
  },
  computed: {
    ...mapState(['events']),
    single() {
      return this.events[0] || {}
    },
    itemContent() {
      if (!this.single.translations) return {}
      return this.single.translations[Object.keys(this.single.translations)[0]]
    },
  },
}
</script>

<style lang="scss"></style>
