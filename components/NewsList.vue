<template>
  <div class="container">
    <h2 class="section-title">{{ title }}</h2>
    <div class="news-list">
      <i-card v-for="item in news" :key="item.id" :item="item" />
    </div>
    <div class="section__show-all">
      <router-link to="/news" class="section__show-all__btn"
        >Все Новости</router-link
      >
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ICard from './ICard.vue'
export default {
  name: 'NewsList',
  components: { ICard },
  props: {
    title: {
      type: String,
      default: 'Новости',
    },
  },
  computed: {
    ...mapState(['news']),
  },
}
</script>

<style lang="scss"></style>
