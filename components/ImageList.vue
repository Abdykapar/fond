<template>
  <div class="container">
    <h2 class="section-title">Галерея</h2>
    <div class="image-list">
      <image-card v-for="item in 3" :key="item" />
    </div>
    <div class="section__show-all">
      <button class="section__show-all__btn">Все Фотографии</button>
    </div>
  </div>
</template>

<script>
import ImageCard from './ImageCard.vue'
export default {
  name: 'ImageList',
  components: { ImageCard },
}
</script>

<style>
.image-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 27px;
}
</style>
