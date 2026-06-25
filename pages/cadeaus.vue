<template>
  <div>
    <h1>Geen cadeaus graag</h1>

    <p>Ik stop met cadeautjes geven en krijgen.</p>

    <p>
      Niet omdat ik iemand minder waardeer, maar omdat cadeaus voor mij vaak
      meer gedoe dan liefde zijn. Dit is mijn uitleg, zodat niemand hoeft te
      raden wat ik bedoel.
    </p>

    <h2>Waarom</h2>

    <ol>
      <li>
        <strong>Ik heb al genoeg spullen.</strong>
        Ik haal zelf al genoeg dingen in huis. Meer heb ik echt niet nodig. We
        hebben weinig ruimte, en ik wil het milieu niet extra belasten.
      </li>
      <li>
        <strong>Cadeaus regelen blokkeert mij.</strong>
        Ik vind het zelf vaak een enorme drempel om iets voor anderen te moeten
        regelen. Dan wordt het last minute en niet met de liefde die het zou
        moeten krijgen. Ik laat liever liefde zien door aanwezig te zijn of te
        helpen wanneer dat nodig is.
      </li>
      <li>
        <strong>Als ik iets nodig heb, koop ik het zelf.</strong>
        Vaak weet ik vrij precies wat ik nodig heb, en soms koop ik het
        zakelijk, waardoor het ook nog goedkoper is. Ik wil eigenlijk niet dat
        anderen hoeven te gokken.
      </li>
      <li>
        <strong>Cadeaus zijn niet mijn liefdestaal.</strong>
        Hopelijk is dat niet al te pijnlijk voor mensen bij wie dit wel zo is.
        Het zegt niets over hoeveel ik iemand waardeer.
      </li>
      <li>
        <strong>Ervaringen lossen het niet op.</strong>
        Ik dacht eerst dat ervaringen krijgen de oplossing was, maar vaak is het
        vooral extra werk in plaats van spontaan iets gaan doen. Mijn agenda is
        al vol genoeg. Spontaan voelt voor mij een stuk leuker dan een activiteit
        die als cadeau gepland moet worden.
      </li>
      <li>
        <strong>Het haalt sociale druk weg.</strong>
        Niemand hoeft meer te raden wat "goed genoeg" is, wat het mag kosten, of
        of het wel passend is. Dat lijkt me voor iedereen rustiger.
      </li>
    </ol>

    <h2>Wat dan wel?</h2>

    <p>
      Kom gezellig langs. Onaangekondigd bezoek vind ik super vet. Dan halen we
      een ijsje, koffietje of drankje bij het Vossie, of chillen we in de tuin.
      Altijd leuk. Het hoeft alleen niet voor mijn verjaardag.
    </p>

    <p>
      Zie je een leuk concert, event of iets anders vets? Vraag me gewoon mee.
      Ik vind het zeker leuk om dingen te doen, maar liever omdat er iets leuks
      voorbij komt dan omdat er een verjaardagscadeau geregeld moet worden.
    </p>

    <p>
      Misschien vind je dit een beetje jammer. Dat mag. Probeer er maar mee te
      leven.
    </p>
  </div>
</template>

<script setup>
const title = "Geen cadeaus graag";
const description =
  "Waarom ik stop met cadeautjes geven en krijgen, en wat ik liever doe.";

defineOgImageComponent("BlogPost", {
  title,
  description,
});

definePageMeta({
  title: "Geen cadeaus graag",
  layout: "blog",
});

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  twitterCard: "summary_large_image",
});
</script>
