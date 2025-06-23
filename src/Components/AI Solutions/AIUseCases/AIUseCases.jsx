import { useState } from 'react';
import Title from '../../reusables/title/Title'
import './AIUseCases.css'

const useCases = [
    {
        title: "Healthcare",
        items: [
        "Deep learning models identify anomalies in X-rays, MRIs, and CT scans with high precision and speed.",
        "AI chatbots manage appointment scheduling, medication reminders, and patient queries with natural language processing (NLP).",
        "AI agent automates administrative tasks like billing, claims processing, and medical record management for operational efficiency",
        "AI-driven analysis of patient data recommends evidence-based treatment plans and enhances diagnostic accuracy"
        ]
    },
    {
        title: "Software & Technology",
        items: [
        "AI-driven agents generate test cases, detect anomalies, and enhance software quality assurance workflows",
        "AI agents analyze pull requests, ensure code quality standards, and suggest performance optimizations.",
        "AI agent uses advanced language models to convert user stories or requirements into functional code.",
        "AI identifies code vulnerabilities and suggests fixes by analyzing patterns in codebases."
        ]
    },
    {
        title: "Ecommerce",
        items: [
        "NLP-powered AI agents handle order inquiries, returns, and product questions with human-like interactions",
        "AI agents use collaborative filtering and deep learning to suggest products based on user behavior and purchase history.",
        "AI predicts demand, optimizes stock levels, and prevents overstocking or understocking through predictive analytics",
        "AI agents identify suspicious transactions and prevent chargebacks using anomaly detection and pattern recognition models."
        ]
    },
    {
        title: "Banking and Finance",
        items: [
        "AI-driven robo-advisors offer personalized investment strategies based on risk profiles and market conditions.",
        "AI agent ensures adherence to financial regulations by automating risk assessments and transaction monitoring",
        "AI agent blending Machine learning models predict market trends and execute high-frequency trades with data-driven insights",
        "AI chatbots handle inquiries, transaction history checks, and account management efficiently."
        ]
    },
    {
        title: "Education",
        items: [
        "AI agent creates educational materials, quizzes, and interactive modules using natural language generation models",
        "AI agent manages administrative tasks, schedules, and Q&A sessions in virtual classrooms through voice and text interaction",
        "AI agent provides real-time feedback and personalized assistance based on individual learning pace and style.",
        "AI agents customize learning paths based on student performance data and cognitive behavior analysis."
        ]
    },
    {
        title: "Media & Entertainment",
        items: [
        "AI agents generate creative storylines and dialogues based on genre and character profiles.",
        "AI agents suggest movies, music, and articles using collaborative filtering and user behavior analysis.",
        "AI agent places contextually relevant advertisements in videos or games using behavior-driven targeting models",
        "AI agents filter offensive content in live streams and comments using advanced pattern recognition."
        ]
    }
]

function AIUseCases() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className='aiuse-div'>
        <div className="aiuse-container">
            <Title title="Industry-Specific Use Cases of AI Agent Development" />
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
                    src="https://cdn-ilahpcd.nitrocdn.com/jDuDYworkYvtwHuagfVDTYpuGfPymqvt/assets/images/optimized/rev-55963ef/www.redappletech.com/wp-content/uploads/2025/03/AiAgentdevelopmentBannerimage.jpg"
                    alt=""
                />
            </div>
        </div>
        </div>
    )
}

export default AIUseCases;