import './Rightbutton.css'
import { useState } from 'react'
import ContactFormModal from '../../ContactFormModal/ContactFormModal'

function Rightbutton({rightbtn}) {

  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className='rightbtn-div' onClick={() => setShowModal(true)}>
          <button ><span>{rightbtn}</span></button>
      </div>
      {showModal && <ContactFormModal onClose={() => setShowModal(false)} />}
    </>
  )
}

export default Rightbutton