<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: "bg-[#f2f2f0] text-[#3a3a38] dark:bg-[#242424] text-[#f2f2f0]",
  },
  meta: [{ name: "sa-verify", content: "mskadriaancom5" }],
});

useSchemaOrg([
  definePerson({
    name: "Adriaan",
    sameAs: [
      "https://github.com/adriaandotcom",
      "https://twitter.com/adriaandotcom",
      "https://x.com/adriaandotcom",
    ],
  }),
  defineWebPage({
    name: "Adriaan.com",
  }),
  defineWebSite({
    name: "Adriaan.com",
  }),
]);
</script>

<style>
a,
a p {
  @apply text-primary-light dark:text-primary-dark;
}
</style>
