<template>
  <div>
    <main-layout>
      <i-breadcrumb>
        <a-breadcrumb-item>
          <router-link to="/"> {{ $t('main') }}</router-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item>{{ $t('aboutFond') }}</a-breadcrumb-item>
        <a-breadcrumb-item>{{ $t('chairman') }}</a-breadcrumb-item>
      </i-breadcrumb>

      <img :src="single.image" class="page-avatar" />

      <div class="page-content min-height">
        {{ itemContent.content }}
      </div>
      <div>
        <h2 class="section-title">{{ $t('exChairman') }}</h2>
        <div class="chairmans">
          <router-link
            v-for="item in others"
            :key="item.id"
            :to="`/about/chairman/${item.id}`"
          >
            <div class="chairman">
              <img :src="item.image" class="chairman__avatar" alt="" />
              <p class="chairman__name">{{ getItem(item).name }}</p>
              <div class="chairman__date">
                <span>{{ item.year_reign }}</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </main-layout>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import IBreadcrumb from '@/components/IBreadcrumb.vue'
import MainLayout from '@/layouts/MainLayout.vue'
export default {
  name: 'AboutChairman',
  components: { MainLayout, IBreadcrumb },
  async asyncData({ store, params }) {
    await store.dispatch('fetchFrdkChairmans')
  },
  computed: {
    ...mapState(['chairmans', 'chairman']),
    single() {
      return this.chairmans[0] ? this.chairmans[0] : {}
    },
    others() {
      return this.chairmans.filter((i) => i.id !== this.single.id) || []
    },
    itemContent() {
      if (!this.single.translations) return {}
      return this.single.translations[Object.keys(this.single.translations)[0]]
    },
  },
  methods: {
    getItem(item) {
      if (!item.translations) return {}
      return item.translations[Object.keys(item.translations)[0]]
    },
  },
}
</script>

<style lang="scss">
.chairmans {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 30px;
}
.min-height {
  height: 450px;
}
.chairman {
  text-align: center;
  &__avatar {
    border-radius: 50%;
    height: 186px;
    width: 186px;
    object-fit: cover;
  }

  &__name {
    font-weight: 500;
    font-size: 20px;
    line-height: 155.7%;
    color: #000000;
    margin: 26px 0 15px;
  }

  &__date {
    font-weight: 300;
    font-size: 20px;
    line-height: 155.7%;
    color: #000000;
  }
}
</style>
