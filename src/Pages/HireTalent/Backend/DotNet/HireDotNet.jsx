import AIDevelopment from "../../../../Components/AI Solutions/AIDevelopment/AIDevelopment"
import HireLanding from "../../../../Components/HireTalent/HireLanding/HireLanding"
import HireStack from "../../../../Components/HireTalent/HireStack/HireStack"
import HireTable from "../../../../Components/HireTalent/HireTable/HireTable"
import Cta from "../../../../Components/Cta/Cta"
import HireTable2 from "../../../../Components/HireTalent/HireTable2/HireTable2"
import HireProcess from "../../../../Components/HireTalent/HireProcess/HireProcess"
import HireBenefits from "../../../../Components/HireTalent/HireBenefits/HireBenefits"
import HireBenefits2 from "../../../../Components/HireTalent/HireBenefits2/HireBenefits2"
import HireCta from "../../../../Components/HireTalent/HireCta/HireCta"
import AIFaq from "../../../../Components/AI Solutions/AIFaq/AIFaq"

const dotnetServicesData = [
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/software-red.png",
        title: "Custom Backend Solutions",
        description: "Hire .NET backend developers who specialize in building scalable, secure, and robust backend systems tailored to your business needs. Our team ensures seamless integration and high performance for your applications."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/UIUX-red.png",
        title: "API Development",
        description: "Hire .NET backend developers to design and implement RESTful APIs and endpoints, enabling smooth communication between your frontend and backend systems."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/api-red.png",
        title: "Third-Party Integrations",
        description: "Our .NET backend experts integrate third-party services, databases, and cloud solutions to extend your application's capabilities and streamline workflows."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/swift-2.png",
        title: "Migration to .NET",
        description: "Hire .NET backend developers to migrate your existing backend systems to .NET, ensuring data integrity, security, and improved maintainability."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/migration-red.png",
        title: "Performance Optimization",
        description: "Our developers analyze and optimize your .NET backend for speed, scalability, and reliability, ensuring your application can handle growing user demands."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/red-upgradation-2.png",
        title: "Upgradation & Refactoring",
        description: "Hire .NET backend programmers to upgrade legacy systems, refactor codebases, and implement best practices for long-term maintainability."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/game-testing-1.png",
        title: "Testing & QA",
        description: "Our .NET backend developers implement automated testing and rigorous QA processes to ensure your backend is reliable, secure, and bug-free."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/maintenance-red.png",
        title: "Maintenance & Support",
        description: "Receive ongoing support and maintenance for your .NET backend to keep your systems up-to-date, secure, and running smoothly."
    }
]

const tableData = {
    headers: [
        "Range of Developers",
        "Junior Developers",
        "Mid-Level Developers",
        "Senior Developers"
    ],
    rows: [
        {
            label: "Years of Experience",
            values: ["1-3 Years", "3-5 Years", "5+ Years"]
        },
        {
            label: "Methodology",
            values: ["Agile", "Agile", "Agile"]
        },
        {
            label: "Project Manager",
            values: ["Yes", "Yes", "Yes"]
        },
        {
            label: "Time Zone Flexibilities",
            values: ["Yes", "Yes", "Yes"]
        },
        {
            label: "Quality Guarantee",
            values: ["Yes", "Yes", "Yes"]
        },
        {
            label: "Working Hours",
            values: ["40 hours/week", "40 hours/week", "40 hours/week"]
        }
    ]
}

const tableData2 = {
    headers: [
        "Parameters",
        "Softzway Technologies",
        "In-house Developers",
        "Freelancing Platform (Upwork, Toptal etc.)"
    ],
    rows: [
        {
            label: "Time to find developer",
            values: ["1 day - 2 weeks", "4 - 12 weeks", "4 - 8 weeks"]
        },
        {
            label: "Time to start the project",
            values: ["1 day - 2 weeks", "2 - 10 weeks", "2 - 4 weeks"]
        },
        {
            label: "Recurring training costs & benefits",
            values: ["0", "$10,000 - $30,000", "0"]
        },
        {
            label: "Time to scale team size",
            values: ["1 day - 2 weeks", "4 - 16 weeks", "1 - 12 weeks"]
        },
        {
            label: "Average pricing (Weekly)",
            values: ["1.5X", "4X", "1X"]
        },
        {
            label: "Project failure risk",
            values: ["Extremely low (we have 98% success ratio)", "Low", "High"]
        },
        {
            label: "Developers backed by delivery team",
            values: ["Yes", "Same", "No"]
        }
    ]
}

