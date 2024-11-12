<template>
  <div v-if="currentProject" class="mb-40 p-10">
    <h1 class="text-5xl font-semibold text-darkgreen">{{ currentProject.title }}</h1>
    <img :src="currentProject.image" alt="project image" class="w-full mt-6" />
    <p class="text-lg mt-4">{{ currentProject.description }}</p>
  </div>
  <div v-else class="p-10 mb-40">
    <h2>Project niet gevonden voor deze slug: {{ $route.params.slug }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          slug: 'quibo',
          title: 'Quibo',
          image: '/images/covers/project1.jpg',
          description: 'Boekenruil platform',
        },
        {
          slug: 'sweet-tooth',
          title: 'Sweet Tooth',
          image: '/images/covers/project2.jpg',
          description: 'Bakkerij',
        },
        {
          slug: 'studio-t',
          title: 'Studio T',
          image: '/images/covers/project3.jpg',
          description: 'Digital Agency',
        },
      ],
    };
  },
  computed: {
    currentProject() {
      const slug = this.$route.params.slug;
      return this.projects.find(
        (project) => project.slug.toLowerCase().trim() === slug.toLowerCase().trim()
      );
    },
  },
};
</script>

<style scoped>
/* Optionele styling voor detailpagina */
</style>
