<template>
  <div class="mb-96">
    <h1 class="text-6xl font-semibold p-10 text-darkgreen">Portfolio</h1>
    <div class="grid grid-cols-1 mt-16 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="project in projects"
        :key="project.id"
        class="relative group w-full h-96 overflow-hidden text-darkgreen"
      >
        <NuxtLink
          :to="`/portfolio/${project.slug}`"
          class="block w-full h-full"
        >
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
            :style="{ backgroundColor: project.hoverColor }"
            class="absolute inset-0 bg-opacity-0 flex flex-col items-center justify-center opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
          >
            <h3 class="text-4xl font-semibold text-white">
              {{ project.title }}
            </h3>
            <p class="text-xl text-white mt-2">{{ project.description }}</p>
          </div>
        </NuxtLink>
      </div>
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
          hoverColor: '#283F8B', // Unieke kleur voor dit project
        },
        {
          id: 2,
          title: 'Sweet Tooth',
          slug: 'sweet-tooth',
          image: '/images/covers/project2.jpg',
          description: 'Bakkerij',
          hoverColor: '#DAC8B2', // Unieke kleur voor dit project
        },
        {
          id: 3,
          title: 'Studio T',
          slug: 'studio-t',
          image: '/images/covers/project3.jpg',
          description: 'Digital Agency',
          hoverColor: '#ED6653', // Unieke kleur voor dit project
        },
      ],
    };
  },
};
</script>
