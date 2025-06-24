import { useEffect, useState } from 'react'
import './Header.css'
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeSubDropdown, setActiveSubDropdown] = useState(null);

    const location = useLocation()

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 1200);
        };
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        return () => window.removeEventListener('resize', checkIfMobile);
    }, [])

    const handleDropdownToggle = (index) => {
        if (isMobile) {
            setActiveDropdown(activeDropdown === index ? null : index);
            setActiveSubDropdown(null);
        }
    };

    const handleMouseEnter = (index) => {
        if (!isMobile) {
            setActiveDropdown(index);
            setActiveSubDropdown(null);
        }
    };

    const handleMouseLeave = () => {
        if (!isMobile) {
            setActiveDropdown(null);
            setActiveSubDropdown(null);
        }
    };

    // const handleSubDropdownToggle = (subIndex) => {
    //     if (isMobile) {
    //         setActiveSubDropdown(activeSubDropdown === subIndex ? null : subIndex);
    //     }
    // };
    const handleSubDropdownToggle = (subIndex) => {
        setActiveSubDropdown(activeSubDropdown === subIndex ? subIndex : subIndex);
    };

    const handleSubMouseEnter = (subIndex) => {
        if (!isMobile) {
            setActiveSubDropdown(subIndex);
        }
    };

    const handleSubMouseLeave = () => {
        if (!isMobile) {
            setActiveSubDropdown(null);
        }
    };

    const isDropdownActive = (dropdown) =>
        dropdown.some(sub =>
            sub.submenu
            ? sub.submenu.some(menuItem => location.pathname === menuItem.to)
            : location.pathname === sub.to
    );


