<template>
  <div>
    <WhyPolyphasicSleep
      class="h-32 stroke-3"
      aria-hidden="true"
      aria-describedby="title"
    />
    <h1 id="title" class="sr-only">Polyphasic Sleep</h1>

    <p>
      Boosting productivity is a constant challenge for me. As a developer, the
      difference between being fully productive and just somewhat productive is
      like comparing racing on a bicycle to moving along with a kick scooter.
      That&#39;s how I got interested in polyphasic sleep and going to do my own
      schedule for one month.
    </p>

    <ScooterVsBike class="mt-6 md:-ml-[10%] md:w-[120%] stroke-3 max-w-none" />

    <h3 id="what-is-polyphasic-sleep-">What is polyphasic sleep?</h3>
    <p>
      Poly originates from the Ancient Greek word
      <a
        href="https://en.wiktionary.org/wiki/%CF%80%CE%BF%CE%BB%CF%8D%CF%82#Ancient_Greek"
        title="πολύς"
        target="_blank"
        >πολύς</a
      >
      (polús), meaning &quot;many&quot; or &quot;much.&quot; This isn&#39;t new
      information for most. When it comes to polyphasic sleep, you might infer
      it involves multiple phases of sleep. And that&#39;s exactly right.
    </p>
    <p>
      Instead of sleeping for one long stretch of hours, it involves sleeping in
      several phases throughout the day. While this approach seems flexible, the
      standard polyphasic sleep schedules are quite strict. They often use a
      24-hour clock to lay out the schedule. Below are some examples:
    </p>

    <Phases class="mt-6 md:-ml-[10%] md:w-[120%] stroke-[2.3px] max-w-none" />

    <p>
      There are enough studies about sleep, and if you&#39;re into that, you
      might want to listen to the podcast of Matthew Walker, the author of the
      book Why we sleep. He shows multiple studies suggesting that polyphasic
      sleep doesn&#39;t offer the promised benefits. Instead, it often leads to
      disrupted sleep stages, impaired cognitive function, mood decline, and
      adverse effects on health, including blood sugar and cardiovascular
      issues.
    </p>
    <p>
      Great, so health wise it&#39;s not a smart move. Although, I think, that
      mostly links to the many phases most polyphasic sleeper schedule and in
      total they&#39;er usually a lot shorter than the 8 hours that we all seem
      to need. My try will be getting those 8 hours of sleep at least while
      trying out polyphasic sleep.
    </p>
    <h3 id="productive-hours">Productive hours</h3>
    <p>
      One thing I really don&#39;t like is only getting productive later in the
      day. I often begin my day at a coffee shop, working without distractions.
      After lunch, I usually experience a slump in energy. I do get a bit of
      higher productivity back by late afternoon, but the afternoon is normally
      good enough for lighter tasks. Then, it&#39;s time for social activities,
      like dinner or hanging out with friends. If I start working on my laptop
      around 9pm, I lose track of time and can work until 2am. However, this
      pattern messes up the next day due to lack of sleep and possibly poorer
      sleep quality, as my brain is still buzzing right before bed. Clearly,
      this routine isn&#39;t effective.
    </p>
    <p>
      As my productive hours are during the mornings and late in the evening,
      why not work those hours? Skip the rest. So I come up with this polyphasic
      sleep schedule:
    </p>

    <NormalVsPolyphasic
      class="md:-ml-[10%] md:w-[120%] stroke-3 stroke-black dark:stroke-slate-300 max-w-none"
    />

    <p>
      This gives me plenty of time for morning rituals like exercising,
      breakfast, and a leisurely coffee, followed by a solid ~3 hours of fairly
      easy work (calls, meetings, admin, customer support). Then I wind down for
      an hour and sleep from 2pm to 6pm. After waking, I spend time with my
      girlfriend or engage in social activities. Around 9pm, I head back to the
      office or a coffee shop (found one that&#39;s open until midnight!) for a
      few 90-minute intense work sessions. Leaving the office at 2am feels
      almost magical, with the few people out having their own reasons for being
      awake.
    </p>
    <h3 id="wife-acceptance-factor">Wife acceptance factor</h3>
    <p>
      The question I received most frequently when I talked about my polyphasic
      sleep plans was, &quot;What does your girlfriend think about this?&quot;
      Maybe it&#39;s because of all the home automation devices I&#39;ve set up
      in our apartment, or perhaps she knows that resisting it would only make
      me more determined to do it, or simply because she&#39;s an incredible
      woman, but she was almost as excited as I was. &quot;This really suits
      you,&quot; she told me.
    </p>
    <h3 id="what-will-be-difficult-">What will be difficult?</h3>
    <p>
      One challenge for me will be waking up twice. Getting up once a day is
      hard enough; doing it again sounds like a double dose of trouble. I&#39;m
      really curious to see how this goes over the month.
    </p>

    <Clock class="mt-10 w-32 -mr-10 ml-4 float-right stroke-2 max-w-none" />

    <p>
      I&#39;ve never been good at napping. It just doesn&#39;t work for me—I end
      up feeling groggier after those 20-30 minutes of trying to sleep. And how
      easy is it to snooze during the day, anyway? Will I be wrestling with my
      melatonin levels? This stuff tells your body it&#39;s bedtime, peaking at
      night and dipping in the morning.
    </p>
    <p>
      Weekends might get tricky, socially speaking. My girlfriend&#39;s on board
      with this, but it&#39;s going to be awkward asking to nap at a
      friend&#39;s or family member&#39;s place. Then again, they probably know
      me well enough to just laugh it off.
    </p>

    <h3 id="advantages-so-far">Advantages so far</h3>
    <p>
      Since I have to wind down twice a day now, I&#39;m taking way more walks.
      Just the walk to the office is about 12 minutes one way, so do that four
      times and I&#39;m walking nearly an hour every day.
    </p>
    <p>
      When I kicked this off last week, I tried to tackle the heavy work in the
      morning, but that just wasn&#39;t cutting it. Turns out, those late-night
      focus sessions are when I really get down to business, and that&#39;s
      what&#39;s working best for me.
    </p>
  </div>
</template>

<script setup>
import PolyphasicSleep from "~/components/sleep/PolyphasicSleep.vue";
import Woman from "~/components/sleep/Woman.vue";
import Phases from "~/components/sleep/Phases.vue";
import WhyPolyphasicSleep from "~/components/sleep/WhyPolyphasicSleep.vue";
import Clock from "~/components/sleep/Clock.vue";
import NormalVsPolyphasic from "~/components/sleep/NormalVsPolyphasic.vue";
import ScooterVsBike from "~/components/sleep/ScooterVsBike.vue";

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
