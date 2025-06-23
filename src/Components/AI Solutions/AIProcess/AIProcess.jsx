import Title from '../../reusables/title/Title'
import './AIProcess.css'

const aiprocessItems = [
    {
        title: "Requirement Gathering",
        description: "Our team devotes time to understanding your business needs properly. This helps them to create a proper roadmap to proceed."
    },
    {
        title: "Conducting Validation",
        description: "Our Artificial Intelligence developers run a feasibility test to identify challenges and opportunities to ensure the better execution of your project."
    },
    {
        title: "Development & Training",
        description: "With advanced ML algorithms, our AI experts train your AI model to make it an invaluable business asset for your success."
    },
    {
        title: "Integrate & Test",
        description: "We add AI models to your existing system to ensure its seamless working with proper testing and security assessments."
    },
    {
        title: "Deploy & Implement",
        description: "When the test outcome is satisfactory, we deploy your AI models in your real-time environment with a smooth implementation process."
    }
]

function AIProcess() {
    return (
        <div className='aiprocess-div'>
        <div className="aiprocess-container">
            <Title title="AI Agent Development Process- Our Method to Madness" />
            <div className="aiprocess-timeline-bar">
            {aiprocessItems.map((item, idx) => (
                <div className="aiprocess-timeline-dot-wrapper" key={item.title}>
                <div className="aiprocess-timeline-dot"></div>
                <div className={`aiprocess-timeline-card ${idx % 2 === 0 ? 'up' : 'down'}`}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    )
}

export default AIProcess