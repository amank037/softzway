import AIDevelopment from '../../../Components/AI Solutions/AIDevelopment/AIDevelopment'
import AIFaq from '../../../Components/AI Solutions/AIFaq/AIFaq'
import AILandingSection from '../../../Components/AI Solutions/LandingSection/AILandingSection'
import Contact from '../../../Components/Contact/Contact'
import Cta from '../../../Components/Cta/Cta'
import IndustryGrid from '../../../Components/IndustryGrid/IndustryGrid'
import Tabs from '../../../Components/Tabs/Tabs'
import Tabs2 from '../../../Components/Tabs2/Tabs2'

const softwareServices = [
  {
    title: "Custom Product Consulting",
    description: "Make the right technical decisions with us. Get expert advice on system architecture, choose the best-fit tech stack, de-risk development, and everything you need to build a winning product."
  },
  {
    title: "Custom Product Development",
    description: "Build products engineered specifically for your enterprise workflows, user behavior, and business logic. Every feature and component we create adds value to your product's core purpose."
  },
  {
    title: "Custom Mobile App Development",
    description: "We architect bespoke mobile apps that combine intuitive UX, platform-native performance, and business-specific features to boost user engagement and deliver measurable outcomes."
  },
  {
    title: "Custom Web App Development",
    description: "Let us make your web presence impactful and immersive with a futureproof web app that works across all devices, bears heavy traffic/data load, and yet delivers optimum performance."
  },
  {
    title: "Cloud Application Development",
    description: "Our Product experts are globally known for building high-impact solutions across diverse cloud environments. Gain unparalleled scalability and cost efficiency with resilient cloud-native apps."
  },
  {
    title: "SaaS Development Services",
    description: "Bring down the cost of ownership and scale rapidly with SaaS. We build user-focused service delivery platforms with next-gen features like on-demand accessibility and automatic updates."
  },
  {
    title: "Legacy Product Modernization",
    description: "Build relevant, agile, and future-ready functions that integrate seamlessly with your tech infrastructure. Draw client investments for fresh ROI with a tailored modernization roadmap."
  },
  {
    title: "Custom API and Integration Services",
    description: "We have a record of connecting complex systems with minimal latency. Our dev team tailors every API and integration process for smooth data exchange according to your business flow."
  },
  {
    title: "Project Rescue with Custom Builds",
    description: "Revive underperforming projects with expert consulting and custom strategies. We perform thorough gap analysis, code refactoring, and system optimization to enable sustainable product growth."
  }
]

const aiFaqItems = [
    {
        title: "Why should I choose Android for my mobile app?",
        description: "Android offers a vast user base, flexible customization, and seamless integration with Google services, making it ideal for businesses targeting a wide audience."
    },
    {
        title: "How long does it take to develop an Android app?",
        description: "The timeline depends on app complexity, features, and integrations. Simple apps may take a few weeks, while complex solutions can take several months."
    },
    {
        title: "Will my Android app work on all devices?",
        description: "Yes, we ensure your app is compatible with a wide range of Android devices and screen sizes through responsive design and thorough testing."
    },
    {
        title: "Do you provide post-launch support?",
        description: "Absolutely! We offer ongoing maintenance, updates, and technical support to keep your app running smoothly."
    },
    {
        title: "Can you help with app store submission?",
        description: "Yes, we handle the entire Google Play Store submission process, ensuring your app meets all guidelines and requirements."
    }
]

function ProductDev() {
    return (
        <div>
        <AILandingSection
            subtitle="Build Powerful Product Solutions with Our"
            title="Custom Product Development Company"
            desc="Tailored Processes, Configurable Methods, and a Specialized Team Behind Every Custom Build. Co-create with a driven team that has designed and developed 2500+ bespoke Product systems combining unique product vision with finely tuned, purpose-built tech."
        />
        <Tabs />
        <AIDevelopment
            aidevTitle="A Comprehensive Portfolio of Custom Product Engineering Services"
            aidevDesc="Our development solutions propel your Product to the forefront of the market competition. With the proper utilization of the latest technologies, we, as an experienced Product development company, create immersive user experiences that adapt to ever-evolving trends."
            aidevGrid={softwareServices}
            columns={3}
        />
        <Cta />
        <Tabs2 />
        <IndustryGrid />
        <AIFaq
            aiFaqItems={aiFaqItems}
        />
        <Contact />
        </div>
    )
}

export default ProductDev