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
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Ik ben Cereus Creative en ik help kleine bedrijven en ondernemers hun merk tot leven te brengen. Met op maat gemaakte websites en sterke visuele identiteiten zorg ik ervoor dat jouw verhaal online krachtig en onvergetelijk wordt neergezet.',
        },
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
