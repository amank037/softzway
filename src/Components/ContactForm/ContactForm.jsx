import { useState, useEffect } from 'react'
import Leftbutton from '../reusables/Leftbutton/Leftbutton'
import './ContactForm.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function ContactForm() {
    const [captcha, setCaptcha] = useState({ num1: 0, num2: 0 })

    const generateCaptcha = () => {
        const num1 = Math.floor(Math.random() * 101) // 0-100
        const num2 = Math.floor(Math.random() * 101) // 0-100
        setCaptcha({ num1, num2 })
    }

    useEffect(() => {
        generateCaptcha()
    }, [])

    return (
        <div className='contact-form'>
            <h3>Get a Consultation</h3>
            <div className='contact-form-info'>
                <input type="text" placeholder='Name*' name='name'/>
                <label htmlFor="name">Please enter your name.</label>
                <input type="email" placeholder='E-mail*' name='email'/>
                <label htmlFor="email">We need your email address to contact you.</label>
            </div>
            <div className='contact-form-number'>
                <PhoneInput
                    country={'in'}
                    inputProps={{
                        name: 'phone',
                        required: true,
                        autoFocus: false,
                        placeholder: 'Phone No'
                    }}
                    containerStyle={{ width: '100%' }}
                    inputStyle={{ width: '100%' }}
                />
                <label htmlFor="phone">Please enter your phone no.</label>
            </div>
            <div className='contact-form-subject'>
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
                        *Required
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
        </div>
    )
}

export default ContactForm