import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {

        if (window.ScrollTrigger) {
            window.ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto'
        })

        if (window.ScrollTrigger) {
            window.ScrollTrigger.refresh()
        }

    }, [pathname])

    return null
}

export default ScrollToTop