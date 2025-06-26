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

const prototypeServicesData = [
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/software-red.png",
        title: "Customized Prototypes",
        description: "Hire Prototype Software developers who specialize in crafting scalable, customized, and stable prototypes tailored to your business needs. Our company offers end-to-end support to ensure your project goals are met with precision and effectiveness."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/UIUX-red.png",
        title: "UI/UX Design",
        description: "Hire Prototype Software developers to enhance the visual appeal of your prototypes by integrating the latest UI/UX design trends. They work diligently to create a memorable and engaging experience for your end users."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/api-red.png",
        title: "API Integration",
        description: "Hire dedicated Prototype Software developers to integrate next-gen technologies like AI, Cloud, and IoT to create advanced prototypes. They ensure timely delivery and desired outcomes with precision."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/swift-2.png",
        title: "Technology Migration",
        description: "Hire Prototype Software developers to facilitate a smooth migration of your existing concepts into new technology stacks. They ensure that your valuable business data remains secure and private throughout the migration process."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/migration-red.png",
        title: "Feature Enhancement",
        description: "Hire Prototype Software programmers to enhance your existing prototypes by integrating new features and functionalities. They seamlessly incorporate third-party APIs and libraries to boost usability and elevate your prototype’s performance and capabilities."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/red-upgradation-2.png",
        title: "Upgradation",
        description: "Hire Prototype Software programmers to ensure your prototypes are free from bugs and glitches to maximize end-user engagement. Our dedicated developers conduct rigorous testing with advanced tools, effectively eliminating issues and enhancing the overall quality of your prototypes."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/game-testing-1.png",
        title: "Prototype Testing",
        description: "Hire Prototype Software developers who excel in integrating and deploying prototypes across your chosen platforms. They guide you through each deployment stage, ensuring optimal visibility and top-notch performance for your prototypes."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/maintenance-red.png",
        title: "Maintenance",
        description: "As technology evolves, your prototypes must adapt. Hire Prototype Software developers to receive on-demand support and maintenance solutions to ensure that your prototypes stay up-to-date and maintain high standards in a constantly changing landscape."
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
        desc: "Prototype software enables seamless deployment across major OS, ensuring web & desktop prototypes are universally accessible."
    },
    {
        heading: "Stability & Security",
        desc: "Experience the security, stability, and reliability of prototype software, guaranteeing continuous uptime for your business concepts."
    },
    {
        heading: "Accelerated Market Validation",
        desc: "Leverage rapid prototyping to develop feature-rich solutions swiftly, reducing time-to-market and enabling faster feedback cycles."
    },
    {
        heading: "Exceptional User Experience",
        desc: "With prototype software, enjoy superior user experiences and unparalleled UI design, making it a preferred choice for validating ideas."
    }
]

const prototypeFaqItems = [
    {
        title: "Why should I hire a Prototype Software developer?",
        description: "Hiring a Prototype Software developer ensures your ideas are quickly transformed into interactive prototypes, enabling faster validation and iteration."
    },
    {
        title: "How long does it take to develop a prototype?",
        description: "The development timeline depends on the prototype's complexity, features, and integrations. Simple prototypes can be built in a few days or weeks, while more complex ones may take longer."
    },
    {
        title: "Will my prototype work on all platforms?",
        description: "Yes, we ensure your prototype is compatible with a wide range of platforms and screen sizes through responsive design and thorough testing."
    },
    {
        title: "Do you provide post-launch support for prototypes?",
        description: "Absolutely! We offer ongoing maintenance, updates, and technical support to keep your prototype running smoothly and up-to-date."
    },
    {
        title: "Can you help with user testing and feedback?",
        description: "Yes, we assist with user testing and gathering feedback to help you refine your prototype and prepare for full-scale development."
    }
]

function HirePrototypeSoftware() {
    return (
        <div>
            <HireLanding
                title="Hire Prototype Software Developers"
                desc="Transform your ideas into interactive prototypes with our expert prototype software development services. From concept to validation, we deliver high-quality, user-friendly prototypes that accelerate your product journey."
            />
            <AIDevelopment
                aidevTitle="Specialization Of Our Prototype Software Development Team"
                aidevDesc="Hire prototype software developers from Softzway who bring your vision to life with advanced technological expertise and industry best practices."
                aidevGrid={prototypeServicesData}
                columns={4}
            />
            <HireTable
                title="Hire Dedicated Prototype Software Developers to Empower your Project"
                description="Hire prototype software developers to meet your business needs by leveraging our technical excellence."
                tableData={tableData}
            />
            <Cta />
            <HireTable2
                title="Hire Dedicated Prototype Software Developers to Empower your Project"
                description="Hire prototype software developers to meet your business needs by leveraging our technical excellence."
                tableData={tableData2}
            />
            <HireProcess
                title="How Does The Process Work?"
                processItems={processItems}
            />
            <HireBenefits
                title="Benefits of Hiring our Dedicated Prototype Software Developers"
                description="Hire prototype software developers who have in-depth knowledge of various prototyping tools and frameworks to bring your ideas to life."
                benefits={benefits}
                image="https://www.redappletech.com/wp-content/uploads/2024/07/Default_Man_working_with_laptop_in_office_0.png"
            />
            <HireBenefits2
                title="Our Commitment to Code Quality"
                description="At the core of our development process, we prioritize code quality, implementing stringent testing, detailed reviews, and industry best practices to deliver software that excels in both functionality and longevity."
                image="https://www.redappletech.com/wp-content/uploads/2024/07/Group-22.png"
            />
            <HireCta
                title="Want to build a robust prototype for your next big idea?"
                description="Hire prototype software developers from Softzway Technologies to plan, execute, and infuse brilliance into your projects."
                image="https://www.redappletech.com/wp-content/uploads/2024/07/Rectangle-83-1.png"
            />
            <AIFaq
                aiFaqItems={prototypeFaqItems}
            />
        </div>
    )
}

export default HirePrototypeSoftware