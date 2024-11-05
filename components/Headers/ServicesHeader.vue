<template>
  <div class=" lg:bg-white ">
    <div
      class="flex flex-col border-t-8 lg:border-t-0 lg:border-b-8 pb-36 p-10 mt-40 border-lightgreen justify-center"
    >
      <h1
        class="font-light text-5xl lg:mt-28 sm:text-5xl md:text-4xl lg:text-5xl text-maingreen"
      >
        <span class="font-semibold italic">Van</span> merkverhaal
        <span class="font-semibold italic">tot</span> digitale beleving
      </h1>
      <p
        class="text-base sm:text-lg md:text-xl lg:text-2xl text-maingreen mt-5"
      >
        We vertalen jouw unieke merkverhaal naar een visuele en functionele
        online ervaring die aansluit bij jouw doelgroep.
      </p>
    </div>
  </div>

  <div class="relative -mt-44 z-30 hidden lg:block">
    <ServicesHome />
  </div>

  <div class="block -mt-24 lg:hidden">
    <ServicesHomeMobile />
  </div>
</template>

<script>
import ServicesHomeMobile from '~/components/Items/ServicesHomeMobile.vue';
import ServicesHome from '~/components/Items/ServicesHome.vue';

export default {
  components: {
    ServicesHomeMobile,
    ServicesHome,
  },
};
</script>
