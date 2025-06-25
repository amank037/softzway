import './HireLanding.css'

function HireLanding({ subtitle, title, desc, img, bg }) {
    const style = bg
        ? { backgroundImage: `url(${bg})` }
        : { background: 'linear-gradient(140deg, #000000, var(--medium-teal) )' };

    return (
        <div className='hirelanding' style={style}>
            <div className='hirelanding-container'>

                

                <div className='hirelanding-content'>
                    <h4>{subtitle}</h4>
                    <h1>{title}</h1>
                    <p>{desc}</p>
                    <div className='hirelanding-btns'>
                        {/* <button className='hirelanding-demo-btn'>VIEW DEMO</button> */}
                        <button className='hirelanding-talk-btn'><span>TALK TO US</span></button>
                    </div>
                </div>

                <div className="hirelanding-img">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HireLanding