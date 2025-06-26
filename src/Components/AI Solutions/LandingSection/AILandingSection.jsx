import Rightbutton from '../../reusables/Rightbutton/Rightbutton';
import './AILandingSection.css'
import { useEffect, useState } from 'react';

const gridItems = [
  {
    title: 25,
    description: "Developers",
    suffix:"+"
  },
  {
    title: 500,
    description: "Projects Delivered",
    suffix:"+"
  },
  {
    title: 90,
    description: "Talent Retention Rate",
    suffix: "%" 
  },
  {
    title: 100,
    description: "Refund Policy*",
    suffix: "%" 
  },
]

function AILandingSection({ title, desc, img, bg }) {
  
  const style = bg
    ? { backgroundImage: `url(${bg})` }
    : { background: 'linear-gradient(140deg, #000000, var(--medium-teal))' }

    const [counts, setCounts] = useState(gridItems.map(() => 0))

    useEffect(() => {
      const duration = 2000
      const steps = 100
      const interval = duration/steps
      let currentStep = 0

      const intervalId = setInterval(() => {
        currentStep++;
        setCounts(gridItems.map((item, i) => {
          const target = item.title;
          const value = Math.round((target / steps) * currentStep);
          return value > target ? target : value;
        }));
        if (currentStep >= steps) clearInterval(intervalId);
      }, interval);

      return () => clearInterval(intervalId);
  }, []);


  return (
    <div className='ailanding' style={style}>
      <div className='ailanding-container'>
        <div className='ailanding-content animate-on-scroll' data-direction="left" data-delay="0.5">
          <h1>{title}</h1>
          <p>{desc}</p>
          <div className='ailanding-btns'>
            <Rightbutton rightbtn="TALK TO US"/>
          </div>


            <div className='ailanding-grid'>
              {gridItems.map((item, index) => (
                <div className="ailanding-grid-item" key={index}>
                  <h2>{counts[index]}{item.suffix || ""}</h2>
                  <p>{item.description}</p>
                </div>
              ))}    
            </div>
        </div>

          <div className="ailanding-img">
            <img src={img} alt="" />
          </div>

      </div>
    </div>
  )
}

export default AILandingSection