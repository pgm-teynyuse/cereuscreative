<template>
  <div class="relative">
    <div
      class="flex flex-col-reverse lg:flex-row bg-middlegreen justify-between pt-40 md:pt-20 p-6 md:p-10"
    >
      <div class="lg:mt-0">
        <div class="flex gap-2 mt-5 mb-10 md:mb-20">
          <NuxtLink to="https://www.instagram.com/cereuscrtv/"
            ><img src="../public/assets/images/instagram.svg" alt=""
          /></NuxtLink>
          <NuxtLink to="https://www.facebook.com/61568421422105"
            ><img src="../public/assets/images/facebook.svg" alt=""
          /></NuxtLink>
          <NuxtLink to="https://www.linkedin.com/in/teynuryuseinov/"
            ><img src="../public/assets/images/linkedin.svg" alt=""
          /></NuxtLink>
        </div>
        <div class="text-darkgreen text-sm md:text-base">
          <p>Teynur Yuseinov</p>
          <p>
            <span class="font-semibold">©CereusCreative</span>
          </p>
        </div>
      </div>
      <div
        class="flex text-lg md:text-xl flex-col text-darkgreen leading-loose font-bold"
      >
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">Over</NuxtLink>
        <NuxtLink to="/worktoegether">Samenwerking</NuxtLink>
        <NuxtLink to="/portfolio">Portfolio</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </div>
    </div>
  </div>
</template>
