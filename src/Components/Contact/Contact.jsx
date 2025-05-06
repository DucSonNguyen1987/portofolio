import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "77cc4e13-5cb8-4cd6-b8bb-f2b44d8762db");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert (data.message)
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
    

  
  return (
    <div id='contact'>
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

        <form  onSubmit= {onSubmit} className="contact-right">
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
