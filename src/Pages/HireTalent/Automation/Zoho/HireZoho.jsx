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

const zohoServicesData = [
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/software-red.png",
        title: "Custom Zoho Solutions",
        description: "Hire Zoho developers who specialize in crafting scalable, customized, and stable Zoho solutions tailored to your business needs. Our company offers end-to-end support to ensure your CRM and automation goals are met with precision and effectiveness."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/UIUX-red.png",
        title: "UI/UX Design",
        description: "Hire Zoho developers to enhance the visual appeal and usability of your Zoho applications by integrating the latest UI/UX design trends. They work diligently to create a memorable and engaging experience for your end users."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/api-red.png",
        title: "API & Integrations",
        description: "Hire dedicated Zoho developers to integrate next-gen technologies like AI, Cloud, and IoT, and to connect your Zoho platform with third-party services and APIs."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/swift-2.png",
        title: "Zoho Creator & Deluge",
        description: "Hire Zoho developers to build and customize solutions using Zoho Creator, Deluge scripting, and other Zoho tools, ensuring your business processes are automated and optimized."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/migration-red.png",
        title: "Migration",
        description: "Hire Zoho programmers to migrate your existing CRM or business data to Zoho, ensuring data integrity, security, and improved maintainability."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/red-upgradation-2.png",
        title: "Upgradation",
        description: "Hire Zoho programmers to upgrade and refactor your Zoho solutions, ensuring they remain bug-free, secure, and optimized for future growth."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/game-testing-1.png",
        title: "App Testing",
        description: "Our Zoho developers implement automated testing and rigorous QA processes to ensure your Zoho apps are reliable, secure, and bug-free."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/maintenance-red.png",
        title: "Maintenance",
        description: "Receive ongoing support and maintenance for your Zoho solutions to keep your systems up-to-date, secure, and running smoothly."
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
        heading: "Versatile Zoho Deployment",
        desc: "Zoho enables seamless deployment of CRM and automation solutions across industries, ensuring your business processes are universally accessible and efficient."
    },
    {
        heading: "Stability & Security",
        desc: "Experience the security, stability, and reliability of Zoho, guaranteeing continuous uptime for your business operations."
    },
    {
        heading: "Accelerated Business Growth",
        desc: "Leverage Zoho’s robust platform to develop feature-rich solutions swiftly, reducing time-to-market and driving business growth."
    },
    {
        heading: "Exceptional User Experience",
        desc: "With Zoho, enjoy superior user experiences and tailored UI design, making it a preferred choice for CRM and business automation."
    }
]

const zohoFaqItems = [
    {
        title: "Why should I hire a Zoho developer?",
        description: "Hiring a Zoho developer ensures your CRM and automation solutions are customized to your unique business requirements, scalable, secure, and future-ready."
    },
    {
        title: "How long does it take to develop a Zoho solution?",
        description: "The development timeline depends on the project's complexity, features, and integrations. Simple Zoho solutions can be built in a few weeks, while more complex implementations may take several months."
    },
    {
        title: "Will my Zoho solution integrate with other systems?",
        description: "Yes, our developers ensure seamless integration with databases, APIs, cloud services, and other technologies as required by your project."
    },
    {
        title: "Do you provide post-launch support for Zoho solutions?",
        description: "Absolutely! We offer ongoing maintenance, updates, and technical support to keep your Zoho solution running smoothly and up-to-date."
    },
    {
        title: "Can you help with deployment and scaling?",
        description: "Yes, we assist with deploying your Zoho solution and ensure it is scalable, secure, and optimized for performance."
    }
]

function HireZoho() {
    return (
        <div>
            <HireLanding
                title="Hire Zoho Developers"
                desc="Unlock the power of Zoho with our expert development services. From custom CRM solutions to seamless integrations, we deliver high-quality Zoho applications that drive business growth and operational efficiency."
                bg="/hire/zoho.png"
            />
            <AIDevelopment
                aidevTitle="Specialization Of Our Zoho Development Team"
                aidevDesc="Hire Zoho developers from Softzway who bring your vision to life with advanced technological expertise and industry best practices."
                aidevGrid={zohoServicesData}
                columns={4}
            />
            <HireTable
                title="Hire Dedicated Zoho Developers to Empower your Project"
                description="Hire Zoho developers to meet your business needs by leveraging our technical excellence."
                tableData={tableData}
            />
            
            <Cta />
            <HireTable2
                title="Hire Dedicated Zoho Developers to Empower your Project"
                description="Hire Zoho developers to meet your business needs by leveraging our technical excellence."
                tableData={tableData2}
            />
            <HireProcess
                title="How Does The Process Work?"
                processItems={processItems}
            />
            <HireBenefits
                title="Benefits of Hiring our Dedicated Zoho Developers"
                description="Hire Zoho developers who have in-depth knowledge of Zoho tools and frameworks to build secure, scalable, and high-performing CRM and automation solutions."
                benefits={benefits}
                image="/hire1.png"
            />
            <HireBenefits2
                title="Our Commitment to Code Quality"
                description="At the core of our development process, we prioritize code quality, implementing stringent testing, detailed reviews, and industry best practices to deliver software that excels in both functionality and longevity."
                image="https://www.redappletech.com/wp-content/uploads/2024/07/Group-22.png"
            />
            <HireCta
                title="Want to build a robust CRM or automation solution using Zoho?"
                description="Hire Zoho developers from Softzway Technologies to plan, execute, and infuse brilliance into your projects."
                image="https://www.redappletech.com/wp-content/uploads/2024/07/Rectangle-83-1.png"
            />
            <AIFaq
                aiFaqItems={zohoFaqItems}
            />
        </div>
    )
}

export default HireZoho