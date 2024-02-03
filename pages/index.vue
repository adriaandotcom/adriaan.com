<template>
  <div>
    <div class="max-w-lg mx-auto px-4 mt-24">
      <NuxtLink
        to="/sleep"
        class="group flex flex-col p-6 sm:p-8 items-start border-2 dark:border-transparent rounded-bl-3xl bg-[#f9f9f9] dark:bg-[#353535]"
      >
        <PolyphasicSleep class="h-24 stroke-5 group-hover:stroke-7" />
        <p class="mt-2">
          Doing experiments to find the optimal productivity by changing
          sleeping schedules.
        </p>
        <p
          class="self-end mt-6 transition-transform -translate-x-1 group-hover:translate-x-1"
        >
          <StartHere class="h-6 stroke-4" />
        </p>
      </NuxtLink>
    </div>

    <!-- <ul>
      <li v-for="page in pages" :key="page.route">
        <NuxtLink :to="page.path">{{ page.meta?.title || page.name }}</NuxtLink>
      </li>
    </ul> -->
  </div>
</template>

<script setup>
import StartHere from "~/components/StartHere";
import PolyphasicSleep from "~/components/sleep/PolyphasicSleep";

// const router = useRouter();
// const pages = router.getRoutes().filter((page) => page.path !== "/");

const title = "Adriaan.com";
const description =
  "I had a chance to buy this domain name. Now I need to live up to it.";

definePageMeta({
  title: "Adriaan.com",
});

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  // ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
</script>
