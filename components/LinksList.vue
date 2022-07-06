<template>
  <div class="container">
    <h2 class="section-title">Ссылки</h2>
    <div class="links-list">
      <i-card-2 v-for="item in links" :key="item.id" :item="item" />
    </div>
    <div class="section__show-all">
      <router-link to="/links" class="section__show-all__btn"
        >Все Ссылки</router-link
      >
    </div>
  </div>
</template>

<script>
import ICard2 from './ICard2.vue'
export default {
  name: 'LinksList',
  components: { ICard2 },
  computed: {
    links() {
      return this.$store.state.links
    },
  },
}
</script>

<style>
.links-list {
  display: grid;
  row-gap: 35px;
}
</style>
