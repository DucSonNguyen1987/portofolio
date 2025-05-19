import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about_photo.svg';
import SkillBar from './SkillBar';




const About = () => {

    const skills = [
        {name : "HTML & CSS", percentage : 70},
        {name : "React JS", percentage : 60},
        {name : "Javascript", percentage : 55},
        {name: "Node.JS" , percentage : 50},
        {name : "Photoshop", percentage : 75},
        {name : "Illustrator", percentage : 80},
        {name : "Indesign", percentage : 80},
    ]

    return (
        <>
            {/* Ajout d'un élément div pour l'espacement avant */}
            <div className="section-spacer"></div>
            
            <div id="about" className='about'>
                <div className="about-container">
                    <div className='about-title'>
                        <h1>À propos de moi</h1>
                        {/* Correction du conteneur d'image pour assurer l'alignement */}
                        <div className="title-pattern-container">
                            <img src={theme_pattern} alt="" className="title-pattern" />
                        </div>
                    </div>
                    <div className='about-sections'>
                        <div className='about-left'>
                            <img src={profile_img} alt="" />
                        </div>
                        <div className="about-right">
                            <div className="about-para">
                                <p>Développeur Fullstack JavaScript fraîchement diplômé de La Capsule, j'ai fait le grand saut vers le code après des années dans le graphisme et la restauration. Mon parcours atypique est ma force : je combine œil de designer, rigueur de manager et passion du développement.</p>
                                <p>Cette triple expertise me permet d'avoir une vision globale des projets, comprenant à la fois les enjeux techniques, esthétiques et business. Je conçois des applications web complètes avec une attention particulière à l'expérience utilisateur et à l'efficacité des processus.</p>
                            </div>
                            <div className='about-skills'>
                                {skills.map((skill, index) => (
                                    <SkillBar
                                        key= {index}
                                        skill = {skill.name}
                                        percentage={skill.percentage}
                                        />
                                ))}
                            </div>
                        </div>  
                    </div>
                    <div className='about-achievements'>
                        <div className="about-achievement">
                            <p>Expérience en design</p>
                            <h1>6 ans</h1>
                        </div>
                        <hr />
                        <div className="about-achievement">
                            <p>Expérience en management</p>
                            <h1>8 ans</h1>
                        </div>
                        <hr />
                        <div className="about-achievement">
                            <p>Projets web développés</p>
                            <h1>12+</h1>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
            
            {/* Ajout d'un élément div pour l'espacement après */}
            <div className="section-spacer"></div>
        </>
    )
}

export default About;