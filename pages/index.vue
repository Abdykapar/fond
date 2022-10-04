<template>
  <div>
    <Header />
    <HomeSlider />
    <NewsList :news="news" />
    <LinksList />
    <ImageList />
    <MediaList />
    <IFooter />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ImageList from '@/components/ImageList.vue'
import NewsList from '@/components/NewsList.vue'
import Header from '@/components/IHeader.vue'
import HomeSlider from '@/components/home/HomeSlider.vue'
import LinksList from '@/components/LinksList.vue'
import IFooter from '@/components/IFooter.vue'
import MediaList from '@/components/MediaList.vue'
export default {
  name: 'IndexPage',
  components: {
    Header,
    HomeSlider,
    NewsList,
    LinksList,
    ImageList,
    IFooter,
    MediaList,
  },
  async asyncData({ store }) {
    await store.dispatch('fetchGallery')
    await store.dispatch('fetchLinks')
    await store.dispatch('fetchNews')
    await store.dispatch('fetchMedia')
  },
  computed: {
    ...mapState(['news']),
  },
}
</script>
