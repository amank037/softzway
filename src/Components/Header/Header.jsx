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

    const handleSubDropdownToggle = (subIndex) => {
        if (isMobile) {
            setActiveSubDropdown(activeSubDropdown === subIndex ? null : subIndex);
        }
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
                title: "Web App Development",
                submenu: [
                { name: "Web Application Development", to: "/web-application-development" }
                ]
            },
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
            }
            ]
        },
        {
            title: "Software Development",
            dropdown: [
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
            { name: "Frontend", to: "/frontend" },
            { name: "Backend", to: "/backend" },
            { name: "Software", to: "/software" },
            { name: "Mobile App", to: "/mobile-app" },
            { name: "Automation", to: "/automation" },
            { name: "Platforms", to: "/platforms" },
            { name: "Artificial Intelligence", to: "/artificial-intelligence" },
            { name: "Machine Learning", to: "/machine-learning" },
            { name: "DevOps", to: "/devops" },
            { name: "Data Science", to: "/data-science" },
            { name: "Cloud", to: "/cloud" }
            ]
        }
    ];

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
                            
                            {activeDropdown === index && item.dropdown && (
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