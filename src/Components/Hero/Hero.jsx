import React from 'react'
import './Hero.css';
import profile_img from '../../assets/profile_img.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt='' />
      <h1> <span>Duc-Son Nguyen, <br /> </span> Développeur fullstack Javascript  <br /> Graphic Designer</h1>
      <p>Développeur avec un parcours atypique combinant expertise en design, management et code.<br />Je crée des applications web complètes avec une approche à 360° qui allie technique, esthétique et vision business.</p>
      <div className="hero-action">
        <div className='hero-connect'>
          <AnchorLink className="anchor-link" offset={50} href="#contact">Connectons nous</AnchorLink> 
        </div>
        <a href="/files/CV_Nguyen_DucSon.pdf" download className='hero-resume'>
          Mon CV
        </a>
      </div>
    </div>
  )
}

export default Hero;