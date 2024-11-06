<template>
  <div
    class="flex flex-col md:flex-row justify-between items-start gap-y-16 gap-x-16 p-10 mx-auto"
  >
    <div class="w-full md:w-1/2">
      <h1 class="text-4xl md:text-6xl font-bold text-darkgreen mb-6">
        Contact
      </h1>
      <p class="text-maingreen text-lg md:text-xl">
        Heb je een vraag, wil je een samenwerking bespreken, of wil je gewoon
        kennismaken?
      </p>
      <p class="text-maingreen text-lg md:text-xl mt-5">
        Vul het formulier in of gebruik de contactgegevens hieronder om direct
        contact op te nemen.
      </p>
      <div>
        <h2 class="text-2xl text-maingreen font-bold mt-10">Contactgegevens</h2>
        <h3 class="text-maingreen font-bold mt-2">E-mail</h3>
        <p class="text-maingreen">
          <a href="mailto:cereuscrtv@gmail.com" class="hover:text-middlegreen"
            >cereuscrtv@gmail.com</a
          >
        </p>
        <h3 class="text-maingreen mt-2 font-bold">Telefoon</h3>
        <p class="text-maingreen">+31 6 12345678</p>
      </div>
      <h2 class="text-maingreen font-bold mt-10">
        Altijd bereikbaar via social media! <br />
        Volg en blijf op hoogte.
      </h2>
      <div class="flex mt-5 gap-4">
        <NuxtLink to=""
          ><img src="../public/assets/images/instagram.svg" alt="Instagram"
        /></NuxtLink>
        <NuxtLink to=""
          ><img src="../public/assets/images/facebook.svg" alt="Facebook"
        /></NuxtLink>
        <NuxtLink to=""
          ><img src="../public/assets/images/linkedin.svg" alt="LinkedIn"
        /></NuxtLink>
      </div>
    </div>
    <div class="w-full md:w-1/2">
      <ContactForm />
    </div>
  </div>
</template>

<script>
import ContactForm from '~/components/Items/ContactForm.vue';

export default {
  components: {
    ContactForm,
  },
};
</script>
