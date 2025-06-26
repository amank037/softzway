import { useState } from 'react';
import Title from '../../reusables/title/Title';
import './AIUseCases.css';

function AIUseCases({ title, useCases }) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="aiuse-tab-root">
            <div className="aiuse-container">
                <Title title={title} />
                <div className="aiuse-tab-layout">
                    <div className="aiuse-tab-list">
                        {useCases.map((caseItem, idx) => (
                            <div
                                key={caseItem.title}
                                className={`aiuse-tab-item${activeTab === idx ? ' active' : ''}`}
                                onClick={() => setActiveTab(idx)}
                                tabIndex={0}
                                role="button"
                                aria-selected={activeTab === idx}
                            >
                                <span>{caseItem.title}</span>
                            </div>
                        ))}
                    </div>
                    <div className="aiuse-tab-content-outer">
                        <div
                            className="aiuse-tab-content"
                            key={activeTab}
                        >
                            <ul>
                                {useCases[activeTab].items.map((item, i) => (
                                    <li
                                        key={i}
                                        style={{
                                            animationDelay: `${i * 0.07 + 0.1}s`
                                        }}
                                        className="aiuse-tab-content-li"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AIUseCases