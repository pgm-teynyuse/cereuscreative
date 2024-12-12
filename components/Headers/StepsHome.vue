<template>
  <div>
    <div class="hidden lg:block">
      <StepsWeb />
    </div>
    <div class="block lg:hidden">
      <StepsMobile />
    </div>
  </div>
</template>

<script>
import StepsWeb from '~/components/Items/StepsWeb.vue';
import StepsMobile from '~/components/Items/StepsMobile.vue';

export default {
  components: {
    StepsWeb,
    StepsMobile,
  },
};
</script>
