import AchievementSection from '../../Components/AchievementSection/AchievementSection'
import AIDevelopment from '../../Components/AI Solutions/AIDevelopment/AIDevelopment'
import AIDevelopment2 from '../../Components/AI Solutions/AIDevelopment2/AIDevelopment2'
import AIFaq from '../../Components/AI Solutions/AIFaq/AIFaq'
import AIProcess from '../../Components/AI Solutions/AIProcess/AIProcess'
import AIUseCases from '../../Components/AI Solutions/AIUseCases/AIUseCases'
import AILandingSection from '../../Components/AI Solutions/LandingSection/AILandingSection'
import SolutionsSection from '../../Components/AI Solutions/SolutionsSection/SolutionsSection'
import Contact from '../../Components/Contact/Contact'
import Cta from '../../Components/Cta/Cta'
import WebFrameworks from '../../Components/WebFrameworks/WebFrameworks'

const androidServices = [
  {
    image: "https://www.redappletech.com/wp-content/uploads/2024/01/software-red-50x50_c.png",
    title: "Customized",
    description: "Our Android app Development team excel in crafting scalable, customized, and stable Android applications based on the sizes and requirements of every business. We provide end-to-end support to execute your project goals"
  },
  {
    image: "https://www.redappletech.com/wp-content/uploads/2024/01/immersive-2-50x50_c.png",
    title: "Immersive",
    description: "Our Android app Development team also have the proven skills to raise the visual appeal of your applications with the integration of the latest UI/UX design trends. They work hard to create a memorable experience for your end users for a captivating game experience"
  },
  {
    image: "https://www.redappletech.com/wp-content/uploads/2024/01/custom-50x50_c.png",
    title: "Embedded",
    description: "Our experienced Android app Development team integrate next-gen technologies like AI, Cloud, IoT, etc. to bring out embedded applications of Android for your wearable and smart appliances. They always make sure to serve you the desired outcome on time."
  },
  {
    image: "https://www.redappletech.com/wp-content/uploads/2024/01/migration-red-50x50_c.png",
    title: "App Migration",
    description: "Our Android mobile app Development services enable enterprises to migrate their existing apps into the feature-rich android ecosystem effortlessly. They make sure that your valuable business data is not lost during the migration process ensuring your privacy."
  },
  {
    image: "https://www.redappletech.com/wp-content/uploads/2024/01/red-upgradation-2-50x50_c.png",
    title: "Upgradation",
    description: "Our outsourcing Android app development services help elevate the potential of your existing Android applications with the integration of new features and functionalities. They integrate third-party APIs and libraries to enhance the usability of your Android applications."
  },
  {
    image: "https://www.redappletech.com/wp-content/uploads/2024/01/multiplatforms-50x50_c.png",
    title: "Multi-platform",
    description: "Our Android app Development services have the proficiency to integrate and deploy Android applications targeting the platforms of your choice. We will guide you at every deployment stage to ensure surplus visibility and top-notch performance of your Android apps."
  },
  {
    image: "https://www.redappletech.com/wp-content/uploads/2024/08/game-testing-50x50_c.png",
    title: "App Testing",
    description: "Our app development agency also makes sure that your Android apps are free from bugs and glitches so as to boost end-user engagement. Our dedicated app developers conduct rigorous testing using leading-edge resources to eliminate drawbacks of your Android app flawlessly."
  },
  {
    image: "https://www.redappletech.com/wp-content/uploads/2024/08/mentainance-white.png",
    title: "Support",
    description: "As technology is constantly evolving, your apps must also need to adjust to the changing landscape. Hire Android app developer to maintain the standards of your Android apps with the deployment of on-demand support and maintenance solutions consistently."
  }
]

