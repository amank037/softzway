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

const microservicesServicesData = [
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/software-red.png",
        title: "Custom Microservices Solutions",
        description: "Hire Microservices Software developers who specialize in designing and building scalable, secure, and robust microservices architectures tailored to your business needs. Our team ensures seamless integration and high performance for your distributed applications."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/UIUX-red.png",
        title: "UI/UX Design for Microservices",
        description: "Hire Microservices Software developers to enhance the usability and user experience of your applications by integrating the latest UI/UX design trends for microservices-based systems."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/api-red.png",
        title: "API & Service Integration",
        description: "Hire dedicated Microservices Software developers to build and integrate RESTful APIs, GraphQL, and other service endpoints, enabling smooth communication between microservices and external systems."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/swift-2.png",
        title: "Migration to Microservices",
        description: "Hire Microservices Software developers to migrate your monolithic applications to a microservices architecture, ensuring data integrity, security, and improved maintainability."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/migration-red.png",
        title: "Feature Enhancement",
        description: "Hire Microservices Software programmers to enhance your existing microservices by integrating new features and functionalities, boosting usability and performance."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/red-upgradation-2.png",
        title: "Upgradation & Refactoring",
        description: "Hire Microservices Software programmers to upgrade and refactor your microservices, ensuring they remain bug-free, secure, and optimized for future growth."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/game-testing-1.png",
        title: "Testing & QA",
        description: "Our Microservices Software developers implement automated testing and rigorous QA processes to ensure your microservices are reliable, secure, and bug-free."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/maintenance-red.png",
        title: "Maintenance & Support",
        description: "Receive ongoing support and maintenance for your microservices to keep your systems up-to-date, secure, and running smoothly."
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
        heading: "Versatile Deployment",
        desc: "Microservices enable seamless deployment across cloud and on-premise environments, ensuring your business applications are universally accessible and scalable."
    },
    {
        heading: "Stability & Security",
        desc: "Experience the security, stability, and reliability of microservices, guaranteeing continuous uptime for your business operations."
    },
    {
        heading: "Accelerated Market Reach",
        desc: "Leverage microservices architecture to develop feature-rich solutions swiftly, reducing time-to-market significantly."
    },
    {
        heading: "Exceptional User Experience",
        desc: "With microservices, enjoy superior user experiences and modular UI design, making it a preferred choice for scalable and maintainable systems."
    }
]

const microservicesFaqItems = [
    {
        title: "Why should I hire a Microservices Software developer?",
        description: "Hiring a Microservices Software developer ensures your solution is modular, scalable, and resilient, leveraging the latest cloud-native and distributed system best practices."
    },
    {
        title: "How long does it take to develop a microservices-based system?",
        description: "The development timeline depends on the project's complexity, features, and integrations. Simple microservices solutions can be built in a few weeks, while more complex systems may take several months."
    },
    {
        title: "Will my microservices integrate with other systems?",
        description: "Yes, our developers ensure seamless integration with databases, APIs, cloud services, and other technologies as required by your project."
    },
    {
        title: "Do you provide post-launch support for microservices?",
        description: "Absolutely! We offer ongoing maintenance, updates, and technical support to keep your microservices running smoothly and up-to-date."
    },
    {
        title: "Can you help with deployment and scaling?",
        description: "Yes, we assist with deploying your microservices and ensure they are scalable, secure, and optimized for performance."
    }
]

function HireMicroservices() {
    return (
        <div>
            <HireLanding
                title="Hire Microservices Software Developers"
                desc="Unlock the power of microservices architecture with our expert development services. From concept to launch, we deliver high-quality, scalable microservices solutions that drive business growth and operational efficiency."
                bg="/hire/micro.png"
            />
            <AIDevelopment
                aidevTitle="Specialization Of Our Microservices Software Development Team"
                aidevDesc="Hire microservices software developers from Softzway who bring your vision to life with advanced technological expertise and industry best practices."
                aidevGrid={microservicesServicesData}
                columns={4}
            />
            <HireTable
                title="Hire Dedicated Microservices Software Developers to Empower your Project"
                description="Hire microservices software developers to meet your business needs by leveraging our technical excellence."
                tableData={tableData}
            />
            <Cta />
            <HireTable2
                title="Hire Dedicated Microservices Software Developers to Empower your Project"
                description="Hire microservices software developers to meet your business needs by leveraging our technical excellence."
                tableData={tableData2}
            />
            <HireProcess
                title="How Does The Process Work?"
                processItems={processItems}
            />
            <HireBenefits
                title="Benefits of Hiring our Dedicated Microservices Software Developers"
                description="Hire microservices software developers who have in-depth knowledge of various microservices frameworks and tools to build secure, scalable, and high-performing solutions."
                benefits={benefits}
                image="/hire1.png"
            />
            <HireBenefits2
                title="Our Commitment to Code Quality"
                description="At the core of our development process, we prioritize code quality, implementing stringent testing, detailed reviews, and industry best practices to deliver software that excels in both functionality and longevity."
                image="https://www.redappletech.com/wp-content/uploads/2024/07/Group-22.png"
            />
            <HireCta
                title="Want to build a robust microservices solution?"
                description="Hire microservices software developers from Softzway Technologies to plan, execute, and infuse brilliance into your projects."
                image="https://www.redappletech.com/wp-content/uploads/2024/07/Rectangle-83-1.png"
            />
            <AIFaq
                aiFaqItems={microservicesFaqItems}
            />
        </div>
    )
}

export default HireMicroservices