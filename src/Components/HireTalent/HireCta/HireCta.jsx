import './HireCta.css'

function HireCta({ title, description, image }) {

    return (
        <div className='hirecta-div'>
            <div className='hirecta-container'>
                <div className="hirecta-title">
                    <h1>{title}</h1>
                    <h3>{description}</h3>
                    <button>Connect Our Experts</button>
                </div>

                <div className='hirecta-card-container'>
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HireCta