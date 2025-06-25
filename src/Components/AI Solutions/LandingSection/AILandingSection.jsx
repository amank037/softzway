import './AILandingSection.css'

function AILandingSection({ subtitle, title, desc, img, bg }) {
  const style = bg
    ? { backgroundImage: `url(${bg})` }
    : { background: 'linear-gradient(140deg, #000000, var(--medium-teal))' };

  return (
    <div className='ailanding' style={style}>
      <div className='ailanding-container'>
        <div className='ailanding-content'>
          <h4>{subtitle}</h4>
          <h1>{title}</h1>
          <p>{desc}</p>
          <div className='ailanding-btns'>
            {/* <button className='ailanding-demo-btn'>VIEW DEMO</button> */}
            <button className='hirelanding-talk-btn'><span>TALK TO US</span></button>
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