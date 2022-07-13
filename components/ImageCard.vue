<template>
  <div>
    <div
      v-if="withoutLink"
      class="image-card"
      :style="`background-image: url('${item.image}')`"
    >
      <div v-if="withContent" class="image-card__content">
        <p class="image-card__text">
          {{ itemContent.title }}
        </p>
      </div>
    </div>
    <router-link v-else :to="`/gallery/${item.id}`">
      <div class="image-card" :style="`background-image: url('${item.image}')`">
        <div v-if="withContent" class="image-card__content">
          <p class="image-card__text">
            {{ itemContent.title }}
          </p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ImageCard',
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    withContent: {
      type: Boolean,
      default: true,
    },
    withoutLink: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    itemContent() {
      if (!this.item.translations) return {}
      return this.item.translations[this.$i18n.localeProperties.code] || {}
    },
  },
}
</script>

<style lang="scss">
.image-card {
  max-width: 346px;
  height: 418px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: all 300ms ease-in-out;

  &:hover {
    transform: scale(1.025);
  }

  &__content {
    height: 257px;
    background: linear-gradient(180deg, rgba(0, 100, 176, 0) 0%, #0064b0 100%);
    padding: 25px 20px;
    display: grid;
    align-items: flex-end;
  }

  &__text {
    font-weight: 700;
    font-size: 18.1607px;
    line-height: 23px;
    text-align: center;
    color: #ffffff;
  }
}
</style>
