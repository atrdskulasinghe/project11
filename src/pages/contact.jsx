import React from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'
import './contact.css';
import headerBackground from '../images/background.jpg';


export default function contact() {
    return (
        <div>
            <Nav />
            <div className='contact-header'>
                <h1>Contact Us</h1>
                <div className='contact-header-background'>
                    <img src={headerBackground} alt="" />
                </div>
            </div>
            <section>
                <div className='contact-map'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15822.956030120302!2d80.35696639999999!3d7.4940416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slk!4v1711225294254!5m2!1sen!2slk"

                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className='box'>
                    <div className='contact-details'>
                        <h4>- Send Us a Message -</h4>
                        <div className='contact-input-two'>
                            <div className='contact-i-t-1'>
                                <input type="text" placeholder='First Name' />
                            </div>
                            <div className='contact-i-t-2'>
                            <input type="text" placeholder='Last Name' />
                            </div>
                        </div>
                        <div className='contact-input-two'>
                            <div className='contact-i-t-1'>
                                <input type="text" placeholder='Email' />
                            </div>
                            <div className='contact-i-t-2'>
                            <input type="text" placeholder='Phone Number' />
                            </div>
                        </div>
                        

                        <div className='contact-input-one'>
                                <input type="text" placeholder='Subject' />
                        </div>
                        <div className='contact-input-one'>
                                <textarea name="" id="" cols="30" rows="10" placeholder='Message' ></textarea>
                        </div>

                        <div className='contact-button'>
                            <button>Send Message</button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

        </div>
    )
}
