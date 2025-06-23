import AIDevelopment from '../../../Components/AI Solutions/AIDevelopment/AIDevelopment'
import AIFaq from '../../../Components/AI Solutions/AIFaq/AIFaq'
import AIProcess from '../../../Components/AI Solutions/AIProcess/AIProcess'
import AIUseCases from '../../../Components/AI Solutions/AIUseCases/AIUseCases'
import AILandingSection from '../../../Components/AI Solutions/LandingSection/AILandingSection'
import SolutionsSection from '../../../Components/AI Solutions/SolutionsSection/SolutionsSection'
import Contact from '../../../Components/Contact/Contact'
import Cta from '../../../Components/Cta/Cta'
import Marquee from '../../../Components/Marquee/Marquee'
import './AIAgent.css'

const aidevGrid = [
  {
    image: "https://cdn-ilahpcd.nitrocdn.com/jDuDYworkYvtwHuagfVDTYpuGfPymqvt/assets/images/optimized/rev-55963ef/www.redappletech.com/wp-content/uploads/2025/03/CustomizedService.png",
    title: "Customized Service",
    description: "We tailor AI agents to meet specific business needs, offering personalized solutions for intelligent virtual assistants, NPC behavior modeling, and automated customer support with adaptive learning capabilities and dynamic decision-making processes."
  },
  {
    image: "https://cdn-ilahpcd.nitrocdn.com/jDuDYworkYvtwHuagfVDTYpuGfPymqvt/assets/images/optimized/rev-55963ef/www.redappletech.com/wp-content/uploads/2025/03/AdvancedAlgorithmIntegration.png",
    title: "Advanced Algorithm Integration",
    description: "Our AI agents are powered by sophisticated machine learning algorithms, enabling data-driven insights, predictive analytics, and continuous improvement for smarter, more responsive interactions and superior user experiences."
  },
  {
    image: "https://cdn-ilahpcd.nitrocdn.com/jDuDYworkYvtwHuagfVDTYpuGfPymqvt/assets/images/optimized/rev-55963ef/www.redappletech.com/wp-content/uploads/2025/03/Multi-PlatformCompatibility.png",
    title: "Multi-Platform Compatibility",
    description: "Our AI agent developers ensure that your AI agents function seamlessly across various platforms, including mobile, web, and AR/VR environments, optimizing performance and accessibility for a wide customer base."
  },
  {
    image: "https://cdn-ilahpcd.nitrocdn.com/jDuDYworkYvtwHuagfVDTYpuGfPymqvt/assets/images/optimized/rev-55963ef/www.redappletech.com/wp-content/uploads/2025/03/RobustTesting.png",
    title: "Robust Testing",
    description: "We prioritize reliability through rigorous testing protocols, ensuring AI agents deliver accurate responses, maintain consistent performance, and handle complex scenarios with efficiency and precision."
  },
  {
    image: "https://cdn-ilahpcd.nitrocdn.com/jDuDYworkYvtwHuagfVDTYpuGfPymqvt/assets/images/optimized/rev-55963ef/www.redappletech.com/wp-content/uploads/2025/03/DedicatedHiringSupport.png",
    title: "Dedicated Hiring Support",
    description: "We also help you determine the outcome of your project with the Dedicated Hiring model. It allows you to get the best AI developers depending on your project requirements to effortlessly attain impressive results."
  },
  {
    image: "https://cdn-ilahpcd.nitrocdn.com/jDuDYworkYvtwHuagfVDTYpuGfPymqvt/assets/images/optimized/rev-55963ef/www.redappletech.com/wp-content/uploads/2025/03/TimelyUpdatesandMaintenance.png",
    title: "Timely Updates and Maintenance",
    description: "Our commitment extends beyond deployment, offering continuous monitoring, timely updates, and feature enhancements to keep AI agents aligned with evolving technological standards and business goals."
  }
]

