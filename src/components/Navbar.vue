<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top translucent-dark">
    <div class="container">
      <a class="navbar-brand fw-bold" href="#hero">
        <span class="text-accent">Ritu</span> Arora
      </a>
      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto text-center">
          <li v-for="item in navItems" :key="item.href" class="nav-item">
            <a class="nav-link px-3" :href="item.href">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];
</script>

<style scoped>
.nav-link {
  transition: color 0.3s ease;
  font-weight: 500;
}
.nav-link:hover {
  color: #e67e22 !important; /* Your orange accent */
}
/* Subtle logo styling */
.navbar-brand {
  letter-spacing: 1px;
}
</style>