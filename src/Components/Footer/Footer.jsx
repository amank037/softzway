import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-top'>
                    <div className='footer-top-left'>
                        <div className='header-logo'>
                            <img src="https://beta.softzway.com/images/logo.png" alt="" />
                        </div>
                        <h3>INNOVATION MEETS RELIABILITY</h3>
                        <p>Softzway leverages the latest technologies like AI/ML, AR/VR, and Blockchain to provide global clients with cutting-edge app development services that help them achieve their business goals and enhance customer experience. If you are searching for a globally trusted solution partner, you are in the right place!</p>
                        <div className='footer-social-icons'>
                            <i className="fa-brands fa-facebook-f" style={{color: "#ffffff"}}></i>
                            <i className="fa-brands fa-x-twitter" style={{color:"#ffffff"}}></i>
                            <i className="fa-brands fa-linkedin-in" style={{color:"#ffffff"}}></i>
                        </div>
                    </div>

                    <div className='footer-top-middle'>
                        <h3>INDIA</h3>
                        <div className='footer-contact'>
                            <i className="fa-solid fa-location-dot" style={{color:"#ffffff"}}></i>
                            <div>
                                <p>G-4, Okay Plus Spaces,</p>
                                <p>Malviya Nagar Industrial</p>
                                <p>Area Jaipur, (Raj) India 302017</p>
                            </div>
                        </div>
                        <div className='footer-contact'>
                            <i className="fa-solid fa-phone" style={{color:"#ffffff"}}></i>
                            <div>
                                <p>+91 – 7878044044</p>
                            </div>
                        </div>
                        <div className='footer-contact'>
                            <i className="fa-solid fa-phone" style={{color:"#ffffff"}}></i>
                            <div>
                                <p>+91 – 9116005587(HR)</p>
                            </div>
                        </div>
                        <div className='footer-contact'>
                            <i className="fa-solid fa-envelope" style={{color:"#ffffff"}}></i>
                            <div>
                                <p>sales@softzway.com</p>
                            </div>
                        </div>
                    </div>

                    <div className='footer-top-right'>
                        <div>
                            <h3>KEY EXPERTISE</h3>
                            <p>Mobile App Development  </p>
                            <p>Artificial Intelligence</p>
                            <p>Blockchain Development</p>
                            <p>Startup App Development</p>
                            <p>Dedicated Developers</p>
                            <p>Metaverse Development</p>
                        </div>

                        <div>
                            <h3>RESOURCES</h3>
                            <div>
                                <p>Sitemap</p>
                                <p>|</p>
                                <p>Contact Us</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='footer-bottom'>
                    <a href="https://www.dmca.com/Protection/Status.aspx?ID=4ff763e7-5cc1-4183-b868-ab8ae6a61248">
                        <div className='dmca-div'>
                            <p className='bg-green'>DMCA</p>
                            <p className='bg-none'>PROTECTED</p>
                        </div>
                    </a>

                    <div>
                        <p>Copyright © 2025 softzway - AI Development Company</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer