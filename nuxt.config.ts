import { defineNuxtConfig } from 'nuxt/config';
import dotenv from 'dotenv';

dotenv.config();

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Cereus Creative',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,600&display=swap',
        },
      ],
    },
  },
  css: ['~/public/assets/css/main.css'],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],

  // Nodemailer als interne dependency bundelen
  nitro: {
    externals: {
      inline: ['nodemailer'],
    },
  },

  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'http://localhost:3000',
    },
    gmailUser: process.env.GMAIL_USER,
    gmailPassword: process.env.GMAIL_PASSWORD,
    sendgridApiKey: process.env.SENDGRID_API_KEY,
  },
});
