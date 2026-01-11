HTML part of the componenet
<template>
    <section id="hero" href="heroRef" class="hero text-center py-5 text-white gradient-hero"  style="overflow: hidden;">
        <div class="container">
            <h1 class="hero-title display-4 mb-3">Hi, I'm Ritu Arora</h1>
            <p class="lead">FULL STACK DEVELOPER | DEVOPS & AI ENTHUSIAST</p>
             <p class="mt-2" style="color: rgba(255,255,255,0.7);">Greater Montréal, QC | jsr.ritu.jsr@gmail.com</p>
            <div class="hero-actions d-flex justify-content-center gap-3 flex-wrap mt-3">
                <a href="https://linkedin.com/in/ritu-arora-dr" target="_blank" class="btn btn-outline-light">LinkedIn</a>
                <a href="https://github.com/RituArora-DevOps" target="_blank" class="btn btn-outline-light">GitHub</a>
                <a href="#projects" class="btn btn-outline-light">View Projects</a>
            </div>
        </div>
    </section>
</template>

<!-- Logic block of the component -->
<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  console.log("GSAP animations running");

  gsap.from(".hero-title", {
    y: -150,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out"
  });

  gsap.from(".lead", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    delay: 0.5,
    ease: "power3.out"
  });

  gsap.from(".btn", {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    delay: 1,
    ease: "back.out(1.7)",
    stagger: 0.2
  });
});
</script>


