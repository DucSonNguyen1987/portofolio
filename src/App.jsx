import React, { useState } from 'react';
import Navbar from './Components/NavBar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Projects from './Components/Projects/Projects';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';


const App = () => {
  // État pour suivre la catégorie active des projets
  const [activeProjectCategory, setActiveProjectCategory] = useState('all');

  // Fonction pour naviguer vers les projets avec une catégorie spécifique
  const navigateToProjects = (category) => {
    setActiveProjectCategory(category);
  };

  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services navigateToProjects={navigateToProjects} /> 
      <Projects activeCategory={activeProjectCategory} />
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App