<template>
  <div>
    <IHeader />
    <div class="container mt">
      <slot />
    </div>
    <IFooter />
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
}
</script>

<style>
.mt {
  /* padding-top: 282px; */
}
</style>
