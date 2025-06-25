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

const devopsServicesData = [
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/software-red.png",
        title: "Custom DevOps Solutions",
        description: "Hire DevOps developers who specialize in designing, automating, and optimizing CI/CD pipelines, infrastructure as code, and cloud deployments tailored to your business needs. Our team ensures seamless integration and high performance for your software delivery lifecycle."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/UIUX-red.png",
        title: "Infrastructure Automation",
        description: "Hire DevOps developers to automate your infrastructure provisioning and management using tools like Terraform, Ansible, and CloudFormation, ensuring scalability and reliability."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/api-red.png",
        title: "CI/CD Pipeline Implementation",
        description: "Hire dedicated DevOps developers to implement and manage continuous integration and continuous deployment pipelines, enabling faster and more reliable software releases."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/swift-2.png",
        title: "Cloud Migration & Management",
        description: "Hire DevOps developers to migrate your applications and workloads to the cloud, ensuring security, cost optimization, and high availability."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/migration-red.png",
        title: "Monitoring & Logging",
        description: "Hire DevOps programmers to set up robust monitoring, alerting, and logging solutions, ensuring proactive issue detection and system health visibility."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/red-upgradation-2.png",
        title: "Security & Compliance",
        description: "Hire DevOps programmers to integrate security best practices and compliance checks into your DevOps processes, ensuring your systems are secure and audit-ready."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/game-testing-1.png",
        title: "Testing & QA Automation",
        description: "Our DevOps developers implement automated testing and QA processes to ensure your applications are reliable, secure, and bug-free throughout the delivery pipeline."
    },
    {
        image: "https://www.redappletech.com/wp-content/uploads/2024/01/maintenance-red.png",
        title: "Maintenance & Support",
        description: "Receive ongoing support and maintenance for your DevOps infrastructure to keep your systems up-to-date, secure, and running smoothly."
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
        heading: "Accelerated Delivery",
        desc: "DevOps enables faster and more reliable software delivery, reducing time-to-market and increasing business agility."
    },
    {
        heading: "Stability & Security",
        desc: "Experience the security, stability, and reliability of DevOps practices, guaranteeing continuous uptime and compliance for your business operations."
    },
    {
        heading: "Cost Optimization",
        desc: "Leverage automation and cloud-native tools to optimize infrastructure costs and resource utilization."
    },
    {
        heading: "Continuous Improvement",
        desc: "With DevOps, enjoy continuous integration, deployment, and feedback, ensuring your systems evolve with your business needs."
    }
]

const devopsFaqItems = [
    {
        title: "Why should I hire a DevOps developer?",
        description: "Hiring a DevOps developer ensures your software delivery processes are automated, scalable, and secure, resulting in faster releases and improved system reliability."
    },
    {
        title: "How long does it take to implement DevOps practices?",
        description: "The implementation timeline depends on your current infrastructure and goals. Simple automation can be set up in a few weeks, while full DevOps transformation may take several months."
    },
    {
        title: "Will my DevOps solution integrate with existing systems?",
        description: "Yes, our DevOps developers ensure seamless integration with your current tools, cloud providers, and infrastructure."
    },
    {
        title: "Do you provide post-launch support for DevOps solutions?",
        description: "Absolutely! We offer ongoing maintenance, updates, and technical support to keep your DevOps pipelines and infrastructure running smoothly."
    },
    {
        title: "Can you help with cloud migration and scaling?",
        description: "Yes, we assist with cloud migration, scaling, and optimization to ensure your systems are robust and cost-effective."
    }
]

function HireDevOps() {
    return (
        <div>
            <HireLanding
                title="Hire DevOps Developers"
                desc="Accelerate your software delivery and infrastructure automation with our expert DevOps development services. From CI/CD pipelines to cloud migration, we deliver robust DevOps solutions that drive business growth and operational efficiency."
            />
            <AIDevelopment
                aidevTitle="Specialization Of Our DevOps Development Team"
                aidevDesc="Hire DevOps developers from Softzway who bring your vision to life with advanced technological expertise and industry best practices."
                aidevGrid={devopsServicesData}
                columns={4}
            />
            <HireTable
                title="Hire Dedicated DevOps Developers to Empower your Project"
                description="Hire DevOps developers to meet your business needs by leveraging our technical excellence."
                tableData={tableData}
            />
            <HireStack
                title="Tech Competence of Our DevOps Developers"
            />
            <Cta />
            <HireTable2
                title="Hire Dedicated DevOps Developers to Empower your Project"
                description="Hire DevOps developers to meet your business needs by leveraging our technical excellence."
                tableData={tableData2}
            />
            <HireProcess
                title="How Does The Process Work?"
                processItems={processItems}
            />
            <HireBenefits
                title="Benefits of Hiring our Dedicated DevOps Developers"
                description="Hire DevOps developers who have in-depth knowledge of automation, cloud, and CI/CD tools to streamline your software delivery."
                benefits={benefits}
                image="https://www.redappletech.com/wp-content/uploads/2024/07/Default_Man_working_with_laptop_in_office_0.png"
            />
            <HireBenefits2
                title="Our Commitment to Code Quality"
                description="At the core of our development process, we prioritize code quality, implementing stringent testing, detailed reviews, and industry best practices to deliver software that excels in both functionality and longevity."
                image="https://www.redappletech.com/wp-content/uploads/2024/07/Group-22.png"
            />
            <HireCta
                title="Want to automate and optimize your infrastructure with DevOps?"
                description="Hire DevOps developers from Softzway Technologies to plan, execute, and infuse brilliance into your projects."
                image="https://www.redappletech.com/wp-content/uploads/2024/07/Rectangle-83-1.png"
            />
            <AIFaq
                aiFaqItems={devopsFaqItems}
            />
        </div>
    )
}

export default HireDevOps