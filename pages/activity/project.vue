<template>
  <div>
    <main-layout>
      <i-breadcrumb>
        <a-breadcrumb-item>{{ $t('activity') }}</a-breadcrumb-item>
        <a-breadcrumb-item>{{ $t('projectActivities') }}</a-breadcrumb-item>
      </i-breadcrumb>

      <div class="single__content container">
        <img :src="single.image" class="single__img" />
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
  name: 'ActivityProject',
  components: { MainLayout, IBreadcrumb },
  async asyncData({ store }) {
    await store.dispatch('fetchActivityProjects')
  },
  computed: {
    ...mapState(['projects']),
    single() {
      return this.projects[0] || {}
    },
    itemContent() {
      if (!this.single.translations) return {}
      return this.single.translations[Object.keys(this.single.translations)[0]]
    },
  },
}
</script>

<style lang="scss"></style>