const navItems = [
    {
        title: "AI Solutions",
        dropdown: [
        { name: "Generative AI Application Development", to: "/generative-ai-application-development", ctaDesc: "Build next-gen generative AI apps for content, automation, and creativity." },
        { name: "AI Agent Development", to: "/ai-agent-development", ctaDesc: "Create intelligent AI agents to streamline and automate complex tasks." },
        { name: "Chatbot Development", to: "/chatbot-development", ctaDesc: "Deploy intelligent chatbots for customer support and engagement." },
        { name: "LLM Development", to: "/llm-development", ctaDesc: "Utilize large language models for cutting-edge language solutions." },
        { name: "ML Development", to: "/ml-development", ctaDesc: "Develop predictive models and automate decisions with ML." },
        { name: "NLP Development", to: "/nlp-development", ctaDesc: "Enhance systems with smart natural language understanding." },
        { name: "Predictive Analytics", to: "/predictive-analytics", ctaDesc: "Gain foresight and drive smarter business strategies." },
        { name: "Computer Vision", to: "/computer-vision", ctaDesc: "Extract insights from images and videos using computer vision." }
        ]
    },
    {
        title: "App Development",
        dropdown: [
        {
            title: "Mobile App Development",
            submenu: [
            { name: "Android App Development", to: "/android-app-development", ctaDesc: "Launch feature-rich Android apps tailored to your users." },
            { name: "iOS App Development", to: "/ios-app-development", ctaDesc: "Deliver seamless experiences with high-performance iOS apps." },
            { name: "React Native App Development", to: "/react-native-app-development", ctaDesc: "Build cross-platform apps with React Native efficiency." },
            { name: "Swift App Development", to: "/swift-app-development", ctaDesc: "Develop native iOS apps with powerful Swift programming." },
            { name: "Flutter App Development", to: "/flutter-app-development", ctaDesc: "Create beautiful and fast apps using Flutter framework." },
            { name: "Enterprise App Development", to: "/enterprise-application-development", ctaDesc: "Empower enterprises with scalable custom applications." },
            { name: "IoT Application Development", to: "/iot-application-development", ctaDesc: "Connect and control smart devices with IoT applications." }
            ]
        },
        {
            title: "Web App Development",
            submenu: [
            { name: "Web Application Development", to: "/web-application-development", ctaDesc: "Create robust, modern web apps for all business needs." }
            ]
        }
        ]
    },
    {
        title: "Software Development",
        dropdown: [
        {
            title: "Software Development",
            submenu: [
            { name: "Custom Software Development", to: "/custom-software-development", ctaDesc: "Tailor software solutions specifically for your business goals." },
            { name: "IoT Development", to: "/iot-development", ctaDesc: "Integrate connected devices with intelligent IoT systems." },
            { name: "Product Development", to: "/product-development", ctaDesc: "Transform ideas into market-ready digital products." },
            { name: "Prototype Development", to: "/prototype-development", ctaDesc: "Validate concepts quickly with interactive prototypes." },
            { name: "Microservices Development", to: "/microservices-development", ctaDesc: "Architect modular systems with microservices for scalability." }
            ]
        },
        {
            title: "Blockchain Development",
            submenu: [
            { name: "Crypto Exchange Development", to: "/crypto-exchange-development", ctaDesc: "Build secure and scalable crypto trading platforms." },
            { name: "Ethereum Development", to: "/ethereum-development", ctaDesc: "Create smart contracts and dApps on Ethereum blockchain." },
            { name: "Smart Contract Development", to: "/smart-contract-development", ctaDesc: "Automate agreements with secure smart contracts." },
            { name: "Cardano Development", to: "/cardano-development", ctaDesc: "Develop decentralized apps using Cardano's framework." },
            { name: "NFT Development", to: "/nft-development", ctaDesc: "Launch NFT platforms for digital ownership and art." },
            { name: "DAO Development", to: "/dao-development", ctaDesc: "Empower communities with decentralized autonomous organizations." },
            { name: "Web3 Development", to: "/web3-development", ctaDesc: "Build the next-gen internet with Web3 technologies." },
            { name: "Solana Development", to: "/solana-development", ctaDesc: "Create high-performance apps on the Solana blockchain." },
            { name: "NFT Marketplace Development", to: "/nft-marketplace-development", ctaDesc: "Launch secure and scalable NFT marketplaces." },
            ]
        },
        {
            title: "Metaverse Development",
            submenu: [
            { name: "AR VR Development", to: "/ar-vr-development", ctaDesc: "Build immersive AR/VR experiences for various platforms." },
            { name: "Metaverse Game", to: "/metaverse-game", ctaDesc: "Design interactive games for virtual metaverse worlds." },
            { name: "Metaverse NFT", to: "/metaverse-nft", ctaDesc: "Integrate NFTs into your metaverse projects seamlessly." }
            ]
        }
        ]
    },
    {
        title: "Hire Talent",
        dropdown: [
        {
            title: "Frontend",
            submenu: [
            { name: "Hire ReactJS Developers", to: "/reactjs-developer", ctaDesc: "Hire expert ReactJS developers for interactive UIs." },
            { name: "Hire Vue.JS Developers", to: "/vuejs-developer", ctaDesc: "Build modern interfaces with skilled Vue.js developers." },
            { name: "Hire Angular Developers", to: "/angular-developer", ctaDesc: "Develop scalable apps with experienced Angular devs." },
            { name: "Hire Front End Developers", to: "/front-end-developer", ctaDesc: "Strengthen your UI/UX with professional frontend developers." },
            { name: "Hire Html5 Developers", to: "/html5-developer", ctaDesc: "Build dynamic websites with proficient HTML5 coders." }
            ]
        },
        {
            title: "Backend",
            submenu: [
            { name: "Hire NodeJS Developers", to: "/nodejs-developer", ctaDesc: "Hire Node.js experts for fast, scalable backend systems." },
            { name: "Hire Laravel Developers", to: "/laravel-developer", ctaDesc: "Develop secure and elegant PHP applications with Laravel." },
            { name: "Hire PHP Developers", to: "/php-developer", ctaDesc: "Get robust web solutions with dedicated PHP developers." },
            { name: "Cake PHP Developers", to: "/cake-php-developer", ctaDesc: "Build web apps efficiently with CakePHP specialists." },
            { name: "Hire Python Developers", to: "/python-developer", ctaDesc: "Hire Python devs for AI, web, or data-driven projects." },
            { name: "Hire Dot Net Developers", to: "/dot-net-developer", ctaDesc: "Create enterprise-grade apps using .NET technologies." }
            ]
        },
        {
            title: "Software",
            submenu: [
            { name: "Hire Custom Software Developers", to: "/custom-software-developer", ctaDesc: "Hire developers to build tailored software from scratch." },
            { name: "Hire Product Developers", to: "/product-developer", ctaDesc: "Bring ideas to life with skilled product development experts." },
            { name: "Hire Prototype Developers", to: "/prototype-developer", ctaDesc: "Quickly validate your ideas with interactive prototypes." },
            { name: "Hire Microservices Developers", to: "/microservices-developer", ctaDesc: "Develop microservice-based systems for flexibility." },
            { name: "Hire Dedicated Developer", to: "/dedicated-developer", ctaDesc: "Hire full-time developers dedicated to your projects." }
            ]
        },
        {
            title: "Mobile App",
            submenu: [
            { name: "Hire iOS Developers", to: "/ios-developer", ctaDesc: "Hire iOS app experts to build sleek Apple experiences." },
            { name: "Hire Android Developers", to: "/android-developer", ctaDesc: "Hire Android developers for versatile app solutions." },
            { name: "Hire Flutter Developers", to: "/flutter-developer", ctaDesc: "Create cross-platform apps with Flutter specialists." },
            { name: "Hire Ionic Developers", to: "/ionic-developer", ctaDesc: "Build hybrid mobile apps using the Ionic framework." },
            { name: "Hire Swift Developers", to: "/swift-developer", ctaDesc: "Leverage Swift developers for high-quality iOS apps." },
            { name: "Hire Kotlin Developers", to: "/kotlin-developer", ctaDesc: "Develop Android apps with expert Kotlin engineers." },
            { name: "Hire Game Developers", to: "/game-developer", ctaDesc: "Design and develop captivating mobile and web games." }
            ]
        },
        {
            title: "Automation",
            submenu: [
            { name: "Hire Salesforce Developers", to: "/salesforce-developer", ctaDesc: "Customize and optimize CRM with Salesforce pros." },
            { name: "Hire ServiceNow Developers", to: "/servicenow-developer", ctaDesc: "Automate IT and operations with ServiceNow devs." },
            { name: "Hire Zoho Developers", to: "/zoho-developer", ctaDesc: "Customize Zoho CRM and tools with expert developers." }
            ]
        },
        {
            title: "Platforms",
            submenu: [
            { name: "Hire MEAN Stack Developers", to: "/mean-stack-developer", ctaDesc: "Build modern apps with MEAN stack professionals." },
            { name: "Hire MERN Stack Developers", to: "/mern-stack-developer", ctaDesc: "Full-stack MERN developers for dynamic web apps." },
            { name: "Hire Full Stack Developers", to: "/full-stack-developer", ctaDesc: "Hire versatile full-stack developers for end-to-end builds." }
            ]
        },
        {
            title: "Artificial Intelligence",
            submenu: [
            { name: "Hire Artificial Intelligence Developers", to: "/artificial-intelligence-developer", ctaDesc: "Implement smart systems with AI developer talent." }
            ]
        },
        {
            title: "Machine Learning",
            submenu: [
            { name: "Hire Machine Learning Developers", to: "/machine-learning-developer", ctaDesc: "Drive innovation with expert machine learning developers." }
            ]
        },
        {
            title: "DevOps",
            submenu: [
            { name: "Hire DevOps Developers", to: "/devops-developer", ctaDesc: "Streamline development and deployment with DevOps experts." }
            ]
        },
        {
            title: "Data Science",
            submenu: [
            { name: "Hire Data Science Developers", to: "/data-science-developer", ctaDesc: "Turn data into insights with data science professionals." }
            ]
        },
        {
            title: "Cloud",
            submenu: [
            { name: "Hire Cloud Developers", to: "/cloud-developer", ctaDesc: "Build secure and scalable cloud infrastructure." }
            ]
        }
        ]
    }
]

    return (
        <div className='header'>
            <div className='header-logo'>
                <Link to="/"><img src="https://beta.softzway.com/images/logo.png" alt="" /></Link>
            </div>

            <div className={`header-navbar ${isMenuOpen ? 'active' : ''}`}>
                <nav className='header-nav'>
                    {navItems.map((item, index) => (
                        <div
                            key={index}
                            className='header-nav-item'
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleDropdownToggle(index)}
                        >
                            <p className={`header-nav-text ${activeDropdown === index || isDropdownActive(item.dropdown) ? 'active' : ''}`}>
                                {item.title}
                            </p>


                            {activeDropdown === index && item.dropdown && (
                            <div className={`header-nav-dropdown-fullwidth${item.dropdown[0]?.submenu ? '-extra' : ''}`}>
                                {/* LEFT: Main dropdown or parent items */}
                                <div className="header-nav-dropdown-left">
                                {item.dropdown[0]?.submenu
                                    ? item.dropdown.map((sub, subIndex) => (
                                        <div
                                        key={subIndex}
                                        className={`header-nav-dropdown-item header-nav-dropdown-parent${
                                            activeSubDropdown === subIndex ||
                                            (sub.submenu && sub.submenu.some(menuItem => location.pathname === menuItem.to))
                                            ? ' active'
                                            : ''
                                        }`}
                                        onClick={e => {
                                            e.stopPropagation();
                                            handleSubDropdownToggle(subIndex);
                                        }}
                                        >
                                            <span>
                                                {sub.title}
                                                <span style={{ marginLeft: 8, fontSize: 12 }} className='header-nav-sub-arrow'>▸</span>
                                            </span>
                                        </div>
                                    ))
                                    : item.dropdown.map((subItem, subIndex) => (
                                        <Link 
                                            to={subItem.to} 
                                            key={subIndex} 
                                            className={`header-nav-dropdown-item${location.pathname === subItem.to ? ' active' : ''}`}>
                                        {subItem.name}
                                        </Link>
                                    ))
                                }
                                </div>

                                {/* MIDDLE: Submenu items (for dropdown-extra only) */}
                                {item.dropdown[0]?.submenu && (
                                    
                                <div className="header-nav-dropdown-middle">
                                    <p className='header-nav-dropdown-middle-title'>{item.dropdown[activeSubDropdown ?? 0]?.title}</p>
                                    {item.dropdown[activeSubDropdown || 0]?.submenu?.map((menuItem, menuIndex) => (
                                    <Link 
                                        to={menuItem.to}
                                        key={menuIndex} 
                                        className={`header-nav-dropdown-item${location.pathname === menuItem.to ? ' active' : ''}`}>
                                        {menuItem.name}
                                    </Link>
                                    ))}
                                </div>
                                )}

                                {/* RIGHT: CTA Box */}
                                {/* <div className="header-nav-dropdown-cta">
                                    <div className="header-nav-dropdown-cta-title">{item.title}</div>
                                        <div className="header-nav-dropdown-cta-desc">
                                        <p>
                                        Discover our {item.title} services.<br />
                                        Unlock new possibilities for your business.<br />
                                        Get started with our expert team today!
                                        </p>
                                        <button className="header-nav-dropdown-cta-btn">Contact Us</button>
                                    </div>
                                </div> */}
                                {/* RIGHT: CTA Box */}
                                <div className="header-nav-dropdown-cta">
                                    <div className="header-nav-dropdown-cta-title">
                                        {/* Show relevant CTA title */}
                                        {item.dropdown[0]?.submenu
                                            ? (() => {
                                                const submenuParent = item.dropdown[activeSubDropdown ?? 0];
                                                const activeSubmenuItem = submenuParent.submenu.find(sub => location.pathname === sub.to) || submenuParent.submenu[0];
                                                return activeSubmenuItem?.name || submenuParent?.title;
                                            })()
                                            : (
                                                item.dropdown.find(subItem => location.pathname === subItem.to)?.name || item.title
                                            )
                                        }
                                    </div>
                                    <div className="header-nav-dropdown-cta-desc">
                                        <p>
                                            {/* Show relevant CTA description */}
                                            {item.dropdown[0]?.submenu
                                                ? (() => {
                                                    const submenuParent = item.dropdown[activeSubDropdown ?? 0];
                                                    // Find the active submenu item by route, or fallback to first
                                                    const activeSubmenuItem = submenuParent.submenu.find(sub => location.pathname === sub.to) || submenuParent.submenu[0];
                                                    return activeSubmenuItem?.ctaDesc
                                                        || submenuParent?.ctaDesc
                                                        || `Discover our ${activeSubmenuItem?.name || submenuParent?.title} services. Unlock new possibilities for your business. Get started with our expert team today!`;
                                                })()
                                                : (
                                                    // Regular dropdown: find the active item by route, or fallback to first
                                                    (item.dropdown.find(subItem => location.pathname === subItem.to)?.ctaDesc) ||
                                                    item.dropdown[0]?.ctaDesc ||
                                                    `Discover our ${item.title} services. Unlock new possibilities for your business. Get started with our expert team today!`
                                                )
                                            }
                                        </p>
                                        <button className="header-nav-dropdown-cta-btn">Contact Us</button>
                                    </div>
                                </div>
                                
                            </div>
                            )}
                        </div>
                    ))}
                </nav>
            </div>

            <div className='header-button'>
                <button>Contact Us</button>
            </div>

            <div className='hamburger-menu' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span className={isMenuOpen ? 'open' : ''}></span>
                <span className={isMenuOpen ? 'open' : ''}></span>
                <span className={isMenuOpen ? 'open' : ''}></span>
            </div>
        </div>
    )
}

export default Header;