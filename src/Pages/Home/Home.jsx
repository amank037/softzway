import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/pagination';
import './Home.css'
import DigitalSlider from "../../Components/DigitalSlider/DigitalSlider";
import FutureSlider from "../../Components/FutureSlider/FutureSlider";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Marquee from "../../Components/Marquee/Marquee";
import Contact from "../../Components/Contact/Contact";
import Leftbutton from "../../Components/reusables/Leftbutton/Leftbutton";
import Rightbutton from "../../Components/reusables/Rightbutton/Rightbutton"
import Cta from "../../Components/Cta/Cta"

const slideItems = [
    {
        image: "https://beta.softzway.com/images/2.webp",
        title: "Reimagine Your",
        title2: "Business In The AI Age",
        description: "Cutting-edge technology to leapfrog your competition and redefine industry standards",
        button: "Build Next-Gen Digital Solutions"
    },
    {
        image: "https://beta.softzway.com/images/1_1.webp",
        title: "Where Innovation",
        title2: "Meets Reality",
        description: "Reshaping your business’s future with an AI-first approach future-ready apps and solutions to stay competitive. ",
        button: "Connect With Us"
    },
    {
        image: "https://beta.softzway.com/images/3.webp",
        title: "Crafting Disruptive Digital",
        title2: "Solutions That Make A Difference",
        description: "Elevate customer experience and redefine business interactions with Generative AI",
        button: "Explore Work"
    }
]

const stratItems = [
    {
        title: "Startups",
        description: "Fueling agile innovation for startups to disrupt markets and achieve rapid growth."
    },
    {
        title: "Enterprises",
        description: "Driving competitive advantage for enterprises through cutting-edge technology solutions."
    },
    {
        title: "Small Businesses",
        description: "Empowering small businesses with scalable solutions for sustainable growth and success."
    }
]

const futureGridItems = [
    {
        title: "Digital DNA",
        description: "Technology is deeply rooted in whatever we design and develop"
    },
    {
        title: "Innovation Experts",
        description: "With a commitment to innovation, our experts build cutting-edge apps and solutions"
    },
    {
        title: "Test-Driven Development",
        description: "We craft comprehensive digital products backed by valuable insights"
    },
    {
        title: "Client-First Approach",
        description: "Each digital product we create aligns perfectly with the client’s unique goals"
    },
    {
        title: "Commitment to Security",
        description: "Safeguarding your data from unauthorized access is our top priority"
    },
    {
        title: "DevOps for Scalability",
        description: "We optimize your development lifecycle for rapid and reliable scaling"
    },
]

const futureGridButton = [
    {
        number: "150",
        sup: "+",
        description: "Fortune 500 Companies Served"
    },
    {
        number: "50",
        sup: "+",
        description: "Countries Served Globally"
    },
    {
        number: "30",
        sup: "+",
        description: "Industries Covered"
    },
    {
        number: "98%",
        sup: "",
        description: "Client Retention Rate"
    }
]

const brandsItems = [
    {
        image: "/css.png"
    },
    {
        image: "/css.png"
    },
    {
        image: "/css.png"
    },
    {
        image: "/css.png"
    },
    {
        image: "/css.png"
    },
    {
        image: "/css.png"
    },
    {
        image: "/css.png"
    },
    {
        image: "/css.png"
    },
    {
        image: "/css.png"
    },
    {
        image: "/css.png"
    },
    {
        image: "/css.png"
    },
    {
        image: "/css.png"
    },
]

const digitalListItems = [
    {
        title: "Mobile App Development"
    },
    {
        title: "Artificial Intelligence Development  "
    },
    {
        title: "Blockchain Development"
    },
    {
        title: "Hire Resources"
    },
    {
        title: "AR/VR Development"
    },
    {
        title: "SaaS & CRM Development"
    },
    {
        title: "Staff Augmentation"
    },
]

