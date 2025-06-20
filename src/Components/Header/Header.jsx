import { useEffect, useState } from 'react'
import './Header.css'

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

    const navItems = [
        {
            title: "AI Solutions",
            dropdown: [
                "Generative AI Application Development",
                "AI Agent Development",
                "LLM Development",
                "ML Development",
                "NLP Development",
                "Predictive Analytics",
                "Chatbot Development",
                "Computer Vision"
            ]
        },
        {
            title: "App Development",
            dropdown: [
                {
                    title: "Web App Development",
                    submenu: [
                        "Web Application Development"
                    ]
                },
                {
                    title: "Mobile App Development",
                    submenu: [
                        "Android App Development",
                        "iOS App Development",
                        "React Native App Development",
                        "Swift App Development",
                        "Flutter App Development",
                        "Enterprise Application Development",
                        "IoT Application Development"
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
                        "Crypto Exchange Development",
                        "Ethereum Development",
                        "Smart Contract Development",
                        "Cardano Development",
                        "NFT Development",
                        "DAO Development",
                        "Web3 Development",
                        "Solana Development",
                        "NFT Marketplace Development",
                        "Binance Development",
                        "DeFi Development"
                    ]
                },
                {
                    title: "Metaverse Development",
                    submenu: [
                        "AR VR Development",
                        "Metaverse Game",
                        "Metaverse NFT"
                    ]
                }
            ]
        },
        {
            title: "Hire Talent",
            dropdown: [
                // {
                //     title:"Frontend",
                //     submenu: [
                //         "Hire ReactJS Developer"
                //     ]
                // }
                "Frontend",
                "Backend",
                "Software",
                "Mobile App",
                "Automation",
                "Platforms",
                "Artificial Intelligence",
                "Machine Learning",
                "DevOps",
                "Data Science",
                "Cloud"
            ]
        }
    ]

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

    return (
        <div className='header'>
            <div className='header-logo'>
                <img src="https://beta.softzway.com/images/logo.png" alt="" />
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
                                <div className={`header-nav-dropdown${Array.isArray(item.dropdown[0]) || typeof item.dropdown[0] === 'object' ? '-extra' : ''}`}>
                                    
                                    {typeof item.dropdown[0] === 'object'
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
                                                            <div key={menuIndex} className="header-nav-dropdown-item">
                                                                {menuItem}
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))
                                        
                                        : item.dropdown.map((subItem, subIndex) => (
                                            <div key={subIndex} className="header-nav-dropdown-item">
                                                {subItem}
                                            </div>
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