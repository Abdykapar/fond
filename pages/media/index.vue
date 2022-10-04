<template>
  <div>
    <i-header />
    <i-breadcrumb>
      <a-breadcrumb-item>
        <router-link to="/"> {{ $t('main') }} </router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item>{{ $t('media') }}</a-breadcrumb-item>
    </i-breadcrumb>
    <media-list show-all />
    <i-footer />
  </div>
</template>

<script>
import IBreadcrumb from '../../components/IBreadcrumb.vue'
import IFooter from '../../components/IFooter.vue'
import IHeader from '../../components/IHeader.vue'
import MediaList from '../../components/MediaList.vue'
export default {
  name: 'IMedia',
  components: { IHeader, IBreadcrumb, IFooter, MediaList },
  async asyncData({ store, route }) {
    await store.dispatch('fetchMedia')
  },
}
</script>

<style lang="scss"></style>
