<template>
  <nav class="navbar navbar-expand-lg fixed-top modern-nav" :class="{ 'nav-scrolled': isScrolled }">
    <div class="container glass-nav-inner">
      <a class="navbar-brand fw-bold" href="#hero">
        <span class="text-accent">Ritu</span><span class="text-white">Arora</span>
      </a>
      
      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <div class="custom-toggler-icon">
          <span></span>
          <span></span>
        </div>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li v-for="item in navItems" :key="item.href" class="nav-item">
            <a class="nav-link" :href="item.href" @click="closeNav">
              {{ item.name }}
              <span class="nav-indicator"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const closeNav = () => {
  const navFluid = document.getElementById('navbarNav')
  if (navFluid.classList.contains('show')) {
    navFluid.classList.remove('show')
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* 1. The Floating Glass Container */
.modern-nav {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 1.5rem 0;
  z-index: 1000;
}

.nav-scrolled {
  padding: 0.8rem 0;
}

.glass-nav-inner {
  background: rgba(15, 32, 39, 0.7);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 100px; /* Capsule shape */
  padding: 0.5rem 1.5rem;
  transition: all 0.4s ease;
}

.nav-scrolled .glass-nav-inner {
  background: rgba(15, 32, 39, 0.85);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border-color: rgba(230, 126, 34, 0.2);
}

/* 2. Nav Link Styling */
.nav-link {
  color: rgba(255, 255, 255, 0.8) !important;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.5rem 1rem !important;
  position: relative;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: #e67e22 !important;
}

/* 3. The Animated Indicator Line */
.nav-indicator {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: #e67e22;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover .nav-indicator {
  width: 20px;
}

/* 4. Custom Mobile Toggler */
.custom-toggler-icon {
  width: 24px;
  height: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.custom-toggler-icon span {
  display: block;
  width: 100%;
  height: 2px;
  background: white;
  border-radius: 2px;
}

.custom-toggler-icon span:last-child {
  width: 70%;
  align-self: flex-end;
}

@media (max-width: 991px) {
  .glass-nav-inner {
    border-radius: 20px;
  }
}
</style>