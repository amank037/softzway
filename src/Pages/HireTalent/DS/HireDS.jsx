import AIDevelopment from "../../../Components/AI Solutions/AIDevelopment/AIDevelopment"
import HireLanding from "../../../Components/HireTalent/HireLanding/HireLanding"
import HireStack from "../../../Components/HireTalent/HireStack/HireStack"
import HireTable from "../../../Components/HireTalent/HireTable/HireTable"
import Cta from "../../../Components/Cta/Cta"
import HireTable2 from "../../../Components/HireTalent/HireTable2/HireTable2"
import HireProcess from "../../../Components/HireTalent/HireProcess/HireProcess"
import HireBenefits from "../../../Components/HireTalent/HireBenefits/HireBenefits"
import HireBenefits2 from "../../../Components/HireTalent/HireBenefits2/HireBenefits2"
import HireCta from "../../../Components/HireTalent/HireCta/HireCta"
import AIFaq from "../../../Components/AI Solutions/AIFaq/AIFaq"

const dsServicesData = [
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/software-red.png",
        title: "Custom Data Science Solutions",
        description: "Hire Data Science developers who specialize in crafting scalable, customized, and stable data-driven applications tailored to your business needs. Our company offers end-to-end support to ensure your project goals are met with precision and effectiveness."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/UIUX-red.png",
        title: "Data Visualization & UI/UX",
        description: "Hire Data Science developers to enhance the visual appeal and usability of your dashboards and analytics tools by integrating the latest UI/UX and visualization trends. They work diligently to create a memorable and engaging experience for your end users."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/api-red.png",
        title: "API & Data Integration",
        description: "Hire dedicated Data Science developers to integrate next-gen technologies like AI, ML, and IoT, and to connect your data pipelines with third-party services and APIs. They ensure timely delivery and desired outcomes with precision."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/swift-2.png",
        title: "Data Migration & Engineering",
        description: "Hire Data Science developers to facilitate a smooth migration of your existing data and analytics systems to modern platforms. They ensure that your valuable business data remains secure and private throughout the migration process."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/migration-red.png",
        title: "Feature Enhancement",
        description: "Hire Data Science programmers to enhance your existing solutions by integrating new features and functionalities. They seamlessly incorporate third-party APIs and libraries to boost usability and elevate your data science solution’s performance."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/red-upgradation-2.png",
        title: "Upgradation & Optimization",
        description: "Hire Data Science programmers to ensure your data science solutions are up-to-date, bug-free, and optimized for maximum performance. Our dedicated developers conduct rigorous testing and continuous improvement."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/game-testing-1.png",
        title: "Testing & Validation",
        description: "Hire Data Science developers who excel in validating and deploying data science models and analytics solutions across your chosen platforms. They guide you through each deployment stage, ensuring optimal visibility and top-notch performance."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/maintenance-red.png",
        title: "Maintenance & Support",
        description: "As technology evolves, your data science solutions must adapt. Hire Data Science developers to receive on-demand support and maintenance to ensure your solutions stay up-to-date and maintain high standards."
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
        heading: "Versatile Data Deployment",
        desc: "Data science enables seamless deployment of analytics and models across platforms, ensuring your business insights are universally accessible."
    },
    {
        heading: "Stability & Security",
        desc: "Experience the security, stability, and reliability of data-driven solutions, guaranteeing continuous uptime for your business operations."
    },
    {
        heading: "Accelerated Insights",
        desc: "Leverage data science frameworks to develop feature-rich, intelligent solutions swiftly, reducing time-to-insight and driving innovation."
    },
    {
        heading: "Exceptional User Experience",
        desc: "With data science, enjoy superior user experiences and actionable analytics, making it a globally preferred choice among modern businesses."
    }
]

const dsFaqItems = [
    {
        title: "Why should I hire a Data Science developer for my project?",
        description: "Hiring a Data Science developer ensures your solution leverages the latest in analytics, machine learning, and data engineering, delivering actionable insights tailored to your business."
    },
    {
        title: "How long does it take to develop a data science solution?",
        description: "The development timeline depends on the project's complexity, features, and integrations. Simple data science solutions can be built in a few weeks, while more advanced projects may take several months."
    },
    {
        title: "Will my data science solution integrate with existing systems?",
        description: "Yes, we ensure your data science solution is compatible and integrates seamlessly with your current systems, databases, and APIs."
    },
    {
        title: "Do you provide post-launch support for data science solutions?",
        description: "Absolutely! We offer ongoing maintenance, updates, and technical support to keep your data science solution running smoothly and up-to-date."
    },
    {
        title: "Can you help with model deployment and scaling?",
        description: "Yes, we assist with deploying your data science models and ensure they are scalable, secure, and optimized for performance."
    }
]

function HireDS() {
    return (
        <div>
            <HireLanding
                title="Hire Data Science Developers"
                desc="Unlock the power of data with our expert data science development services. From concept to deployment, we deliver high-quality, intelligent data science solutions that drive business growth and actionable insights."
                bg="/hire/ds.png"
            />
            <AIDevelopment
                aidevTitle="Specialization Of Our Data Science Development Team"
                aidevDesc="Hire data science developers from Softzway who bring your vision to life with advanced technological expertise and industry best practices."
                aidevGrid={dsServicesData}
                columns={4}
            />
            <HireTable
                title="Hire Dedicated Data Science Developers to Empower your Project"
                description="Hire data science developers to meet your business needs by leveraging our technical excellence."
                tableData={tableData}
            />
            <Cta />
            <HireTable2
                title="Hire Dedicated Data Science Developers to Empower your Project"
                description="Hire data science developers to meet your business needs by leveraging our technical excellence."
                tableData={tableData2}
            />
            <HireProcess
                title="How Does The Process Work?"
                processItems={processItems}
            />
            <HireBenefits
                title="Benefits of Hiring our Dedicated Data Science Developers"
                description="Hire data science developers who have in-depth knowledge of various data science tools and frameworks to bring your ideas to life."
                benefits={benefits}
                image="/hire1.png"
            />
            <HireBenefits2
                title="Our Commitment to Code Quality"
                description="At the core of our development process, we prioritize code quality, implementing stringent testing, detailed reviews, and industry best practices to deliver software that excels in both functionality and longevity."
                image="https://www.redappletech.com/wp-content/uploads/2024/07/Group-22.png"
            />
            <HireCta
                title="Want to create a robust data science solution for your business?"
                description="Hire data science developers from Softzway Technologies to plan, execute, and infuse brilliance into your projects."
                image="https://www.redappletech.com/wp-content/uploads/2024/07/Rectangle-83-1.png"
            />
            <AIFaq
                aiFaqItems={dsFaqItems}
            />
        </div>
    )
}

export default HireDS