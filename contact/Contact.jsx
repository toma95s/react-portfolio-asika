import React from 'react'
import './contact.css'
import {MdMailOutline} from 'react-icons/md'
import {MdOutlineMessage} from 'react-icons/md'
import {SiMessenger} from 'react-icons/si'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {/* EMAIL */}
          <article className="contact__option">
            <MdMailOutline className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>asikahabib@gmail.com</h5>
            <a href="mailto:asikahabib@gmail.com" target="_blank">Send a message</a>
          </article>
        {/* Messanger */}   
          <article className="contact__option">
            <MdOutlineMessage className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>slack</h5>
            <a href="https://app.slack.com/client/T03HYCJ2CV9/C03HVHP5MA9" target="_blank">Send a message</a>
          </article>
           {/* Discord */}
          <article className="contact__option">
            <SiMessenger className="contact__option-icon"/>
            <h4>Discord</h4>
            <h5>toma95s#3961</h5>
            <a href="https://discord.com/" target="_blank">Send a message</a>
          </article>

        </div>

        {/* End of CONTACT OPTIONS */}

        <form action=''>
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact