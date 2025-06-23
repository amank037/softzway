import './Title.css'
function Title({ title }) {
    return (
        <div className='title-div'>
            <h1 className='title'>{title}</h1>
            <div className='title-line'></div>
        </div>
    )
}

export default Title