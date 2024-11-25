<template>
  <div class="mb-72 mx-auto">
    <div class="p-10">
      <h1 class="text-4xl md:text-6xl font-bold text-darkgreen mb-6">
        Jouw partner voor <span class="italic text-maingreen">digitale groei</span>
      </h1>
      <p class="text-lg md:text-2xl font-bold text-maingreen">
        Kies voor samenwerking met mij en ontdek een partner die jouw visie vertaalt naar digitale oplossingen op maat.
      </p>
            <div class="mt-1">
        <p class="md:text-xl text-lg text-maingreen">
          Bekijk hieronder de pakketten die ik aanbied, of schakel mij in als versterking binnen jouw team.
        </p>
        <div class="mt-5 flex gap-4">
          <NuxtLink
            to="/contact"
            class="hover:bg-lightgreen px-4 py-3 text-darkgreen border border-darkgreen ease-out duration-500 transform text-xl"
          >
            Neem contact op
          </NuxtLink>
        </div>
      </div>
          <div class="mt-10 bg-darkgreen p-10 ">
      <h3 class="text-3xl font-semibold text-website mb-5">
        Versterking nodig binnen jouw team?
      </h3>
      <p class="text-lg text-website">
        Naast mijn pakketten bied ik ook ondersteuning aan als tijdelijke collega of freelancer. Of je nu extra hulp nodig hebt bij een project, of een specifieke expertise zoekt, ik sta klaar om jouw team te versterken.
      </p>
    </div>

    </div>
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 ml-10 mr-10">
      <div class="p-6 border bg-lightgreen border-lightgreen">
        <div class="flex gap-3 items-center">
          <font-awesome-icon
            :icon="['fas', 'object-group']"
            class="text-4xl text-maingreen mb-4"
          />
          <h3 class="text-2xl font-semibold text-darkgreen mb-4">Branding</h3>
        </div>
        <p class="text-sm text-maingreen">
          Dit pakket is een apart brandingpakket, maar kan gecombineerd worden
          met elk websitepakket voor een allesomvattende merk- en
          websiteoplossing.
        </p>
        <ul class="text-lg mt-10 list-disc list-inside text-maingreen mb-20">
          <li>Unieke Merkidentiteit</li>
          <li>Visitekaartje & Affiche (optioneel)</li>
          <li>Branding Guide</li>
          <li>Basis Social Media Templates</li>
        </ul>
        <p class="text-sm text-maingreen">
          Startups, kleine bedrijven en merken die een sterke visuele identiteit
          willen ontwikkelen.
        </p>
      </div>
      <div class="p-6 border border-lightgreen">
        <div class="flex gap-3 items-center">
          <font-awesome-icon
            :icon="['fas', 'rocket']"
            class="text-4xl text-lightgreen mb-4"
          />
          <h3 class="text-2xl font-semibold text-darkgreen mb-4">Starter</h3>
        </div>
        <ul class="text-lg mt-10 list-disc list-inside text-maingreen mb-20">
          <li>Landingpagina</li>
          <li>Responsief design</li>
          <li>Contactformulier & social media</li>
          <li>Basis SEO & beveiliging</li>
          <li>Basis analytics</li>
        </ul>
        <p class="text-sm text-maingreen">
          Blogs, portfolio’s, en kleine bedrijven die een professionele
          basiswebsite nodig hebben zonder uitgebreide functionaliteiten.
        </p>
      </div>
      <div class="p-6 border border-lightgreen">
        <div class="flex gap-3 items-center">
          <font-awesome-icon
            :icon="['fas', 'star']"
            class="text-4xl text-lightgreen mb-4"
          />
          <h3 class="text-2xl font-semibold text-darkgreen mb-4">
            Professional
          </h3>
        </div>
        <ul class="text-lg mt-10 list-disc list-inside text-maingreen mb-20">
          <li>Meerdere pagina's (Over ons, diensten, etc.)</li>
          <li>Standaard blog- of e-commercefunctie</li>
          <li>Uitgebreide SEO optimalisatie</li>
          <li>Onderhoud & updates voor de eerste maand</li>
          <li>Training voor zelfbeheer</li>
        </ul>
        <p class="text-sm text-maingreen">
          Bedrijven die willen uitbreiden met een multi-pagina website, blog of
          eenvoudige webshop, en behoefte hebben aan onderhoud en SEO.
        </p>
      </div>
      <div class="p-6 border border-lightgreen">
        <div class="flex gap-3 items-center">
          <font-awesome-icon
            :icon="['fas', 'gem']"
            class="text-4xl text-lightgreen mb-4"
          />
          <h3 class="text-2xl font-semibold text-darkgreen mb-4">Premium</h3>
        </div>
        <ul class="text-lg mt-10 list-disc list-inside text-maingreen mb-20">
          <li>Volledig maatwerk website</li>
          <li>UI/UX ontwerp & testing</li>
          <li>Geavanceerde functies (animaties, API-integraties)</li>
          <li>Volledige SEO-strategie & marketingondersteuning</li>
          <li>Onderhoudsplan voor 6 maanden</li>
        </ul>
        <p class="text-sm text-maingreen">
          Bedrijven die een hoogwaardige, maatwerkwebsite willen die hen
          onderscheidt en continu wordt ondersteund.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  setup() {
    useHead({
      title: 'Samenwerken',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Cereus Creative is a web development and design company that specializes in creating custom websites for small businesses and entrepreneurs.',
        },
      ],
    });
  },
};
</script>
