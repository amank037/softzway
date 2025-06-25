import Title from '../../reusables/title/Title'
import './HireProcess.css'

function HireProcess({ title, processItems }) {
    return (
        <div className='hire-process-div'>
            <div className="hire-process-container">
                <Title title={title}/>
                <div className='hire-process-grid'>
                    {processItems.map((item, index) => (
                        <div className="hire-process-grid-item" key={index}>
                            <div className='hire-process-grid-img'>
                                <img src={item.image} alt="" />
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HireProcess