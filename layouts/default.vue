<template>
  <div>
    <MenuBar class="block md:hidden" />
    <SiteHeader class="hidden md:block" />
    <NuxtPage />
    <Footer v-if="!isContactPage" />
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import SiteHeader from '~/components/SiteHeader.vue';
import MenuBar from '~/components/MenuBar.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    SiteHeader,
    MenuBar,
    Footer,
  },
  setup() {
    const route = useRoute();
    const isContactPage = computed(() => route.name === 'contact');

    return {
      isContactPage,
    };
  },
};
</script>
