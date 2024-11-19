import { defineNuxtConfig } from 'nuxt/config';
import dotenv from 'dotenv';

dotenv.config();

export default defineNuxtConfig({
  site: {
    url: 'https://cereuscreative.com',
    name: 'Cereus Creative',
  },
  app: {
    head: {
      titleTemplate: '%s - Cereus Creative',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Jouw digitale partner voor unieke merkbelevingen',
        },
        { name: 'author', content: 'Cereus Creative' },
        { name: 'robots', content: 'index, follow' },
        {
          property: 'og:title',
          content: 'Cereus Creative - Unieke Merkbelevingen',
        },
        {
          property: 'og:description',
          content: 'Jouw digitale partner voor branding en webdesign',
        },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:url',
          content: process.env.BASE_URL || 'http://localhost:3000',
        },
        {
          property: 'og:image',
          content: `${process.env.BASE_URL || 'http://localhost:3000'}/og-image.jpg`,
        },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        {
          rel: 'preload',
          as: 'style',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,600&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,600&display=swap',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
      ],
    },
  },
  plugins: [{ src: '~/plugins/fontawesome.js', mode: 'client' }],
  css: [
    '~/public/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@nuxtjs/plausible',
  ],
  plausible: {
    domain: process.env.BASE_URL || 'localhost',
  },
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
  sitemap: {
    sources: ['/api/__sitemap__/urls'],
  },
});
