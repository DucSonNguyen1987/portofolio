// Structure des données pour les projets

const projects_data = [
    {
        title: "Portfolio Personnel",
        shortDescription: "Site vitrine présentant mes compétences et projets",
        fullDescription: "Portfolio réactif développé avec React et Vite, mettant en valeur mon parcours professionnel et mes projets. Le site présente une interface utilisateur intuitive avec des animations fluides et un système de design cohérent.",
        image: "/images/projects/portfolio.jpg", // Remplacer par le chemin de votre image
        technologies: ["React", "Vite", "CSS", "JavaScript"],
        categories: ["development", "design"], // Catégories pour le filtrage
        features: [
            "Design responsive optimisé pour tous les appareils",
            "Animations et transitions fluides",
            "Système de téléchargement de CV",
            "Formulaire de contact fonctionnel",
            "Galerie de projets interactive"
        ],
        githubLink: "https://github.com/votre-username/portfolio",
        liveLink: "https://votre-portfolio.com"
    },
    {
        title: "YAYA - Spicy Juices",
        shortDescription: "Application e-commerce pour une marque de jus épicés",
        fullDescription: "YAYA est mon projet de fin d'études, une plateforme e-commerce complète pour une marque de jus de fruits épicés. Cette application fullstack développée avec la stack MERN offre une expérience utilisateur fluide, de la découverte des produits jusqu'au paiement sécurisé.",
        image: ["./images/projects/YAYA/YAYA_Home_Page.png","./images/projects/YAYA/YAYA_My_Juice.png", "./images/projects/YAYA/YAYA_My_Juice.png","./images/projects/YAYA/YAYA_Nos_jus.png"],
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
        githubLink: "https://github.com/DucSonNguyen1987/yayaweb-frontend.git", // À remplacer par le lien vers votre repo
        liveLink: "https://yayaweb-frontend.vercel.app/"
    },
    {
        title: "E-commerce MERN Stack",
        shortDescription: "Plateforme e-commerce complète avec panier et paiement",
        fullDescription: "Une application e-commerce full-stack développée avec la stack MERN (MongoDB, Express, React, Node.js). La plateforme comprend toutes les fonctionnalités essentielles d'un site e-commerce moderne, de la navigation des produits au traitement des paiements.",
        image: "/images/projects/ecommerce.jpg",
        technologies: ["MongoDB", "Express", "React", "Node.js", "Redux"],
        categories: ["development", "management"], // Catégories pour le filtrage
        features: [
            "Authentification utilisateur sécurisée",
            "Catalogue de produits avec filtres et recherche",
            "Système de panier persistant",
            "Passerelle de paiement avec Stripe",
            "Tableau de bord administrateur",
            "Gestion des commandes et suivi des livraisons"
        ],
        githubLink: "https://github.com/votre-username/ecommerce-mern",
        liveLink: "https://votre-ecommerce.com"
    },
    {
        title: "Application de Gestion de Tâches",
        shortDescription: "Todo-list avec fonctionnalités avancées",
        fullDescription: "Une application de gestion de tâches développée avec React et Firebase, permettant aux utilisateurs d'organiser efficacement leurs projets et tâches quotidiennes. L'application offre des fonctionnalités avancées comme la catégorisation, les rappels et la collaboration.",
        image: "/images/projects/todo-app.jpg",
        technologies: ["React", "Firebase", "CSS Modules", "JavaScript"],
        categories: ["development", "management"], // Catégories pour le filtrage
        features: [
            "Création et gestion de tâches avec dates d'échéance",
            "Catégorisation par projet et priorité",
            "Système de rappels et notifications",
            "Synchronisation des données en temps réel",
            "Mode hors ligne avec synchronisation ultérieure",
            "Interface drag-and-drop intuitive"
        ],
        githubLink: "https://github.com/votre-username/task-manager",
        liveLink: "https://votre-task-app.com"
    },
    {
        title: "Refonte d'Identité Visuelle",
        shortDescription: "Création d'une identité de marque complète",
        fullDescription: "Projet de refonte complète d'identité visuelle pour une entreprise locale. Ce projet comprend la création d'un nouveau logo, d'une charte graphique, et de divers supports marketing. L'approche se concentre sur la modernisation de l'image tout en conservant l'héritage de la marque.",
        image: "/images/projects/branding.jpg",
        technologies: ["Photoshop", "Illustrator", "InDesign", "Branding"],
        categories: ["design"], // Catégories pour le filtrage
        features: [
            "Création de logo et variantes",
            "Charte graphique complète",
            "Supports marketing (cartes de visite, papeterie)",
            "Signalétique et identité visuelle des points de vente",
            "Guide d'utilisation de la marque"
        ],
        githubLink: null,
        liveLink: "https://votre-portfolio.com/branding-case-study"
    },
    {
        title: "Dashboard Analytics",
        shortDescription: "Tableau de bord interactif visualisant des données",
        fullDescription: "Un tableau de bord analytique interactif construit avec React et D3.js, offrant des visualisations de données avancées. Ce projet démontre ma capacité à transformer des données complexes en insights visuellement compréhensibles et actionnables.",
        image: "/images/projects/dashboard.jpg",
        technologies: ["React", "D3.js", "Material-UI", "REST API"],
        categories: ["development", "design", "management"], // Catégories pour le filtrage
        features: [
            "Multiples types de graphiques et visualisations",
            "Filtrage et segmentation des données en temps réel",
            "Interface utilisateur responsive et intuitive",
            "Export des données et rapports",
            "Thèmes personnalisables",
            "Intégration d'API pour données en temps réel"
        ],
        githubLink: "https://github.com/votre-username/analytics-dashboard",
        liveLink: "https://votre-dashboard.com"
    }
];

export default projects_data;