<template>
  <div>
    <Header />
    <HomeSlider />
    <NewsList />
    <LinksList />
    <ImageList />
    <IFooter />
  </div>
</template>

<script>
import ImageList from '../components/ImageList.vue'
import NewsList from '@/components/NewsList.vue'
import Header from '@/components/IHeader.vue'
import HomeSlider from '@/components/home/HomeSlider.vue'
import LinksList from '@/components/LinksList.vue'
import IFooter from '@/components/IFooter.vue'
export default {
  name: 'IndexPage',
  components: { Header, HomeSlider, NewsList, LinksList, ImageList, IFooter },
}
</script>