const webServices = [
  {
    image: "https://cdn.prod.website-files.com/64a6644c2958e73937035816/6538cf0faf9ec00f6c396a64_web_1.svg",
    title: "AI-Powered Custom Web Development",
    description: "We strive to craft captivating and responsive websites that resonate with your brand, engage users, and drive results for your business."
  },
  {
    image: "https://cdn.prod.website-files.com/64a6644c2958e73937035816/6538cf0da52fc34922bf6180_web_2.svg",
    title: "Web App Development",
    description: "We build dynamic web applications that empower your business processes, enhance user interaction, and scale seamlessly as your needs grow."
  },
  {
    image: "https://cdn.prod.website-files.com/64a6644c2958e73937035816/6538cf0d368bfb13daf6da85_web_4.svg",
    title: "Low Code Development",
    description: "We believe in leveraging the power of low code to accelerate development without compromising on customization or scalability."
  },
  {
    image: "https://cdn.prod.website-files.com/64a6644c2958e73937035816/6538cf0d25a648d217067dc3_web_5.svg",
    title: "Backend & Admin Panel Development",
    description: "With over a decade of experience, our experts build secure, scalable backend systems and intuitive admin panels that help you manage and control your digital assets effortlessly."
  },
  {
    image: "https://cdn.prod.website-files.com/64a6644c2958e73937035816/6538cf0e3f9f52c6427e8c40_web_6.svg",
    title: "e-Commerce Solutions",
    description: "We elevate your online business with our tailored eCommerce solutions, seamlessly blending aesthetics and functionality for exceptional shopping experiences."
  },
  {
    image: "https://cdn.prod.website-files.com/64a6644c2958e73937035816/6538cf0d1a41e3c2f899fd94_web_7.svg",
    title: "CMS Development",
    description: "Our experts empower your business with an intuitive CMS to effortlessly manage, update, and optimize your digital content, driving efficiency and agility."
  },
]

const webFeatures = [
  {
    image: "https://cdn.prod.website-files.com/64a6644c2958e73937035816/67f8b93585a28cba153f6e72_Check.svg",
    title: "AI-Powered Content Personalization"
  },
  {
    image: "https://cdn.prod.website-files.com/64a6644c2958e73937035816/67f8b93585a28cba153f6e72_Check.svg",
    title: "Voice Search Integration"
  },
  {
    image: "https://cdn.prod.website-files.com/64a6644c2958e73937035816/67f8b93585a28cba153f6e72_Check.svg",
    title: "AI & Machine Learning Integration"
  },
  {
    image: "https://cdn.prod.website-files.com/64a6644c2958e73937035816/67f8b93585a28cba153f6e72_Check.svg",
    title: "Lazy Loading & Code Splitting"
  },
  {
    image: "https://cdn.prod.website-files.com/64a6644c2958e73937035816/67f8b93585a28cba153f6e72_Check.svg",
    title: "Role-Based Access Control (RBAC)"
  },
  {
    image: "https://cdn.prod.website-files.com/64a6644c2958e73937035816/67f8b93585a28cba153f6e72_Check.svg",
    title: "Workflow Automation & Search"
  },
  {
    image: "https://cdn.prod.website-files.com/64a6644c2958e73937035816/67f8b93585a28cba153f6e72_Check.svg",
    title: "AI-Powered Recommendations"
  },
  {
    image: "https://cdn.prod.website-files.com/64a6644c2958e73937035816/67f8b93585a28cba153f6e72_Check.svg",
    title: "Real-Time Data Syncing"
  }
]

const useCases = [
    {
        title: "Healthcare",
        items: [
        "Android apps for appointment scheduling, telemedicine, and patient record management.",
        "Mobile health tracking and fitness monitoring solutions.",
        "Medication reminders and virtual consultations via Android devices.",
        "Secure communication between patients and healthcare providers."
        ]
    },
    {
        title: "Retail & E-commerce",
        items: [
        "Custom Android shopping apps with secure payment integration.",
        "Push notifications for promotions and order updates.",
        "Inventory management and barcode scanning solutions.",
        "Personalized product recommendations and loyalty programs."
        ]
    },
    {
        title: "Banking & Finance",
        items: [
        "Mobile banking apps with secure authentication and transaction features.",
        "Expense tracking and personal finance management tools.",
        "Real-time notifications for account activity and fraud alerts.",
        "Investment and portfolio management on Android devices."
        ]
    },
    {
        title: "Education",
        items: [
        "E-learning platforms and virtual classroom apps for Android.",
        "Interactive quizzes, assignments, and progress tracking.",
        "Video lectures and live streaming for remote learning.",
        "Parent-teacher communication and student management."
        ]
    },
    {
        title: "Travel & Hospitality",
        items: [
        "Android apps for hotel booking, itinerary planning, and travel guides.",
        "Real-time flight and train status updates.",
        "Loyalty programs and personalized travel recommendations.",
        "In-app chat support for travelers."
        ]
    },
    {
        title: "Media & Entertainment",
        items: [
        "Music and video streaming apps for Android devices.",
        "Social media and content sharing platforms.",
        "Live event streaming and ticket booking.",
        "Personalized content recommendations and notifications."
        ]
    }
]

