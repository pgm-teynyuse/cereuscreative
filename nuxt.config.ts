import { defineNuxtConfig } from 'nuxt/config';
import { useRuntimeConfig, useRoute } from '#imports';

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'nl',
      },
      titleTemplate: '%s - Cereus Creative',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'keywords',
          content:
            'webdesign, branding, cereus creative, cereus, creative, web, design, branding, website, webshop, webshop design, webshop development, webshop ontwikkeling, webshop bouwen, webshop maken, webshop laten maken, webshop laten bouwen, webshop laten ontwikkelen, webshop laten ontwerpen, webshop design, webshop design laten maken, webshop design laten bouwen, webshop design laten ontwikkelen',
        },
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
          content: process.env.BASE_URL || 'https://www.cereuscreative.be',
        },
        {
          property: 'og:image',
          content: `${process.env.BASE_URL || 'https://www.cereuscreative.be'}/og-image.jpg`,
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
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
      ],
    },
  },
  plugins: [
    { src: '~/plugins/fontawesome.js', mode: 'client' },
    { src: '~/plugins/aos.client.js', mode: 'client' },
  ],
  css: [
    '~/public/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    'aos/dist/aos.css',
  ],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@nuxtjs/plausible',
    '@nuxtjs/robots',
  ],
  plausible: {
    domain: 'www.cereuscreative.be',
  },
  image: {
    domains: ['www.cereuscreative.be'],
    screens: {
      sm: 320,
      md: 640,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    presets: {
      default: {
        modifiers: {
          formats: ['webp', 'jpg'],
          quality: 80,
        },
      },
    },
  },
  nitro: {
    externals: {
      inline: ['nodemailer'],
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.BASE_URL || 'https://www.cereuscreative.be',
    },
    gmailUser: process.env.GMAIL_USER,
    gmailPassword: process.env.GMAIL_PASSWORD,
    sendgridApiKey: process.env.SENDGRID_API_KEY,
  },
  sitemap: {
    sources: ['/api/__sitemap__/urls'],
  },
});