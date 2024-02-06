<template>
  <div>
    <div class="max-w-lg mx-auto px-4 mt-24 mb-10 flex flex-col">
      <NuxtLink
        to="/sleep/why-polyphasic-sleep"
        class="group flex flex-col p-6 sm:p-8 items-start border-2 dark:border-transparent rounded-bl-3xl bg-[#f9f9f9] dark:bg-[#353535]"
      >
        <PolyphasicSleep class="h-24 stroke-5 group-hover:stroke-7" />
        <p class="mt-2">
          As a developer, the difference between being fully productive and just
          somewhat productive is like comparing racing on a bicycle to moving
          along with a kick scooter.
        </p>
        <p
          class="self-end mt-6 transition-transform -translate-x-1 group-hover:translate-x-1"
        >
          <StartHere class="h-6 stroke-4" />
        </p>
      </NuxtLink>

      <NuxtLink
        to="https://x.com/intent/user?screen_name=adriaandotcom"
        target="_blank"
        class="mx-auto mt-4 group"
      >
        <XComHandle class="w-56 stroke-3" />
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
import XComHandle from "~/components/XComHandle";
import PolyphasicSleep from "~/components/sleep/PolyphasicSleep";

defineOgImageComponent("BlogPost", {
  title: "Is this thing on?",
});

// const router = useRouter();
// const pages = router.getRoutes().filter((page) => page.path !== "/");

const title = "@adriaandotcom";
const description =
  "I had a chance to buy this domain name. Now I need to live up to it.";

definePageMeta({
  title: "@adriaandotcom",
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