const processItems = [
    {
        title: "Specialized Expertise",
        description: "Partnering with an experienced tech team brings industry expertise, compliance, and best practices—ensuring secure, scalable solutions while avoiding costly mistakes."
    },
    {
        title: "Cost-efficient & Scalable",
        description: "Collaborating with an expert tech team enables you to build secure, scalable, and compliant solutions—backed by deep industry insight and a proven ability to navigate sector-specific challenges."
    },
    {
        title: "Accelerated Development",
        description: "Leveraging pre-tested frameworks, streamlined workflows, and domain expertise, outsourced teams accelerate development—ensuring faster deployment of secure, compliant app solutions."
    },
    {
        title: "Real-time Visibility & Compliance",
        description: "A trusted outsourcing partner offers transparent progress tracking, proactive issue resolution, and regulatory compliance—giving you full control and confidence in your product’s success."
    },
]

const webAppFaqItems = [
  {
    title: "Why should I choose a custom web application for my business?",
    description: "Custom web applications are tailored to your specific business needs, offering greater flexibility, scalability, and integration with your existing systems compared to off-the-shelf solutions."
  },
  {
    title: "How long does it take to develop a web application?",
    description: "The development timeline depends on the complexity, features, and integrations required. Simple web apps can be built in a few weeks, while more complex solutions may take several months."
  },
  {
    title: "Will my web application work on all devices and browsers?",
    description: "Yes, we ensure your web application is fully responsive and compatible with all major devices and browsers through modern design practices and thorough testing."
  },
  {
    title: "Do you provide post-launch support and maintenance?",
    description: "Absolutely! We offer ongoing maintenance, updates, and technical support to keep your web application secure, up-to-date, and running smoothly."
  },
  {
    title: "Can you help with deployment and hosting?",
    description: "Yes, we assist with seamless deployment, hosting setup, and can recommend the best hosting solutions to ensure your web application is reliable and scalable."
  }
]

const webPreferences = [
  {
    image: "https://cdn.prod.website-files.com/64a6644c2958e73937035816/663dfe34240e45a7dcacb7cd_Vector.webp",
    title: "Competent Team",
    description: "With a team brimming with top-notch developers, designers, and project managers, we possess an exceptional depth of technical knowledge and industry insights."
  },
  {
    image: "https://cdn.prod.website-files.com/64a6644c2958e73937035816/6644603e2aaec7504de98424_web-solution%201.webp",
    title: "Custom Web Solutions",
    description: "We embrace a customized approach by collaborating closely with our clients to grasp their unique business objectives, target audience, and ever-evolving market dynamics."
  },
  {
    image: "https://cdn.prod.website-files.com/64a6644c2958e73937035816/664460623db1bd996eb3859f_design%20(1).webp",
    title: "User-Centric Design",
    description: "Our talented team of designers seamlessly blends aesthetics with usability, crafting visually stunning interfaces that leave a lasting impression on users from their very first interaction."
  },
  {
    image: "https://cdn.prod.website-files.com/64a6644c2958e73937035816/663dfe82e2f909f386362a81_coding.webp",
    title: "AI-Powered Development Process",
    description: "From conceptualization to final deployment, we adhere to industry best practices and agile methodologies, enabling iterative development and fostering seamless collaboration."
  },
  {
    image: "https://cdn.prod.website-files.com/64a6644c2958e73937035816/663dfe940956f4973882fb59_maintenance.webp",
    title: "Post-Launch Support",
    description: "Beyond the launch, we stand firmly by our clients, providing comprehensive post-launch support and maintenance services to ensure your app's long-term success."
  },
  {
    image: "https://cdn.prod.website-files.com/64a6644c2958e73937035816/663dfea2f28cec9f12c2a495_Vector%20(2).webp",
    title: "Flexibility",
    description: "Flexibility is our forte, as our seasoned experts, boasting over a decade of experience, can harness any technology stack to bring your desired results to life."
  }
]

