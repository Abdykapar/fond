<template>
  <div class="container">
    <h2 class="section-title">{{ $t('links') }}</h2>
    <div class="links-list">
      <i-card-2 v-for="item in filteredLinks" :key="item.id" :item="item" />
    </div>
    <div class="section__show-all">
      <router-link to="/links" class="section__show-all__btn">{{
        $t('allLinks')
      }}</router-link>
    </div>
  </div>
</template>

<script>
import ICard2 from './ICard2.vue'
export default {
  name: 'LinksList',
  components: { ICard2 },
  props: {
    data: {
      type: Array,
      default: null,
    },
  },
  computed: {
    links() {
      return this.data ? this.data : this.$store.state.links
    },
    filteredLinks() {
      return this.links.slice(0, 3)
    },
  },
}
</script>

<style lang="scss">
.links-list {
  display: grid;
  row-gap: 35px;

  @media (max-width: 840px) {
    row-gap: 15px;
  }
}
</style>
