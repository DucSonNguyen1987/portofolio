import React, { useState } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  const [result, setResult] = useState(""); // Add this line to initialize the state

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "77cc4e13-5cb8-4cd6-b6bb-f2b44d8762db");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert(data.message);
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
    
  return (
    <div id='contact' className='contact'>
      <div className='contact-title'>
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt='' />
      </div>
      <div className='contact-section'>
        <div className='contact-left'>
          <h1>Et si on échangeait ?</h1>
          <p>En quête d'un poste d'alternant DevOps (3 semaines entreprise/1 semaine formation), je souhaite mettre mes compétences multiples au service de projets innovants. Contactez-moi pour discuter de la façon dont ma vision à 360° pourrait booster vos projets numériques.</p>
          <div className='contact-detail'>
            <img src={mail_icon} alt='' /> <p>duc.son.nguyen48@gmail.com</p>
          </div>
          <div className='contact-detail'>
            <img src={call_icon} alt='' /> <p>0642321318</p>
          </div>
          <div className='contact-detail'>
            <img src={location_icon} alt='' />  <p>Boulogne Billancourt</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor='name'>Votre Nom</label>
          <input type='text' name="name" id="name" placeholder='Entrez votre nom' required />
          <label htmlFor='email'>Votre Email</label>
          <input type='email' name="email" id="email" placeholder='Entrez votre email' required />
          <label htmlFor='message'>Votre Message</label>
          <textarea name="message" id="message" rows="8" placeholder='Entrez votre message' required></textarea>
          <button type='submit' className='contact-submit'>Envoyer</button>
          {result && <p>{result}</p>}
        </form>
      </div>
    </div>
  )
}

export default Contact