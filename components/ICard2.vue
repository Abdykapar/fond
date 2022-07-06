<template>
  <div class="i-card2">
    <a :href="item.link" class="size-2 primary-color">
      {{ item.link }}
    </a>
    <p class="size-3 gray-color">
      {{ itemContent.content }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ICard2',
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    itemContent() {
      if (!this.item.translations) return {}
      return this.item.translations[Object.keys(this.item.translations)[0]]
    },
  },
}
</script>

<style lang="scss">
.i-card2 {
  display: grid;
  row-gap: 10px;
}
</style>
