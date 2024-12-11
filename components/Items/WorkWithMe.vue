<template>
  <div class="p-10 bg-white pt-40 pb-40">
    <!-- Bestaande Samenwerken Sectie -->
    <div>
      <div
        class="flex justify-between flex-col lg:flex-row md:flex-col md:items-start lg:items-center"
      >
        <div>
          <h2
            class="lg:text-6xl text-4xl mb-5 font-semibold italic text-darkgreen"
          >
            Samenwerken
          </h2>
          <p class="text-maingreen text-xl pb-10">
            Bekijk de pakketten die bij jouw bedrijf passen en <br />
            neem contact op voor een offerte op maat.
          </p>
        </div>
        <div>
          <NuxtLink
            to="/worktoegether"
            class="hover:bg-lightgreen px-2 py-3 text-darkgreen border border-darkgreen ease-out duration-500 transform text-xl"
          >
            Bekijk de pakketten
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Grid met pakketten -->
    <div
      class="grid w-full md:grid-cols-2 gap-5 mt-16 lg:grid-cols-4 flex-grow"
    >
      <NuxtLink to="/worktoegether">
        <div class="p-6 border border-maingreen text-center">
          <font-awesome-icon
            :icon="['fas', 'object-group']"
            class="text-4xl text-maingreen mb-4"
          />
          <h3 class="text-2xl font-semibold text-darkgreen mb-2">Branding</h3>
          <p class="text-lg text-maingreen">
            Ontwikkel een sterke, unieke merkidentiteit die jouw visie
            uitdraagt.
          </p>
        </div>
      </NuxtLink>
      <NuxtLink to="/worktoegether">
        <div class="p-6 border border-maingreen text-center">
          <font-awesome-icon
            :icon="['fas', 'rocket']"
            class="text-4xl text-maingreen mb-4"
          />
          <h3 class="text-2xl font-semibold text-darkgreen mb-2">Starter</h3>
          <p class="text-lg text-maingreen">
            Een basis websiteoplossing voor een professionele online
            aanwezigheid.
          </p>
        </div>
      </NuxtLink>
      <NuxtLink to="/worktoegether">
        <div class="p-6 border border-maingreen text-center">
          <font-awesome-icon
            :icon="['fas', 'star']"
            class="text-4xl text-maingreen mb-4"
          />
          <h3 class="text-2xl font-semibold text-darkgreen mb-2">
            Professional
          </h3>
          <p class="text-lg text-maingreen">
            Een uitgebreide website met extra functionaliteit en maatwerk.
          </p>
        </div>
      </NuxtLink>
      <NuxtLink to="/worktoegether">
        <div class="p-6 border border-maingreen text-center">
          <font-awesome-icon
            :icon="['fas', 'gem']"
            class="text-4xl text-maingreen mb-4"
          />
          <h3 class="text-2xl font-semibold text-darkgreen mb-2">Premium</h3>
          <p class="text-lg text-maingreen">
            Volledig maatwerk en premium functies voor een unieke ervaring.
          </p>
        </div>
      </NuxtLink>
    </div>

    <!-- Nieuwe Versterking Sectie -->
    <div class="mt-16 bg-lightgreen p-10 rounded-lg">
      <h2 class="text-3xl font-semibold text-darkgreen mb-5">
        Versterking nodig binnen jouw team?
      </h2>
      <p class="text-lg text-darkgreen mb-6">
        Ik bied niet alleen diensten aan, maar kan ook jouw team versterken als
        freelancer of tijdelijke collega. Heb je versterking nodig op vlak van
        webdesign, branding of development? Neem contact op en ontdek wat ik
        voor jouw bedrijf kan betekenen.
      </p>
      <div class="flex justify-center md:justify-start">
        <NuxtLink
          to="/contact"
          class="bg-darkgreen text-white px-6 py-3 text-lg rounded-md hover:bg-maingreen ease-out duration-300"
        >
          Neem contact op
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
