<template>
  <div>
    <div class="container">
      <div class="n-content">
        <h2 class="n-content__title">
          {{ itemContent.title }}
        </h2>
        <div class="img__wrapper">
          <img :src="singleNews.image" class="n-content__img" />
        </div>
        <p class="n-content__p" v-html="itemContent.content"></p>
        <div class="n-content__date">
          <span>{{ format }}</span>
        </div>
      </div>
    </div>
    <news-gallery :images="singleNews.gallery" />
    <news-list
      :all-btn-data="allBtnData"
      :news="filteredNews"
      :title="otherTitle"
    />
  </div>
</template>

<script>
import moment from 'moment'
import NewsGallery from '../NewsGallery.vue'
import NewsList from '../NewsList.vue'

export default {
  name: 'NewsContent',
  components: { NewsGallery, NewsList },
  props: {
    news: {
      type: Array,
      default: () => [],
    },
    singleNews: {
      type: Object,
      default: () => ({}),
    },
    otherTitle: {
      type: String,
      default: 'otherNews',
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
    itemContent() {
      if (!this.singleNews.translations || !this.$i18n.localeProperties.code)
        return {}
      return (
        this.singleNews.translations[this.$i18n.localeProperties.code] || {}
      )
    },
    format() {
      return moment(this.singleNews.updated_at).format('DD/MM/YYYY')
    },
    filteredNews() {
      return this.news.filter((i) => i.id !== this.singleNews.id)
    },
  },
}
</script>

<style lang="scss">
.img__wrapper {
  width: 100%;
  text-align: center;
}
.n-content {
  &__title {
    font-weight: 500;
    font-size: 36px;
    line-height: 45px;
    text-align: center;
    color: #000000;
    padding: 20px 0 30px;

    @media (max-width: 840px) {
      font-size: 20px;
      line-height: 25px;
    }
  }

  &__img {
    max-height: 408px;

    @media (max-width: 840px) {
      width: 100%;
      height: auto;
      max-height: unset;
    }
  }

  &__p {
    margin: 30px 0 19px;
    font-weight: 400;
    font-size: 24px;
    line-height: 37px;
    color: #000000;

    @media (max-width: 840px) {
      font-size: 16px;
      line-height: 20px;
    }
  }

  &__date {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #969696;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
