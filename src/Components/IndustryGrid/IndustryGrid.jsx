import Title from '../reusables/title/Title'
import './IndustryGrid.css'

const gridItems = [
    {
        title:"Finance",
        image:"/software/download.png"
    },
    {
        title:"Healthcare",
        image:"/software/download2.jpeg"
    },
    {
        title:"CleanTech",
        image:"/software/download3.jpeg"
    },
    {
        title:"Education and E-Learning",
        image:"/software/download4.jpeg"
    },
    {
        title:"Insurance",
        image:"/software/download5.jpeg"
    },
    {
        title:"Legal & Compliance",
        image:"/software/download6.jpeg"
    },
    {
        title:"HR Management",
        image:"/software/download7.jpeg"
    },
    {
        title:"Retail & E-Commerce",
        image:"/software/download8.jpeg"
    },
]

function IndustryGrid() {
  return (
    <div className='idg-div'>
        <div className="idg-container">
            <Title title="Serving a Range of Industries With Market Relevant Capabilities" />
            <div className='idg-grid'>
                {gridItems.map((item, index) => (
                    <div key={index} className='idg-grid-item'>
                        <h2>{item.title}</h2>
                        <img src={item.image} alt="" />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default IndustryGrid