const techGridItems = [
    {
        image: (<svg xmlns="http://www.w3.org/2000/svg" width="65" height="83.327" viewBox="0 0 83.478 83.327">
            <path id="closure_1_" data-name="closure (1)" d="M59.308,35.949a1.433,1.433,0,0,1,1.433-1.433H83.153a1.433,1.433,0,1,1,0,2.866H60.741a1.433,1.433,0,0,1-1.433-1.433ZM47.494,39.005a1.433,1.433,0,0,0,2.027,0l4.393-4.393a1.433,1.433,0,1,0-2.027-2.027l-3.38,3.38-1.183-1.183A1.433,1.433,0,0,0,45.3,36.809ZM60.741,52.667H83.153a1.433,1.433,0,1,0,0-2.866H60.741a1.433,1.433,0,1,0,0,2.866ZM47.494,54.444a1.433,1.433,0,0,0,2.027,0l4.393-4.393a1.433,1.433,0,1,0-2.027-2.027l-3.38,3.38-1.183-1.183A1.433,1.433,0,0,0,45.3,52.247Zm56.839,25.422L98,83.524a4.24,4.24,0,0,1-2.126.573,4.317,4.317,0,0,1-1.119-.148,4.249,4.249,0,0,1-2.6-1.99l-.173-.3-3.206,1.637a4.676,4.676,0,0,1-.022,4.842A5.039,5.039,0,0,1,87,89.925a4.379,4.379,0,0,1,.641,2.318,5.046,5.046,0,0,1-2.5,4.291,4.372,4.372,0,0,1-2.7.56,5.058,5.058,0,0,1-.681,2.224,4.7,4.7,0,0,1-4.123,2.415,5.036,5.036,0,0,1-.689,2.407,4.7,4.7,0,0,1-4,2.417,4.825,4.825,0,0,1-2.441-.7l-3.785-2.2-.736,1.047a4.554,4.554,0,0,1-3.755,2.04q-.2,0-.41-.018a5.05,5.05,0,0,1-4.016-2.76,4.677,4.677,0,0,1-4.824-.44,4.942,4.942,0,0,1-1.9-2.574,4.833,4.833,0,0,1-3.774-.819,4.69,4.69,0,0,1-2.057-4.285,5.037,5.037,0,0,1-2.355-.894,4.566,4.566,0,0,1-1.161-6.565l.122-.173L37.106,82.28a4.247,4.247,0,0,1-2.392,1.669A4.317,4.317,0,0,1,33.6,84.1a4.241,4.241,0,0,1-2.127-.573l-6.337-3.659a4.283,4.283,0,0,1-1.566-5.845L34.687,54.757a4.253,4.253,0,0,1,1.34-1.424V24.847a1.433,1.433,0,0,1,1.433-1.433H92a1.433,1.433,0,0,1,1.433,1.433V53.333a4.249,4.249,0,0,1,1.34,1.424L105.9,74.021a4.284,4.284,0,0,1-1.566,5.845ZM38.893,26.28V52.648a4.253,4.253,0,0,1,1.639.543l6.337,3.659a4.3,4.3,0,0,1,2.03,4.67l7.945,2.838c3.351-3,5.823-4.06,10.923-2.937a26.246,26.246,0,0,0,12.78.012,4.293,4.293,0,0,1,2.048-4.583l6.337-3.659a4.253,4.253,0,0,1,1.639-.543V26.28ZM34.831,80.525,45.953,61.261a1.421,1.421,0,0,0-.517-1.929L39.1,55.673a1.413,1.413,0,0,0-1.93.517L26.047,75.454a1.414,1.414,0,0,0,.517,1.929L32.9,81.042a1.421,1.421,0,0,0,1.929-.517ZM47.123,92.177l3.294-4.682h0a1.861,1.861,0,0,0-3.047-2.138l-3.291,4.679a1.861,1.861,0,0,0,3.043,2.144Zm4.692,4.781,4.6-6.541.7-.995a1.862,1.862,0,0,0-3.045-2.142l-1.309,1.861h0l-3.294,4.682-.976,1.388a1.861,1.861,0,0,0,3.045,2.142Zm6.431,2.309,0,0,1.65-2.346,1.9-2.706a1.861,1.861,0,0,0-3.042-2.145v0l-4.6,6.541h0a1.861,1.861,0,0,0,3.046,2.14Zm6.576-1.132a1.743,1.743,0,0,0-2.577.429h0l-1.65,2.346a1.671,1.671,0,0,0-.238,1.749,2.193,2.193,0,0,0,1.717,1.208,1.671,1.671,0,0,0,1.566-.815l1.65-2.346A1.744,1.744,0,0,0,64.823,98.135Zm20.8-13.97L67.9,73.907c-1.593-.92-3.168-.257-5.605.9l-.355.168c-.178.357-.357.741-.544,1.14-.92,1.966-1.964,4.2-3.768,5.169-2.124,1.146-4.019,1.321-5.337.492a3.527,3.527,0,0,1-1.511-3.4l.379-7.987a1.433,1.433,0,0,1,.435-.961c.745-.722,1.414-1.381,2.061-2.018l.858-.844L47.62,64.106,38.657,79.631l4.917,6.14,1.452-2.065a4.566,4.566,0,0,1,6.57-1.127,5.061,5.061,0,0,1,1.524,1.692,4.633,4.633,0,0,1,5.179.235,4.746,4.746,0,0,1,2.082,3.873,5,5,0,0,1,2.607.914,4.567,4.567,0,0,1,1.665,5.69,5.089,5.089,0,0,1,1.819.806,4.579,4.579,0,0,1,1.773,5.436l3.7,2.156a1.861,1.861,0,0,0,1.876-3.215h0L69.05,97.387a1.433,1.433,0,1,1,1.442-2.477l4.771,2.778h0l0,0,1.492.869a1.861,1.861,0,0,0,1.876-3.215h0l-5.848-3.405a1.433,1.433,0,1,1,1.442-2.477l5.85,3.406h0l0,0,1.872,1.09a1.671,1.671,0,0,0,1.763.088,2.192,2.192,0,0,0,1.056-1.814,1.671,1.671,0,0,0-.947-1.49l-1.512-.881h0l-5.792-3.372a1.433,1.433,0,1,1,1.442-2.477l5.792,3.372a1.861,1.861,0,0,0,1.871-3.218Zm4.921-4.992L81.816,64.057a29.447,29.447,0,0,1-14.665.162c-5.046-1.11-6.282.108-11.485,5.234-.507.5-1.07,1.055-1.671,1.639l-.353,7.422c-.023.487.071.77.175.835.242.152,1.122.128,2.449-.589.972-.524,1.8-2.3,2.534-3.862.266-.568.541-1.155.824-1.688a1.435,1.435,0,0,1,.665-.629c.259-.12.518-.243.777-.365,2.48-1.177,5.29-2.512,8.269-.792l17.051,9.869Zm12.874-3.719L92.295,56.19a1.414,1.414,0,0,0-1.93-.517l-6.337,3.659a1.421,1.421,0,0,0-.517,1.929L94.633,80.525a1.421,1.421,0,0,0,1.929.517l6.337-3.659a1.414,1.414,0,0,0,.517-1.93Z" transform="translate(-22.993 -23.414)" fill="var(--medium-teal)"></path>
        </svg>),
        title: "1000",
        sup: "+",
        description: "Projects Delivered"
    },
    {
        image: (<svg xmlns="http://www.w3.org/2000/svg" width="65" height="81.378" viewBox="0 0 89.188 81.378"><path id="Subtraction_23" data-name="Subtraction 23" d="M1.221,2.442a1.221,1.221,0,1,1,1.22-1.22A1.222,1.222,0,0,1,1.221,2.442Z" transform="translate(43.373 64.83)" fill="var(--medium-teal)"></path><path id="Subtraction_18" data-name="Subtraction 18" d="M10.037,20.074A10.037,10.037,0,1,1,20.073,10.037,10.048,10.048,0,0,1,10.037,20.074Zm0-17.631a7.594,7.594,0,1,0,7.594,7.594A7.6,7.6,0,0,0,10.037,2.443Z" transform="translate(63.296 41.231)" fill="var(--medium-teal)"></path><path id="Subtraction_20" data-name="Subtraction 20" d="M25.2,20.074H1.221A1.223,1.223,0,0,1,0,18.853V15.327C0,7.019,7.261,0,15.856,0A16.318,16.318,0,0,1,28.907,6.491a1.222,1.222,0,0,1-1,1.926,1.223,1.223,0,0,1-1-.517A13.806,13.806,0,0,0,15.856,2.443c-7.271,0-13.414,5.9-13.414,12.884v2.3H25.2a1.221,1.221,0,0,1,0,2.443Z" transform="translate(0 61.304)" fill="var(--medium-teal)"></path><path id="Subtraction_22" data-name="Subtraction 22" d="M27.91,20.073H3.932a1.221,1.221,0,1,1,0-2.442H26.689V15.326c0-6.984-6.142-12.884-13.413-12.884A13.807,13.807,0,0,0,2.219,7.9a1.225,1.225,0,0,1-1,.516,1.22,1.22,0,0,1-1-1.926A16.315,16.315,0,0,1,13.276,0C21.87,0,29.131,7.018,29.131,15.326v3.527A1.222,1.222,0,0,1,27.91,20.073Z" transform="translate(60.057 61.304)" fill="var(--medium-teal)"></path><path id="Subtraction_19" data-name="Subtraction 19" d="M10.037,20.074A10.037,10.037,0,1,1,20.073,10.037,10.048,10.048,0,0,1,10.037,20.074Zm0-17.631a7.594,7.594,0,1,0,7.594,7.594A7.6,7.6,0,0,0,10.037,2.443Z" transform="translate(5.818 41.231)" fill="var(--medium-teal)"></path><path id="Subtraction_17" data-name="Subtraction 17" d="M13.563,27.126A13.563,13.563,0,1,1,27.126,13.563,13.578,13.578,0,0,1,13.563,27.126Zm0-24.683a11.12,11.12,0,1,0,11.121,11.12A11.133,11.133,0,0,0,13.563,2.443Z" transform="translate(31.031 30.652)" fill="var(--medium-teal)"></path>
            <path id="Subtraction_14" data-name="Subtraction 14" d="M21.189,25.985a1.215,1.215,0,0,1-.568-.14l-7.06-3.71-7.057,3.71a1.221,1.221,0,0,1-1.773-1.287L6.081,16.7.37,11.132a1.221,1.221,0,0,1,.677-2.083L8.935,7.9,12.465.685a1.221,1.221,0,0,1,2.194,0l3.53,7.22,7.889,1.144a1.221,1.221,0,0,1,.676,2.083L21.044,16.7l1.349,7.86a1.221,1.221,0,0,1-1.2,1.427Zm-7.627-6.449a1.222,1.222,0,0,1,.568.138l5.437,2.858-1.039-6.054a1.221,1.221,0,0,1,.351-1.081l4.4-4.287L17.2,10.228a1.222,1.222,0,0,1-.921-.672L13.562,4,10.846,9.556a1.223,1.223,0,0,1-.922.672l-6.077.882,4.4,4.287A1.221,1.221,0,0,1,8.6,16.478L7.558,22.532l5.436-2.858A1.222,1.222,0,0,1,13.562,19.537Z" transform="translate(30.968 0)" fill="var(--medium-teal)"></path>
            <path id="Subtraction_15" data-name="Subtraction 15" d="M15.436,19.151a1.226,1.226,0,0,1-.568-.14l-4.86-2.555L5.145,19.012a1.222,1.222,0,0,1-1.772-1.288L4.3,12.312.37,8.478A1.221,1.221,0,0,1,1.047,6.4l5.435-.789L8.913.681a1.22,1.22,0,0,1,2.189,0l2.43,4.925,5.434.789a1.221,1.221,0,0,1,.677,2.083l-3.932,3.834.928,5.412a1.221,1.221,0,0,1-1.2,1.427Zm-5.429-5.292a1.223,1.223,0,0,1,.568.138l3.239,1.7L13.2,12.093a1.221,1.221,0,0,1,.351-1.081l2.62-2.555-3.622-.526a1.218,1.218,0,0,1-.919-.668L10.008,3.98,8.387,7.262a1.219,1.219,0,0,1-.919.668l-3.622.526,2.62,2.555a1.221,1.221,0,0,1,.351,1.081L6.2,15.7,9.44,14A1.229,1.229,0,0,1,10.008,13.859Z" transform="translate(64.433 15.868)" fill="var(--medium-teal)"></path>
            <path id="Subtraction_16" data-name="Subtraction 16" d="M15.436,19.151a1.226,1.226,0,0,1-.568-.14l-4.86-2.555L5.145,19.012a1.222,1.222,0,0,1-1.772-1.288L4.3,12.312.37,8.478A1.221,1.221,0,0,1,1.047,6.4l5.435-.789L8.913.681a1.22,1.22,0,0,1,2.189,0l2.43,4.925,5.434.789a1.221,1.221,0,0,1,.677,2.083l-3.932,3.834.928,5.412a1.221,1.221,0,0,1-1.2,1.427Zm-5.429-5.292a1.223,1.223,0,0,1,.568.138l3.239,1.7L13.2,12.093a1.221,1.221,0,0,1,.351-1.081l2.62-2.555-3.622-.526a1.218,1.218,0,0,1-.919-.668L10.008,3.98,8.387,7.262a1.218,1.218,0,0,1-.919.668l-3.622.526,2.62,2.555a1.221,1.221,0,0,1,.351,1.081L6.2,15.7,9.44,14A1.229,1.229,0,0,1,10.008,13.859Z" transform="translate(4.486 15.868)" fill="var(--medium-teal)"></path>
            <path id="Subtraction_21" data-name="Subtraction 21" d="M40.01,23.6H1.221A1.223,1.223,0,0,1,0,22.379V20.616a20.616,20.616,0,1,1,41.231,0v1.763A1.223,1.223,0,0,1,40.01,23.6ZM20.616,2.443A18.164,18.164,0,0,0,2.442,20.616v.542H38.788v-.542A18.174,18.174,0,0,0,20.616,2.443Z" transform="translate(23.978 57.778)" fill="var(--medium-teal)"></path>
            <path id="Subtraction_24" data-name="Subtraction 24" d="M5.614,7.477a1.227,1.227,0,0,1-1.1-.7A11.18,11.18,0,0,0,.551,2.242,1.221,1.221,0,0,1,1.223,0a1.214,1.214,0,0,1,.669.2,13.62,13.62,0,0,1,4.823,5.53,1.222,1.222,0,0,1-1.1,1.746Z" transform="translate(50.131 66.849)" fill="var(--medium-teal)"></path>
        </svg>),
        title: "14",
        sup: "+",
        description: "Years of Experience"
    },
    {
        image: (<svg xmlns="http://www.w3.org/2000/svg" width="65" height="83.51" viewBox="0 0 80.373 83.51"><path id="customer-retention" d="M49.8,39.248A15.006,15.006,0,1,0,34.793,24.242,15.006,15.006,0,0,0,49.8,39.248ZM42.482,35.04c-.023-.239-.036-.48-.036-.721a7.353,7.353,0,1,1,14.706,0c0,.241-.013.481-.036.721a13.021,13.021,0,0,1-14.634,0ZM49.8,24.913A3.817,3.817,0,1,1,53.615,21.1,3.817,3.817,0,0,1,49.8,24.913Zm0-13.72a13.041,13.041,0,0,1,9.266,22.226,9.33,9.33,0,0,0-5.774-7.727,5.774,5.774,0,1,0-6.984,0,9.331,9.331,0,0,0-5.774,7.727A13.041,13.041,0,0,1,49.8,11.194ZM74.5,67.13l13.9-13.9a5.234,5.234,0,0,0,1.553-4.345L88.07,29.9a4.835,4.835,0,0,0-4.7-4.884l-.128,0a4.834,4.834,0,0,0-4.824,4.693l-.4,13.052c-.134-.013-.27-.019-.407-.019A4.223,4.223,0,0,0,74.6,43.985l-8.9,8.9A17.016,17.016,0,0,0,53.458,69.492a2.873,2.873,0,0,0-2.224,2.794v8.349h0a2.873,2.873,0,0,0,2.87,2.87H73.64a2.873,2.873,0,0,0,2.871-2.871V72.285a2.874,2.874,0,0,0-2.275-2.807v-1.7A.85.85,0,0,1,74.5,67.13ZM66.473,54.7a.976.976,0,0,0,.433-.252l9.075-9.075a2.3,2.3,0,1,1,3.248,3.248l-6.948,6.948a.979.979,0,1,0,1.384,1.384L80.614,50a4.256,4.256,0,0,0-.664-6.558l.424-13.676a2.875,2.875,0,0,1,2.868-2.792h.076a2.874,2.874,0,0,1,2.794,2.942,1.007,1.007,0,0,0,0,.121L88.007,49.08a3.292,3.292,0,0,1-.989,2.768l-13.9,13.9a2.813,2.813,0,0,0-.841,2.029v1.641H55.414A15.055,15.055,0,0,1,66.473,54.7Zm8.08,17.589v8.349a.913.913,0,0,1-.913.913H54.1a.913.913,0,0,1-.913-.913V72.286a.913.913,0,0,1,.913-.913H73.64a.913.913,0,0,1,.913.913ZM70.292,75.3a2.407,2.407,0,1,0,1.7.7,2.407,2.407,0,0,0-1.7-.7Zm.318,2.724a.449.449,0,1,1,.131-.317A.449.449,0,0,1,70.61,78.025ZM11.2,53.233l13.9,13.9a.85.85,0,0,1,.267.645v1.7a2.874,2.874,0,0,0-2.275,2.807v8.349a2.873,2.873,0,0,0,2.871,2.871H45.5a2.873,2.873,0,0,0,2.871-2.87h0v-8.35a2.873,2.873,0,0,0-2.224-2.793A17.016,17.016,0,0,0,33.9,52.881l-8.9-8.9a4.223,4.223,0,0,0-3.008-1.242c-.137,0-.272.007-.407.019l-.4-13.048a4.828,4.828,0,1,0-9.654.189L9.647,48.887A5.234,5.234,0,0,0,11.2,53.232Zm35.209,27.4a.913.913,0,0,1-.913.913H25.96a.913.913,0,0,1-.913-.913V72.285a.913.913,0,0,1,.913-.913H45.5a.913.913,0,0,1,.913.913ZM11.595,49.08,13.484,30.04a1,1,0,0,0,0-.121,2.874,2.874,0,0,1,2.794-2.942h.076a2.876,2.876,0,0,1,2.869,2.8l.423,13.672A4.256,4.256,0,0,0,18.987,50l6.948,6.948a.979.979,0,1,0,1.384-1.384l-6.948-6.948a2.3,2.3,0,1,1,3.248-3.248l9.075,9.075a.976.976,0,0,0,.433.252,15.055,15.055,0,0,1,11.058,14.72H27.323V67.775a2.813,2.813,0,0,0-.841-2.029l-13.9-13.9a3.292,3.292,0,0,1-.989-2.768ZM29.308,75.3a2.407,2.407,0,1,0,1.7.7,2.407,2.407,0,0,0-1.7-.7Zm.318,2.724a.45.45,0,1,1,.131-.317A.45.45,0,0,1,29.626,78.025ZM49.8,47.089a22.611,22.611,0,0,1-12.012-3.406l1.156,3.66a.979.979,0,1,1-1.867.589L35.039,41.48a.979.979,0,0,1,.833-1.268l6.729-.7a.979.979,0,1,1,.2,1.947l-4.175.432A20.67,20.67,0,0,0,49.8,45.131a20.93,20.93,0,0,0,13.207-4.7.979.979,0,1,1,1.238,1.516A22.892,22.892,0,0,1,49.8,47.089ZM35.353,6.542A22.891,22.891,0,0,1,49.8,1.4a22.649,22.649,0,0,1,11.778,3.27l-1.27-3.344a.979.979,0,1,1,1.83-.7l2.4,6.324a.979.979,0,0,1-.758,1.314L57.1,9.345a.979.979,0,1,1-.313-1.932l4.361-.706A20.705,20.705,0,0,0,49.8,3.353a20.929,20.929,0,0,0-13.207,4.7.979.979,0,1,1-1.238-1.516ZM67.486,35.357a20.662,20.662,0,0,0,3.2-11.115,20.928,20.928,0,0,0-4.7-13.207A.979.979,0,1,1,67.5,9.8a22.891,22.891,0,0,1,5.145,14.445A22.6,22.6,0,0,1,69.2,36.312l3.741-1.118a.979.979,0,0,1,.56,1.876l-6.482,1.937a.979.979,0,0,1-1.255-.852l-.592-6.739a.979.979,0,1,1,1.95-.171ZM32.115,13.12a20.677,20.677,0,0,0-3.206,11.122,20.928,20.928,0,0,0,4.7,13.207A.979.979,0,1,1,32.1,38.687a22.89,22.89,0,0,1-5.145-14.445A22.617,22.617,0,0,1,30.391,12.18L26.658,13.3a.979.979,0,1,1-.564-1.874l6.479-1.949a.979.979,0,0,1,1.256.85l.6,6.738a.979.979,0,0,1-.887,1.062q-.045,0-.089,0a.979.979,0,0,1-.974-.891Z" transform="translate(-9.614 0.005)" fill="var(--medium-teal)"></path></svg>),
        title: "100%",
        sup: "",
        description: "Client Retention Rate",
    }
]

