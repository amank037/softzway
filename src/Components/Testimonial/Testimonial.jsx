import './Testimonial.css'
import {Swiper, SwiperSlide} from "swiper/react"
import { Navigation } from 'swiper/modules'
import 'swiper/css/navigation'

const testItems = [
    {
        title: "Rosana Ourens",
        subtitle: "Senior Fisheries Scientist, Cefas",
        description: "softzway delivered a successful platform through a collaborative partnership. Their team's flexibility and guidance were instrumental in meeting evolving requirements."
    },
    {
        title: "Murad Rzayev",
        subtitle: "COO, Capitalist AZ LLC",
        description: "softzway delivered an amazing app — the loading speed was good, and it had all the necessary features. The team completed all tasks on time and communicated clearly throughout the process."
    },
    {
        title: "Robbie Yin",
        subtitle: "ExxonMobil",
        description: "Overall, the collaboration was effective. We scheduled regular status update meetings to align on the progress, and there was no language barrier since both sides spoke English. They were agile in development and had great customer service."
    },
    {
        title: "Mr. Amit Raina",
        subtitle: "CTO, Sport Chain LLC",
        description: "Team at softzway offers excellent project management, as their timeliness, responsiveness, and flexibility are great. Moreover, their AI and blockchain expertise is outstanding."
    },
    {
        title: "May Mahboob",
        subtitle: "Co-Founder MBD Financials",
        description: "softzway’s work continues to meet expectations, thanks to consistent accomplishment of project milestones. The team is highly efficient from a workflow standpoint."
    },
    {
        title: "Devon Butler",
        subtitle: "CEO, Evolve Basketball",
        description: "softzway’s team has been efficient in their workflow. They use a combination of Basecamp and screen-sharing on Google Hangouts to communicate, which makes all parties informed about project."
    }
]


function Testimonial() {
    return (
        <div className='home-test'>
            <div className="home-test-container">
                <div className="home-test-title">
                    <h1>Transformational Partnerships: Hear from Our Clients</h1>
                    <p>Explore our client testimonials to learn how we have helped hundreds of startups and enterprises leverage technology for their growth and success.</p>
                </div>

                <div className='home-test-slider'>
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: '.home-test-next',
                            prevEl: '.home-test-prev'
                        }}
                        slidesPerView={2}
                        slidesPerGroup={1}
                        speed={800}
                        loop={true}
                        breakpoints={{
                            0: { slidesPerView: 1, slidesPerGroup: 1 },
                            600: { slidesPerView: 2, slidesPerGroup: 1 },
                            992: { slidesPerView: 2, slidesPerGroup: 1 }
                        }}
                    >
                        {testItems.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className='home-test-slide-item'>
                                    <div className='home-test-slide-top'>
                                        <h2>{item.title}</h2>
                                        <h3>{item.subtitle}</h3>
                                    </div>
                                    <div className='home-test-slide-bottom'>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        <div className='home-test-navigation'>
                            <div className="home-test-next"><svg width="35" height="16" viewBox="0 0 35 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35 8H2M2 8L9 1M2 8L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
                            <div className="home-test-prev"><svg width="35" height="16" viewBox="0 0 35 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 8H33M33 8L26 1M33 8L26 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Testimonial