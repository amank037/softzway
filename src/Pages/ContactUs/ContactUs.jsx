import { useState, useEffect } from 'react';
import './ContactUs.css'
import { Link } from 'react-router-dom';

function ContactUs() {
    const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, answer: 0 });
    const [userAnswer, setUserAnswer] = useState('');
    const [captchaValid, setCaptchaValid] = useState(false);

    // Generate random captcha numbers
    const generateCaptcha = () => {
        const num1 = Math.floor(Math.random() * 25); // 0-100
        const num2 = Math.floor(Math.random() * 10); // 0-100
        const answer = num1 + num2;
        setCaptcha({ num1, num2, answer });
        setUserAnswer('');
        setCaptchaValid(false);
    };

    // Check captcha validity
    const handleCaptchaChange = (e) => {
        const value = e.target.value;
        setUserAnswer(value);
        setCaptchaValid(parseInt(value) === captcha.answer);
    }

    // Generate captcha on component mount
    useEffect(() => {
        generateCaptcha();
    }, []);

    return (
        <div className='contactus-div'>
            <div className='contactus-container'>
                <div className='contactus-title'>
                    <img src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/forms/con-form.svg" alt="" />
                </div>

                <div className='contactus-content'>
                    <div className='contactus-text'>
                        <h3>For general queries fill this form or have a look at end of the page for more options.</h3>
        
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
                        
                        {/* <div className='contactus-info'>
                            <a href="">+91 – 7878044044</a>
                            <a href="">info@softzway.com</a>
                        </div> */}
                    </div>

                    <div className='contactus-form'>
                        <h3>Get a Consultation</h3>
                        <div className='contactus-form-info'>
                            <input type="text" placeholder='Name*' name='name'/>
                            <label htmlFor="name">Please enter your name.</label>
                            <input type="email" placeholder='E-mail*' name='email'/>
                            <label htmlFor="email">We need your email address to contact you.</label>
                            <input type="text" placeholder='Skype or Phone No' name='phone'/>
                            <label htmlFor="phone">Please enter your phone no.</label>
                            <input type="text" placeholder='Subject*' name='subject'/>
                            <label htmlFor="subject">Please enter subject.</label>
                        </div>
                        <div className='contactus-form-msg'>
                            <input type="text" placeholder='Your Message'/>
                        </div>
                        <div className='contactus-form-captcha'>
                            <div className='contactus-form-captcha-container'>
                                <div className='captcha2-question'>
                                    <span className='captcha2-text'>{captcha.num1} + {captcha.num2}?</span>
                                </div>
                                <input
                                    type="number"
                                    placeholder='Total*'
                                    name='captcha'
                                    value={userAnswer}
                                    onChange={handleCaptchaChange}
                                    className={captchaValid ? 'valid' : userAnswer ? 'invalid' : ''}
                                />
                                <label htmlFor="captcha" className={captchaValid ? 'success' : 'error'}>
                                    {captchaValid ? '✓ Correct!' : '*Required'}
                                </label>
                            </div>

                            <div className='contactus-form-button'>
                                <button disabled={!captchaValid}>Send Message</button>
                                <input type="checkbox" />
                                <p>Need an NDA</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='contactus-info'>
                    <h1>Connect with us directly</h1>
                    <p>You can also contact us via Email or Phone</p>
                    <a href="">+91 – 7878044044</a>
                    <a href="">info@softzway.com</a>
                </div>
            </div>
        </div>
    )
}

export default ContactUs