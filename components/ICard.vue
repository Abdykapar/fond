<template>
  <nuxt-link :to="localePath(`${getLink}`)">
    <div class="i-card">
      <div class="i-card__img-wrapper">
        <img class="i-card__img" :src="item.image" alt="" />
      </div>
      <div class="i-card__content">
        <router-link :to="localePath(`${getLink}`)">
          <h3 class="i-card__title">
            {{ itemContent.title }}
          </h3>
        </router-link>

        <p class="i-card__text" v-html="itemContent.content"></p>
        <span class="i-card__date">{{ format(item.updated_at) }}</span>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import moment from 'moment'
export default {
  name: 'ICard',
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    link: {
      type: String,
      default: '',
    },
  },
  computed: {
    itemContent() {
      if (!this.item.translations) return {}
      return this.item.translations[this.$i18n.localeProperties.code] || {}
    },
    getLink() {
      return this.link ? this.link : `/news/${this.item.id}`
    },
  },
  methods: {
    format(date) {
      return moment(date).format('DD/MM/YYYY')
    },
  },
}
</script>

<style></style>
