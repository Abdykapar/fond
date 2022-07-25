<template>
  <div>
    <main-layout>
      <i-breadcrumb>
        <a-breadcrumb-item>
          <router-link to="/"> {{ $t('main') }}</router-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item>{{ $t('aboutFond') }}</a-breadcrumb-item>
        <a-breadcrumb-item>{{ $t('aboutFrdk') }}</a-breadcrumb-item>
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
  name: 'AboutUs',
  components: { MainLayout, IBreadcrumb },
  async asyncData({ store }) {
    await store.dispatch('fetchFrdk')
  },
  computed: {
    ...mapState(['frdk']),
    single() {
      return this.frdk[0] || {}
    },
    itemContent() {
      if (!this.single.translations) return {}
      return this.single.translations[this.$i18n.localeProperties.code] || {}
    },
  },
}
</script>

<style></style>
