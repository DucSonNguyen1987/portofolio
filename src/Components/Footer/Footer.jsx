import React from 'react'
import './Footer.css';
import footer_logo from '../../assets/footer_logo.svg';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  return (
    <div className="footer">
    <div className='footer-top'>
        <div className='footer-top-left'>
            <img src={footer_logo} alt='' />
            <p>Texte de présentation</p>
        </div>
        <div className='footer-top-right'>
            <div className='footer-email-input'>
                <img src={user_icon} alt='' />
                <input type='email' placeholder=' Entrez votre Email' />
            </div>
            <div className='footer-subscribe'>Enoyer</div>
        </div>
    </div>
    <hr />
    <div className='footer-bottom'>
        <p className='footer-bottom-left'>
       © (copyright) 2025 Nguyen Duc-Son. Tous droits réservés.
        </p>
        <div className='footer-bottom-right' >
            <p>Conditions d'utilisation</p>
            <p>Politique de confidentialité</p>
            <p>Me contacter</p>
        </div>
            
        </div>
    </div>

    
  )
}

export default Footer;
