<template>
  <div>
    <main-layout>
      <i-breadcrumb>
        <a-breadcrumb-item>Деятельность</a-breadcrumb-item>
        <a-breadcrumb-item>Международное сотрудничество</a-breadcrumb-item>
      </i-breadcrumb>

      <div class="org__content">
        <h2 class="section-title">Организации</h2>
        <div class="logos">
          <div v-for="item in 8" :key="item" class="logo">
            <img src="@/static/img/news.png" class="logo__img" />
            <h3 class="logo__title">Название Организации</h3>
          </div>
        </div>
      </div>
    </main-layout>
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue'
import IBreadcrumb from '@/components/IBreadcrumb.vue'
export default {
  name: 'IOrganizations',
  components: { MainLayout, IBreadcrumb },
}
</script>

<style lang="scss">
.org__content {
  text-align: center;
}

.logos {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 30px;
}

.logo {
  &__img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
    object-fit: cover;
  }
  &__title {
    font-weight: 500;
    font-size: 20px;
    line-height: 155.7%;
    color: #000000;
    margin-top: 26px;
  }
}
</style>
