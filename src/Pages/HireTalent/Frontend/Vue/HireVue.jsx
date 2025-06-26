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

const androidServicesData = [
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/software-red.png",
        title: "Customized",
        description: "Hire Android app developers who specialize in crafting scalable, customized, and stable apps tailored to your business needs. Our company offers end-to-end support to ensure your project goals are met with precision and effectiveness."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/UIUX-red.png",
        title: "UI/UX Design",
        description: "Hire Android app developers to enhance the visual appeal of your Android applications by integrating the latest UI/UX design trends. They work diligently to create a memorable and engaging experience for your end users."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/api-red.png",
        title: "API",
        description: "Hire dedicated Android app developer to integrate next-gen technologies like AI, Cloud, and IoT to create embedded applications for wearables and smart appliances. They ensure timely delivery and desired outcomes with precision."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/swift-2.png",
        title: "Kotlin/Java",
        description: "Hire Android app developers to facilitate a smooth migration of your existing apps into the Android ecosystem. They ensure that your valuable business data remains secure and private throughout the migration process, maintaining your privacy."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/migration-red.png",
        title: "Migration",
        description: "Hire Android app programmer to enhance your existing Android apps by integrating new features and functionalities. They seamlessly incorporate third-party APIs and libraries to boost usability and elevate your app’s performance and capabilities."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/red-upgradation-2.png",
        title: "Upgradation",
        description: "Hire Android app programmer to ensure your Android apps are free from bugs and glitches to maximize end-user engagement. Our dedicated developers conduct rigorous testing with advanced tools, effectively eliminating issues and enhancing the overall quality of your applications."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/game-testing-1.png",
        title: "App Testing",
        description: "Hire Android developer who excels in integrating and deploying Android applications across your chosen platforms. They guide you through each deployment stage, ensuring optimal visibility and top-notch performance for your Android apps."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/maintenance-red.png",
        title: "Maintenance",
        description: "As technology evolves, your apps must adapt. Hire Android app developer to receive on-demand support and maintenance solutions to ensure that your apps stay up-to-date and maintain high standards in a constantly changing landscape."
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
        description: "This stage rigorously evaluate candidates to identify the best fit based on qualifications and skills for better outcome."
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
        desc: "Android app enables seamless deployment across major OS, ensuring web & desktop applications are universally accessible."
    },
    {
        heading: "Stability & Security",
        desc: "Experience the security, stability and reliability of Android, guaranteeing continuous uptime for your business portals."
    },
    {
        heading: "Accelerated Market Reach",
        desc: "Leverage the prebuilt Android framework to develop feature-rich solutions swiftly, reducing time-to-market significantly."
    },
    {
        heading: "Exceptional User Experience",
        desc: "With Android, enjoy superior user experiences and unparalleled UI design, making it a globally preferred choice among developers."
    }
]

const androidFaqItems = [
    {
        title: "Why should I hire an Android developer for my app?",
        description: "Hiring an Android developer ensures your app is optimized for a wide range of Android devices, delivers a seamless user experience, and leverages the latest Android features and security standards."
    },
    {
        title: "How long does it take to develop an Android app?",
        description: "The development timeline depends on the app's complexity, features, and integrations. Simple Android apps can be built in a few weeks, while more complex solutions may take several months."
    },
    {
        title: "Will my Android app work on all Android devices?",
        description: "Yes, we ensure your app is compatible with a wide range of Android devices and screen sizes through responsive design and thorough testing."
    },
    {
        title: "Do you provide post-launch support for Android apps?",
        description: "Absolutely! We offer ongoing maintenance, updates, and technical support to keep your Android app running smoothly and up-to-date with the latest Android versions."
    },
    {
        title: "Can you help with Google Play Store submission?",
        description: "Yes, we handle the entire Google Play Store submission process, ensuring your app meets all Google guidelines and requirements for a successful launch."
    }
]

function HireAndroid() {
    return (
        <div>
            <HireLanding
                title="Hire Android App Developers"
                desc="Unlock the potential of mobile technology with our expert Android app development services. From concept to launch, we deliver high-quality, user-friendly Android applications that drive business growth and enhance user engagement."
                bg="/hire/vue.png"
            
            />
            <AIDevelopment
                aidevTitle="Specialization Of Our Android App Development Team"
                aidevDesc="Hire Android app developers of Softzway who bring alive your dream project with the effective use of advanced technological resources"
                aidevGrid={androidServicesData}
                columns={4}
            />
            <HireTable
                title="Hire Dedicated Android App Developers to Empower your Project"
                description="Hire Android app developers to meet your business needs by leveraging our technical elegance."
                tableData={tableData}
            />
            <Cta />
            <HireTable2
                title="Hire Dedicated Android App Developers to Empower your Project"
                description="Hire Android app developers to meet your business needs by leveraging our technical elegance."
                tableData={tableData2}
            />
            <HireProcess
                title="How Does The Process Work?"
                processItems={processItems}
            />
            <HireBenefits
                title="Benefits of Hiring our Dedicated Android App Developers"
                description="Hire Android app developers who have in-depth knowledge of various Android app development tools to bring alive your imagination."
                benefits={benefits}
                image="https://www.redappletech.com/wp-content/uploads/2024/07/Default_Man_working_with_laptop_in_office_0.png"
            />
            <HireBenefits2
                title="Our Commitment to Code Quality"
                description="At the core of our development process, we prioritize code quality, implementing stringent testing, detailed reviews, and industry best practices to deliver software that excels in both functionality and longevity."
                image="https://www.redappletech.com/wp-content/uploads/2024/07/Group-22.png"
            />
            <HireCta
                title="Want to create A Robust Backend for Your App Using Android?"
                description="Hire Android developers from Softzway Technologies to plan, execute, and infuse brilliance into your projects."
                image="https://www.redappletech.com/wp-content/uploads/2024/07/Rectangle-83-1.png"
            />
            <AIFaq
                aiFaqItems={androidFaqItems}
            />
        </div>
    )
}

export default HireAndroid