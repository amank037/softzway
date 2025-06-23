import { useEffect, useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeSubDropdown, setActiveSubDropdown] = useState(null);

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

    const navItems = [
        {
            title: "AI Solutions",
            dropdown: [
            { name: "Generative AI Application Development", to: "/generative-ai-application-development" },
            { name: "AI Agent Development", to: "/ai-agent-development" },
            { name: "LLM Development", to: "/llm-development" },
            { name: "ML Development", to: "/ml-development" },
            { name: "NLP Development", to: "/nlp-development" },
            { name: "Predictive Analytics", to: "/predictive-analytics" },
            { name: "Chatbot Development", to: "/chatbot-development" },
            { name: "Computer Vision", to: "/computer-vision" }
            ]
        },
        {
            title: "App Development",
            dropdown: [
                            {
                title: "Mobile App Development",
                submenu: [
                { name: "Android App Development", to: "/android-app-development" },
                { name: "iOS App Development", to: "/ios-app-development" },
                { name: "React Native App Development", to: "/react-native-app-development" },
                { name: "Swift App Development", to: "/swift-app-development" },
                { name: "Flutter App Development", to: "/flutter-app-development" },
                { name: "Enterprise Application Development", to: "/enterprise-application-development" },
                { name: "IoT Application Development", to: "/iot-application-development" }
                ]
            },
            {
                title: "Web App Development",
                submenu: [
                { name: "Web Application Development", to: "/web-application-development" }
                ]
            },
            ]
        },
        {
            title: "Software Development",
            dropdown: [
                {
                    title: "Software Development",
                    submenu: [
                        { name: "Custom Software Development", to: "/custom-software-development"},
                        { name: "IoT Development", to: "/iot-development"},
                        { name: "Product Development", to: "/product-development"},
                        { name: "Prototype Development", to: "/prototype-development"},
                        { name: "Microservices Development", to: "/microservices-development"},
                    ]
                },
                {
                    title: "Blockchain Development",
                    submenu: [
                    { name: "Crypto Exchange Development", to: "/crypto-exchange-development" },
                    { name: "Ethereum Development", to: "/ethereum-development" },
                    { name: "Smart Contract Development", to: "/smart-contract-development" },
                    { name: "Cardano Development", to: "/cardano-development" },
                    { name: "NFT Development", to: "/nft-development" },
                    { name: "DAO Development", to: "/dao-development" },
                    { name: "Web3 Development", to: "/web3-development" },
                    { name: "Solana Development", to: "/solana-development" },
                    { name: "NFT Marketplace Development", to: "/nft-marketplace-development" },
                    { name: "Binance Development", to: "/binance-development" },
                    { name: "DeFi Development", to: "/defi-development" }
                    ]
                },
                {
                    title: "Metaverse Development",
                    submenu: [
                    { name: "AR VR Development", to: "/ar-vr-development" },
                    { name: "Metaverse Game", to: "/metaverse-game" },
                    { name: "Metaverse NFT", to: "/metaverse-nft" }
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
                    { name: "Hire ReactJS Developers", to: "/reactjs-developer" },
                    { name: "Hire Vue.JS Developers", to: "/vuejs-developer" },
                    { name: "Hire Angular Developers", to: "/angular-developer" },
                    { name: "Hire Front End Developers", to: "/front-end-developer" },
                    { name: "Hire Html5 Developers", to: "/html5-developer" }
                ]
                },
                {
                title: "Backend",
                submenu: [
                    { name: "Hire NodeJS Developers", to: "/nodejs-developer" },
                    { name: "Hire Laravel Developers", to: "/laravel-developer" },
                    { name: "Hire PHP Developers", to: "/php-developer" },
                    { name: "Cake PHP Developers", to: "/cake-php-developer" },
                    { name: "Hire Python Developers", to: "/python-developer" },
                    { name: "Hire Dot Net Developers", to: "/dot-net-developer" }
                ]
                },
                {
                title: "Software",
                submenu: [
                    { name: "Hire Custom Software Developers", to: "/custom-software-developer" },
                    { name: "Hire Product Developers", to: "/product-developer" },
                    { name: "Hire Prototype Developers", to: "/prototype-developer" },
                    { name: "Hire Microservices Developers", to: "/microservices-developer" },
                    { name: "Hire Dedicated Developer", to: "/dedicated-developer" }
                ]
                },
                {
                title: "Mobile App",
                submenu: [
                    { name: "Hire iOS Developers", to: "/ios-developer" },
                    { name: "Hire Android Developers", to: "/android-developer" },
                    { name: "Hire Flutter Developers", to: "/flutter-developer" },
                    { name: "Hire Ionic Developers", to: "/ionic-developer" },
                    { name: "Hire Swift Developers", to: "/swift-developer" },
                    { name: "Hire Kotlin Developers", to: "/kotlin-developer" },
                    { name: "Hire Game Developers", to: "/game-developer" }
                ]
                },
                {
                title: "Automation",
                submenu: [
                    { name: "Hire Salesforce Developers", to: "/salesforce-developer" },
                    { name: "Hire ServiceNow Developers", to: "/servicenow-developer" },
                    { name: "Hire Zoho Developers", to: "/zoho-developer" }
                ]
                },
                {
                title: "Platforms",
                submenu: [
                    { name: "Hire MEAN Stack Developers", to: "/mean-stack-developer" },
                    { name: "Hire MERN Stack Developers", to: "/mern-stack-developer" },
                    { name: "Hire Full Stack Developers", to: "/full-stack-developer" }
                ]
                },
                {
                title: "Artificial Intelligence",
                submenu: [
                    { name: "Hire Artificial Intelligence Developers", to: "/artificial-intelligence-developer" }
                ]
                },
                {
                title: "Machine Learning",
                submenu: [
                    { name: "Hire Machine Learning Developers", to: "/machine-learning-developer" }
                ]
                },
                {
                title: "DevOps",
                submenu: [
                    { name: "Hire DevOps Developers", to: "/devops-developer" }
                ]
                },
                {
                title: "Data Science",
                submenu: [
                    { name: "Hire Data Science Developers", to: "/data-science-developer" }
                ]
                },
                {
                title: "Cloud",
                submenu: [
                    { name: "Hire Cloud Developers", to: "/cloud-developer" }
                ]
                }
            ]
            }
        // {
        //     title: "Hire Talent",
        //     dropdown: [
        //     { name: "Frontend", to: "/frontend" },
        //     { name: "Backend", to: "/backend" },
        //     { name: "Software", to: "/software" },
        //     { name: "Mobile App", to: "/mobile-app" },
        //     { name: "Automation", to: "/automation" },
        //     { name: "Platforms", to: "/platforms" },
        //     { name: "Artificial Intelligence", to: "/artificial-intelligence" },
        //     { name: "Machine Learning", to: "/machine-learning" },
        //     { name: "DevOps", to: "/devops" },
        //     { name: "Data Science", to: "/data-science" },
        //     { name: "Cloud", to: "/cloud" }
        //     ]
        // }

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
                            <p className={`header-nav-text ${activeDropdown === index ? 'active' : ''}`}>
                                {item.title}
                            </p>
                            
                            {/* {activeDropdown === index && item.dropdown && (
                                <div className={`header-nav-dropdown${item.dropdown[0]?.submenu ? '-extra' : ''}`}>
                                {item.dropdown[0]?.submenu
                                    ? item.dropdown.map((sub, subIndex) => (
                                        <div
                                            key={subIndex}
                                            className="header-nav-dropdown-item header-nav-dropdown-parent"
                                            onMouseEnter={() => handleSubMouseEnter(subIndex)}
                                            onMouseLeave={handleSubMouseLeave}
                                            onClick={e => {
                                                e.stopPropagation();
                                                handleSubDropdownToggle(subIndex);
                                            }}
                                            style={{ position: 'relative' }}
                                        >
                                            <span>
                                                {sub.title}
                                                <span style={{ marginLeft: 8, fontSize: 12 }}>▸</span>
                                            </span>
                                            {(activeSubDropdown === subIndex) && (
                                                <div className="header-nav-dropdown-flyout">
                                                    {sub.submenu.map((menuItem, menuIndex) => (
                                                        <Link to={menuItem.to} key={menuIndex} className="header-nav-dropdown-item">
                                                            {menuItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))
                                    : item.dropdown.map((subItem, subIndex) => (
                                        <Link to={subItem.to} key={subIndex} className="header-nav-dropdown-item">
                                            {subItem.name}
                                        </Link>
                                    ))
                                }
                            </div>
                            )} */}


                            {activeDropdown === index && item.dropdown && (
                            <div className={`header-nav-dropdown-fullwidth${item.dropdown[0]?.submenu ? '-extra' : ''}`}>
                                {/* LEFT: Main dropdown or parent items */}
                                <div className="header-nav-dropdown-left">
                                {item.dropdown[0]?.submenu
                                    ? item.dropdown.map((sub, subIndex) => (
                                        <div
                                        key={subIndex}
                                        className={`header-nav-dropdown-item header-nav-dropdown-parent${activeSubDropdown === subIndex ? ' active' : ''}`}
                                        // onMouseEnter={() => handleSubMouseEnter(subIndex)}
                                        // onMouseLeave={handleSubMouseLeave}
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
                                        <Link to={subItem.to} key={subIndex} className="header-nav-dropdown-item">
                                        {subItem.name}
                                        </Link>
                                    ))
                                }
                                </div>

                                {/* MIDDLE: Submenu items (for dropdown-extra only) */}
                                {item.dropdown[0]?.submenu && (
                                <div className="header-nav-dropdown-middle">
                                    {item.dropdown[activeSubDropdown || 0]?.submenu?.map((menuItem, menuIndex) => (
                                    <Link to={menuItem.to} key={menuIndex} className="header-nav-dropdown-item">
                                        {menuItem.name}
                                    </Link>
                                    ))}
                                </div>
                                )}

                                {/* RIGHT: CTA Box */}
                                <div className="header-nav-dropdown-cta">
                                    <div className="header-nav-dropdown-cta-title">{item.title}</div>
                                        <div className="header-nav-dropdown-cta-desc">
                                        <p>
                                        Discover our {item.title} services.<br />
                                        Unlock new possibilities for your business.<br />
                                        Get started with our expert team today!
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