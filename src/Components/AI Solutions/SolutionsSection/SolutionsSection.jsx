import './SolutionsSection.css'
import Title from '../../reusables/title/Title'
import Rightbutton from '../../reusables/Rightbutton/Rightbutton'
import Leftbutton from '../../reusables/Leftbutton/Leftbutton'

const title ={
  title:"Take Your Business Potential to the Next Level With Our AI Agent Development Solutions"
}

function SolutionsSection() {
  return (
    <div className='aisolutions'>
        <div className="aisolutions-container">
            {/* <h1>Take Your Business Potential to the Next Level With Our AI Agent Development Solutions</h1>
            <div className='aisolutions-line'></div> */}
            <Title title="Take Your Business Potential to the Next Level With Our AI Agent Development Solutions" />
            <p>In today’s fast-paced digital landscape, businesses and individuals are turning to artificial intelligence (AI) to revolutionize how they work, communicate, and solve problems. At INORU, we specialize in delivering state-of-the-art AI agent development solutions designed to bring your innovative ideas to life. Whether you're looking to automate complex tasks, enhance customer engagement, or create an intelligent assistant tailored to your needs, our expert team is here to provide scalable and efficient solutions.</p>
            <p>Our AI agents are built with advanced machine learning algorithms and tailored to industry-specific requirements, ensuring they seamlessly integrate into your workflows. From natural language processing (NLP) for conversational interfaces to predictive analytics for strategic decision-making, we empower your organization to stay ahead of the competition. Let us help you unlock AI's full potential with reliable, cost-effective, and future-proof solutions. Together, we can redefine how you interact with technology and transform your business into an AI-powered success story.</p>
            <p>Ready to elevate your business with AI? Contact us today and let’s build intelligent solutions that make a difference!</p>
            <div className="aisolutions-btns">
                {/* <button className="aisolutions-talk-btn">Talk To Our Expert</button>
                <button className="aisolutions-meet-btn">Schedule A Meeting</button> */}
                <Leftbutton leftbtn="Talk To Our Experts" />
                <Rightbutton rightbtn="Schedule A Meeting" />
            </div>
        </div>
    </div>  
  )
}

export default SolutionsSection