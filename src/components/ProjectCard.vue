<template>
  <div class="project-glass-card h-100 shadow-sm" :class="{ 'ai-glow': isAI, 'devops-glow': isDevOps }">
    <div class="accent-glow-bar" :class="{ 'bg-ai': isAI, 'bg-devops': isDevOps }"></div>
    
    <div class="card-body d-flex flex-column p-4">
      <div class="d-flex justify-content-between align-items-start mb-3">
        <h5 class="project-title fw-bold m-0">{{ project.title }}</h5>
        <div class="category-tag">
          <span v-if="isAI" class="type-pill ai">AI</span>
          <span v-if="isDevOps" class="type-pill devops">DevOps</span>
        </div>
      </div>
      
      <p class="project-description small flex-grow-1">
        {{ project.description }}
      </p>
      
      <div class="tech-stack mt-4">
        <div class="d-flex flex-wrap gap-2">
          <span v-for="tech in project.tech.split(',')" :key="tech" class="tech-tag">
            {{ tech.trim() }}
          </span>
        </div>
      </div>
    </div>

    <div class="project-footer d-flex gap-2 p-3">
      <a v-if="project.github" :href="project.github" target="_blank" class="action-link" title="Source Code">
        <i class="bi bi-github"></i>
      </a>
      <a v-if="project.live" :href="project.live" target="_blank" class="action-link primary" title="Launch App">
        <i class="bi bi-rocket-takeoff"></i>
      </a>
      <a v-if="project.demo" :href="project.demo" target="_blank" class="action-link accent" title="Watch Demo">
        <i class="bi bi-play-fill"></i>
      </a>
      <a v-if="project.ppt" :href="project.ppt" target="_blank" class="action-link" title="Documentation">
        <i class="bi bi-file-earmark-text"></i>
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps(['project']);

const isAI = computed(() => 
  props.project.title.toLowerCase().includes('ai') || 
  props.project.tech.toLowerCase().includes('langchain') ||
  props.project.tech.toLowerCase().includes('scikit') ||
  props.project.tech.toLowerCase().includes('openai')
);

const isDevOps = computed(() => 
  props.project.title.toLowerCase().includes('devops') || 
  props.project.tech.toLowerCase().includes('terraform') ||
  props.project.tech.toLowerCase().includes('eks') ||
  props.project.tech.toLowerCase().includes('kubernetes')
);
</script>

<style scoped>
.project-glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
}

.project-glass-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0,0,0,0.08) !important;
  background: white;
}

/* Category Specific Glows */
.ai-glow:hover { border-color: rgba(111, 66, 193, 0.3); }
.devops-glow:hover { border-color: rgba(25, 135, 84, 0.3); }

.accent-glow-bar {
  height: 4px;
  width: 100%;
  background: #e9ecef;
}
.bg-ai { background: linear-gradient(90deg, #6f42c1, #a29bfe); }
.bg-devops { background: linear-gradient(90deg, #198754, #55efc4); }

.project-title { color: #0f2027; font-size: 1.1rem; line-height: 1.4; }
.project-description { color: #636e72; line-height: 1.6; }

.tech-tag {
  font-size: 0.7rem;
  background: rgba(15, 32, 39, 0.05);
  color: #0f2027;
  padding: 4px 10px;
  border-radius: 100px;
  font-weight: 600;
  border: 1px solid rgba(15, 32, 39, 0.05);
}

.type-pill {
  font-size: 0.6rem;
  padding: 3px 10px;
  border-radius: 100px;
  font-weight: 800;
  letter-spacing: 0.5px;
}
.type-pill.ai { background: rgba(111, 66, 193, 0.1); color: #6f42c1; }
.type-pill.devops { background: rgba(25, 135, 84, 0.1); color: #198754; }

/* Action Links */
.action-link {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #f1f3f5;
  color: #0f2027;
  text-decoration: none;
  transition: 0.3s;
}
.action-link:hover { background: #0f2027; color: white; transform: rotate(-5deg); }
.action-link.primary { background: #0f2027; color: white; }
.action-link.primary:hover { background: #e67e22; }
.action-link.accent { background: #e67e22; color: white; }
</style>