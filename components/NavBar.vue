<template>
  <div>
    <nav class="navbar">
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
