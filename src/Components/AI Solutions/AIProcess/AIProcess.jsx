import Title from '../../reusables/title/Title'
import './AIProcess.css'



function AIProcess({ title, processItems }) {
    return (
        <div className='aiprocess-div'>
        <div className="aiprocess-container">
            <Title title={title} />
            <div className="aiprocess-timeline-bar">
            {processItems.map((item, idx) => (
                <div className="aiprocess-timeline-dot-wrapper animate-on-scroll" data-direction="right" data-delay={idx * 0.1} key={item.title}>
                    <div className="aiprocess-timeline-dot"></div>
                    <div className={`aiprocess-timeline-card ${idx % 2 === 0 ? 'up' : 'down'}`}>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    )
}

export default AIProcess