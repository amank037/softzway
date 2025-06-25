import Title from '../../reusables/title/Title'
import './HireTable.css'

function HireTable({ title, tableData, description }) {
    return (
        <div className='hire-table-div'>
        <div className="hire-table-container">
            <Title title={title}/>
            <p>{description}</p>
            <div className='hire-table'>
            <table>
                <thead>
                <tr>
                    {tableData.headers.map((header, idx) => (
                    <th key={idx}>{header}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {tableData.rows.map((row, idx) => (
                    <tr key={idx}>
                    <td>{row.label}</td>
                    {row.values.map((value, vIdx) => (
                        <td key={vIdx}>{value}</td>
                    ))}
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
        </div>
    )
}

export default HireTable