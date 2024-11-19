<template>
  <div>
    <MenuBar class="block md:hidden" />
    <SiteHeader class="hidden md:block" />
    <NuxtPage />
    <Footer v-if="!isContactPage && !isPortfolioPage" />
    <FooterNoCTA v-if="isPortfolioPage" />
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import SiteHeader from '~/components/SiteHeader.vue';
import MenuBar from '~/components/MenuBar.vue';
import Footer from '~/components/Footer.vue';
import FooterNoCTA from '~/components/FooterNoCTA.vue';

export default {
  components: {
    SiteHeader,
    MenuBar,
    Footer,
    FooterNoCTA,
  },
  setup() {
    const route = useRoute();
    const isContactPage = computed(() => route.name === 'contact');
    const isPortfolioPage = computed(() => route.name === 'portfolio');

    return {
      isContactPage,
      isPortfolioPage,
    };
  },
};
</script>
