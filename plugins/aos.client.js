import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin((nuxtApp) => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out', 
    offset: 30, 
    once: false, 
    mirror: true, 
    anchorPlacement: 'top-bottom', 
  });
});
