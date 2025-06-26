import Rightbutton from '../../reusables/Rightbutton/Rightbutton';
import './HireLanding.css'

const gridItems = [
  {
    title:"25+",
    description:"AI Developers"
  },
  {
    title:"20+",
    description:"AI Projects Delivered"
  },
  {
    title:"90%",
    description:"Talent Retention Rate"
  },
  {
    title:"100%",
    description:"Refund Policy*"
  },
]

function HireLanding({ subtitle, title, desc, img, bg }) {
  const style = bg
    ? { backgroundImage: `url(${bg})` }
    : { background: 'linear-gradient(140deg, #000000, var(--medium-teal))' };

  return (
    <div className='ailanding' style={style}>
      <div className='ailanding-container'>
        <div className='ailanding-content'>
          {/* <h4>{subtitle}</h4> */}
          <h1>{title}</h1>
          <p>{desc}</p>
          <div className='ailanding-btns'>
            {/* <button className='ailanding-demo-btn'>VIEW DEMO</button> */}
            {/* <button className='hirelanding-talk-btn'><span>TALK TO US</span></button> */}
            <Rightbutton rightbtn="TALK TO US"/>
          </div>


            <div className='ailanding-grid'>
              {gridItems.map((item, index) => (
                <div className="ailanding-grid-item" key={index}>
                  <h2>{item.title}</h2>
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

export default HireLanding