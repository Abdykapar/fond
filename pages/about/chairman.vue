<template>
  <div>
    <main-layout>
      <i-breadcrumb>
        <a-breadcrumb-item>
          <router-link to="/"> Главная</router-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item>О ФРДК «Ыйман»</a-breadcrumb-item>
        <a-breadcrumb-item>Председатель правления</a-breadcrumb-item>
      </i-breadcrumb>

      <img :src="single.image" class="page-avatar" />

      <div class="page-content">
        {{ itemContent.content }}
      </div>
      <div>
        <h2 class="section-title">Экс Главы ФРДК “Ыйман”</h2>
        <div class="chairmans">
          <div v-for="item in others" :key="item.id" class="chairman">
            <img src="@/static/img/news.png" class="chairman__avatar" alt="" />
            <p class="chairman__name">Александр Македонский</p>
            <div class="chairman__date">
              <span>2008-2013</span>
            </div>
          </div>
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
  async asyncData({ store }) {
    await store.dispatch('fetchFrdkChairmans')
  },
  computed: {
    ...mapState(['chairmans']),
    single() {
      return this.chairmans[0] ? this.chairmans[0] : {}
    },
    others() {
      return this.chairmans.slice(0) || []
    },
    itemContent() {
      if (!this.single.translations) return {}
      return this.single.translations[Object.keys(this.single.translations)[0]]
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
