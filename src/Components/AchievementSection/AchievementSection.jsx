import Title from '../reusables/title/Title'
import './AchievementSection.css'

function AchievementSection({ desc }) {
    return (
        <div className='ach-div'>
            <div className='ach-container'>
                <Title title="For Us, Passion and Vision matters more Than Company Size"/>
                <p>{desc}</p>
                <div className='ach-grid'>
                    <div className="ach-grid-item">
                        <h2 className='ach1'>25%</h2>
                        <div className='ach-grid-text'>
                            <h3>YOY Revenue Growth</h3>
                            <p>Steadily motivated </p>
                        </div>
                    </div>

                    <div className="ach-grid-item">
                        <h2 className='ach2'>500+</h2>
                        <div className='ach-grid-text'>
                            <h3>Projects Completed</h3>
                            <p>Looking forward & delivering excellence</p>
                        </div>
                    </div>

                    <div className="ach-grid-item">
                        <h2 className='ach3'>95%</h2>
                        <div className='ach-grid-text'>
                            <h3>Client Retention</h3>
                            <p>building lasting relationships through</p>
                        </div>
                    </div>

                    <div className="ach-grid-item">
                        <h2 className='ach3'>5/5</h2>
                        <div className='ach-grid-text'>
                            <h3>Industries Served</h3>
                            <p>progressively delivering excellence</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AchievementSection