<template>
  <div
    v-bind="$attrs"
    class="bg-opacity-30 backdrop-filter backdrop-blur-lg bg-website fixed inset-x-0 top-0 z-50 flex items-center justify-between pl-8 pr-8 pt-5 pb-3"
  >
    <NuxtLink to="/">
      <div class="logo-main">
        <img
          v-if="!showMenu"
          src="~/public/assets/images/logo-mobile.svg"
          alt="Logo mobile"
        />
        <div v-else class="w-12 h-12"></div>
      </div>
    </NuxtLink>

    <div class="cursor-pointer" @click="toggleMenu">
      <img
        v-if="!showMenu"
        src="~/public/assets/images/burger-menu.svg"
        alt="Burger Menu"
      />
      <img v-else src="~/public/assets/images/exit-menu.svg" alt="Close Menu" />
    </div>
  </div>

  <div
    v-if="showMenu"
    class="fixed inset-0 bg-website z-40 flex flex-col items-center justify-center"
  >
    <MobileMenu @close="toggleMenu" />
  </div>
</template>

<script>
import MobileMenu from '~/components/MobileMenu.vue';

export default {
  components: {
    MobileMenu,
  },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
  inheritAttrs: false, 
};
</script>

