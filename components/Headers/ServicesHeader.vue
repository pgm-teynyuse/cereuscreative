<template class="">
  <div class="" data-aos="fade-up">
    <div
      class="flex flex-col border-t-8 lg:border-t-0 lg:border-b-8 pb-36 p-10 border-lightgreen justify-center"
    >
      <h2
        class="font-light text-5xl lg:mt-0 sm:text-5xl md:text-4xl lg:text-5xl text-maingreen"
      >
        <span class="font-semibold italic">Van</span> merkverhaal
        <span class="font-semibold italic">tot</span> digitale beleving
      </h2>
      <p
        class="text-base sm:text-lg md:text-xl lg:text-2xl text-maingreen mt-5"
      >
        Ik breng jouw verhaal online tot leven, helemaal zoals jij het wil.
      </p>
    </div>
  </div>

  <div data-aos="fade-up" class="relative -mt-44 z-30 hidden lg:block">
    <ServicesHome />
  </div>

  <div data-aos="fade-up" class="block -mt-24 lg:hidden">
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
