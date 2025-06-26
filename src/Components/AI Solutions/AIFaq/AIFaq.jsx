import Title from '../../reusables/title/Title'
import { useState } from 'react'
import './AIFaq.css'



function AIFaq({ aiFaqItems }) {
    const [openIndex, setOpenIndex] = useState(-1);
    return (
        <div className='aifaq-div'>
            <div className="aifaq-container">
                <Title title="Frequently Asked Questions"/>
                <div className='aifaq-accordion'>
                    {aiFaqItems.map((caseItem, idx) => (
                        <div className={`aifaq-panel${openIndex === idx ? ' open' : ''} animate-on-scroll`} data-direction="right" data-delay={idx*0.1} key={caseItem.title}>
                            <div
                                className={`aifaq-panel-title${openIndex === idx ? ' open' : ''}`}
                                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                            >
                                {caseItem.title}
                                <span className={`aifaq-chevron${openIndex === idx ? ' open' : ''}`}>
                                <i className="fa-solid fa-chevron-up"></i>
                                </span>
                            </div>
                            <div className="aifaq-panel-content">
                                <p className={`aifaq-panel-answer${openIndex === idx ? ' open' : ''}`}>
                                {caseItem.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AIFaq