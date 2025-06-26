import Title from '../../reusables/title/Title'
import './HireBenefits.css'

function HireBenefits({ title, description, benefits, image }) {
    return (
        <div className='hire-benefits-div'>
            <div className="hire-benefits-container">
                <Title title={title} />
                <p>{description}</p>
                <div className='hire-benefits-content'>
                    <img src={image} alt="" className=" animate-on-scroll" data-direction="left" data-delay="0.2"/>
                    <ul className=" animate-on-scroll" data-direction="right" data-delay="0.2">
                        {benefits.map((item, idx) => (
                        <li key={idx}>
                            <h4>{item.heading}</h4>
                            <p>{item.desc}</p>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HireBenefits