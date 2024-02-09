<template>
  <div class="mt-20 max-w-xl mx-auto flex flex-col items-center justify-center">
    <h2 class="text-5xl font-display">
      Oops, that's
      {{ error?.statusCode ? `a ${error.statusCode}` : "an error" }}
    </h2>

    <p class="mt-6">Maybe it's best to <a href="/">go home</a>.</p>

    <p class="mt-6">I'm truly sorry,</p>
    <Adriaan class="mt-4 w-[120px] stroke-2 fill-none" />
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";
import Adriaan from "./components/Adriaan.vue";

useHead({
  bodyAttrs: {
    class:
      "bg-[#f2f2f0] dark:bg-[#242424] text-slate-600 dark:text-[#f2f2f0] flex flex-col",
  },
});

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<style lang="postcss" scoped>
svg {
  @apply stroke-primary-light dark:stroke-primary-dark fill-none max-w-full stroke-3;

  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}

p {
  @apply text-slate-600 dark:text-[#f2f2f0] leading-loose text-lg font-body dark:font-body
  tracking-wide;
}

a {
  @apply text-primary-light dark:text-primary-dark underline;
}
</style>
