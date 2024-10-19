import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import { useForm, ValidationError } from '@formspree/react'

const Contact = () => {
    const [state, handleSubmit] = useForm("meojybwo"); 
  
      if (state.succeeded) {
        alert('Thanks for reaching out! I will get back to you shortly.');
        return null;       
    }
  
    return (
      <div id='contact' className='contact'>
        <div className="contact-title">
          <h1>Get in touch</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <h1>Let us talk</h1>
            <p>I am open to new projects, please do not hesitate to reach out about anything you would like to collaborate on. You can contact me at any time.</p>
            <div className="contact-details">
              <div className="contact-detail">
                <img src={mail_icon} alt="" /> <p>ifeoluwaalice75@gmail.com</p>
              </div>
              <div className="contact-detail">
                <img src={call_icon} alt="" /> <p>+2348169823853</p>
              </div>
              <div className="contact-detail">
                <img src={location_icon} alt="" /> <p>FCT, Nigeria.</p>
              </div>   
            </div>
          </div>
          <form className="contact-right" onSubmit={handleSubmit}>
            <label htmlFor="Your Name">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name'/>
            <label htmlFor="email">Your Email</label>
            <input id="email" type="email" name="email" placeholder="Enter your email" />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
  
            <label htmlFor="message">Write your message here</label>
            <textarea id="message" name="message" rows="8" placeholder="Enter your message" />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
  
            <button type='Submit' className="contact-submit" disabled={state.submitting}>
              Submit now
            </button>
  
            {state.succeeded && (
              <p className="success-message">Thank you for your message!</p>
            )}
          </form>
        </div>
      </div>
    );
  }
  
  export default Contact;