<template>
  <div>
    <i-header />
    <i-breadcrumb>
      <a-breadcrumb-item>
        <router-link to="/"> {{ $t('main') }} </router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item>{{ $t('gallery') }}</a-breadcrumb-item>
    </i-breadcrumb>
    <div class="gallery-grid container">
      <image-card v-for="item in gallery" :key="item.id" :item="item" />
    </div>
    <i-footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import IBreadcrumb from '@/components/IBreadcrumb.vue'
import IFooter from '@/components/IFooter.vue'
import IHeader from '@/components/IHeader.vue'
import ImageCard from '@/components/ImageCard.vue'
export default {
  name: 'IGallery',
  components: { IHeader, IBreadcrumb, IFooter, ImageCard },
  async asyncData({ store }) {
    await store.dispatch('fetchGallery')
  },
  computed: {
    ...mapState(['gallery']),
  },
}
</script>

<style lang="scss">
.gallery-grid {
  display: grid;
  column-gap: 27px;
  row-gap: 18px;
  grid-template-columns: repeat(3, 347px);
}
</style>
