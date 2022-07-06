<template>
  <div class="container">
    <div class="b-wrapper">
      <a-breadcrumb separator=">">
        <slot />
      </a-breadcrumb>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IBreadcrumb',
}
</script>
