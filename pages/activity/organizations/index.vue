<template>
  <div>
    <main-layout>
      <i-breadcrumb>
        <a-breadcrumb-item>{{ $t('activity') }}</a-breadcrumb-item>
        <a-breadcrumb-item>{{ $t('internationalCoop') }}</a-breadcrumb-item>
      </i-breadcrumb>

      <div class="org__content container">
        <h2 class="section-title">{{ $t('orgs') }}</h2>
        <div class="logos">
          <router-link
            v-for="item in orgs"
            :key="item.id"
            :to="`/activity/organizations/${item.id}`"
          >
            <div class="logo">
              <img :src="item.image" class="logo__img" />
              <h3 class="logo__title">{{ getContent(item) }}</h3>
            </div>
          </router-link>
        </div>
      </div>
    </main-layout>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MainLayout from '@/layouts/MainLayout.vue'
import IBreadcrumb from '@/components/IBreadcrumb.vue'
export default {
  name: 'IOrganizations',
  components: { MainLayout, IBreadcrumb },
  async asyncData({ store }) {
    await store.dispatch('fetchActivityOrgs')
  },
  computed: {
    ...mapState(['orgs']),
  },
  methods: {
    getContent(item) {
      if (!item.translations) return ''
      return item.translations[Object.keys(item.translations)[0]]
        ? item.translations[Object.keys(item.translations)[0]].title
        : ''
    },
  },
}
</script>

<style lang="scss">
.org__content {
  text-align: center;
}

.logos {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 30px;
}

.logo {
  &__img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
    object-fit: cover;
  }
  &__title {
    font-weight: 500;
    font-size: 20px;
    line-height: 155.7%;
    color: #000000;
    margin-top: 26px;
  }
}
</style>
