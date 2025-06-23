import './Cta.css'
import { useRef, useEffect } from 'react'

function Cta() {

    const countersRef = useRef([])

    useEffect(() => {
        const options = {
        threshold: 0.5
        }

        const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            const counter = entry.target
            const target = parseInt(counter.getAttribute('data-target'))
            let count = 0

            const updateCount = () => {
                const increment = target / (2000 / 16)
                count += increment
                
                if (count < target) {
                counter.textContent = Math.ceil(count) + (counter.getAttribute('data-suffix') || '')
                requestAnimationFrame(updateCount)
                } else {
                counter.textContent = target + (counter.getAttribute('data-suffix') || '')
                }
            }

            updateCount()
            observer.unobserve(counter)
            }
        })
        }, options)

        countersRef.current.forEach(counter => {
        if (counter) observer.observe(counter)
        })

        return () => observer.disconnect()
    }, [])

    const achievements = [
        { number: 500, suffix: '+', title: 'PROJECTS LAUNCHED', image: 'https://cdn-ilahpcd.nitrocdn.com/jDuDYworkYvtwHuagfVDTYpuGfPymqvt/assets/images/optimized/rev-55963ef/www.redappletech.com/wp-content/uploads/2024/08/project-management-50x50_c.png' },
        { number: 200, suffix: '+', title: 'GLOBAL CLIENTS', image: 'https://cdn-ilahpcd.nitrocdn.com/jDuDYworkYvtwHuagfVDTYpuGfPymqvt/assets/images/optimized/rev-55963ef/www.redappletech.com/wp-content/uploads/2024/08/handshake-100x100_c.png' },
        { number: 13, suffix: '+', title: 'YEARS OF INDUSTRY EXPOSURE', image: 'https://cdn-ilahpcd.nitrocdn.com/jDuDYworkYvtwHuagfVDTYpuGfPymqvt/assets/images/optimized/rev-55963ef/www.redappletech.com/wp-content/uploads/2024/08/exposure-80x80_c.png' },
    ]

    return (
        <div className='cta-div'>
            <div className='cta-container'>
                <div className="cta-title">
                    <h1>Looking for cutting-edge technology solutions?</h1>
                    <button>Get A Free Consultation</button>
                </div>

                {achievements.map((achievement, index) => (
                <div className='cta-card' key={index}>
                    <div className='cta-icon'>
                        <img className='cta-img' src={achievement.image} alt={achievement.title} />
                    </div>
                    <div className='cta-text'>
                        <h1 
                            ref={el => countersRef.current[index] = el}
                            data-target={achievement.number}
                            data-suffix={achievement.suffix}
                        >
                            0
                        </h1>
                        <h3>{achievement.title}</h3>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Cta