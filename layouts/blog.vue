<template>
  <div
    class="max-w-2xl mx-auto prose dark:prose-invert prose-p:text-slate-600 dark:prose-p:text-[#f2f2f0] prose-p:leading-loose prose-p:text-lg prose-headings:font-display dark:prose-headings:font-display prose-p:font-body dark:prose-p:font-body"
  >
    <slot />
  </div>
</template>

<style lang="postcss">
svg {
  @apply stroke-[#0d1bf0] dark:stroke-[#5686f7] fill-none max-w-full;

  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
  stroke-width: 3;
}
</style>
