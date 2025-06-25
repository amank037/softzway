import Title from '../../reusables/title/Title'
import './HireStack.css'

const stackItems = [
    {
        title: "Frameworks",
        content: [
        { icon: "Swift UI" },
        { icon: "Swift Package Manager" }
        ]
    },
    {
        title: "Clouds",
        content: [
        { icon: "Google Cloud Platform" },
        { icon: "Azure" },
        { icon: "Firebasee" },
        { icon: "Amazon Web Services" }
        ]
    },
    {
        title: "Languages",
        content: [
        { icon: "Swift" },
        { icon: "Objective-C" }
        ]
    },
    {
        title: "Components, Libraries and IDES",
        content: [
        { icon: "Xcode" },
        { icon: "Cocoa Touch" },
        { icon: "Native iOS SDK" }
        ]
    }
]


function HireStack({ title }) {
  return (
    <div className='hirestack-div'>
        <div className="hirestack-container">
            <Title title={title}/>
            <div className="hirestack-grid">
                {stackItems.map((item, index) => (
                    <div className="hirestack-grid-item" key={index}>
                        <h3>{item.title}</h3>
                        <div className='hirestack-grid-content'>
                            {item.content.map((item, idx) => (
                                <div className='hirestack-grid-content-item' key={idx}>
                                    <p>{item.icon}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default HireStack