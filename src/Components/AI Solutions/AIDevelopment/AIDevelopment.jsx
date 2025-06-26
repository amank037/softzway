import Title from '../../reusables/title/Title'
import './AIDevelopment.css'

function AIDevelopment({ aidevTitle, aidevDesc, aidevGrid, columns }) {
    return (
        <div className='aidev-div'>
            {/* Background SVG Elements */}
            {/* <div className="aidev-bg-graphics">
                <svg className="aidev-bg-svg aidev-bg-svg-1" viewBox="0 0 200 200" fill="none">
                    <circle cx="100" cy="100" r="80" fill="var(--light-green)" fillOpacity="0.08"/>
                    <circle cx="100" cy="100" r="50" fill="var(--light-green)" fillOpacity="0.12"/>
                </svg>
                
                <svg className="aidev-bg-svg aidev-bg-svg-2" viewBox="0 0 150 150" fill="none">
                    <rect x="25" y="25" width="100" height="100" rx="20" fill="var(--light-green)" fillOpacity="0.06"/>
                    <rect x="40" y="40" width="70" height="70" rx="15" fill="var(--light-green)" fillOpacity="0.1"/>
                </svg>
                
                <svg className="aidev-bg-svg aidev-bg-svg-3" viewBox="0 0 120 120" fill="none">
                    <polygon points="60,10 90,50 60,90 30,50" fill="var(--light-green)" fillOpacity="0.05"/>
                    <polygon points="60,25 75,50 60,75 45,50" fill="var(--light-green)" fillOpacity="0.15"/>
                </svg>
            </div> */}

            <div className="aidev-container">
                <div className='aidev-title'>
                    <div className="aidev-title-accent">
                        <div className="aidev-accent-shape"></div>
                        <Title title={aidevTitle}/>
                    </div>
                    <p className='text-grey'>{aidevDesc}</p>
                </div>
                <div
                    className="aidev-grid aidev-grid-animated"
                    style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
                >
                    {aidevGrid.map((item, index) => (
                        <div
                            className='aidev-grid-item aidev-grid-item-animated'
                            key={index}
                            style={{ animationDelay: `${index * 0.08 + 0.1}s` }}
                        >
                            {/* <div className="aidev-item-bg">
                                <svg className="aidev-item-svg" viewBox="0 0 100 100" fill="none">
                                    <circle cx="80" cy="20" r="15" fill="var(--light-green)" fillOpacity="0.1"/>
                                    <circle cx="20" cy="70" r="10" fill="var(--light-green)" fillOpacity="0.15"/>
                                    <path d="M20 20 Q50 10 80 20 Q90 50 80 80 Q50 90 20 80 Q10 50 20 20" 
                                          fill="var(--light-green)" fillOpacity="0.05"/>
                                </svg>
                            </div> */}
                            
                            <div className='aidev-grid-title'>
                                {item.image &&
                                    <div className="aidev-image-wrapper">
                                        <img src={item.image} alt={item.title} />
                                        
                                    </div>
                                }
                                <h3>{item.title}</h3>
                            </div>
                            <div className='aidev-grid-line'></div>
                            <p>{item.description}</p>
                            
                            {/* Hover accent */}
                            <div className="aidev-hover-accent"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AIDevelopment