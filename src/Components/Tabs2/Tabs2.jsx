import { useState } from 'react'
import './Tabs2.css'
import tabCards from './Images'
import Title from '../reusables/title/Title';

const tabTitles = [
    "Emerging Tech", "Frontend", "Backend", "Mobile", "Database",
    "Frameworks", "Cloud", "DevOps", "Platforms", "Ecommerce"
];


function Tabs2() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className='tabs2-div'>
            <Title title="Built on Modern Tools and Technologies" />
            <div className="tabs2-container">
                <ul className="tabs2-list">
                    {tabTitles.map((title, idx) => (
                    <li key={title} className="tabs2-list-item">
                        <div
                        className={`tabs2-tab-btn${activeTab === idx ? ' active' : ''}`}
                        onClick={() => setActiveTab(idx)}
                        >
                        <span>{title}</span>
                        </div>
                    </li>
                    ))}
                </ul>
                <div className="tabs2-cards-grid">
                    {tabCards[activeTab].map((card, idx) => (
                    <div className="tabs2-card animate-on-scroll" data-direction="left" data-delay={idx*0.1} key={idx}>
                        <div className="tabs2-card-img">
                        {card.img ? <img src={card.img} alt={card.title} /> : <div className="tabs2-card-img-placeholder" />}
                        </div>
                        <div className="tabs2-card-title">{card.title}</div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Tabs2