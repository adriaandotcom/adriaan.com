<template>
  <div>
    <slot />
  </div>
</template>

<style lang="postcss">
svg {
  @apply stroke-[#0d1bf0] dark:stroke-[#5686f7] fill-none max-w-full stroke-3;

  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}

p {
  @apply text-slate-600 dark:text-[#f2f2f0] leading-loose text-lg font-body dark:font-body
  tracking-wide;
}
</style>
