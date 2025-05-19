import React from 'react';
import './SkillBar.css';

const SkillBar = ({skill, percentage}) => {
  return (
    <div className='about-skill'>
      <p>{skill}</p>
      <div className='skill-bar-container'>
        <div className='skill-level' style= {{'width':`${percentage}%`}}></div>
      </div>
    </div>
  )
}

export default SkillBar;
