import Title from '../../reusables/title/Title'
import './HireBenefits.css'

function HireBenefits({ title, description, benefits, image }) {
    return (
        <div className='hire-benefits-div'>
            <div className="hire-benefits-container">
                <Title title={title} />
                <p>{description}</p>
                <div className='hire-benefits-content'>
                    <img src={image} alt="" />
                    <ul>
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