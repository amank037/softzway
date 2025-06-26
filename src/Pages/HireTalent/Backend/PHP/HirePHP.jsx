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

const phpServicesData = [
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/software-red.png",
        title: "Custom Backend Solutions",
        description: "Hire PHP backend developers who specialize in building scalable, secure, and robust backend systems tailored to your business needs. Our team ensures seamless integration and high performance for your applications."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/UIUX-red.png",
        title: "API Development",
        description: "Hire PHP backend developers to design and implement RESTful APIs and endpoints, enabling smooth communication between your frontend and backend systems."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/api-red.png",
        title: "Third-Party Integrations",
        description: "Our PHP backend experts integrate third-party services, databases, and cloud solutions to extend your application's capabilities and streamline workflows."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/swift-2.png",
        title: "Migration to PHP",
        description: "Hire PHP backend developers to migrate your existing backend systems to PHP, ensuring data integrity, security, and improved maintainability."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/migration-red.png",
        title: "Performance Optimization",
        description: "Our developers analyze and optimize your PHP backend for speed, scalability, and reliability, ensuring your application can handle growing user demands."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/red-upgradation-2.png",
        title: "Upgradation & Refactoring",
        description: "Hire PHP backend programmers to upgrade legacy systems, refactor codebases, and implement best practices for long-term maintainability."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/game-testing-1.png",
        title: "Testing & QA",
        description: "Our PHP backend developers implement automated testing and rigorous QA processes to ensure your backend is reliable, secure, and bug-free."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/maintenance-red.png",
        title: "Maintenance & Support",
        description: "Receive ongoing support and maintenance for your PHP backend to keep your systems up-to-date, secure, and running smoothly."
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
        description: "This involves compiling and presenting qualifications, experience, and achievements to demonstrate suitability."
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
        heading: "Versatile Backend Solutions",
        desc: "PHP enables rapid development of scalable, secure, and maintainable backend systems for web, mobile, and enterprise applications."
    },
    {
        heading: "Stability & Security",
        desc: "Experience the security, stability, and reliability of PHP, guaranteeing continuous uptime for your business platforms."
    },
    {
        heading: "Accelerated Development",
        desc: "Leverage PHP’s extensive libraries and frameworks to develop robust solutions swiftly, reducing time-to-market significantly."
    },
    {
        heading: "Exceptional Integration",
        desc: "With PHP, enjoy seamless integration with databases, APIs, and third-party services, making it a preferred choice for backend development."
    }
]

const phpFaqItems = [
    {
        title: "Why should I hire a PHP backend developer?",
        description: "Hiring a PHP backend developer ensures your application benefits from PHP’s versatility, scalability, and strong community support, resulting in robust and maintainable backend systems."
    },
    {
        title: "How long does it take to develop a PHP backend?",
        description: "The development timeline depends on the project's complexity, features, and integrations. Simple PHP backends can be built in a few weeks, while more complex solutions may take several months."
    },
    {
        title: "Will my PHP backend integrate with other technologies?",
        description: "Yes, our PHP backend developers ensure seamless integration with databases, APIs, cloud services, and other technologies as required by your project."
    },
    {
        title: "Do you provide post-launch support for PHP backends?",
        description: "Absolutely! We offer ongoing maintenance, updates, and technical support to keep your PHP backend running smoothly and up-to-date."
    },
    {
        title: "Can you help with cloud deployment and scaling?",
        description: "Yes, we assist with deploying your PHP backend to cloud platforms and ensure it is scalable, secure, and optimized for performance."
    }
]

function HirePHP() {
    return (
        <div>
            <HireLanding
                title="Hire PHP Backend Developers"
                desc="Unlock the power of PHP for your backend systems with our expert development services. From scalable APIs to robust integrations, we deliver high-quality, secure PHP backend solutions that drive business growth and efficiency."

            />
            <AIDevelopment
                aidevTitle="Specialization Of Our PHP Backend Development Team"
                aidevDesc="Hire PHP backend developers from Softzway who bring your vision to life with advanced technological expertise and industry best practices."
                aidevGrid={phpServicesData}
                columns={4}
            />
            <HireTable
                title="Hire Dedicated PHP Backend Developers to Empower your Project"
                description="Hire PHP backend developers to meet your business needs by leveraging our technical excellence."
                tableData={tableData}
            />
            
            <Cta />
            <HireTable2
                title="Hire Dedicated PHP Backend Developers to Empower your Project"
                description="Hire PHP backend developers to meet your business needs by leveraging our technical excellence."
                tableData={tableData2}
            />
            <HireProcess
                title="How Does The Process Work?"
                processItems={processItems}
            />
            <HireBenefits
                title="Benefits of Hiring our Dedicated PHP Backend Developers"
                description="Hire PHP backend developers who have in-depth knowledge of various PHP frameworks and tools to build secure, scalable, and high-performing backend systems."
                benefits={benefits}
                image="https://www.redappletech.com/wp-content/uploads/2024/07/Default_Man_working_with_laptop_in_office_0.png"
            />
            <HireBenefits2
                title="Our Commitment to Code Quality"
                description="At the core of our development process, we prioritize code quality, implementing stringent testing, detailed reviews, and industry best practices to deliver software that excels in both functionality and longevity."
                image="https://www.redappletech.com/wp-content/uploads/2024/07/Group-22.png"
            />
            <HireCta
                title="Want to build a robust backend using PHP?"
                description="Hire PHP backend developers from Softzway Technologies to plan, execute, and infuse brilliance into your projects."
                image="https://www.redappletech.com/wp-content/uploads/2024/07/Rectangle-83-1.png"
            />
            <AIFaq
                aiFaqItems={phpFaqItems}
            />
        </div>
    )
}

export default HirePHP