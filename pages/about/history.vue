<template>
  <div>
    <main-layout>
      <i-breadcrumb>
        <a-breadcrumb-item>
          <router-link to="/"> Главная</router-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item>О ФРДК «Ыйман» </a-breadcrumb-item>
        <a-breadcrumb-item>История создания </a-breadcrumb-item>
      </i-breadcrumb>
      <div class="flex-center">
        <img :src="single.image" class="page-img" />
      </div>

      <h2 class="single__title">{{ itemContent.title }}</h2>

      <div class="page-content" v-html="itemContent.content"></div>
    </main-layout>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import IBreadcrumb from '@/components/IBreadcrumb.vue'
import MainLayout from '@/layouts/MainLayout.vue'
export default {
  name: 'AboutHistory',
  components: { MainLayout, IBreadcrumb },
  async asyncData({ store }) {
    await store.dispatch('fetchFrdkHistories')
  },
  computed: {
    ...mapState(['histories']),
    single() {
      return this.histories[0] || {}
    },
    itemContent() {
      if (!this.single.translations) return {}
      return this.single.translations[Object.keys(this.single.translations)[0]]
    },
  },
}
</script>

<style></style>
