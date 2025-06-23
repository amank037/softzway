import Title from '../../reusables/title/Title'
import { useState } from 'react'
import './AIFaq.css'

const aiFaqItems = [
    {
        title: "How Will Artificial Intelligence Agents Benefit My Organization?",
        description: "Using advanced Artificial Intelligence agents will help boost your business efficiency by automating tasks, improving customer service, providing data-based insights, personalizing experiences, cutting costs, and enhancing decisions. Hence, to develop AI-powered chatbots, you must communicate with a leading Artificial Intelligence development agency like Red Apple Technologies."
    },
    {
        title: "Do I Need Technical Expertise to Implement AI Agents for My Business?",
        description: "No! At Red Apple Technologies, we will help you with end-to-end AI Agent development services that involve managing development, integration, and support. It shall reduce your time and effort to get the cherished outcome with an improved ROI."
    },
    {
        title: "How Do You Ensure the Quality and Performance of Your AI Agents?",
        description: "Quality and performance are ensured through rigorous testing and validation. Our Artificial Intelligence agents undergo multiple tests: functionality, performance, and user acceptance. Besides, when creating an Artificial Intelligence agent, we also evaluate your specific needs for virtual assistant creation."
    },
    {
        title: "How Do You Ensure the Security and Integrity of AI Agents?",
        description: "We ensure the security and transparency of our Artificial Intelligence agents through robust encryption, access controls, and audits. Thorough testing identifies and mitigates vulnerabilities, guaranteeing secure and reliable operation. For more insights, you can talk to the enterprising team of Red Apple Technologies."
    },
    {
        title: "What Type of Post-Deployment Support Do You Provide?",
        description: "We provide complete post-deployment support like monitoring, maintenance, and updates. Our team ensures your Artificial Intelligence agents continue to work smoothly by addressing issues and enhancing capabilities as your business grows. As a leading Artificial Intelligence software agency, we bring value to your business with customized solutions."
    }
]

function AIFaq() {
    const [openIndex, setOpenIndex] = useState(0);
    return (
        <div className='aifaq-div'>
            <div className="aifaq-container">
                <Title title="Frequently Asked Questions"/>
                <div className='aifaq-accordion'>
                    {aiFaqItems.map((caseItem, idx) => (
                        <div className={`aifaq-panel${openIndex === idx ? ' open' : ''}`} key={caseItem.title}>
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