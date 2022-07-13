<template>
  <div class="i-card">
    <img class="i-card__img" :src="item.image" alt="" />
    <div class="i-card__content">
      <router-link :to="`${getLink}${item.id}`">
        <h3 class="i-card__title">
          {{ itemContent.title }}
        </h3>
      </router-link>
      <p class="i-card__text">
        {{ itemContent.content | truncate(300, '...') }}
      </p>
      <span class="i-card__date">{{ format(item.updated_at) }}</span>
    </div>
  </div>
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
      return this.link ? this.link : '/news/'
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
