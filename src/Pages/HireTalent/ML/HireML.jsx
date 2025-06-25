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

const mlServicesData = [
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/software-red.png",
        title: "Custom ML Solutions",
        description: "Hire ML developers who specialize in crafting scalable, customized, and stable machine learning solutions tailored to your business needs. Our company offers end-to-end support to ensure your project goals are met with precision and effectiveness."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/UIUX-red.png",
        title: "ML-Driven UI/UX Design",
        description: "Hire ML developers to enhance the intelligence and usability of your applications by integrating the latest ML-driven UI/UX design trends. They work diligently to create a memorable and engaging experience for your end users."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/api-red.png",
        title: "API & ML Integration",
        description: "Hire dedicated ML developers to integrate next-gen technologies like machine learning, NLP, computer vision, and more. They ensure timely delivery and desired outcomes with precision."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/swift-2.png",
        title: "ML Model Development",
        description: "Hire ML developers to build, train, and deploy custom ML models for your business. They ensure your valuable data remains secure and private throughout the process."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/migration-red.png",
        title: "ML Migration",
        description: "Hire ML programmers to migrate your existing systems to ML-powered platforms, integrating new features and functionalities to boost usability and elevate your app’s performance."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/red-upgradation-2.png",
        title: "ML Upgradation",
        description: "Hire ML programmers to ensure your ML solutions are up-to-date, bug-free, and optimized for maximum performance. Our dedicated developers conduct rigorous testing and continuous improvement."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/game-testing-1.png",
        title: "ML Testing",
        description: "Hire ML developers who excel in integrating and deploying ML applications across your chosen platforms. They guide you through each deployment stage, ensuring optimal visibility and top-notch performance."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/maintenance-red.png",
        title: "ML Maintenance",
        description: "As technology evolves, your ML solutions must adapt. Hire ML developers to receive on-demand support and maintenance to ensure your apps stay up-to-date and maintain high standards."
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
        heading: "Versatile ML Deployment",
        desc: "ML enables seamless deployment across platforms, ensuring your applications are universally accessible and intelligent."
    },
    {
        heading: "Stability & Security",
        desc: "Experience the security, stability, and reliability of ML-powered solutions, guaranteeing continuous uptime for your business operations."
    },
    {
        heading: "Accelerated Innovation",
        desc: "Leverage ML frameworks to develop feature-rich, intelligent solutions swiftly, reducing time-to-market and driving innovation."
    },
    {
        heading: "Exceptional User Experience",
        desc: "With ML, enjoy superior user experiences and smart automation, making it a globally preferred choice among modern businesses."
    }
]

const mlFaqItems = [
    {
        title: "Why should I hire an ML developer for my project?",
        description: "Hiring an ML developer ensures your solution leverages the latest in machine learning, delivering automation, insights, and innovation tailored to your business."
    },
    {
        title: "How long does it take to develop an ML solution?",
        description: "The development timeline depends on the project's complexity, features, and integrations. Simple ML solutions can be built in a few weeks, while more advanced projects may take several months."
    },
    {
        title: "Will my ML solution integrate with existing systems?",
        description: "Yes, we ensure your ML solution is compatible and integrates seamlessly with your current systems, databases, and APIs."
    },
    {
        title: "Do you provide post-launch support for ML solutions?",
        description: "Absolutely! We offer ongoing maintenance, updates, and technical support to keep your ML solution running smoothly and up-to-date."
    },
    {
        title: "Can you help with ML model deployment and scaling?",
        description: "Yes, we assist with deploying your ML models and ensure they are scalable, secure, and optimized for performance."
    }
]

function HireML() {
    return (
        <div>
            <HireLanding
                title="Hire ML Developers"
                desc="Unlock the potential of machine learning with our expert ML development services. From concept to launch, we deliver high-quality, intelligent ML solutions that drive business growth and innovation."
            />
            <AIDevelopment
                aidevTitle="Specialization Of Our ML Development Team"
                aidevDesc="Hire ML developers from Softzway who bring your vision to life with advanced technological expertise and industry best practices."
                aidevGrid={mlServicesData}
                columns={4}
            />
            <HireTable
                title="Hire Dedicated ML Developers to Empower your Project"
                description="Hire ML developers to meet your business needs by leveraging our technical excellence."
                tableData={tableData}
            />
            <HireStack
                title="Tech Competence of Our ML Developers"
            />
            <Cta />
            <HireTable2
                title="Hire Dedicated ML Developers to Empower your Project"
                description="Hire ML developers to meet your business needs by leveraging our technical excellence."
                tableData={tableData2}
            />
            <HireProcess
                title="How Does The Process Work?"
                processItems={processItems}
            />
            <HireBenefits
                title="Benefits of Hiring our Dedicated ML Developers"
                description="Hire ML developers who have in-depth knowledge of various ML frameworks and tools to build secure, scalable, and high-performing solutions."
                benefits={benefits}
                image="https://www.redappletech.com/wp-content/uploads/2024/07/Default_Man_working_with_laptop_in_office_0.png"
            />
            <HireBenefits2
                title="Our Commitment to Code Quality"
                description="At the core of our development process, we prioritize code quality, implementing stringent testing, detailed reviews, and industry best practices to deliver software that excels in both functionality and longevity."
                image="https://www.redappletech.com/wp-content/uploads/2024/07/Group-22.png"
            />
            <HireCta
                title="Want to create a robust ML solution for your business?"
                description="Hire ML developers from Softzway Technologies to plan, execute, and infuse brilliance into your projects."
                image="https://www.redappletech.com/wp-content/uploads/2024/07/Rectangle-83-1.png"
            />
            <AIFaq
                aiFaqItems={mlFaqItems}
            />
        </div>
    )
}

export default HireML