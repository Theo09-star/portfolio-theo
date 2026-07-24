// ==================== IMPORTS DES IMAGES ====================
import folderImgSrc from "../assets/dossier.png";
import dashboardImg from "../assets/dashboard.png";
import seguroImg from "../assets/seguro.png";
import betsaleelDashboardImg from "../assets/Betsaleel Dashboard.png";
import betsaleelproformaImg from "../assets/betsaleelproforma.png";
import ministryImg from "../assets/ministry.png";



export const projects = [
  // ==================== PROJET 1 : DASHBOARD INTELLIGENT ====================
  {
    id: 1,
    title: "Dashboard Intelligent",
    tech: ["React.js", "JavaScript", "PostgreSQL"],
    description:
      "Application web complète pour une entreprise de vente d'accessoires technologiques (ordinateurs, gadgets, etc.). Gestion des stocks, ventes et flux de produits de manière professionnelle. Solution tout-en-un déjà en cours d'utilisation.",
    image: dashboardImg,
    link: "https://dashboardpro-pearl.vercel.app/",
    github: "#",
  },

  // ==================== PROJET 2 : BETSALEEL PROFORMA ====================
  {
    id: 2,
    title: "Betsaleel Proforma",
    tech: ["React.js", "JavaScript", "PostgreSQL"],
    description:
      "Application web interne permettant à une entreprise de gérer efficacement ses proformas. Elle facilite la création rapide de devis pour accélérer le lancement des chantiers. Résultat : une tâche qui prenait plus de 4 heures est désormais réalisée en seulement 30 minutes. Actuellement utilisée en entreprise.",
    image: betsaleelproformaImg,
    link: "https://betsaleel-proforma.vercel.app",
    github: "https://github.com/Theo09-star/betsaleel-proforma",
  },

  // ==================== PROJET 3 : SEGURO HOTEL ====================
  {
    id: 3,
    title: "Seguro Hotel",
    tech: ["React.js", "PHP", "WampServer"],
    description:
      "Projet réalisé lors d'un hackathon pour un hôtel basé à Lomé. L'objectif était de créer une présence digitale moderne, attractive et performante afin d'améliorer la visibilité et l'image de l'établissement.",
    image: seguroImg,
    link: "https://seguro-hotel.vercel.app",
    github: "https://github.com/Theo09-star/seguro-hotel-frontend",
  },

  // ==================== PROJET 4 : DASHBOARD CHURCH ====================
  {
    id: 4,
    title: "Dashboard Church",
    tech: ["React.js", "JavaScript", "PostgreSQL"],
    description:
      "Application web permettant au pasteur de suivre l'évolution des serviteurs au sein de l'église et d'identifier les compétences de chacun. Elle facilite l'organisation des services en attribuant les responsabilités aux membres internes.",
    image: ministryImg,
    link: "https://ministryhub-icc.vercel.app",
    github: "https://github.com/Theo09-star/ministryhub-icc",
  },

  // ==================== PROJET 5 : BETSALEEL DASHBOARD ====================
  {
    id: 5,
    title: "Betsaleel Dashboard",
    tech: ["React.js", "Node.js", "PostgreSQL"],
    description:
      "Dashboard complet de gestion pour l'entreprise Betsaleel Ateliers. Suivi des activités, gestion des ressources, statistiques en temps réel et interface intuitive pour piloter efficacement l'entreprise. Déjà en production.",
    image: betsaleelDashboardImg,
    link: "https://betsaleelateliers.vercel.app/dashboard",
    github: "#",
  },

  // ==================== PROJET 6 : PORTFOLIO PREMIUM ====================
  {
    id: 6,
    title: "Portfolio Premium",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    description:
      "Portfolio personnel moderne et interactif avec animations premium, effets glassmorphiques et design responsive. Développé avec React et Tailwind CSS, il met en valeur mes projets, compétences et parcours avec une expérience utilisateur unique et engageante.",
    image: "",
    link: "#",
    github: "#",
  },
];

export const folderImg = folderImgSrc;