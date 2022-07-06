<template>
  <div class="container">
    <h2 class="section-title">Новости</h2>
    <div class="news-list">
      <i-card v-for="item in news" :key="item.id" :item="item" />
    </div>
    <div class="section__show-all">
      <button class="section__show-all__btn">Все Новости</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ICard from './ICard.vue'
export default {
  name: 'NewsList',
  components: { ICard },
  computed: {
    ...mapState(['news']),
  },
}
</script>

<style lang="scss"></style>
