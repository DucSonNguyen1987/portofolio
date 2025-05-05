import React from 'react'
import './Hero.css';
import profile_img from '../../assets/profile_img.svg';



const Hero = () => {
  return (
    <div id='home' className='hero'>
    <img src={profile_img} alt='' />
    <h1> <span>Duc-Son Nguyen, <br /> </span> Développeur fullstack Javascript  <br /> Graphic Designer</h1>
    <p>Description à écrire</p>
    <div className="hero-action">
        <div className='hero-connect'>
            Connectons nous
        </div>
        <div className='hero-resume'>
            Mon CV
        </div>
    </div>
    </div>
  )
}

export default Hero;
