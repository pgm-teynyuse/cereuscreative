<template>
  <div class=" ">    
    <div class=" flex flex-col border-b-8 pb-36 p-5  border-lightgreen justify-center items-center text-center">
      <h1 class="font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-maingreen">
        <span class="font-semibold italic">Van</span> merkverhaal <span class="font-semibold italic">tot</span> digitale beleving
      </h1>
      <p class="text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-maingreen mt-2">
        We vertalen jouw unieke merkverhaal naar een visuele en functionele online ervaring die aansluit bij jouw doelgroep.
      </p>
    </div>
  </div>

  <div class="relative -mt-44 z-30 hidden lg:block">
    <ServicesHome />
  </div>

  <div class="block mt-20 lg:hidden">
    <ServicesHomeMobile />
  </div>
</template>

<script>
import ServicesHomeMobile from '~/components/Items/ServicesHomeMobile.vue';
import ServicesHome from '~/components/Items/ServicesHome.vue';

export default {
  components: {
    ServicesHomeMobile,
    ServicesHome
  }
};
</script>
