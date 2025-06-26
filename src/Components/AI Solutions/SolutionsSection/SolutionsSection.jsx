import './SolutionsSection.css'
import Title from '../../reusables/title/Title'
import Rightbutton from '../../reusables/Rightbutton/Rightbutton'
import Leftbutton from '../../reusables/Leftbutton/Leftbutton'

function SolutionsSection({ title, p1, p2, p3 }) {
  return (
    <div className='aisolutions'>
      
      <div className="aisolutions-title-section">
          <Title title={title} />
      </div>
      <div className="aisolutions-container">
        {/* Left side - Content */}
        <div className="aisolutions-content animate-on-scroll" data-direction="left" data-delay="0.2">
         
          
          <div className="aisolutions-text">
            <p>{p1}</p>
            <p>{p2}</p>
            <p>{p3}</p>
          </div>
          
          <div className="aisolutions-btns">
            {/* <button className="aisolutions-talk-btn">
              Talk To Our Experts
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button> */}
            <Leftbutton leftbtn="Talk To Our Experts"/>
            {/* <button className="aisolutions-meet-btn"><span>Schedule A Meeting</span></button> */}
            <Rightbutton rightbtn="Schedule A Meeting"/>
          </div>
        </div>
        
        {/* Right side - Visual elements */}
        <div className="aisolutions-visual animate-on-scroll" data-direction="right" data-delay="0.2">
          <div className="aisolutions-art-container">
            {/* Abstract geometric shapes */}
            <svg className="aisolutions-bg-art" viewBox="0 0 400 400" fill="none">
              {/* Large circle */}
              <circle cx="300" cy="100" r="60" fill="#6AAE43" fillOpacity="0.1"/>
              
              {/* Medium circles */}
              <circle cx="100" cy="200" r="40" fill="#6AAE43" fillOpacity="0.15"/>
              <circle cx="320" cy="280" r="35" fill="#6AAE43" fillOpacity="0.08"/>
              
              {/* Small accent circles */}
              <circle cx="150" cy="80" r="20" fill="#6AAE43" fillOpacity="0.2"/>
              <circle cx="350" cy="180" r="15" fill="#6AAE43" fillOpacity="0.25"/>
              <circle cx="80" cy="320" r="25" fill="#6AAE43" fillOpacity="0.12"/>
              
              {/* Connecting lines */}
              <path d="M150 80 L300 100" stroke="#6AAE43" strokeWidth="1" strokeOpacity="0.3"/>
              <path d="M100 200 L320 280" stroke="#6AAE43" strokeWidth="1" strokeOpacity="0.2"/>
              <path d="M350 180 L320 280" stroke="#6AAE43" strokeWidth="1" strokeOpacity="0.25"/>
            </svg>
            
            {/* Floating elements */}
            <div className="aisolutions-float-element aisolutions-float-1">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#6AAE43" strokeWidth="1.5" fillOpacity="0.1" fill="#6AAE43"/>
                <path d="M8 12l2 2 4-4" stroke="#6AAE43" strokeWidth="2"/>
              </svg>
            </div>
            
            <div className="aisolutions-float-element aisolutions-float-2">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="#6AAE43" strokeWidth="1.5" fillOpacity="0.1" fill="#6AAE43"/>
                <path d="M9 12l2 2 4-4" stroke="#6AAE43" strokeWidth="2"/>
              </svg>
            </div>
            
            <div className="aisolutions-float-element aisolutions-float-3">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
                <polygon points="12,2 15.09,8.26 22,9 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9 8.91,8.26" 
                         stroke="#6AAE43" strokeWidth="1.5" fillOpacity="0.1" fill="#6AAE43"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default SolutionsSection