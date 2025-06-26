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

const dedicatedSoftwareServicesData = [
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/software-red.png",
        title: "Customized Solutions",
        description: "Hire Dedicated Software developers who specialize in crafting scalable, customized, and stable software tailored to your business needs. Our company offers end-to-end support to ensure your project goals are met with precision and effectiveness."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/UIUX-red.png",
        title: "UI/UX Design",
        description: "Hire Dedicated Software developers to enhance the visual appeal and usability of your applications by integrating the latest UI/UX design trends. They work diligently to create a memorable and engaging experience for your end users."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/api-red.png",
        title: "API & Integrations",
        description: "Hire dedicated software developers to integrate next-gen technologies like AI, Cloud, and IoT, and to connect your software with third-party services and APIs. They ensure timely delivery and desired outcomes with precision."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/swift-2.png",
        title: "Migration & Modernization",
        description: "Hire Dedicated Software developers to facilitate a smooth migration of your existing systems to modern platforms. They ensure that your valuable business data remains secure and private throughout the migration process."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/migration-red.png",
        title: "Feature Enhancement",
        description: "Hire Dedicated Software programmers to enhance your existing solutions by integrating new features and functionalities. They seamlessly incorporate third-party APIs and libraries to boost usability and elevate your software’s performance."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/red-upgradation-2.png",
        title: "Upgradation & Refactoring",
        description: "Hire Dedicated Software programmers to upgrade and refactor your software, ensuring it remains bug-free, secure, and optimized for future growth."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/game-testing-1.png",
        title: "Testing & QA",
        description: "Our Dedicated Software developers implement automated testing and rigorous QA processes to ensure your software is reliable, secure, and bug-free."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/maintenance-red.png",
        title: "Maintenance & Support",
        description: "Receive ongoing support and maintenance for your dedicated software to keep your systems up-to-date, secure, and running smoothly."
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
        desc: "Dedicated software enables seamless deployment across platforms, ensuring your business applications are universally accessible."
    },
    {
        heading: "Stability & Security",
        desc: "Experience the security, stability, and reliability of dedicated software, guaranteeing continuous uptime for your business operations."
    },
    {
        heading: "Accelerated Market Reach",
        desc: "Leverage dedicated teams to develop feature-rich applications swiftly, reducing time-to-market significantly."
    },
    {
        heading: "Exceptional User Experience",
        desc: "With dedicated software developers, enjoy superior user experiences and tailored UI design, making it a preferred choice for unique business needs."
    }
]

const dedicatedSoftwareFaqItems = [
    {
        title: "Why should I hire a Dedicated Software developer?",
        description: "Hiring a Dedicated Software developer ensures your solution is tailored to your unique business requirements, scalable, secure, and future-ready."
    },
    {
        title: "How long does it take to develop dedicated software?",
        description: "The development timeline depends on the project's complexity, features, and integrations. Simple dedicated solutions can be built in a few weeks, while more complex software may take several months."
    },
    {
        title: "Will my dedicated software integrate with other systems?",
        description: "Yes, our developers ensure seamless integration with databases, APIs, cloud services, and other technologies as required by your project."
    },
    {
        title: "Do you provide post-launch support for dedicated software?",
        description: "Absolutely! We offer ongoing maintenance, updates, and technical support to keep your dedicated software running smoothly and up-to-date."
    },
    {
        title: "Can you help with deployment and scaling?",
        description: "Yes, we assist with deploying your dedicated software and ensure it is scalable, secure, and optimized for performance."
    }
]

function HireDedicatedSoftware() {
    return (
        <div>
            <HireLanding
                title="Hire Dedicated Software Developers"
                desc="Unlock the power of dedicated teams with our expert software development services. From concept to launch, we deliver high-quality, user-friendly dedicated software solutions that drive business growth and efficiency."
            />
            <AIDevelopment
                aidevTitle="Specialization Of Our Dedicated Software Development Team"
                aidevDesc="Hire dedicated software developers from Softzway who bring your vision to life with advanced technological expertise and industry best practices."
                aidevGrid={dedicatedSoftwareServicesData}
                columns={4}
            />
            <HireTable
                title="Hire Dedicated Software Developers to Empower your Project"
                description="Hire dedicated software developers to meet your business needs by leveraging our technical excellence."
                tableData={tableData}
            />
            <Cta />
            <HireTable2
                title="Hire Dedicated Software Developers to Empower your Project"
                description="Hire dedicated software developers to meet your business needs by leveraging our technical excellence."
                tableData={tableData2}
            />
            <HireProcess
                title="How Does The Process Work?"
                processItems={processItems}
            />
            <HireBenefits
                title="Benefits of Hiring our Dedicated Software Developers"
                description="Hire dedicated software developers who have in-depth knowledge of various technologies and tools to build secure, scalable, and high-performing solutions."
                benefits={benefits}
                image="https://www.redappletech.com/wp-content/uploads/2024/07/Default_Man_working_with_laptop_in_office_0.png"
            />
            <HireBenefits2
                title="Our Commitment to Code Quality"
                description="At the core of our development process, we prioritize code quality, implementing stringent testing, detailed reviews, and industry best practices to deliver software that excels in both functionality and longevity."
                image="https://www.redappletech.com/wp-content/uploads/2024/07/Group-22.png"
            />
            <HireCta
                title="Want to build a robust dedicated software solution?"
                description="Hire dedicated software developers from Softzway Technologies to plan, execute, and infuse brilliance into your projects."
                image="https://www.redappletech.com/wp-content/uploads/2024/07/Rectangle-83-1.png"
            />
            <AIFaq
                aiFaqItems={dedicatedSoftwareFaqItems}
            />
        </div>
    )
}

export default HireDedicatedSoftware