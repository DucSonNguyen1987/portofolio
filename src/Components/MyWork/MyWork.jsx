import React from 'react'
import './MyMork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import MyWork_data from '../../assets/mywork_data.js';
import arrow_icon from '../../assets/arrow_icon.svg';
const MyWork = () => {
    return (
        <div id='work' className='mywork'>
            <div className='mywwork-title'>
                <h1>Mes derniers travaux</h1>
                <img src={theme_pattern} alt='' />
            </div>
            <div className='mywork-container'>

                {MyWork_data.map((work, index) => {
                    return <img key={index} src={work.w_img} alt='' />
                })}
            </div>
            <div className='mywork-showmore'>
            <p> En Savoir +</p>
                <img src={arrow_icon} alt='' />
                
      </div>


        </div>
    )
}

export default MyWork
