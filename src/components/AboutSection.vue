<template>
  <section id="about" class="py-5 bg-section" style="background: #fbfbfb; perspective: 1000px;">
    <div class="container">
      <h2 class="text-center text-heading mb-5 about-title">About Me</h2>
      
      <div class="row gy-4 align-items-center justify-content-center">
        <div class="col-lg-7 bio-card-wrapper">
          <div class="glass-light-card p-4 p-md-5">
            <h3 class="mb-3" style="color: #0f2027;">Bridging Analysis & Architecture</h3>
            <p class="lead text-accent fw-semibold">
              Highly analytical Full-Stack Developer specializing in scalable, data-driven applications.
            </p>
            <p class="text-muted">
              I leverage my background in scientific research to engineer robust backends and 
              complex data synchronization pipelines. My focus is on creating production-grade 
              software that is as precise as it is scalable.
            </p>

            <div class="d-flex flex-wrap gap-2 mt-4">
              <span class="badge-modern">React.js & Vue.js</span>
              <span class="badge-modern">Java / Spring Boot</span>
              <span class="badge-modern">Python</span>
              <span class="badge-modern">AWS & Azure</span>
              <span class="badge-modern">SQL & NoSQL</span>
            </div>
          </div>
        </div>

        <div class="col-lg-4 research-card-wrapper">
          <div class="research-card-3d p-4">
            <div class="card-inner">
              <h5 class="h6 text-uppercase fw-bold text-accent mb-4">The Research Edge</h5>
              <ul class="list-unstyled mb-0">
                <li class="mb-4 d-flex align-items-center">
                  <span class="icon-circle">🧪</span>
                  <div>
                    <strong class="d-block text-white">Precision</strong>
                    <span class="small opacity-75">Scientific rigor in code.</span>
                  </div>
                </li>
                <li class="mb-4 d-flex align-items-center">
                  <span class="icon-circle">📊</span>
                  <div>
                    <strong class="d-block text-white">Data-First</strong>
                    <span class="small opacity-75">Expert pipelines.</span>
                  </div>
                </li>
                <li class="d-flex align-items-center">
                  <span class="icon-circle">🧠</span>
                  <div>
                    <strong class="d-block text-white">AI Ready</strong>
                    <span class="small opacity-75">Big data background.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="card-glow"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  // 1. Reveal Title
  gsap.from(".about-title", {
    scrollTrigger: {
      trigger: ".about-title",
      start: "top 90%",
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  // 2. Animate Bio Card from Left
  gsap.from(".bio-card-wrapper", {
    scrollTrigger: {
      trigger: ".bio-card-wrapper",
      start: "top 85%",
    },
    x: -50,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
  });

  // 3. Animate Research Card from Right
  gsap.from(".research-card-wrapper", {
    scrollTrigger: {
      trigger: ".research-card-wrapper",
      start: "top 85%",
    },
    x: 50,
    opacity: 0,
    duration: 1.2,
    delay: 0.2,
    ease: "power4.out"
  });
});
</script>

<style scoped>
/* Modern "Light" Glass for the Bio */
.glass-light-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 28px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.03);
  transition: transform 0.3s ease;
}

/* The Dark 3D Bento Card */
.research-card-3d {
  background: #0f2027;
  color: white;
  border-radius: 28px;
  position: relative;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}

.research-card-3d:hover {
  transform: translateY(-10px) rotateX(4deg) rotateY(-4deg);
  box-shadow: 15px 25px 50px rgba(0,0,0,0.3);
  border-color: rgba(230, 126, 34, 0.3);
}

.icon-circle {
  background: rgba(230, 126, 34, 0.15);
  min-width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px; /* More of a "squircle" for 2026 */
  margin-right: 18px;
  font-size: 1.3rem;
  border: 1px solid rgba(230, 126, 34, 0.2);
}

.badge-modern {
  background: white;
  color: #0f2027;
  border: 1px solid rgba(15, 32, 39, 0.08);
  padding: 0.6rem 1.2rem;
  border-radius: 100px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: default;
}

.badge-modern:hover {
  border-color: #e67e22;
  color: #e67e22;
  transform: translateY(-2px);
}

.card-glow {
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(230, 126, 34, 0.05) 0%, transparent 70%);
  pointer-events: none;
}
</style>