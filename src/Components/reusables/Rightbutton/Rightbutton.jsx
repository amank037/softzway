import './Rightbutton.css'

function Rightbutton({rightbtn}) {
  return (
    <div className='rightbtn-div'>
        <button><span>{rightbtn}</span></button>
    </div>
  )
}

export default Rightbutton