const aiAgentServices = [
  {
    image: "https://cdn-ilahpcd.nitrocdn.com/jDuDYworkYvtwHuagfVDTYpuGfPymqvt/assets/images/optimized/rev-55963ef/www.redappletech.com/wp-content/uploads/2025/03/CustomAIAgentDevelopment.png",
    title: "Custom AI Agent Development",
    description: "We specialize in developing custom AI agents, from simple chatbots to complex autonomous systems. Our safe and scalable solutions are designed to meet diverse user needs and business processes, ensuring optimal outcomes for every virtual assistance application."
  },
  {
    image: "https://cdn-ilahpcd.nitrocdn.com/jDuDYworkYvtwHuagfVDTYpuGfPymqvt/assets/images/optimized/rev-55963ef/www.redappletech.com/wp-content/uploads/2025/03/IntelligentBehaviorTraining.png",
    title: "Intelligent Behavior Training",
    description: "AI agents learn human behavior through advanced machine learning. These behavioral models allow AI to interact naturally, make smart decisions, adapt, and create engaging user experiences."
  },
  {
    image: "https://cdn-ilahpcd.nitrocdn.com/jDuDYworkYvtwHuagfVDTYpuGfPymqvt/assets/images/optimized/rev-55963ef/www.redappletech.com/wp-content/uploads/2025/03/AIAgentIntegration.png",
    title: "AI Agent Integration",
    description: "Integrate AI agents smoothly into your systems. We use advanced API architecture and tools for seamless compatibility with CRM, ERP, and other platforms, ensuring harmonious AI and infrastructure."
  },
  {
    image: "https://cdn-ilahpcd.nitrocdn.com/jDuDYworkYvtwHuagfVDTYpuGfPymqvt/assets/images/optimized/rev-55963ef/www.redappletech.com/wp-content/uploads/2025/03/AutonomousAgentDevelopment.png",
    title: "Autonomous Agent Development",
    description: "Autonomous agents boost productivity more than copilots by autonomously handling tasks. This allows employees to concentrate on work demanding human expertise, creating a fail-safe AI companion and enhancing overall output."
  },
  {
    image: "https://cdn-ilahpcd.nitrocdn.com/jDuDYworkYvtwHuagfVDTYpuGfPymqvt/assets/images/optimized/rev-55963ef/www.redappletech.com/wp-content/uploads/2025/03/MultiAgentSystems.png",
    title: "Multi-Agent Systems",
    description: "Delegate complex tasks to AI agents with Red Apple Technologies. Our experts build intelligent, collaborative agents using shared memory, multi-level fine-tuning, and reinforcement learning frameworks like OpenAI Gym and Ray RLlib."
  },
  {
    image: "https://cdn-ilahpcd.nitrocdn.com/jDuDYworkYvtwHuagfVDTYpuGfPymqvt/assets/images/optimized/rev-55963ef/www.redappletech.com/wp-content/uploads/2025/03/AIAgentOptimization.png",
    title: "AI Agent Optimization",
    description: "Optimize your AI agents with our services to fine-tune algorithms, boost response times, and ensure peak efficiency. This shall help to reduce latency, improve accuracy, and scale for exceptional AI performance."
  },
  {
    image: "https://cdn-ilahpcd.nitrocdn.com/jDuDYworkYvtwHuagfVDTYpuGfPymqvt/assets/images/optimized/rev-55963ef/www.redappletech.com/wp-content/uploads/2025/03/ConversationalAIAgentDevelopment.png",
    title: "Conversational AI Agent Development",
    description: "Our AI-powered solutions create human-like conversational agents for virtual assistants and customer support. They enhance user experience by understanding questions, providing accurate information, and handling complex tasks intuitively."
  },
  {
    image: "https://cdn-ilahpcd.nitrocdn.com/jDuDYworkYvtwHuagfVDTYpuGfPymqvt/assets/images/optimized/rev-55963ef/www.redappletech.com/wp-content/uploads/2025/03/ContinuousSupportandMaintenance.png",
    title: "Continuous Support and Maintenance",
    description: "Our AI agent is continuously improved and maintained for optimal performance. Developers regularly fine-tune models and monitor efficiency, ensuring your company benefits from updated and enhanced AI capabilities."
  }
]



function AIAgent() {
  return (
    <div>
      <AILandingSection
        subtitle="Build Smart AI Solutions to Transform Your Business with Our"
        title="AI Agent Development Company"
        desc="Unlock the potential of Artificial Intelligence with our cutting-edge AI agent development company. From automating tasks to enhancing user experiences, our AI-powered agents streamline operations and boost business efficiency. Collaborate with our expert team to build intelligent agents that drive efficiency and enhance user experience."
        img="https://www.inoru.com/img/ai-agent-development-company/banner-img3.webp"
      />

      <SolutionsSection/>
      <AIDevelopment
        aidevTitle="Comprehensive AI Agent Development Solutions of Red Apple Technologies"
        aidevDesc="At Red Apple Technologies, we are proficient in offering high-end AI agent development solutions that will streamline and optimize your business operations."
        aidevGrid={aiAgentServices}
        columns={4}
      />
      <AIUseCases />
      <Cta />
      <AIDevelopment
        aidevTitle="How Do We Assist You In AI Agent Development?"
        aidevDesc="We, at Red Apple Technologies, provide AI-powered chatbots that swiftly transform your business operations, going beyond basic agent creation to deliver impactful results."
        aidevGrid={aidevGrid}
        columns={3}
      />
      <AIProcess />
      <AIFaq />
      <Marquee />
      <Contact />
    </div>
  )
}

export default AIAgent