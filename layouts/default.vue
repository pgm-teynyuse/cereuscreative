<template>
  <div>
    <MenuBar class="block md:hidden" />
    <SiteHeader class="hidden md:block" />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script>
import SiteHeader from '~/components/SiteHeader.vue';
import MenuBar from '~/components/MenuBar.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    SiteHeader,
    MenuBar,
    Footer,
  },
};
</script>
