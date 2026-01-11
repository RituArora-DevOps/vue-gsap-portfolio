<template>
  <section id="contact" class="py-5 bg-section">
    <div class="container">
      <h2 class="text-center text-heading mb-4" v-scroll>Get In Touch</h2>
      <div class="row justify-content-center">
        <div class="col-md-10 col-lg-8 text-center motion-card" v-scroll>
          <p class="lead mb-5 text-secondary">
            Interested in collaborating on AI-driven projects, DevOps architecture, or just want to say hi? 
            I'm always open to discussing new opportunities.
          </p>

          <div class="row g-4 justify-content-center">
            <div class="col-sm-4">
              <a href="mailto:jsr.ritu.jsr@gmail.com" class="contact-card shadow-sm">
                <i class="bi bi-envelope-fill mb-2"></i>
                <span class="label">Email</span>
                <span class="value">jsr.ritu.jsr@gmail.com</span>
              </a>
            </div>

            <div class="col-sm-4">
              <a href="https://github.com/RituArora-DevOps" target="_blank" class="contact-card shadow-sm">
                <i class="bi bi-github mb-2"></i>
                <span class="label">GitHub</span>
                <span class="value">RituArora-DevOps</span>
              </a>
            </div>

            <div class="col-sm-4">
              <a href="https://www.linkedin.com/in/ritu-arora-dr/" target="_blank" class="contact-card shadow-sm">
                <i class="bi bi-linkedin mb-2"></i>
                <span class="label">LinkedIn</span>
                <span class="value">ritu-arora-dr</span>
              </a>
            </div>
          </div>

          <div class="mt-5 pt-4 border-top">
            <p class="small text-muted mb-0">Based in Greater Montréal, QC</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  height: 100%;
  border-bottom: 3px solid transparent;
}

.contact-card:hover {
  transform: translateY(-8px);
  border-bottom: 3px solid #e67e22; /* Your Orange Accent */
}

.contact-card i {
  font-size: 2rem;
  color: #1a252f; /* Dark Blue */
}

.contact-card .label {
  font-weight: 700;
  color: #1a252f;
  margin-top: 0.5rem;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

.contact-card .value {
  font-size: 0.85rem;
  color: #6c757d;
  word-break: break-all;
}

/* Scroll Animation */
.motion-card {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease;
}
.motion-card.appear {
  opacity: 1;
  transform: translateY(0);
}
</style>