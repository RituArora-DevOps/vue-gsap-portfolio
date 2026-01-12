import { MotionPlugin } from "@vueuse/motion";
import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"; // for JS features like navbar collapse
import "./assets/main.css"; // for custom styles

// main.js
const app = createApp(App)

app.directive('scroll', {
  mounted(el) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.add('appear');
          observer.unobserve(el); // Stop watching once it has appeared
        }
      });
    }, { threshold: 0.2, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // "Shrinks" the trigger area by 50px from the bottom
    }); 
    
    observer.observe(el);
  }
})

app.mount('#app')