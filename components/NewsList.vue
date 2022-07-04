<template>
  <div class="container">
    <h2 class="section-title">Новости</h2>
    <div class="news-list">
      <i-card v-for="item in 3" :key="item" />
    </div>
    <div class="section__show-all">
      <button class="section__show-all__btn">Все Новости</button>
    </div>
  </div>
</template>

<script>
import ICard from './ICard.vue'
export default {
  name: 'NewsList',
  components: { ICard },
}
</script>

<style lang="scss"></style>
