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

const fullStackServicesData = [
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/software-red.png",
        title: "Custom Full Stack Solutions",
        description: "Hire Full Stack developers who specialize in building scalable, secure, and robust web and mobile applications tailored to your business needs. Our team ensures seamless integration and high performance across the stack."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/UIUX-red.png",
        title: "UI/UX Design",
        description: "Hire Full Stack developers to enhance the visual appeal and usability of your applications by integrating the latest UI/UX design trends for a memorable user experience."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/api-red.png",
        title: "API & Integrations",
        description: "Hire dedicated Full Stack developers to integrate next-gen technologies like AI, Cloud, and IoT, and to connect your software with third-party services and APIs."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/swift-2.png",
        title: "Migration & Modernization",
        description: "Hire Full Stack developers to migrate your legacy systems to modern platforms, ensuring data integrity, security, and improved maintainability."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/migration-red.png",
        title: "Feature Enhancement",
        description: "Hire Full Stack programmers to enhance your existing solutions by integrating new features and functionalities, boosting usability and performance."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/red-upgradation-2.png",
        title: "Upgradation & Refactoring",
        description: "Hire Full Stack programmers to upgrade and refactor your software, ensuring it remains bug-free, secure, and optimized for future growth."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/game-testing-1.png",
        title: "Testing & QA",
        description: "Our Full Stack developers implement automated testing and rigorous QA processes to ensure your applications are reliable, secure, and bug-free."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/maintenance-red.png",
        title: "Maintenance & Support",
        description: "Receive ongoing support and maintenance for your full stack applications to keep your systems up-to-date, secure, and running smoothly."
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
        desc: "Full stack development enables seamless deployment across web and mobile platforms, ensuring your applications are universally accessible."
    },
    {
        heading: "Stability & Security",
        desc: "Experience the security, stability, and reliability of full stack solutions, guaranteeing continuous uptime for your business operations."
    },
    {
        heading: "Accelerated Market Reach",
        desc: "Leverage full stack expertise to develop feature-rich solutions swiftly, reducing time-to-market significantly."
    },
    {
        heading: "Exceptional User Experience",
        desc: "With full stack development, enjoy superior user experiences and tailored UI design, making it a preferred choice for modern businesses."
    }
]

const fullStackFaqItems = [
    {
        title: "Why should I hire a Full Stack developer?",
        description: "Hiring a Full Stack developer ensures your project is handled end-to-end, from frontend to backend, resulting in cohesive, scalable, and maintainable solutions."
    },
    {
        title: "How long does it take to develop a full stack application?",
        description: "The development timeline depends on the project's complexity, features, and integrations. Simple full stack solutions can be built in a few weeks, while more complex applications may take several months."
    },
    {
        title: "Will my full stack application integrate with other systems?",
        description: "Yes, our developers ensure seamless integration with databases, APIs, cloud services, and other technologies as required by your project."
    },
    {
        title: "Do you provide post-launch support for full stack applications?",
        description: "Absolutely! We offer ongoing maintenance, updates, and technical support to keep your full stack application running smoothly and up-to-date."
    },
    {
        title: "Can you help with deployment and scaling?",
        description: "Yes, we assist with deploying your full stack application and ensure it is scalable, secure, and optimized for performance."
    }
]

function HireFullStack() {
    return (
        <div>
            <HireLanding
                title="Hire Full Stack Developers"
                desc="Unlock the power of end-to-end development with our expert full stack development services. From concept to launch, we deliver high-quality, user-friendly applications that drive business growth and operational efficiency."
                bg="/hire/full.png"
            />
            <AIDevelopment
                aidevTitle="Specialization Of Our Full Stack Development Team"
                aidevDesc="Hire full stack developers from Softzway who bring your vision to life with advanced technological expertise and industry best practices."
                aidevGrid={fullStackServicesData}
                columns={4}
            />
            <HireTable
                title="Hire Dedicated Full Stack Developers to Empower your Project"
                description="Hire full stack developers to meet your business needs by leveraging our technical excellence."
                tableData={tableData}
            />
            <Cta />
            <HireTable2
                title="Hire Dedicated Full Stack Developers to Empower your Project"
                description="Hire full stack developers to meet your business needs by leveraging our technical excellence."
                tableData={tableData2}
            />
            <HireProcess
                title="How Does The Process Work?"
                processItems={processItems}
            />
            <HireBenefits
                title="Benefits of Hiring our Dedicated Full Stack Developers"
                description="Hire full stack developers who have in-depth knowledge of various frontend and backend technologies to build secure, scalable, and high-performing solutions."
                benefits={benefits}
                image="https://www.redappletech.com/wp-content/uploads/2024/07/Default_Man_working_with_laptop_in_office_0.png"
            />
            <HireBenefits2
                title="Our Commitment to Code Quality"
                description="At the core of our development process, we prioritize code quality, implementing stringent testing, detailed reviews, and industry best practices to deliver software that excels in both functionality and longevity."
                image="https://www.redappletech.com/wp-content/uploads/2024/07/Group-22.png"
            />
            <HireCta
                title="Want to build a robust application with full stack expertise?"
                description="Hire full stack developers from Softzway Technologies to plan, execute, and infuse brilliance into your projects."
                image="https://www.redappletech.com/wp-content/uploads/2024/07/Rectangle-83-1.png"
            />
            <AIFaq
                aiFaqItems={fullStackFaqItems}
            />
        </div>
    )
}

export default HireFullStack