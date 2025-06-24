import Title from '../../reusables/title/Title'
import './AIDevelopment2.css'


function AIDevelopment({ aidevTitle, aidevDesc, aidevGrid, columns }) {
    return (
        <div className='aidev2-div'>
            <div className="aidev2-container">
                <div className='aidev2-title'>
                    <Title title={aidevTitle}/>
                    <p className='text-grey'>{aidevDesc}</p>
                </div>
                <div className="aidev2-grid" style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}>
                    {aidevGrid.map((item, index) => (
                        <div className='aidev2-grid-item' key={index}>
                            <div className='aidev2-grid-title'>
                                <img src={item.image} alt={item.title} />
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