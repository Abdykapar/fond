<template>
  <div>
    <i-header />
    <HomeSlider />
    <div class="container">
      <p class="search__label">{{ $t('searchResult') }}</p>
      <p class="search__text">{{ $route.query.query }}</p>
      <template v-if="searchResult.news && searchResult.news.length">
        <NewsList :news="searchResult.news" />
      </template>
      <template v-if="searchResult.links && searchResult.links.length">
        <LinksList :data="searchResult.links" />
      </template>
      <template
        v-if="
          searchResult.history_of_creation &&
          searchResult.history_of_creation.length
        "
      >
        <h2 class="section-title">{{ $t('historyCreation') }}</h2>
        <div class="news-list">
          <i-card
            :item="searchResult.history_of_creation[0]"
            link="/about/history"
          >
          </i-card>
        </div>
      </template>
      <template v-if="searchResult.about_us && searchResult.about_us.length">
        <h2 class="section-title">{{ $t('aboutFond') }}</h2>
        <div class="news-list">
          <i-card :item="searchResult.about_us[0]" link="/about/about-us">
          </i-card>
        </div>
      </template>
      <template
        v-if="
          searchResult.organizational_structure &&
          searchResult.organizational_structure.length
        "
      >
        <h2 class="section-title">{{ $t('orgStructure') }}</h2>
        <div class="news-list">
          <i-card
            :item="searchResult.organizational_structure[0]"
            link="/about/organization"
          >
          </i-card>
        </div>
      </template>
    </div>
    <i-footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NewsList from '../components/NewsList.vue'
import IHeader from '@/components/IHeader.vue'
import HomeSlider from '@/components/home/HomeSlider.vue'
import IFooter from '@/components/IFooter.vue'
import LinksList from '@/components/LinksList.vue'
export default {
  name: 'ISearch',
  components: { IHeader, HomeSlider, IFooter, NewsList, LinksList },
  async asyncData({ store, route }) {
    await store.dispatch('fetchNews')
    await store.dispatch('fetchSearch', route.query.query)
  },
  computed: {
    ...mapState(['searchResult']),
  },
}
</script>

<style lang="scss">
.search {
  &__label {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #0064b0;
    margin: 20px 0 10px;
  }

  &__text {
    font-weight: 500;
    font-size: 36px;
    line-height: 45px;
    color: #000000;
    position: relative;
    padding-left: 15px;

    &::before {
      content: '-';
      position: absolute;
      left: 0;
      top: 0;
    }
  }
}
</style>
