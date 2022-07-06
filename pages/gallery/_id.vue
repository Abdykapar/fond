<template>
  <div>
    <i-header />
    <i-breadcrumb>
      <a-breadcrumb-item>
        <router-link to="/"> Главная </router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item>
        <router-link to="/gallery">Галерея</router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item>{{
        itemContent.title | truncate(100, '...')
      }}</a-breadcrumb-item>
    </i-breadcrumb>
    <div class="gallery-grid container">
      <image-card
        :key="singleGallery.id"
        :without-link="true"
        :item="singleGallery"
      />
      <image-card
        v-for="item in singleGallery.images"
        :key="item.id"
        :without-link="true"
        :with-content="false"
        :item="item"
      />
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
  name: 'IGallerySingle',
  components: { IHeader, IBreadcrumb, IFooter, ImageCard },
  filters: {
    truncate(text, length, suffix) {
      if (text.length > length) {
        return text.substring(0, length) + suffix
      } else {
        return text
      }
    },
  },
  async asyncData({ store, params }) {
    await store.dispatch('fetchGallerySingle', params.id)
  },
  computed: {
    ...mapState(['singleGallery']),
    itemContent() {
      if (!this.singleGallery.translations) return {}
      return this.singleGallery.translations[
        Object.keys(this.singleGallery.translations)[0]
      ]
    },
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
