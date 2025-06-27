import './FutureSlider.css'
import {Swiper, SwiperSlide} from "swiper/react"
import { Pagination } from "swiper/modules"
import { Link } from 'react-router-dom'

const futureSlideItems = [
    {
        image: "https://beta.softzway.com/images/iot.webp",
        title: "IoT",
        description: "Empower your digital solutions to connect with multiple devices and platforms.",
        link:"/iot-application-development"
    },
    {
        image: "https://beta.softzway.com/images/cloud-computing.webp",
        title: "Cloud Computing",
        description: "Ensure seamless scalability and accessibility of your digital solutions.",
        link:"/cloud-developer"
    },
    {
        image: "https://beta.softzway.com/images/ar-vr.webp",
        title: "AR/VR",
        description: "Deliver immersive digital experiences to your customers.",
        link:"/ar-vr-development"
    },
    {
        image: "https://beta.softzway.com/images/bigdata.webp",
        title: "Big Data",
        description: "Derive actionable insights from large datasets for informed decision-making.",
        to:"/data-science-developer"
    },
    {
        image: "https://beta.softzway.com/images/ai-ml.webp",
        title: "AI/ML",
        description: "Create intelligent apps and solutions that learn and adapt.",
        link:"/ml-development"
    },
    {
        image: "https://beta.softzway.com/images/blockchain.webp",
        title: "Blockchain",
        description: "Integrate top-level security, immutability, and transparency in digital solutions.",
        link:"/web3-development"
    },
    {
        image: "https://beta.softzway.com/images/generative-ai.webp",
        title: "Generative AI",
        description: "Enable digital solutions to generate creative content and media.",
        link:"/generative-ai-application-development"
    },
    {
        image: "https://beta.softzway.com/images/metaverse.webp",
        title: "Metaverse",
        description: "Build interconnected virtual environments that boost engagement.",
        link:"/metaverse-game"
    }
]



function FutureSlider() {
  return (
    <div className='home-future2'>
        <div className='home-future2-container'>
            <div className='home-future2-title'>
                <h1>Building Future-Ready Apps and Solutions Backed By Emerging Technologies</h1>
                <p>Paving a path for your business’s long-term success and growth by integrating top-notch technologies.</p>
            </div>

            <div className='home-future2-slider animate-on-scroll' data-direction="left" data-delay="0.2">
                <Swiper
                    modules={[Pagination]}
                    slidesPerView={4}
                    slidesPerGroup={1}
                    pagination={{
                        el: ".custom-pagination3",
                        clickable: true,
                    }}
                    speed={800}
                    loop={true}
                    breakpoints={{
                        0: { slidesPerView: 1, slidesPerGroup: 1 },
                        600: { slidesPerView: 2, slidesPerGroup: 1 },
                        992: { slidesPerView: 4, slidesPerGroup: 1 }
                    }}
                >
                    {futureSlideItems.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div 
                            className='home-future2-slider-item'
                            style={{
                                        backgroundImage: `url(${item.image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                            >
                                <div className='home-future2-slider-text'>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                                <div className='home-future2-slider-button'>
                                    <Link to={item.link}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="42.703" height="16.244" viewBox="0 0 62.703 16.244">
                                            <g id="_2561331_right_right_arrow_arrow_right_arrow_right_arrow_right_arrow" data-name="2561331_right_right_arrow_arrow_right_arrow_right_arrow_right_arrow" transform="translate(44.508 1.768)">
                                                <line id="Line_295" data-name="Line 295" x2="60.033" transform="translate(-43.258 6.608)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5">
                                                </line>
                                                <path id="Path_64215" data-name="Path 64215" d="M14,6l6.354,6.354L14,18.709" transform="translate(-3.409 -6)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5">
                                                </path>
                                            </g>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='custom-pagination3'></div>
            </div>
        </div>
    </div>
  )
}

export default FutureSlider