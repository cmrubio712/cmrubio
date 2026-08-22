export const content = {
  en: {
    meta: {
      title: "Carlos Rubio — Software Developer",
      description: "Portfolio and resume for Carlos Rubio, software developer.",
    },
    nav: {
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      projects: "Projects",
      contact: "Contact",
    },
    langToggle: {
      label: "ES",
      href: "/es/",
      targetLang: "es",
      ariaLabel: "Switch to Spanish",
    },
    themeToggle: {
      ariaLabel: "Toggle light/dark theme",
    },
    hero: {
      eyebrow: "Software Developer",
      tagline:
        "I build clean, full-stack applications — from Angular front ends to REST APIs and the CI/CD pipelines that ship them to production.",
      viewProjects: "View Projects",
      getInTouch: "Get in Touch",
      stats: [
        { count: 5, label: "Years Experience" },
        { count: 2, label: "Fluent Languages" },
        { count: 1, label: "Live Project" },
      ],
    },
    skills: {
      label: "Skills",
      title: "What I work with",
      intro:
        "A mix of systems-level fundamentals and practical web development, built through coursework, personal projects, and real deployments.",
      groups: [
        {
          category: "Frontend",
          items: ["Angular", "Astro", "TypeScript", "JavaScript", "HTML5", "CSS", "XML"],
        },
        {
          category: "Backend & APIs",
          items: [
            "REST APIs",
            "Database Operations",
            "Server-Side Rendering",
            "Google Sheets API",
            "SQL",
            "Java",
            "Python 3",
            "C / C++",
          ],
        },
        {
          category: "DevOps & Cloud",
          items: [
            "CI/CD Pipelines",
            "GitHub Actions",
            "OpenShift",
            "ArgoCD",
            "GitLab",
            "Quay",
            "Helm Charts",
            "FTP Deployment",
            "Linux (Ubuntu/CentOS)",
          ],
        },
        {
          category: "Networking & Infrastructure",
          items: ["Cisco Switches & Firewalls", "Palo Alto Firewalls", "Server Rack Configuration", "Network Testing"],
        },
        {
          category: "Also experienced with",
          items: ["Agile / Jira", "Git", "Bash", "x86 Assembly", "C# / OpenGL", "R (RStudio)", "MATLAB", "UML", "macOS"],
        },
      ],
      bilingualNote: "Bilingual — fluent in English and Spanish.",
      strengthsTitle: "Core Strengths",
      strengths: [
        { name: "Full-Stack Development (Angular / TypeScript)", level: 85 },
        { name: "REST APIs & Backend", level: 85 },
        { name: "CI/CD & DevOps (OpenShift / ArgoCD)", level: 80 },
        { name: "Python", level: 85 },
        { name: "Networking (Cisco / Palo Alto)", level: 75 },
        { name: "SQL & Databases", level: 75 },
      ],
    },
    experience: {
      label: "Experience",
      title: "Work Experience",
      jobs: [
        {
          role: "Full-Stack Developer",
          company: "Sandia National Laboratories",
          period: "Jan 2022 – Present",
          bullets: [
            "Build full-stack applications — frontend with Angular, TypeScript, and HTML; backend with REST APIs, database operations, server-side rendering, and business logic.",
            "Built CI/CD pipelines from scratch and deploy applications to OpenShift using ArgoCD, Quay, and GitLab.",
            "Write Helm charts for standard deployment manifests.",
            "Author documentation, user acceptance tests, and internal test cases.",
            "Drove code coverage on an application from 0% by writing the majority of its test suite.",
          ],
        },
        {
          role: "Network Associate Engineer",
          company: "SAIC (Science Applications International Corporation)",
          period: "Oct 2020 – Dec 2021",
          bullets: [
            "Configured server racks, Cisco switches and firewalls, and Palo Alto firewalls from the box.",
            "Developed a network testing environment.",
          ],
        },
      ],
      notePre: "Want the full rundown? ",
      noteLink: "Get in touch",
      notePost: " — happy to share more.",
    },
    education: {
      label: "Education",
      title: "Education",
      items: [
        {
          school: "New Mexico Institute of Mining and Technology (New Mexico Tech)",
          degree: "B.S. in Computer Science and Engineering",
          period: "May 2019",
          location: "Socorro, NM",
        },
      ],
    },
    projects: {
      label: "Personal Projects",
      title: "Things I've built",
      intro:
        "A production website I designed, built, and continue to maintain end-to-end — from front-end to CI/CD deployment.",
      visitSite: "Visit Live Site",
      items: [
        {
          name: "SHPE New Mexico",
          url: "https://shpenewmexico.org",
          description:
            "Official website for the SHPE New Mexico Professional Chapter — event listings, board member directory, and chapter info, with content synced from Google Sheets and a staging environment for safe previews before every release.",
          stack: ["Astro", "JavaScript", "Google Sheets API", "GitHub Actions CI/CD", "Hostinger FTP Deploy", "Staging Environment"],
          mock: {
            eyebrow: "Society of Hispanic Professional Engineers",
            headlinePrefix: "SHPE",
            headlineEm: "New Mexico",
            headlineSuffix: "Professional Chapter",
            sub: "Events, board directory & chapter resources.",
            btnSolid: "Upcoming Events",
            btnOutline: "Join the Chapter",
          },
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Let's work together",
      intro: "Open to new opportunities — reach out and let's talk.",
      email: "cmrubio712@gmail.com",
    },
    footer: {
      text: (year) => `© ${year} Carlos Rubio. Built with Astro, deployed on Hostinger.`,
    },
  },
  es: {
    meta: {
      title: "Carlos Rubio — Desarrollador de Software",
      description: "Portafolio y currículum de Carlos Rubio, desarrollador de software.",
    },
    nav: {
      skills: "Habilidades",
      experience: "Experiencia",
      education: "Educación",
      projects: "Proyectos",
      contact: "Contacto",
    },
    langToggle: {
      label: "EN",
      href: "/",
      targetLang: "en",
      ariaLabel: "Cambiar a inglés",
    },
    themeToggle: {
      ariaLabel: "Cambiar tema claro/oscuro",
    },
    hero: {
      eyebrow: "Desarrollador de Software",
      tagline:
        "Construyo aplicaciones full-stack limpias — desde interfaces en Angular hasta APIs REST y los pipelines de CI/CD que las llevan a producción.",
      viewProjects: "Ver Proyectos",
      getInTouch: "Contáctame",
      stats: [
        { count: 5, label: "Años de Experiencia" },
        { count: 2, label: "Idiomas Fluidos" },
        { count: 1, label: "Proyecto en Vivo" },
      ],
    },
    skills: {
      label: "Habilidades",
      title: "Con qué trabajo",
      intro:
        "Una combinación de fundamentos a nivel de sistemas y desarrollo web práctico, adquirida a través de cursos, proyectos personales y despliegues reales.",
      groups: [
        {
          category: "Frontend",
          items: ["Angular", "Astro", "TypeScript", "JavaScript", "HTML5", "CSS", "XML"],
        },
        {
          category: "Backend y APIs",
          items: [
            "APIs REST",
            "Operaciones de Base de Datos",
            "Renderizado del Lado del Servidor",
            "Google Sheets API",
            "SQL",
            "Java",
            "Python 3",
            "C / C++",
          ],
        },
        {
          category: "DevOps y Nube",
          items: [
            "Pipelines de CI/CD",
            "GitHub Actions",
            "OpenShift",
            "ArgoCD",
            "GitLab",
            "Quay",
            "Helm Charts",
            "Despliegue por FTP",
            "Linux (Ubuntu/CentOS)",
          ],
        },
        {
          category: "Redes e Infraestructura",
          items: ["Switches y Firewalls Cisco", "Firewalls Palo Alto", "Configuración de Racks de Servidores", "Pruebas de Red"],
        },
        {
          category: "También con experiencia en",
          items: ["Agile / Jira", "Git", "Bash", "Ensamblador x86", "C# / OpenGL", "R (RStudio)", "MATLAB", "UML", "macOS"],
        },
      ],
      bilingualNote: "Bilingüe — fluido en inglés y español.",
      strengthsTitle: "Fortalezas Principales",
      strengths: [
        { name: "Desarrollo Full-Stack (Angular / TypeScript)", level: 85 },
        { name: "APIs REST y Backend", level: 85 },
        { name: "CI/CD y DevOps (OpenShift / ArgoCD)", level: 80 },
        { name: "Python", level: 85 },
        { name: "Redes (Cisco / Palo Alto)", level: 75 },
        { name: "SQL y Bases de Datos", level: 75 },
      ],
    },
    experience: {
      label: "Experiencia",
      title: "Experiencia Laboral",
      jobs: [
        {
          role: "Desarrollador Full-Stack",
          company: "Sandia National Laboratories",
          period: "Ene 2022 – Presente",
          bullets: [
            "Desarrollo aplicaciones full-stack — frontend con Angular, TypeScript y HTML; backend con APIs REST, operaciones de base de datos, renderizado del lado del servidor y lógica de negocio.",
            "Construí pipelines de CI/CD desde cero y despliego aplicaciones a OpenShift usando ArgoCD, Quay y GitLab.",
            "Escribo Helm charts para manifiestos de despliegue estándar.",
            "Redacto documentación, pruebas de aceptación de usuario y casos de prueba internos.",
            "Impulsé la cobertura de código de una aplicación que partía del 0%, escribiendo la mayoría de su conjunto de pruebas.",
          ],
        },
        {
          role: "Ingeniero Asociado de Redes",
          company: "SAIC (Science Applications International Corporation)",
          period: "Oct 2020 – Dic 2021",
          bullets: [
            "Configuré racks de servidores, switches y firewalls Cisco, y firewalls Palo Alto desde cero.",
            "Desarrollé un entorno de pruebas de red.",
          ],
        },
      ],
      notePre: "¿Quieres el panorama completo? ",
      noteLink: "Ponte en contacto",
      notePost: " — con gusto comparto más.",
    },
    education: {
      label: "Educación",
      title: "Educación",
      items: [
        {
          school: "New Mexico Institute of Mining and Technology (New Mexico Tech)",
          degree: "Licenciatura en Ciencias de la Computación e Ingeniería",
          period: "Mayo 2019",
          location: "Socorro, NM",
        },
      ],
    },
    projects: {
      label: "Proyectos Personales",
      title: "Lo que he construido",
      intro:
        "Un sitio web de producción que diseñé, construí y sigo manteniendo de principio a fin — desde el frontend hasta el despliegue con CI/CD.",
      visitSite: "Visitar Sitio en Vivo",
      items: [
        {
          name: "SHPE New Mexico",
          url: "https://shpenewmexico.org",
          description:
            "Sitio web oficial del Capítulo Profesional de SHPE Nuevo México — listado de eventos, directorio de la mesa directiva e información del capítulo, con contenido sincronizado desde Google Sheets y un entorno de staging para vistas previas seguras antes de cada lanzamiento.",
          stack: ["Astro", "JavaScript", "Google Sheets API", "GitHub Actions CI/CD", "Hostinger FTP Deploy", "Staging Environment"],
          mock: {
            eyebrow: "Sociedad de Ingenieros Profesionales Hispanos",
            headlinePrefix: "SHPE",
            headlineEm: "Nuevo México",
            headlineSuffix: "Capítulo Profesional",
            sub: "Eventos, directorio de la mesa directiva y recursos del capítulo.",
            btnSolid: "Próximos Eventos",
            btnOutline: "Únete al Capítulo",
          },
        },
      ],
    },
    contact: {
      label: "Contacto",
      title: "Trabajemos juntos",
      intro: "Abierto a nuevas oportunidades — contáctame y conversemos.",
      email: "cmrubio712@gmail.com",
    },
    footer: {
      text: (year) => `© ${year} Carlos Rubio. Construido con Astro, alojado en Hostinger.`,
    },
  },
};
