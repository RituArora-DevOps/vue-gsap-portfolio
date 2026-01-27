<template>
  <section id="projects" class="py-5 bg-section-alt" style="background: #f8f9fa;">
    <div class="container">
      <h2 class="text-center text-heading display-5 mb-2 project-header">Featured Projects</h2>
      <p class="text-center text-muted mb-5 project-subtitle">
        Showcasing expertise in Agentic RAG, Cloud-Native DevOps, and Full-Stack Engineering.
      </p>

      <div class="row gy-4">
        <div 
          v-for="project in projects" 
          :key="project.title" 
          class="col-md-6 col-lg-4 project-anim-wrapper"
        >
          <ProjectCard :project="project" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from './ProjectCard.vue';

gsap.registerPlugin(ScrollTrigger);

const projects = {
  ai_subscription: {
    title: 'AI-Enhanced Subscription System',
    description: 'Upgraded a role-based RESTful API with an Agentic RAG workflow to automate document analysis and intelligent user support.',
    tech: 'React, FastAPI, LangChain, OpenAI API, PostgreSQL, Docker, Pytest',
    github: 'https://github.com/RituArora-DevOps/Secure-FastAPI-powered-backend-subscription-app.git',
    // CHANGE: Use the .io link, not the /blob/ link
    //ppt: 'https://rituarora-devops.github.io/projects-presentation/FastAPI-Subscription.pdf'
  },
  heart_disease_ai: {
    title: 'Heart Risk Predictor & Explainable AI',
    description: 'Predictive ML pipeline integrating SHAP for model interpretability, served via a FastAPI microservice for transparent clinical decision support.',
    tech: 'React, FastAPI, Scikit-learn, SHAP, Python, Docker',
    github: 'https://github.com/RituArora-DevOps/heart-disease-predictor',
    //ppt: 'https://rituarora-devops.github.io/projects-presentation/HeartDiseasePredictor2.pdf'
  },
  devops_mern: {
    title: 'DevOpsified MERN Stack',
    description: 'Full CI/CD pipeline using Jenkins, Terraform, and EKS. Managed via GitOps with ArgoCD for production-ready deployments.',
    tech: 'AWS EKS, ArgoCD, Terraform, Jenkins, Docker, SonarQube, Trivy',
    github: 'https://github.com/RituArora-DevOps/DevOps-2.git',
  },
  online_store_java: {
    title: 'Enterprise Store - Java/Spring',
    description: 'A desktop-to-cloud shopping system. Features a Spring Boot REST API and a JavaFX client. Architected using SOLID principles and Design Patterns (Singleton, Strategy, Factory).',
    tech: 'Java, Spring Boot, JavaFX, PostgreSQL, Docker, JUnit, JPA',
    github: 'https://github.com/RituArora-DevOps/online-store-system-postgres-v2',
    //ppt: 'https://rituarora-devops.github.io/projects-presentation/SpringBootnJavaFXML.pdf',
  },
  online_store_dotnet: {
    title: 'Enterprise Store - .NET/C#',
    description: 'Web-based e-commerce implementation using ASP.NET MVC and SQL Server. Features secure Identity management and role-based access control (RBAC).',
    tech: 'ASP.NET MVC, C#, SQL Server, Entity Framework, Identity',
    github: 'https://github.com/RituArora-DevOps/OnlineStoreFront.git', 
    //ppt: 'https://rituarora-devops.github.io/projects-presentation/OnlineStoreFront-ASPNET.pdf'
  },
  car_rental: {
    title: 'Car Rental Management System',
    description: 'Full-stack SaaS platform featuring a customer booking interface and administrative dashboard for fleet management.',
    tech: 'Node.js, Express.js, MySQL, Bootstrap, Render',
    github: 'https://github.com/RituArora-DevOps/RentnDrive',
    demo: 'https://www.youtube.com/watch?v=VGSBVmFnqrc',
    //live: 'https://carrentalmanagement.onrender.com',
    //ppt: 'https://rituarora-devops.github.io/projects-presentation/CarRentalSystem-final.pdf'
  },
  movie_explorer: {
    title: 'Movie Explorer Web App',
    description: 'SSR application with TMDB API integration, search/filter functionality, and Google OAuth secure login.',
    tech: 'Next.js, React, NextAuth, MongoDB, Tailwind CSS, TMDB API',
    github: 'https://github.com/RIDagher/movie-explorer-next',
    live: 'https://movie-explorer-next-re3c.vercel.app',
    //ppt: 'https://rituarora-devops.github.io/projects-presentation/Movie%20Explorer.pdf'
  },
  day_care: {
    title: 'Day Care Management System',
    description: 'A secure multi-user platform using PHP (Slim 4) with role-based dashboards. Implemented MVC templating, session security, and Monolog for administrative audit trails.',
    tech: 'PHP (Slim 4), MySQL, Twig, MeekroDB, Monolog, Bootstrap',
    github: 'https://github.com/FYFYBai/DayCare_Team4',
    live: 'https://daycare-management.42web.io/',
    //ppt: 'https://rituarora-devops.github.io/projects-presentation/Team4-DayCareSystemManagement.pdf'
  },
  laravel_portfolio: {
    title: 'Multilingual Laravel Portfolio',
    description: 'An accessible, localized personal portfolio featuring modular Blade components and SCSS. Focused on SEO and internationalization (i18n) standards.',
    tech: 'Laravel, Blade, SCSS, JavaScript, PHP, Render',
    github: 'https://github.com/RituArora-DevOps/portfolio-laravel',
    live: 'https://laravel-resume.onrender.com/en'
  },
};
onMounted(() => {
  gsap.from(".project-header, .project-subtitle", {
    scrollTrigger: { trigger: "#projects", start: "top 85%" },
    y: 30,
    opacity: 0,
    stagger: 0.2,
    duration: 1
  });

  gsap.from(".project-anim-wrapper", {
    scrollTrigger: {
      trigger: ".row.gy-4",
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
/* 1. Typography Refinement */
.text-heading {
  color: #0f2027; /* Updated to your modern dark-navy */
  font-weight: 800;
  letter-spacing: -0.02em;
}

.project-subtitle {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  color: rgba(15, 32, 39, 0.7) !important;
}

/* 2. Layout Spacing */
#projects {
  /* Ensuring enough space for the floating nav and footer transitions */
  padding-top: 100px;
  padding-bottom: 100px;
}

/* 3. Animation Note: 
   We removed .motion-card and .appear because GSAP is handling 
   the entrance. This prevents "double-firing" animations.
*/

/* 4. Responsive Adjustments */
@media (max-width: 768px) {
  .display-5 {
    font-size: 2rem;
  }
}
</style>