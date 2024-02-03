<template>
  <BlogLayout>
    <slot />
  </BlogLayout>
</template>

<script setup>
import BlogLayout from "~/layouts/blog.vue";
</script>

<style lang="postcss">
svg {
  @apply stroke-[#0d1bf0] dark:stroke-[#5686f7] fill-none max-w-full stroke-5;

  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
</style>
