<template>
  <div class="blog">
    <slot />
  </div>
</template>

<style lang="postcss">
.blog {
  /* general */
  @apply max-w-xl mx-auto px-4 my-2 md:my-10 prose prose-lg dark:prose-invert;

  /* prose p */
  @apply prose-p:text-slate-600 dark:prose-p:text-[#f2f2f0] prose-p:leading-loose prose-p:text-lg prose-p:font-body dark:prose-p:font-body
  prose-p:tracking-wide;

  /* prose headings */
  @apply prose-headings:font-display dark:prose-headings:font-display prose-headings:leading-relaxed;

  /* prose first paragraph */
  @apply first-of-type:prose-p:text-lg md:first-of-type:prose-p:text-2xl first-of-type:prose-p:leading-loose md:first-of-type:prose-p:leading-relaxed first-of-type:prose-p:text-[#0d1bf0] dark:first-of-type:prose-p:text-[#5686f7];
}
</style>
