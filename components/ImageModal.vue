<template>
  <div>
    <img :src="img" class="gallery__img" @click="onShowModal" />
    <client-only>
      <b-modal v-model="isImageModalActive">
        <img :src="img" />
      </b-modal>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'ImageModal',
  props: {
    img: String,
  },
  data() {
    return {
      isImageModalActive: false,
    }
  },
  methods: {
    onShowModal() {
      console.log('show modal')
      this.isImageModalActive = true
    },
  },
}
</script>

<style></style>
