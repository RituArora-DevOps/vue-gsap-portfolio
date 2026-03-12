<template>
  <section id="experience" class="py-5 bg-dark text-light section-3d-wrap" style="background: #0f2027; perspective: 1200px;">
    <div class="container">
      <h2 class="text-center mb-5 text-white exp-title">Experience & Education</h2>
      
      <div class="row justify-content-center">
        <div class="col-md-7 col-lg-6 me-lg-4 experience-col">
          <h4 class="text-accent mb-5 d-flex align-items-center">
            <span class="header-line"></span> Professional Experience
          </h4>

          <div class="ps-4 timeline-container">
            <div class="timeline-item mb-5">
              <div class="timeline-dot-wrap">
                <div class="timeline-dot-pulse"></div>
                <div class="timeline-dot active"></div>
              </div>
              <h5 class="mb-1 fw-bold text-white">AI Full Stack Developer Consultant</h5>
              <p class="text-accent small mb-1 fw-medium text-uppercase tracking-wider"> Sankof Technologies Inc., QC · Jan 2026 - Present</p>
              <!-- <p class="text-secondary-glass small">Building intelligent enterprise solutions, GenAI integrations, and robust full-stack architectures.</p> -->
            </div>
          
            <div class="timeline-item mb-5">
              <div class="timeline-dot-wrap">
                <div class="timeline-dot-pulse"></div>
                <div class="timeline-dot"></div>
              </div>
              <h5 class="mb-1 fw-bold text-white">AI Full Stack Developer</h5>
              <p class="text-accent small mb-1 fw-medium text-uppercase tracking-wider">Yulcom Technologies, QC · Oct 2025 – Present</p>
              <!-- <p class="text-secondary-glass small">Building intelligent enterprise solutions, GenAI integrations, and robust full-stack architectures.</p> -->
            </div>

            <div class="timeline-item mb-5">
              <div class="timeline-dot-wrap">
                <div class="timeline-dot-pulse"></div>
                <div class="timeline-dot"></div>
              </div>
              <h5 class="mb-1 fw-bold text-white">Web Developer</h5>
              <p class="text-accent small mb-1 fw-medium text-uppercase tracking-wider">SoftLoopers Software Solutions · Jul 2022 - Jan 2024</p>
              <!-- <p class="text-secondary-glass small">Building intelligent enterprise solutions, GenAI integrations, and robust full-stack architectures.</p> -->
            </div>

            <div class="timeline-item mb-5">
              <div class="timeline-dot-wrap">
                <div class="timeline-dot"></div>
              </div>
              <h5 class="mb-1 fw-bold text-white">Computational Researcher/Developer - Postdoc</h5>
              <p class="text-accent small mb-1 fw-medium text-uppercase tracking-wider">Concordia University, QC · Mar 2019 – Feb 2022</p>
              <!-- <p class="text-secondary-glass small">Architected high-performance data pipelines and automated simulation workflows on Linux HPC clusters.</p> -->
            </div>

            <div class="timeline-item mb-4">
              <div class="timeline-dot-wrap">
                <div class="timeline-dot"></div>
              </div>
              <h5 class="mb-1 fw-bold text-white text-wrap">Technical Content & Systems Coordinator</h5>
              <p class="text-accent small mb-1 fw-medium text-uppercase tracking-wider">University of Delhi, India · Jan 2016 – Dec 2018</p>
              <!-- <p class="text-secondary-glass small">Led digital transformation for national e-learning platforms and coordinated technical content architecture.</p> -->
            </div>
          </div>
        </div>

        <div class="col-md-5 col-lg-4 education-col">
          <h4 class="text-accent mb-5 d-flex align-items-center">
            <span class="header-line"></span> Education
          </h4>
          <div class="edu-list">
            <div class="edu-card mb-4">
              <strong class="text-white d-block">AEC Full Stack Developer</strong>
              <span class="text-accent small mb-1 fw-medium text-uppercase tracking-wider">John Abbott College, Montréal</span>
              <!-- <div class="year-badge">2025</div> -->
            </div>
            
            <div class="edu-card mb-4 fainted">
              <strong class="text-white d-block">PhD in Computational Science</strong>
              <span class="text-accent small mb-1 fw-medium text-uppercase tracking-wider">University of Delhi, India</span>
              <p class="text-secondary-glass small">
                Deep foundations in applied mathematics, statistical mechanics, optimization algorithms, and high-dimensional data analysis, core underpinnings of modern ML.
              </p>
            </div>

            <div class="edu-card fainted">
              <strong class="text-white d-block">MSc & BSc</strong>
              <span class="text-accent small mb-1 fw-medium text-uppercase tracking-wider">University of Delhi, India</span>
            </div>
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

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#experience",
      start: "top 70%",
    }
  });

  tl.from(".exp-title", { y: 20, opacity: 0, duration: 0.8 })
    .from(".timeline-item", { 
      x: -30, 
      opacity: 0, 
      stagger: 0.2, 
      duration: 0.8,
      ease: "power2.out" 
    }, "-=0.4")
    .from(".edu-card", { 
      x: 30, 
      opacity: 0, 
      stagger: 0.2, 
      duration: 0.8,
      ease: "power2.out" 
    }, "-=1");
});
</script>

<style scoped>
.text-accent { color: #e67e22 !important; }

/* Timeline Modernization */
.timeline-container {
  border-left: 2px solid rgba(255, 255, 255, 0.05);
  position: relative;
}

.timeline-item { position: relative; }

.timeline-dot-wrap {
  position: absolute;
  left: -33px;
  top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.timeline-dot {
  width: 12px;
  height: 12px;
  background: #2c5364;
  border: 2px solid #0f2027;
  border-radius: 50%;
  z-index: 2;
}

.timeline-dot.active {
  background: #e67e22;
  box-shadow: 0 0 15px rgba(230, 126, 34, 0.6);
}

.timeline-dot-pulse {
  position: absolute;
  width: 24px;
  height: 24px;
  background: rgba(230, 126, 34, 0.2);
  border-radius: 50%;
  animation: pulse-ring 2s infinite;
}

@keyframes pulse-ring {
  0% { transform: scale(0.5); opacity: 1; }
  100% { transform: scale(1.5); opacity: 0; }
}

/* Glass Typography */
.text-secondary-glass {
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.6;
}

.header-line {
  width: 30px;
  height: 2px;
  background: #e67e22;
  display: inline-block;
  margin-right: 15px;
}

.edu-list {
  display: block !important;
  min-height: 200px;
}

.edu-card {
  opacity: 1 !important; /* Force visibility for debugging */
  display: block !important;
  visibility: visible !important;
}

.edu-card:hover {
  background: rgba(255, 255, 255, 0.06);
  transform: translateX(10px);
  border-color: rgba(230, 126, 34, 0.3);
}

.edu-card.fainted { opacity: 0.7; }

.year-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 0.7rem;
  background: rgba(230, 126, 34, 0.15);
  color: #e67e22;
  padding: 2px 10px;
  border-radius: 20px;
  font-weight: bold;
}

.tracking-wider { letter-spacing: 1px; }
</style>