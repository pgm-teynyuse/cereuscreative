<template>
  <div>
    <HomeHeader />
    <BrandingText />
    <ServicesHeader />
    <StepsHome />
    <ProjectsHome />
    <Testimonial />
  </div>
</template>

<script>
import HomeHeader from '~/components/Headers/HomeHeader.vue';
import BrandingText from '~/components/Items/BrandingText.vue';
import ServicesHeader from '~/components/Headers/ServicesHeader.vue';
import StepsHome from '~/components/Headers/StepsHome.vue';
import ProjectsHome from '~/components/Headers/ProjectsHome.vue';
import Testimonial from '~/components/Items/Testimonial.vue';

export default {
  components: {
    HomeHeader,
    BrandingText,
    ServicesHeader,
    StepsHome,
    ProjectsHome,
    Testimonial,
  },
};
</script>
