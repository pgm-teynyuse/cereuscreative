<template>
  <div v-if="currentProject" class="mb-96 box-border max-w-screen-2xl m-auto">
    <div data-aos="fade-up" data-aos-duration="1000" class="p-10">
      <h1
        :style="{ color: currentProject.color }"
        class="text-4xl md:text-6xl mb-5 font-semibold"
      >
        {{ currentProject.title }}
      </h1>

      <NuxtLink
        to="/portfolio"
        :style="{ color: currentProject.color }"
        class="ease-out duration-500 transform text-xl"
      >
        Alle projecten
      </NuxtLink>
    </div>
    <div
      :style="{ backgroundColor: currentProject.color }"
      data-aos="fade-up"
      data-aos-duration="1000"
      class="flex shadow-2xl z-50 flex-col lg:ml-10 md:ml-10 ml-0 lg:absolute sm:relative md:flex-row justify-between gap-5 md:w-1/2 p-10 text-base md:text-xl"
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
    <div data-aos="fade-up" class="lg:mt-20 ml-0 lg:ml-40 md:-mt-40">
      <NuxtImg
        :src="currentProject.image"
        alt="Project cover"
        loading="lazy"
        class="h-[300px] md:h-[600px] w-full object-cover"
      />
    </div>
    <div data-aos="fade-up">
      <p class="mt-10 p-10 lg:ml-28 text-lightblack text-base md:text-xl">
        {{ currentProject.detail.content }}
      </p>
    </div>
    <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
      <div
        data-aos="fade-up"
        v-for="(image, index) in projectImages"
        :key="index"
        class="h-full bg-gray-300"
      >
        <NuxtImg
          :src="image"
          alt="Extra project image"
          loading="lazy"
          class="h-full w-full object-cover"
        />
      </div>
    </div>
  </div>
  <div data-aos="fade-up" v-else class="p-10 mb-40">
    <h2>Project niet gevonden</h2>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import projects from '../../public/assets/data/projects.json';

export default {
  setup() {
    const route = useRoute();
    const currentProject = computed(() => {
      const slug = route.params.slug;
      return projects.find(
        (project) =>
          project.slug.toLowerCase().trim() === slug.toLowerCase().trim()
      );
    });

    const projectImages = computed(() => {
      if (currentProject.value && currentProject.value.images) {
        return Object.values(currentProject.value.images);
      }
      return [];
    });

    useHead({
      title: currentProject.value
        ? currentProject.value.title
        : 'Project niet gevonden',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Cereus helpt bedrijven met WordPress of op maat gemaakte websites en sterke visuele identiteiten, zodat jouw verhaal krachtig en onvergetelijk wordt.',
        },
      ],
    });

    return {
      currentProject,
      projectImages,
    };
  },
};
</script>
