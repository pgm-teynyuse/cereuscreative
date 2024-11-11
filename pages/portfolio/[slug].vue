<template>
  <div v-if="project" class="mb-40">
    <h1 class="text-5xl font-semibold text-darkgreen">{{ project.title }}</h1>
    <img :src="project.image" alt="project image" class="w-full mt-6" />
    <p class="text-lg mt-4">{{ project.description }}</p>
  </div>
  <div v-else class="p-10 mb-40">
    <h2>Project niet gevonden</h2>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const projects = [
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
        description: 'Bakery',
      },
      {
        slug: 'digital-agency',
        title: 'Digital Agency',
        image: '/images/covers/project3.jpg',
        description: 'Webdesign Bureau',
      },
    ];

    const project = projects.find((p) => p.slug === params.slug);

    // Voeg een fallback toe
    if (!project) {
      console.warn('Project met deze slug niet gevonden:', params.slug);
      return { project: null };
    }

    return { project };
  },
};
</script>
