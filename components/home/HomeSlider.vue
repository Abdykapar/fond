<template>
  <div>
    <client-only>
      <a-carousel :after-change="onChange">
        <div v-for="item in sliderNews" :key="item.id" class="slide">
          <img class="slide__img" :src="item.image" title="" />
          <div class="slide__content">
            <p class="slide__text">
              {{ getContent(item) }}
            </p>
          </div>
        </div>
      </a-carousel>
    </client-only>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HomeSlider',
  computed: {
    ...mapState(['news']),
    sliderNews() {
      return this.news.slice(0, 3)
    },
  },
  methods: {
    onChange() {
      console.log('change')
    },
    getContent(item) {
      if (!item.translations || !this.$i18n.localeProperties.code) return ''
      return item.translations[this.$i18n.localeProperties.code]
        ? item.translations[this.$i18n.localeProperties.code].title
        : ''
    },
  },
}
</script>

<style lang="scss" scoped>
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  /* line-height: 160px; */
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}

.ant-carousel :deep(.slick-dots-bottom) {
  bottom: 35px;
}

.ant-carousel :deep(.slick-dots li button) {
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  margin: 0 7px;
}

.ant-carousel :deep(.slick-dots li.slick-active button) {
  background: #fff;
}
</style>
