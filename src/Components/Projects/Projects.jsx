import React, { useState, useEffect } from 'react';
import './Projects.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import projects_data from '../../assets/projects_data.js';

const Projects = ({ activeCategory }) => {
    // État pour le projet actuellement sélectionné
    const [selectedProject, setSelectedProject] = useState(null);
    // État pour les projets filtrés
    const [filteredProjects, setFilteredProjects] = useState(projects_data);
    // État pour la catégorie active
    const [category, setCategory] = useState(activeCategory || 'all');

    // Effet pour mettre à jour la catégorie quand activeCategory change
    useEffect(() => {
        if (activeCategory) {
            setCategory(activeCategory);
        }
    }, [activeCategory]);

    // Effet pour filtrer les projets quand la catégorie change
    useEffect(() => {
        if (category === 'all') {
            setFilteredProjects(projects_data);
        } else {
            const filtered = projects_data.filter(project => 
                project.categories.includes(category)
            );
            setFilteredProjects(filtered);
        }
    }, [category]);

    // Fonction pour ouvrir les détails d'un projet
    const openProjectDetails = (project) => {
        setSelectedProject(project);
    };

    // Fonction pour fermer les détails d'un projet
    const closeProjectDetails = () => {
        setSelectedProject(null);
    };

    // Fonction pour changer la catégorie
    const changeCategory = (newCategory) => {
        setCategory(newCategory);
    };

    // AJOUT: Fonction de gestion d'erreur d'image
    const handleImageError = (e) => {
        console.error(`Erreur de chargement de l'image: ${e.target.src}`);
        e.target.src = "/images/default-project.png"; // Image par défaut en cas d'erreur
    };

    return (
        <>
            <div className="section-spacer"></div>
            
            <div id="projects" className="projects">
                <div className="projects-container">
                    <div className="projects-title">
                        <h1>Mes projets</h1>
                        <div className="title-pattern-container">
                            <img src={theme_pattern} alt="" className="title-pattern" />
                        </div>
                    </div>
                    
                    {/* Filtres de catégories */}
                    <div className="project-categories">
                        <button 
                            className={category === 'all' ? 'active' : ''} 
                            onClick={() => changeCategory('all')}
                        >
                            Tous
                        </button>
                        <button 
                            className={category === 'development' ? 'active' : ''} 
                            onClick={() => changeCategory('development')}
                        >
                            Développement
                        </button>
                        <button 
                            className={category === 'design' ? 'active' : ''} 
                            onClick={() => changeCategory('design')}
                        >
                            Design
                        </button>
                        <button 
                            className={category === 'management' ? 'active' : ''} 
                            onClick={() => changeCategory('management')}
                        >
                            Management
                        </button>
                    </div>
                    
                    {/* Message si aucun projet dans la catégorie */}
                    {filteredProjects.length === 0 && (
                        <div className="no-projects">
                            <p>Aucun projet dans cette catégorie pour le moment.</p>
                        </div>
                    )}
                    
                    {/* Grille de projets */}
                    <div className="projects-grid">
                        {filteredProjects.map((project, index) => (
                            <div 
                                key={index} 
                                className="project-card"
                                onClick={() => openProjectDetails(project)}
                            >
                                <div className="project-image">
                                    {/* MODIFIÉ: Ajout du gestionnaire d'erreur */}
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        onError={handleImageError}
                                    />
                                    <div className="project-overlay">
                                        <h3>{project.title}</h3>
                                        <p>{project.shortDescription}</p>
                                    </div>
                                </div>
                                <div className="project-info">
                                    <h3>{project.title}</h3>
                                    <div className="project-tags">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span key={techIndex} className="project-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Modal pour les détails du projet */}
                    {selectedProject && (
                        <div className="project-modal">
                            <div className="project-modal-content">
                                <button className="close-button" onClick={closeProjectDetails}>×</button>
                                
                                <div className="modal-header">
                                    <h2>{selectedProject.title}</h2>
                                    <div className="project-tags">
                                        {selectedProject.technologies.map((tech, techIndex) => (
                                            <span key={techIndex} className="project-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="modal-body">
                                    <div className="modal-image">
                                        {/* MODIFIÉ: Ajout du gestionnaire d'erreur */}
                                        <img 
                                            src={selectedProject.image} 
                                            alt={selectedProject.title} 
                                            onError={handleImageError}
                                        />
                                    </div>
                                    <div className="modal-description">
                                        <h3>Description</h3>
                                        <p>{selectedProject.fullDescription}</p>
                                        
                                        <h3>Fonctionnalités</h3>
                                        <ul>
                                            {selectedProject.features.map((feature, featureIndex) => (
                                                <li key={featureIndex}>{feature}</li>
                                            ))}
                                        </ul>
                                        
                                        <div className="modal-links">
                                            {selectedProject.liveLink && (
                                                <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className="project-button live-link">
                                                    Voir le projet
                                                </a>
                                            )}
                                            {selectedProject.githubLink && (
                                                <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="project-button github-link">
                                                    Code source
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            
            <div className="section-spacer"></div>
        </>
    );
};

export default Projects;