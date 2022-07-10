<template>
  <div>
    <main-layout>
      <i-breadcrumb>
        <a-breadcrumb-item>
          <router-link to="/"> Главная </router-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item>Благотворительность</a-breadcrumb-item>
      </i-breadcrumb>

      <div class="single__content">
        <img src="@/static/img/slide.png" class="single__img" />
        <h2 class="single__title">Название Организации</h2>
        <p class="single__p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </main-layout>
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue'
import IBreadcrumb from '@/components/IBreadcrumb.vue'
export default {
  name: 'ICharity',
  components: { MainLayout, IBreadcrumb },
}
</script>

<style lang="scss"></style>
