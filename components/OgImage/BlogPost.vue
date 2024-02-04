<template>
  <div
    class="bg-[#f2f2f0] text-[#3a3a38] h-full w-full p-4 pt-2 flex flex-col items-center justify-center"
    style="font-family: 'Georgia', serif"
  >
    <PolyphasicSleep
      fill="none"
      stroke="#0d1bf0"
      stroke-width="6"
      :width="928 / 2.3"
      :height="256 / 2.3"
    />

    <div class="text-4xl my-6 p-4" style="font-family: 'Georgia', serif">
      {{ description }}
    </div>

    <Phases
      class=""
      fill="none"
      stroke="#0d1bf0"
      stroke-width="3"
      :width="969 / 1.2"
      :height="255 / 1.2"
    />
  </div>
</template>

<script setup>
import PolyphasicSleep from "~/components/sleep/PolyphasicSleep";
import Phases from "~/components/sleep/Phases";

const { title = "Test", description } = defineProps(["title", "description"]);
</script>

<style lang="postcss" scoped>
svg {
  @apply stroke-[#0d1bf0] dark:stroke-[#5686f7] fill-none max-w-full stroke-3;

  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
</style>