const transGridItems = [
    {
        image: "fa-heart-pulse",
        title: "Healthcare",
    },
    {
        image: "fa-dumbbell",
        title: "Fitness",
    },
    {
        image: "fa-volleyball",
        title: "Sports",
    },
    {
        image: "fa-plane",
        title: "Travel",
    },
    {
        image: "fa-building",
        title: "FinTech",
    },
    {
        image: "fa-bolt",
        title: "EV"
    },
    {
        image: "fa-graduation-cap",
        title: "Education"
    },
    {
        image: "fa-home",
        title: "Real Estate"
    },
    {
        image: "fa-briefcase",
        title: "Insurance"
    },
    {
        image: "fa-industry",
        title: "Manufacturing"
    },
    {
        image: "fa-film",
        title: "Media & Entertainment"
    },
    {
        image: "fa-truck",
        title: "Logistics & Transportation"
    },
    {
        image: "fa-shopping-cart",
        title: "E-Commerce & Retail"
    },
    {
        image: "fa-tractor",
        title: "Agriculture"
    },
    {
        image: "fa-oil-can",
        title: "Oil & Gas"
    },
    {
        image: "fa-car",
        title: "Automotive"
    },
]

const insightItems = [
    {
        image: "https://beta.softzway.com/images/best-ai-agents-in-2025-1_1.png",
        description: "Automation won’t replace you, but someone leveraging it might do! This statement fits perfectly in..."
    },
    {
        image: "https://beta.softzway.com/images/agentic-ai-for-financial-advisors_1.png",
        description: "Financial advisors need to deal with complex, high-stakes numbers every day, and they cannot afford ...",
    },
    {
        image: "https://beta.softzway.com/images/personalized-avatar-generation-app-development-guide_1.png",
        description: "Driven by the increasing adoption of artificial intelligence, AR/VR, the Metaverse, and other techno..."
    }

]




