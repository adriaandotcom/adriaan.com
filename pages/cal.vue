<template>
  <div class="mb-16">
    <h1 class="!mb-0">Subscribe to calendar:</h1>
    <p class="!mt-2">{{ calendarUrl }}</p>
    <p class="!mt-2">Pick your calendar app:</p>

    <div class="flex flex-wrap">
      <a
        @click="setCalendarType('google')"
        class="flex items-center min-w-40 text-center p-4 pb-3 mb-4 md:mb-0 md:mr-4 rounded-lg border-2 border-current justify-center md:flex-col cursor-pointer"
      >
        <GoogleCalendar class="h-10 w-10 md:h-16 md:w-16" />
        <p class="md:mt-2 not-prose">Google</p>
      </a>
      <a
        @click="setCalendarType('apple')"
        class="flex items-center min-w-40 text-center p-4 pb-3 mb-4 md:mb-0 md:mr-4 rounded-lg border-2 border-current justify-center md:flex-col cursor-pointer"
      >
        <IosCalendar class="h-10 w-10 md:h-16 md:w-16" />
        <p class="md:mt-2 not-prose">Apple</p>
      </a>
      <a
        @click="setCalendarType('outlook')"
        class="flex items-center min-w-40 text-center p-4 pb-3 mb-4 md:mb-0 md:mr-4 rounded-lg border-2 border-current justify-center md:flex-col cursor-pointer"
      >
        <OutlookCalendar class="h-10 w-10 md:h-16 md:w-16" />
        <p class="md:mt-2 not-prose">Outlook</p>
      </a>
    </div>

    <div v-if="calendarType">
      <h2 id="instruction">
        Instructions for {{ calendarType }}
        {{ isMobile ? "(Mobile)" : "(Desktop)" }}
      </h2>
      <ol>
        <li
          v-for="step in isMobile
            ? instructions[calendarType].mobile
            : instructions[calendarType].desktop"
          :key="step"
          v-html="step"
        ></li>
      </ol>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from "vue";
import { useRoute } from "nuxt/app";
import GoogleCalendar from "../components/calendars/google.vue";
import IosCalendar from "../components/calendars/ios.vue";
import OutlookCalendar from "../components/calendars/outlook.vue";

definePageMeta({
  title: "Why I'm experimenting with Polyphasic Sleep",
  layout: "blog",
});

const calendarType = ref("");
const screenWidth = ref(0); // Default to 0, will update on client-side

const route = useRoute();
const defaultFileName = "cal";
const fileParam = ref(route.query.file || defaultFileName);

const calendarUrl = computed(
  () => `https://www.adriaan.com/${fileParam.value}.ics`
);

function setCalendarType(type) {
  calendarType.value = type;
  nextTick(() => {
    document.getElementById("instruction").scrollIntoView({
      behavior: "smooth",
    });
  });
}

const isMobile = computed(() => screenWidth.value <= 768);

const link = `<a href="${calendarUrl.value}" target="_blank">${calendarUrl.value}</a>`;

const instructions = {
  google: {
    desktop: [
      'Go to <a href="https://calendar.google.com/" target="_blank">Google Calendar</a>.',
      "On the left side, find 'Other calendars' and click on the plus (+) sign.",
      "Select 'From URL'.",
      "Enter the URL of the ICS file: " + link,
      "Click 'Add calendar'. The calendar will appear on the left side under 'Other calendars.'",
    ],
    mobile: [
      "Open the Google Calendar app.",
      "Tap the menu icon (three horizontal lines).",
      "Scroll down and select 'Settings'.",
      "Select 'Add account', then 'Other'.",
      "Enter the URL of the ICS file: " + link,
      "Tap 'Add calendar'.",
    ],
  },
  apple: {
    desktop: [
      "Open Calendar on your Apple device.",
      "Go to 'File' > 'New Calendar Subscription'.",
      "Enter the URL of the ICS file: " + link,
      "Click 'Subscribe'.",
      "Adjust the settings as preferred and click 'Ok'.",
    ],
    mobile: [
      "Open the 'Settings' app.",
      "Scroll down and select 'Calendar'.",
      "Tap 'Accounts', then 'Add Account'.",
      "Choose 'Other', then 'Add Subscribed Calendar'.",
      "Enter the URL of the ICS file: " + link,
      "Tap 'Next'.",
    ],
  },
  outlook: {
    desktop: [
      'Go to <a href="https://outlook.com/" target="_blank">outlook.com</a>.',
      "At the bottom of the page, click on the calendar icon.",
      "In the menu, click 'Add Calendar' and select 'Subscribe from web'.",
      "Enter the URL of the ICS file: " + link,
      "Click 'Import'.",
    ],
    mobile: [
      "Open the Outlook app.",
      "Go to the calendar tab.",
      "Tap the settings gear icon.",
      "Select 'Add Calendar' and then 'Add an account'.",
      "Enter the URL of the ICS file: " + link,
      "Complete the setup.",
    ],
  },
};

onMounted(() => {
  screenWidth.value = window.innerWidth;
  window.addEventListener("resize", () => {
    screenWidth.value = window.innerWidth;
  });
});
</script>
