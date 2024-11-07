<template>
  <div class="flex md:hidden z-50 flex-col">
    <nav class="navbar">
      <ul class="text-3xl text-center text-maingreen uppercase">
        <li class="mb-10">
          <NuxtLink activeClass="active" to="/about" @click="closeMenu"
            >Over</NuxtLink
          >
        </li>
        <li class="mb-10">
          <NuxtLink activeClass="active" to="/worktoegether" @click="closeMenu"
            >Samenwerken</NuxtLink
          >
        </li>
        <li class="mb-10">
          <NuxtLink activeClass="active" to="/portfolio" @click="closeMenu"
            >Portfolio</NuxtLink
          >
        </li>
        <li class="">
          <NuxtLink activeClass="active" to="/contact" @click="closeMenu"
            >Contact</NuxtLink
          >
        </li>
      </ul>
    </nav>
    <NuxtLink to="/">
      <div class="absolute bottom-10">
        <img
          src="../public/assets/images/logo-mobile-menu.svg"
          alt="Alternative Logo"
        />
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  methods: {
    closeMenu() {
      this.$emit('close');
    },
  },
};
</script>
