<template>
  <div>
    <i-header />
    <i-breadcrumb>
      <a-breadcrumb-item>
        <router-link to="/"> Главная </router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item>Новости</a-breadcrumb-item>
    </i-breadcrumb>
    <div class="grid container">
      <i-card v-for="item in news" :key="item.id" :item="item" />
    </div>
    <i-footer />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import IBreadcrumb from '../../components/IBreadcrumb.vue'
import ICard from '../../components/ICard.vue'
import IFooter from '../../components/IFooter.vue'
import IHeader from '../../components/IHeader.vue'
export default {
  name: 'INews',
  components: { IHeader, IBreadcrumb, IFooter, ICard },
  //   async asyncData({ store }) {
  //     await store.dispatch('fetchNews')
  //   },
  created() {
    this.fetchNews()
  },
  methods: {
    ...mapActions(['fetchNews']),
  },
  computed: {
    ...mapState(['news']),
  },
}
</script>

<style lang="scss"></style>
