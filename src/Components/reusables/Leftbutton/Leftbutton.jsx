import './Leftbutton.css'
import { useState } from 'react'
import ContactFormModal from '../../ContactFormModal/ContactFormModal'

function Leftbutton({leftbtn}) {

  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className='leftbtn-div' onClick={() => setShowModal(true)}>
          <button><span>{leftbtn}</span></button>
      </div>
      {showModal && <ContactFormModal onClose={() => setShowModal(false)} />}
    </>
  )
}

export default Leftbutton