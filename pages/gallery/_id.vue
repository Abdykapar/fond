<template>
  <div>
    <i-header />
    <i-breadcrumb>
      <a-breadcrumb-item>
        <router-link to="/"> {{ $t('main') }} </router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item>
        <router-link to="/gallery">{{ $t('gallery') }}</router-link>
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
  async asyncData({ store, params }) {
    await store.dispatch('fetchGallerySingle', params.id)
  },
  computed: {
    ...mapState(['singleGallery']),
    itemContent() {
      if (!this.singleGallery.translations) return {}
      return (
        this.singleGallery.translations[this.$i18n.localeProperties.code] || {}
      )
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

  @media (max-width: 840px) {
    grid-template-columns: repeat(2, 175px);
    column-gap: 8px;
    justify-content: center;
    row-gap: 20px;
  }
}
</style>
