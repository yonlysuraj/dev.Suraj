import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Contact Me</h1>
        <img src={theme_pattern} alt="" />
        </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's Talk</h1>
            <p>Im currently available to take on new project,so feel free to Contact Me</p>
            <div className="contact-details">
                <div className="detail">
                    <img src={mail_icon} alt="" /><p>mail4suraj2002@gmail.com</p>
                </div>
                <div className="detail">
                    <img src={location_icon} alt="" /><p>Cuttack,odisha,India,753008</p>
                </div>
                <div className="detail">
                    <img src={call_icon} alt="" /><p>+91 94376 00565</p>
                </div>
            </div>
        </div>
        <form action="" className="contact-right">
            <label htmlFor="">Your Name:</label>
            <input type="text" placeholder='Enter your name:' />
            <label htmlFor="">Your email:</label>
            <input type="email" placeholder='Enter your email:' />
            <label htmlFor="">Write  your message here:</label>
            <textarea name="message" rows='8' placeholder='Enter your Message Here:' id=""></textarea>
            <button type='submit' className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
