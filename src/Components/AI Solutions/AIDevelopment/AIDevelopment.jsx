import Title from '../../reusables/title/Title'
import './AIDevelopment.css'

function AIDevelopment({ aidevTitle, aidevDesc, aidevGrid, columns }) {
    return (
        <div className='aidev-div'>
            {/* Background SVG elements */}

            <div className="aidev-container">
                    <Title title={aidevTitle}/>
                    <p className='text-grey'>{aidevDesc}</p>

                <div
                    className="aidev-grid"
                    style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
                >
                    {aidevGrid.map((item, index) => (
                        <div
                            className='aidev-grid-item animate-on-scroll' 
                            data-direction="right" 
                            data-delay={index * 0.1}
                            key={index}
                            
                        >
                            <div className='aidev-grid-top'>
                                <div className='aidev-grid-title'>
                                    {item.image &&
                                        <img src={item.image} alt={item.title} />
                                    }
                                    <h3>{item.title}</h3>
                                </div>
                                <div className='aidev-grid-line'></div>
                            </div>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AIDevelopment