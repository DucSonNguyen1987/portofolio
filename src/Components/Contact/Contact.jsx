import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  return (
    <div className='contact'>
    <div className='contact-title'>
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt='' />
    </div>
    <div className='contact-section'>
        <div className='contact-left'>
            <h1>Et si on échangeait ?</h1>
            <p>Message de contact</p>
            <div className='contact-detail'>
                <img src={mail_icon} alt='' /> <p>duc.son.nguyen48@gmail.com</p>
            </div>
            <div className='contact-detail'>
            <img src={call_icon} alt='' /> <p>0642321318</p>
            </div>
            <div className='contact-detail'>
            <img src={location_icon} alt='' />  <p>Paris</p>
            </div>
        </div>

        <form className="contact-right">
        <label htmlFor=''> Votre Nom </label>
        <input type='text' placeholder='Entrez votre nom' />
        <label htmlFor=''> Votre Email </label>
        <input type='text' placeholder='Entrez votre email' />
        <label htmlFor=''> Votre Message </label>
        <textarea type='message'  rows= "8" placeholder='Entrez votre message' />
        <button type='submit' className='contact-submit'>Envoyer</button>
    </form>


    </div>
    
      
    </div>
  )
}

export default Contact
