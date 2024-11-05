<template>
  <div class="testimonial-section mb-28 px-10">
    <h2 class="text-6xl mb-6 md:text-6xl text-darkgreen">
      Klanten<br /><span class="font-semibold italic">feedback</span>
    </h2>
    <div class="testimonial-container grid md:grid-cols-3 gap-10">
      <div
        class="testimonial-card bg-middlegreen p-10 text-darkgreen"
        v-for="(testimonial, index) in testimonials"
        :key="testimonial.name"
      >
        <div class="flex items-center mb-6">
          <div>
            <p class="font-bold text-lg text-website">{{ testimonial.name }}</p>
            <p class="italic text-maingreen">{{ testimonial.position }}</p>
          </div>
        </div>
        <p class="text-website text-lg">
          {{ testimonial.feedback }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        {
          name: 'David',
          position: 'CEO FinGrow',
          feedback:
            "Teynur made the process easy and delivered a product that's already gaining traction.",
        },
        {
          name: 'Maya',
          position: 'Product Lead Skillify',
          feedback:
            'Teynur delivered exceeded our expectations and was ready for testing within six weeks!',
        },
        {
          name: 'Sophie',
          position: 'Marketing Manager RetailHub',
          feedback:
            'Working with Teynur has been a game changer for our product.',
        },
      ],
    };
  },
};
</script>
