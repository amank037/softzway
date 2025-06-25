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

const productSoftwareServicesData = [
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/software-red.png",
        title: "Customized Product Solutions",
        description: "Hire Product Software developers who specialize in crafting scalable, customized, and stable software products tailored to your business needs. Our company offers end-to-end support to ensure your project goals are met with precision and effectiveness."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/UIUX-red.png",
        title: "UI/UX Design",
        description: "Hire Product Software developers to enhance the visual appeal of your software products by integrating the latest UI/UX design trends. They work diligently to create a memorable and engaging experience for your end users."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/api-red.png",
        title: "API & Integrations",
        description: "Hire dedicated Product Software developers to integrate next-gen technologies like AI, Cloud, and IoT to create advanced product solutions. They ensure timely delivery and desired outcomes with precision."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/swift-2.png",
        title: "Migration & Modernization",
        description: "Hire Product Software developers to facilitate a smooth migration of your existing products to modern platforms. They ensure that your valuable business data remains secure and private throughout the migration process."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/migration-red.png",
        title: "Feature Enhancement",
        description: "Hire Product Software programmers to enhance your existing products by integrating new features and functionalities. They seamlessly incorporate third-party APIs and libraries to boost usability and elevate your product’s performance and capabilities."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/red-upgradation-2.png",
        title: "Upgradation & Refactoring",
        description: "Hire Product Software programmers to ensure your products are free from bugs and glitches to maximize end-user engagement. Our dedicated developers conduct rigorous testing with advanced tools, effectively eliminating issues and enhancing the overall quality of your software."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/game-testing-1.png",
        title: "Product Testing",
        description: "Hire Product Software developers who excel in integrating and deploying software products across your chosen platforms. They guide you through each deployment stage, ensuring optimal visibility and top-notch performance for your products."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/maintenance-red.png",
        title: "Maintenance & Support",
        description: "As technology evolves, your products must adapt. Hire Product Software developers to receive on-demand support and maintenance solutions to ensure that your products stay up-to-date and maintain high standards in a constantly changing landscape."
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
        desc: "Product software enables seamless deployment across major OS, ensuring web & desktop applications are universally accessible."
    },
    {
        heading: "Stability & Security",
        desc: "Experience the security, stability, and reliability of product software, guaranteeing continuous uptime for your business portals."
    },
    {
        heading: "Accelerated Market Reach",
        desc: "Leverage robust product frameworks to develop feature-rich solutions swiftly, reducing time-to-market significantly."
    },
    {
        heading: "Exceptional User Experience",
        desc: "With product software, enjoy superior user experiences and unparalleled UI design, making it a globally preferred choice among developers."
    }
]

const productSoftwareFaqItems = [
    {
        title: "Why should I hire a Product Software developer?",
        description: "Hiring a Product Software developer ensures your product is optimized for a wide range of platforms, delivers a seamless user experience, and leverages the latest features and security standards."
    },
    {
        title: "How long does it take to develop a product software solution?",
        description: "The development timeline depends on the product's complexity, features, and integrations. Simple product software can be built in a few weeks, while more complex solutions may take several months."
    },
    {
        title: "Will my product software work on all platforms?",
        description: "Yes, we ensure your product is compatible with a wide range of platforms and screen sizes through responsive design and thorough testing."
    },
    {
        title: "Do you provide post-launch support for product software?",
        description: "Absolutely! We offer ongoing maintenance, updates, and technical support to keep your product software running smoothly and up-to-date."
    },
    {
        title: "Can you help with deployment and launch?",
        description: "Yes, we handle the entire deployment process, ensuring your product meets all guidelines and requirements for a successful launch."
    }
]

function HireProductSoftware() {
    return (
        <div>
            <HireLanding
                title="Hire Product Software Developers"
                desc="Unlock the potential of innovative product development with our expert software services. From concept to launch, we deliver high-quality, user-friendly product software solutions that drive business growth and enhance user engagement."
            />
            <AIDevelopment
                aidevTitle="Specialization Of Our Product Software Development Team"
                aidevDesc="Hire product software developers from Softzway who bring your vision to life with advanced technological expertise and industry best practices."
                aidevGrid={productSoftwareServicesData}
                columns={4}
            />
            <HireTable
                title="Hire Dedicated Product Software Developers to Empower your Project"
                description="Hire product software developers to meet your business needs by leveraging our technical excellence."
                tableData={tableData}
            />
            <HireStack
                title="Tech Competence of Our Product Software Developers"
            />
            <Cta />
            <HireTable2
                title="Hire Dedicated Product Software Developers to Empower your Project"
                description="Hire product software developers to meet your business needs by leveraging our technical excellence."
                tableData={tableData2}
            />
            <HireProcess
                title="How Does The Process Work?"
                processItems={processItems}
            />
            <HireBenefits
                title="Benefits of Hiring our Dedicated Product Software Developers"
                description="Hire product software developers who have in-depth knowledge of various product development tools to bring your ideas to life."
                benefits={benefits}
                image="https://www.redappletech.com/wp-content/uploads/2024/07/Default_Man_working_with_laptop_in_office_0.png"
            />
            <HireBenefits2
                title="Our Commitment to Code Quality"
                description="At the core of our development process, we prioritize code quality, implementing stringent testing, detailed reviews, and industry best practices to deliver software that excels in both functionality and longevity."
                image="https://www.redappletech.com/wp-content/uploads/2024/07/Group-22.png"
            />
            <HireCta
                title="Want to build a robust product software solution?"
                description="Hire product software developers from Softzway Technologies to plan, execute, and infuse brilliance into your projects."
                image="https://www.redappletech.com/wp-content/uploads/2024/07/Rectangle-83-1.png"
            />
            <AIFaq
                aiFaqItems={productSoftwareFaqItems}
            />
        </div>
    )
}

export default HireProductSoftware