<template>
  <div>
    <h1>Sleeepp index</h1>
  </div>
</template>

<script setup>
const title = "Polyphasic Sleep";
const description =
  "I'm about to embark on an intriguing and somewhat unconventional adventure, one that delves into the realms of sleep and productivity. For the next month, I'm going to experiment with a Polyphasic Sleep schedule, specifically a pattern of two 4-hour sleep sessions. My sleep windows are set from 3 AM to 7 AM and then again from 2 PM to 6 PM. I'm excited to share this journey with you, starting with this blog post where I'll explain why I've decided to take this leap.";

definePageMeta({
  title: "Polyphasic Sleep",
  layout: "sleep",
});

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
</script>
