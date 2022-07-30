<template>
  <div class="container">
    <h2 class="section-title">{{ $t(title) }}</h2>
    <div class="news-list">
      <i-card v-for="item in filteredNews" :key="item.id" :item="item" />
    </div>
    <div class="section__show-all">
      <router-link :to="allBtnData.link" class="section__show-all__btn">{{
        $t(allBtnData.title)
      }}</router-link>
    </div>
  </div>
</template>

<script>
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
    showAll: {
      type: Boolean,
      default: false,
    },
    news: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    filteredNews() {
      return this.showAll ? this.news : this.news.slice(0, 3)
    },
  },
}
</script>

<style lang="scss"></style>
