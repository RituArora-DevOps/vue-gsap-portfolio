<template>
  <section id="skills" class="py-5 bg-section-alt" style="perspective: 1200px; background: #fbfbfb;">
    <div class="container">
      <h2 class="text-center text-heading mb-5 skills-title">Technical Arsenal</h2>

      <div class="row g-4 justify-content-center">
        <div
          v-for="group in skillGroups"
          :key="group.title"
          class="col-lg-4 col-md-6 col-12 d-flex skill-card-wrapper"
        >
          <div class="glass-bento-card flex-fill">
            <div class="card-content p-4">
              <div class="d-flex align-items-center mb-4">
                <div class="skill-icon-box me-3">
                  <i :class="group.icon"></i>
                </div>
                <h5 class="m-0 text-heading fw-bold">{{ group.title }}</h5>
              </div>
              
              <div class="d-flex flex-wrap gap-2">
                <span
                  v-for="(skill, i) in group.skills"
                  :key="i"
                  class="badge-modern-skill"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
            <div class="glass-shimmer"></div>
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

const skillGroups = [
  {
    title: "AI & Intelligence",
    icon: "bi bi-cpu",
    skills: ["Agentic RAG", "Generative AI", "Computer Vision", "LangChain", "LLMs"]
  },
  {
    title: "DevSecOps",
    icon: "bi bi-shield-check",
    skills: ["Docker", "Kubernetes", "Helm", "Terraform", "SonarQube", "Trivy"]
  },
  {
    title: "Full Stack",
    icon: "bi bi-layers",
    skills: ["Spring Boot", "Java", "Vue.js", "React", "TypeScript", "Node.js"]
  },
  {
    title: "Cloud & Data",
    icon: "bi bi-cloud-arrow-up",
    skills: ["AWS", "Azure", "PostgreSQL", "MongoDB", "Data Pipelines"]
  },
  {
    title: "Core & Research",
    icon: "bi bi-journal-code",
    skills: ["C#", "Python", "Linux HPC", "Agile", "Unit Testing"]
  }
];

onMounted(() => {
  gsap.from(".skill-card-wrapper", {
    scrollTrigger: {
      trigger: "#skills",
      start: "top 80%",
    },
    y: 50,
    opacity: 0,
    stagger: 0.1,
    duration: 0.8,
    ease: "power3.out",
    clearProps: "all"
  });
});
</script>

<style scoped>
/* Bento Glass Card Base */
.glass-bento-card {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 24px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: 0 10px 30px rgba(0,0,0,0.02);
}

.glass-bento-card:hover {
  transform: translateY(-8px) scale(1.02);
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);
  border-color: #e67e2244;
}

/* Icon Box Styling */
.skill-icon-box {
  width: 48px;
  height: 48px;
  background: #0f2027;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  font-size: 1.4rem;
  box-shadow: 0 4px 12px rgba(15, 32, 39, 0.15);
}

.glass-bento-card:hover .skill-icon-box {
  background: #e67e22;
  transform: rotate(-5deg);
  transition: all 0.3s ease;
}

/* 2026 Pill Badges */
.badge-modern-skill {
  background: rgba(15, 32, 39, 0.04);
  color: #1a252f;
  padding: 0.5rem 0.9rem;
  border-radius: 100px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(15, 32, 39, 0.05);
  transition: all 0.2s ease;
}

.badge-modern-skill:hover {
  background: white;
  border-color: #e67e22;
  color: #e67e22;
  transform: scale(1.05);
}

/* Light Sweep Shimmer Effect */
.glass-shimmer {
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    to right,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  transform: skewX(-25deg);
  transition: 0.7s;
}

.glass-bento-card:hover .glass-shimmer {
  left: 150%;
}
</style>