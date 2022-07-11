<template>
  <div class="container">
    <h2 class="section-title">{{ $t(title) }}</h2>
    <div class="news-list">
      <i-card v-for="item in news" :key="item.id" :item="item" />
    </div>
    <div class="section__show-all">
      <router-link :to="allBtnData.link" class="section__show-all__btn">{{
        allBtnData.title
      }}</router-link>
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
      default: 'news',
    },
    allBtnData: {
      type: Object,
      default: () => ({
        title: 'allNews',
        link: '/news',
      }),
    },
  },
  computed: {
    ...mapState(['news']),
  },
}
</script>

<style lang="scss"></style>
