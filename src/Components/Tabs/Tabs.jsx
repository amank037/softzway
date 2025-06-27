import { useState } from 'react'
import './Tabs.css'
import Title from '../reusables/title/Title';

const collaborationModels = [
  {
    title: "Project-Based Team Composition",
    description: "Each of our clients gets their own dedicated team, selected based on project complexity, domain knowledge, and required tech expertise. You get architects, developers, testers, and DevOps engineers who’ve worked in similar environments or industries before.",
    description2: "You also have the flexibility to dynamically scale your team size based on the specific sprint and get the right balance of skills and resources at every stage of the development lifecycle."
  },
  {
    title: "Tailored Process Workflows",
    description: "The delivery model we follow has the flexibility to support the internal approvals, stakeholder involvement, security needs, and review cycles of every business. We work with your preferred tools, follow your communication schedules, and adjust to your working hours if needed.",
    description2: "The entire development process stays in your control, with the freedom to use your preferred order and methodology, while we provide ongoing technical leadership and guidance."
  },
  {
    title: "Agile Development Frameworks",
    description: "Agile has always been integral to our development approach, especially when it comes to customized, business-focused solutions. Frameworks like Scrum, Kanban, and Lean help us support quick iterations, continuous feedback, and the ability to adapt to practically anything.",
    description2: "You’ll always have the freedom to tweak things based on new ideas or changing priorities, as the project, timelines, and workflows follow the defined plan without any delay."
  },
  {
    title: "Client-First Collaboration Models",
    description: "Get the maximum flexibility in team structure, engagement models, and delivery timelines - build a fully dedicated team for long-term needs, hire a scalable resource pool for immediate projects, or work with on-demand custom software developers for fluctuating workloads.",
    description2: "Our pricing can also be adjusted to fit the scope and complexity. We offer options like fixed-price, time-and-materials, or a hybrid approach to keep things budget-friendly."
  }
];

function Tabs() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className='tabs-div'>
            <Title title="Our Focus Strategies" />
            <div className="tabs-container">
                <div className="tabs-list animate-on-scroll" data-direction="left" data-delay="0.2">
                    {collaborationModels.map((item, idx) => (
                    <button
                        key={item.title}
                        className={`tabs-list-item${activeIndex === idx ? ' active' : ''}`}
                        onClick={() => setActiveIndex(idx)}
                    >
                        {item.title}
                    </button>
                    ))}
                </div>
                <div className="tabs-content animate-on-scroll" data-direction="right" data-delay="0.2">
                    <h3 className="tabs-content-title">{collaborationModels[activeIndex].title}</h3>
                    <p className="tabs-content-desc">{collaborationModels[activeIndex].description}</p>
                    <p className="tabs-content-desc">{collaborationModels[activeIndex].description2}</p>
                </div>
            </div>
        </div>
    );
}

export default Tabs