import { useState } from 'react';
import Title from '../../reusables/title/Title'
import './AIUseCases.css'



function AIUseCases({ title, useCases, img }) {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className='aiuse-div'>
        <div className="aiuse-container">
            <Title title={title} />
            <div className='aiuse-div'>
                <div className='aiuse-accordion'>
                    {useCases.map((caseItem, idx) => (
                    <div className={`aiuse-panel${openIndex === idx ? ' open' : ''}`} key={caseItem.title}>
                        <div
                        className={`aiuse-panel-title${openIndex === idx ? ' open' : ''}`}
                        onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                        >
                        {caseItem.title} <span><i className="fa-solid fa-chevron-up"></i></span>
                        </div>
                        <ul className="aiuse-panel-list">
                        {caseItem.items.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                        </ul>
                    </div>
                    ))}
                </div>
                <img
                    src={img}
                    alt=""
                />
            </div>
        </div>
        </div>
    )
}

export default AIUseCases;