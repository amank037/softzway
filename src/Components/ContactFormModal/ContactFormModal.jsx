import { createPortal } from 'react-dom'
import ContactForm from '../ContactForm/ContactForm'
import './ContactFormModal.css'

function ContactFormModal({ onClose }) {
    return createPortal(
        <div className="contact-modal-overlay">
            <div className="contact-modal-content">
                <button className="contact-modal-close" onClick={onClose} aria-label="Close">&times;</button>
                <ContactForm />
            </div>
        </div>,
        document.body
    )
}

export default ContactFormModal