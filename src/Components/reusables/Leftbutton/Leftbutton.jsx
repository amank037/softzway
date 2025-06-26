import './Leftbutton.css'

function Leftbutton({leftbtn}) {
  return (
    <div className='leftbtn-div'>
        <button><span>{leftbtn}</span></button>
    </div>
  )
}

export default Leftbutton