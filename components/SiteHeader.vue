<template>
  <div class="relative z-50">
    <div
      class="fixed z-50 top-0 left-0 pb-2 right-0 bg-opacity-10 backdrop-filter backdrop-blur-lg bg-website pt-5 flex items-center justify-between"
    >
      <NuxtLink to="/">
        <div class="logo-main ml-10">
          <img src="~/public/assets/images/logo-main.svg" alt="" />
        </div>
      </NuxtLink>
      <NavBar />
    </div>
  </div>
</template>
