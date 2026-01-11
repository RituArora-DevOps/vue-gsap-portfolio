<template>
  <section id="about" class="py-5 bg-section">
    <div class="container">
      <h2 class="text-center text-heading mb-5">About Me</h2>
      
      <div class="row gy-4 align-items-center justify-content-center">
        <div class="col-lg-8 motion-card" v-scroll>
          <h3 class="mb-3" style="color: #1a252f;">Bridging Analysis & Architecture</h3>
          
          <p class="lead text-accent fw-semibold">
            Highly analytical Full-Stack Developer specializing in scalable, data-driven applications.
          </p>
          
          <p class="text-muted">
            I leverage my background in scientific research to engineer robust backends and 
            complex data synchronization pipelines. My focus is on creating production-grade 
            software that is as precise as it is scalable.
          </p>
          
          <p class="text-muted mb-4">
            <strong>Currently exploring:</strong> I am actively expanding my expertise in 
            Generative AI, Computer Vision, and Agentic RAG workflows to build the next 
            generation of intelligent enterprise solutions.
          </p>

          <div class="d-flex flex-wrap gap-2 mt-4">
            <span class="badge badge-custom"> React.js & Vue.js</span>
            <span class="badge badge-custom">Java / Spring Boot</span>
            <span class="badge badge-custom">Python</span>
            <span class="badge badge-custom">AWS & Azure</span>
            <span class="badge badge-custom">SQL & NoSQL</span>
          </div>
        </div>

        <div class="col-lg-4 motion-card" v-scroll>
          <div class="research-card p-4 rounded-4 shadow-sm">
            <h5 class="h6 text-uppercase fw-bold text-accent mb-3">The Research Edge</h5>
            <ul class="list-unstyled small mb-0 text-white">
              <li class="mb-3 d-flex align-items-start">
                <span class="me-2">🧪</span>
                <span><strong>Precision:</strong> Scientific rigor applied to code quality.</span>
              </li>
              <li class="mb-3 d-flex align-items-start">
                <span class="me-2">📊</span>
                <span><strong>Data-First:</strong> Expert at managing complex pipelines.</span>
              </li>
              <li class="d-flex align-items-start">
                <span class="me-2">🧠</span>
                <span><strong>AI Ready:</strong> PhD-level background in logic.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Matching your badge style to your dark-blue headings */
.badge-custom {
  background-color: transparent;
  color: #1a252f;
  border: 1px solid #1a252f;
  padding: 0.6rem 1rem;
  font-weight: 500;
}

/* Creating a card that complements your .gradient-hero colors */
.research-card {
  background: #1a252f; /* Matching your heading color */
  color: white;
  border-left: 4px solid #e67e22; /* The accent color as a highlight */
}

.research-card strong {
  color: #e67e22; /* The accent color */
}

.rounded-4 {
  border-radius: 1rem !important;
}
/* The starting state: invisible and shifted down 20px */
.motion-card {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
} 
/* Delay the Research Card (the col-lg-4) so it pops up after the text */
.col-lg-4.motion-card {
  transition-delay: 0.3s;
}

/* The "visible" state: triggered by JavaScript */
.motion-card.appear {
  opacity: 1;
  transform: translateY(0);
}
</style>