<template>
  <div class="container">
    <h2 class="section-title">{{ $t('gallery') }}</h2>
    <div class="image-list">
      <image-card v-for="item in filteredGallery" :key="item.id" :item="item" />
    </div>
    <div class="section__show-all">
      <router-link to="/gallery" class="section__show-all__btn">{{
        $t('allPhotos')
      }}</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ImageCard from './ImageCard.vue'
export default {
  name: 'ImageList',
  components: { ImageCard },
  computed: {
    ...mapState(['gallery']),
    filteredGallery() {
      return this.gallery.slice(0, 3)
    },
  },
}
</script>

<style>
.image-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 27px;
  row-gap: 18px;
}
</style>
