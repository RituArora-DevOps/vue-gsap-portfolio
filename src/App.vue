<template>
  <Navbar />
  <HeroSection />
  <AboutSection />
  <ExperienceEducation />
  <Skills />
  <ProjectsSection />
  <Contact />
  <Footer />
</template>

<script setup>
  import Navbar from './components/Navbar.vue'
  import HeroSection from './components/HeroSection.vue'
  import AboutSection from './components/AboutSection.vue';
  import ProjectsSection from './components/ProjectsSection.vue';
  import Footer from './components/Footer.vue'
  import Skills from './components/Skills.vue';
  import Contact from './components/Contact.vue'
  import ExperienceEducation from './components/ExperienceEducation.vue';
</script>
