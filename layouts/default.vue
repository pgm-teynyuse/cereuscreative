<template>
  <div>
    <MenuBar class="block md:hidden" />
    <SiteHeader class="hidden md:block" />
    <NuxtPage />
  </div>
</template>

<script>
import SiteHeader from '~/components/SiteHeader.vue';
import MenuBar from '~/components/MenuBar.vue';

export default {
  components: {
    SiteHeader,
    MenuBar,
  },
};
</script>
