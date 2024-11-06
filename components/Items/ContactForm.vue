<template>
  <form @submit.prevent="sendForm" class="text-maingreen">
    <div class="mb-6">
      <label for="name" class="block text-sm text-maingreen mb-1">Naam *</label>
      <input
        type="text"
        v-model="form.name"
        id="name"
        required
        class="w-full border-b border-maingreen bg-transparent text-darkgreen focus:outline-none focus:border-darkgreen"
      />
    </div>
    <div class="mb-6">
      <label for="email" class="block text-sm text-maingreen mb-1"
        >E-mail *</label
      >
      <input
        type="email"
        v-model="form.email"
        id="email"
        required
        class="w-full border-b border-maingreen bg-transparent text-darkgreen focus:outline-none focus:border-darkgreen"
      />
    </div>
    <div class="mb-6">
      <label for="subject" class="block text-sm text-maingreen mb-1"
        >Onderwerp</label
      >
      <input
        type="text"
        v-model="form.subject"
        id="subject"
        class="w-full border-b border-maingreen bg-transparent text-darkgreen focus:outline-none focus:border-darkgreen"
      />
    </div>
    <div class="mb-6">
      <label for="message" class="block text-sm text-maingreen mb-1"
        >Bericht *</label
      >
      <textarea
        v-model="form.message"
        id="message"
        required
        class="w-full border-b border-maingreen bg-transparent text-darkgreen focus:outline-none focus:border-darkgreen"
      ></textarea>
    </div>
    <div class="relative mt-20">
      <img
        class="absolute w-16 md:w-20 right-0 -mt-4"
        src="../../public/assets/images/send-link-icon.svg"
        alt="Verstuur Icon"
      />
      <button
        type="submit"
        :disabled="loading"
        class="bg-middlegreen text-darkgreen py-2 px-4 w-full hover:bg-maingreen hover:text-lightgreen transition-all"
      >
        Verstuur
      </button>
      <p v-if="loading" class="mt-4 text-sm text-gray-600">Verzenden...</p>
    </div>
    <p class="text-maingreen mt-32">Alle velden met * zijn verplicht!</p>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const loading = ref(false);

const sendForm = async () => {
  loading.value = true;
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value),
    });

    if (!response.ok) {
      throw new Error(
        'Er is een probleem opgetreden bij het verzenden van het formulier'
      );
    }

    alert('Je bericht is verzonden!');
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  } catch (error) {
    console.error('Er is een fout opgetreden:', error);
    alert('Er ging iets mis. Probeer het later opnieuw.');
  } finally {
    loading.value = false;
  }
};
</script>
