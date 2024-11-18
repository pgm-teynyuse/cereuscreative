<template>
  <div class="p-10 mb-72 mx-auto">
    <div>
      <h2 class="text-4xl md:text-6xl font-bold text-darkgreen mb-6">
        Curriculum <br /><span class="italic text-maingreen">Vitae</span>
      </h2>
      <p class="text-lg md:text-xl text-maingreen mb-10">
        Hallo! Ik ben <span class="font-semibold italic">Teynur Yuseinov</span>,
        een ervaren <span class="font-semibold italic">webdesigner</span> en
        <span class="font-semibold italic">branding-specialist</span> met <br />
        een achtergrond in grafisch ontwerp en programmeren.
      </p>
    </div>

    <div
      class="grid border-b-4 border-maingreen pb-14 grid-cols-1 md:grid-cols-3 gap-10 mt-10"
    >
      <div>
        <h3 class="text-3xl text-darkgreen mb-4">Opleiding</h3>
        <div class="text-maingreen space-y-6">
          <div>
            <p class="text-sm">09/2022 - 06/2023</p>
            <h4 class="font-bold text-lg">Arteveldehogeschool</h4>
            <p class="text-sm">Cloud Application Development</p>
            <p class="text-sm">Full-Stack Developer</p>
          </div>
          <div>
            <p class="text-sm">09/2015 - 06/2021</p>
            <h4 class="font-bold text-lg">Viso Mariakerke</h4>
            <p class="text-sm">
              TSO Printmedia / Tekst- en beeldintegratietechnieken
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-3xl text-darkgreen mb-4">Ervaring</h3>
        <div class="text-maingreen space-y-6">
          <div>
            <p class="text-sm">10/2024 - heden</p>
            <h4 class="font-bold text-lg">Cereus Creative</h4>
            <p class="text-sm">Freelance Ontwikkelaar / Oprichter</p>
          </div>
          <div>
            <p class="text-sm">09/2021 - 12/2021</p>
            <h4 class="font-bold text-lg">Make Your Own Spirit</h4>
            <p class="text-sm">Grafisch Ontwerper</p>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-3xl text-darkgreen mb-4">Stage</h3>
        <div class="text-maingreen space-y-6">
          <div>
            <p class="text-sm">02/2024 - 05/2024</p>
            <h4 class="font-bold text-lg">Techbirds / Techjane</h4>
            <p class="text-sm">Webdeveloper</p>
          </div>
          <div>
            <p class="text-sm">03/2022 - 02/2022</p>
            <h4 class="font-bold text-lg">3 Plus NV</h4>
            <p class="text-sm">Drukker / Grafisch Ontwerper</p>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div>
        <h3 class="text-3xl text-darkgreen mb-4">Vaardigheden</h3>
        <div class="text-maingreen space-y-2 text-lg">
          <p>Branding & Identiteit</p>
          <p>Webdesign</p>
          <p>Front-end Development</p>
          <p>Back-end Development</p>
        </div>
      </div>

      <div>
        <h3 class="text-3xl text-darkgreen mb-4">Programmeertalen</h3>
        <div class="text-maingreen space-y-2 text-lg">
          <p>JavaScript / TypeScript</p>
          <p>PHP</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>C#</p>
        </div>
      </div>

      <div>
        <h3 class="text-3xl text-darkgreen mb-4">Frameworks</h3>
        <div class="text-maingreen space-y-2 text-lg">
          <p>ReactJS / NextJS</p>
          <p>NodeJS / ExpressJS</p>
          <p>Vue.js / Nuxt</p>
          <p>Laravel</p>
        </div>
      </div>

      <div>
        <h3 class="text-3xl text-darkgreen mb-4">CMS</h3>
        <div class="text-maingreen space-y-2 text-lg">
          <p>WordPress</p>
          <p>MySQL</p>
          <p>Strapi</p>
          <p>CraftCMS</p>
        </div>
      </div>

      <div>
        <h3 class="text-3xl text-darkgreen mb-4">Database</h3>
        <div class="text-maingreen space-y-2 text-lg">
          <p>PostgreSQL</p>
          <p>MySQL</p>
          <p>Strapi</p>
        </div>
      </div>

      <div>
        <h3 class="text-3xl text-darkgreen mb-4">Design</h3>
        <div class="text-maingreen space-y-2 text-lg">
          <p>Figma</p>
          <p>Adobe Creative</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  setup() {
    useHead({
      title: 'Over',
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