const processItems = [
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/07/talk.png",
        title: "Initial Consultation",
        description: "Clarity on project scope and team expectations ensures tailored solutions that drive long-term partnership value."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/07/job-application.png",
        title: "Profile Submission",
        description: "This involves compiling and presenting qualifications, experience, and achievements to demonstrate suitability"
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/07/connection.png",
        title: "Screening & Selection",
        description: "This stage rigorously evaluates candidates to identify the best fit based on qualifications and skills for better outcome."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/07/start-up.png",
        title: "Deployment & Tracking",
        description: "This involves strategically placing resources and monitoring their progress to ensure efficient project execution."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/07/review.png",
        title: "Feedback & Improvements",
        description: "This stage facilitates continuous enhancement by integrating client's input to refine processes and optimize outcomes."
    }
]

const benefits = [
    {
        heading: "Enterprise-Grade Solutions",
        desc: ".NET enables rapid development of scalable, secure, and maintainable backend systems for web, mobile, and enterprise applications."
    },
    {
        heading: "Stability & Security",
        desc: "Experience the security, stability, and reliability of .NET, guaranteeing continuous uptime for your business platforms."
    },
    {
        heading: "Accelerated Development",
        desc: "Leverage .NET’s extensive libraries and frameworks to develop robust solutions swiftly, reducing time-to-market significantly."
    },
    {
        heading: "Exceptional Integration",
        desc: "With .NET, enjoy seamless integration with databases, APIs, and third-party services, making it a preferred choice for backend development."
    }
]

const dotnetFaqItems = [
    {
        title: "Why should I hire a .NET backend developer?",
        description: "Hiring a .NET backend developer ensures your application benefits from .NET’s versatility, scalability, and strong community support, resulting in robust and maintainable backend systems."
    },
    {
        title: "How long does it take to develop a .NET backend?",
        description: "The development timeline depends on the project's complexity, features, and integrations. Simple .NET backends can be built in a few weeks, while more complex solutions may take several months."
    },
    {
        title: "Will my .NET backend integrate with other technologies?",
        description: "Yes, our .NET backend developers ensure seamless integration with databases, APIs, cloud services, and other technologies as required by your project."
    },
    {
        title: "Do you provide post-launch support for .NET backends?",
        description: "Absolutely! We offer ongoing maintenance, updates, and technical support to keep your .NET backend running smoothly and up-to-date."
    },
    {
        title: "Can you help with cloud deployment and scaling?",
        description: "Yes, we assist with deploying your .NET backend to cloud platforms and ensure it is scalable, secure, and optimized for performance."
    }
]

function HireDotNet() {
    return (
        <div>
            <HireLanding
                title="Hire .NET Backend Developers"
                desc="Unlock the power of .NET for your backend systems with our expert development services. From scalable APIs to robust integrations, we deliver high-quality, secure .NET backend solutions that drive business growth and efficiency."
            />
            <AIDevelopment
                aidevTitle="Specialization Of Our .NET Backend Development Team"
                aidevDesc="Hire .NET backend developers from Softzway who bring your vision to life with advanced technological expertise and industry best practices."
                aidevGrid={dotnetServicesData}
                columns={4}
            />
            <HireTable
                title="Hire Dedicated .NET Backend Developers to Empower your Project"
                description="Hire .NET backend developers to meet your business needs by leveraging our technical excellence."
                tableData={tableData}
            />
            
            <Cta />
            <HireTable2
                title="Hire Dedicated .NET Backend Developers to Empower your Project"
                description="Hire .NET backend developers to meet your business needs by leveraging our technical excellence."
                tableData={tableData2}
            />
            <HireProcess
                title="How Does The Process Work?"
                processItems={processItems}
            />
            <HireBenefits
                title="Benefits of Hiring our Dedicated .NET Backend Developers"
                description="Hire .NET backend developers who have in-depth knowledge of various .NET frameworks and tools to build secure, scalable, and high-performing backend systems."
                benefits={benefits}
                image="https://www.redappletech.com/wp-content/uploads/2024/07/Default_Man_working_with_laptop_in_office_0.png"
            />
            <HireBenefits2
                title="Our Commitment to Code Quality"
                description="At the core of our development process, we prioritize code quality, implementing stringent testing, detailed reviews, and industry best practices to deliver software that excels in both functionality and longevity."
                image="https://www.redappletech.com/wp-content/uploads/2024/07/Group-22.png"
            />
            <HireCta
                title="Want to build a robust backend using .NET?"
                description="Hire .NET backend developers from Softzway Technologies to plan, execute, and infuse brilliance into your projects."
                image="https://www.redappletech.com/wp-content/uploads/2024/07/Rectangle-83-1.png"
            />
            <AIFaq
                aiFaqItems={dotnetFaqItems}
            />
        </div>
    )
}

export default HireDotNet