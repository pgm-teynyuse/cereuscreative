<template>
  <div v-if="currentProject" class="mb-96">
    <div class="p-10">
      <h1
        :style="{ color: currentProject.color }"
        class="text-4xl md:text-6xl mb-5 font-semibold"
      >
        {{ currentProject.title }}
      </h1>

      <NuxtLink
        to="/portfolio"
        :style="{ color: currentProject.color }"
        class="px-2 py-3 ease-out duration-500 transform text-xl"
      >
        Alle projecten
      </NuxtLink>
    </div>
    <div
      :style="{ backgroundColor: currentProject.color }"
      class="flex shadow-2xl flex-col lg:ml-10 md:ml-10 ml-0 lg:absolute sm:relative md:flex-row justify-between gap-5 md:w-1/2 p-10 text-base md:text-xl"
    >
      <div class="text-website hidden lg:block leading-loose">
        <p>Opdrachtgever</p>
        <p>Onderwerp</p>
        <p>Technologie</p>
      </div>
      <div class="text-website leading-loose">
        <p>{{ currentProject.detail.client }}</p>
        <p>{{ currentProject.description }}</p>
        <ul class="list-disc list-inside space-y-1">
          <li
            :style="{ color: currentProject.color }"
            v-for="tech in currentProject.detail.technology"
            class="inline-block mr-2 text-xs sm:text-sm bg-website px-2 py-1 rounded"
            :key="tech"
          >
            {{ tech }}
          </li>
        </ul>
      </div>
    </div>
    <div class="lg:mt-20 ml-0 md:ab mt-10 lg:ml-40 md:-mt-40">
      <img
        :src="currentProject.image"
        alt="Project cover"
        class="h-[300px] md:h-[600px] w-full object-cover"
      />
    </div>
    <div>
      <p class="mt-10 p-10 lg:ml-28 text-lightblack text-base md:text-xl">
        {{ currentProject.detail.content }}
      </p>
    </div>
    <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
      <div class="h-40 bg-gray-300"></div>
      <div class="h-40 bg-gray-400"></div>
      <div class="h-40 bg-gray-500"></div>
    </div>
  </div>
  <div v-else class="p-10 mb-40">
    <h2>Project niet gevonden</h2>
  </div>
</template>

<script>
import projects from '../../public/assets/data/projects.json';

export default {
  data() {
    return {
      projects,
    };
  },
  computed: {
    currentProject() {
      const slug = this.$route.params.slug;
      return this.projects.find(
        (project) =>
          project.slug.toLowerCase().trim() === slug.toLowerCase().trim()
      );
    },
  },
};
</script>
