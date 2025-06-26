import Title from '../../reusables/title/Title'
import './HireBenefits2.css'

function HireBenefits2({ title, description, image }) {
    return (
        <div className='hire-benefits2-div'>
                <div className="hire-benefits2-container">
                    <Title title={title} />
                    <p>{description}</p>
                    <div className='hire-benefits2-content'>
                        <ul className=" animate-on-scroll" data-direction="left" data-delay="0.2">
                            <li>
                                <h4>Upholding Coding Excellence</h4>
                                <p>We uphold quality with established guidelines, style checks, and clear documentation.</p>
                                <ul className='ul-inner'>
                                    <li>
                                    The team focuses on concise, secure coding with descriptive variables for easy maintenance.
                                    </li>
                                    <li>
                                    We leverage advanced tools and APIs for streamlined, platform-compatible development.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h4>Ensuring Thoroughness with Unit Testing</h4>
                                <p>Our iOS app development company implements rigorous unit testing to validate each component of the code. Ensuring its reliability and performance.</p>
                            </li>
                            <li>
                                <h4>Rigorous Code Review Practice</h4>
                                <p>Our app development company conducts meticulous code reviews to uphold quality. enhance functionality and prevent potential issues</p>
                            </li>
                        </ul>
                        <img src={image} alt="" className=" animate-on-scroll" data-direction="right" data-delay="0.2"/>
                    </div>
                </div>
        </div>
    )
}

export default HireBenefits2