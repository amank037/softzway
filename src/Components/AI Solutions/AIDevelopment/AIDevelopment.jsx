import Title from '../../reusables/title/Title'
import './AIDevelopment.css'


function AIDevelopment({ aidevTitle, aidevDesc, aidevGrid, columns }) {
    return (
        <div className='aidev-div'>
            <div className="aidev-container">
                <div className='aidev-title'>
                    <Title title={aidevTitle}/>
                    <p className='text-grey'>{aidevDesc}</p>
                </div>
                <div className="aidev-grid" style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}>
                    {aidevGrid.map((item, index) => (
                        <div className='aidev-grid-item' key={index}>
                            <div className='aidev-grid-title'>
                                {item.image && 
                                    <img src={item.image} alt={item.title} />
                                }
                                <h3>{item.title}</h3>
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