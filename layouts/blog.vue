<template>
  <div class="blog">
    <slot />

    <Cheers class="h-24 stroke-3 stroke-slate-800 dark:stroke-white" />

    <NuxtLink
      to="https://x.com/intent/user?screen_name=adriaandotcom"
      target="_blank"
      class="mt-5 block group"
    >
      <XComHandle class="w-56 stroke-3" />
    </NuxtLink>
  </div>
</template>

<script setup>
import Cheers from "~/components/Cheers.vue";

defineOgImageComponent("BlogPost");
</script>

<style lang="postcss">
.blog {
  /* general */
  @apply max-w-xl mx-auto px-4 my-4 md:my-10 prose prose-lg dark:prose-invert;

  /* prose p */
  @apply prose-p:text-slate-600 dark:prose-p:text-[#f2f2f0] prose-p:leading-loose prose-p:text-lg prose-p:font-body dark:prose-p:font-body
  prose-p:tracking-wide;

  /* prose headings */
  @apply prose-headings:font-display dark:prose-headings:font-display prose-headings:leading-relaxed;

  /* prose first paragraph */
  @apply first-of-type:prose-p:text-lg md:first-of-type:prose-p:text-2xl first-of-type:prose-p:leading-loose md:first-of-type:prose-p:leading-relaxed first-of-type:prose-p:text-[#0d1bf0] dark:first-of-type:prose-p:text-[#5686f7];
}
</style>
