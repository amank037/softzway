import { useState } from 'react';
import './ChatOverlay.css';

const itemsList = [
  {
    name: 'Live Chat',
    icon: 'fas fa-comments',
    color: '#43e97b',
    link: ''
  },
  {
    name: 'WhatsApp',
    icon: 'fab fa-whatsapp',
    color: '#25D366',
    link: ''
  },
  {
    name: 'Telegram',
    icon: 'fab fa-telegram-plane',
    color: '#0088cc',
    link: ''
  },
  {
    name: 'Skype',
    icon: 'fab fa-skype',
    color: '#00aff0',
    link: ''
  },
  {
    name: 'Phone',
    icon: 'fas fa-phone-alt',
    color: '#1e3a3a',
    link: ''
  }
];

function ChatOverlay() {
    const [open, setOpen] = useState(false);

    return (
        <div className="chat-overlay">
        <div className={`chat-options${open ? ' open' : ''}`}>
            {itemsList.map((item, index) => (
            <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="chat-option"
                style={{ transitionDelay: `${index * 0.06 + 0.1}s` }}
                title={item.name}
            >
                <i className={`${item.icon}`} style={{ color: item.color }}></i>
            </a>
            ))}
        </div>
        <button
            className="chat-main-btn"
            onClick={() => setOpen(o => !o)}
            aria-label="Open chat options"
        >
            <i className="fas fa-comments"></i>
        </button>
        </div>
    )
}

export default ChatOverlay;