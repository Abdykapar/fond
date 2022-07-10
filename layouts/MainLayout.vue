<template>
  <div>
    <IHeader />
    <div class="container">
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

<style></style>
