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
        <div
          class="bg-maingreen w-full h-full transition-transform duration-300 group-hover:scale-105"
        >
          <img
            :src="project.image || '../../assets/images/covers/noimage.jpg'"
            alt="Project Image"
            class="w-full h-full object-cover"
          />
        </div>
        <div
          class="absolute inset-0 bg-maingreen bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <h3 class="text-2xl font-semibold text-white">{{ project.title }}</h3>
        </div>
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
          src="../../assets/images/linkto_short.svg"
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
          title: 'Project Title 1',
          image: '../../assets/images/covers/noimage.jpg',
        },
        { id: 2, title: 'Project Title 2', image: '' },
        { id: 3, title: 'Project Title 3', image: '' },
      ],
    };
  },
};
</script>
