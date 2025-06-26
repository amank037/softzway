import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimations() {

    const { pathname } = useLocation()

    useEffect(() => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())

        gsap.utils.toArray(".animate-on-scroll").forEach((el) => {
        const direction = el.dataset.direction || "up";
        const delay = parseFloat(el.dataset.delay) || 0;

        let x = 0,
            y = 0;

        if (direction === "left") x =  "-50%";
        if (direction === "right") x = "50%";
        if (direction === "up") y = "50%";
        if (direction === "down") y =  "-50%";

        gsap.fromTo(
            el,
            { x, y, opacity: 0 },
            {
            scrollTrigger: {
                trigger: el,
                start: "25% bottom", // when 30% is out of the bottom
                toggleActions: "play none none none",
                markers: false, // turn on if debugging
            },
            x: 0,
            y: 0,
            opacity: 1,
            duration: 0.5,
            delay: delay,
            ease:"back.out(1.7)",
            // ease:"power1.out"
            // ease: "elastic.out(1.5,0.3)",
            }
        );
        });

        ScrollTrigger.refresh();
    }, [pathname]);
}

