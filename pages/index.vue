<template>
  <div>
    <HomeHeader />
    <ServicesHeader />
    <StepsHome />
    <WhyMe />
    <WorkWithMe />
    <ProjectsHome />
  </div>
</template>

<script>
import HomeHeader from '~/components/Headers/HomeHeader.vue';
import WhyMe from '~/components/Headers/WhyMe.vue';
import ServicesHeader from '~/components/Headers/ServicesHeader.vue';
import StepsHome from '~/components/Headers/StepsHome.vue';
import ProjectsHome from '~/components/Headers/ProjectsHome.vue';
import Testimonial from '~/components/Items/Testimonial.vue';
import WorkWithMe from '~/components/Items/WorkWithMe.vue';

export default {
  setup() {
    useHead({
      title: 'Websites & Branding',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Van WordPress tot op maat gemaakte websites en opvallende branding - ontdek hoe we jouw verhaal laten stralen en bezoekers laten blijven hangen!',
        },
        { property: 'og:title', content: 'Cereus Creative - Jouw Partner in Webdesign & Branding' },
        { property: 'og:description', content: 'Van WordPress tot op maat gemaakte websites en opvallende branding!' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.cereuscreative.be/' },
        { property: 'og:image', content: 'https://www.cereuscreative.be/og-image.jpg' },
      ],
    });
  },

  components: {
    HomeHeader,
    WhyMe,
    ServicesHeader,
    StepsHome,
    ProjectsHome,
    Testimonial,
    WorkWithMe,
  },
};
</script>
