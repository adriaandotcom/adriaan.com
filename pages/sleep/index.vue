<template>
  <div>
    <WhyPolyphasicSleep
      class="h-32 stroke-3"
      aria-hidden="true"
      aria-describedby="title"
    />
    <h1 id="title" class="sr-only">Polyphasic Sleep</h1>

    <p class="!mt-4">
      I&#39;m about to embark on an intriguing and somewhat unconventional
      adventure, one that delves into the realms of sleep and productivity. For
      the next month, I&#39;m going to experiment with a Polyphasic Sleep
      schedule, specifically a pattern of two 4-hour sleep sessions. My sleep
      windows are set from 3 AM to 7 AM and then again from 2 PM to 6 PM.
      I&#39;m excited to share this journey with you, starting with this blog
      post where I&#39;ll explain why I&#39;ve decided to take this leap.
    </p>
    <h2>The Why Behind My Polyphasic Sleep Experiment</h2>
    <p>
      The concept of Polyphasic Sleep has always fascinated me. Renowned figures
      like Leonardo da Vinci and Nikola Tesla have been said to follow similar
      patterns, which piqued my interest. As someone who loves to push
      boundaries, be it in technology or personal life, I find this experiment
      not just a challenge but a potential door to enhanced productivity and
      creativity.
    </p>

    <Phases class="mt-10 md:-ml-[10%] md:w-[120%] stroke-2 max-w-none" />

    <h3>1. <strong>Enhanced Productivity and Time Management</strong></h3>

    <p>
      As a developer and entrepreneur, I&#39;m constantly juggling multiple
      projects. With Simple Analytics and UniHosted, my days are often packed
      with decision-making, coding, and strategic planning. Polyphasic sleep, by
      splitting my sleep into two segments, might offer more waking hours that
      align with my most productive times.
    </p>

    <h3>2. <strong>Personal Growth and Exploration</strong></h3>
    <p>
      I&#39;m a firm believer in self-experimentation as a way to personal
      growth. This experiment is also a testament to my philosophy of not always
      conforming to conventional patterns. It&#39;s about exploring the limits
      and capabilities of my body and mind.
    </p>

    <Woman class="float-right stroke-3 max-w-full w-40 md:w-72 m-4 md:-mr-32" />

    <h3>3. <strong>Lifestyle Integration</strong></h3>
    <p>
      As someone who loves to travel and sometimes lives as a digital nomad,
      adapting to different time zones can be challenging. I&#39;m curious to
      see if Polyphasic sleeping could make these transitions smoother.
    </p>
    <h2>The Plan</h2>
    <p>
      I&#39;ve meticulously planned this experiment to ensure it doesn&#39;t
      hamper my health or my professional commitments. I&#39;ll be closely
      monitoring my physical and mental state throughout the month. As a tech
      enthusiast, I&#39;ll also use various apps and gadgets to track my sleep
      quality and patterns.
    </p>

    <Clock class="mt-10 w-32 -ml-10 mr-4 float-left stroke-2 max-w-none" />

    <h2>Expectations vs. Reality</h2>
    <p>
      I enter this experiment with an open mind. While I&#39;m hopeful about the
      potential benefits, I&#39;m also prepared for the possibility that this
      might not be suitable for me. And that&#39;s okay. The primary goal here
      is to learn and explore.
    </p>
    <h2>Stay Tuned!</h2>
    <p>
      This is just the beginning. I&#39;ll be documenting my journey through
      regular blog updates, sharing my experiences, challenges, and any
      interesting insights I gain along the way. Whether it turns out to be a
      life-changing experience or a one-time adventure, I&#39;m excited to take
      you all with me on this journey.
    </p>
    <p>
      To all my fellow entrepreneurs, developers, and dreamers out there –
      let&#39;s keep pushing the boundaries, one experiment at a time!
    </p>
  </div>
</template>

<script setup>
import PolyphasicSleep from "~/components/sleep/PolyphasicSleep.vue";
import Woman from "~/components/sleep/Woman.vue";
import Phases from "~/components/sleep/Phases.vue";
import WhyPolyphasicSleep from "~/components/sleep/WhyPolyphasicSleep.vue";
import Clock from "~/components/sleep/Clock.vue";

const title = "Why I'm experimenting with Polyphasic Sleep";
const description =
  "I'm about to embark on an intriguing and somewhat unconventional adventure, one that delves into the realms of sleep and productivity. For the next month, I'm going to experiment with a Polyphasic Sleep schedule, specifically a pattern of two 4-hour sleep sessions. My sleep windows are set from 3 AM to 7 AM and then again from 2 PM to 6 PM. I'm excited to share this journey with you, starting with this blog post where I'll explain why I've decided to take this leap.";

defineOgImageComponent("BlogPost", {
  description: "Let's explain why I'm experimenting with Polyphasic Sleep.",
});

definePageMeta({
  title: "Why I'm experimenting with Polyphasic Sleep",
  layout: "sleep",
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
