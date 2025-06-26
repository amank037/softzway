import './DigitalSlider.css';
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const digitalSlideItems = [
    {
        image: "https://beta.softzway.com/images/mobile-app-development-sm.webp",
        title: "Mobile App Development",
        description: "Craft user-centric and scalable apps for Android, iOS, and web",
        description2: "platforms",
        listItems: [
        "Android App Development",
        "iPhone App Development",
        "React Native App Development",
        "Flutter App Development",
        "Cross-Platform Development",
        "Progressive Web App Development"
        ]
    },
    {
        image: "https://beta.softzway.com/images/artificial-intelligence-development-sm.webp",
        title: "Artificial Intelligence Development",
        description: "Leverage the potential of AI to bring personalization and make",
        description2: "informed decisions",
        listItems: [
        "Generative AI",
        "Chatbot Development",
        "AI Agents Development",
        "LLM Development Company",
        "Computer Vision",
        "ML Development",
        "Predictive Analytics"
        ]
    },
    {
        image: "https://beta.softzway.com/images/blockchain-development-sm.webp",
        title: "Blockchain Development",
        description: "Build secure and transparent blockchain-powered apps and",
        description2: "solutions",
        listItems: [
        "Crypto Exchange Development",
        "Smart Contract Development",
        "NFT Marketplace Development",
        "Crypto Wallet Development",
        "RWA Tokenization",
        "dApps Development",
        "DeFi Development"
        ]
    },
    {
        image: "https://beta.softzway.com/images/hire-resources.webp",
        title: "Hire Resources",
        description: "Hire certified and pre-vetted developers to breathe life into your",
        description2: "digital dreams",
        listItems: [
        "Hire AI Developers",
        "Hire Flutter Developers",
        "Hire DevOps Developers",
        "Hire Data Engineer",
        "Hire GoLang Developers",
        "Hire Blockchain Developers",
        "Hire App Developers",
        "Hire React Native Developers"
        ]
    },
    {
        image: "https://beta.softzway.com/images/ar-vr-development-sm.webp",
        title: "AR/VR Development",
        description: "Immerse your users in a virtual world with engaging augmented and",
        description2: "virtual realities",
        listItems: [
        "Training Solutions",
        "Virtual Try-on"
        ]
    },
    {
        image: "https://beta.softzway.com/images/saas-n-crm-development.webp",
        title: "SaaS & CRM Development",
        description: "Create feature-rich CRMs and SaaS solutions to multifold your",
        description2: "business growth",
        listItems: [
        "SaaS App Development",
        "Custom CRM Development"
        ]
    },
    {
        image: "https://beta.softzway.com/images/staff-augmentation-sm.webp",
        title: "Staff Augmentation",
        description: "Connect with top-tier talents for a bespoke mobile app or digital",
        description2: "solution development",
        listItems: [
        "Offshore Development Center",
        "Dedicated Development Team"
        ]
    }
]

function DigitalSlider() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [openListIndex, setOpenListIndex] = useState(null)
    const swiperRef = useRef(null)

    return (
        <div className="home-digital">
                    <div className="home-digital-container">
                        <h1>
                        Our Digital Offerings that Drive Success for{" "}
                        <span className="text-green">Millions</span> of Businesses
                        </h1>
                        <div className="home-digital-content">
                            <div className="home-digital-list animate-on-scroll" data-direction="left" data-delay="0.2">
                                {digitalSlideItems.map((item, index) => (
                                <div
                                    className={`home-digital-list-item ${
                                    activeIndex === index ? "active" : ""
                                    }`}
                                    key={index}
                                    onClick={() => {
                                    setActiveIndex(index)
                                    setOpenListIndex(null)
                                    if(swiperRef.current){
                                        swiperRef.current.slideTo(index)
                                    }
                                    }}
                                >
                                    <h3 className="home-digital-list-title">{item.title}</h3>
                                </div>
                                ))}
                            </div>

                            <div className="home-digital-slider animate-on-scroll" data-direction="right" data-delay="0.2">
                                <Swiper
                                modules={[Pagination]}
                                pagination={{
                                    el: ".custom-pagination2",
                                    clickable: true,
                                }}
                                speed={800}
                                loop={false}
                                slidesPerView={1}
                                onSlideChange={(swiper) => {
                                    setActiveIndex(swiper.activeIndex)
                                    setOpenListIndex(null)
                                }}
                                onSwiper={(swiper) => {
                                    swiperRef.current = swiper
                                }}
                                initialSlide={activeIndex}
                                >
                                {digitalSlideItems.map((item, index) => (
                                    <SwiperSlide key={index}>
                                    <div
                                        className="home-digital-slider-item"
                                        style={{
                                        backgroundImage: `url(${item.image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        }}
                                    >
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                        <p
                                        className="home-digital-slider-desc2"
                                        onClick={() =>
                                            setOpenListIndex(
                                            openListIndex === index ? null : index
                                            )
                                        }
                                        >
                                        {item.description2}
                                        <i
                                            className={`fa-solid fa-chevron-${
                                            openListIndex === index ? "up" : "down"
                                            }`}
                                            style={{ color: "#ffffff", marginLeft: 8 }}
                                        ></i>
                                        </p>
                                        <ul
                                        className={`home-digital-slider-list ${
                                            openListIndex === index ? "open" : ""
                                        }`}
                                        >
                                        {item.listItems.map((listItem, listIndex) => (
                                            <li key={listIndex}>{listItem}</li>
                                        ))}
                                        </ul>
                                        <div><button> Know More → </button></div>
                                    </div>
                                    </SwiperSlide>
                                ))}
                                </Swiper>
                                <div className="custom-pagination2"></div>
                            </div>
                        </div>
                    </div>
                    </div>
    )
}

export default DigitalSlider