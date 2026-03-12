<template>
  <section id="hero" class="hero text-center py-5 text-white gradient-hero" style="position: relative; overflow: hidden; min-height: 80vh; display: flex; align-items: center;">
    <div class="ambient-glow"></div>

    <div class="container" style="position: relative; z-index: 10;">
      <h1 class="hero-title display-3 mb-3 fw-bold">
        Hi, I'm <span class="text-glass-glow">Ritu Arora</span>
      </h1>
      
      <p class="lead tracking-wider text-uppercase opacity-90" style="letter-spacing: 3px; font-size: 1.1rem;">
        AI Full Stack Developer 
      </p>
      
      <p class="mt-2 location-tag">
        <i class="bi bi-geo-alt"></i> Montréal, QC | jsr.ritu.jsr@gmail.com
      </p>
      
      <div class="hero-actions d-flex justify-content-center gap-3 flex-wrap mt-5">
        <a href="https://linkedin.com/in/ritu-arora-dr" target="_blank" class="btn-glass">
          <i class="bi bi-linkedin me-2"></i> LinkedIn
        </a>
        <a href="https://github.com/RituArora-DevOps" target="_blank" class="btn-glass">
          <i class="bi bi-github me-2"></i> GitHub
        </a>
        <a href="#projects" class="btn-glass btn-accent">
          View Projects
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  const tl = gsap.timeline({ 
    defaults: { ease: "power4.out", duration: 0.8 } 
  });

  tl.from(".hero-title", { 
    y: 30, 
    opacity: 0 
  })
  .from(".lead", { 
    y: 20, 
    opacity: 0 
  }, "-=0.5") // Starts halfway through the title animation
  .from(".location-tag", { 
    opacity: 0 
  }, "-=0.5")
  .from(".btn-glass", { 
    y: 15, 
    opacity: 0, 
    stagger: 0.08, // Fast stagger for a "pop" effect
    clearProps: "all" 
  }, "-=0.6"); // Starts almost immediately after the lead text begins
});
</script>

<style scoped>
/* 1. Name Shimmer with Compatibility Fix */
.text-glass-glow {
  background: linear-gradient(120deg, #fff 0%, rgba(255,255,255,0.7) 100%);
  -webkit-background-clip: text;
  background-clip: text; 
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

/* 2. Liquid Glass Buttons - High Performance & Visibility */
.btn-glass {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff !important;
  padding: 0.8rem 2rem;
  border-radius: 12px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 600;
  text-decoration: none !important;
  font-size: 0.9rem;
  cursor: pointer;
}

.btn-glass:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.btn-accent {
  background: rgba(230, 126, 34, 0.2);
  border-color: rgba(230, 126, 34, 0.5);
}

.btn-accent:hover {
  background: rgba(230, 126, 34, 0.4);
}

/* 3. The Ambient Glow Orb */
.ambient-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70vw;
  height: 70vh;
  background: radial-gradient(circle, rgba(230, 126, 34, 0.1) 0%, transparent 70%);
  z-index: 1;
  pointer-events: none;
}

.location-tag {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
}

/* Ensure spacing for icons */
.bi {
  line-height: 1;
}
</style>