<template>
  <section id="skills" class="py-5 bg-section-alt">
    <div class="container">
      <h2 class="text-center text-heading mb-5">Technical Arsenal</h2>

      <div class="row g-4 justify-content-center">
        <div
          v-for="(group, index) in skillGroups"
          :key="group.title"
          class="col-lg-4 col-md-6 col-12 d-flex motion-card"
          v-scroll
          :style="{ transitionDelay: (index * 0.1) + 's' }"
        >
          <div class="card shadow-sm flex-fill border-0 skill-hover-card">
            <div class="card-body text-center p-4">
              <div class="skill-icon-wrapper mb-3">
                <i :class="group.icon" class="fs-1 text-accent"></i>
              </div>
              
              <h5 class="card-title text-heading fw-bold mb-3">
                {{ group.title }}
              </h5>
              
              <div class="d-flex flex-wrap justify-content-center gap-2">
                <span
                  v-for="(skill, i) in group.skills"
                  :key="i"
                  class="badge-skill"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skillGroups = [
  {
    title: "AI & Intelligence",
    icon: "bi bi-cpu", // Using Bootstrap Icons or DevIcons
    skills: ["Agentic RAG", "Generative AI", "Computer Vision", "LangChain", "LLMs"]
  },
  {
    title: "Backend",
    icon: "devicon-spring-plain",
    skills: ["Spring Boot", "Java", "Node.js", "PHP", "Python", "Express.js"]
  },
  {
    title: "Frontend",
    icon: "devicon-vuejs-plain",
    skills: ["Vue.js", "React", "JavaScript", "TypeScript", "Tailwind CSS", "Bootstrap"]
  },
  {
    title: "DevSecOps",
    icon: "devicon-docker-plain",
    skills: ["Docker", "Kubernetes", "Helm", "Jenkins", "Terraform", "SonarQube", "Trivy"]
  },
  {
    title: "Cloud Engineering",
    icon: "devicon-amazonwebservices-original",
    skills: ["AWS", "Azure", "GCP", "Cloud-Native Architecture"]
  },
  {
    title: "Database",
    icon: "devicon-mysql-plain",
    skills: ["PostgreSQL", "MongoDB", "SQL Server", "JPA", "Entity Framework"]
  },
  {
    title: "Core & Research",
    icon: "bi bi-journal-code",
    skills: ["C#", "Shell", "Agile/Scrum", "Linux", "Data Pipelines", "JUnit", "Pytest"]
  }
];
</script>

<style scoped>
.badge-skill {
  background-color: #f1f3f5;
  color: #1a252f; /* Your dark blue */
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s;
  border: 1px solid transparent;
}

.badge-skill:hover {
  border-color: #e67e22; /* Your orange accent */
  color: #e67e22;
  background-color: white;
}

.skill-hover-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-bottom: 3px solid transparent !important;
}

.skill-hover-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
  border-bottom: 3px solid #e67e22 !important;
}

/* Stagger animation setup */
.motion-card {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
}
.motion-card.appear {
  opacity: 1;
  transform: translateY(0);
}
</style>