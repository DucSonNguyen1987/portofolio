// Structure des données pour les projets

const projects_data = [
    {
        title: "Accenty & Co",
        shortDescription: "Site web professionnel pour une agence événementielle haut de gamme",
        fullDescription: "Conception et développement d'un site web complet pour Accenty & Co, une agence d'organisation d'événements premium basée en RD Congo. Le site présente leurs services, leur portfolio d'événements, leur équipe, et offre des fonctionnalités de prise de rendez-vous et de suivi de projet client. Développé avec React et des technologies web modernes, le site offre une expérience utilisateur fluide avec un design responsive et élégant.",
        image: "/images/projects/Accenty/Accenty-screenshot.png",
        technologies: ["React", "JavaScript", "CSS Modules", "React Router", "LocalStorage", "Context API"],
        categories: ["development", "design"],
        features: [
            "Design responsive avec approche mobile-first",
            "Galerie interactive avec capacités de filtrage",
            "Système de prise de rendez-vous avec intégration de calendrier",
            "Portail client avec tableau de bord de suivi de projet",
            "Présentation de l'équipe avec profils détaillés",
            "Présentation des services avec descriptions détaillées",
            "Formulaire de contact avec validation",
            "Système d'authentification avec routes protégées"
        ],
        githubLink: "https://github.com/DucSonNguyen1987/accenty_front.git",
        liveLink: "https://accenty-co.vercel.app/"
    },
    {
        title: "Crypto Science",
        shortDescription: "Application de gestion de portefeuille de crypto-monnaies avec interface glassmorphique",
        fullDescription: "Une application web moderne de gestion de portefeuille de crypto-monnaies offrant un design glassmorphique élégant. Développée avec React, Redux et Vite, elle permet aux utilisateurs de suivre leurs investissements, visualiser les tendances du marché et gérer leurs transactions. L'application intègre un mode démo avec données simulées pour éviter les problèmes CORS et permettre une démonstration sans dépendre d'une API externe.",
        image: "/images/projects/Crypto-Science/Crypto-Science_Dashboard.png",
        technologies: ["React", "Redux Toolkit", "Vite", "Recharts", "REST API", "CoinMarketCap API"],
        categories: ["development", "design", "finance"],
        features: [
            "Tableau de bord interactif avec graphiques et statistiques en temps réel",
            "Gestion de portefeuille multi-crypto avec visualisation de la répartition",
            "Historique détaillé des transactions avec filtres et recherche",
            "Exploration du marché des crypto-monnaies avec classement et recherche",
            "Mode démo intégré avec données simulées (sans dépendance API)",
            "Interface utilisateur glassmorphique responsive et moderne",
            "Architecture en couches avec séparation des préoccupations"
        ],
        githubLink: "https://github.com/DucSonNguyen1987/crypto-science_front",
        liveLink: "https://crypto-science-front.vercel.app/"
    },
   
    {
        title: "YAYA SPICY JUICE",
        shortDescription: "Application e-commerce pour une marque de jus épicés",
        fullDescription: "YAYA est mon projet de fin d'études, une plateforme e-commerce complète pour une marque de jus de fruits épicés. Cette application fullstack développée avec la stack MERN offre une expérience utilisateur fluide, de la découverte des produits jusqu'au paiement sécurisé.",
        image: "/images/projects/YAYA/YAYA_Home_Page.png",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Vercel", "JWT", "Stripe"],
        categories: ["development", "design", "management"],
        features: [
            "Catalogue de produits avec filtres et recherche",
            "Système de panier d'achat persistant",
            "Authentification des utilisateurs sécurisée avec JWT",
            "Passerelle de paiement Stripe intégrée",
            "Tableau de bord administrateur pour la gestion des produits",
            "Interface responsive optimisée pour mobile et desktop",
            "Déploiement continu sur Vercel"
        ],
        githubLink: "https://github.com/DucSonNguyen1987/yayaweb-frontend", 
        liveLink: "https://yayaweb-frontend.vercel.app/"
    },

    {
    title: "Zengest Backend",
    shortDescription: "API complète de gestion de restaurants avec système de commandes en temps réel et plans de salle interactifs",
    fullDescription: "Zengest Backend est une API REST robuste développée avec Node.js et Express pour la gestion complète de restaurants. Cette solution fullstack offre un système de gestion intégré incluant les commandes en temps réel, les réservations avec notifications automatisées, les plans de salle interactifs, et un système complet de permissions multi-rôles. L'architecture modulaire et sécurisée permet une évolutivité horizontale et supporte plusieurs restaurants simultanément.",
    image: "/images/projects/Zengest/Wireframe_Zengest_Backend.png",
    technologies: [
        "Node.js", 
        "Express.js", 
        "MongoDB", 
        "Mongoose ODM", 
        "JWT Authentication", 
        "Nodemailer", 
        "Brevo API", 
        "Joi Validation", 
        "Helmet Security", 
        "CORS", 
        "Rate Limiting"
    ],
    categories: ["development", "backend", "architecture"],
    features: [
        "API REST complète avec documentation intégrée et endpoints sécurisés",
        "Système d'authentification JWT avec gestion des permissions par rôles (Admin, Owner, Manager, Staff)",
        "Gestion de commandes en temps réel avec workflow complet (pending → confirmed → preparing → ready → served → paid)",
        "Plans de salle interactifs avec glisser-déposer des tables et gestion des statuts en temps réel",
        "Système de réservations avec notifications email automatiques (confirmation, rappels, annulations)",
        "Gestion complète du menu avec variantes de prix, disponibilité et gestion de stock",
        "Analytics et statistiques détaillées (chiffre d'affaires, performance des tables, taux d'occupation)",
        "Services de notifications automatisées via Brevo/Gmail avec templates personnalisables",
        "Tâches CRON automatisées (rappels quotidiens, nettoyage de données, statistiques hebdomadaires)",
        "Architecture sécurisée avec rate limiting, validation des données et protection CORS",
        "Support multi-restaurants avec isolation des données et permissions granulaires",
        "Scripts utilitaires pour le seeding, les tests, et la maintenance de la base de données"
    ],
    githubLink: "https://github.com/DucSonNguyen1987/Zengest_backend.git", 
    liveLink: null, // API backend - pas de démo publique
    apiDocLink: "http://localhost:3000/api/docs",
    architecture: {
        pattern: "MVC avec couches séparées",
        database: "MongoDB avec Mongoose ODM",
        authentication: "JWT avec refresh tokens",
        realTime: "WebSockets pour les mises à jour temps réel",
        deployment: "Compatible Docker et services cloud"
    }
}
];

export default projects_data;