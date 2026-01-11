<template>
  <section id="projects" class="py-5 bg-section-alt">
    <div class="container">
      <h2 class="text-center text-heading display-5 mb-2" v-scroll>Featured Projects</h2>
      <p class="text-center text-muted mb-5 motion-card" v-scroll>
        Showcasing expertise in Agentic RAG, Cloud-Native DevOps, and Full-Stack Engineering.
      </p>

      <div class="row gy-4">
        <div 
          v-for="(project, key, index) in projects" 
          :key="key" 
          class="col-md-6 col-lg-4 motion-card"
          v-scroll
          :style="{ transitionDelay: (index * 0.1) + 's' }"
        >
          <ProjectCard :project="project" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue';

const projects = {
  ai_subscription: {
    title: 'AI-Enhanced Subscription System',
    description: 'Upgraded a role-based RESTful API with an Agentic RAG workflow to automate document analysis and intelligent user support.',
    tech: 'React, FastAPI, LangChain, OpenAI API, PostgreSQL, Docker, Pytest',
    github: 'https://github.com/RituArora-DevOps/Secure-FastAPI-powered-backend-subscription-app.git',
    // CHANGE: Use the .io link, not the /blob/ link
    ppt: 'https://rituarora-devops.github.io/projects-presentation/FastAPI-Subscription.pdf'
  },
  heart_disease_ai: {
    title: 'Heart Risk Predictor & Explainable AI',
    description: 'Predictive ML pipeline integrating SHAP for model interpretability, served via a FastAPI microservice for transparent clinical decision support.',
    tech: 'React, FastAPI, Scikit-learn, SHAP, Python, Docker',
    github: 'https://github.com/RituArora-DevOps/heart-disease-predictor',
    ppt: 'https://rituarora-devops.github.io/projects-presentation/HeartDiseasePredictor2.pdf'
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
    ppt: 'https://rituarora-devops.github.io/projects-presentation/SpringBootnJavaFXML.pdf',
  },
  online_store_dotnet: {
    title: 'Enterprise Store - .NET/C#',
    description: 'Web-based e-commerce implementation using ASP.NET MVC and SQL Server. Features secure Identity management and role-based access control (RBAC).',
    tech: 'ASP.NET MVC, C#, SQL Server, Entity Framework, Identity',
    github: 'https://github.com/RituArora-DevOps/OnlineStoreFront.git', 
    ppt: 'https://rituarora-devops.github.io/projects-presentation/OnlineStoreFront-ASPNET.pdf'
  },
  car_rental: {
    title: 'Car Rental Management System',
    description: 'Full-stack SaaS platform featuring a customer booking interface and administrative dashboard for fleet management.',
    tech: 'Node.js, Express.js, MySQL, Bootstrap, Render',
    github: 'https://github.com/RituArora-DevOps/RentnDrive',
    demo: 'https://www.youtube.com/watch?v=VGSBVmFnqrc',
    live: 'https://carrentalmanagement.onrender.com',
    ppt: 'https://rituarora-devops.github.io/projects-presentation/CarRentalSystem-final.pdf'
  },
  movie_explorer: {
    title: 'Movie Explorer Web App',
    description: 'SSR application with TMDB API integration, search/filter functionality, and Google OAuth secure login.',
    tech: 'Next.js, React, NextAuth, MongoDB, Tailwind CSS, TMDB API',
    github: 'https://github.com/RIDagher/movie-explorer-next',
    live: 'https://movie-explorer-next-re3c.vercel.app',
    ppt: 'https://rituarora-devops.github.io/projects-presentation/Movie%20Explorer.pdf'
  },
  day_care: {
    title: 'Day Care Management System',
    description: 'A secure multi-user platform using PHP (Slim 4) with role-based dashboards. Implemented MVC templating, session security, and Monolog for administrative audit trails.',
    tech: 'PHP (Slim 4), MySQL, Twig, MeekroDB, Monolog, Bootstrap',
    github: 'https://github.com/FYFYBai/DayCare_Team4',
    live: 'https://daycare-management.42web.io/',
    ppt: 'https://rituarora-devops.github.io/projects-presentation/Team4-DayCareSystemManagement.pdf'
  },
  laravel_portfolio: {
    title: 'Multilingual Laravel Portfolio',
    description: 'An accessible, localized personal portfolio featuring modular Blade components and SCSS. Focused on SEO and internationalization (i18n) standards.',
    tech: 'Laravel, Blade, SCSS, JavaScript, PHP, Render',
    github: 'https://github.com/RituArora-DevOps/portfolio-laravel',
    live: 'https://laravel-resume.onrender.com/en'
  },
};
</script>

<style scoped>
.text-heading {
  color: #1a252f;
  font-weight: 700;
}

/* Sync with your scroll directive */
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