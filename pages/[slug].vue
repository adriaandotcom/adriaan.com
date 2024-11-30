<script setup>
import { useRoute } from "vue-router";
import Adriaan from "~/components/Adriaan.vue";
import {
  EnvelopeIcon,
  PaperAirplaneIcon,
  PhoneIcon,
} from "@heroicons/vue/24/outline";

const route = useRoute();

const slug = route.params.slug;

if (slug.length !== 5) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
    fatal: true,
  });
}

definePageMeta({
  title: "Lost and found",
});

const products = [
  { code: "khnds", product: "Battletron Controller #2" },
  { code: "xwsna", product: "Battletron Controller #1" },
  { code: "yztfx", product: "Aranet4 CO2 Meter" },
  { code: "hsmtt", product: "Apple Lightning to USB-C Cable 1m" },
  { code: "ajzxp", product: "Apple USB-C to Lightning Cable 1m" },
  { code: "ffnxm", product: "Apple USB-C to Lightning Cable 2m" },
  { code: "ymdmn", product: "ALDI Bicycle Front Light" },
  { code: "dsfap", product: "ALDI Bicycle Rear Light" },
  { code: "jhwfx", product: "Apple USB-C Cable 1m" },
  { code: "spjmm", product: "Apple USB-C 20W Charger" },
  { code: "wjstt", product: "Apple USB-C 20W Charger" },
  { code: "jjrdh", product: "USB-C Cable 2m (240W)" },
  { code: "dxsry", product: "Apple 70W Charger USB-C" },
  { code: "fwtzy", product: "Sunglasses Case" },
  { code: "mpnnh", product: "Moustache wax" },
  { code: "txrkk", product: "Moustache wax" },
  { code: "znmbx", product: "Moustache wax" },
  { code: "bknaf", product: "Remarkable 2" },
  { code: "zytxb", product: "Remarkable 2" },
  { code: "stnba", product: "Philips Screen" },
  { code: "pxmyf", product: "Philips Screen" },
  { code: "hxbdw", product: "Anker USB-A to Lightning Cable" },
  { code: "tfnky", product: "Generic Cable 1m" },
  { code: "kajhr", product: "Apple Charger" },
  { code: "djkas", product: "Logitech Mouse MX Ergo" },
  { code: "mmaps", product: "Rains Bag" },
  { code: "wmjay", product: "Bose Headphones" },
  { code: "xazjz", product: "MacBook M1 Pro 14-Inch 2021" },
  { code: "drxmj", product: "MacBook M1 Pro 14-Inch 2021" },
  { code: "wdnnx", product: "Apple 60W Charger" },
  { code: "nrtnk", product: "Apple iPhone 12 RED" },
  { code: "bwbah", product: "Apple Keyboard" },
  { code: "pwmfz", product: "Lightning to USB-A Cable" },
];

const product = products.find((p) => p.code === slug)?.product;

const message = product
  ? `He Adriaan, I scanned your QR code, adriaan.com/${slug}, and found ${product} which I want to return to you.`
  : `He Adriaan, I scanned your QR code, adriaan.com/${slug}, and want to return it to you.`;

const subject = product ? `Found ${product}` : `Found ${slug}`;
const body = product
  ? `He Adriaan,\n\nI found ${product} which I want to return to you.`
  : `He Adriaan,\n\nI found your lost item and want to return it to you.`;
</script>

<template>
  <div
    class="max-w-xl mx-auto px-4 mt-24 mb-10 flex flex-col text-slate-700 text-center"
  >
    <h1
      class="text-5xl font-display text-slate-800 dark:text-slate-200"
      v-if="product"
    >
      You found my {{ product }}!
    </h1>
    <h1 class="text-5xl font-display" v-else>Lost and found</h1>

    <p class="mt-8">
      If you found my
      <span class="font-bold" v-if="product">{{ product }}</span>
      <span v-else>this</span> or simply scanned the QR code out of curiosity,
      thanks for taking the time—I’m glad you’re here.
    </p>

    <p class="mt-6 font-bold">Choose one of the options below to contact me:</p>

    <div class="mt-6 flex justify-center gap-4">
      <a
        :href="`https://t.me/adriaandotcom?text=${encodeURIComponent(message)}`"
        target="_blank"
        class="w-32 hover:bg-blue-700 dark:bg-blue-800 hover:text-blue-200 dark:text-blue-200 bg-blue-200 text-blue-700 rounded-md py-2 flex flex-col justify-center items-center"
      >
        <PaperAirplaneIcon class="mt-2 w-12 h-12 stroke-1 stroke-current" />
        <p class="text-current">Telegram</p>
      </a>

      <a
        :href="`https://wa.me/31640061007?text=${encodeURIComponent(message)}`"
        target="_blank"
        class="w-32 hover:bg-green-800 dark:bg-green-900 hover:text-green-200 dark:text-green-200 bg-green-200 text-green-800 rounded-md py-2 flex flex-col justify-center items-center"
      >
        <PhoneIcon class="mt-2 w-12 h-12 stroke-1 stroke-current" />
        <p class="text-current">WhatsApp</p>
      </a>

      <a
        :href="`mailto:lostandfound@adriaan.com?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`"
        class="w-32 hover:bg-slate-800 dark:bg-slate-700 hover:text-slate-200 dark:text-slate-200 bg-slate-200 text-slate-800 rounded-md py-2 flex flex-col justify-center items-center"
      >
        <EnvelopeIcon class="mt-2 w-12 h-12 stroke-1 stroke-current" />
        <p class="text-current">Email</p>
      </a>
    </div>

    <p class="mt-8">Thanks,</p>
    <Adriaan class="mt-2 mx-auto w-[120px] stroke-2 fill-none" />
  </div>
</template>
