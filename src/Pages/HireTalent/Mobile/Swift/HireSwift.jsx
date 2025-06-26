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

const swiftServicesData = [
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/software-red.png",
        title: "Customized",
        description: "Hire Swift app developers who specialize in crafting scalable, customized, and stable iOS apps tailored to your business needs. Our company offers end-to-end support to ensure your project goals are met with precision and effectiveness."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/UIUX-red.png",
        title: "UI/UX Design",
        description: "Hire Swift app developers to enhance the visual appeal of your iOS applications by integrating the latest UI/UX design trends. They work diligently to create a memorable and engaging experience for your end users."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/api-red.png",
        title: "API Integration",
        description: "Hire dedicated Swift app developers to integrate next-gen technologies like AI, Cloud, and IoT to create embedded applications for wearables and smart devices. They ensure timely delivery and desired outcomes with precision."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/swift-2.png",
        title: "Swift/Objective-C",
        description: "Hire Swift app developers to facilitate a smooth migration of your existing apps into the Swift ecosystem. They ensure that your valuable business data remains secure and private throughout the migration process, maintaining your privacy."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/migration-red.png",
        title: "Migration",
        description: "Hire Swift app programmers to enhance your existing iOS apps by integrating new features and functionalities. They seamlessly incorporate third-party APIs and libraries to boost usability and elevate your app’s performance and capabilities."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/red-upgradation-2.png",
        title: "Upgradation",
        description: "Hire Swift app programmers to ensure your iOS apps are free from bugs and glitches to maximize end-user engagement. Our dedicated developers conduct rigorous testing with advanced tools, effectively eliminating issues and enhancing the overall quality of your applications."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/game-testing-1.png",
        title: "App Testing",
        description: "Hire Swift developers who excel in integrating and deploying iOS applications across your chosen platforms. They guide you through each deployment stage, ensuring optimal visibility and top-notch performance for your iOS apps."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/maintenance-red.png",
        title: "Maintenance",
        description: "As technology evolves, your apps must adapt. Hire Swift app developers to receive on-demand support and maintenance solutions to ensure that your apps stay up-to-date and maintain high standards in a constantly changing landscape."
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
        heading: "Native iOS Excellence",
        desc: "Swift enables seamless, high-performance native iOS app development, ensuring your applications are optimized for Apple devices."
    },
    {
        heading: "Stability & Security",
        desc: "Experience the security, stability, and reliability of Swift, guaranteeing continuous uptime for your business portals."
    },
    {
        heading: "Accelerated Market Reach",
        desc: "Leverage Swift’s modern features to develop feature-rich solutions swiftly, reducing time-to-market significantly."
    },
    {
        heading: "Exceptional User Experience",
        desc: "With Swift, enjoy superior user experiences and unparalleled UI design, making it a globally preferred choice among iOS developers."
    }
]

const swiftFaqItems = [
    {
        title: "Why should I hire a Swift developer for my app?",
        description: "Hiring a Swift developer ensures your iOS app is built with modern, efficient, and safe code, leveraging the latest Apple features and best practices."
    },
    {
        title: "How long does it take to develop a Swift-based iOS app?",
        description: "The development timeline depends on the app's complexity, features, and integrations. Simple Swift apps can be built in a few weeks, while more complex solutions may take several months."
    },
    {
        title: "Will my Swift app work on all Apple devices?",
        description: "Yes, we ensure your app is compatible with a wide range of Apple devices and screen sizes through responsive design and thorough testing."
    },
    {
        title: "Do you provide post-launch support for Swift apps?",
        description: "Absolutely! We offer ongoing maintenance, updates, and technical support to keep your Swift app running smoothly and up-to-date with the latest iOS versions."
    },
    {
        title: "Can you help with App Store submission?",
        description: "Yes, we handle the entire App Store submission process, ensuring your app meets all Apple guidelines and requirements for a successful launch."
    }
]

function HireSwift() {
    return (
        <div>
            <HireLanding
                title="Hire Swift App Developers"
                desc="Unlock the potential of native iOS development with our expert Swift app development services. From concept to launch, we deliver high-quality, user-friendly Swift applications that drive business growth and enhance user engagement."
                img="https://www.redappletech.com/wp-content/uploads/2024/08/ios-top-image.png"
            />
            <AIDevelopment
                aidevTitle="Specialization Of Our Swift App Development Team"
                aidevDesc="Hire Swift app developers of Softzway who bring alive your dream project with the effective use of advanced technological resources."
                aidevGrid={swiftServicesData}
                columns={4}
            />
            <HireTable
                title="Hire Dedicated Swift App Developers to Empower your Project"
                description="Hire Swift app developers to meet your business needs by leveraging our technical elegance."
                tableData={tableData}
            />
            <Cta />
            <HireTable2
                title="Hire Dedicated Swift App Developers to Empower your Project"
                description="Hire Swift app developers to meet your business needs by leveraging our technical elegance."
                tableData={tableData2}
            />
            <HireProcess
                title="How Does The Process Work?"
                processItems={processItems}
            />
            <HireBenefits
                title="Benefits of Hiring our Dedicated Swift App Developers"
                description="Hire Swift app developers who have in-depth knowledge of various Swift and iOS development tools to bring alive your imagination."
                benefits={benefits}
                image="https://www.redappletech.com/wp-content/uploads/2024/07/Default_Man_working_with_laptop_in_office_0.png"
            />
            <HireBenefits2
                title="Our Commitment to Code Quality"
                description="At the core of our development process, we prioritize code quality, implementing stringent testing, detailed reviews, and industry best practices to deliver software that excels in both functionality and longevity."
                image="https://www.redappletech.com/wp-content/uploads/2024/07/Group-22.png"
            />
            <HireCta
                title="Want to create a robust iOS app using Swift?"
                description="Hire Swift developers from Softzway Technologies to plan, execute, and infuse brilliance into your projects."
                image="https://www.redappletech.com/wp-content/uploads/2024/07/Rectangle-83-1.png"
            />
            <AIFaq
                aiFaqItems={swiftFaqItems}
            />
        </div>
    )
}

export default HireSwift