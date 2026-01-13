<template>
  <section id="experience" class="py-5 bg-dark text-light">
    <div class="container">
      <h2 class="text-center mb-5 text-white">Experience & Education</h2>
      
      <div class="row justify-content-center">
        <div class="col-md-7 col-lg-6 me-lg-4 motion-card" v-scroll>
          <h4 class="text-accent mb-4">Professional Experience</h4>
          
          <div class="ps-4 border-start border-secondary border-2">
            
            <div class="mb-5 position-relative">
              <div class="timeline-dot bg-accent"></div>
              <h5 class="mb-1 fw-bold text-white">AI Full Stack Developer</h5>
              <p class="text-accent small mb-1 fw-medium">Yulcom Technologies, QC · Oct 2025 – Present</p>
              <p class="text-secondary small">Building intelligent enterprise solutions and full-stack architectures.</p>
            </div>

            <div class="mb-5 position-relative">
              <div class="timeline-dot"></div>
              <h5 class="mb-1 fw-semibold">Computational Researcher - Postdoc</h5>
              <p class="text-secondary small mb-1">Concordia University, QC · Mar 2019 – Feb 2022</p>
            </div>

            <div class="mb-4 position-relative">
              <div class="timeline-dot"></div>
              <h5 class="mb-1 fw-semibold">Assistant Professor</h5>
              <p class="text-secondary small mb-1">University of Delhi, India · Jan 2016 – Dec 2018</p>
            </div>
          </div>
        </div>

        <div class="col-md-5 col-lg-4 motion-card" v-scroll style="transition-delay: 0.2s;">
          <h4 class="text-accent mb-4">Education</h4>
          <ul class="list-unstyled">
            <li class="mb-4 ps-3 border-start border-accent border-3">
              <strong class="text-white">AEC Full Stack Developer</strong><br />
              <span class="small">John Abbott College, Montréal</span><br />
              <span class="text-accent small fst-italic">2025</span>
            </li>
            
            <li class="mb-4 ps-3">
              <strong class="text-white">PhD (Computational Chemistry)</strong><br />
              <span class="small">University of Delhi, India</span>
            </li>

            <li class="mb-3 ps-3">
              <strong class="text-white">MSc & BSc</strong><br />
              <span class="small">University of Delhi, India</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-accent {
  color: #e67e22 !important; /* Your Orange Accent */
}

.bg-accent {
  background-color: #e67e22 !important;
}

/* Timeline logic */
.position-relative {
  position: relative;
}

.timeline-dot {
  position: absolute;
  left: -33px; /* Centers dot on the border-start */
  top: 6px;
  width: 14px;
  height: 14px;
  background-color: #495057; /* Muted gray for past roles */
  border-radius: 50%;
  border: 3px solid #212529; /* Match bg-dark */
  z-index: 1;
}

/* Make the current job dot glow or be colored */
.bg-accent.timeline-dot {
  box-shadow: 0 0 8px rgba(230, 126, 34, 0.5);
}

/* Vertical line for education */
.border-accent {
  border-color: #e67e22 !important;
}

/* Animation handling */
.motion-card {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.motion-card.appear {
  opacity: 1;
  transform: translateY(0);
}
</style>