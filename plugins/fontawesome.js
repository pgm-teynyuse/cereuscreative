// plugins/fontawesome.js
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

// Optioneel: Automatische CSS toevoegen uitschakelen als je zelf de CSS wilt beheren
config.autoAddCss = false;

// Voeg iconen toe aan de bibliotheek
library.add(fas, far);

// FontAwesome-component registreren
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});
