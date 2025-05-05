import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about_profile.svg';


const About = () => {
    return (
        <div>
            <div id= "about" className='about'>
                <div className='about-title'>
                    <h1> A propos de moi</h1>
                    <img src={theme_pattern} alt="" />
                </div>
                <div className='about-sections'>
                    <div className='about-left'>
                        <img src={profile_img} alt="" />
                    </div>
                    <div className="about-right">
                        <div className="about-para">
                            <p>Description text My history</p>
                            <p>Description Text My passion</p>
                        </div>
                        <div className='about-skills'>
                            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /> </div>
                            <div className="about-skill"><p>React JS</p><hr style={{ width: "70%" }} /> </div>
                            <div className="about-skill"><p>Javascript</p><hr style={{ width: "50%" }} /> </div>
                            <div className="about-skill"><p>Next.JS</p><hr style={{ width: "30%" }} /> </div>
                        </div>
                    </div>  
                </div>
                <div className='about-achievements'>
                    <div className="about-achievement">
                        <p>Une expérience professionnelle</p>
                        <h1>variée</h1>
                    </div>
                    <hr />
                    <div className="about-achievement">
                        <p>Une epxérience professionnelle</p>
                        <h1>variée</h1>
                    </div>
                    <hr />
                    <div className="about-achievement">
                    <p>Une epxérience professionnelle</p>
                    <h1>variée</h1>
                </div>
                <hr />
                </div>       
            </div>
        </div>
       
    )
}

export default About;
