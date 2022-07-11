<template>
  <div class="container">
    <h2 class="section-title">{{ $t('gallery') }}</h2>
    <div class="gallery">
      <template v-for="(img, index) in filteredImages">
        <div
          v-if="
            index === filteredImages.length - 1 && images.length > 5 && !showAll
          "
          :key="img.id"
          class="gallery__img__wrapper"
        >
          <img :src="img.image" class="gallery__img" />
          <button class="gallery__btn" @click="showAll = !showAll">
            <svg
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.625 20.625V9.375H24.375V20.625H35.625V24.375H24.375V35.625H20.625V24.375H9.375V20.625H20.625Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <img
          v-else
          :key="img.id + 'else'"
          :src="img.image"
          class="gallery__img"
        />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsGallery',
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      showAll: false,
    }
  },
  computed: {
    filteredImages() {
      if (this.showAll) return this.images
      return this.images.slice(0, 5)
    },
  },
}
</script>

<style lang="scss">
.gallery {
  display: grid;
  grid-template-columns: repeat(5, 212px);
  gap: 9px;

  &__img {
    height: 170px;
    width: 100%;
    object-fit: cover;

    &__wrapper {
      position: relative;

      &::after {
        position: absolute;
        content: '';
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.53);
        z-index: 1;
      }
    }
  }

  &__btn {
    border: none;
    outline: none;
    background: inherit;
    position: absolute;
    top: 50%;
    z-index: 2;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
}
</style>
