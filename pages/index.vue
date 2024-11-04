<template>
  <div>
    <HomeHeader />
    <BrandingText />
    <ServicesHeader/>
  </div>
</template>

<script>
import HomeHeader from '~/components/Headers/HomeHeader.vue';
import BrandingText from '~/components/Items/BrandingText.vue';
import ServicesHeader from '~/components/Headers/ServicesHeader.vue';

export default {
  components: {
    HomeHeader,
    BrandingText,
    ServicesHeader,
  },
};
</script>
