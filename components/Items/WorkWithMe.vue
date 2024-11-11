<template>
  <div class="p-10 bg-white pt-40 pb-40">
    <div class="flex justify-between border-lightgreen">
      <div>
        <h1
          class="text-2xl font-semibold lg:mt-0 sm:text-5xl md:text-4xl lg:text-5xl text-maingreen"
        >
          Samenwerkingsmogelijkheden
        </h1>
        <p class="text-maingreen text-xl mt-2">
          Bekijk de pakketten dat bij jouw bedrijf past en neem contact op voor
          een offerte op maat.
        </p>
      </div>
      <div class="mt-8">
        <NuxtLink
          to="/worktoegether"
          class="hover:bg-lightgreen px-2 py-3 text-darkgreen border border-darkgreen ease-out duration-500 transform text-xl"
        >
          Bekijk de pakketten
        </NuxtLink>
      </div>
    </div>
    <div
      class="grid w-full md:grid-cols-2 gap-5 mt-16 lg:grid-cols-4 flex-grow"
    >
      <div class="p-6 border border-maingreen text-center">
        <font-awesome-icon
          :icon="['fas', 'object-group']"
          class="text-4xl text-maingreen mb-4"
        />
        <h3 class="text-2xl font-semibold text-darkgreen mb-2">Branding</h3>
        <p class="text-lg text-maingreen">
          Ontwikkel een sterke, unieke merkidentiteit die jouw visie uitdraagt.
        </p>
      </div>
      <div class="p-6 border border-maingreen text-center">
        <font-awesome-icon
          :icon="['fas', 'rocket']"
          class="text-4xl text-maingreen mb-4"
        />
        <h3 class="text-2xl font-semibold text-darkgreen mb-2">Starter</h3>
        <p class="text-lg text-maingreen">
          Een basis websiteoplossing voor een professionele online aanwezigheid.
        </p>
      </div>

      <div class="p-6 border border-maingreen text-center">
        <font-awesome-icon
          :icon="['fas', 'star']"
          class="text-4xl text-maingreen mb-4"
        />
        <h3 class="text-2xl font-semibold text-darkgreen mb-2">Professional</h3>
        <p class="text-lg text-maingreen">
          Een uitgebreide website met extra functionaliteit en maatwerk.
        </p>
      </div>
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
    </div>
  </div>
</template>
