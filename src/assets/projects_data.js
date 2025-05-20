// Structure des données pour les projets

const projects_data = [
    {
        title: "Accenty & Co - Event Planning Agency",
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
        image: "../../public/images/projects/Crypto-Science/Crypto-Science_Dashboard.png",
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
        liveLink: "https://crypto-science-front-bz0u0rf3b-nguyen-duc-sons-projects.vercel.app/"
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
        githubLink: "https://github.com/DucSonNguyen1987/yayaweb-frontend", // À remplacer par le lien vers votre repo
        liveLink: "https://yayaweb-frontend.vercel.app/"
    }
];

export default projects_data;