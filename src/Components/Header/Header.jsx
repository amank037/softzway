import { useEffect, useState } from 'react';
import './Header.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 1200)
        }

        checkIfMobile()
        window.addEventListener('resize', checkIfMobile)

        return () => window.removeEventListener('resize', checkIfMobile)
    }, [])

    const handleDropdownToggle = (index) => {
        if(isMobile){
            setActiveDropdown(activeDropdown === index ? null : index)
        }
    }

    const handleMouseEnter = (index) => {
        if(!isMobile) {
            setActiveDropdown(index)
        }
    }

    const handleMouseLeave = () => {
        if(!isMobile) {
            setActiveDropdown(null)
        }
    }

    const navItems = [
        {
            title: "AI Solutions",
            items: [
                "Generative AI Application Development",
                "AI Agent Development",
                "LLM Development",
                "ML Development",
                "NLP Development",
                "Predictive Analytics",
                "Chatbot Development",
                "Computer Vision"]
        },
        {
            title: "Mobile App Solutions",
            items: [
                "Android App Development",
                "iOS App Development",
                "React Native App Development",
                "Swift App Development",
                "Flutter App Development",
                "Enterprise Application Development",
                "IoT Application Development"]
        },
        {
            title: "Web App Development",
            items: [
                "Web Application Development"]
        },
        {
            title: "Software Development",
            items: [
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
                "DeFi Development"]
        },
        {
            title: "Metaverse Development",
            items: [
                "AR VR Development",
                "Metaverse Game",
                "Metaverse NFT"]
        },
        {
            title: "Hire Talent",
            items: [
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
                "Cloud"]
        },
    ]

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
                            {activeDropdown === index && (
                                <div className='header-nav-dropdown'>
                                    {item.items.map((subItem, subIndex) => (
                                        <p key={subIndex} className='header-nav-dropdown-item'>
                                            {subItem}
                                        </p>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    {/* <div className='header-nav-item'>
                        <p className='header-nav-text'>Hire Talent</p>
                        <div className='header-nav-dropdown-extra'>
                            <div className='header-nav-dropdown-item'>Frontend</div>
                            <div className='header-nav-dropdown-item'>Backend</div>
                            <div className='header-nav-dropdown-item'>Software</div>
                            <div className='header-nav-dropdown-item'>Mobile App</div>
                            <div className='header-nav-dropdown-item'>Automation</div>
                            <div className='header-nav-dropdown-item'>Platforms</div>
                            <div className='header-nav-dropdown-item'>Artificial Intelligence</div>
                            <div className='header-nav-dropdown-item'>Machine Learning</div>
                            <div className='header-nav-dropdown-item'>DevOps</div>
                            <div className='header-nav-dropdown-item'>Data Science</div>
                            <div className='header-nav-dropdown-item'>Cloud</div>
                        </div>
                    </div> */}
                    
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

export default Header