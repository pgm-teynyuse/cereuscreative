<template>
  <div class="p-10">
    <div
      class="flex justify-between flex-col md:flex-row text-left md:text-left"
    >
      <h2 class="text-5xl md:text-6xl text-darkgreen">
        Recente<br /><span class="font-semibold italic">projecten</span>
      </h2>
    </div>
    <div
      class="grid grid-cols-1 mt-10 mb-10 sm:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <div
        v-for="project in projects"
        :key="project.id"
        class="relative group w-full h-72 overflow-hidden text-darkgreen"
      >
        <NuxtLink :to="`/projects/${project.slug}`" class="block w-full h-full">
          <div
            class="w-full h-full transition-transform duration-300 group-hover:scale-105"
          >
            <img
              class="w-full h-full object-cover transition-opacity duration-300"
              :src="
                project.image ? project.image : '/images/covers/noimage.jpg'
              "
              alt="project image"
            />
          </div>
          <div
            class="absolute inset-0 bg-maingreen bg-opacity-0 flex flex-col items-center justify-center opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
          >
            <h3 class="text-4xl font-semibold text-white">
              {{ project.title }}
            </h3>
            <p class="text-xl text-white mt-2">{{ project.description }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class="flex justify-end">
      <NuxtLink
        to="/projects"
        class="flex items-center hover:text-maingreen transition-colors"
      >
        <p class="text-lg text-right md:text-2xl text-darkgreen mt-4 leading-5">
          Bekijk alle<br /><span class="font-semibold italic">projecten</span>
        </p>
        <img
          class="w-16 md:w-24 ml-4"
          src="../../public/assets/images/linkto_short.svg"
          alt=""
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Quibo',
          slug: 'quibo',
          image: '/images/covers/project1.jpg',
          description: 'Boekenruil platform',
        },
        {
          id: 2,
          title: 'MealMate',
          slug: 'mealmate',
          image: '/images/covers/project2.jpg',
          description: 'Meal voorbereider',
        },
        {
          id: 3,
          title: 'FitTrack',
          slug: 'fittrack',
          image: '/images/covers/project3.jpg',
          description: 'Fitness tracker',
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Jouw bestaande styling */
</style>
