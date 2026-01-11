<template>
  <div class="card h-100 bg-white text-dark shadow-sm border-0 project-card">
    <div class="accent-bar" :class="{ 'bg-ai': isAI, 'bg-devops': isDevOps }"></div>
    
    <div class="card-body d-flex flex-column p-4">
      <div class="d-flex justify-content-between align-items-start mb-2">
        <h5 class="card-title fw-bold text-heading mb-0">{{ project.title }}</h5>
        <span v-if="isAI" class="badge-type ai">AI & ML</span>
        <span v-if="isDevOps" class="badge-type devops">DevOps</span>
      </div>
      
      <p class="card-text text-muted small flex-grow-1 mt-2">
        {{ project.description }}
      </p>
      
      <div class="mt-3">
        <div class="d-flex flex-wrap gap-1">
          <span v-for="tech in project.tech.split(',')" :key="tech" class="tech-pill">
            {{ tech.trim() }}
          </span>
        </div>
      </div>
    </div>

    <div class="card-footer bg-light border-0 d-flex flex-wrap gap-2 p-3 justify-content-center">
      <a v-if="project.github" :href="project.github" target="_blank" class="btn-action outline">
        <i class="bi bi-github"></i> Code
      </a>
      <a v-if="project.live" :href="project.live" target="_blank" class="btn-action solid">
        <i class="bi bi-globe"></i> Live
      </a>
      <a v-if="project.demo" :href="project.demo" target="_blank" class="btn-action accent">
        <i class="bi bi-play-circle"></i> Demo
      </a>
      <a v-if="project.ppt" :href="project.ppt" target="_blank" class="btn-action outline">
        <i class="bi bi-file-earmark-pdf"></i> PDF
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
  props.project.tech.toLowerCase().includes('scikit')
);

const isDevOps = computed(() => 
  props.project.title.toLowerCase().includes('devops') || 
  props.project.tech.toLowerCase().includes('terraform')
);
</script>

<style scoped>
.project-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 12px;
}
.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
}

.accent-bar {
  height: 4px;
  width: 100%;
  background: #dee2e6; /* Default gray */
  transition: background 0.3s;
}
.project-card:hover .accent-bar {
  background: #e67e22; /* Your Orange Accent on hover */
}
.bg-ai { background: #6f42c1; } /* Purple for AI */
.bg-devops { background: #198754; } /* Green for DevOps */

.tech-pill {
  font-size: 0.7rem;
  background: #f8f9fa;
  color: #1a252f;
  padding: 2px 8px;
  border-radius: 4px;
  border: 1px solid #e9ecef;
}

.badge-type {
  font-size: 0.65rem;
  padding: 2px 8px;
  border-radius: 50px;
  font-weight: 700;
  text-transform: uppercase;
}
.badge-type.ai { background: #f3e5f5; color: #6f42c1; }
.badge-type.devops { background: #e8f5e9; color: #198754; }

.btn-action {
  font-size: 0.75rem;
  padding: 6px 12px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: 0.2s;
}
.btn-action.outline { border: 1px solid #1a252f; color: #1a252f; }
.btn-action.outline:hover { background: #1a252f; color: white; }
.btn-action.solid { background: #1a252f; color: white; }
.btn-action.accent { background: #e67e22; color: white; border: 1px solid #e67e22; }
.btn-action.accent:hover { background: #d35400; }
</style>