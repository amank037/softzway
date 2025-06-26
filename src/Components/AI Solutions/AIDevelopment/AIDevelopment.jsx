import Title from '../../reusables/title/Title'
import './AIDevelopment.css'

function AIDevelopment({ aidevTitle, aidevDesc, aidevGrid, columns }) {
    return (
        <div className='aidev-div'>
            {/* Background SVG elements */}
            <div className="aidev-bg-graphics">
                {/* Large background shapes */}
                
                <svg className="aidev-bg-svg aidev-bg-svg-2" viewBox="0 0 150 150" fill="none">
                    <polygon points="75,10 90,50 130,50 100,75 115,115 75,90 35,115 50,75 20,50 60,50" 
                             fill="var(--light-green)" fillOpacity="0.06"/>
                </svg>
                
                <svg className="aidev-bg-svg aidev-bg-svg-3" viewBox="0 0 120 120" fill="none">
                    <rect x="20" y="20" width="80" height="80" rx="15" fill="var(--light-green)" fillOpacity="0.07"/>
                    <rect x="35" y="35" width="50" height="50" rx="10" fill="var(--light-green)" fillOpacity="0.09"/>
                </svg>
                
                {/* Medium floating elements */}
                <svg className="aidev-bg-svg aidev-bg-svg-4" viewBox="0 0 100 100" fill="none">
                    <path d="M50 10 L90 90 L10 90 Z" fill="var(--light-green)" fillOpacity="0.08"/>
                </svg>
                
                <svg className="aidev-bg-svg aidev-bg-svg-5" viewBox="0 0 80 80" fill="none">
                    <circle cx="40" cy="40" r="35" fill="var(--light-green)" fillOpacity="0.06"/>
                    <circle cx="40" cy="40" r="20" fill="var(--light-green)" fillOpacity="0.10"/>
                </svg>
                
                <svg className="aidev-bg-svg aidev-bg-svg-6" viewBox="0 0 90 90" fill="none">
                    <polygon points="45,5 85,25 85,65 45,85 5,65 5,25" 
                             fill="var(--light-green)" fillOpacity="0.07"/>
                </svg>
                
                {/* Small accent elements */}
                <svg className="aidev-bg-svg aidev-bg-svg-7" viewBox="0 0 60 60" fill="none">
                    <circle cx="30" cy="30" r="25" fill="var(--light-green)" fillOpacity="0.12"/>
                </svg>
                
                <svg className="aidev-bg-svg aidev-bg-svg-8" viewBox="0 0 50 50" fill="none">
                    <rect x="10" y="10" width="30" height="30" rx="8" fill="var(--light-green)" fillOpacity="0.09"/>
                </svg>
                
                <svg className="aidev-bg-svg aidev-bg-svg-9" viewBox="0 0 70 70" fill="none">
                    <polygon points="35,5 65,35 35,65 5,35" fill="var(--light-green)" fillOpacity="0.08"/>
                </svg>
                
                <svg className="aidev-bg-svg aidev-bg-svg-10" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="15" fill="var(--light-green)" fillOpacity="0.11"/>
                </svg>
                
                {/* Tiny decorative elements */}
                <svg className="aidev-bg-svg aidev-bg-svg-11" viewBox="0 0 30 30" fill="none">
                    <circle cx="15" cy="15" r="10" fill="var(--light-green)" fillOpacity="0.15"/>
                </svg>
                
                <svg className="aidev-bg-svg aidev-bg-svg-12" viewBox="0 0 35 35" fill="none">
                    <rect x="5" y="5" width="25" height="25" rx="5" fill="var(--light-green)" fillOpacity="0.10"/>
                </svg>
                
                <svg className="aidev-bg-svg aidev-bg-svg-13" viewBox="0 0 45 45" fill="none">
                    <polygon points="22.5,2 42,42 3,42" fill="var(--light-green)" fillOpacity="0.08"/>
                </svg>
                
                <svg className="aidev-bg-svg aidev-bg-svg-14" viewBox="0 0 25 25" fill="none">
                    <circle cx="12.5" cy="12.5" r="8" fill="var(--light-green)" fillOpacity="0.13"/>
                </svg>
                
                <svg className="aidev-bg-svg aidev-bg-svg-15" viewBox="0 0 55 55" fill="none">
                    <polygon points="27.5,5 50,20 50,35 27.5,50 5,35 5,20" 
                             fill="var(--light-green)" fillOpacity="0.07"/>
                </svg>
                
                {/* Additional scattered elements */}
                <svg className="aidev-bg-svg aidev-bg-svg-16" viewBox="0 0 65 65" fill="none">
                    <circle cx="32.5" cy="32.5" r="28" fill="var(--light-green)" fillOpacity="0.06"/>
                </svg>
                
                <svg className="aidev-bg-svg aidev-bg-svg-17" viewBox="0 0 75 75" fill="none">
                    <rect x="15" y="15" width="45" height="45" rx="12" fill="var(--light-green)" fillOpacity="0.08"/>
                </svg>
                
                <svg className="aidev-bg-svg aidev-bg-svg-18" viewBox="0 0 85 85" fill="none">
                    <polygon points="42.5,5 80,42.5 42.5,80 5,42.5" fill="var(--light-green)" fillOpacity="0.07"/>
                </svg>
                
                <svg className="aidev-bg-svg aidev-bg-svg-19" viewBox="0 0 95 95" fill="none">
                    <circle cx="47.5" cy="47.5" r="40" fill="var(--gradient-light-green)" fillOpacity="0.05"/>
                </svg>
                
                <svg className="aidev-bg-svg aidev-bg-svg-20" viewBox="0 0 110 110" fill="none">
                    <polygon points="55,8 102,28 102,82 55,102 8,82 8,28" 
                             fill="var(--light-green)" fillOpacity="0.06"/>
                </svg>
            </div>
            
            <div className="aidev-container">
                <div className='aidev-title'>
                    <Title title={aidevTitle}/>
                    <p className='text-grey'>{aidevDesc}</p>
                </div>
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