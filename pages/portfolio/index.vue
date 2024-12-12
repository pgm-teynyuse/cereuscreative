<template>
  <div class="box-border max-w-screen-2xl m-auto mb-64">
    <h1 class="text-6xl font-semibold pl-10 pt-10 text-darkgreen">Portfolio</h1>
    <p class="text-lg text-maingreen mt-2 pl-10 pr-10">
      Hier vind je een selectie van mijn projecten. <br />
      Van branding tot webdesign, elk project is gemaakt met oog voor detail en
      een focus op resultaat. Klik op een project om meer te ontdekken.
    </p>

    <!-- Filter Knoppen -->
    <div class="pl-10 mt-10 flex space-x-2">
      <button
        @click="selectedCategory = ''"
        :class="{
          'bg-darkgreen text-white': selectedCategory === '',
          'bg-lightgreen text-darkgreen': selectedCategory !== '',
        }"
        class="px-2 py-2 rounded border border-darkgreen transition"
      >
        Alle
      </button>
      <button
        @click="selectedCategory = 'merkidentiteit'"
        :class="{
          'bg-darkgreen text-white': selectedCategory === 'merkidentiteit',
          'bg-lightgreen text-darkgreen': selectedCategory !== 'merkidentiteit',
        }"
        class="px-2 py-2 rounded border border-darkgreen transition"
      >
        Merkidentiteit
      </button>
      <button
        @click="selectedCategory = 'website'"
        :class="{
          'bg-darkgreen text-white': selectedCategory === 'website',
          'bg-lightgreen text-darkgreen': selectedCategory !== 'website',
        }"
        class="px-2 py-2 rounded border border-darkgreen transition"
      >
        Website
      </button>
    </div>

    <!-- Projecten Grid met Transitions -->
    <transition-group
      name="project-fade"
      tag="div"
      class="grid grid-cols-1 mt-16 sm:grid-cols-2 lg:grid-cols-3"
    >
      <div
        v-for="project in filteredProjects"
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
            <NuxtImg
              class="w-full h-full object-cover transition-opacity duration-300"
              :src="project.image || '/images/covers/noimage.jpg'"
              alt="project image"
              :sizes="['320px', '640px', '1024px']"
              format="webp"
              loading="lazy"
            />
          </div>
          <div
            :style="{ backgroundColor: project.color }"
            class="absolute inset-0 bg-opacity-0 flex flex-col items-center justify-center opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
          >
            <h3 class="text-4xl font-semibold text-white">
              {{ project.title }}
            </h3>
            <p class="text-xl text-white mt-2">{{ project.description }}</p>
          </div>
        </NuxtLink>
      </div>
    </transition-group>

    <!-- Contact Sectie -->
    <div class="mt-48 text-center">
      <h2 class="text-3xl font-semibold text-darkgreen mb-4">
        Ook een uniek project laten maken?
      </h2>
      <p class="text-lg text-maingreen mb-6">
        Neem contact op en laten we samen iets moois creëren.
      </p>
      <NuxtLink
        to="/contact"
        class="bg-darkgreen text-white px-6 py-3 text-lg hover:bg-maingreen"
      >
        Neem contact op
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import projects from '../../public/assets/data/projects.json';

export default {
  setup() {
    useHead({
      title: 'Portfolio',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Cereus helpt bedrijven met WordPress of op maat gemaakte websites en sterke visuele identiteiten, zodat jouw verhaal krachtig en onvergetelijk wordt.',
        },
      ],
    });
  },
  data() {
    return {
      projects,
      selectedCategory: '',
    };
  },
  computed: {
    sortedProjects() {
      return this.projects
        .slice()
        .sort((a, b) => new Date(b.date) - new Date(a.date));
    },
    filteredProjects() {
      const sorted = this.sortedProjects;
      if (this.selectedCategory) {
        return sorted.filter(
          (project) => project.category === this.selectedCategory
        );
      }
      return sorted;
    },
  },
};
</script>
