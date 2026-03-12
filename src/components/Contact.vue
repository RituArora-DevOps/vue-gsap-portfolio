<template>
  <section id="contact" class="py-5 bg-section" style="background: #fbfbfb;">
    <div class="container">
      <h2 class="text-center text-heading mb-5 contact-title">Get In Touch</h2>
      
      <div class="row justify-content-center">
        <div class="col-md-10 col-lg-9 text-center">
          <p class="lead mb-5 bio-text px-md-5">
            Interested in collaborating on <span class="text-dark fw-bold">AI-driven projects</span>, 
            <span class="text-dark fw-bold">DevOps architecture</span>, or just want to say hi? 
            I'm always open to discussing new opportunities.
          </p>

          <div class="row g-4 justify-content-center">
            <div class="col-sm-4 contact-card-wrapper">
              <a href="mailto:jsr.ritu.jsr@gmail.com" class="modern-contact-card">
                <div class="icon-box">
                  <i class="bi bi-envelope-at-fill"></i>
                </div>
                <span class="label">Email</span>
                <span class="value">jsr.ritu.jsr@gmail.com</span>
              </a>
            </div>

            <div class="col-sm-4 contact-card-wrapper">
              <a href="https://github.com/RituArora-DevOps" target="_blank" class="modern-contact-card">
                <div class="icon-box">
                  <i class="bi bi-github"></i>
                </div>
                <span class="label">GitHub</span>
                <span class="value">RituArora-DevOps</span>
              </a>
            </div>

            <div class="col-sm-4 contact-card-wrapper">
              <a href="https://www.linkedin.com/in/ritu-arora-dr/" target="_blank" class="modern-contact-card">
                <div class="icon-box">
                  <i class="bi bi-linkedin"></i>
                </div>
                <span class="label">LinkedIn</span>
                <span class="value">ritu-arora-dr</span>
              </a>
            </div>
          </div>

          <div class="mt-5 pt-4 border-top footer-note">
            <p class="small text-muted mb-0 d-flex align-items-center justify-content-center">
              <i class="bi bi-geo-alt-fill me-2 text-accent"></i> Based in Montréal, QC
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 1. Alignment & Visibility Fixes */
.bio-text {
  color: #4a5568 !important;
  line-height: 1.8;
}

.modern-contact-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 1.5rem;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  text-decoration: none !important;
  height: 100%;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: 0 4px 15px rgba(0,0,0,0.02);
}

.modern-contact-card:hover {
  transform: translateY(-10px);
  background: #ffffff;
  border-color: rgba(230, 126, 34, 0.3);
  box-shadow: 0 15px 35px rgba(0,0,0,0.06) !important;
}

/* 2. Icon Box Polish */
.icon-box {
  width: 56px;
  height: 56px;
  background: #0f2027; /* Dark Navy */
  color: white;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.icon-box i {
  font-size: 1.6rem;
  line-height: 1;
  display: block;
}

.modern-contact-card:hover .icon-box {
  background: #e67e22; /* Orange Glow on hover */
  transform: scale(1.1) rotate(-5deg);
}

/* 3. Text Visibility */
.label {
  font-weight: 800;
  color: #0f2027 !important;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 1.5px;
  margin-bottom: 0.5rem;
}

.value {
  font-size: 0.85rem;
  color: #4a5568 !important;
  font-weight: 500;
  word-break: break-all;
}

.text-accent {
  color: #e67e22;
}

/* Fallback for GSAP */
.contact-title, .bio-text, .contact-card-wrapper {
  opacity: 1;
}
</style>