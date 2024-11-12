<template>
  <div class="mr-10 z-50">
    <nav class="navbar" v-bind="$attrs">
      <ul class="flex space-x-4 text-lg text-maingreen">
        <li>
          <NuxtLink
            to="/about"
            activeClass="active"
            class="hover:text-darkgreen hover:font-semibold hover:italic transition-all duration-100 ease-in-out"
          >
            Over
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/worktoegether"
            activeClass="active"
            class="hover:text-darkgreen hover:font-semibold hover:italic transition-all duration-100 ease-in-out"
          >
            Samenwerken
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/portfolio"
            activeClass="active"
            class="hover:text-darkgreen hover:font-semibold hover:italic transition-all duration-100 ease-in-out"
          >
            Portfolio
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/contact"
            activeClass="active"
            class="hover:text-darkgreen hover:font-semibold hover:italic transition-all duration-100 ease-in-out"
          >
            Contact
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  inheritAttrs: false, // Voorkomt automatische overerving van attributes

  // Je kunt een script blok hier toevoegen indien nodig
};
</script>
