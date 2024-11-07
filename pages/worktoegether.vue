<template>
  <div class="mb-72 mx-auto">
    <div class="p-10">
      <h2 class="text-4xl md:text-6xl font-bold text-darkgreen mb-6">
        Echte partner in <span class="italic text-maingreen">kwaliteit</span>
      </h2>
      <p class="text-lg md:text-xl text-maingreen mb-10">
        Samenwerken met mij betekent dat je kiest voor een partner die jouw
        visie begrijpt en omzet in een uniek, digitaal resultaat. Met oog voor
        detail, creativiteit, en flexibiliteit zorg ik ervoor dat elk project
        precies aansluit op jouw wensen en doelen.
      </p>
    </div>
    <div class="bg-white pb-32 p-10">
      <h2
        class="text-2xl text-center md:text-4xl font-bold text-darkgreen mt-10 mb-20"
      >
        Pakketten op Maat<br /><span class="italic text-maingreen"
          >Voor Elk Budget een Oplossing</span
        >
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-darkgreen p-12 rounded-lg relative">
          <div class="text-center items-center mb-4">
            <h3 class="text-xl md:text-4xl font-bold text-lightgreen">
              Groei en Optimalisatie
            </h3>
          </div>
          <p class="font-bold text-center text-lightgreen mb-2">
            Voor bedrijven die hun merk willen versterken met basis
            functionaliteiten en visuele uitstraling.
          </p>
          <p class="mb-4 mt-10 text-white">
            Voor bedrijven die hun merk willen versterken met extra
            functionaliteiten en een complete visuele uitstraling.
          </p>
          <ul class="list-disc pb-14 text-white pl-6">
            <li>
              Website met meerdere pagina's (bijv. Home, Over ons, Diensten,
              Contact)
            </li>
            <li>Volledige merkidentiteit (logo, kleurenpalet, typografie)</li>
            <li>Standaard e-commerce of blogfunctie (indien nodig)</li>
            <li>Uitgebreide SEO-optimalisatie voor betere vindbaarheid</li>
            <li>Basis onderhoud en updates voor de eerste maand</li>
          </ul>
          <div
            class="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-full text-center"
          >
            <p class="bg-lightgreen text-darkgreen font-bold">
              vanaf<br /><span class="font-semibold text-2xl">€500</span>
            </p>
          </div>
        </div>
        <div class="bg-darkgreen p-12 rounded-lg relative">
          <div class="text-center items-center mb-4">
            <h3 class="text-xl md:text-4xl font-bold text-lightgreen">
              Essentials
            </h3>
          </div>
          <p class="font-bold text-center text-lightgreen mb-2">
            Ideaal voor start-ups die een solide basis willen creëren.
          </p>
          <p class="mb-4 mt-5 text-white">
            Dit pakket is perfect voor start-ups of bedrijven met een beperkt
            budget die een sterke basis willen neerzetten.
          </p>
          <ul class="list-disc pb-14 text-white pl-6">
            <li>Basispagina of landingspagina ontwerp</li>
            <li>Logo ontwerp of eenvoudige visuele identiteit</li>
            <li>Standaard responsief webdesign (mobiel en desktop)</li>
            <li>Integratie van contactformulier en social media knoppen</li>
            <li>Basis SEO-instellingen</li>
          </ul>
          <div
            class="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-full text-center"
          >
            <p class="bg-lightgreen text-darkgreen font-bold">
              vanaf<br /><span class="font-semibold text-2xl">€1200</span>
            </p>
          </div>
        </div>
        <div class="bg-darkgreen p-12 rounded-lg relative">
          <div class="text-center items-center mb-4">
            <h3 class="text-xl md:text-4xl font-bold text-lightgreen">
              Premium Oplossingen
            </h3>
          </div>
          <p class="font-bold text-center text-lightgreen mb-2">
            Voor bedrijven die streven naar een premium uitstraling.
          </p>
          <p class="mb-4 mt-5 text-white">
            Voor bedrijven die hun merk willen versterken met extra
            functionaliteiten en een complete visuele uitstraling.
          </p>
          <ul class="list-disc pb-14 text-white pl-6">
            <li>
              Volledige website op maat met premium functies (bijv. webshop,
              klantportaal)
            </li>
            <li>
              Complete merkidentiteit (logo, stijlgids, visuals voor social
              media)
            </li>
            <li>UI/UX-ontwerp voor optimale gebruikerservaring</li>
            <li>
              Integratie van geavanceerde functionaliteiten zoals animaties,
              API-koppelingen, etc.
            </li>
            <li>Volledige SEO-strategie en marketingondersteuning</li>
            <li>Onderhoudsplan en updates gedurende 6 maanden na lancering</li>
          </ul>
          <div
            class="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-full text-center"
          >
            <p class="bg-lightgreen text-darkgreen font-bold">
              vanaf<br /><span class="font-semibold text-2xl">€2300</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="p-10">
      <h2
        class="text-2xl text-center mt-20 md:text-4xl font-bold text-darkgreen mb-20"
      >
        Hoe gaan wij samen<br /><span class="italic text-maingreen"
          >naar succes?</span
        >
      </h2>
      <StepsPage />
    </div>
  </div>
</template>

<script>
import StepsPage from '~/components/Items/StepsPage.vue';

export default {
  components: {
    StepsPage,
  },
};
</script>

<style scoped>
@media (max-width: 640px) {
  .grid-cols-1 {
    grid-template-columns: 1fr;
  }
}
@media (min-width: 640px) and (max-width: 1024px) {
  .grid-cols-2 {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .grid-cols-3 {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
