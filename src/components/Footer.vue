<template>
  <footer class="modern-footer py-5">
    <div class="container text-center">
      <div class="d-flex justify-content-center gap-4 mb-3">
        <a href="https://linkedin.com/in/ritu-arora-dr" target="_blank" class="footer-social-link" aria-label="LinkedIn">
          <i class="bi bi-linkedin"></i>
        </a>
        <a href="https://github.com/RituArora-DevOps" target="_blank" class="footer-social-link" aria-label="GitHub">
          <i class="bi bi-github"></i>
        </a>
        <a href="mailto:jsr.ritu.jsr@gmail.com" class="footer-social-link" aria-label="Email">
          <i class="bi bi-envelope-at"></i>
        </a>
      </div>

      <p class="copyright-text mb-2">
        &copy; {{ currentYear }} <span class="text-white fw-medium">Ritu Arora</span> 
      </p>
      <p class="small opacity-50 mb-4" style="color: rgba(255,255,255,0.6);">Handcrafted in Montréal, QC</p>
      
      <div class="tech-signature-wrapper">
        <div class="tech-signature">
          <span class="signature-label">Engineered with</span>
          <div class="tech-icons">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue 3" class="tech-icon-img" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap 5" class="tech-icon-img" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gsap/gsap-original.svg" alt="GSAP" class="tech-icon-img dark-brand-icon" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" alt="Vite" class="tech-icon-img" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* 1. Footer Container & Layout */
.modern-footer {
  background: #0f2027; /* Your dark-navy variable */
  position: relative;
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

/* 2. Social Links with Glow */
.footer-social-link {
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.8rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: inline-block;
}

.footer-social-link:hover {
  color: #e67e22;
  transform: translateY(-5px) scale(1.1);
  filter: drop-shadow(0 0 10px rgba(230, 126, 34, 0.4));
}

/* 3. Typography & Gaps */
.copyright-text {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  margin-bottom: 4px !important; /* Tightened gap */
}

.tech-signature-wrapper {
  margin-top: 15px; /* Precisely controls gap between text and icons */
}

.signature-label {
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: rgba(255, 255, 255, 0.4);
  font-weight: 700;
}

/* 4. Tech Signature "Pill" Container */
.tech-signature {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 20px; /* Space between label and icon group */
  padding: 10px 25px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.tech-icons {
  display: flex;
  gap: 18px; /* High gap prevents GSAP and Vite overlap during hover-scale */
  align-items: center;
}

/* 5. Icon Styles & Visibility */
.tech-icon-img {
  width: 20px;
  height: 20px;
  object-fit: contain;
  /* Brighter base state so icons aren't "dull" */
  filter: grayscale(0.2) opacity(0.8) brightness(1.2); 
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* Specific Fix for dark GSAP icon visibility */
.dark-brand-icon {
  filter: brightness(1.6) saturate(1.2) !important;
  margin: 0 2px;
}

.tech-icon-img:hover {
  filter: grayscale(0) opacity(1) brightness(1.4);
  transform: scale(1.4) translateY(-2px);
  z-index: 10; /* Ensures hovered icon is always on top */
}

/* 6. Signature Top Accent Glow */
.modern-footer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(230, 126, 34, 0.4), transparent);
}
</style>