import React from 'react'
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import arrow_icon from '../../assets/arrow_icon.svg';
import Services_Data from '../../assets/services_data.js';

const Services = ({ navigateToProjects }) => {
  // Fonction pour rediriger vers la section projets avec un filtre
  const handleServiceClick = (serviceCategory) => {
    // Faire défiler jusqu'à la section des projets
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    
    // Envoyer l'événement pour filtrer les projets en fonction du service
    if (navigateToProjects) {
      navigateToProjects(serviceCategory);
    }
  }
  
  return (
    <div id='services' className='services'>
      <div className='services-title'>
        <h1>Mon expertise</h1>
        <img src={theme_pattern} alt='' />
      </div>
      <div className='services-container'>
        <div className='services-data'>
          {Services_Data.map((service, index) => {
            return (
              <div 
                key={index} 
                className="services-format"
                onClick={() => handleServiceClick(service.category)}
              >
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                <div className='services-readmore'>
                  <p>Voir mes projets</p>
                  <img src={arrow_icon} alt='' /> 
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Services;