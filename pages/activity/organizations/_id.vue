<template>
  <div>
    <main-layout>
      <i-breadcrumb>
        <a-breadcrumb-item>{{ $t('activity') }}</a-breadcrumb-item>
        <a-breadcrumb-item>{{ $t('internationalCoop') }}</a-breadcrumb-item>
        <a-breadcrumb-item>{{ itemContent.title }}</a-breadcrumb-item>
      </i-breadcrumb>

      <div class="single__content container">
        <div class="flex-center">
          <img :src="org.image" class="page-img" />
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
  name: 'SingleOrganizations',
  components: { MainLayout, IBreadcrumb },
  async asyncData({ store, params }) {
    await store.dispatch('fetchActivityOrgSingle', params.id)
  },
  computed: {
    ...mapState(['org']),
    itemContent() {
      if (!this.org.translations) return {}
      return this.org.translations[this.$i18n.localeProperties.code] || {}
    },
  },
}
</script>

<style lang="scss"></style>