const webIndustries = [
  {
    image: "https://cdn.prod.website-files.com/64a6644c2958e73937035816/67601a7d4b51159ab01c1db7_Frame%201707480659%20(4).svg",
    title: "Health Care",
    description: "Driving the future of healthcare towards excellence with cutting-edge solutions."
  },
  {
    image: "https://cdn.prod.website-files.com/64a6644c2958e73937035816/67601977cd0f878e5b5c7c97_Frame%201707480662%20(4).svg",
    title: "Finance",
    description: "Digitalizing the way of your finances through our innovation-driven FinTech solutions."
  },
  {
    image: "https://cdn.prod.website-files.com/64a6644c2958e73937035816/6761676fe3387e48186fcd38_Frame%201707480659%20(1).png",
    title: "E- Commerce",
    description: "Accelerating the reach of your marketplace using our specialized eCommerce development services."
  },
  {
    image: "https://cdn.prod.website-files.com/64a6644c2958e73937035816/676166c4858efcc3392748c4_Frame%201707480659.png",
    title: "Logistics",
    description: "Sustaining the digitalization of logistics operations with our cutting-edge solutions."
  },
  {
    image: "https://cdn.prod.website-files.com/64a6644c2958e73937035816/67601977d4d98d86e748d86b_Frame%201707480662%20(5).svg",
    title: "Travel",
    description: "Providing immersive experiences for your users through our innovative travel solutions."
  },
  {
    image: "https://cdn.prod.website-files.com/64a6644c2958e73937035816/676019778baa0e7738188e62_Frame%201707480661%20(1).svg",
    title: "Real Estate",
    description: "Tailored solutions for your real estate business’s needs that cater to your business model perfectly."
  },
  {
    image: "https://cdn.prod.website-files.com/64a6644c2958e73937035816/67616789ca3ea20e2f9a4e59_Frame%201707480659%20(2).png",
    title: "Education",
    description: "Boosting interaction with your users while offering them easy access to training materials anytime."
  },
  {
    image: "https://cdn.prod.website-files.com/64a6644c2958e73937035816/6761679eb11d383cacfbe550_Frame%201707480659%20(3).png",
    title: "EV",
    description: "Build innovative and scalable EV charging solutions that empower businesses."
  }
]


function WebDev() {
    return (
        <div>
        <AILandingSection
            subtitle="Build Powerful Web Solutions with Our"
            title="Web App Development Company"
            desc="Unlock the potential of web technology with our expert web app development services. From concept to launch, we deliver high-quality, user-friendly applications that drive business growth and enhance user engagement."
            img="https://cdn.pixabay.com/photo/2017/01/06/19/15/smartphone-1957740_1280.jpg"
        />
        <AIDevelopment
            aidevTitle="Why Choose us for Web app Development team"
            aidevDesc="Our Web app development solutions propel your company to the forefront of the market competition. With the proper utilization of the latest technologies, we, as an experienced Web app development company, create immersive user experiences that adapt to ever-evolving trends in the Web ecosystem."
            aidevGrid={webServices}
            columns={3}
        />
        <AIDevelopment
            aidevTitle="Industries we Cater to as a Leading Web Development Company"
            aidevDesc="As a best web app development company backed with 600+ engineers, we tend to provide digital solutions that necessiates your growth."
            aidevGrid={webIndustries}
            columns={4}
        />
        <AIProcess 
            title="Outsource Web Development with AI-Backed Expertise"
            processItems={processItems}
        />
        <AIDevelopment2
            aidevTitle="Cutting-Edge Features for High-Impact Web Solutions"
            aidevDesc="Integrate cutting-edge technologies like AI, machine learning, and IoT to enhance your web performance, scalability, and user experience, ensuring it stands out in today’s competitive market."
            aidevGrid={webFeatures}
            columns={4}
        />
        <Cta />
        <AIDevelopment
            aidevTitle="Why is Softzway the Preferred Web Development Company?"
            aidevDesc="We are fully equipped to exceed expectations and create exceptional online experiences."
            aidevGrid={webPreferences}
            columns={3}
        />
        <WebFrameworks/>
        <AIFaq
            aiFaqItems={webAppFaqItems}
        />
        <Contact />
        </div>
    )
}

export default WebDev