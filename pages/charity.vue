<template>
  <div>
    <main-layout>
      <i-breadcrumb>
        <a-breadcrumb-item>
          <router-link to="/"> {{ $t('main') }} </router-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item>{{ $t('charity') }}</a-breadcrumb-item>
      </i-breadcrumb>

      <div class="single__content container">
        <div class="flex-center">
          <img :src="single.image" class="page-img" />
        </div>
        <h2 class="single__title">{{ itemContent.title }}</h2>
        <div class="page-content" v-html="itemContent.content"></div>
      </div>
    </main-layout>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MainLayout from '@/layouts/MainLayout.vue'
import IBreadcrumb from '@/components/IBreadcrumb.vue'
export default {
  name: 'ICharity',
  components: { MainLayout, IBreadcrumb },
  async asyncData({ store }) {
    await store.dispatch('fetchCharity')
  },
  computed: {
    ...mapState(['charity']),
    single() {
      return this.charity[0] || {}
    },
    itemContent() {
      if (!this.single.translations) return {}
      return this.single.translations[Object.keys(this.single.translations)[0]]
    },
  },
}
</script>

<style lang="scss"></style>
