<template>
  <footer class="bg-dark text-light py-5 translucent-dark border-top border-secondary">
    <div class="container text-center">
      <div class="d-flex justify-content-center gap-4 mb-4">
        <a href="https://linkedin.com/in/ritu-arora-dr" target="_blank" class="footer-link">
          <i class="bi bi-linkedin fs-3"></i>
        </a>
        <a href="https://github.com/RituArora-DevOps" target="_blank" class="footer-link">
          <i class="bi bi-github fs-3"></i>
        </a>
      </div>

      <p class="mb-2 opacity-75 small">© {{ currentYear }} Ritu Arora. All rights reserved.</p>
      
      <div class="d-flex justify-content-center align-items-center gap-3 mt-4 opacity-50">
        <span class="small me-2">Built with:</span>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" width="24" title="Vue 3" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" width="24" title="Bootstrap 5" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" alt="Vite" width="24" title="Vite" />
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.footer-link {
  color: #f8f9fa;
  transition: all 0.3s ease;
}
.footer-link:hover {
  color: #e67e22; /* Your orange accent */
  transform: translateY(-3px);
  display: inline-block;
}
.translucent-dark {
  background-color: rgba(15, 32, 39, 0.95) !important;
  backdrop-filter: blur(10px);
}
</style>