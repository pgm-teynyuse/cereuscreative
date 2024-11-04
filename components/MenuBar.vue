<template>
  <div
    class="bg-website fixed  inset-x-0 top-0 z-50 flex items-center justify-between p-8"
  >
    <div class="logo-main">
      <img
        v-if="!showMenu"
        src="../assets/images/logo-mobile.svg"
        alt="Logo mobile"
      />
      <div v-else class="w-12 h-12"></div>
    </div>

    <div class="cursor-pointer" @click="toggleMenu">
      <img
        v-if="!showMenu"
        src="../assets/images/burger-menu.svg"
        alt="Burger Menu"
      />
      <img v-else src="../assets/images/exit-menu.svg" alt="Close Menu" />
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
};
</script>

<style scoped>
/* Optionele styling voor MenuBar */
</style>
