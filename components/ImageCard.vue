<template>
  <router-link to="#">
    <div class="image-card" :style="`background-image: url('/img/news.png')`">
      <div class="image-card__content">
        <p class="image-card__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
        </p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'ImageCard',
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
