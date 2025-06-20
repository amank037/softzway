import { useState, useEffect } from 'react';
import './Contact.css'

function Contact() {
    const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, answer: 0 });
    const [userAnswer, setUserAnswer] = useState('');
    const [captchaValid, setCaptchaValid] = useState(false);

    // Generate random captcha numbers
    const generateCaptcha = () => {
        const num1 = Math.floor(Math.random() * 101); // 0-100
        const num2 = Math.floor(Math.random() * 101); // 0-100
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
    };

    // Generate captcha on component mount
    useEffect(() => {
        generateCaptcha();
    }, []);

    return (
        <div className='contact-div'>
            <div className='contact-container'>
                <div className='contact-title'>
                    <h2>Contact Us</h2>
                    <p>We Assure you to revert within one business day</p>
                    <div className='contact-line'></div>
                </div>

                <div className='contact-content'>
                    <div className='contact-text'>
                        <h2>Let's plan for a new project!</h2>
                        <p>We understand your project perspective to convert your amazing ideas into reality. Usher your business into a futuristic realm with our high-quality development services.</p>
                        <h3>Reach Us</h3>

                        <div className='contact-info'>
                            <a href="">+91 – 7878044044</a>
                            <a href="">info@softzway.com</a>
                        </div>
                    </div>

                    <div className='contact-form'>
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
                                    value={userAnswer}
                                    onChange={handleCaptchaChange}
                                    className={captchaValid ? 'valid' : userAnswer ? 'invalid' : ''}
                                />
                                <label htmlFor="captcha" className={captchaValid ? 'success' : 'error'}>
                                    {captchaValid ? '✓ Correct!' : '*Required'}
                                </label>
                            </div>

                            <div className='contact-form-button'>
                                <button disabled={!captchaValid}>Send Message</button>
                                <input type="checkbox" />
                                <p>Need an NDA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact