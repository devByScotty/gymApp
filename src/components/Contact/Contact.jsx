import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div>
                <div className='contact-box'>
            <div className="contact-form">

            <h3 className="title">CONTACT ME</h3>

            <div className="row">

                <input type="text" className="contact-input" placeholder="First Name" />
                <input type="text" className="contact-input" placeholder="Last Name" />

                
            </div>

            <div className="row">
    
                        <input type="text" className="contact-input" placeholder="Phone" />
                        <input type="email" className="contact-input" placeholder="Email" />
    
                    </div>
    
                    <div className="row">
    
                                <textarea name="message" className="contact-input textarea" placeholder="Message"></textarea>
    
                            </div>
    
                                <a href="" className="btn">Send</a>
    
                        </div>

                         </div>
            </div>
        



    
  )
}

export default Contact;