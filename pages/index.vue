<template>
  <div>
    <h1>Pages List</h1>
    <ul>
      <li v-for="page in pages" :key="page.route">
        <NuxtLink :to="page.path">{{ page.meta?.title || page.name }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const router = useRouter();
const pages = router.getRoutes().filter((page) => page.path !== "/");
</script>