function Home() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [openListIndex, setOpenListIndex] = useState(null)

    return (
        <div className='home-section'>
            <div className='home-slider'>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{
                        el: '.custom-pagination',
                        clickable: true
                    }}
                    speed={800}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    loop={true}
                    slidesPerView={1}
                >
                    {slideItems.map((item, index) => (
                        <SwiperSlide>
                            <div className='home-slide' key={index}
                                style={{
                                    backgroundImage: `url(${item.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                                <div className="home-slide-container">
                                    <div className="home-slide-content">
                                        <div className="home-slide-title">
                                            <h1>{item.title}</h1>
                                            <h1>{item.title2}</h1>
                                        </div>
                                        <p>{item.description}</p>
                                        <div><Leftbutton leftbtn={item.button}/></div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="custom-pagination"></div>
            </div>

            <div className="home-strat">
                <div className="home-strat-container">
                    <h1>Your Strategic Partner in Technology and Innovation</h1>
                    <p>As an innovation-led torchbearer of technology, we build customized apps and solutions driven by technologies like Gen AI, AI/ML, Blockchain, and Metaverse.</p>
                    <p>Our services cater to every business’s unique needs, including developing a digital product from zero to one or optimizing your current business processes with technology integration.</p>

                    <div className="home-strat-grid animate-on-scroll" data-direction="left" data-delay="0.2">
                        {stratItems.map((item, index) => (
                            <div className="home-strat-grid-item" key={index}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="home-future">
                <div className="home-future-container">
                    <div className="home-future-title">
                        <h1>Why Build the Future of</h1>
                        <h1>Your Business with <span className="text-green">Softzway</span></h1>
                    </div>
                    <p className="home-future-desc">Unlock your business potential to drive growth and success by building cutting-edge and tailor-made applications, solutions, and software.</p>
                    <div className="home-future-grid">
                        {futureGridItems.map((item, index) => (
                            <div className="home-future-grid-item animate-on-scroll" data-direction="left" data-delay={index*0.1} key={index}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="home-future-bottom">
                        {futureGridButton.map((item, index) => (
                            <div className="home-future-bottom-item animate-on-scroll" data-direction="right" data-delay={index*0.1} key={index}>
                                <p className="home-future-bottom-number text-green">{item.number}<sup>{item.sup}</sup> </p>
                                <p className="home-future-bottom-text">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* <div className="home-rewards">
                <div className="home-rewards-container">
                    <div className="home-rewards-title">
                        <h1>Rewards & Newsroom</h1>
                        <p>These accolades testify to our unwavering commitment to delivering exceptional digital solutions and mobile apps that drive business growth and set a benchmark for innovation and tech excellence.</p>
                    </div>

                    <div>
                        <div className="home-rewards-slider">
                            {rewardsSliderItems.map((item, index) => (
                                <div className="home-rewards-slider-item" key={index}>
                                    <img src={item.image} alt="" />
                                </div>
                            ))}
                        </div>

                        <div className="home-news-slider">
                            {newsSliderItems.map((item, index) => (
                                <div className="home-news-slider-item" key={index}>
                                    <img src={item.image} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="home-brands">
                <div className="home-brands-container">
                    <h1>Trusted By Prominent Brands</h1>
                    <div className="home-brands-grid">
                        {brandsItems.map((item, index) => (
                            <div className="home-brands-grid-item animate-on-scroll" data-direction="left" data-delay="0.2" key={index}>
                                <img src={item.image} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* <div className="home-digital">
                <div className="home-digital-container">
                    <h1>Our Digital Offerings that Drive Success for <span className="text-green">Millions</span> of Businesses</h1>
                    <div className="home-digital-content">
                        <div className="home-digital-list">
                            {digitalSlideItems.map((item, index) => (
                                <div className="home-digital-list-item" key={index}>
                                    <h3 className="home-digital-list-title">{item.title}</h3>
                                </div>
                            ))}
                        </div>
                        
                        <div className="home-digital-slider">
                            <Swiper
                            modules={[Pagination, Autoplay]}
                            pagination={{
                                el:'.custom-pagination',
                                clickable: true
                            }}
                            speed={800}
                            // autoplay={{
                            //     delay: 3000,
                            //     disableOnInteraction: false
                            // }}
                            loop={true}
                            slidesPerView={1}
                            >
                                {digitalSlideItems.map((item, index) => (
                                    <SwiperSlide>
                                        <div className="home-digital-slider-item" key={index} style={{
                                            backgroundImage: `url(${item.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}>
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                            <p>{item.description2}<i className="fa-solid fa-chevron-up" style={{color:"#ffffff"}}></i></p>
                                            <ul>
                                                {item.listItems.map((listItem, listIndex) => (
                                                    <li key={listIndex}>{listItem}</li>
                                                ))}
                                            </ul>
                                            <button> Know More → </button>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="custom-pagination"></div>
                        </div>
                    </div>
                </div>
            </div> */}

            <DigitalSlider />

            {/* <div className="home-cta">
                <div className="home-cta-container">
                    <div className="home-cta-content">
                        <h1>Building Next-Gen Digital Solutions for Modern Business</h1>
                        <p>A tailored app or digital solution can multifold your business growth by simplifying complex operations and understanding your customers’ needs. Build it with industry experts!</p>
                    </div>
                    <div className="home-cta-button">
                        <div className="home-cta-button-content">
                            <button>Connect With Us</button>
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div> */}
            <Cta />

            <div className="home-tech">
                <div className="home-tech-container">
                    <div className="home-tech-title">
                        <h1>An Innovation-Led Torchbearer of Technology</h1>
                        <p>Crafting the future of businesses through technology to build a better tomorrow</p>
                    </div>

                    <div className="home-tech-content">
                        <div className="home-tech-content-text animate-on-scroll" data-direction="left" data-delay="0.2">
                            <div className="home-tech-content-text-item">
                                <div>
                                    <h1>01</h1>
                                </div>
                                <p><span className="text-bold">How We Started :</span> {" "}We began our journey in 2010 with a vision to empower startups and enterprises to enter the digital realm and expand their horizons by connecting with global audiences.</p>
                            </div>

                            <div className="home-tech-content-text-item">
                                <div>
                                    <h1>02</h1>
                                </div>
                                <p><span className="text-bold">What Drives Us : </span> {" "}We are driven by the desire to build transformative technology solutions and applications that propel businesses forward and enable them to make a lasting impact in their respective industries.</p>
                            </div>
                        </div>

                        <div className="home-tech-content-image animate-on-scroll" data-direction="right" data-delay="0.2">
                            <img src="https://beta.softzway.com/images/team.webp" alt="" />
                        </div>
                    </div>

                    <div className="home-tech-grid">
                        {techGridItems.map((item, index) => (
                            <div className="home-tech-grid-item" key={index}>
                                <div className="home-tech-grid-item-image">
                                    {item.image}
                                </div>
                                <div className="home-tech-grid-item-content">
                                    <h3>{item.title} <sup>{item.sup}</sup></h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="home-trans">
                <div className="home-trans-container">
                    <div className="home-trans-title">
                        <h1>Bringing Digital Transformation Across Industries</h1>
                        <p>We develop Innovative solutions and apps for businesses across industries to redefine how they work and offer their products/services to customers.</p>
                    </div>

                    <div className="home-trans-grid">
                        {transGridItems.map((item, index) => (
                            <div
                                className={`home-trans-grid-item ${(index + 1) % 4 === 0 ? "no-right" : ""} ${index >= transGridItems.length - 4 ? "no-bottom" : ""}`}
                                key={index}>
                                <div className="home-trans-grid-img">
                                    <i className={`fa-solid ${item.image}`}></i>
                                </div>
                                <h3>{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <FutureSlider />

            <Testimonial />

            <div className="home-cta2">
                <div className="home-cta2-container">
                    <div className="home-cta2-title">
                        <h1>Ready to Transform Your Business?</h1>
                        <p>Build custom-made applications and solutions that enable your business to embrace innovation, drive growth, and achieve unparalleled success.</p>
                    </div>
                    <div className="home-cta2-button">
                        <Leftbutton leftbtn="Lets Talk"/>
                    </div>
                </div>
            </div>

            <div className="home-insight">
                <div className="home-insight-container">
                    <div className="home-insight-title">
                        <h1>Uncover Valuable Industry Insights</h1>
                        <p>Stay updated with the latest technology trends, news, and more, about the tech world.</p>
                    </div>

                    <div className="home-insight-grid">
                        {insightItems.map((item, index) => (
                            <div className="home-insight-grid-item" key={index}>
                                <img src={item.image} alt="" />
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Marquee />
            <Contact />

        </div>
    )
}

export default Home