import './SolutionsSection.css'
import Title from '../../reusables/title/Title'
import Rightbutton from '../../reusables/Rightbutton/Rightbutton'
import Leftbutton from '../../reusables/Leftbutton/Leftbutton'


function SolutionsSection({ title, p1, p2, p3 }) {
  return (
    <div className='aisolutions'>
        <div className="aisolutions-container">
            <Title title={title} />
            <p>{p1}</p>
            <p>{p2}</p>
            <p>{p3}</p>
            <div className="aisolutions-btns">
                <Leftbutton leftbtn="Talk To Our Experts" />
                <Rightbutton rightbtn="Schedule A Meeting" />
            </div>
        </div>
    </div>  
  )
}

export default SolutionsSection