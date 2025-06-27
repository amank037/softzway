import { useState, useEffect } from 'react';
import './ContactUs.css'
import { Link } from 'react-router-dom';
import Leftbutton from '../../Components/reusables/Leftbutton/Leftbutton';
import ContactUsBackgroundSVG from './ContactUsBackgroundSVG';
import Title from '../../Components/reusables/title/Title'
import ContactForm from '../../Components/ContactForm/ContactForm';

function ContactUs() {
    const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, answer: 0 });

    // Generate random captcha numbers
    const generateCaptcha = () => {
        const num1 = Math.floor(Math.random() * 25); // 0-100
        const num2 = Math.floor(Math.random() * 10); // 0-100
        const answer = num1 + num2;
        setCaptcha({ num1, num2, answer });
    }

    // Generate captcha on component mount
    useEffect(() => {
        generateCaptcha();
    }, []);

    return (
        <div className='contactus-div'>
            <ContactUsBackgroundSVG />
            <div className='contactus-container'>
                    {/* <img src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/forms/con-form.svg" alt="" /> */}
                    <Title title="Thinking of building something?" />

                <div className='contactus-content'>
                    <div className='contactus-text'>
                        <div>
                            <h3>Start a project</h3>
                            <p>Looking to discuss a project with us?</p>
                            <Link>ENQUIRY</Link>
                        </div>
                        <div>
                            <h3>Work with us</h3>
                            <p>Do you want to join our tribe?</p>
                            <Link>CAREERS</Link>
                        </div>

                        <div className='contactus-info'>
                            <h1>Connect with us directly</h1>
                            <p>You can also contact us via Email or Phone</p>
                            <a href="">+91 – 7878044044</a>
                            <a href="">info@softzway.com</a>
                        </div>
                        
                        {/* <div className='contactus-info'>
                            <a href="">+91 – 7878044044</a>
                            <a href="">info@softzway.com</a>
                        </div> */}
                    </div>

                    {/* <div className='contact-form'>
                        <h3>Get a Consultation</h3>
                        <div className='contact-form-info'>
                            <input type="text" placeholder='Name*' name='name'/>
                            <label htmlFor="name">Please enter your name.</label>
                            <input type="email" placeholder='E-mail*' name='email'/>
                            <label htmlFor="email">We need your email address to contact you.</label>
                            <input type="text" placeholder='Skype or Phone No' name='phone'/>
                            <label htmlFor="phone">Please enter your phone no.</label>
                            <input type="text" placeholder='Subject*' name='subject'/>
                            <label htmlFor="subject">Please enter subject.</label>
                        </div>
                        <div className='contact-form-msg'>
                            <input type="text" placeholder='Your Message'/>
                        </div>
                        <div className='contact-form-captcha'>
                            <div className='contact-form-captcha-container'>
                                <div className='captcha-question'>
                                    <span className='captcha-text'>{captcha.num1} + {captcha.num2}?</span>
                                </div>
                                <input
                                    type="number"
                                    placeholder='Total*'
                                    name='captcha'
                                />
                                <label htmlFor="captcha">
                                </label>
                            </div>

                            <div className='contact-form-button'>
                                <Leftbutton leftbtn="SEND MESSAGE"/>
                                <div className='contact-nda'>
                                    <input type="checkbox" />
                                    <p>Need an NDA</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <ContactForm />
                </div>

                
            </div>
        </div>
    )
}

export default ContactUs