<template>
  <div>
    <HomeHeader />
    <BrandingText />
    <ServicesHeader/>
    <StepsHome />
  </div>
</template>

<script>
import HomeHeader from '~/components/Headers/HomeHeader.vue';
import BrandingText from '~/components/Items/BrandingText.vue';
import ServicesHeader from '~/components/Headers/ServicesHeader.vue';
import StepsHome from '~/components/Headers/StepsHome.vue';

export default {
  components: {
    HomeHeader,
    BrandingText,
    ServicesHeader,
    StepsHome,
  },
};
</script>
