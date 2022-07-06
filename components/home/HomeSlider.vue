<template>
  <div>
    <a-carousel :after-change="onChange">
      <div class="slide">
        <img class="slide__img" src="/img/slide.png" title="" />
        <div class="slide__content">
          <p class="slide__text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
    </a-carousel>
  </div>
</template>

<script>
export default {
  name: 'HomeSlider',
  methods: {
    onChange() {
      console.log('change')
    },
  },
}
</script>

<style lang="scss" scoped>
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  line-height: 160px;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>
